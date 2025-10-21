import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ added import

const desc =
  "Energies and deliver tactics metrics after visionary appropriate transition enterprise and sources applications emerging PSD template.";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;

  const [prequantity, setQuantity] = useState(quantity || 1);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => setSize(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1); // ✅ fixed condition
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id,
      img,
      name,
      price,
      quantity: prequantity,
      size,
      color,
      coupon,
    };

    // get cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex((p) => p.id === id);

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      existingCart.push(product);
    }

    // update localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // reset form
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");
  };
  

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span> {ratingsCount} reviews</span>
        </p>
        <h4>${price}</h4>
        <h6>Seller: {seller}</h6>
        <p>{desc}</p>
      </div>

      {/* Cart components */}
      <div>
        <form onSubmit={handleSubmit}>
          {/* Size */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* Color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* Quantity */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>-</div>
            <input
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>+</div>
          </div>

          {/* Coupon field */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <button type="submit" className="lab-btn">
            <span>Add to cart</span>
          </button>

          <Link to="/cart-page" className="lab-btn bg-primary ms-2">
            <span>Check out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
