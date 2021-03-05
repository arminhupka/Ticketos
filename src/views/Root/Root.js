import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import LoginView from '../LoginView/LoginView';
import RegisterView from '../RegisterView/RegisterView';
import DashboardView from '../DashboardView/DasboardView';
import TicketsView from '../TicketsView/TicketsView';
import NewTicketView from '../NewTicketView/NewTicketView';
import SettingsView from '../SettingsView/SettingsView';
import TicketDetailsView from '../TicketDetailsView/TicketDetailsView';
import ProfileView from '../ProfileView/ProfileView';
import SearchTicketView from '../SearchTicketView/SearchTicketView';
import CategoriesView from '../CategoriesVIew/CategoriesView';

import MainLayout from '../../layouts/MainLayout';
import CreateTicketView from '../CreateTicketView/CreateTicketView';
import { UserContext } from '../../provider/UserProvider';
import GlobalStyle from '../../styles/GlobalStyle';

const Root = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {user ? (
        <MainLayout>
          <Route exact path="/" component={DashboardView} />
          <Route path="/new-ticket" component={NewTicketView} />
          <Route path="/tickets" component={TicketsView} />
          <Route path="/ticket/:id" component={TicketDetailsView} />
          <Route path="/settings" component={SettingsView} />
          <Route path="/profile" component={ProfileView} />
          <Route path="/categories" component={CategoriesView} />
        </MainLayout>
      ) : (
        <>
          <Route exact path="/" component={CreateTicketView} />
          <Route path="/login" component={LoginView} />
          <Route path="/ticket/:id" component={TicketDetailsView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/search" component={SearchTicketView} />
        </>
      )}
    </>
  );
};

export default Root;
