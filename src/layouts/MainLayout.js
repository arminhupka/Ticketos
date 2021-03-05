import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../styles/Theme';
import Header from '../components/Header/Header';

const MainLayout = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <Header />
    {children}
  </ThemeProvider>
);

export default MainLayout;
