import React from "react";
import "./CSS/PageNotFound.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const HandleBackToShop = () => {
    navigate("/");
  };
  return (
    <div className="page-not-found">
      <div className="page-not-found-heading">404 - Page Not Found</div>
      <div className="back-to-shop" onClick={HandleBackToShop}>
        BACK TO SHOP
      </div>
    </div>
  );
};

export default PageNotFound;
