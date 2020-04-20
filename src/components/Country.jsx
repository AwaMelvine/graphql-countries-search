import React, { useContext } from 'react';
import styled from 'styled-components';
import { CountriesContext } from '../pages/SearchCountries';
import { removeCountry } from '../context/countriesActions';

const StyledCountry = styled.div`
  background-color: lemonchiffon;
  padding: 20px;
  height: 100px;
  position: relative;

  &:hover {
    button.btn {
      opacity: 1;
      transition: opacity 0.15s ease-in-out;
    }
  }
`;

const CancelBtnStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
`;

const Country = ({ country }) => {
  const { dispatch } = useContext(CountriesContext);

  return (
    <StyledCountry>
      <CancelBtnStyled
        className='btn'
        onClick={() => dispatch(removeCountry(country.code))}
      >
        x
      </CancelBtnStyled>
      <h3 className='name'>
        {country.name} ({country.code})
      </h3>
      <p>{country.continent.name}</p>
    </StyledCountry>
  );
};
export default Country;
