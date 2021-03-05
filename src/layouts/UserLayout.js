import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryDark};
  & > * {
    flex: 1;
  }
`;

const UserLayout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Content>{children}</Content>
  </ThemeProvider>
);

export default UserLayout;
