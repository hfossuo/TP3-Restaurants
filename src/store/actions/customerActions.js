import axios from 'axios';
import {
    FETCH_CUSTOMERS_REQUEST,
    FETCH_CUSTOMERS_SUCCESS,
    FETCH_CUSTOMERS_FAILURE,
} from './types';

// Action creator to fetch customers
export const fetchCustomers = () => {
    return (dispatch) => {
        dispatch(fetchCustomersRequest());
        axios
            .get('/api/customers')
            .then((response) => {
                const customers = response.data;
                dispatch(fetchCustomersSuccess(customers));
            })
            .catch((error) => {
                const errorMessage = error.message;
                dispatch(fetchCustomersFailure(errorMessage));
            });
    };
};

// Action creator for fetch customers request
const fetchCustomersRequest = () => {
    return {
        type: FETCH_CUSTOMERS_REQUEST,
    };
};

// Action creator for fetch customers success
const fetchCustomersSuccess = (customers) => {
    return {
        type: FETCH_CUSTOMERS_SUCCESS,
        payload: customers,
    };
};

// Action creator for fetch customers failure
const fetchCustomersFailure = (error) => {
    return {
        type: FETCH_CUSTOMERS_FAILURE,
        payload: error,
    };
};
