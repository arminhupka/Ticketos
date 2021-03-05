import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  position: relative;
  margin-bottom: 2rem;
  font-size: 3rem;
`;

const Heading = ({ title }) => <StyledHeading>{title}</StyledHeading>;

export default Heading;
