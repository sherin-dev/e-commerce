import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx';
import Shop from './shop/Shop.jsx';
<<<<<<< HEAD
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import About from './about/About.jsx';
import Contact from './contact/Contact.jsx';
import SingleBlog from './Blog/SingleBlog.jsx';
=======
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from './shop/CartPage.jsx';
>>>>>>> 86668e23df941ddc02558314fb5c6740d60ccb4f

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/blog",element:<Blog/>},
<<<<<<< HEAD
      {path:"/blog/:1d",element:<SingleBlog/>},
      {path:"/shop",element:<Shop/>},
      {path:"/login",element:<Login/>},
      {path:"/sign-up",element:<SignUp/>},
      {path:"/about",element:<About/>},
      {path:"/contact",element:<Contact/>},
=======
      {path:"/shop",element:<Shop/>},
      {path:"shop/:id",element:<SingleProduct/>},
      {path:"/cart-page",element:<CartPage/>},

>>>>>>> 86668e23df941ddc02558314fb5c6740d60ccb4f
    ],
  
  },]
);

ReactDOM.createRoot(document.getElementById('root')).render(
 
     <RouterProvider router={router} />
  
)