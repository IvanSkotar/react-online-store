import React from 'react'
import Item from './Item'

function ItemsList () {
  return (
    <div className="container">
      <div className="row row-cols-3 row-cols-md-3 mt-5">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>
  )
}

export default ItemsList
