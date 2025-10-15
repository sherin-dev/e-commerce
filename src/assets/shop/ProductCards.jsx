import React from'react'

const ProductCards = ({GridList, products}) => {

    return(
  <div className={`shop-product-wrap row jusify-content-center ${GridList ? "grid" : "list"}`}>
    {
        products.map((product, i)=>(
            <div key={i} className='col-Ig-4 col-md-6 col-12'>
               <div className='product-item'>
                 {/* product images */}
                <div className='product-thumb'>
                  <div className='pro-thumb'>
                    <img src={product.img} alt=''/>
                  </div>
                 {/* product actual links */}
                 <div className='product-action-link'>
                   <link to={`/shop/${product.id}`}><i className='icofont-eye'></i></link>
                   <a href='#'>
                    <i className='icofont-heart'></i>
                   </a>
                   <link to={"/cart-page"}><i className='icofont-cart-alt'></i></link>
                  </div>
                 </div>

                 {/* product content  */}
                 <div className='product-content'>
                    <h5>
                        <link to={`/shop/${product.id}`}>{product.name}</link>
                    </h5>
                    <p className='productRating'>
                        <Ratting/>
                    </p>
                    <h6>${product.price}</h6>
               </div>
            </div>
            {/* list style */}
             <div className='product-item-list-item'>
                 {/* product images */}
                <div className='product-thumb'>
                  <div className='pro-thumb'>
                    <img src={product.img} alt=''/>
                  </div>
                 {/* product actual links */}
                 <div className='product-action-link'>
                   <link to={`/shop/${product.id}`}><i className='icofont-eye'></i></link>
                   <a href='#'>
                    <i className='icofont-heart'></i>
                   </a>
                   <link to={"/cart-page"}><i className='icofont-cart-alt'></i></link>
                  </div>
                 </div>

                 {/* product content  */}
                 <div className='product-content'>
                    <h5>
                        <link to={`/shop/${product.id}`}>{product.name}</link>
                    </h5>
                    <p className='productRating'>
                        <Ratting/>
                    </p>
                    <h6>${product.price}</h6>
               </div>
            </div>
     </div>
        ))
    }

  </div>
    )
}
export default ProductCards