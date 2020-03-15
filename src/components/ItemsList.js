import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'

function ItemsList (props) {

  return (
    <div className="container">
      <div className="row row-cols-3 row-cols-md-3 mt-4">
        {props.allProducts.map(el => <Item key={el.id} product={el}/>)}
      </div>
    </div>
  )
}

const mapStoreToProps = (store) => {
  let arr = []
  Object.values(store.shop.products).map(el => arr.push(...el))
  return {
    allProducts: arr
  }
}

export default connect(mapStoreToProps)(ItemsList)
