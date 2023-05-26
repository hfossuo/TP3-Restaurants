import api from './api';

export const getAllProducts = async () => {
    try {
        const response = await api.get('/products');
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await api.get(`/products/${productId}`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Add more product-related functions as needed
