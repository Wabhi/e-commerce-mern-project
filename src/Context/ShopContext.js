import React, { createContext, useState } from "react";
import all_products from "../../src/Components/Assets/all_product";

export const ShopContext = createContext(null);

//product id as key and value of it how many number of items added in cart with same item id.
const defaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(defaultCart());
  //console.log(".>>>>>>>>>>>", cartItems);

  const addCartItem = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    //console.log("<<<<<",cartItems)
  };

  const removeCartItem = (itemId) => {
    //console.log("<><><><><>",itemId)
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartPrice = () => {
    let total_amount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        total_amount = total_amount + itemInfo.new_price * cartItems[item];
      }
    }
    return total_amount;
  };

  const getTotalCartItems = () => {
    let total_cart_items =0;
    for(const item in cartItems) {
        if(cartItems[item] > 0) {
            total_cart_items = total_cart_items + cartItems[item];
        }
    }
    return total_cart_items;
  }

  const shopContextValue = {
    all_products,
    cartItems,
    addCartItem,
    removeCartItem,
    getTotalCartPrice,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={shopContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
