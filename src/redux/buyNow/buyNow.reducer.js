import BuyNow from './buyNow.types'

const INITIAL_STATE = {
  hidden: true,
  item:[]
  
}

const BuyReducer = (state=INITIAL_STATE,action) => {
  switch (action.type) {
    case BuyNow.TOGGLE_BUY_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case BuyNow.ADD:
      return {
        ...state,
        item:[action.payload]
      }
    default:
      return state;
  }
  
}

export default BuyReducer
