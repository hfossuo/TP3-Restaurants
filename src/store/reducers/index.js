import { combineReducers } from 'redux';
import restaurantReducer from './restaurantReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";
import restaurantDashboardReducer from './restaurantDashboardReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    restaurant: restaurantReducer,
    cart: cartReducer,
    address: addressReducer,
    order: orderReducer,
    restaurantDashboard: restaurantDashboardReducer,

});

export default rootReducer;
