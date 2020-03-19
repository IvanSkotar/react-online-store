import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemsList from './ItemsList'
import Cart from './Cart'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ShipingDetails from './ShipingDetails'
import Checkout from './Checkout'


function App ({ list, itemsInCart, totalSumm }) {

  return (
    <Router>
      <Redirect exact from="/" to="/products" />
      <div>
        <Header
          totalSumm={totalSumm}
          itemsInCart={itemsInCart}
        />
        <div className="container">
          <Switch>
            <Route path="/products">
              <ItemsList/>
            </Route>
            <Route path="/cart">
              <Cart
                totalSumm={totalSumm}
                list={list}
              />
            </Route>
            <Route path="/shiping-details">
              <ShipingDetails/>
            </Route>
            <Route path="/checkout">
              <Checkout totalSumm={totalSumm}/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

const mapStateToProps = state => ({
  list: state.shop.cart,
  itemsInCart: state.shop.cart.length,
  totalSumm: (() => {
    let sum = 0
    state.shop.cart.forEach(el => sum += el.sum)
    return sum
  })()
})

export default connect(mapStateToProps)(App)



