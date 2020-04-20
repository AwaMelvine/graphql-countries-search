import React from 'react';
import Country from './Country';

const CountryList = (props) => {
  return (
    <div className='countries'>
      {props.countries.map((country) => (
        <Country country={country} key={country.code} />
      ))}
    </div>
  );
};
export default CountryList;
