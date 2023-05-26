import React, { useEffect } from 'react';

function PayPalButton({ total }) {
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: function(data, actions) {
                // Set up the transaction
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: total
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                // Capture the transaction
                return actions.order.capture().then(function(details) {
                    alert('Transaction completed by ' + details.payer.name.given_name);
                    // You can also redirect to another page here
                });
            }
        }).render('#paypal-button-container');
    }, [total]);

    return <div id="paypal-button-container"></div>;
}

export default PayPalButton;
