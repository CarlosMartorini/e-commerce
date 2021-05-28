import { useSelector } from 'react-redux';
import Product from '../Product';
import { List } from './styles';

const Products = () => {
    const products = useSelector((store) => store.products);

    return (
        <List>
            {
                products.map((product) => (
                    <Product key={product.id} product={product}/>
                ))
            }
        </List>
    )
}

export default Products;