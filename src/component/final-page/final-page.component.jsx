import React from 'react';
import './final-page.styles.css';
import { connect } from 'react-redux'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import CartActionTypes from '../../redux/cart/cart.types';

const FinalPage = (cartItems,hidden) => (
  <div>
    <CartDropdown/>
    {/* {hidden?null:<CartDropdown/>} */}

  </div>
)
const mapStateToProps = ({ cart: { cartItems }, cart: { hidden } }) => ({
  hidden,
  cartItems,
});
export default connect(mapStateToProps)(FinalPage);