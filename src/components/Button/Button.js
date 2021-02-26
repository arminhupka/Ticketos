import styled, {css} from "styled-components";

const Button = styled.button`
  padding: 1.5rem 2rem;
  font-weight: 600;
  color: #fff;
  background-color: ${({theme}) => theme.primary};
  border: none;
  border-radius: .5rem;
  outline: none;
  text-transform: uppercase;
  transition: background-color .4s;
  :hover {
    background-color: ${({theme}) => theme.primaryLight};
  }
  
  ${({primary}) => (
      primary && css`
        display: none;
      `
  )}
`

export default Button
