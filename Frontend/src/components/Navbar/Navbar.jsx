import { useState } from "react";
import "../theme/theme.css";
import "./Navbar.css";
import logo from "../Assets/shop-name1.png"; // change to logo2.png / logo3.png if you prefer

const NAV_LINKS = [
  { label: "Explore shops", href: "/shops" },
  { label: "How it works", href: "/how-it-works" },
  { label: "For sellers", href: "/sellers" },
];

const UserIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="3.8" />
    <path d="M4.5 20c.8-4 4-6 7.5-6s6.7 2 7.5 6" />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="/" className="header__logo" aria-label="NearShop home">
          <img src={logo} alt="NearShop" />
        </a>

        <nav
          className={`header__nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="/login" className="btn btn-outline header__signin header__signin--mobile">
            <UserIcon /> Sign in 
          </a>
        </nav>

        <a href="/login" className="btn btn-outline header__signin header__signin--desktop">
          <UserIcon /> Sign in
        </a>

        <button
          className="header__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
