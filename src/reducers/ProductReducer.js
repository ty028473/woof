const { v1: uuidv1 } = require('uuid')

export const ProductReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return [
        ...state,
        {
          id: uuidv1(),
          // pet_sitter_id: '',
          pet_sitter_id: action.product.time.pet_sitter_id,
          // district: '',
          district: action.product.time.district,
          start: action.product.time.start,
          end: action.product.time.end,
          title: action.product.time.title,
          address: action.product.address,
          pet_id: action.product.selectedPetId,
        },
      ]
    case 'REMOVE_PRODUCT':
      return state.filter((product) => product.id !== action.id)
    default:
      return state
  }
}
