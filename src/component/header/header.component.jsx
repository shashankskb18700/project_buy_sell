import React from 'react';
import './header.styles.css'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import cartReducer from '../../redux/cart/cart.reducer';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <div className="option">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>

      {currentUser ? (
        <div onClick={() => auth.signOut()}>Sign out</div>
      ) : (
        <Link to="/signin">Sign in</Link>
      )}
      <CartIcon />
    </div>

    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
