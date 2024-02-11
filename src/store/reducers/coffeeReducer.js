import { ADD_COFFEE, DELETE_COFFEE } from '../actions/coffeeActions.js';
import coffees from '../../data.js';

export const GlobalActionTypes = {
  setData: "SET_DATA"
};

const initialState = {
    coffees: coffees,
  coffeeType: 'Esspresso Based',
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COFFEE:
      return {
        ...state,
        coffees: state.coffees.filter((item) => action.payload !== item.id),
      };
    case ADD_COFFEE:
      return {
        ...state,
        coffees: [...state.coffees, action.payload],
      };
      case GlobalActionTypes.setData:
          return {
            ...state,
            data: action.payload,
          }

    default:
      return state;
  }
};

export default reducer;
