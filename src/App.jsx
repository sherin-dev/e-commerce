import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import './App.css'
import Home from './home/Home'
import Blog from './blog/Blog'
import NavItems from './components/NavItems'
function App() {
  return (
    <>
    <NavItems/>      
        <Outlet/>
    </>
  )
}

export default App
