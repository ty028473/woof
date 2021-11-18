const { v1: uuidv1 } = require('uuid')

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          district: action.product.district,
          address: action.product.address,
          pet_id: action.product.petIdsFromServer,
          start: action.product.start,
          end: action.product.end,
          title: action.product.title,
          id: uuidv1(),
        },
      ]
    case 'REMOVE_PRODUCT':
      return state.filter((product) => product.id !== action.id)
    default:
      return state
  }
}
