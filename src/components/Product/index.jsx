import { CardProduct, Button } from './styles';
import { TiShoppingCart } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/modules/cart/actions';

const Product = ({product, isRemovable = false}) => {

    const dispatch = useDispatch();

    const { name, img, price } = product;
    return(
        <CardProduct>
            <h3>{name}</h3>
            <img src={img} alt={name}/>
            <h3>${price}</h3>
            {
                isRemovable ? (
                    <Button style={{backgroundColor:'yellow'}}
                        oncClick={() => dispatch(removeFromCart(product))}
                    ><TiShoppingCart/> Remove</Button>        
                ) : (
                    <Button 
                        oncClick={() => dispatch(addToCart(product))}
                    ><TiShoppingCart/> Buy</Button>
                )
            }
        </CardProduct>
    )
}

export default Product;