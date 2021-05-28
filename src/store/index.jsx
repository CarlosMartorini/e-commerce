import { createStore, combineReducers } from 'redux';

import productsReducer from '../store/modules/products/reducer';
import cartReducers from '../store/modules/cart/reducer';

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducers,
})

const store = createStore(reducers);

export default store;