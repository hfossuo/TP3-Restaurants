// Action creator for the register request
import {REGISTER_FAILURE, REGISTER_SUCCESS} from "./types";
import axios from "axios";
import { toast } from 'react-toastify';

export const register = (userData) => {
    return (dispatch) => {
        // Perform register API request
        axios
            .post('/api/register', userData)
            .then((response) => {
                // Dispatch register success action
                dispatch(registerSuccess(response.data));
                // Show success toast notification
                toast.success('Registration successful');
            })
            .catch((error) => {
                // Dispatch register failure action
                dispatch(registerFailure(error.message));
                // Show error toast notification
                toast.error('Registration failed');
            });
    };
};

const registerSuccess = (user) => {
    return {
        type: 'REGISTER_SUCCESS',
        payload: user,
    };
};

const registerFailure = (error) => {
    return {
        type: 'REGISTER_FAILURE',
        payload: error,
    };
};
