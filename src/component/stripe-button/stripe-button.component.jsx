import React from 'react';
import StripeCheckout from 'react-stripe-checkout'
// import './stripe-button.styles.css'
const  StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Ig02QSA6xWLj0A8Fabawft7G0aNvP6vw87h6ki6v9g0buZJVZscs5n3ZzowcxvYM0o9PCNAWGjQUzUJ1xnpc6Sq00W53XkK6M";
  
  const onToken = token => {
    console.log(token);
    alert('Payment successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Rexora'
      // description={`your total is $${price}`}
      // amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton;