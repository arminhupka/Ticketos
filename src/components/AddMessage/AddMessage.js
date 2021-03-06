import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import firebase, { firestore } from '../../services/firebase';

const StyledTextArea = styled.textarea`
  margin: 1rem 0;
  padding: 1rem;
  min-height: 20rem;
  font-family: 'Montserrat', sans-serif;
  border-radius: 0.3rem;
  resize: vertical;
`;

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);

  @media screen and (min-width: 992px) {
    //margin-left: 2rem;
  }
`;

const AddMessage = ({ ticketid, getTicket }) => {
  const [message, setMessage] = useState('');

  const addMessage = async (ticketid, message) => {
    const respond = {
      author: 'JANUSZ MAJ1',
      message,
    };
    if (!message) {
      return;
    }
    const ticketRef = await firestore.collection('tickets').doc(ticketid);
    await ticketRef.update({
      messages: firebase.firestore.FieldValue.arrayUnion(respond),
    });
    await getTicket(ticketid);
    setMessage('');
  };

  return (
    <StyledContainer>
      <h2>Add Message</h2>
      <StyledTextArea value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button
        onClick={() => {
          addMessage(ticketid, message);
        }}
      >
        Send message
      </Button>
    </StyledContainer>
  );
};

export default AddMessage;
