import React from 'react';
import './detail.styles.css';
import { connect } from 'react-redux'
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as  Back } from '../../assets/backgroundo.svg'
const Detail = ({ currentUser }) => (
  <div className="detail">
    {/*     
    <div className="ctn">
    <div className="user">
        
       { auth.currentUser?<img src={auth.currentUser.photoURL} width={100} height={100}></img>:null}
    </div>
    {currentUser ? <div>{currentUser.email}</div> : null} 
    {currentUser ? <div>{currentUser.displayName}</div> : null} 
    {console.log(auth.currentUser.photoURL)} 
      {console.log(currentUser.photoURL)} */}

    {/* mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */}
    <div class="container">
      <div class="card">
        {auth.currentUser ? (
          <img
            src={auth.currentUser.photoURL}
            className="card__image"
            alt="person"
          ></img>
        ) : null}

        <p class="card__name">
          {/* {currentUser ? <div>{currentUser.email}</div> : null} */}
        </p>
        <div class="grid-container"></div>
        <ul class="social-icons">
          <li>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-codepen"></i>
            </a>
          </li>
        </ul>
        <button class="booo draw-border">
          {currentUser ? <div>{currentUser.email}</div> : null}
        </button>
        <button class="booo draw-border">
          {currentUser ? <div>{currentUser.displayName}</div> : null}
        </button>
      </div>
    </div>
  </div>

  // </div>
  // </div>
);

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser
})

export default connect(mapStateToProps)(Detail);