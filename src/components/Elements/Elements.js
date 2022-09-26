import React from 'react';
import './Elements.css'

const Elements = (props) => {
    // console.log(props);
    const { name, img, seller, price, ratings } = props.product;
    // const { handleAddToCart } = props;

    return (
        <div className='product'>
            <img src={img} alt="images" />
            <div>
                <p>{name}</p>
                <p>Price:${price}</p>

            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add to cart</p>
            </button>
        </div>
    );
};

export default Elements;