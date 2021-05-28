import tv from '../../../assets/tv.jpg';
import cama from '../../../assets/cama.jpg';
import fogao from '../../../assets/fogao.jpg';
import geladeira from '../../../assets/geladeira.jpg';
import iphone from '../../../assets/iphone.jpg';
import monitor from '../../../assets/monitor.jpg';
import notebook from '../../../assets/notebook.jpg';
import sofa from '../../../assets/sofa.jpg';
import tablet from '../../../assets/tablet.jpg';
import teclado from '../../../assets/teclado.jpg';

const defaultState = [
    { id: 1, name: 'Smart TV LED 55"', price: 2858, img: tv},
    { id: 2, name: 'Geladeira Frost Free', price: 6599, img: geladeira},
    { id: 3, name: 'Fogão 5 bocas Supreme', price: 1499, img: fogao},
    { id: 4, name: 'Sofá 3 Lugares Cinza', price: 1129, img: sofa},
    { id: 5, name: 'Cama Box Com Baú Casal', price: 1229, img: cama},
    { id: 6, name: 'Iphone 12 Pro Apple 128gb', price: 8470, img: iphone},
    { id: 7, name: 'Samsung Galaxy Tab S7', price: 4999, img: tablet},
    { id: 8, name: 'Notebook Predator Helios Intel Core i7 16GB 512GB SSD RTX 2070', price: 9599, img: notebook},
    { id: 9, name: 'Teclado mecânico Logitech K835', price: 420, img: teclado},
    { id: 10, name: 'Monitor LG Ultrawide 34" Full HD', price: 2959, img: monitor},
]

const productsReducer = (state = defaultState, action) => {
    return state;
}

export default productsReducer;