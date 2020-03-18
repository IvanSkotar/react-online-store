import React from 'react'
import { connect } from 'react-redux'
import OrderItem from './OrderItem'

function OrderDetails ({ list, totalSumm }) {

  const shipping = list.length * 10;

  return (
    <div className='mt-3 mb-3'>
      {list.map(el => <OrderItem key={el.id} product={el}/>)}
      <div>
        <div className='row'>
          <div className='col'>Subtotal:</div>
          <div className='col text-right'>$ {totalSumm.toFixed(2)}</div>
        </div>
        <div className='row'>
          <div className='col'>Tax:</div>
          <div className='col text-right'>$ {(totalSumm * 0.095).toFixed(2)}</div>
        </div>
        <div className='row'>
          <div className='col'>Shipping:</div>
          <div className='col text-right'>$ {shipping.toFixed(2)}</div>
        </div>
        <div className='row font-weight-bold text-success'>
          <div className='col '>Total:</div>
          <div className='col text-right'>$ {(totalSumm + shipping).toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.shop.cart,
})

export default connect(mapStateToProps)(OrderDetails)
