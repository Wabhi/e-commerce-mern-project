import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_logo from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo"></img>
        <p>SHOPPER</p>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">SHOP</Link>
        </li>
        <li>
          <Link to="/men">MEN</Link>
        </li>
        <li>
          <Link to="/women">WOMEN</Link>
        </li>
        <li>
          <Link to="/kids">KIDS</Link>
        </li>
      </ul>
      <div className="navbar-login">
        <Link to="/login">
          <button>LOGIN</button>
        </Link>
        <img src={cart_logo} alt="login-cart"></img>
        <div className="navbar-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
