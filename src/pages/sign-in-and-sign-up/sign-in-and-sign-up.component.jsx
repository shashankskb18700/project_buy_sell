import React from 'react';
import './sign-in-and-sign-up.css';
import SignIn from '../../component/signin/sign-in.component'
import SignUp from '../../component/sign-up/sign-up.component'
const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp/>
  </div>
)

export default SignInAndSignUpPage;