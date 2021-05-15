import React from 'react';
import './homepage.styles.css'
import {Link} from 'react-router-dom'

import Image from '../../component/image-slider/image-slider.component'
const Homepage = () => (
  <div className="home">
    <div className="sliding-image">
      <Image />
    </div>

    <h1>Learn from real word projects </h1>
    <p></p>
    <h5></h5>
    <Link to='/shop'>
      <main class="wrapper">
        <article class="badge orange">
          <div class="rounded">
            <i class="fab fa-html5"></i>
          </div>
        </article>
        <article class="badge blue">
          <div class="rounded">
            <i class="fab fa-css3-alt"></i>
          </div>
        </article>
        <article class="badge gold">
          <div class="rounded">
            <i class="fab fa-js-square"></i>
          </div>
        </article>
        <article class="badge red">
          <div class="rounded">
            <i class="fab fa-adobe"></i>
          </div>
        </article>
        <article class="badge purple">
          <div class="rounded">
            <i class="fab fa-php"></i>
          </div>
        </article>
        <article class="badge green">
          <div class="rounded">
            <i class="fab fa-node"></i>
          </div>
        </article>
        <article class="badge crimson">
          <div class="rounded">
            <i class="fab fa-npm"></i>
          </div>
        </article>
        <article class="badge steel">
          <div class="rounded">
            <i class="fab fa-python"></i>
          </div>
        </article>
        <article class="badge pink">
          <div class="rounded">
            <i class="fab fa-sass"></i>
          </div>
        </article>
        <article class="badge rebecca">
          <div class="rounded">
            <i class="fab fa-bootstrap"></i>
          </div>
        </article>
        <article class="badge gainsboro">
          <div class="rounded">
            <i class="fab fa-java"></i>
          </div>
        </article>
      </main>
    </Link>


 


  </div>
);

export default Homepage;