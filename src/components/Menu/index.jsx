import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/4BUY.png';
import { Button } from './styles';
import { FaShoppingCart } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im'

const Menu = () => {

    const history = useHistory();

    const handleOnClick = (path) => {
        history.push(path);
    }

    const cart = useSelector((store) => store.cart);

    return(
        <>
            <img src={logo} alt='logo 4buy'/>
            <div style={{marginLeft:'5rem'}}>
                <Button onClick={() => handleOnClick('/')}>
                    <ImHome3/>
                </Button>
                <Button onClick={() => handleOnClick('/cart')}>
                    <FaShoppingCart/> 
                    {
                        cart.length !== 0 && <span>{cart.length}</span>
                    }
                </Button>
            </div>
        </>
    )
}

export default Menu;