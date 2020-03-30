import React from 'react'
import { Link } from 'react-router-dom'

function Header ({ itemsInCart, totalSumm }) {

  return (
    <nav className="navbar navbar-light bg-secondary sticky-top">
      <div className="container">
        <Link to='/' className="navbar-brand text-light">
          <img
            src="https://www.iconninja.com/files/363/808/983/apple-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
            alt=""/>
          Mac Store
        </Link>
        <Link to='/watchlist' className="navbar-brand text-light">
          Watch List
        </Link>
        <Link to='/cart' type="button" className="btn btn-outline-light btn-lg">
          {itemsInCart}
          <i className='fab fa-opencart mr-3 ml-3'/>
          $ {totalSumm.toFixed(2)}
        </Link>
      </div>
    </nav>
  )
}

export default Header
