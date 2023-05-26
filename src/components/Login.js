import React, {useState} from 'react';
import crypto from 'crypto-browserify';
import '../Login.css';  // in Login.js

function Login() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const hash = crypto.createHash('sha256');
        hash.update(password);
        const hashedPassword = hash.digest('hex');

        // Sending hashedPassword and username to the server
        fetch('https://your-api-url.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: hashedPassword
            })
        })
            .then(response => {
                if (!response.ok) throw new Error("HTTP status " + response.status);
                return response.json();
            })
            .then(data => {
                // Handle the response data from the server here
                // For example, if the server returns a token and user information, you might do:
                console.log("User successfully logged in");

                // You can save the token in localStorage or in a cookie for future authenticated requests
                localStorage.setItem('token', data.token);

                // Handle the user data as needed
                console.log(data.user);
            })
            .catch((error) => {
                console.error('Error:', error);
                setError('Login failed, please check your username and password and try again.');
            });
    };

    return (
        <div className="login-container">

            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="username">Username</label>
                <input type="text" value={username} onChange={handleUsernameChange}/>
                <label htmlFor="password">Password</label>
                <input type="password" value={password} onChange={handlePasswordChange}/>
                <button type="submit">Log In</button>
            </form>
        </div>

    );
}

export default Login;
