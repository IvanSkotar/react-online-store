import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/shopActions'

function Item ({ product, addToCart }) {
  return (
    <div className="col mb-4">
      <div className="card">
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
            onClick={() => {addToCart({ ...product, count: 1 })}}>
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
