import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";

import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';
import ShopPage from './pages/shop/shop.component'
// 
// 
// 
import CartDropdown from './component/cart-dropdown/cart-dropdown.component'
import FinalPage from './component/final-page/final-page.component';
// 
// 
// 
import Detail from './component/detail/detail.component';

import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser:null
  //   }
  // }
  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);


        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
             ...snapShot.data(),
             
             
           })
          console.log(snapShot.data())
        },
          )  
      }
      // this.setState({ currentUser: user });
      
      // createUserProfileDocument(user);
      // console.log(this.props.currentUser.displayName)
      setCurrentUser(userAuth);
    });
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header />
        {/* <Detail props={this.props}/> */}

        {/* currentUser={this.state.currentUser} */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/final" component={FinalPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
