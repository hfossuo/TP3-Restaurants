import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CreditCardForm = () => {
    const [cardNumberError, setCardNumberError] = useState('');
    const [expiryDateError, setExpiryDateError] = useState('');
    const [cvvError, setCvvError] = useState('');

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error messages
        setCardNumberError('');
        setExpiryDateError('');
        setCvvError('');

        // Get the card element
        const cardElement = elements.getElement(CardElement);

        // Validate the card details
        if (!stripe || !cardElement) {
            // Stripe or card element not available
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            // Handle card validation error
            switch (error.code) {
                case 'card_number_verification_failed':
                    setCardNumberError('Invalid card number');
                    break;
                case 'card_expiry_verification_failed':
                    setExpiryDateError('Invalid expiry date');
                    break;
                case 'card_cvc_verification_failed':
                    setCvvError('Invalid CVV');
                    break;
                default:
                    // Handle other errors
                    console.error(error);
            }
        } else {
            // PaymentPage method created successfully
            // Submit the payment method or perform additional processing
            try {
                const response = await fetch('/api/charge', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        paymentMethodId: paymentMethod.id,
                        amount: 1000, // Example: 10 USD (in cents)
                        currency: 'usd',
                    }),
                });

                if (response.ok) {
                    // PaymentPage successful, handle success scenario
                    console.log('PaymentPage successful');
                } else {
                    // PaymentPage failed, handle failure scenario
                    console.error('PaymentPage failed');
                }
            } catch (error) {
                console.error('Error occurred while processing payment:', error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="cardNumber">Card Number</label>
            <CardElement
                id="cardNumber"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cardNumberError && <span className="error">{cardNumberError}</span>}

            <label htmlFor="expiryDate">Expiry Date</label>
            <CardElement
                id="expiryDate"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {expiryDateError && <span className="error">{expiryDateError}</span>}

            <label htmlFor="cvv">CVV</label>
            <CardElement
                id="cvv"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {cvvError && <span className="error">{cvvError}</span>}

            <button type="submit">Submit</button>
        </form>
    );
};

export default CreditCardForm;
