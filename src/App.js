import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import SubSignUp from './component/sub-signup/sub-signup';
import SignIn from './component/signin/sign-in.component';
import SignUp from './component/sign-up/sign-up.component';
import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';
import ShopPage from './pages/shop/shop.component'
// 
// 
// 
import CartDropdown from './component/cart-dropdown/cart-dropdown.component'
import Footer from './component/footer/footer.compnent';
import FinalPage from './component/final-page/final-page.component';
// 
import Thumbnail from './component/AAAA/aaa.component'
// 
// 
import Detail from './component/detail/detail.component';
import { addIt } from "./redux/buyNow/buyNow.action";
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      personalInfo:null
    }
  }
  unsubscribeFromAuth = null;


  componentDidMount() {
    const { setCurrentUser } = this.props
    // const { item } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);


        userRef.onSnapshot(snapShot => {
           setCurrentUser({
              id: snapShot.id,
             ...snapShot.data(),
             
             
           })
          this.state.personalInfo = snapShot.data();
          console.log(userAuth)
        },
          )  
      }
      this.setState({ personalInfo: this.props.currentUser});
      
      // createUserProfileDocument(user);
      // console.log(this.props)
      // console.log(this.state.personalInfo)
      setCurrentUser(userAuth);
      addIt(this.state.personalInfo)
    });
  } 

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header />

        {/* {this.state.personalInfo.map((items) => (
          <Detail item={items}/>
        ))} */}
        {/* <Detail /> */}
      

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
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/signup" component={SubSignUp} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  addIt: (item) => dispatch(addIt(item))
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
