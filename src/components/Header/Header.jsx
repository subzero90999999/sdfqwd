import './header.scss';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
        <header className='header'>
            <div className="container header__container">
                <h1 className='header__logo'>
                    <Link to="/">Shop</Link>
                </h1>

                <nav className='header__nav'>
                    <Link className='header__nav__link' to="/">Home</Link>
                    <Link className='header__nav__link' to="/cart">Cart</Link>
                </nav>
            </div>
        </header>
  )
}
export default Header;