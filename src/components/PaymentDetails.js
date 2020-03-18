import React from 'react'
import { connect } from 'react-redux'

function PaymentDetails ({ name, address, email, phone }) {
  return (
    <div className='mb-3'>
      SHIPPING DETAILS
      <div className='mb-3 mt-2'>
        <div>{name}</div>
        <div>{address}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
      PAYMENT DETAILS
      <div className="form-group mt-2">
        <label>Name on card</label>
        <input className="form-control" placeholder="John Doe"/>
      </div>
      <div className="form-group">
        <label>Card number</label>
        <input type="text" className="form-control" placeholder="1111 2222 3333 4444"/>
      </div>
      <div className="form-group d-inline-block mr-3">
        <label>Valid through</label>
        <input className="form-control" placeholder="01/25"/>
      </div>
      <div className="form-group d-inline-block">
        <label>CVC code</label>
        <input type="text" className="form-control" placeholder="777"/>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.shop.shippingDetails.name,
  address: (() => {
    if(state.shop.shippingDetails.address2) return state.shop.shippingDetails.address + '' + state.shop.shippingDetails.address2
    return state.shop.shippingDetails.address
  })(),
  email: state.shop.shippingDetails.email,
  phone: state.shop.shippingDetails.phone,
})

export default connect(mapStateToProps)(PaymentDetails)
