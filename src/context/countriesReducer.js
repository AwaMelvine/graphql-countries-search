import { SET_NEW_COUNTRIES, REMOVE_COUNTRY } from './types';

const initialState = [];

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_COUNTRIES:
      return [...action.payload, ...state];
    case REMOVE_COUNTRY:
      return state.filter((country) => country.code !== action.payload);
    default:
      return;
  }
};
