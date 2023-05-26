import { ADD_ADDRESS, DELETE_ADDRESS } from '../actions/types';

const initialState = {
    addresses: [],
};

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ADDRESS:
            return {
                ...state,
                addresses: [...state.addresses, action.payload],
            };
        case DELETE_ADDRESS:
            return {
                ...state,
                addresses: state.addresses.filter((address) => address.id !== action.payload),
            };
        default:
            return state;
    }
};

export default addressReducer;
