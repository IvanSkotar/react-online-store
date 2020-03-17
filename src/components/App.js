import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemsList from './ItemsList'
import Cart from './Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

function App ({ list, itemsInCart, totalSumm }) {
  return (
    <Router>
      <div className=''>
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



