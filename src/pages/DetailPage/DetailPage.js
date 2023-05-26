import React from 'react';

const DetailPage = () => {
    // Example data for detail information
    const detailInfo = {
        title: 'Product Title',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 9.99,
        image: 'path/to/image.jpg',
    };

    return (
        <div className="detail-page">
            <div className="detail-image">
                <img src={detailInfo.image} alt="Product" />
            </div>
            <div className="detail-info">
                <h2 className="detail-title">{detailInfo.title}</h2>
                <p className="detail-description">{detailInfo.description}</p>
                <p className="detail-price">Price: ${detailInfo.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default DetailPage;
