import styled, {css} from "styled-components";

const Button = styled.button`
  padding: 1.5rem 2rem;
  font-weight: 600;
  color: #fff;
  background-color: ${({theme}) => theme.primary};
  border: none;
  border-radius: .5rem;
  text-transform: uppercase;
  
  ${({primary}) => (
      primary && css`
        display: none;
      `
  )}
`

export default Button