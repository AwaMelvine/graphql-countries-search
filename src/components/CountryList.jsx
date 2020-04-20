import React, { useContext } from 'react';
import Country from './Country';
import { CountriesContext } from '../pages/SearchCountries';

const CountryList = () => {
  const { countries } = useContext(CountriesContext);

  return (
    <div className='countries'>
      {countries.length > 0 &&
        countries.map((country) => (
          <Country country={country} key={country.code} />
        ))}
    </div>
  );
};
export default CountryList;
