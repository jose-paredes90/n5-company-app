import { Box, Button, Container, IconButton, MenuItem, Select, TextField, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, FormHelperText } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from "react-hook-form";
import { createPermission, updatePermission } from '../services';
import { useEffect } from "react";
import { usePermissionType } from "../hooks/usePermissionType";

export const PermissionForm = ({ open, handleClose, onPermissionCreated, permission, permissionType, onPermissionUpdated }) => {
    const { permissionTypes } = usePermissionType([]);
    const { control, handleSubmit, reset, setValue, trigger, formState: { isValid } } = useForm({
        mode: 'onChange',
        defaultValues: {
            employeeName: '',
            employeeLastName: '',
            permissionTypeId: -1
        }
    });

    useEffect(() => {
        setValue('employeeName', permission?.employeeName ?? '');
        setValue('employeeLastName', permission?.employeeLastName ?? '');
        setValue('permissionTypeId', permission?.permissionType?.id ?? '');
        if (permission) {
            trigger();
        } else {
            reset();
        }
    }, [permission]);

    const onSubmit = async (data) => {
        try {
            if (permission) {
                await updatePermission(permission.id, data);
                onPermissionUpdated();
            } else {
                await createPermission(data);
                onPermissionCreated();
            }
            reset();
        } catch (error) {
            console.log('Error creating permission', error);
        }
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle>{permission ? 'Editar Permiso' : 'Crear Permiso'}</DialogTitle>
            <IconButton
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
                >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
            <Container>
                {/* <Typography variant="h4" component="h1" gutterBottom>
                    Crear Permiso
                </Typography> */}
                <Box component="form" 
                    onSubmit={handleSubmit(onSubmit)} 
                    sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <Controller
                        name="employeeName"
                        control={control}
                        rules={{ required: 'Nombre empleado es obligatorio' }}
                        render={({ field, fieldState }) => 
                            <TextField {...field} 
                                label="Nombre empleado" 
                                variant="outlined" 
                                error={!!fieldState.error}
                                helperText={fieldState.error ? fieldState.error.message : null} /> 
                        }
                    />

                    <Controller 
                        name="employeeLastName"
                        control={control}
                        rules={{ required: 'Apellido empleado es obligatorio' }}
                        render={({ field, fieldState }) => 
                        <TextField 
                            {...field} 
                            label="Apellido empleado" 
                            variant="outlined"
                            error={!!fieldState.error}
                            helperText={fieldState.error ? fieldState.error.message : null} />}
                    />
                    <Controller
                        name="permissionTypeId"
                        control={control}
                        rules={{ required: 'Tipo permiso es obligatorio', min: { value: 1, message: 'Debe seleccionar un tipo de permiso' } }}
                        render={({ field, fieldState }) => (
                            <FormControl variant="outlined" margin="normal" fullWidth error={!!fieldState.error}>
                                <InputLabel id="permission-type">Tipo permiso</InputLabel>
                                <Select {...field} 
                                    label="Tipo permiso"
                                    labelId="permission-type"
                                    error={!!fieldState.error}>
                                    {permissionTypes.map((type) => (
                                        <MenuItem key={type.id} value={type.id}>
                                        {type.description}
                                        </MenuItem>
                                    ))}
                                </Select>
                                {fieldState.error && <FormHelperText>{fieldState.error.message}</FormHelperText>}
                            </FormControl>
                        )}
                    />

                    <DialogActions>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={!isValid}>
                            Guardar
                        </Button>
                        <Button onClick={handleClose} color="secondary" variant="outlined">Cancelar</Button>
                    </DialogActions>
                </Box>
            </Container>
            </DialogContent>
            {/* <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
            </DialogActions> */}
        </Dialog>
    );

}