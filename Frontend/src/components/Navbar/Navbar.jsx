import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../Assets/logo1.png";
import "./Navbar.css";

const UserIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
  </svg>
);

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" aria-label="Near Shop home">
          <img src={logo} alt="Near Shop" className="navbar__logo" />
        </Link>

        <nav className="navbar__links" aria-label="Main navigation">
          <NavLink to="/shops" className="navbar__link">
            Explore shops
          </NavLink>
          <NavLink to="/how-it-works" className="navbar__link">
            How it works
          </NavLink>
          <NavLink to="/sellers" className="navbar__link">
            For sellers
          </NavLink>
        </nav>

        <Link to="/signin" className="navbar__signin">
          <UserIcon />
          <span>Sign in</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;