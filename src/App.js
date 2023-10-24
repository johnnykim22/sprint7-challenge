import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import OrderPage from "./Pages/OrderPage";
import "./App.css";
import Success from "./Pages/Success";
import Header from "./Components/Header";

import OrderForm from "./Components/OrderForm";
import Favorites from "./Components/Favorites";
import PizzaCard from "./Components/PizzaCard";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza" element={<OrderPage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
