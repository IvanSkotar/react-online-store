import React from 'react';
import CartItem from './CartItem'
import { connect } from 'react-redux'


function Cart({list}) {
  return (
    <div>
      {list.map(el => <CartItem product={el}/>)}
    </div>
  );
}

const mapStoreToProps = state => ({
  list: state.shop.cart
})

export default connect(mapStoreToProps)(Cart);
