import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductCards = ({ GridList, products }) => {
  const navigate = useNavigate();

  // Add product to cart and navigate
  const handleAddToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingProductIndex = existingCart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Increase quantity if product exists
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // Add new product with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Navigate to Cart Page
    navigate("/cart-page");
  };

  return (
    <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
      {products.map((product, i) => (
        <div key={i} className='col-lg-4 col-md-6 col-12'>
          {GridList ? (
            // Grid View
            <div className='product-item'>
              <div className='product-thumb'>
                <div className='pro-thumb'>
                  <img src={product.img} alt={product.name} />
                </div>
                <div className='product-action-link'>
                  <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                  <a href='#'><i className='icofont-heart'></i></a>
                  <a href='#' onClick={() => handleAddToCart(product)}>
                    <i className='icofont-cart-alt'></i>
                  </a>
                </div>
              </div>
              <div className='product-content'>
                <h5><Link to={`/shop/${product.id}`}>{product.name}</Link></h5>
                <p className='productRating'><Rating /></p>
                <h6>${product.price}</h6>
              </div>
            </div>
          ) : (
            // List View
            <div className='product-list-item'>
              <div className='product-thumb'>
                <div className='pro-thumb'>
                  <img src={product.img} alt={product.name} />
                </div>
                <div className='product-action-link'>
                  <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                  <a href='#'><i className='icofont-heart'></i></a>
                  <a href='#' onClick={() => handleAddToCart(product)}>
                    <i className='icofont-cart-alt'></i>
                  </a>
                </div>
              </div>
              <div className='product-content'>
                <h5><Link to={`/shop/${product.id}`}>{product.name}</Link></h5>
                <p className='productRating'><Rating /></p>
                <h6>${product.price}</h6>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
