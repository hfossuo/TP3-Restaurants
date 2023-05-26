// src/components/HomePage.js
import '../globalStyles.css';
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            // Replace with your actual API endpoint
            const response = await fetch("/restaurant/nearby");

            if (!response.ok) {
                throw new Error("Failed to fetch");
            }

            const data = await response.json();
            setRestaurants(data);
        };

        fetchRestaurants();
    }, []);
    return (
        <div className="homepage-container">
            <header className="header">
                <h1>Welcome to our Restaurant App!</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <section className="section">
                <h2>Featured Restaurants:</h2>
                <div className="featured-restaurants">
                    {restaurants.map((restaurant) => (
                        <div key={restaurant.id} className="restaurant-card">
                            <h3>{restaurant.name}</h3>
                            <p>{restaurant.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <div>
                    <h3>About Us</h3>
                    <p>Details about your app or company</p>
                </div>
                <div>
                    <h3>Contact</h3>
                    <p>Contact information</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
