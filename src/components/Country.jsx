import React, { useContext } from 'react';
import styled from 'styled-components';

import { CountriesContext } from '../pages/SearchCountries';
import { removeCountry } from '../context/countriesActions';
import { ReactComponent as Trash } from '../assets/icons/trash.svg';

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
  background: transparent;
  border: none;
`;

const Country = ({ country }) => {
  const { dispatch } = useContext(CountriesContext);

  return (
    <StyledCountry>
      <CancelBtnStyled
        className='btn'
        onClick={() => dispatch(removeCountry(country.code))}
      >
        <Trash fill='red' />
      </CancelBtnStyled>
      <h3 className='name'>
        {country.name} &nbsp;
        <span role='img' aria-label={`${country.name} Flag`}>
          {country.emoji}
        </span>
      </h3>
      <p>{country.continent.name}</p>
    </StyledCountry>
  );
};
export default Country;
