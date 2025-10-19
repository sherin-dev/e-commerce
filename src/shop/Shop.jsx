import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Search } from './Search';
const showResults = "Showing 01 - 12 of 139 Results";
import Data from "../products.json"
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import ShopCategory from './ShopCategory';
import PopularPost from './PopularPost';
import Tags from './Tags';


const Shop = () => {
    const [GridList,setGridList] = useState(true);
    const [products, setproducts] = useState(Data);
    // console.log(products);

    //pagination
    const [currentPage,setCurrentPage] = useState(1);
    const productsperPage = 12;

    const indexOfLastProduct = currentPage * productsperPage;
    const indexOfFirstProduct = indexOfLastProduct - productsperPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct);

    // function to change the current page
    const paginate = (pageNumber) =>{
      setCurrentPage(pageNumber)
    };

    // filter product based on category
    const [selectedCategory,setSelectedCategory] = useState("All");
    const menuItems = [...new Set(Data.map((Val)=>Val.category))];

    const filterItem =(cuncat) => {
      const newItem = Data.filter((newVal) =>{
        return newVal.category === cuncat;
      })
      setSelectedCategory(curcat);
      setproducts(newItem);
    }

    return(
        <div>
            <PageHeader title="Our Shop Page" curPage="Shop"/>
             {/* shop page */}
        <div className='shop-page padding-tb'>
          <div className="container">
            <div className="row justify-content-center">
                <div className='col-Ig-8 col-12'>
                  <article>
                    {/* layout and title here */}
                    <div className='shop-title d-flex flex-warp justify-content-between'>
                        <p>{showResults}</p>
                        <div className={`product-view-mode ${GridList ? "gridActive": "listActiver"}`}>
                           <a className='grid' onClick={() => setGridList(!GridList)}>
                             <i className='iconfont-ghost'></i>
                           </a>
                            <a className='list' onClick={() => setGridList(!GridList)}>
                              <i className='iconfontlistine-dots'></i>
                           </a>
                        </div>
                    </div>
                    {/* product cards */}
                    <div>
                        <ProductCards GridList={GridList} products={currentProducts}/>
                    </div>
                    <Pagination
                    productsperPage={productsperPage}
                    totalProducts = {products.length}
                    paginate={paginate}
                    activePage = {currentPage}
                    />
                  </article>  
                </div>
                 <div className='col-Ig-4 col-12'>
                  <aside>
                    <Search products={products} GridList={GridList}/>
                   <ShopCategory 
                   filterItem={filterItem}
                   setItem={setproducts}
                   menuItems={menuItems}
                   setproducts={setproducts}
                   selectedCategory={selectedCategory}
                   /> 
                   <PopularPost/>
                   <Tags/>
                  </aside>
                </div>
            </div>
         </div>  
        </div>
        </div>
    )
}
export default Shop