import React from "react";
import "./Offers.css";
import exculive_offers from "../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offer for You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exculive_offers} alt="exclusive_offer" />
      </div>
    </div>
  );
};

export default Offers;
