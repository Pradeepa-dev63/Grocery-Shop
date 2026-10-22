
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { categoryData } from "../components/All_Images/Images";
import "./Product_card_detail.css";

export default function Product_detail() {
  const { slug, id } = useParams();
  const navigate = useNavigate();

  const category = categoryData[slug];
  const product = category?.products.find((p) => String(p.id) === id);

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // reset when another product is opened
  useEffect(() => {
    setQuantity(1);
    setActiveImage(0);
    window.scrollTo(0, 0);
  }, [slug, id]);

  if (!category || !product) {
    return (
      <div className="pd-page">
        <Navbar />
        <main className="pd-main">
          <p>Product not found.</p>
          <Link to="/customer">Back to home</Link>
        </main>
      </div>
    );
  }

  const images = product.images?.length ? product.images : [product.image];
  const inStock = product.inStock !== false;

  const handleAddToCart = () => {
    // connect to your cart state / context here
    console.log("Add to cart:", product.id, "qty:", quantity);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart"); // change to your checkout route
  };

  return (
    <div className="pd-page">
      <Navbar />

      <main className="pd-main">
        <nav className="pd-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to={`/category/${slug}`}>{category.title}</Link>
          <span>/</span>
          <span className="pd-current">{product.name}</span>
        </nav>

        <div className="pd-layout">
          {/* LEFT: gallery */}
          <section className="pd-gallery">
            <div className="pd-main-image">
              <img src={images[activeImage]} alt={product.name} />
            </div>

            <div className="pd-thumbs">
              {images.map((img, index) => (
                <button
                  type="button"
                  key={img}
                  className={`pd-thumb ${index === activeImage ? "active" : ""}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </section>

          {/* RIGHT: info */}
          <section className="pd-info">
            <div className="pd-card">
              <h1>{product.name}</h1>

              <div className="pd-rating">
                <span
                  className="pd-stars"
                  style={{ "--rating": product.rating }}
                  aria-hidden="true"
                >
                  ★★★★★
                </span>
                <strong>{product.rating}</strong>
                <span>({product.reviews} reviews)</span>
              </div>

              <div className="pd-price-row">
                <strong className="pd-price">₹{product.price}</strong>
                <del>₹{product.oldPrice}</del>
                <span className="pd-discount">{product.discount}</span>
              </div>

              <p className="pd-description">
                {product.description || "Fresh and delivered from shops near you."}
              </p>

              <hr />

              <p className={`pd-stock ${inStock ? "" : "out"}`}>
                <span className="pd-dot" />
                {inStock ? "In stock, delivered fresh." : "Currently out of stock."}
              </p>

              <div className="pd-actions">
                <div className="pd-qty-wrap">
                  <span>Quantity</span>
                  <div className="pd-qty">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span>{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="pd-btn pd-btn-primary"
                  onClick={handleAddToCart}
                  disabled={!inStock}
                >
                  🛒 Add to Cart
                </button>

                <button
                  type="button"
                  className="pd-btn pd-btn-outline"
                  onClick={handleBuyNow}
                  disabled={!inStock}
                >
                  Buy Now
                </button>
              </div>
            </div>

            <div className="pd-card">
              <h2>Product details</h2>
              <dl className="pd-details">
                <div>
                  <dt>Origin</dt>
                  <dd>{product.origin || "Local farms"}</dd>
                </div>
                <div>
                  <dt>Weight</dt>
                  <dd>{product.weight}</dd>
                </div>
                <div>
                  <dt>Storage</dt>
                  <dd>{product.storage || "Store in a cool, dry place."}</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
