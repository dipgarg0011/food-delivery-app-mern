import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import PlaceOrder from './pages/placeorder/PlaceOrder.jsx';

import Cart from './pages/cart/cart'


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
      </Routes>
    </div>
  )
}

export default App
