import React from 'react';
import './header.styles.css'

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <div className="header">
    {currentUser ? (
      <div onClick={() => auth.signOut()}>Sign out</div>
    ) : (
      <Link to='/signin'>Sign in</Link>
    )}
  </div>
);

const mapStateToProps = state => ({
  currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(Header);
