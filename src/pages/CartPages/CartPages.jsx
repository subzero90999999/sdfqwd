import './cart.scss';
import { useCartStore } from '../../store/store';
import {addtoCart} from '../../store/store';


const CategoryPage = () => {
    const cart = useCartStore((state) => state.cart);
     const addToCart = useCartStore((state) => state.addToCart);
    const removeEventListener = useCartStore((state) => state.removeEventListener);
     const deleteFromCart = useCartStore((state) => state.deleteFromCart);
    return (
        <main>
             <section className='cart'>
                <div className="container">
                    {
                        cart.map(item => {
                            return <div className='cart__item' key={item.id}>
                                <div className="cart__item__left">
                                    <img src={item.image} alt="" className="cart__item__left-img" />
                                    <h3 className="cart__item__left-title">{item.title}</h3>
                                </div>
                                <div className="cart__item__right">
                                    <div className="cart__item__right-count">
                                        <button onClick={() => {
                                            addToCart(item);
                                        }}>+</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => {
                                          removeEventListener(item.id);
                                        }}>-</button>
                                    </div>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    <button onClick={() => {
                                            deleteFromCart(item.id);
                                    }}>delete</button>
                                </div>
                            </div>
                        })
                    }

                    <p>Total: ${cart.reduce((acc, rec) => {
                        return acc + (rec.quantity * rec.price)
                    }, 0).toFixed(2)}</p>
                </div>
            </section>

            <h1></h1>
        </main>
    );
}

export default CategoryPage;