import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Item from "../Items/Item";

const RelatedProducts = () => {
  return (
    <div className="related-products">
      <h1>Related Products</h1>
      <hr />
      <div className="related-products-item">
        {data_product.map((product, index) => {
          return (
            <Item
              key={product.id}
              name={product.name}
              id={product.id}
              new_price={product.new_price}
              old_price={product.old_price}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
