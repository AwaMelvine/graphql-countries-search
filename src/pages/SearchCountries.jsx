import React, { useEffect, createContext, useReducer } from 'react';
import styled from 'styled-components';
import { useLazyQuery } from '@apollo/react-hooks';

import SearchForm from '../components/SearchForm';
import CountryList from '../components/CountryList';
import { SEARCH_COUNTRIES } from '../graphql/queries';
import { countriesReducer } from '../context/countriesReducer';
import { setNewCountry } from '../context/countriesActions';

export const CountriesContext = createContext();

const SearchWrapper = styled.div`
  width: 60%;
  margin: 50px auto;
  min-height: 200px;

  @media (max-width: 768px) {
    width: 98%;
  }
`;

const SearchCountries = () => {
  const [search, { called, loading, data }] = useLazyQuery(SEARCH_COUNTRIES);

  const [countries, dispatch] = useReducer(countriesReducer, []);

  const handleSearchCountries = (code) => {
    search({ variables: { code } });
  };

  useEffect(() => {
    if (called && !loading && data.countries.length > 0) {
      dispatch(setNewCountry(data.countries[0]));
    }
  }, [data, loading, called]);

  return (
    <SearchWrapper>
      <SearchForm
        loading={called && loading}
        handleSearchCountries={handleSearchCountries}
      />
      <CountriesContext.Provider value={{ countries, dispatch }}>
        <CountryList />
      </CountriesContext.Provider>
    </SearchWrapper>
  );
};

export default SearchCountries;
