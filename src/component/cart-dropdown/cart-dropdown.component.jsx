import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component.jsx';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.css';
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component'

const CartDropdown = ({ cartItems }) => {
  const { price } = cartItems;
return (
  <div className="cart-dropdown">
    <div className="item">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>pay </CustomButton>
    <StripeCheckoutButton price={price} />

    <div className='red'>please use this credit Card
       <br></br>
    4242 4242 4242 4242 - Exp:01/23 -cvv:123 </div>
  </div>
); 
}
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});
export default connect(mapStateToProps)(CartDropdown);