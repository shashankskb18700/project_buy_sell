import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import BuyReducer from './buyNow/buyNow.reducer'
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  buy:BuyReducer
}) 