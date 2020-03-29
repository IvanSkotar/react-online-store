import React from 'react'
import { connect } from 'react-redux'
import { removeItemFromWatchList } from '../actions/shopActions'
import { Link } from 'react-router-dom'

function WatchListItem ({ product, removeItem }) {

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-1">
          <img src={product.image} className="card-img p-2" alt={product.title}/>
        </div>
        <div className="col-md-9">
          <div className="card-body">
            <Link to={`/product/${product.id}`}>
              <h5 className="card-title">{product.title}</h5>
            </Link>
          </div>
        </div>
        <div className="col-md-1.5 text-right m-3">
          <div>Price: $ {product.price.toFixed(2)}</div>
          <button className="btn btn-danger btn-sm ml-2" onClick={() => removeItem(product.id)}> Remove </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeItem: (id) => dispatch(removeItemFromWatchList(id))
})

export default connect(null, mapDispatchToProps)(WatchListItem)
