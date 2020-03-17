import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/shopActions'

function Item (props) {
  return (
    <div className="col mb-4">
      <div className="card">
        <img
          src={props.product.image}
          className="card-img-top p-1"
          alt={props.product.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.product.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
            content.</p>
          <button
            className="btn btn-primary mr-5"
            onClick={() => {props.addToCart({...props.product, count: 1})}}>
            Add to Cart
          </button>
          $ {props.product.price}
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(Item)
