import React, { useEffect, createContext, useReducer } from 'react';
import styled from 'styled-components';
import { useLazyQuery } from '@apollo/react-hooks';

import SearchForm from '../components/SearchForm';
import CountryList from '../components/CountryList';
import { GET_COUNTRY } from '../graphql/queries';
import { countriesReducer, ICountryAction } from '../context/countriesReducer';
import { setNewCountry } from '../context/countriesActions';
import { ICountry } from '../components/Country';
import { ICountryState } from '../context/countriesReducer';

export interface ICountriesContext {
  countries: { searchedCountries: ICountry[]; allCountryCodes: ICountry[] };
  dispatch: React.Dispatch<any>;
}

export const CountriesContext = createContext<ICountriesContext>({
  countries: {
    searchedCountries: [],
    allCountryCodes: [],
  },
  dispatch: () => null,
});

const SearchWrapper = styled.div`
  width: 60%;
  margin: 50px auto;
  min-height: 200px;

  @media (max-width: 768px) {
    width: 98%;
  }
`;

const SearchCountries = () => {
  const [getCountry, { called, loading, data }] = useLazyQuery(GET_COUNTRY);

  const [countries, dispatch] = useReducer<
    React.Reducer<ICountryState, ICountryAction>
  >(countriesReducer, {
    searchedCountries: [],
    allCountryCodes: [],
  });

  const handleSearchCountries = (code: string) => {
    getCountry({ variables: { code } });
  };

  useEffect(() => {
    if (called && !loading && data.country) {
      dispatch(setNewCountry(data.country));
    }
  }, [data, loading, called]);

  return (
    <SearchWrapper>
      <SearchForm
        loading={called && loading}
        handleSearchCountries={handleSearchCountries}
      />
      <CountriesContext.Provider value={{ countries, dispatch }}>
        <CountryList loading={called && loading} />
      </CountriesContext.Provider>
    </SearchWrapper>
  );
};

export default SearchCountries;
