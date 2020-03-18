import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { saveShippingDetails } from '../actions/shopActions'

function ShipingDetails ({ saveInfo }) {

  const [shippingInfo, setShippingInfo] = useState({})
  const states = ['Alaska', 'California', 'Texas', 'Washington']

  const inputNameHandler = (e) => {
    setShippingInfo({...shippingInfo, name: e.target.value});
  }

  const inputAddressHandler = (e) => {
    setShippingInfo({...shippingInfo, address: e.target.value});
  }

  const inputAddress2Handler = (e) => {
    setShippingInfo({...shippingInfo, address2: e.target.value});
  }

  const inputPhoneHandler = (e) => {
    setShippingInfo({...shippingInfo, phone: e.target.value});
  }

  const inputEmailHandler = (e) => {
    setShippingInfo({...shippingInfo, email: e.target.value});
  }

  const inputCityHandler = (e) => {
    setShippingInfo({...shippingInfo, city: e.target.value});
  }

  const inputStateHandler = (e) => {
    setShippingInfo({...shippingInfo, state: e.target.value});
  }

  const inputZipHandler = (e) => {
    setShippingInfo({...shippingInfo, zip: e.target.value});
  }

  console.log(shippingInfo)

  return (
    <form className='mt-3 mb-3'>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Michael Jackson"
          onChange={inputNameHandler}
          value={shippingInfo.name}/>
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="1234 Main St"
          onChange={inputAddressHandler}
          value={shippingInfo.address}/>
      </div>
      <div className="form-group">
        <label>Address 2</label>
        <input
          type="text"
          className="form-control"
          placeholder="Apartment, studio, or floor"
          onChange={inputAddress2Handler}
          value={shippingInfo.address2}/>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Phone number</label>
          <input
            type="text"
            className="form-control"
            onChange={inputPhoneHandler}
            value={shippingInfo.phone}/>
        </div>
        <div className="form-group col-md-6">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            onChange={inputEmailHandler}
            value={shippingInfo.email}/>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            onChange={inputCityHandler}
            value={shippingInfo.city}/>
        </div>
        <div className="form-group col-md-4">
          <label>State</label>
          <select className="form-control"
                  onChange={inputStateHandler}
                  value={shippingInfo.state}>
            <option defaultValue>Choose...</option>
            {states.map(el => <option key={el}>{el}</option>)}
          </select>
        </div>
        <div className="form-group col-md-2">
          <label>Zip</label>
          <input
            type="text"
            className="form-control"
            onChange={inputZipHandler}
            value={shippingInfo.zip}/>
        </div>
      </div>
      <Link to='/cart'>
        <button className='btn btn-secondary mr-3'>Back</button>
      </Link>
      <Link to='/checkout'>
        <button type="submit" className="btn btn-warning" onClick={() => saveInfo(shippingInfo)}>Order to Pay</button>
      </Link>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  saveInfo: (info) => dispatch(saveShippingDetails(info))
})

export default connect(null, mapDispatchToProps)(ShipingDetails)
