import React, { useState } from 'react';

import {
  SearchFormWrapper,
  StyledSearchBtn,
  StyledSearchInput,
} from './styles';

const SearchForm = ({ handleSearchCountries, loading }) => {
  const [code, setCode] = useState('');

  const handleChange = (e) => setCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchCountries(code.toUpperCase());
    setCode('');
  };

  return (
    <SearchFormWrapper>
      <form action='' method='post'>
        <StyledSearchInput
          placeholder='Search country by code'
          type='text'
          name='code'
          value={code}
          onChange={handleChange}
        />
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
