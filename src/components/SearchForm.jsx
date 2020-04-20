import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFormWrapper = styled.form`
  border: 1px dashed green;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchForm = ({ handleSearchCountries }) => {
  const [code, setCode] = useState('');

  const handleChange = (e) => setCode(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchCountries(code.toUpperCase());
    setCode('');
  };

  return (
    <SearchFormWrapper>
      <input type='text' name='code' value={code} onChange={handleChange} />
      <button type='submit' onClick={handleSubmit}>
        Search
      </button>
    </SearchFormWrapper>
  );
};

export default SearchForm;
