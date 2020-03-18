import React from 'react'
import PaymentDetails from './PaymentDetails'
import OrderDetails from './OrderDetails'
import { Link } from 'react-router-dom'

function Checkout ({totalSumm}) {
  return (
    <div className='mt-3 mb-3'>
      <div className="row">
        <div className='col d-inline-block mr-3'>
          <PaymentDetails/>
          <Link to='/shiping-details'>
            <button className='btn btn-secondary mr-3'>Back</button>
          </Link>
          <button className='btn btn-warning'>Confirm and Pay</button>
        </div>
        <div className='col d-inline-block'>
          ORDER DETAILS
          <OrderDetails totalSumm={totalSumm}/>
        </div>
      </div>
    </div>
  )
}

export default Checkout
