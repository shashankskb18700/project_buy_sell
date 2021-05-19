import React from 'react';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './image-slider.style.css'
import image1 from './img/img1.jpg'
import image2 from './img/img2.jpg'
import image3 from './img/img3.jpg'
import image4 from './img/img4.jpg'
// import image1 from './untitled folder/img9.jpg'
// import image2 from './untitled folder/img6.jpg'
// import image3 from './untitled folder/img7.jpg'
// import image4 from './untitled folder/img8.jpg'
// import image5 from './untitled folder/img5.jpg'

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
      {/* <img src={image5} className="sliderimg" /> */}
    </AliceCarousel>
  </div>
);

export default Image;
