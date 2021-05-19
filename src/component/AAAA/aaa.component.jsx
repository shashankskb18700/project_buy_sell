import React from 'react';
import './aaa.styles.css';

const Thumbnail = ({img,info}) => (
  <div className="thumbnail">
    <div className="thumbnail__container">
      <div
        className="thumbnail__img"
        style={{ background: `url(${img})` }}
        // contentEditable={}
      ></div>
      <div className="thumbnail__content">
        <h1 className="thumbnail__caption">{info}</h1>
      </div>
    </div>
  </div>
);

export default Thumbnail;