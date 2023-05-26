import React, { useEffect } from 'react';

const PayPalForm = () => {
    useEffect(() => {
        // Load the PayPal SDK asynchronously
        const loadPayPalSDK = async () => {
            try {
                await window.paypal.Buttons({
                    createOrder: (data, actions) => {
                        // Create the PayPal order
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: 'USD',
                                        value: '10.00',
                                    },
                                },
                            ],
                        });
                    },
                    onApprove: (data, actions) => {
                        // Handle the approved payment
                        return actions.order.capture().then((details) => {
                            // PaymentPage successful
                            console.log('PaymentPage successful:', details);
                        });
                    },
                    onError: (err) => {
                        // Handle any errors during payment
                        console.error('PayPal error:', err);
                    },
                }).render('#paypal-button-container');
            } catch (error) {
                console.error('Error loading PayPal SDK:', error);
            }
        };

        loadPayPalSDK();
    }, []);

    return (
        <div>
            <div id="paypal-button-container"></div>
        </div>
    );
};

export default PayPalForm;
