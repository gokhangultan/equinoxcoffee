// coffeeActions.js

export const DELETE_COFFEE = 'DELETE_COFFEE';
export const ADD_COFFEE = 'ADD_COFFEE';
export const SET_DATA = 'SET_DATA';

export const deleteCoffee = (id) => {
  return { type: DELETE_COFFEE, payload: Number(id) };
};

export const addCoffee = (coffee) => {
  return { type: ADD_COFFEE, payload: coffee };
};

export const setData = (data) => {
  return { type: SET_DATA, payload: data };
};

export const fetchMenuData = () => async (dispatch) => {
  try {
    const response = await fetch('https://6646fe9151e227f23ab09393.mockapi.io/api/v1/equinoxmenu');
    if (!response.ok) {
      throw new Error('Failed to fetch menu data');
    }
    const data = await response.json();
    dispatch(setData(data));
  } catch (error) {
    console.error('Error fetching menu data:', error.message);
  }
};
