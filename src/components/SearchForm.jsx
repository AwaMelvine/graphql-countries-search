import React, { useState } from 'react';

import {
  SearchFormWrapper,
  StyledSearchBtn,
  StyledSearchInput,
} from './styles';
import { FETCH_COUNTRIES } from '../graphql/queries';
import { useQuery } from 'react-apollo';

const SearchForm = ({ handleSearchCountries, loading }) => {
  const [code, setCode] = useState('');

  const { loading: loadingCountries, data: allCountries } = useQuery(
    FETCH_COUNTRIES
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchCountries(code.toUpperCase());
    setCode('');
  };

  return (
    <SearchFormWrapper>
      <form action='' method='post'>
        <StyledSearchInput
          name='code'
          onChange={(e) => {
            setCode(e.target.value);
          }}
        >
          <option value=''>Search for country</option>
          {allCountries &&
            allCountries.countries.map((ctry) => (
              <option key={ctry.code} value={ctry.code}>
                {ctry.name} - ({ctry.code})
              </option>
            ))}
        </StyledSearchInput>
        <StyledSearchBtn
          type='submit'
          disabled={loading}
          onClick={handleSubmit}
        >
          {loading ? 'Loading...' : 'Search'}
        </StyledSearchBtn>
      </form>
    </SearchFormWrapper>
  );
};

export default SearchForm;
