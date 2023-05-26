import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAnalyticsData, fetchSalesData, fetchOrders, fetchMenuItems, fetchReviews, fetchCustomers, fetchInventory, fetchRevenue, fetchDeliveryDishes } from '../store/actions/dashboardActions';
import '../../public/assets/styles/dashboard.css'; // Import the CSS file for Dashboard styles
import { fetchDashboardData } from '../store/actions/dashboardActions';

const Dashboard = () => {
    useEffect(() => {
        dispatch(fetchAnalyticsData());
        dispatch(fetchSalesData());
        dispatch(fetchOrders());
        dispatch(fetchMenuItems());
        dispatch(fetchReviews());
        dispatch(fetchCustomers());
        dispatch(fetchDashboardData());
        dispatch(fetchInventory());
        dispatch(fetchRevenue());
        dispatch(fetchDeliveryDishes());
    }, [dispatch]);

    const analyticsData = useSelector((state) => state.dashboard.analyticsData);
    const salesData = useSelector((state) => state.dashboard.salesData);
    const orders = useSelector((state) => state.dashboard.orders);
    const menuItems = useSelector((state) => state.dashboard.menuItems);
    const reviews = useSelector((state) => state.dashboard.reviews);
    const customers = useSelector((state) => state.dashboard.customers);
    const inventory = useSelector((state) => state.dashboard.inventory);
    const revenue = useSelector((state) => state.dashboard.revenue);
    const deliveryDishes = useSelector((state) => state.dashboard.deliveryDishes);
    const dispatch = useDispatch();
    const dashboardData = useSelector((state) => state.dashboard.data);
    const user = useSelector((state) => state.auth.user);


    return (
        <div className="dashboard">
            <div className="dashboard-card">
                <h2>Welcome, {user.name}!</h2>
                <h2>Analytics Overview</h2>
                <p>Total Orders: {analyticsData.totalOrders}</p>
                <p>Total Revenue: {analyticsData.totalRevenue}</p>
            </div>

            <div className="dashboard-card">
                <h2>Sales Tracking</h2>
                {/* Display sales tracking information */}
                <p>Today's Sales: {dashboardData.todaySales}</p>
                <p>Monthly Sales: {dashboardData.monthlySales}</p>
            </div>

            <div className="dashboard-card">
                <h2>Order Management</h2>
                {/* Display order management functionality */}
                <ul>
                    {dashboardData.recentOrders.map((order) => (
                        <li key={order.id}>{order.orderNumber}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-card">
                <h2>Menu Management</h2>
                {/* Display menu management functionality */}
                <ul>
                    {dashboardData.menuItems.map((menuItem) => (
                        <li key={menuItem.id}>{menuItem.name}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-card">
                <h2>Reviews and Ratings</h2>
                {/* Display reviews and ratings functionality */}
                <ul>
                    {dashboardData.recentReviews.map((review) => (
                        <li key={review.id}>{review.rating} stars - {review.comment}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-card">
                <h2>Customer Management</h2>
                {/* Display customer management functionality */}
                <ul>
                    {dashboardData.customers.map((customer) => (
                        <li key={customer.id}>{customer.name}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-card">
                <h2>Inventory Management</h2>
                {/* Display inventory management functionality */}
                <ul>
                    {dashboardData.inventoryItems.map((item) => (
                        <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
                    ))}
                </ul>
            </div>

            <div className="dashboard-card">
                <h2>Revenue Reporting</h2>
                <p>Total Revenue: {dashboardData.totalRevenue}</p>
                <p>Monthly Revenue: {dashboardData.monthlyRevenue}</p>
            </div>

            <div className="dashboard-card">
                <h2>Cart</h2>
                <p>Number of Items in Cart: {dashboardData.cartItems}</p>
            </div>

            <div className="dashboard-card">
                <h2>Delivery Dishes</h2>
                <p>Today's Special: {dashboardData.todaySpecial}</p>
            </div>
        </div>
    );
};

export default Dashboard;
