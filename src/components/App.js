import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemsList from './ItemsList'
import Cart from './Cart'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ShipingDetails from './ShipingDetails'
import Checkout from './Checkout'
import ItemPage from './ItemPage'
import { addToCart } from '../actions/shopActions'

function App ({ cartList, itemsInCart, totalSumm, allProducts, addToCart }) {

  const [removeFromCartMessage, setRemoveFromCartMessage] = useState()
  const [addToCartMessage, setAddToCartMessage] = useState()

  return (
    <Router>
      <Redirect exact from="/" to="/products"/>
      <div>
        <Header totalSumm={totalSumm} itemsInCart={itemsInCart}/>
        {removeFromCartMessage}
        {addToCartMessage}
        <div className="container">
          <Switch>
            <Route path="/products" render={() => <ItemsList allProducts={allProducts} addToCart={addToCart}/>}/>
            <Route path="/cart">
              <Cart totalSumm={totalSumm} list={cartList} setRemoveFromCartMessage={setRemoveFromCartMessage}
              />
            </Route>
            <Route path="/shiping-details" component={ShipingDetails}/>
            <Route path="/checkout">
              <Checkout totalSumm={totalSumm}/>
            </Route>
            <Route path="/product/:id" render={({ match }) =>
              <ItemPage product={allProducts[match.params.id - 1]} addToCart={addToCart}
                        setAddToCartMessage={setAddToCartMessage}/>}>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

const mapStateToProps = state => {
  let arr = []
  Object.values(state.shop.products).map(el => arr.push(...el))
  return {
    allProducts: arr,
    cartList: state.shop.cart,
    itemsInCart: state.shop.cart.length,
    totalSumm: (() => {
      let sum = 0
      state.shop.cart.forEach(el => sum += el.sum)
      return sum
    })()
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)



