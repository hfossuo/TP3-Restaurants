import api from './api';

export const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const logout = async () => {
    try {
        await api.post('/auth/logout');
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Add more authentication-related functions as needed
