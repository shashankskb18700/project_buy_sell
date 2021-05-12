import BuyNow from './buyNow.types'

const INITIAL_STATE = {
  hidden:true
}

const BuyReducer = (state=INITIAL_STATE,action) => {
  switch (action.type) {
    case BuyNow.TOGGLE_BUY_HIDDEN:
      return {
        hidden: !state.hidden,
      };
    default:
      return state;
  }
  
}

export default BuyReducer