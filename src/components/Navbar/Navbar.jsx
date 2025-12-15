import React, { useState , useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Storecontext } from "../../context/Storecontext";

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home")

  const {getCartTotal} = useContext(Storecontext);
  return (
    <div className='Navbar'>
      <Link to='/'><img src={assets.logo} alt="Logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <li className={menu === "home" ? "active" : ""}>
          <Link to="/" onClick={() => setMenu("home")}>home</Link>
        </li>

        <li className={menu === "menu" ? "active" : ""}>
          <a href="#explore-menu" onClick={() => setMenu("menu")}>menu</a>
        </li>

        <li className={menu === "mobile-app" ? "active" : ""}>
          <a href="#app-download" onClick={() => setMenu("mobile-app")}>
            mobile-app
          </a>
        </li>
        <li className={menu === "contact" ? "active" : ""}>
          <a href="#footer" onClick={() => setMenu("contact")}>contact us</a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="Cart" /></Link>
          <div className={getCartTotal() > 0 ? "dot" : ""}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
