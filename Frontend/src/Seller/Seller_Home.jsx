import React from 'react'
import { Link } from "react-router-dom";
import "./Seller_Home"


const Seller_Home = () => {
  return (
      <div className="seller">
      <h1> seller </h1>
      <Link to="/">← Back to home</Link>
    </div>
  )
}

export default Seller_Home