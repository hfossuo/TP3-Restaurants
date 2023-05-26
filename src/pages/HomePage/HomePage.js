import './Homepage.css';
import React, {useEffect} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {fetchRestaurants, fetchRestaurantsFailure} from "../../store/actions/restaurantActions";

const HomePage = () => {
    const dispatch = useDispatch();
    const {restaurants} = useSelector((state) => state.restaurant);


    useEffect(() => {
        const fetchRestaurantData = () => {
            axios
                .get('/restaurants')
                .then((response) => {
                    const restaurantsData = response.data;
                    dispatch(fetchRestaurants(restaurantsData));
                })
                .catch((error) => {
                    console.error('Failed to fetch restaurants:', error);
                    dispatch(fetchRestaurantsFailure('Failed to fetch restaurants'));
                });
        };
        fetchRestaurantData();
    }, [dispatch]);


    return (
        <div className="restaurant-container">
            <div className="restaurant-card">
                {restaurants.map((restaurant) => (
                    <li key={restaurant.id}>
                        <h2 className="restaurant-name">{restaurant.name}</h2>
                        <img className="restaurant-image" src="restaurant1.jpg" alt="Restaurant"/>
                        <p className="restaurant-description">{restaurant.description}</p>
                        <p className="restaurant-image">{restaurant.rating}</p>
                        <p className="restaurant-details">{restaurant.address}</p>
                    </li>
                ))}
            </div>
        </div>

    );
};

export default HomePage;
