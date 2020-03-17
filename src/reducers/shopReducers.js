import { products } from '../assets/products'

const initialState = {
  products: products,
  cart: []
}

const shop = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      const exist = state.cart.filter(el => el.id === action.payload.id)

      return {
        ...state,
        cart: (() => {
          if(exist.length > 0){
            return state.cart.map(el => {
              if(el.id === action.payload.id) return {...el, count: el.count + 1}
              return el
            })
          }
          return [...state.cart, action.payload]
        })()
      }

    default:
      return state;
  }
}

export default shop;
