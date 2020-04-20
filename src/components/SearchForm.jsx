import React, { useState } from 'react';
import styled from 'styled-components';

const SearchFormWrapper = styled.header`
  border: 1px dashed green;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchForm = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => setCode(e.target.value);

  return (
    <SearchFormWrapper>
      <input type='text' name='code' value={code} onChange={handleChange} />
      <button type='submit'>Search</button>
    </SearchFormWrapper>
  );
};

export default SearchForm;
