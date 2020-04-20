import { SET_NEW_COUNTRIES } from './types';

export const countriesReducer = (state, action) => {
  switch (action.type) {
    case SET_NEW_COUNTRIES:
      return [...action.payload, ...state];
    default:
      return;
  }
};
