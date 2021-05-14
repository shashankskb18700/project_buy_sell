import React from 'react';
import './sign-in.component.css'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth,signInWithGoogle } from '../../firebase/firebase.utils'
class SignIn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: '', password: ''
      });
      
      }catch (error) {
        console.log(error);
    }



    this.setState({
      email: '' ,password:''})
  }
  
  handelChange = event => {
    console.log(event.target);
    const { value, name } = event.target;
    this.setState({[name]:value})
  }

  render() {
    return (
      <div className="signIn">
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handelChange={this.handelChange}
            label="Email"
            required
          />
          {/* <label>email</label> */}

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handelChange={this.handelChange}
            required
          />
          {/* <label>password</label> */}
          <div className="buttons">
            <div class="container">
              <div class="btn effect01">
                <CustomButton className="but" type="submit" value="submit form">
                  sign in
                </CustomButton>
              </div>
            </div>

            <CustomButton
              className="buto"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              sign in with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
    
  }
}

export default SignIn