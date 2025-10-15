import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import Blog from './blog/Blog'
import NavItems from './components/NavItems'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <NavItems/>    
    <div className='min-vh-100'>
      <Outlet/>
    </div>  
    <Footer/>

    </>
  )
}

export default App
