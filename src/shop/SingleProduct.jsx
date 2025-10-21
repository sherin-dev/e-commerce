import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Review from './Review';
import PopularPost from './PopularPost';
import { Swiper, SwiperSlide } from "swiper/react";
// import productData from "../products.json"; // path inside src/
import axios from "axios";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import ProductDisplay from './ProductDisplay';
import Tags from './Tags';

const SingleProduct = () => {
  const [products, setProducts] = useState([]); // plural since it's a list
  const { id } = useParams();

  // useEffect(() => {
  //     setProducts(productData)
  // }, []);
  useEffect(() => {
  axios.get("/products.json")
    .then((res) => setProducts(res.data))
    .catch((err) => console.error("Error loading products:", err));
}, []);

  // Ensure both are numbers for comparison
  const result = products.filter((p) => p.id === parseInt(id));

  return (
    <div>
      <PageHeader title="OUR SHOP SINGLE" curPage="Shop / Single Product" />

      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">

            {/* Product Details Section */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="product-details">
                  <div className="row align-items-center">

                    {/* Product Images */}
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            Loop={true}
                            autoplay={{
                              delay: 2000,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]}
                            navigation={{
                              prevEl: ".pro-single-prev",
                              nextEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((item, i) => (
                              <SwiperSlide key={i}>
                                <div className="single-thumb">
                                  <img src={item.img} alt={item.name || "Product"} />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>

                          {/* Swiper navigation buttons */}
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Content */}
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        {result.length > 0 ? (
                          result.map((item) => (
                            <ProductDisplay key={item.id} item={item} />
                          ))
                        ) : (
                          <p>Loading product details...</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reviews Section */}
                <div className="review">
                  <Review />
                </div>
              </article>
            </div>

            {/* Sidebar Section */}
            <div className="col-lg-4 col-12">
              <aside className="ps-lg-4">
                <PopularPost />
                <Tags />
              </aside>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
