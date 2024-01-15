import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_logo from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCartPage = () => {
    navigate("/shopping-cart");
  };
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={window.scrollTo(0, 0)}>
        <img src={logo} alt="logo"></img>
        <p>DRESSUP</p>
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

        <img
          src={cart_logo}
          alt="login-cart"
          onClick={handleAddToCartPage}
        ></img>
        <div className="navbar-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
