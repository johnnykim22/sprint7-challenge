import React from 'react'
import PizzaCard from "../Components/PizzaCard";

export default function Favorites() {
  return (
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
  )
}


