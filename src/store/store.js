import {configureStore} from '@reduxjs/toolkit';

// Import your reducers
import authReducer from './reducers/authReducer';
import restaurantReducer from './reducers/restaurantReducer';
import cartReducer from './reducers/cartReducer';
import addressReducer from './reducers/addressReducer';
import orderReducer from "./reducers/orderReducer";
import restaurantDashboardReducer from "./reducers/restaurantDashboardReducer";
import registerReducer from "./reducers/registerReducer";

const store = configureStore({
    reducer: {
        restaurant: restaurantReducer,
        auth: authReducer,
        cart: cartReducer,
        address: addressReducer,
        order: orderReducer,
        restaurantDashboard: restaurantDashboardReducer,
        register: registerReducer
    },
});

export default store;
