import React, { useContext } from "react";
import "../Pages/CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../../src/Components/Assets/dropdown_icon.png";
import Item from "../Components/Items/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="category_banner" className="category-banner" />
      <div className="shop-category-filter-items">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-shortBy">
          Sort By <img src={dropdown_icon} alt="dropdown-logo" />
        </div>
      </div>
      <div className="shop-category-products">
        {all_products.map((product, index) => {
          if (props.category === product.category) {
            return (
              <Item
                key={product.id}
                name={product.name}
                id={product.id}
                category={product.category}
                new_price={product.new_price}
                old_price={product.old_price}
                image={product.image}
              />
            );
          }else{
            return null;
          }
        })}
      </div>
      <div className="shop-category-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
