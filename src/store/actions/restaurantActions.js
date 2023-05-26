import axios from 'axios';
import {
    GET_RESTAURANT_BY_ID,
    CREATE_RESTAURANT,
    UPDATE_RESTAURANT,
    DELETE_RESTAURANT,
    GET_RESTAURANT_DASHBOARD,
    UPDATE_RESTAURANT_DASHBOARD,
    FETCH_RESTAURANTS,
} from './types';

// Fetch all restaurants
export const fetchRestaurants = () => async (dispatch) => {
    try {
        const res = await axios.get('/restaurants');
        dispatch({
            type: FETCH_RESTAURANTS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'RESTAURANT_ERROR',
            payload: { error: 'Error fetching restaurants' },
        });
    }
};


export const fetchRestaurantsFailure = (error) => {
    return {
        type: 'FETCH_RESTAURANTS_FAILURE',
        payload: error,
    };
};

// Get restaurant by ID
export const getRestaurantById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`/restaurants/${id}`);
        dispatch({
            type: GET_RESTAURANT_BY_ID,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'RESTAURANT_ERROR',
            payload: { error: 'Error fetching restaurant by ID' },
        });
    }
};

// Create restaurant
export const createRestaurant = (restaurantData) => async (dispatch) => {
    try {
        const res = await axios.post('/restaurants', restaurantData);
        dispatch({
            type: CREATE_RESTAURANT,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'RESTAURANT_ERROR',
            payload: { error: 'Error creating restaurant' },
        });
    }
};

// Update restaurant
export const updateRestaurant = (id, restaurantData) => async (dispatch) => {
    try {
        const res = await axios.put(`/restaurants/${id}`, restaurantData);
        dispatch({
            type: UPDATE_RESTAURANT,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'RESTAURANT_ERROR',
            payload: { error: 'Error updating restaurant' },
        });
    }
};

// Delete restaurant
export const deleteRestaurant = (id) => async (dispatch) => {
    try {
        await axios.delete(`/restaurants/${id}`);
        dispatch({
            type: DELETE_RESTAURANT,
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: 'RESTAURANT_ERROR',
            payload: { error: 'Error deleting restaurant' },
        });
    }
};

// Get restaurant dashboard
export const getRestaurantDashboard = (restaurantId) => async (dispatch) => {
    try {
        const res = await axios.get(`/restaurant/dashboard/${restaurantId}`);
        dispatch({
            type: GET_RESTAURANT_DASHBOARD,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'RESTAURANT_ERROR',
            payload: { error: 'Error fetching restaurant dashboard' },
        });
    }
};

// Update restaurant dashboard
export const updateRestaurantDashboard = (restaurantId, dashboardData) => async (dispatch) => {
    try {
        const res = await axios.put(`/restaurant/dashboard/${restaurantId}`, dashboardData);
        dispatch({
            type: UPDATE_RESTAURANT_DASHBOARD,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: 'RESTAURANT_ERROR',
            payload: { error: 'Error updating restaurant dashboard' },
        });
    }
};
