import axios from 'axios';
import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './types';
import {toast} from "react-toastify";

// Action creator for successful login
export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    };
};

// Action creator for login failure
export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
};

// Async action to perform login
export const login = (email, password) => {
    return (dispatch) => {
        axios
            .post('/api/login', { email, password })
            .then((response) => {
                // Assuming the API response contains user data
                const user = response.data.user;
                dispatch(loginSuccess(user));
                toast.success('Login successful');
            })
            .catch((error) => {
                dispatch(loginFailure(error.response.data.error));
                toast.error('Login failed');
            });
    };
};

