import React from 'react';
import styled from 'styled-components';
import { FaThumbsUp } from 'react-icons/all';

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.09);
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  padding: 1.5rem;
  background: linear-gradient(45deg, white, whitesmoke);
  border-radius: 50%;

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 1.5rem;
  }
`;

const Title = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`;

const Count = styled.span`
  margin-left: auto;
  font-size: 2.5rem;
  font-weight: 800;
`;

const InfoCard = ({ title, count }) => (
  <CardWrapper>
    <IconWrapper>
      <FaThumbsUp />
    </IconWrapper>
    <Title>{title}</Title>
    <Count>{count}</Count>
  </CardWrapper>
);

export default InfoCard;
