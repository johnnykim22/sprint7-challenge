import React from 'react'
import Navbar from './Navbar'
export default function Header() {
  return (
    <img
    src="/images/btlogo.png"
    alt="King Pizza"
    style={{ width: "50%", height: "auto" }}
  />
  <header>
    <span>Bloomtech Pizza Parlor</span>
    <Navbar />
  </header>
  )
}
