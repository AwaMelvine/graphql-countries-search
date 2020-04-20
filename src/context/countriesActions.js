import { SET_NEW_COUNTRY, REMOVE_COUNTRY } from './types';

export const setNewCountry = (countries) => ({
  type: SET_NEW_COUNTRY,
  payload: countries,
});

export const removeCountry = (countryCode) => ({
  type: REMOVE_COUNTRY,
  payload: countryCode,
});
