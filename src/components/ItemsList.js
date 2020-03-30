import React from 'react'
import Item from './Item'

function ItemsList ({ allProducts, addToCart }) {

  return (
      <div className="row row-cols-3 row-cols-md-3 mt-4">
        {allProducts.map(el =>
          <Item
            key={el.id}
            product={el}
            addToCart={addToCart}/>)}
      </div>
  )
}

export default ItemsList
