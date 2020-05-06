import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">

            <div>
                <img src={img} alt="" />
            </div>

            <div><h4 className="product-name">{name}</h4>

                <p><small>by:{seller}</small></p>
                <p>${price}</p>

                <p><small>Only {stock} left in stock -Order soon</small></p>
                <button className="main-button"><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>

            </div>

        </div>

    );
};

export default Product;