import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Container } from '../../styles/GlobalStyle';
import Table from '../../components/Table/Table';
import Heading from '../../components/Heading/Heading';
import { firestore } from '../../services/firebase';

const InnerContainer = styled(Container)``;
const StyledSection = styled.section``;

const TicketsView = () => {
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    const tickets = [];
    setTickets([]);
    const ticketsRef = await firestore.collection('tickets');
    const snapshot = await ticketsRef.get();
    snapshot.docs.forEach((snap) => tickets.push(snap.data()));
    setTickets((prevState) => [...prevState, ...tickets]);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <Helmet>
        <title>My Tickets | Supporteo</title>
      </Helmet>
      <InnerContainer>
        <StyledSection>
          <Heading title="Tickets" />
          <Table tickets={tickets} getTickets={getTickets} />
        </StyledSection>
      </InnerContainer>
    </>
  );
};

export default TicketsView;
