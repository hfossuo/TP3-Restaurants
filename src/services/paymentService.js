// paymentService.js

import axios from 'axios';

const API_BASE_URL = 'https://example.com/api'; // Update with your backend API URL

export const initiatePayment = async (paymentDetails) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payment/initiate`, paymentDetails);
        return response.data.paymentIntent;
    } catch (error) {
        throw new Error('Failed to initiate payment');
    }
};

export const confirmPayment = async (paymentIntentId) => {
    try {
        await axios.post(`${API_BASE_URL}/payment/confirm`, { paymentIntentId });
    } catch (error) {
        throw new Error('Failed to confirm payment');
    }
};
