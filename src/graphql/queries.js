import { gql } from 'apollo-boost';

export const SEARCH_COUNTRIES = gql`
  query search($code: String) {
    countries(filter: { code: { eq: $code } }) {
      code
      name
      native
      continent {
        code
        name
      }
      states {
        code
        name
      }
      phone
      capital
      currency
      emoji
      emojiU
    }
  }
`;

export const GET_COUNTRY = gql`
  query getCountry($code: ID!) {
    country(code: $code) {
      code
      name
      native
      continent {
        code
        name
      }
      states {
        code
        name
      }
      phone
      capital
      currency
      emoji
      emojiU
    }
  }
`;

export const FETCH_COUNTRIES = gql`
  {
    countries {
      code
      name
    }
  }
`;
