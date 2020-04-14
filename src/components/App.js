import React, { useState } from 'react'
import Header from './Header'
import ItemsList from './ItemsList'
import Cart from './Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import ShipingDetails from './ShipingDetails'
import Checkout from './Checkout'
import ItemPage from './ItemPage'
import { addItemToWatchList, addToCart } from '../actions/shopActions'
import WatchList from './WatchList'
import { BASE_URL } from '../assets/constants'


function App ({
  cartList,
  itemsInCart,
  totalSumm,
  allProducts,
  addToCart,
  addToWatchList
}) {

  const [removeMessage, setRemoveMessage] = useState()
  const [addMessage, setAddMessage] = useState()

  return (
    <Router basename={BASE_URL}>
      <div>
        <Header totalSumm={totalSumm} itemsInCart={itemsInCart}/>
        {removeMessage}
        {addMessage}
        <div className="container">
          <Switch>
            <Route exact path='/'
                   render={() =>
                     <ItemsList allProducts={allProducts}
                                addToCart={addToCart}/>}/>
            <Route path='/cart'>
              <Cart totalSumm={totalSumm}
                    list={cartList}
                    setRemoveMessage={setRemoveMessage}
              />
            </Route>
            <Route path='/shiping-details'
                   component={ShipingDetails}/>
            <Route path='/checkout'>
              <Checkout totalSumm={totalSumm}/>
            </Route>
            <Route path='/product/:id'
                   render={({ match }) =>
                     <ItemPage product={allProducts[match.params.id - 1]}
                               addToCart={addToCart}
                               addToWatchList={addToWatchList}
                               setAddMessage={setAddMessage}/>}>
            </Route>
            <Route path='/watchlist'>
              <WatchList setRemoveMessage={setRemoveMessage}/>
            </Route>
          </Switch>
        </div>
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
  addToCart: (item) => dispatch(addToCart(item)),
  addToWatchList: (item) => dispatch(addItemToWatchList(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
