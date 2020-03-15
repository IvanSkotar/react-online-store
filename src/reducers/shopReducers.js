import { products } from '../assets/products'

const shop = (state = {
  products: products,
  cart: []
}, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      let newItem;
      Object.values(state.products).map(el => el.map(item => {
        if(item.id === action.payload){
          newItem = item
        }
      }))
      return {
        ...state,
        cart: [
          ...state.cart,
          newItem
        ]
      }

    default:
      return state;
  }
}

export default shop;
