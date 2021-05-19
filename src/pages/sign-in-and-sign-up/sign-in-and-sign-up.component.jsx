import React from 'react';
import './sign-in-and-sign-up.css';
import { Link } from 'react-router-dom';
import Rotate from '../../component/rotating-cube/rotate.component'
import SignIn from '../../component/signin/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'
const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <div className='dashdo'>
      <Rotate />
    </div>

    <div>
      <SignIn />
      <div className='DontHave'>
        Don't have account
        <Link to="signup">Sign Up</Link>
      </div>
    </div>
    {/* <SignUp /> */}
    {/* <div
      className="moon"
    ></div> */}
  </div>
);

export default SignInAndSignUpPage;