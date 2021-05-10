import React, { Children } from 'react';
import './custom-button.css'

// const CustomButton = ({children,...otherProps}) => (
//   <button className='custom-button' {...otherProps}>
//     {children}
//   </button>
// )

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
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
export default CustomButton
