import './detailPage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCartStore } from '../../store/store';

const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const addToCart = useCartStore((state) => state.addToCart);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [id]);

    return (
        <main>
            <section className="detail">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img className='detail__image' src={product.image} alt={product.title} />
                        </div>
                        <div className="col-6">
                            <h2 className='detail__title'>{product.title}</h2>
                            <p className='detail__description'>{product.description}</p>
                            <p className='detail__price'>${product.price}</p>
                            <button className='detail__button' onClick={() => addToCart(product)}>
                                buy
                            </button>
                            <button className='detail__button' onClick={() => navigate(-1)}>
                                go back
                            </button>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    );
}

export default DetailPage;