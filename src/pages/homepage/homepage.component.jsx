import React from 'react';
import './homepage.styles.css'
import {Link} from 'react-router-dom'
import Thumbnail from '../../component/AAAA/aaa.component'
import Image from '../../component/image-slider/image-slider.component'
const Homepage = () => (
  <div className="home">
    <div className="sliding-image">
      <Image />
    </div>

    <h1>Learn from real word projects </h1>
    <p></p>
    <h5></h5>
    <Link to="/shop">
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
    <h1>Best projects of this month</h1>
    <div className="thumbo">
      <Thumbnail
        img="https://i.ibb.co/wLb3NTC/image-2021-05-19-213726.png"
        info="use vanilla js and firebase "
      />
      <Thumbnail
        img="https://i.ibb.co/YZJKFZv/image-2021-05-19-213919.png"
        info="uses python and Django"
      />
    </div>
    <div className="thumbo">
      <Thumbnail
        img="https://i.ibb.co/fqhC0vP/image-2021-05-19-214211.png"
        info="java and spring boot"
      />
      <Thumbnail
        img="https://i.ibb.co/LdnD8xd/image-2021-05-19-214418.png"
        info="Php and firebase
        "
      />
    </div>
  </div>
);

export default Homepage;