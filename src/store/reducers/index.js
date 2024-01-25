import { combineReducers } from 'redux';

import coffeeReducer from './coffeeReducer';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  coffeeReducer,
  productsReducer,
});

export default rootReducer;
