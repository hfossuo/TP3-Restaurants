import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../../store/actions/customerActions';

const CustomersPage = ({ customers, fetchCustomers }) => {
    useEffect(() => {
        fetchCustomers();
    }, [fetchCustomers]);

    return (
        <div>
            <h2>Customers</h2>
            {customers.map((customer) => (
                <div key={customer.id}>
                    <p>Name: {customer.name}</p>
                    <p>Email: {customer.email}</p>
                    {/* Add more customer details */}
                </div>
            ))}
        </div>
    );
};

// Redux mappings
const mapStateToProps = (state) => ({
    customers: state.customers,
});

const mapDispatchToProps = {
    fetchCustomers,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersPage);

