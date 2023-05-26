import axios from 'axios';
import {
    FETCH_RESTAURANT_ORDERS_REQUEST,
    FETCH_RESTAURANT_ORDERS_SUCCESS,
    FETCH_RESTAURANT_ORDERS_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,

    FETCH_RESTAURANT_DASHBOARD_REQUEST,
    FETCH_RESTAURANT_DASHBOARD_SUCCESS,
    FETCH_RESTAURANT_DASHBOARD_FAILURE,
    UPDATE_RESTAURANT_DASHBOARD_REQUEST,
    UPDATE_RESTAURANT_DASHBOARD_SUCCESS,
    UPDATE_RESTAURANT_DASHBOARD_FAILURE
} from './types';


export const fetchRestaurantDashboardRequest = () => {
    return {
        type: FETCH_RESTAURANT_DASHBOARD_REQUEST,
    };
};

export const fetchRestaurantDashboardSuccess = (data) => {
    return {
        type: FETCH_RESTAURANT_DASHBOARD_SUCCESS,
        payload: data,
    };
};

export const fetchRestaurantDashboardFailure = (error) => {
    return {
        type: FETCH_RESTAURANT_DASHBOARD_FAILURE,
        payload: error,
    };
};

export const updateRestaurantDashboardRequest = () => {
    return {
        type: UPDATE_RESTAURANT_DASHBOARD_REQUEST,
    };
};

export const updateRestaurantDashboardSuccess = () => {
    return {
        type: UPDATE_RESTAURANT_DASHBOARD_SUCCESS,
    };
};

export const updateRestaurantDashboardFailure = (error) => {
    return {
        type: UPDATE_RESTAURANT_DASHBOARD_FAILURE,
        payload: error,
    };
};

// Action to get restaurant dashboard
export const getRestaurantDashboard = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_RESTAURANT_DASHBOARD_REQUEST });

        const response = await axios.get('/api/restaurant/dashboard');
        const dashboardData = response.data;

        dispatch({
            type: FETCH_RESTAURANT_DASHBOARD_SUCCESS,
            payload: dashboardData,
        });
    } catch (error) {
        dispatch({
            type: FETCH_RESTAURANT_DASHBOARD_FAILURE,
            payload: error.response?.data.message || error.message,
        });
    }
};
// Thunk function to update restaurant dashboard data
export const updateRestaurantDashboard = (updatedData) => {
    return (dispatch) => {
        dispatch(updateRestaurantDashboardRequest());

        axios
            .put('/api/restaurant/dashboard', updatedData)
            .then(() => {
                dispatch(updateRestaurantDashboardSuccess());
            })
            .catch((error) => {
                dispatch(updateRestaurantDashboardFailure(error.message));
            });
    };
};
// Thunk function to fetch restaurant dashboard data
export const fetchRestaurantDashboard = () => {
    return (dispatch) => {
        dispatch(fetchRestaurantDashboardRequest());

        axios
            .get('/api/restaurant/dashboard')
            .then((response) => {
                const data = response.data;
                dispatch(fetchRestaurantDashboardSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchRestaurantDashboardFailure(error.message));
            });
    };
};

// Action to update order status
export const updateOrderStatus = (orderId, status) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });

        const response = await axios.put(`/api/restaurant/orders/${orderId}`, { status });
        const updatedOrder = response.data;

        dispatch({
            type: UPDATE_ORDER_STATUS_SUCCESS,
            payload: updatedOrder,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_ORDER_STATUS_FAILURE,
            payload: error.response?.data.message || error.message,
        });
    }
};

// Action to fetch restaurant orders
export const fetchRestaurantOrders = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_RESTAURANT_ORDERS_REQUEST });

        const response = await axios.get('/api/restaurant/orders');
        const orders = response.data;

        dispatch({
            type: FETCH_RESTAURANT_ORDERS_SUCCESS,
            payload: orders,
        });
    } catch (error) {
        dispatch({
            type: FETCH_RESTAURANT_ORDERS_FAILURE,
            payload: error.response?.data.message || error.message,
        });
    }
};
