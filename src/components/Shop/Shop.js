import React from 'react';
import fakeData from '../../fakeData';
import { useState  } from 'react';
import './Shop.css';
import Product from '../Product/Product';


const Shop = () => {

 const first10 = fakeData.slice(0,15);
 const [products, setProducts] = useState(first10);
 const [cart, setCart] = useState([])

 const handleAddProduct = (product) =>{

    console.log('Product Added', product);

    const newCart = [...cart, product];
    setCart(newCart);

 }
  
    return (
        <div className="shop-container">
            <div className="product-container">

            <h2>This is Shop</h2>
             <h3>{products.length}</h3>
             
                {
                    products.map(pd => <Product 
                        handleAddProduct = {handleAddProduct}
                        
                        product={pd}
                        ></Product>)

                }

            </div>
            <div className="cart-container">
                <h3>This is Cart</h3>
                <h5> Order Summary : {cart.length}</h5>
            </div>

        </div>
    );
};

export default Shop;