import React from 'react';
import './shopping-window.styles.css';
import { connect } from 'react-redux';

const ShoppingWindow = ({ item }) => {
  const { name, price, imageUrl }= item
  return (
  <div>
    <div className="shopping-window" >
      <div
        className="img"
        style={{
          background: `url(${imageUrl})`,
        }}
      ></div>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="name">{price}</span>
      </div>
     
    </div>
  </div>
);}
const mapStateToProps = ({ buy: { item } }) => ({
  item,
});

export default connect(mapStateToProps)(ShoppingWindow);