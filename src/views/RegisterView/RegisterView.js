import React from 'react';
import RegisterBox from '../../components/RegisterBox/RegisterBox';
import GlobalStyle from '../../styles/GlobalStyle';
import FormLayout from '../../layouts/FormLayout';

const RegisterView = () => (
  <FormLayout>
    <GlobalStyle />
    <RegisterBox />
  </FormLayout>
);

export default RegisterView;
