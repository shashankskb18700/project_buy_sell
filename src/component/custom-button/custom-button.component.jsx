import React, { Children } from 'react';
import './custom-button.css'

// const CustomButton = ({children,...otherProps}) => (
//   <button className='custom-button' {...otherProps}>
//     {children}
//   </button>
// )
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  toggleCartHidden,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""}  ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default CustomButton
