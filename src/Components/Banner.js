import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <section className="mainBanner">
        <img src="/images/Pizza.jpg" alt="Pizza banner" />
        <h1>Pizza right out the oven to your Door</h1>
        <div className="actionBox">
          <Link to='/pizza' id='order-pizza'
            className="btn"
            
          >
            Order now
          </Link>
        </div>
      </section>
  )
}
