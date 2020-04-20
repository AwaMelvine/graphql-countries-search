import React from 'react';
import { gql, ApolloClient } from 'apollo-boost';
import SearchCountries from './pages/SearchCountries';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'https://countries.trevorblades.com/';

const client = new ApolloClient({
  link: createHttpLink({ uri }),
  cache: new InMemoryCache(),
});

const GET_COUNTRIES = gql`
  {
    country(filter: {code: "NG"}) {
      name
      phone
    }
  }
`;

client
  .query({
    query: GET_COUNTRIES,
  })
  .then((res) => {
    console.log('GrahpQl response', res);
  })
  .catch((err) => console.log(err));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <SearchCountries />
      </div>
    </ApolloProvider>
  );
}

export default App;
