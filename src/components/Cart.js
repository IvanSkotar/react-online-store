import React from 'react';
import CartItem from './CartItem'
import { connect } from 'react-redux'

function Cart(props) {
  return (
    <div>
      {props.list.map(el => <CartItem item={el}/>)}
    </div>
  );
}

const mapStoreToProps = state => ({
  list: state.shop.cart
})

export default connect(mapStoreToProps)(Cart);
