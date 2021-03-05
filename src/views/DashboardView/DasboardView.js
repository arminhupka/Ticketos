import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import Chart from 'react-apexcharts';
import { Container } from '../../styles/GlobalStyle';
import Heading from '../../components/Heading/Heading';
import InfoCard from '../../components/InfoCard/InfoCard';
import { firestore } from '../../services/firebase';

const InnerContainer = styled(Container)``;

const StyledSection = styled.section``;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    & > * {
      flex: 1;
    }
  }
`;

const DashboardView = () => {
  const [activeTickets, setActiveTickets] = useState(0);
  const [closedTickets, setClosedTickets] = useState(0);
  const [categoriesNumber, setCategoriesNumber] = useState(0);
  const [agents, setAgents] = useState(0);

  const state = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  const getTicketsNumber = async () => {
    const ticketsRef = await firestore.collection('tickets');
    const snapshot = await ticketsRef.get();
    setActiveTickets(snapshot.docs.length);
  };

  const getClosedTicket = async () => {
    const ticketsRef = await firestore.collection('tickets').where('status', '==', 'Closed');
    const snapshot = await ticketsRef.get();
    setClosedTickets(snapshot.docs.length);
  };

  const getCategoriesNumber = async () => {
    const categoriesRef = await firestore.collection('categories');
    const snapshot = await categoriesRef.get();
    setCategoriesNumber(snapshot.docs.length);
  };

  const getAgents = async () => {
    const usersRef = await firestore.collection('users');
    const snapshot = await usersRef.get();
    setAgents(snapshot.docs.length);
  };

  useEffect(() => {
    getTicketsNumber();
    getClosedTicket();
    getCategoriesNumber();
    getAgents();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Supporteo</title>
      </Helmet>
      <InnerContainer>
        <StyledSection>
          <Heading title="Dashboard" />
          <CardWrapper>
            <InfoCard title="Active Tickets" count={activeTickets} />
            <InfoCard title="Closed Tickets" count={closedTickets} />
          </CardWrapper>
          <CardWrapper>
            <InfoCard title="Categories" count={categoriesNumber} />
            <InfoCard title="Agents" count={agents} />
          </CardWrapper>
          <ChartWrapper>
            <Chart options={state.options} series={state.series} type="bar" />
            <Chart options={state.options} series={state.series} type="bar" />
          </ChartWrapper>
        </StyledSection>
      </InnerContainer>
    </>
  );
};

export default DashboardView;
