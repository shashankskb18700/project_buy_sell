import React from 'react';
import './collection.item.style.css';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import ShoppingWindow from '../shopping-window/shopping-window.component';
import CustomButton from '../custom-button/custom-button.component';


import { connect } from 'react-redux';
import { BuyNowAction } from '../../redux/buyNow/buyNow.action';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { addItem } from '../../redux/cart/cart.action';
import { addIt } from '../../redux/buyNow/buyNow.action';
import { Link } from "react-router-dom";


const CollectionItem = ({
  item,
  hidden,
  BuyNowAction,
  addItem,
  addIt,
  cartItems
}) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          background: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition:'center',
          
          
        }}
      ></div>
      <div className="collection-footer" >
        <span className="name ">{name}</span>
        <span className="name">{price}</span>
      </div>

      <Link to='final' >
        <CustomButton
          onClick={() => { addItem(item)}} 
          className='custom-b'
          inverted
        >
          Buy
        </CustomButton>
      </Link>
      {/* {hidden ? null : <CartDropdown />} */}
    </div>
  );
};



//you have to implement redux if you want to open other page
  
//both of these mapStateToProps and mapDispatchToProps  are fireing action and reciving the changing state to from buyNow redux  but now question is how move item to bigger when clicked

// onClick={()=>addItem(item)}



const mapStateToProps = ({ cart: { cartItems } ,cart: { hidden }}) => ({ hidden,
  cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  BuyNowAction: () => dispatch(BuyNowAction()),
  addItem: (item) => dispatch(addItem(item)),
  // addIt:item=> dispatch(addIt(item))
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);


