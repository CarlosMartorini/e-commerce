import { ADD_TO_CART, REMOVE_FROM_CART } from './actionsType';

const cartReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            
            const { product } = action;
            return [...state, product];

        case REMOVE_FROM_CART:

            const { cartList } = action;
            return cartList;
    
        default:
            
            return state;
    }
}

export default cartReducers;