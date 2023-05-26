import axios from 'axios';

// Action Types
export const FETCH_DASHBOARD_DATA_REQUEST = 'FETCH_DASHBOARD_DATA_REQUEST';
export const FETCH_DASHBOARD_DATA_SUCCESS = 'FETCH_DASHBOARD_DATA_SUCCESS';
export const FETCH_DASHBOARD_DATA_FAILURE = 'FETCH_DASHBOARD_DATA_FAILURE';

// Action Creators
export const fetchDashboardDataRequest = () => {
    return {
        type: FETCH_DASHBOARD_DATA_REQUEST,
    };
};

export const fetchDashboardDataSuccess = (data) => {
    return {
        type: FETCH_DASHBOARD_DATA_SUCCESS,
        payload: data,
    };
};

export const fetchDashboardDataFailure = (error) => {
    return {
        type: FETCH_DASHBOARD_DATA_FAILURE,
        payload: error,
    };
};

// Thunk function to fetch dashboard data
export const fetchDashboardData = () => {
    return (dispatch) => {
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch the dashboard data
        axios
            .get('/api/dashboard')
            .then((response) => {
                const data = response.data;
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch analytics data
export const fetchAnalyticsData = () => {
    // Implement your API call to fetch analytics data
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch analytics data
        axios
            .get('/api/analytics')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch sales data
export const fetchSalesData = () => {
    // Implement your API call to fetch sales data
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch sales data
        axios
            .get('/api/sales')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch orders
export const fetchOrders = () => {
    // Implement your API call to fetch orders
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch orders
        axios
            .get('/api/orders')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch menu items
export const fetchMenuItems = () => {
    // Implement your API call to fetch menu items
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch menu items
        axios
            .get('/api/menu-items')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch reviews
export const fetchReviews = () => {
    // Implement your API call to fetch reviews
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch reviews
        axios
            .get('/api/reviews')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch customers
export const fetchCustomers = () => {
    // Implement your API call to fetch customers
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch customers
        axios
            .get('/api/customers')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch inventory
export const fetchInventory = () => {
    // Implement your API call to fetch inventory
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch inventory
        axios
            .get('/api/inventory')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch revenue
export const fetchRevenue = () => {
    // Implement your API call to fetch revenue
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch revenue
        axios
            .get('/api/revenue')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};

// Thunk function to fetch delivery dishes
export const fetchDeliveryDishes = () => {
    // Implement your API call to fetch delivery dishes
    return (dispatch) => {
        // Dispatch the request action
        dispatch(fetchDashboardDataRequest());

        // Make an API call to fetch delivery dishes
        axios
            .get('/api/delivery-dishes')
            .then((response) => {
                const data = response.data;
                // Dispatch the success action with the fetched data
                dispatch(fetchDashboardDataSuccess(data));
            })
            .catch((error) => {
                // Dispatch the failure action with the error message
                dispatch(fetchDashboardDataFailure(error.message));
            });
    };
};
