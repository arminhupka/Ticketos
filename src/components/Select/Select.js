import styled from 'styled-components';

const Select = styled.select`
  padding: 1.5rem 2rem;
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.lightGray};
  border: none;
  border-radius: 0.5rem;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export default Select;
