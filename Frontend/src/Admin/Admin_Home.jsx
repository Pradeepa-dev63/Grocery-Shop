import React from 'react'
import { Link } from "react-router-dom";
import "./Admin_Home"

const Admin_Home = () => {
  return (
      <div className="admin">
      <h1> Admin </h1>

      <Link to="/">← Back to home</Link>
    </div>
  )
}

export default Admin_Home