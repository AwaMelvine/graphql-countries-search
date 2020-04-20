import { REMOVE_COUNTRY, SET_NEW_COUNTRY } from './types';

const initialState = [];

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_COUNTRY:
      const existingCountryCodes = state.map((ctry) => ctry.code);
      if (existingCountryCodes.includes(action.payload.code)) {
        return state;
      }
      return [action.payload, ...state];
    case REMOVE_COUNTRY:
      return state.filter((country) => country.code !== action.payload);
    default:
      return;
  }
};
