import React from "react";
import "./NewCollection.css";
import new_collections from "../Assets/new_collections";
import Item from "../Items/Item";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <div className="collections">
        {new_collections.map((product) => {
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

export default NewCollections;
