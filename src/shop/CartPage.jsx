import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import delImgUrl from "../assets/images/shop/del.png";
import CheckOutPage from "./CheckOutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from localStorage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Update local storage helper
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Calculate total price for each item
  const calculateTotalPrice = (item) => item.price * item.quantity;

  // Increase item quantity
  const handleIncrease = (item) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Decrease item quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCart);
      updateLocalStorage(updatedCart);
    }
  };

  // Remove an item from the cart
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter(
      (cartItem) => cartItem.id !== item.id
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  // Calculate totals
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + calculateTotalPrice(item),
    0
  );
  const orderTotal = cartSubtotal;

  return (
    <div>
      <PageHeader title="Shop Cart" curPage="Cart Page" />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* Cart Top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt={item.name} />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            value={item.quantity}
                            readOnly
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item).toFixed(2)}
                      </td>
                      <td className="cat-edit">
                        <button
                          type="button"
                          onClick={() => handleRemoveItem(item)}
                          className="border-0 bg-transparent"
                        >
                          <img src={delImgUrl} alt="Delete" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart Bottom */}
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    placeholder="Coupon code..."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <div className="checkout-container mt-4">
                  <CheckOutPage />
                </div>
              </div>

              {/* Shipping & Totals */}
              <div className="shipping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shipping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="us">United States (US)</option>
                          <option value="pak">Pakistan</option>
                          <option value="ind">India</option>
                          <option value="np">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalcode"
                        placeholder="Postcode / ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">
                            ${cartSubtotal.toFixed(2)}
                          </p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            ${orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cart Bottom Ends */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
