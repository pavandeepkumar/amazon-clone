import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

function Subtotel() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotels (0 times) :<strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> this order contains a gift
            </small>
            <button>Checkout</button>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotel;
