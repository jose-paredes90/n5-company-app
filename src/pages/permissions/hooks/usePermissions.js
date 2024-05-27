import { useEffect, useState } from "react"
import { getPermissions } from '../services/index';

export const usePermissions = () => {
    const [permissions, setPermissions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const listPermissions = async () => {
        const permissions = await getPermissions();
        setPermissions(permissions);
        setIsLoading(false);
    }

    useEffect(() => { 
        listPermissions();
    }, []);

    return {
        permissions,
        isLoading
    }

}