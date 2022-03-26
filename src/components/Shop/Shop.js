import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // const [products, setProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
      fetch('Products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    }, [])

      /*   Item Adedd Iart */
    const handleAddToCart = (product) => {
        console.log(product)
        // cart.push(product);
        
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className="products-container">
                
                {
                    products.map(product => <Product
                         key={product.id}
                         handleAddToCart={handleAddToCart}
                         product={product}
                         ></Product>)
                }
                
            </div>
            <div className="cart-container">
              <h3>Order summary</h3>
              {
                    cart.map(product => <Cart cart={product}></Cart>)
                }
            <button className='order-btn'>Choose 1 For Me</button> <br />
            <button className='order-btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Shop;