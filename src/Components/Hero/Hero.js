import React, { useContext } from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_icon from "../Assets/hero_image.png";
import { ShopContext } from "../../Context/ShopContext";
const Hero = () => {
  const { data } = useContext(ShopContext);
  console.log("context......", data);
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand-icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collections</div>
          <img src={arrow_icon} alt="arrow-icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_icon} alt="hero-icon" />
      </div>
    </div>
  );
};

export default Hero;
