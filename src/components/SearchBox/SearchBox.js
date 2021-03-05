import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { firestore } from '../../services/firebase';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 40rem;
  padding: 4rem 2rem;
  background-color: #fff;
  border-radius: 0.5rem;

  ${Input} {
    margin-bottom: 2rem;
  }
`;

const Branding = styled.h1`
  align-self: center;
  margin-bottom: 4rem;
  font-size: 4rem;
`;

const SearchBox = () => {
  const [ticketId, setTicketId] = useState('');
  const [found, setFound] = useState(false);
  const [err, setErr] = useState('');

  const handleInput = (e) => setTicketId(e.target.value);

  const findTicket = async (ticketId) => {
    const ticketRef = await firestore.collection('tickets').where('id', '==', ticketId);
    const snapshot = await ticketRef.get();
    setErr('');
    if (snapshot.empty) {
      setErr('Ticket not found');
    } else {
      setFound(true);
    }
  };

  return (
    <>
      {found ? <Redirect to={`/ticket/${ticketId}`} state={{ id: ticketId }} /> : null}
      <Container>
        <Branding>Supporteo</Branding>
        <Input placeholder="Ticket ID" onChange={handleInput} />
        <p>{err}</p>
        <Button onClick={() => findTicket(ticketId)}>FIND TICKET</Button>
      </Container>
    </>
  );
};

export default SearchBox;
