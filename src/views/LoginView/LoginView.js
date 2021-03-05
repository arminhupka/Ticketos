import React from 'react';
import styled from 'styled-components';
import LoginBox from '../../components/LoginBox/LoginBox';
import GlobalStyle, { Container } from '../../styles/GlobalStyle';
import FormLayout from '../../layouts/FormLayout';

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginView = () => (
  <FormLayout>
    <GlobalStyle />
    <StyledContainer>
      <LoginBox />
    </StyledContainer>
  </FormLayout>
);

export default LoginView;
