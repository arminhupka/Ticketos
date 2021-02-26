import styled from "styled-components";

const StyledHeading = styled.h1`
  margin-bottom: 2rem;
  font-size: 4rem;
`

const Heading = ({title}) => (
    <StyledHeading>{title}</StyledHeading>
)

export default Heading