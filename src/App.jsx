import { Outlet } from 'react-router-dom';
import './App.css'
import NavItems from "./components/NavItems";
import NavItems from "./components/Footer";

function App() {

  return (
    <>
    <div className='min-vw-100'>
      <Outlet/>
    </div>
    <footer/>
    </>
  );
}

export default App;
