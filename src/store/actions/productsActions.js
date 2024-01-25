export const TOGGLE_HOT = 'TOGGLE_HOT';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const toggleHot = () => {
  return { type: TOGGLE_HOT };
};

export const addFavorite = (movie) => {
  return { type: ADD_PRODUCT, payload: movie };
};

export const removeFavorite = (id) => {
  return { type: REMOVE_PRODUCT, payload: Number(id) };
};
