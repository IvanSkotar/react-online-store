import React from 'react'

function OrderItem ({ product }) {

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3">
          <img src={product.image} className="card-img p-2" alt={product.title}/>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <label className="card-title">{product.title}</label>
          </div>
        </div>
        <div className="col-md-3 p-2 text-right">
          <div>Price: $ {product.price.toFixed(2)}</div>
          <div>Count: {product.count}</div>
          <div>Total: $ {product.sum.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
