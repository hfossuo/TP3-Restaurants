import {
    FETCH_RESTAURANT_DASHBOARD_REQUEST,
    FETCH_RESTAURANT_DASHBOARD_SUCCESS,
    FETCH_RESTAURANT_DASHBOARD_FAILURE,
    UPDATE_RESTAURANT_DASHBOARD_REQUEST,
    UPDATE_RESTAURANT_DASHBOARD_SUCCESS,
    UPDATE_RESTAURANT_DASHBOARD_FAILURE,
    FETCH_RESTAURANT_ORDERS_REQUEST,
    FETCH_RESTAURANT_ORDERS_SUCCESS,
    FETCH_RESTAURANT_ORDERS_FAILURE,
    UPDATE_ORDER_STATUS_REQUEST,
    UPDATE_ORDER_STATUS_SUCCESS,
    UPDATE_ORDER_STATUS_FAILURE,
} from '../actions/types';

const initialState = {
    dashboardData: {},
    orders: [],
    loading: false,
    error: null,
};

const restaurantDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTAURANT_DASHBOARD_REQUEST:
        case UPDATE_RESTAURANT_DASHBOARD_REQUEST:
        case FETCH_RESTAURANT_ORDERS_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_RESTAURANT_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                dashboardData: action.payload,
            };
        case UPDATE_RESTAURANT_DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                dashboardData: action.payload,
            };
        case FETCH_RESTAURANT_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        case UPDATE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: state.orders.map((order) =>
                    order.id === action.payload.id ? action.payload : order
                ),
            };
        case FETCH_RESTAURANT_DASHBOARD_FAILURE:
        case UPDATE_RESTAURANT_DASHBOARD_FAILURE:
        case FETCH_RESTAURANT_ORDERS_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default restaurantDashboardReducer;
