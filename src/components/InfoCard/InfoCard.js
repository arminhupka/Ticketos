import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaThumbsUp } from 'react-icons/all';

const LoaderAnim = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%);
  }
  
  100% {
    transform: translateX(0);
  }
`;

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

const Loader = styled.div`
  position: relative;
  height: 100%;
  width: 30%;
  margin-left: auto;
  background-color: ${({ theme }) => theme.primaryDark};
  overflow: hidden;
  ::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.primary};
    animation: ${LoaderAnim} 1s infinite;
    transform: translateX(0);
  }
`;

const InfoCard = ({ title, count }) => (
  <CardWrapper>
    <IconWrapper>
      <FaThumbsUp />
    </IconWrapper>
    <Title>{title}</Title>
    {count ? <Count>{count}</Count> : <Loader />}
  </CardWrapper>
);

export default InfoCard;
