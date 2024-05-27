import { getPermissionsType } from "../services";
import { useEffect, useState } from "react"

export const usePermissionType = () => {
    const [permissionType, setPermissionType] = useState([]);

    const listPermissionType = async () => {
        const permissionType = await getPermissionsType();
        const types = permissionType ?? [];
        types.unshift({ id: -1, description: '-- Seleccione --' });
        setPermissionType(types);
    }

    useEffect(() => { 
        listPermissionType();
    }, []);

    return {
        permissionTypes: permissionType,
    }

}