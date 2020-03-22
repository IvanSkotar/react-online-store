import React from 'react'
import { Link } from 'react-router-dom'

function Header ({ itemsInCart, totalSumm }) {

  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container">
        <Link to='/products' className="navbar-brand text-light" href="#">
          <img
            src="https://www.iconninja.com/files/363/808/983/apple-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
            alt=""/>
          Mac Store
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
