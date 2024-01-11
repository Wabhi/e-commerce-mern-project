import React from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png";
import cart_logo from "../Assets/cart_icon.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo"></img>
        <p>SHOPPER</p>
      </div>
      <ul className="navbar-menu">
        <li>SHOP</li>
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
      </ul>
      <div className="navbar-login">
        <button>LOGIN</button>
        <img src={cart_logo} alt='login-cart'></img>
       <div className="navbar-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar