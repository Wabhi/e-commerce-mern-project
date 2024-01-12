import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Items/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h1>POPOLAR IN WOMEN</h1>
      <hr style={{}}/>
      <div className="popular-item">
        {data_product.map((product) => {
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

export default Popular;
