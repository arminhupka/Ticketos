import styled from "styled-components";

const TextInput = styled.textarea`
  min-height: 30rem;
  padding: 2rem;
  font-family: 'Montserrat', sans-serif;
  background-color: ${({theme}) => theme.lightGray};
  border: none;
  border-radius: .5rem;
  resize: vertical;
`

export default TextInput