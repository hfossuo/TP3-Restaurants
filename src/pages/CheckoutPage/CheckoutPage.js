import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import CreditCardForm from "../../components/CreditCardForm";
import PayPalForm from "../../components/PaypalForm";

const stripePromise = loadStripe('your_stripe_public_key_here');

const CheckoutForm = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            const { id } = paymentMethod;
            try {
                const response = await axios.post('/api/payment', { id, amount });
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount] = useState(1000);  // amount in cents

    const renderPaymentMethod = () => {
        switch (paymentMethod) {
            case 'stripe':
                return (
                    <Elements stripe={stripePromise}>
                        <CheckoutForm amount={amount} />
                    </Elements>
                );
            case 'creditCard':
           //     return <div>Credit Card Form goes here</div>;
                return <CreditCardForm amount={amount} />;
            case 'paypal':
           //     return <div>PayPal Form goes here</div>;
                return <PayPalForm total={amount} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="">Select payment method</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="stripe">Stripe</option>
            </select>
            {renderPaymentMethod()}
        </div>
    );
}

export default Payment;
