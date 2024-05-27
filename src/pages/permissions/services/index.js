import axios from 'axios';

const BASE_URL = 'http://localhost:5156/api';

export const getPermissions = async () => {
    const response = await axios.get(`${BASE_URL}/permission`);
    return response.data;
};

export const createPermission = async (permission) => {
    const response = await axios.post(`${BASE_URL}/permission`, permission);
    return response.data;
}

export const updatePermission = async (id, permission) => {
    const response = await axios.put(`${BASE_URL}/permission/${id}`, permission);
    return response.data;
}

export const getPermissionsType = async () => {
    const response = await axios.get(`${BASE_URL}/permissionType`);
    return response.data;
};
