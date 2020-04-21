import React from 'react';
import { REMOVE_COUNTRY, SET_NEW_COUNTRY } from './types';
import { ICountry } from '../components/Country';

export interface ICountryState {
  searchedCountries: ICountry[];
  allCountryCodes: ICountry[];
}

export interface ICountryAction {
  type: string;
  payload: any;
}

export const countriesReducer: React.Reducer<ICountryState, ICountryAction> = (
  state,
  action
) => {
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
          (country: ICountry) => country.code !== action.payload
        ),
      };
    default:
      return state;
  }
};
