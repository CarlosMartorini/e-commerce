import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Product from '../Product';
import { Checkout, ListProductsCart, Login, Title } from './styles';

const CartCard = () => {

    const cart = useSelector((store) => store.cart);

    const history = useHistory();

    const handleOnClickCheckout = (path) => {
        history.push(path);
    }

    return (
        <>
            <Title>
                <h2>My Cart</h2>
            </Title>
            <div>
                <ListProductsCart>
                    {
                        cart.map((product) => (
                            <Product key={product.id} product={product} isRemovable />
                            ))
                        }
                </ListProductsCart>
                <div>
                    {
                        <Checkout>
                            <label>Total: ${cart.reduce((accumulator, product) => accumulator + product.price, 0)}</label>
                            <label>Total de Produtos: {cart.length}</label>
                            <Login onClick={() => handleOnClickCheckout('/login')}>Checkout</Login>
                        </Checkout>
                    }
                </div>
            </div>
        </>
    )
}

export default CartCard;