export const DELETE_COFFEE = 'DELETE_COFFEE';
export const ADD_COFFEE = 'ADD_COFFEE';

export const deleteCoffee = (id) => {
  return { type: DELETE_COFFEE, payload: Number(id) };
};

export const addCoffee = (coffee) => {
  return { type: ADD_COFFEE, payload: coffee };
};
