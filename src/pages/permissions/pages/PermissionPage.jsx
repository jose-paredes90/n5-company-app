import { Container, Button  } from '@mui/material';
import { useState } from 'react';
import { PermissionForm } from '../components/PermissionForm';
import { PermissionList } from '../components/PermissionList';

export const PermissionPage = () => {

    const [refresh, setRefresh] = useState(false);
    const [currentPermission, setCurrentPermission] = useState(null);

    const [open, setOpen] = useState(false);
    
    const handleCreatePermission = () => {
        setCurrentPermission(null);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handlePermissionCreated = () => {
        setRefresh(!refresh);
        handleClose();
    };

    const handleEditPermission = (permission) => {
        setCurrentPermission(permission);
        setOpen(true);
    };

    const handlePermissionUpdated = () => {
        setRefresh(!refresh);
        handleClose();
    };

    return (
        <Container>

          <div style={{ textAlign: 'right' }}>
            <Button variant="contained" onClick={handleCreatePermission} color="primary">
              Crear permiso
            </Button>
          </div>
            <PermissionForm 
                onPermissionCreated={handlePermissionCreated} 
                onPermissionUpdated={handlePermissionUpdated}
                handleClose={handleClose} 
                open={open} 
                permission={currentPermission} />

            <PermissionList key={refresh} onEdit={handleEditPermission} />
        </Container>
    );
}