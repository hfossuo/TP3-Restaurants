// reducers/orderReducer.js

const initialState = {
    customerOrders: [],
    error: null,
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CUSTOMER_ORDERS_SUCCESS':
            return { ...state, customerOrders: action.payload, error: null };
        case 'FETCH_CUSTOMER_ORDERS_FAILURE':
            return { ...state, error: action.payload };
        default:
            return state;
    }
};

export default orderReducer;
