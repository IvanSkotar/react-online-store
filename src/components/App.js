import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ItemsList from './ItemsList'
import Cart from './Cart'


function App () {
  return (
    <div className=''>
      <Header/>
      <div className="container">
        <ItemsList/>
        <Cart/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
