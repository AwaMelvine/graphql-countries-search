import React from 'react';
import styled from 'styled-components';

const StyledCountry = styled.div`
  background-color: lemonchiffon;
  padding: 20px;
  height: 100px;
  position: relative;

  &:hover {
    span.btn {
      opacity: 1;
      transition: opacity 0.15s ease-in-out;
    }
  }
`;

const CancelBtnStyled = styled.span`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
`;

const Country = ({ country }) => {
  return (
    <StyledCountry>
      <CancelBtnStyled className='btn'>x</CancelBtnStyled>
      <h3 className='name'>
        {country.name} ({country.code})
      </h3>
      <p>{country.continent.name}</p>
    </StyledCountry>
  );
};
export default Country;
