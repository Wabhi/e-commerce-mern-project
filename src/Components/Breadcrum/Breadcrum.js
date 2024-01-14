import React from 'react'
import "./Breadcrum.css"
import arrow_icom from "../Assets/breadcrum_arrow.png"

const Breadcrum = (props) => {
  const {product} = props
  return (
    <div className="breadcrum">
      Home <img src={arrow_icom} alt="arrow-icon" /> Shop
      <img src={arrow_icom} alt="arrow-icon" /> {product.category}
      <img src={arrow_icom} alt="arrow-icon" /> {product.name}
    </div>
  );
}

export default Breadcrum