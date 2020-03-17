export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item
})

export const cartItemCountDown = (id) => ({
  type: 'CART_COUNT_ITEM_DOWN',
  payload: id
})

export const cartItemCountUp = (id) => ({
  type: 'CART_COUNT_ITEM_UP',
  payload: id
})

export const removeItemFromCart = (id) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: id
})
