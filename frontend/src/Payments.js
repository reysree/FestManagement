import React from "react";

const Payments = ({ cart }) => {
  return (
    <div>
      <h2>Payment Page</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Payments;
