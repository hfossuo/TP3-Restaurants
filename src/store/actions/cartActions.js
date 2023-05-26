import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, removeFromCart } from '../../services/cartService';
import {
  ADD_DISH_TO_CART,
  CLEAR_CART,
  DIFF_RESTAURANT_ERROR,
  FETCH_CART_ITEMS,
  PLACE_ORDER,
  REMOVE_DISH_FROM_CART,
  UPDATE_CART_ITEM,
} from './types.js';

export const addItemToCart = (item) => {
  return async (dispatch) => {
    try {
      const response = await addToCart(item);
      dispatch({ type: 'ADD_TO_CART', payload: response.data });
      toast.success('Item added to cart successfully!');
    } catch (error) {
      toast.error('Failed to add item to cart.');
    }
  };
};

export const removeItemFromCart = (itemId) => {
  return async (dispatch) => {
    try {
      await removeFromCart(itemId);
      dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
      toast.success('Item removed from cart successfully!');
    } catch (error) {
      toast.error('Failed to remove item from cart.');
    }
  };
};


export const fetchAllCartItems = (data) => {
  return (dispatch) => {
    return axios
        .get(`/cartitems`, data)
        .then((res) => {
          dispatch({
            type: FETCH_CART_ITEMS,
            payload: res.data,
          });
          toast.info('Fetched all cart items');
        })
        .catch((err) => {
          toast.error(JSON.stringify(err.response.data.message));
        });
  };
};

export const addDishToCart = (data) => {
  return (dispatch) => {
    return axios
      .post(`/cartitems`, data)
      .then((res) => {
        dispatch({
          type: ADD_DISH_TO_CART,
          payload: res.data,
        });
        toast.info({ type: 'info', description: `Added dish ${res.data.dish.name} to cart.` });
      })
      .catch((err) => {
        console.log(err);
        toast.info({ type: 'error', description: JSON.stringify(err.response.data.message) });
        if (err.response.data.type && err.response.data.type === 'diff_restaurant') {
          dispatch({
            type: DIFF_RESTAURANT_ERROR,
            payload: err.response.data,
          });
        }
      });
  };
};

export const updateItemInCart = (data, itemId) => {
  return (dispatch) => {
    return axios
      .put(`/cartitems/${itemId}`, data)
      .then((res) => {
        dispatch({
          type: UPDATE_CART_ITEM,
          payload: res.data,
        });
        toast.info({ type: 'info', description: `Updated dish ${res.data.dish.name} in cart.` });
      })
      .catch((err) => {
        console.log(err);
        toast.info({ type: 'error', description: JSON.stringify(err.response?.data?.message) });
      });
  };
};

export const removeDishFromCart = (id) => {
  return (dispatch) => {
    return axios
      .delete(`/cartitems/${id}`)
      .then(() => {
        dispatch({
          type: REMOVE_DISH_FROM_CART,
          payload: { itemId: id },
        });
        toast.info({ type: 'info', description: `Removed dish from cart` });
      })
      .catch((err) => {
        toast.info({ type: 'error', description: JSON.stringify(err.response.data.message) });
      });
  };
};

export const placedOrder = () => {
  return (dispatch) => {
    dispatch({
      type: PLACE_ORDER,
      payload: null,
    });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    return axios
      .delete(`/cartitems/reset`)
      .then(() => {
        dispatch({
          type: CLEAR_CART,
          payload: null,
        });
        toast.info({ type: 'info', description: 'Cleared Cart' });
      })
      .catch((err) => {
        toast.info({ type: 'error', description: JSON.stringify(err.response.data.message) });
      });
  };
};
