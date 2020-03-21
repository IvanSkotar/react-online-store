import React from 'react'
import Item from './Item'
import { connect } from 'react-redux'


function ItemsList ({ allProducts }) {

  return (
    <div className="container">
      <div className="row row-cols-3 row-cols-md-3 mt-4">
        {allProducts.map(el => <Item key={el.id} product={el}/>)}
      </div>
    </div>
  )
}

const mapStoreToProps = state => {
  let arr = []
  Object.values(state.shop.products).map(el => arr.push(...el))
  return {
    allProducts: arr
  }
}

export default connect(mapStoreToProps)(ItemsList)
