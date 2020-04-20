import React from 'react';

const Country = ({ country }) => {
  return (
    <div className='country'>
      <p className='name'>
        {country.name} ({country.code})
      </p>
    </div>
  );
};
export default Country;
