import axios from "axios";

export const fetchNearbyRestaurants = async (latitude, longitude) => {
    try {
        const response = await axios.get('/api/restaurants', {
            params: {
                latitude,
                longitude,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch nearby restaurants');
    }
};
