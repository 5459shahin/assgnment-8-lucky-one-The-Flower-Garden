import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
               <h1>Logo</h1> 
               <div>
                   <a href="/shop">Shop</a>
                   <a href="/order">Order</a>
                   <a href="/products">Products</a>
                   <a href="/about">About</a>
               </div>
            </nav>
        </div>
    );
};

export default Header;