import React, { useState } from "react";
import OrderForm from "../Components/OrderForm";
import "./Styles/OrderPage.css";
function OrderPage() {
  
  return (
    <div className="page">
      <h1>Build Your Own Pizza</h1>
      
      <OrderForm/>
       
    </div>
  );
}
///components give labels to the application parts
export default OrderPage;
