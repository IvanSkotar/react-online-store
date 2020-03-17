import React from 'react'
import CartItem from './CartItem'

function Cart ({ list, totalSumm }) {
  return (
    <div>
      {list.map(el => <CartItem product={el}/>)}
      <div className=''>Total: $ {totalSumm}</div>
    </div>
  )
}

export default Cart
