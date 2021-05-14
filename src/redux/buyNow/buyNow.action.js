import BuyNow from './buyNow.types';

export const BuyNowAction = () =>({
  type: BuyNow.TOGGLE_BUY_HIDDEN
})

export const addIt = item => ({
  type: BuyNow.ADD,
  payload:item
})