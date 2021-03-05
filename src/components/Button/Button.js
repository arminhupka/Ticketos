import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 1.5rem 2rem;
  font-weight: 600;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 0.5rem;
  outline: none;
  text-transform: uppercase;
  transition: background-color 0.4s;

  :hover {
    background-color: ${({ theme }) => theme.primaryLight};
  }

  ${({ dark }) =>
    dark &&
    css`
      background-color: ${({ theme }) => theme.darkGray};

      :hover {
        background-color: ${({ theme }) => theme.gray};
      }
    `}
`;

export default Button;
