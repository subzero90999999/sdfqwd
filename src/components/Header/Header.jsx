import './header.scss';
import { Link } from 'react-router-dom';
import { useCategoryStore } from '../../store/store';

const Header = () => {
    const { categories } = useCategoryStore();

    return (
        <header className='header'>
            <div className="container header__container">
                <h1 className='header__logo'>
                    <Link to="/">Shop</Link>
                </h1>


                <nav className='header__nav'>
                    <Link className='header__nav__link' to="/">home</Link>
                    {categories.map((category) => (
                        <Link className='header__nav__link' to={`/category/${category}`} key={category}>
                            {category}
                        </Link>
                    ))}
                     <Link className='header__nav__link' to="/cart">🛒 cart</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;