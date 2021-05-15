import React from 'react';
import './shopping-preview.styles.css'
import { connect } from 'react-redux';

const Shopping = ({  }) => (
  <div className="cart-dropdown">
    <div className="item">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton> Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(Shopping);