import React from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  height: 15rem;
  width: 30rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  transform: translate(-50%, ${({ notification }) => (notification ? '-50%' : '-20%')});
  visibility: ${({ notification }) => (notification ? 'visible' : 'hidden')};
  opacity: ${({ notification }) => (notification ? 1 : 0)};
  transition: visibility 0.5s, transform 0.5s, opacity 0.5s;
`;

const Notification = ({ notification }) => (
  <StyledNotification notification={notification}>
    <h2>Added new Ticket</h2>
  </StyledNotification>
);

export default Notification;
