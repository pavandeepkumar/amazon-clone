import React from "react";
import "./Product.css";

function Product({ id, titel, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{titel}</p>
        <p className="product__price">
          <small> <b>Price :$</b></small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <div className="btn">
        <button className="add_to_card">Add to Basket</button>
        <button className="buy_now">Buy Now</button>
      </div>
    </div>
  );
}

export default Product;
