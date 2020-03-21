import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

function Cart ({ list, totalSumm, setRemoveFromCartMessage }) {

  if (!list.length) {
    return (
      <div className='mt-5 mb-5'>
        <div className="text-muted"> Your cart is empty.</div>
      </div>
    )
  }

  return (
    <div className='mt-3 mb-3'>
      {list.map(el => <CartItem key={el.id} product={el} setRemoveFromCartMessage={setRemoveFromCartMessage}/>)}
      <Link to='/shiping-details'>
        <button className='btn btn-warning ml-5'>Checkout Total: $ {totalSumm.toFixed(2)}</button>
      </Link>
    </div>
  )
}

export default Cart
