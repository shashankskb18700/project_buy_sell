import React from 'react';
import './sub-signup.styles.css';
import { Link } from 'react-router-dom';
import SignUp from '../../component/sign-up/sign-up.component'
import SignIn from '../signin/sign-in.component';
import Rotate from '../rotating-cube/rotate.component';

const SubSignUp = () => (
  <div className="subS">
    <div className='dashdoo'>
      <Rotate />
    </div>
    <div>
      <SignUp />
      <div className='HaveAccount'>
        Have account?
        <Link to="/signin">Sign in</Link>
      </div>
    </div>
  </div>
);
export default SubSignUp;