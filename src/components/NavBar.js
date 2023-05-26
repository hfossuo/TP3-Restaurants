import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
        <div className="logo">
            <Link to="/">My Restaurant App</Link>
        </div>
        <ul className="nav-links">
            <li>
                <Link to="/restaurants">Restaurants</Link>
            </li>
            <li>
                <Link to="/customer/orders">My Orders</Link>
            </li>
            <li>
                <Link to="/cart">Cart</Link>
            </li>
            <li>
                <Link to="/authentication">Login</Link>
            </li>
            <li>
            <Link to="/register">Register</Link>
            </li>

        </ul>
    </nav>
    );
}

export default NavBar;
