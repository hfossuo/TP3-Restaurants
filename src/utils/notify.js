import { toast } from 'react-toastify';

export const showSuccessNotification = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
    });
};

export const showErrorNotification = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
    });
};

export const showInfoNotification = (message) => {
    toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
    });
};

export const showWarningNotification = (message) => {
    toast.warning(message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
    });
};
