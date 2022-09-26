import React, { useEffect, useState } from 'react';
import Elements from '../Elements/Elements';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    // console.log(cart.length);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Elements
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Elements>)
                }
            </div>
            <div className="cart-container">
                <h1>Order Summary</h1>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;