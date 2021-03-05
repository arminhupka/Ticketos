import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyle';
import { firestore } from '../../services/firebase';
import Heading from '../../components/Heading/Heading';
import Message from '../../components/Message/Message';
import AddMessage from '../../components/AddMessage/AddMessage';

const StyledSection = styled.section``;

const InnerContainer = styled(Container)``;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
const MessagesWrapper = styled.div`
  flex: 3;
`;

const TicketDetailsView = ({
  match: {
    params: { id },
  },
}) => {
  const [ticket, setTicket] = useState('');

  const getTicket = async (tickedId) => {
    let ticket;
    const ticketRef = await firestore.collection('tickets').where('id', '==', tickedId);
    const snapshot = await ticketRef.get();
    snapshot.docs.forEach((snap) => {
      ticket = snap.data();
    });
    setTicket(ticket);
  };

  useEffect(() => {
    getTicket(id);
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${ticket.title} | Supporteo`}</title>
      </Helmet>
      <StyledSection>
        <InnerContainer>
          {ticket ? (
            <>
              <Heading title={`Ticket: #${id} -  ${ticket.title}`} />
              <ContentContainer>
                <MessagesWrapper>
                  {ticket.messages.map((m) => (
                    <Message author={m.author} message={m.message} file={m.attachment} />
                  ))}
                </MessagesWrapper>
                <AddMessage ticketid={id} getTicket={getTicket} />
              </ContentContainer>
            </>
          ) : (
            <h2>Loading</h2>
          )}
        </InnerContainer>
      </StyledSection>
    </>
  );
};

export default TicketDetailsView;
