import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {name, img, seller, price} = cart;
    console.log(cart)
    return (
        <div>
            <div className='adedd-product-cart'> <img src={img} alt="" /> <p>{name}</p> </div>
        </div>
    );
};

export default Cart;