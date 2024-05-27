import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { usePermissions } from "../hooks/usePermissions";

export const PermissionList = ({ onEdit }) => {
  const { permissions, isLoading } = usePermissions([]);

  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Lista de Permisos
      </Typography>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <List>
          {permissions.map((permission) => (
            <ListItem key={permission.id}>
              <ListItemText
                primary={`${permission.employeeName} ${permission.employeeLastName}`}
                secondary={
                  <>
                    {`Tipo: ${permission.permissionType.description}`}
                    <br />
                    {`Date: ${new Date(permission.date).toLocaleDateString()}`}
                  </>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => onEdit(permission)}
                >
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};
