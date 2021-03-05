import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  padding: 0.5rem 1rem;
  color: #fff;
  background-color: ${({ status }) => status};
  border-radius: 0.3rem;
`;

const StatusBlob = ({ status }) => {
  const statusHandler = (status) => {
    switch (status) {
      case 'New':
        return 'green';
      case 'In Progress':
        return 'orange';
      case 'Closed':
        return 'red';
      default:
        return 'new';
    }
  };

  return <StyledSpan status={() => statusHandler(status)}>{status}</StyledSpan>;
};

export default StatusBlob;
