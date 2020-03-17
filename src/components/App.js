import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemsList from './ItemsList'
import Cart from './Cart'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App () {
  return (
    <Router>
      <div className=''>
        <Header/>
        <div className="container">
          <Switch>
            <Route path="/products">
              <ItemsList/>
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App



