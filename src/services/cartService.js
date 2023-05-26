import api from './api';
import axios from "axios";

export const addToCart = async (productId, quantity) => {
    try {
        const response = await api.post('/cart/add', { productId, quantity });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

export const updateCartItem = async (cartItemId, quantity) => {
    try {
        const response = await api.put(`/cart/update/${cartItemId}`, { quantity });
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message);
    }
};

// Add more cart-related functions as needed

export const removeFromCart = async (itemId) => {
    try {
        const response = await axios.delete(`/cart/${itemId}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to remove item from cart.');
    }
};
