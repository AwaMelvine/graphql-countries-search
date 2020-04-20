import { SET_NEW_COUNTRIES, REMOVE_COUNTRY } from './types';

export const setNewCountries = (countries) => ({
  type: SET_NEW_COUNTRIES,
  payload: countries,
});

export const removeCountry = (countryCode) => ({
  type: REMOVE_COUNTRY,
  payload: countryCode,
});
