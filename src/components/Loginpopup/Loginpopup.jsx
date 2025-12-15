import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets';
const Loginpopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Login");
  return (
    <div className='Login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
            {currState==="Login" ?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currState==="Sign Up" ?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>I agree to the Terms of Service and Privacy Policy</p>
        </div>
        {currState==="Login" ?<p onClick={()=>setCurrState("Sign Up")}>Don't have an account? <span>Sign Up</span></p>:<p onClick={()=>setCurrState("Login")}>Already have an account? <span>Login</span></p>}

      </form>
    </div>
  )
}

export default Loginpopup
