import React from 'react';
import './homepage.styles.css'

import Image from '../../component/image-slider/image-slider.component'
const Homepage = () => (
  <div className="home">
    <div className="search">
      <input type="text" placeholder="search" />
    </div>

    <div className="sliding-image">
      <Image/>
    </div>

    <div className="slider">
      <div className="sli">
        <h3>top picks</h3>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
      </div>
      <div className="sli">
        <h3>best of year</h3>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
      </div>
      <div className="sli">
        <h3>ai</h3>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
      </div>
      <div className="sli">
        <h3>ml</h3>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
        <ul>magno</ul>
        <ul>pineapple</ul>
        <ul>dsesc</ul>
        <ul>watermelon</ul>
      </div>
    </div>
  </div>
);

export default Homepage;