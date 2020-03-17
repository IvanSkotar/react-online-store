import React from 'react'
import CartItem from './CartItem'

function Cart ({ list, totalSumm }) {
  return (
    <div className='mt-3 mb-3'>
      {list.map(el => <CartItem product={el}/>)}
      <div className=''>Total: $ {totalSumm}</div>
    </div>
  )
}

export default Cart
