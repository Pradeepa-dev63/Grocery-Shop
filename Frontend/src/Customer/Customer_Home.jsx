import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import "./Customer_Home.css";
import vegImg from "../Assets/vegetables.png";
import fruitImg from "../Assets/fruits.png";
import drinks from "../Assets/drinks.png";
import snacks from "../Assets/snacks.png";
import nuts from "../Assets/nuts.png";

/* ---------- banner slides (replace text / images later) ---------- */
const slides = [
  {
    title: "Fresh vegetables, delivered fast",
    text: "Order from shops near you and get it at your door.",
    bg: "linear-gradient(120deg, #1f6f35 0%, #7cb518 100%)",
  },
  {
    title: "Daily dairy & bakery",
    text: "Milk, bread and more from your neighbourhood stores.",
    bg: "linear-gradient(120deg, #0b4a2a 0%, #2e7d32 100%)",
  },
  {
    title: "Support local shops",
    text: "Every order helps a small business in your area.",
    bg: "linear-gradient(120deg, #e8a317 0%, #7cb518 100%)",
  },
];

/* ---------- categories (5 circles) ---------- */

const categories = [
  { name: "Vegetables", image: vegImg },
  { name: "Fruits", image: fruitImg },
  { name: "Dairy", image: drinks },
  { name: "Snacks", image: snacks },
  { name: "Nuts", image: nuts },
];

/* ---------- products (8 cards = 2 rows of 4) ---------- */
const products = [
  { id: 1, name: "Fresh Tomato", shop: "Green Mart", price: 40, unit: "1 kg", icon: "🍅" },
  { id: 2, name: "Carrot", shop: "Fresh Basket", price: 55, unit: "1 kg", icon: "🥕" },
  { id: 3, name: "Farm Milk", shop: "Daily Dairy", price: 32, unit: "500 ml", icon: "🥛" },
  { id: 4, name: "Whole Bread", shop: "Baker's Hub", price: 45, unit: "1 pack", icon: "🍞" },
  { id: 5, name: "Banana", shop: "Green Mart", price: 60, unit: "1 dozen", icon: "🍌" },
  { id: 6, name: "Broccoli", shop: "Fresh Basket", price: 70, unit: "500 g", icon: "🥦" },
  { id: 7, name: "Red Apple", shop: "Fruit Corner", price: 180, unit: "1 kg", icon: "🍎" },
  { id: 8, name: "Eggs", shop: "Daily Dairy", price: 84, unit: "12 pcs", icon: "🥚" },
];

const Customer = () => {
  const [current, setCurrent] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const [cart, setCart] = useState({});

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  /* auto slide every 4 seconds */
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  const addToCart = (id) =>
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const removeFromCart = (id) =>
    setCart((c) => {
      const qty = (c[id] || 0) - 1;
      const copy = { ...c };
      if (qty <= 0) delete copy[id];
      else copy[id] = qty;
      return copy;
    });

  return (
    <div className="customer">
      <Navbar />

      <main className="customer__main">

        {/* ---------------- BANNER SLIDER ---------------- */}

        <section className="banner" aria-label="Offers">
          <div
            className="banner__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((s) => (
              <div className="banner__slide" key={s.title} style={{ background: s.bg }}>
                <div className="banner__text">
                  <h2>{s.title}</h2>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="banner__arrow banner__arrow--left" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="banner__arrow banner__arrow--right" onClick={next} aria-label="Next">
            ›
          </button>

          <div className="banner__dots">
            {slides.map((s, i) => (
              <button
                key={s.title}
                className={`banner__dot ${i === current ? "is-active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ---------------- CATEGORY HEXAGONS  ---------------- */}

        <section className="categories" aria-label="Categories">
          {categories.map((c) => (
            <button
              key={c.name}
              className={`category ${activeCategory === c.name ? "is-active" : ""}`}
              onClick={() =>
                setActiveCategory(activeCategory === c.name ? null : c.name)
              }
            >
             
             <span className="hex">
  <span className="hex__content">
    <img src={c.image} alt={c.name} className="category__img" />
  </span>

  <svg
    className="hex__svg"
    viewBox="0 0 200 110"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <polygon className="hex__outer" points="50,2 150,2 198,55 150,108 50,108 2,55" />
    <polygon className="hex__inner" points="54,12 146,12 186,55 146,98 54,98 14,55" />
  </svg>
</span>



              <span className="category__name">{c.name}</span>
            </button>
          ))}
        </section>


        {/* ---------------- EXPLORE ---------------- */}

        <section className="explore">
          <h2 className="explore__title">Explore!</h2>

          <div className="explore__grid">
            {products.map((p) => (
              <article className="product" key={p.id}>
                <div className="product__image">
                  <span>{p.icon}</span>
                </div>

                <div className="product__info">
                  <div className="product__details">
                    <h3>{p.name}</h3>
                    <p className="product__shop">{p.shop}</p>
                    <p className="product__price">
                      ₹{p.price} <small>/ {p.unit}</small>
                    </p>
                  </div>

                  {cart[p.id] ? (
                    <div className="qty">
                      <button onClick={() => removeFromCart(p.id)} aria-label="Remove one">
                        −
                      </button>
                      <span>{cart[p.id]}</span>
                      <button onClick={() => addToCart(p.id)} aria-label="Add one">
                        +
                      </button>
                    </div>
                  ) : (
                    <button className="product__add" onClick={() => addToCart(p.id)}>
                      Add
                    </button>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="explore__back">
            <Link to="/">← Back to home</Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Customer;