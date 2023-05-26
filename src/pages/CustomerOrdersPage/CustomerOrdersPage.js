import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCustomerOrders } from '../../store/actions/orderActions';

const CustomerOrdersPage = () => {
    const dispatch = useDispatch();
    const customerOrders = useSelector((state) => state.order.customerOrders);

    useEffect(() => {
        dispatch(fetchCustomerOrders());
    }, [dispatch]);

    return (
        <div>
            <h1>My Orders</h1>
            <ul>
                {customerOrders.map((order) => (
                    <li key={order.id}>
                        <div>Order ID: {order.id}</div>
                        <div>Order Total: {order.total}</div>
                        {/* Render additional order details */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerOrdersPage;
