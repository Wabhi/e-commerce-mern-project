import React from 'react'
import "./ProductDisplay.css"
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const ProductDisplay = (props) => {
const {product} = props;
  return (
    <div className="product-display">
      <div className="product-display-left">
        <div className="product-display-img-list">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-display-img">
          <img
            className="product-display-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>
      <div className="product-display-right">
        <h1>{product.name}</h1>
        <div className="product-display-right-star">
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_icon} alt="star-icon" />
          <img src={star_dull_icon} alt="star-icon" />
          <p>({(122)})</p>
        </div>
        <div className="product-display-right-prices">
          <div className="product-display-right-old-price">
            ${product.old_price}
          </div>
          <div className="product-display-right-new-price">
            ${product.new_price}
          </div>
        </div>
        <div className="product-display-right-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </div>
        <div className="product-display-right-size">
          <h1>Select Size</h1>
          <div className="product-display-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button class="add-to-cart">ADD TO CART</button>
        <p className="product-display-right-category">
          <span>Category : </span> Woment, TShirt, Cap
        </p>
        <p><span>Tags : </span>Jeans, Tshirt, Trouser, Hat</p>
      </div>
    </div>
  );
}

export default ProductDisplay