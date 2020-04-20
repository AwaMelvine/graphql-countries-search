import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFormWrapper = styled.div`
  border: 1px dashed green;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
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
        <input type='text' name='code' value={code} onChange={handleChange} />
        <button type='submit' onClick={handleSubmit}>
          {loading ? 'Loading' : 'Search'}
        </button>
      </form>
    </SearchFormWrapper>
  );
};

export default SearchForm;
