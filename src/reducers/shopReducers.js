const initialState = {data: null}

const shop = (state = initialState, action) => {

  switch (action.type) {
    case '1':
      return {
        ...state,
        data: 1
      }

    default:
      return state;
  }
}

export default shop;
