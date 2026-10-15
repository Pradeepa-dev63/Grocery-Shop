import React from "react";
import { Link } from "react-router-dom";
import "./Customer_Home.css";

const Customer = () => {
  return (
    <div className="customer">
      <h1>Customer page</h1>
      <p>Find groceries and order from nearby shops.</p>
      <Link to="/">← Back to home</Link>
    </div>
  );
};

export default Customer;