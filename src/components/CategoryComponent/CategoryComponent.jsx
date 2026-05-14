import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const CategoryComponent = ({ category = '', limit = 0 }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!category) return;

        setLoading(true);
        setProducts([]);

        const url = limit > 0
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`;

        axios.get(url)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setLoading(false);
            });
    }, [category, limit]);

    return (
        <section className="category-section">
            <div className="container">
                <h2 className="category-title">
                    <Link to={`/category/${category}`} className="category-link">{category}</Link>
                </h2>
                
                <div className="products-grid">
                    {loading ? (
                        <p className="loading-text">Загрузка товаров...</p>
                    ) : (
                        Array.isArray(products) && products.length > 0 ? (
                            products.map((product) => (
                                <div className="product-card-wrapper" key={product.id}>
                                    <Card product={product} />
                                </div>
                            ))
                        ) : (
                            <p className="no-products-text">Товары не найдены.</p>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default CategoryComponent;