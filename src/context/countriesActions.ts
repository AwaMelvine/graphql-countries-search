import { SET_NEW_COUNTRY, REMOVE_COUNTRY } from './types';
import { ICountry } from '../components/Country';

export const setNewCountry = (country: ICountry) => ({
  type: SET_NEW_COUNTRY,
  payload: country,
});

export const removeCountry = (countryCode: string) => ({
  type: REMOVE_COUNTRY,
  payload: countryCode,
});
