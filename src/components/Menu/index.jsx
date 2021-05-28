import { useHistory } from 'react-router-dom';

const Menu = () => {

    const history = useHistory();

    const handleOnClick = (path) => {
        history.push(path);
    }

    return(
        <>
            <h3>4BUY</h3>
            <button onClick={() => handleOnClick('/')}>
                Home
            </button>
            <button onClick={() => handleOnClick('/cart')}>
                Cart
            </button>
        </>
    )
}

export default Menu;