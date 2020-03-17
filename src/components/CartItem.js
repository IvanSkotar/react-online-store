import React from 'react';
import { connect } from 'react-redux'
import { cartItemCountDown, cartItemCountUp, removeItemFromCart } from '../actions/shopActions'


function CartItem({product, countDown, countUp, removeItem}) {

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
          $ {product.price}
          <div className='mt-3 mb-3'>
            <button className="btn btn-info btn-sm mr-2" onClick={() => countDown(product.id)}> - </button>
            {product.count}
            <button className="btn btn-info btn-sm ml-2" onClick={() => countUp(product.id)}> + </button>
          </div>
          <button className="btn btn-danger btn-sm ml-2" onClick={() => removeItem(product.id)}>Remove</button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  countDown: (id) => dispatch(cartItemCountDown(id)),
  countUp: (id) => dispatch(cartItemCountUp(id)),
  removeItem: (id) => dispatch(removeItemFromCart(id))
})

export default connect(null, mapDispatchToProps)(CartItem);
