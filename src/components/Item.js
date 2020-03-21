import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/shopActions'
import StatusMessage from './StatusMessage'

function Item ({ product, addToCart }) {

  const [ mess, setMess ] = useState()

  const addItemHandle = () => {
    addToCart({ ...product, count: 1 })
    setMess(<StatusMessage
      show={'fade show'}
      color={'secondary'}
      message={<span>${product.title}<br/><b>Added to card</b></span>}
    />)
    setTimeout(() => {setMess(<StatusMessage show={'fade'}/>)}, 4000)
  }

  return (
    <div className="col mb-4">
      <div className="card">
        {mess}
        <img
          src={product.image}
          className="card-img-top p-1"
          alt={product.title}/>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <button
            className="btn btn-secondary mr-5"
            onClick={() => addItemHandle()}>
            Add to Cart
          </button>
          <h4 className='d-inline'>
            <span className='badge badge-light'>$ {product.price.toFixed(2)}</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(Item)
