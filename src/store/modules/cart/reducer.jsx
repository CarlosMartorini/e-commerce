import { ADD_TO_CART } from './actionsType';

const cartReducers = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            
            const { product } = action;
            return product;
    
        default:
            
            return state;
    }
}

export default cartReducers;