import React, { useContext } from 'react';

import { CountriesContext } from '../pages/SearchCountries';
import { removeCountry } from '../context/countriesActions';
import { ReactComponent as Trash } from '../assets/icons/trash.svg';
import { StyledCountry, CancelBtnStyled } from './styles';

export interface ICountry {
  code: string;
  name: string;
  emoji: string;
  continent: {
    name: string;
  };
}

interface IProps {
  country: ICountry;
}

const Country = ({ country }: IProps) => {
  const { dispatch } = useContext(CountriesContext);

  return (
    <StyledCountry>
      <CancelBtnStyled
        className='btn'
        onClick={() => dispatch(removeCountry(country.code))}
      >
        <Trash fill='red' />
      </CancelBtnStyled>
      <h3>
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
