import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

function Cart ({ list, totalSumm }) {
  return (
    <div className='mt-3 mb-3'>
      {list.map(el => <CartItem key={el.id} product={el}/>)}
      <Link to='/shiping-details'>
        <button className='btn btn-warning ml-5'>Checkout Total: $ {totalSumm}</button>
      </Link>
    </div>
  )
}

export default Cart
