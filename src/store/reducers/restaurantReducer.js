import {
    FETCH_RESTAURANTS_REQUEST,
    FETCH_RESTAURANTS_SUCCESS,
    FETCH_RESTAURANTS_FAILURE
} from '../actions/types';

const initialState = {
    loading: false,
    error: null,
    restaurants: [],
};

const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_RESTAURANTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                restaurants: action.payload,
            };
        case FETCH_RESTAURANTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                restaurants: [],
            };
        default:
            return state;
    }
};

export default restaurantReducer;
