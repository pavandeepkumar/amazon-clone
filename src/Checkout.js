import React from "react";
import "./Checkout.css";
import Subtotel from "./Subtotel";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="chekout_left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Central/New/Launches/Store/Header/1500X3003.jpg"
          alt=""
        />
        <h2 className="checkout__title">Your Shoping Basket</h2>
      </div>
      <div className="checkout__right">
        <Subtotel/>
        <h2>The SubTotel Will be here</h2>
      </div>
    </div>
  );
};

export default Checkout;
