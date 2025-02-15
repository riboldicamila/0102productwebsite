import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaGlobe,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaShippingFast,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { navLinksLeft, navLinksRight } from "../../Data/NavbarData";
import logoImage from "../Images/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Get cart state from Redux
  const cartItems = useSelector((state) => state.cart?.items);
  const cartItemCount = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleScroll = () => {
    setIsSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="top-bar">
        <FaShippingFast size={30} />
        <span> Free shipping on orders above £50</span>
      </div>

      <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
        <button
          className="hamburger-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="logo">
          <img src={logoImage} alt="Logo" />
        </div>

        <ul
          className={`nav-links ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
        >
          {navLinksLeft.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          {navLinksRight.map((link) => (
            <li key={link.name}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
          <li className="cart-icon">
            <Link to="/cart">
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <span className="cart-count">{cartItemCount}</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="thin-line"></div>
    </div>
  );
}

export default Navbar;
