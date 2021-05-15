import React from 'react';
import './header.styles.css'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import Dropable from '../../component/dropable-menu/dropable-menu.component';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import cartReducer from '../../redux/cart/cart.reducer';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    {/* <Dropable/> */}
    <div className="menu">
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/shop">Shop</Link>
      </span>

      {currentUser ? (
        <span>
          <div onClick={() => auth.signOut()} className="signout">
            Sign out
          </div>{" "}
        </span>
      ) : (
        <span>
          {" "}
          <Link to="/signin">Sign in</Link>
        </span>
      )}
      {/* <CartIcon /> */}
    </div>

    {/* {hidden ? null : <CartDropdown />} */}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);






{/* <nav>
  <ul class="menu">
    <li>
      <a href="#!">Home</a>
    </li>
    <li>
      <a href="#!">About</a>
    </li>
    <li>
      <a href="#!">Contact</a>
    </li>
    <li>
      <a href="#!">Faq</a>
    </li>
  </ul>
</nav>; */}