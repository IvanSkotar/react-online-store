import React from 'react'
import { connect } from 'react-redux'

function Header (props) {
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
        <button type="button" className="btn btn-default btn-lg text-light">
          {props.itemsInCart}
          <i className='fab fa-opencart mr-3 ml-3'/>
          Cart
        </button>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  itemsInCart: state.shop.cart.length
})

export default connect(mapStateToProps)(Header)
