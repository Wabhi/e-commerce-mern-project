import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../../Components/Assets/cart_cross_icon.png";
const CartItems = () => {
  const { all_products, cartItems, removeCartItem, getTotalCartPrice } =
    useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-items-details">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-indivisual-product-details cart-items-details">
                <img
                  src={e.image}
                  alt={e.name}
                  className="cart-product-image"
                />
                <p>{e.name}</p>
                <p>$ {e.new_price}</p>
                <button className="product-quantity">{cartItems[e.id]}</button>
                <p>$ {e.new_price * cartItems[e.id]}</p>
                <img
                  className="cart-remove-item-icon"
                  src={remove_icon}
                  alt="remove-item-icon"
                  onClick={() => removeCartItem(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-total-items">
              <p>Subtotal :</p>
              <p>${getTotalCartPrice()}</p>
            </div>
            <hr />
            <div className="cart-total-items">
              <p>Shipping Fee :</p>
              <p>Free</p>
            </div>
            <div className="cart-total-items">
              <h3>Total :</h3>
              <h3>${getTotalCartPrice()}</h3>
            </div>
          </div>
          <button className="checkout-button">Procees To Checkout</button>
        </div>
        <div className="cart-items-promocode">
          <p style={{ fontSize: "18px", fontWeight: 600 }}>
            If you have any promocode, Please enter it here.
          </p>
          <div className="cart-items-promocode-box">
            <input type="text" placeholder="Please enter promocode" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
