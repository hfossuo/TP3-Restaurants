// actions/orderReducer.js

import axios from 'axios';

export const fetchCustomerOrders = () => async (dispatch) => {
    try {
        const response = await axios.get('/api/orders'); // Adjust the API endpoint as per your backend
        const customerOrders = response.data;
        dispatch({ type: 'FETCH_CUSTOMER_ORDERS_SUCCESS', payload: customerOrders });
    } catch (error) {
        dispatch({ type: 'FETCH_CUSTOMER_ORDERS_FAILURE', payload: error.message });
    }
};
