import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './views/Root/Root';
import UserProvider from './provider/UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Root />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
