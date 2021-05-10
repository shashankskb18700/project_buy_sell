import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'

import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';

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
              ...snapShot.data()
            })
          })  
      }
      // this.setState({ currentUser: user });
      // console.log(user);
      // createUserProfileDocument(user);
    
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
        {/* currentUser={this.state.currentUser} */}
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                  <SignInAndSignUpPage />
                )
            } />
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
