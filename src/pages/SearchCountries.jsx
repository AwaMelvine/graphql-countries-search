import React from 'react';
import styled from 'styled-components';

import SearchForm from '../components/SearchForm';
import CountryList from '../components/CountryList';

const SearchWrapper = styled.div`
  border: 1px solid red;
  width: 80%;
  margin: 50px auto;
  min-height: 200px;
`;

const SearchCountries = () => {
  return (
    <SearchWrapper>
      <SearchForm />
      <CountryList />
    </SearchWrapper>
  );
};

export default SearchCountries;
