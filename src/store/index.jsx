import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from '../store/modules/products/reducer';
import cartReducers from '../store/modules/cart/reducer';

const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducers,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;