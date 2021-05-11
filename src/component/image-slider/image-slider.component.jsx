import React from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './image-slider.style.css'
import image1 from './img/img1.jpg'
import image2 from './img/img2.jpg'
import image3 from './img/img3.jpg'
import image4 from './img/img4.jpg'

const Image = () => (
  <div className="App">
    <AliceCarousel
      disableButtonsControls={true}
      infinite={true}
      autoPlay={true}
      autoPlayInterval="3000"
      autoPlayStrategy={false}
      // autoPlayDirection="rtl"
      fadeOutAnimation={true}
      mouseTrackingEnabled={false}
      disableAutoPlayOnAction={false}
      disableDotsControls={true}
    >
      <img src={image1} className="sliderimg" />
      <img src={image2} className="sliderimg" />
      <img src={image3} className="sliderimg" />
      <img src={image4} className="sliderimg" />
    </AliceCarousel>
  </div>
);

export default Image;
