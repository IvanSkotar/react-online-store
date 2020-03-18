import React from 'react'
import { connect } from 'react-redux'
import { cartItemCountDown, cartItemCountUp, removeItemFromCart } from '../actions/shopActions'

function CartItem ({ product, countDown, countUp, removeItem }) {

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src={product.image} className="card-img p-2" alt={product.title}/>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional
              content. This content is a little bit longer.</p>
          </div>
        </div>
        <div className="col-md-2 text-right m-3">
          <div>Price: $ {product.price.toFixed(2)}</div>
          <div>Total: $ {product.sum.toFixed(2)}</div>
          <div className='mt-3 mb-3'>
            <button className="btn btn-secondary btn-sm mr-2" onClick={() => countDown(product)}> - </button>
            {product.count}
            <button className="btn btn-secondary btn-sm ml-2" onClick={() => countUp(product)}> + </button>
          </div>
          <button className="btn btn-danger btn-sm ml-2" onClick={() => removeItem(product.id)}> Remove </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  countDown: (item) => dispatch(cartItemCountDown(item)),
  countUp: (item) => dispatch(cartItemCountUp(item)),
  removeItem: (id) => dispatch(removeItemFromCart(id))
})

export default connect(null, mapDispatchToProps)(CartItem)
