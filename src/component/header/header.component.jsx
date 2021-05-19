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
    {/* <div className='hesdo'>
      <h1>REXORA</h1>
    </div> */}

    <div class="containe">
      <h1 class="headin">REXORA</h1>
    </div>
    <div className="menu">
      <span>
        <Link to="/">
          <i class="fas fa-home"></i>
        </Link>
      </span>
      <span>
        <Link to="/shop">
          <i class="fas fa-store"></i>
        </Link>
      </span>
      <span>
        <Link to="/detail">
          <i class="fas fa-user"></i>
        </Link>
      </span>

      {currentUser ? (
        <span>
          <div onClick={() => auth.signOut()} className="signout">
            <i class="fas fa-sign-out-alt"></i>
          </div>{" "}
        </span>
      ) : (
        <span>
          {" "}
          <Link to="/signin">
            <i class="fas fa-sign-in-alt"></i>
          </Link>
        </span>
      )}
      {/* {console.log(auth.currentUser.photoURL)} */}
      {console.log(this)}
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



