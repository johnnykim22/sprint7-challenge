import React from 'react'

export default function Banner() {
  return (
    <section className="mainBanner">
        <img src="/images/Pizza.jpg" alt="Pizza banner" />
        <h1>Pizza right out the oven to your Door</h1>
        <div className="actionBox">
          <button id='order-pizza'
            className="btn"
            onClick={() => (window.location.href = "/pizza")}
          >
            Order now
          </button>
        </div>
      </section>
  )
}
