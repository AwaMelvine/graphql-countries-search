import React, { useContext } from 'react';

import Country, { ICountry } from './Country';
import { CountriesContext, ICountriesContext } from '../pages/SearchCountries';
import LoadingImg from '../assets/loading.gif';

import { CountriesWrapper, StyledLoading } from './styles';

const CountryList = ({ loading }: { loading: boolean }) => {
  const { countries } = useContext<ICountriesContext>(CountriesContext);

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
        countries.searchedCountries.map((country: ICountry) => (
          <Country country={country} key={country.code} />
        ))}
    </CountriesWrapper>
  );
};
export default CountryList;
