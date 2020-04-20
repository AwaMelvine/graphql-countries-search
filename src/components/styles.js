import styled from 'styled-components';

export const CountriesWrapper = styled.div`
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

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
  }
`;

// Search form styles

export const SearchFormWrapper = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSearchBtn = styled.button`
  cursor: pointer;
  display: inline-block;
  min-height: 1em;
  border: none;
  background: #42818e;
  border: 1px solid #42818e;
  color: white;
  margin: 0 0.25em 0 0;
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  text-align: center;
  text-decoration: none;
`;

export const StyledSearchInput = styled.select`
  height: 47px;
  margin: 0;
  max-width: 100%;
  outline: 0;
  text-align: left;
  font-size: 1.1rem;
  padding: 0.75rem 1rem;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
`;

// Country styles

export const StyledCountry = styled.div`
  background-color: lemonchiffon;
  padding: 20px;
  height: 100px;
  position: relative;

  &:hover {
    button.btn {
      opacity: 1;
      transition: opacity 0.15s ease-in-out;
    }
  }
`;

export const CancelBtnStyled = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
  background: transparent;
  border: none;
`;
