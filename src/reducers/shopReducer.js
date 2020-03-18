import { products } from '../assets/products'

const initialState = {
  products: products,
  cart: [],
  shippingDetails: {
    address: '',
    address2: ''
  }
}

const shop = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: (() => {
          const exist = state.cart.filter(el => el.id === action.payload.id)
          if (exist.length > 0) {
            return state.cart.map(el => {
              if (el.id === action.payload.id) return { ...el, count: el.count + 1, sum: el.sum + action.payload.price }
              return el
            })
          }
          return [...state.cart, { ...action.payload, sum: action.payload.price }]
        })()
      }

    case 'CART_COUNT_ITEM_DOWN':
      return {
        ...state,
        cart: state.cart.map(el => {
          if (el.id === action.payload.id) {
            if (el.count > 1) return { ...el, count: el.count - 1, sum: el.sum - action.payload.price }
          }
          return el
        })
      }

    case 'CART_COUNT_ITEM_UP':
      return {
        ...state,
        cart: state.cart.map(el => {
          if (el.id === action.payload.id) return { ...el, count: el.count + 1, sum: el.sum + action.payload.price }
          return el
        })
      }

    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(el => el.id !== action.payload)
      }

    case 'SAVE_SHIPPING_DETAILS':
      return {
        ...state,
        shippingDetails: {...action.payload}
      }

    default:
      return state
  }
}

export default shop
