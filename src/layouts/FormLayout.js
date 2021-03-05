import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.primary};
`;

const FormLayout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <PageWrapper>{children}</PageWrapper>
  </ThemeProvider>
);

export default FormLayout;
