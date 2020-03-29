export const addToCart = (item) => ({
  type: 'ADD_TO_CART',
  payload: item
})

export const cartItemCountDown = (item) => ({
  type: 'CART_COUNT_ITEM_DOWN',
  payload: item
})

export const cartItemCountUp = (item) => ({
  type: 'CART_COUNT_ITEM_UP',
  payload: item
})

export const removeItemFromCart = (id) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: id
})

export const saveShippingDetails = (info) => ({
  type: 'SAVE_SHIPPING_DETAILS',
  payload: info
})

export const addItemToWatchList = (item) => ({
  type: 'ADD_ITEM_TO_WATCHLIST',
  payload: item
})

export const removeItemFromWatchList = (id) => ({
  type: 'REMOVE_ITEM_FROM_WATCHLIST',
  payload: id
})
