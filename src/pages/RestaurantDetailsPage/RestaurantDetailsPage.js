import React from 'react';

const RestaurantDetailsPage = () => {
    // Component code...

    return (
        <div>
            {/* Restaurant details */}
            <div className="restaurant-container">
                <div className="restaurant-card">
                    <h2 className="restaurant-name">Restaurant Name</h2>
                    <img className="restaurant-image" src="../../public/assets/images/restaurant1.jpg" alt="Restaurant" />
                    <p className="restaurant-description">Restaurant Description</p>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetailsPage;
