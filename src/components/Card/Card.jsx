import { Link } from 'react-router-dom';
import './card.scss';
import { useCartStore } from '../../store/store';

const Card = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);
    return (
        <div className='card'>
            <img className='card__img' src={product.image} alt={product.title} />
            <Link to={`/detail/${product.id}`} className='card__link'>
                <h3 className='card__title'>{
                    product.title.length > 20
                        ? product.title.slice(0, 20).trim() + '...'
                        : product.title
                }</h3>
                <p className='card__text'>{
                    product.description.length > 50
                        ? product.description.slice(0, 47).trim() + '...'
                        : product.description
                }</p>
                <p className='card__text'>${product.price}</p>
            </Link>
            <button className='card__button' onClick={() => addToCart(product)}>buy</button>
        </div>
    );
}

export default Card;