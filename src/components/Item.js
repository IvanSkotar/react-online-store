import React, { useState } from 'react'
import StatusMessage from './StatusMessage'
import { Link } from 'react-router-dom'
import { STATUS_MESSAGE_TIMEOUT } from '../assets/constants'

function Item ({ product, addToCart }) {

  const [addToCartMessage, setAddToCartMessage] = useState()

  const addItemHandle = () => {
    addToCart({ ...product, count: 1 })
    setAddToCartMessage(<StatusMessage
      show={'fade show'}
      color={'secondary'}
      message={<span><b>Added to card:</b><br/>${product.title}</span>}
    />)
    setTimeout(() => {setAddToCartMessage(<StatusMessage show={'fade'}/>)}, STATUS_MESSAGE_TIMEOUT)
  }

  return (
    <div className="col mb-4">
      <div className="card" style={{ height: '100%' }}>
        {addToCartMessage}
        <img
          src={product.image}
          className="card-img-top p-2 pt3"
          alt={product.title}/>
        <div className="card-body">
          <Link to={`/product/${product.id}`}>
            <h5 className="card-title">{product.title}</h5>
          </Link>
          <button
            className="btn btn-warning mr-1"
            onClick={addItemHandle}>
            Add to Cart
          </button>
          <Link to='/cart'>
            <button
              className="btn btn-warning mr-1"
              onClick={addItemHandle}>
              By Now
            </button>
          </Link>
          <h4 className='d-inline'>
            <span className='badge badge-light'>$ {product.price.toFixed(2)}</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Item
