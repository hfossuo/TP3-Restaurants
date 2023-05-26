import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, fetchAllCartItems, clearCart } from '../../store/actions/cartActions';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllCartItems());
    }, [dispatch]);

    const handleRemoveFromCart = (itemId) => {
        dispatch(removeItemFromCart(itemId));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default CartPage;
