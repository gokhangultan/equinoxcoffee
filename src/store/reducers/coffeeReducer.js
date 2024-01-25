import { ADD_COFFEE, DELETE_COFFEE } from '../actions/coffeeActions.js';
import coffees from '../../data.js';

const initialState = {
    coffees: coffees,
  coffeeType: 'Esspresso Based',
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
    default:
      return state;
  }
};

export default reducer;
