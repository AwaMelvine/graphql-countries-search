import React, { useContext } from 'react';
import styled from 'styled-components';

import Country from './Country';
import { CountriesContext } from '../pages/SearchCountries';
import LoadingImg from '../assets/loading.gif';

const CountriesWrapper = styled.div`
  border-radius: 6px;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background: white;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
  }
`;

const CountryList = ({ loading }) => {
  const { countries } = useContext(CountriesContext);

  if (countries.length === 0) {
    return (
      <CountriesWrapper>
        <p>No Countries yet. </p>
      </CountriesWrapper>
    );
  }

  return (
    <CountriesWrapper>
      {loading && (
        <StyledLoading>
          <img src={LoadingImg} alt='Loading Indicator' />
        </StyledLoading>
      )}
      {countries.length > 0 &&
        countries.map((country) => (
          <Country country={country} key={country.code} />
        ))}
    </CountriesWrapper>
  );
};
export default CountryList;
