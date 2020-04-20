import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFormWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSearchBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  border: none;
  background: #42818e;
  border: 1px solid #42818e;
  color: white;
  margin: 0 0.25em 0 0;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  text-align: center;
  text-decoration: none;
`;

const StyledSearchInput = styled.input`
  margin: 0;
  max-width: 100%;
  outline: 0;
  text-align: left;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
`;

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
