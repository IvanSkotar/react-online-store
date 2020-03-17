import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function Header ({ itemsInCart }) {
  return (
      <nav className="navbar navbar-light bg-secondary">
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            <img
              src="https://www.iconninja.com/files/363/808/983/apple-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top mr-3"
              alt=""/>
            Mac Store
          </a>
          <Link to='/products'>Products</Link>
          <Link to='/cart' type="button" className="btn btn-default btn-lg text-light">
            {itemsInCart}
            <i className='fab fa-opencart mr-3 ml-3'/>
            Cart
          </Link>
        </div>
      </nav>
  )
}

const mapStateToProps = state => ({
  itemsInCart: state.shop.cart.length
})

export default connect(mapStateToProps)(Header)
