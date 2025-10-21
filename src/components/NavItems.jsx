import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setHeaderFixed(true);
      else setHeaderFixed(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Read cart items from localStorage and count them
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(totalCount);
    };

    updateCartCount(); // Initial count

    // Optional: Listen for storage changes if other tabs update the cart
    window.addEventListener("storage", updateCartCount);

    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3"><span>Create Account</span></Link>
            <Link to="/login"><span>Log in</span></Link>
            {/* Cart icon with count */}
            <Link to="/cart-page" className="ms-3 position-relative">
              <i className="icofont-cart-alt"></i>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <div className="logo">
                <Link to={"/"}>
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
            </div>

            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* Desktop cart icon */}
              <Link to="/cart-page" className="d-none d-md-block me-3 position-relative">
                <i className="icofont-cart-alt"></i>
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </Link>

              {/* sign in & log in */}
              <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
              <Link to="/login" className="d-none me-3 d-md-block">Log In</Link>

              {/* menu toggler */}
              <div onClick={() => setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="ellepsis-bar d-md-none" onClick={() => setSocialToggle(!socialToggle)}>
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
