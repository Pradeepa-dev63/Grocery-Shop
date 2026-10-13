import { useState } from "react";
import "../Theme/Theme.css";
import "./Home.css";
import heroImg from "../Assets/hero-background.png";
import Navbar from "../Navbar/Navbar";

/* ---------- Small inline icons (no extra library needed) ---------- */
const Icon = ({ children, size = 24 }) => (
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
    {children}
  </svg>
);

const TruckIcon = (p) => (
  <Icon {...p}>
    <path d="M3 6h11v10H3z" />
    <path d="M14 10h4l3 3v3h-7" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17" cy="17.5" r="1.8" />
  </Icon>
);
const LeafIcon = (p) => (
  <Icon {...p}>
    <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15" />
    <path d="M5 19c3-5 6-8 10-10" />
  </Icon>
);
const ShieldIcon = (p) => (
  <Icon {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </Icon>
);
const HeartIcon = (p) => (
  <Icon {...p}>
    <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
  </Icon>
);
const PinIcon = (p) => (
  <Icon {...p}>
    <path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z" />
    <circle cx="12" cy="10" r="2.2" />
  </Icon>
);
const SearchIcon = (p) => (
  <Icon {...p}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </Icon>
);
const LocateIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="12" cy="12" r="8" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </Icon>
);
const ArrowIcon = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);
const CartIcon = (p) => (
  <Icon {...p}>
    <path d="M3 4h2.5l2 11h10l2-8H7" />
    <circle cx="9.5" cy="19" r="1.5" />
    <circle cx="16.5" cy="19" r="1.5" />
  </Icon>
);
const ShopIcon = (p) => (
  <Icon {...p}>
    <path d="M4 9l1.5-5h13L20 9" />
    <path d="M4 9a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" />
    <path d="M5 11.5V20h14v-8.5" />
    <path d="M10 20v-5h4v5" />
  </Icon>
);
const GearIcon = (p) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5l1.6 2.6 3-.6.9 2.9 2.8 1.3-1 2.9 1 2.9-2.8 1.3-.9 2.9-3-.6L12 21.5l-1.6-2.6-3 .6-.9-2.9-2.8-1.3 1-2.9-1-2.9 2.8-1.3.9-2.9 3 .6z" />
  </Icon>
);

/* ---------- Page data ---------- */
const ROLES = [
  {
    key: "customer",
    title: "Customer",
    text: "Browse shops & order groceries",
    cta: "Shop now",
    href: "/shops",
    Glyph: CartIcon,
    primary: true,
  },
  {
    key: "seller",
    title: "Seller",
    text: "Manage your shop & orders",
    cta: "Start selling",
    href: "/seller/login",
    Glyph: ShopIcon,
  },
  {
    key: "admin",
    title: "Admin",
    text: "Manage marketplace",
    cta: "Admin sign in",
    href: "/admin/login",
    Glyph: GearIcon,
  },
];

const FEATURES = [
  { title: "Fresh local produce", text: "From neighbourhood stores", Glyph: TruckIcon },
  { title: "Quick local delivery", text: "From nearby shops", Glyph: LeafIcon },
  { title: "Quality & freshness", text: "Everyday essentials", Glyph: ShieldIcon },
  { title: "Support local businesses", text: "Stronger communities", Glyph: HeartIcon },
];

/* ---------- Component ---------- */
export default function Home() {
  const [location, setLocation] = useState("");
  const [locating, setLocating] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = location.trim();
    if (!value) return;
    // Change this to your router's navigate() if you use React Router
    window.location.href = `/shops?q=${encodeURIComponent(value)}`;
  };

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported in this browser.");
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocating(false);
        window.location.href = `/shops?lat=${coords.latitude}&lng=${coords.longitude}`;
      },
      () => {
        setLocating(false);
        alert("Could not get your location. Please enter your PIN code.");
      }
    );
  };

  return (
    <div className="home">
      {/* ===== Navbar (separate component) ===== */}
      <Navbar />

      <main>
        {/* ===== Hero ===== */}
        <section className="hero">
          <div
            className="hero__bg"
            style={{ backgroundImage: `url(${heroImg})` }}
            aria-hidden="true"
          />
          <div className="hero__overlay" aria-hidden="true" />
          <div className="container hero__inner">
            <div className="hero__content">
              <span className="pill">
                <TruckIcon size={16} />
                Shop local <i>•</i> Fresh groceries <i>•</i> Delivered to your door
              </span> 

              <h1 className="hero__title">
                Fresh groceries, from shops <span>near you.</span>
              </h1> <br/>

              <p className="hero__text">
                Shop local, support neighbourhood stores and get fresh groceries
                delivered quickly to your door.
              </p>

              <form className="search" onSubmit={handleSearch}>
                <label className="search__field">
                  <PinIcon size={22} />
                  <input
                    type="text"
                    placeholder="Enter your area or PIN code"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    aria-label="Area or PIN code"
                  />
                </label>
                <button type="submit" className="btn btn-primary search__btn">
                  <SearchIcon size={22} />
                  Find nearby shops
                </button>
              </form>

              <button
                type="button"
                className="locate"
                onClick={useCurrentLocation}
                disabled={locating}
              >
                <LocateIcon size={18} />
                {locating ? "Finding your location..." : "Use my current location"}
              </button>
            </div>
          </div>
        </section>

        {/* ===== Roles + features panel ===== */}
        <section className="panel container">
          <div className="panel__head">
            <h2>Choose how you want to use NearShop</h2>
            <p>One platform. Three simple ways to get started.</p>
          </div>

          <div className="roles">
            {ROLES.map(({ key, title, text, cta, href, Glyph, primary }) => (
              <article key={key} className={`role role--${key}`}>
                <div className="role__top">
                  <span className="role__icon">
                    <Glyph size={36} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
                <a href={href} className={`btn ${primary ? "btn-primary" : "btn-outline"} role__btn`}>
                  {cta} <ArrowIcon size={20} />
                </a>
              </article>
            ))}
          </div>

          <ul className="features">
            {FEATURES.map(({ title, text, Glyph }) => (
              <li key={title} className="feature">
                <span className="feature__icon">
                  <Glyph size={30} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
