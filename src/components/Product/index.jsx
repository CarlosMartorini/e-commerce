import { CardProduct, Button } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCartThunk, removeFromCartThunk } from '../../store/modules/cart/thunks';

const Product = ({product, isRemovable = false}) => {

    const dispatch = useDispatch();

    const { id, name, img, price } = product;
    return(
        <CardProduct>
            <h3>{name}</h3>
            <img src={img} alt={name}/>
            <h3>${price}</h3>
            {
                isRemovable ? (
                    <Button style={{backgroundColor:'yellow', color:'red'}}
                        onClick={() => dispatch(removeFromCartThunk(id))}
                    >Remove<FaShoppingCart/></Button>        
                ) : (
                    <Button 
                        onClick={() => dispatch(addToCartThunk(product))}
                    ><FaShoppingCart/>Buy</Button>
                )
            }
        </CardProduct>
    )
}

export default Product;