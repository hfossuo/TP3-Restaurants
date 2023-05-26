import React, { useEffect, useRef } from 'react';
import { useLoadScript } from '@react-google-maps/api';

const Map = ({ center, zoom, markers }) => {
    const mapContainerRef = useRef(null);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBY-dKkXteyewO1dxZeFfV5oj9E4EfdyDk',
    });

    useEffect(() => {
        if (isLoaded) {
            const map = new window.google.maps.Map(mapContainerRef.current, {
                center,
                zoom,
            });

            // Add markers to the map
            markers.forEach((marker) => {
                new window.google.maps.Marker({
                    position: marker.position,
                    map,
                    title: marker.title,
                });
            });
        }
    }, [isLoaded, center, zoom, markers]);

    if (loadError) {
        return <div>Error loading map</div>;
    }

    return (
        <div
            ref={mapContainerRef}
            style={{ width: '100%', height: '400px' }}
        ></div>
    );
};

export default Map;
