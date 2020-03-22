import React from 'react'
import StatusMessage from './StatusMessage'
import { Link } from 'react-router-dom'

function ItemPage ({ product, addToCart, setAddToCartMessage }) {

  const addItemHandle = () => {
    addToCart({ ...product, count: 1 })
    setAddToCartMessage(<StatusMessage
      show={'fade show'}
      color={'secondary'}
      message={<span><b>Added to card:</b><br/>${product.title}</span>}
    />)
    setTimeout(() => {setAddToCartMessage(<StatusMessage show={'fade'}/>)}, 4000)
  }

  return (
    <div className='row mt-5 mb-5'>
      <div className='col'>
        <img className='card-img-top' src={product.image} alt=""/>
      </div>
      <div className='col'>
        <h3>{product.title}</h3>
        <hr/>
        <p className='card-text'>
          {product.description}
        </p>
        <hr/>
        <h3 className='text-right'>$ {product.price}</h3>
        <button className='btn btn-warning mr-3' onClick={addItemHandle}>Add to Cart</button>
        <Link to='/cart'>
          <button className='btn btn-warning mr-3' onClick={addItemHandle}>Buy it Now</button>
        </Link>
        <button className='btn btn-info' disabled title="COMING SOON...">Add to Watchlist</button>
      </div>
    </div>
  )
}

export default ItemPage
