import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import CreditCardForm from "../../../components/CreditCardForm";
import PayPalButton from "../../../components/PayPalButton";

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
                const response = await axios.post('/payment', { id, amount });
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
function CreditCardForm({ amount }) {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm amount={amount} />
        </Elements>
    );
}

function PaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [amount, setAmount] = useState(1000);  // amount in cents

    const renderPaymentMethod = () => {
        switch (paymentMethod) {
            case 'stripe':
                return <CreditCardForm amount={amount} />;
            case 'creditCard':
                return <CreditCardForm amount={amount} />;
            case 'paypal':
                return <PayPalButton total={amount} />;
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

export default PaymentPage;
