import React from 'react';
import styled from 'styled-components';

const SearchFormWrapper = styled.header`
  border: 1px dashed green;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchForm = () => {
  return (
    <SearchFormWrapper>
      <input type='text' name='searchTerm' />
      <button type='submit'>Search</button>
    </SearchFormWrapper>
  );
};

export default SearchForm;
