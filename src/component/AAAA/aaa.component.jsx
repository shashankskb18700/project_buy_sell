import React from 'react';
import './aaa.styles.css';
import { Link } from 'react-router-dom'

const Thumbnail = ({img,info}) => (
  <div className="thumbnail">
    <div className="thumbnail__container">
      <Link
        className="thumbnail__img"
        style={{
          background: `url(${img})`,
        
        
          backgroundSize: 'cover',
          backgroundPosition:'center',
          }} to='/shop'
        // contentEditable={}
      ></Link>
      <div className="thumbnail__content">
        <h1 className="thumbnail__caption">{info}</h1>
      </div>
    </div>
  </div>
);

export default Thumbnail;