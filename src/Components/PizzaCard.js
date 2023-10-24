import React from 'react'

export default function PizzaCard({name, image, description, deliveryTime, deliveryFee}) {
  return (
    <div className="restaurantCard">
    <h3>{name}</h3>
    <img src={image} alt={name} />
    <p>{description}</p>
    <p>{deliveryTime} Min | ${deliveryFee} Delivery Fee</p>
  </div>
  )
}
