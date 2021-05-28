import { addToCart, removeFromCart } from './actions';

export const addToCartThunk = (product) => {
    return (dispatch) => {
        const cartList = JSON.parse(localStorage.getItem('cart')) || [];
        cartList.push(product);
        localStorage.setItem('cart', JSON.stringify(cartList));
        dispatch(addToCart(product));
    }
}

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
    const {cart} = getStore();
    const cartList = cart.filter((product) => product.id !== id);
    localStorage.setItem('cart', JSON.stringify(cartList));
    dispatch(removeFromCart(cartList));
}