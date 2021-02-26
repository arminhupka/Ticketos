import styled from 'styled-components'

const StyledInput = styled.input`
  flex: 1;
  padding: 1.5rem 2rem;
  background-color: ${({theme}) => theme.lightGray};
  border: none;
  border-radius: .5rem;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 1px 3px rgb(50 50 93 / 5%), 0 1px 10px rgb(0 0 0 / 2%);
  ::placeholder {
    color: ${({theme}) => theme.gray};
  }
  
  :active, :focus {
    //outline: none;
    outline-color: ${({theme}) => theme.primary};
  }
`

export default StyledInput
