import { SET_NEW_COUNTRIES } from './types';

export const setNewCountries = (countries) => ({
  type: SET_NEW_COUNTRIES,
  payload: countries,
});
