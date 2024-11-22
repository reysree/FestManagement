import HomePage from "./HomePage";
import Payments from "./Payments";
import { useState } from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (eventName) => {
    setCart([...cart, eventName]);
    alert(`${eventName} Added to Cart`);
  };
  return (
    <Router>
      <div>
        <Navbar setUsername={setUsername}></Navbar>
        <Routes>
          <Route
            path="/"
            element={<HomePage username={username} addToCart={addToCart} />}
          />
          <Route path="/payments" element={<Payments cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
