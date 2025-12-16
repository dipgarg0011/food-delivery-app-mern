import React, { useContext } from 'react'
import './placeorder.css'
import { Storecontext } from '../../context/Storecontext';

const PlaceOrder = () => {

  const { getCartTotal } = useContext(Storecontext);

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name'/>
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code'/>
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details" id="">
              <p>Subtotal</p>
              <p>${getCartTotal()}</p>
            </div>
            <hr />
            <div className="cart-total-details" id="">
              <p>Delivery Fee</p>
              <p>${getCartTotal()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details" id="">
              <b><span>Total</span></b>
              <b>${getCartTotal()===0?0:getCartTotal() + 2}</b>
            </div>
          </div>
          <button>Proceed to Payment</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
