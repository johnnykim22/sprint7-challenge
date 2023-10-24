import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";
import "./App.css";
import Success from "./Pages/Success";

function App() {
  return (
    <div>
      <img
        src="/images/btlogo.png"
        alt="King Pizza"
        style={{ width: "50%", height: "auto" }}
      />
      <header>
        <span>Bloomtech Pizza Parlor</span>
        <Navbar />
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<OrderPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
