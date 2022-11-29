import React from "react";
import { Row, Col, Button, Badge , h1 , h2 , h3 } from "reactstrap";
import Navbar from "./navbar";
import { useNavigate } from 'react-router-dom'
import '../styles/sliderstyles.css'
import {IoSparklesSharp} from 'react-icons/io5'

export default props => {
    const navigate = useNavigate()

    return (
      <div className="slider">
        <input type="radio" name="slider" defaultChecked="true" />
        <div className="slider__content">
          <img src={require("../images/1.jpg")} />
          <div className="slider__description">
            <h1><IoSparklesSharp/>Hotel New Raipur<IoSparklesSharp/></h1>
            <p>Life is short, make it sweet.</p>
            <button
              className="booknow"
              onClick={()=>navigate("/login")} style={{margin:17 , padding:10}}
            >Book Now</button>
          </div>
        </div>
        <input type="radio" name="slider" />
        <div className="slider__content">
          <img src={require("../images/2.jpg")} />
          <div className="slider__description">
            <p>Log In or Sign Up for exicting coupons and discounts!</p>
            <button
              className="booknow">Log In/ Sign Up</button>
          </div>
        </div>
      </div>
    );
  };