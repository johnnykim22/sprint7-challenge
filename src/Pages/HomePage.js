import React from "react";
import Navbar from "../Components/Navbar";
import PizzaCard from "../Components/PizzaCard";
function HomePage() {
  return (
    <div className="homePage">
    

      <section className="mainBanner">
        <img src="/images/Pizza.jpg" alt="Pizza banner" />
        <h1>Pizza right out the oven to your Door</h1>
        <div className="actionBox">
          <button
            className="btn"
            onClick={() => (window.location.href = "/pizza")}
          >
            Order now
          </button>
        </div>
      </section>

      <section className="foodDelivery">
        <h2>Our Favorites!</h2>

        <PizzaCard
        name={'King Pizza'}
        image={'/images/king.jpg'}
        description={'All Topings'}
        deliveryTime={'20-30'}
        deliveryFee={'$5.99'}
        />

        <PizzaCard
        name={'Maui Zowie'}
        image={'/images/Maui_Zowie.jpg'}
        description={'Zesty Pizza'}
        deliveryTime={'30-45'}
        deliveryFee={'$4.99'}
        
        />

        <PizzaCard
        name={'Meat Lovers'}
        image={'/images/Meat_Lover.jpg'}
        description={'All Meat Eurryday'}
        deliveryTime={'20-30'}
        deliveryFee={'$3.99'}
        
        />
        
      </section>
    </div>
  );
}

export default HomePage;
