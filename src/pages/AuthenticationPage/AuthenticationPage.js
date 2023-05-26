import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login} from '../../store/actions/authActions';
import '../../Login.css'

const AuthenticationPage = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch login action
        dispatch(login(email, password));
        // Reset form fields
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <h2>Authentication</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={handlePasswordChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AuthenticationPage;
