import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';

const StyledContainer = styled.div`
  margin-bottom: 1rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
`;

const CardHeader = styled.div`
  padding: 2rem 2.4rem;
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};
`;

const CardBody = styled.div`
  padding: 2rem 2.4rem;
`;

const CardAttachement = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 2.4rem;
  border-top: 1px solid ${({ theme }) => theme.lightGray};
`;

const StyledSpan = styled.span`
  margin-left: 1rem;
  font-size: 0.6em;
  font-weight: 400;
`;

const StyledIcon = styled(FaDownload)`
  margin-right: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
`;

const StyledLink = styled.a`
  color: #333;
  font-weight: 500;
`;

const Message = ({ author, message, file }) => (
  <StyledContainer>
    <CardHeader>
      <h3>
        {author}
        <StyledSpan>1 week ago</StyledSpan>{' '}
      </h3>
    </CardHeader>
    <CardBody>
      <p>{message}</p>
    </CardBody>
    {file ? (
      <CardAttachement>
        <StyledIcon />
        <StyledLink href={file}>Download file</StyledLink>
      </CardAttachement>
    ) : null}
  </StyledContainer>
);

export default Message;
