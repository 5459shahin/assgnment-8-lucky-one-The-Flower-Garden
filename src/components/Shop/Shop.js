import React from 'react';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect( () => {
      fetch('Products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

      /*   Item Adedd Iart */
    const handleAddToCart = (product) => {
        console.log(product)
    }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                
                {
                    products.map(product => <Product
                         key={Product.id}
                         handleAddToCart={handleAddToCart}
                         product={product}
                         ></Product>)
                }
                
            </div>
            <div className="cart-container">

              <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Shop;