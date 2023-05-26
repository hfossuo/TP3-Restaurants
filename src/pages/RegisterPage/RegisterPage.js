import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../store/actions/registerActions';

const RegisterPage = () => {
    const dispatch = useDispatch();
    const registrationError = useSelector((state) => state.register.error);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = () => {
        // Prepare user data
        const userData = {
            email,
            password,
            role,
        };

        // Dispatch register action
        dispatch(register(userData));
    };

    return (
        <div>
            <h1>Register</h1>
            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="">Select Role</option>
                    <option value="customer">Customer</option>
                    <option value="restaurant">Restaurant</option>
                </select>
                {registrationError && <p>Error: {registrationError}</p>}
                <button type="button" onClick={handleRegister}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;
