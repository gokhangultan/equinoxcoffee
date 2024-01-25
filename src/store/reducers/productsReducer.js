import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    TOGGLE_HOT,
  } from '../actions/productsActions';

  const initialState = {
    products: [],
    isHot: true,
  };

  const reducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {
      case ADD_PRODUCT:
        if (state.products.find((item) => item.id === action.payload.id)) {
          newState = { ...state };
        } else {
          newState = {
            ...state,
            products: [...state.products, action.payload],
          };
        }
  
        return newState;
      case REMOVE_PRODUCT:
        return {
          ...state,
          products: state.products.filter((item) => action.payload !== item.id),
        };
        case TOGGLE_HOT:
            return { ...state, isHot: !state.isHot };
      default:
        return state;
    }
  };
  
  export default reducer;