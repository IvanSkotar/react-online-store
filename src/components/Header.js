import React from 'react'
import { connect } from 'react-redux'

function Header (props) {
  return (
    <nav className="navbar navbar-light bg-secondary">
      <div className="container">
        <a className="navbar-brand text-light" href="#">
          <img
            src="https://getbootstrap.com//docs/4.4/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top mr-3"
            alt=""/>
          Bootstrap
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
