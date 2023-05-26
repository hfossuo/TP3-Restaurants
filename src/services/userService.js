import api from './api';

export const getUserInfo = async () => {
    try {
        const response = await api.get('/user');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const updateUserDetails = async (userData) => {
    try {
        const response = await api.put('/user', userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Add more user-related functions as needed
