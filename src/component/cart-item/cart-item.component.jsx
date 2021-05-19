import React from 'react';
import './cart-item.styles.css';

const CartItem = ({ item: { name, imageUrl, price, author } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <h4 className="name">
        <h2>Name </h2>
        {name}
      </h4>

      <h4 className="name">
        <h2>cost</h2>
        {price}$
      </h4>

      <h4 className="name">
        <h2>Project Desc.</h2>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. C/O
      </h4>

      <h4 className="name">
        <h2>Technology used</h2>
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </h4>

      <h4 className='name'>
        <h2>Author</h2>
        {author}
      </h4>
    </div>
  </div>
);

export default CartItem;