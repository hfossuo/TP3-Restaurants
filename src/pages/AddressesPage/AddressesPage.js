import React, { useState } from 'react';

const AddressPage = () => {
    const [address, setAddress] = useState({
        fullName: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any additional logic with the address data
        console.log(address);
        // Reset the form
        setAddress({
            fullName: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
        });
    };

    return (
        <div>
            <h2>Shipping Address</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={address.fullName} onChange={handleChange} required />
                <label htmlFor="street">Street Address:</label>
                <input type="text" id="street" name="street" value={address.street} onChange={handleChange} required />
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" value={address.city} onChange={handleChange} required />
                <label htmlFor="state">State:</label>
                <input type="text" id="state" name="state" value={address.state} onChange={handleChange} required />
                <label htmlFor="zipCode">ZIP Code:</label>
                <input type="text" id="zipCode" name="zipCode" value={address.zipCode} onChange={handleChange} required />
                <button type="submit">Save Address</button>
            </form>
        </div>
    );
};

export default AddressPage;
