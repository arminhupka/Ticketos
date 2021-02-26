import styled from "styled-components";

const StyledContainer = styled.div`
  margin-bottom: 1rem;
  padding: 2rem;
  color: #fff;
  background-color: ${({theme}) => theme.primary};
  border-radius: .5rem;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);

`

const Message = ({message}) => (
    <StyledContainer>
        <h2>Author</h2>
        <p>{message}</p>
    </StyledContainer>
)

export default Message
