import { REMOVE_COUNTRY, SET_NEW_COUNTRY } from './types';

export const countriesReducer = (state, action) => {
  switch (action.type) {
    case SET_NEW_COUNTRY:
      const existingCountryCodes = state.searchedCountries.map(
        (ctry) => ctry.code
      );
      if (existingCountryCodes.includes(action.payload.code)) {
        return state;
      }
      return {
        ...state,
        searchedCountries: [action.payload, ...state.searchedCountries],
      };
    case REMOVE_COUNTRY:
      return {
        ...state,
        searchedCountries: state.searchedCountries.filter(
          (country) => country.code !== action.payload
        ),
      };
    default:
      return;
  }
};
