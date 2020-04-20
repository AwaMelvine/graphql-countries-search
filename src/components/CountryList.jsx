import React, { useContext } from 'react';
import styled from 'styled-components';

import Country from './Country';
import { CountriesContext } from '../pages/SearchCountries';

const CountriesWrapper = styled.div`
  border-radius: 6px;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  background: white;
`;

const CountryList = () => {
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
      {countries.length > 0 &&
        countries.map((country) => (
          <Country country={country} key={country.code} />
        ))}
    </CountriesWrapper>
  );
};
export default CountryList;
