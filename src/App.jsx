import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import PlaceOrder from './pages/placeorder/PlaceOrder.jsx';

import Cart from './pages/cart/cart'
import Footer from './components/Footer/Footer.jsx';
import Loginpopup from './components/Loginpopup/Loginpopup.jsx';


const App = () => {

  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {showLogin&& <Loginpopup setShowLogin={setShowLogin}/>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App
