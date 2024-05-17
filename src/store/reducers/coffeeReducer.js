import { ADD_COFFEE, DELETE_COFFEE, SET_DATA } from '../actions/coffeeActions.js';
import coffees from '../../data.js';

const initialState = {
  coffees: coffees,
  coffeeType: 'Espresso Based',
  data: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_COFFEE:
      return {
        ...state,
        data: [...state.data.filter((item) => action.payload !== item.id)],
        coffees: [...state.coffees.filter((item) => action.payload !== item.id)],
      };
      
    case ADD_COFFEE:
      return {
        ...state,
        data: [...state.data, action.payload],
        coffees: [...state.coffees, action.payload],
      };
      
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
