import React from "react";

const Payments = ({ cart }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;
