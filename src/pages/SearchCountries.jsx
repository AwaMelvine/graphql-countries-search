import React from 'react';
import styled from 'styled-components';
import { useLazyQuery } from '@apollo/react-hooks';

import SearchForm from '../components/SearchForm';
import CountryList from '../components/CountryList';

import { SEARCH_COUNTRIES } from '../graphql/queries';

const SearchWrapper = styled.div`
  border: 1px solid red;
  width: 80%;
  margin: 50px auto;
  min-height: 200px;
`;

const SearchCountries = (code) => {
  const [search, { called, loading, data }] = useLazyQuery(SEARCH_COUNTRIES);

  const handleSearchCountries = (code) => search({ variables: { code } });

  if (called && loading) {
    return <div>Loading...</div>;
  }

  return (
    <SearchWrapper>
      <SearchForm handleSearchCountries={handleSearchCountries} />
      <CountryList />
    </SearchWrapper>
  );
};

export default SearchCountries;
