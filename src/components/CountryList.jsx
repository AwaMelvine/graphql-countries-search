import React, { useContext } from 'react';

import Country from './Country';
import { CountriesContext } from '../pages/SearchCountries';
import LoadingImg from '../assets/loading.gif';

import { CountriesWrapper, StyledLoading } from './styles';

const CountryList = ({ loading }) => {
  const { countries } = useContext(CountriesContext);

  if (countries.searchedCountries.length === 0) {
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
      {countries.searchedCountries.length > 0 &&
        countries.searchedCountries.map((country) => (
          <Country country={country} key={country.code} />
        ))}
    </CountriesWrapper>
  );
};
export default CountryList;
