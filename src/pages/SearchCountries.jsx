import React, { useState, useEffect } from 'react';
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

const SearchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [search, { called, loading, data }] = useLazyQuery(SEARCH_COUNTRIES);

  const handleSearchCountries = (code) => {
    search({ variables: { code } });
  };

  useEffect(() => {
    if (called && !loading) {
      setCountries((countries) => countries.concat(data.countries));
    }
  }, [data, loading, called]);

  return (
    <SearchWrapper>
      <SearchForm
        loading={called && loading}
        handleSearchCountries={handleSearchCountries}
      />
      <CountryList countries={countries} />
    </SearchWrapper>
  );
};

export default SearchCountries;
