import React, { useState } from 'react';

import {
  SearchFormWrapper,
  StyledSearchBtn,
  StyledSearchInput,
} from './styles';

const SearchForm = ({ handleSearchCountries, allCountries, loading }) => {
  const [code, setCode] = useState('');

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
            allCountries.map((ctry) => (
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
