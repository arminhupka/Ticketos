import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyle';
import Topbar from './Topbar/Topbar';
import { auth } from '../../services/firebase';

const StyledHeader = styled.header`
  padding: 2rem 0;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
`;

const InnerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 30rem;
  padding: 3rem;
  background-color: ${({ theme }) => theme.primary};
  transform: translateX(${({ visible }) => (visible ? '0' : '-100%')});
  transition: transform 0.6s;
  z-index: 100;
  @media screen and (min-width: 992px) {
    position: unset;
    top: unset;
    left: unset;
    height: unset;
    width: unset;
    padding: 0;
    transform: translateX(0);
  }
`;

const StyledList = styled.ul`
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

const StyledItem = styled.li`
  margin-bottom: 2rem;
  font-size: 2.5rem;
  cursor: pointer;
  @media screen and (min-width: 992px) {
    margin-bottom: 0;
    margin-left: 2rem;
    font-size: 1.4rem;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const HamburgerIcon = styled(FaBars)`
  position: relative;
  font-size: 3rem;
  cursor: pointer;
  z-index: 30;
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const PageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  z-index: 20;
  transition: visibility 0.6s, opacity 0.6s;
`;

const Header = () => {
  const [visible, setVisible] = useState(false);
  const listRef = useRef(StyledList);

  const history = useHistory();

  useEffect(() => {
    const linksArr = Array.from(listRef.current.children);
    linksArr.forEach((link) => link.addEventListener('click', () => setVisible(false)));
  }, []);

  const handleOverlay = () => setVisible(!visible);

  const userLogout = () => {
    auth.signOut();
    history.push('/');
  };

  return (
    <>
      <Topbar />
      <StyledHeader>
        <InnerContainer>
          <StyledLink to="/">
            <h1>Supporteo</h1>
          </StyledLink>
          <StyledNav visible={visible}>
            <StyledList ref={listRef}>
              <StyledItem>
                <StyledLink to="/">Dashboard</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to="/new-ticket">New Ticket</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to="/tickets">Tickets</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to="/categories">Categories</StyledLink>
              </StyledItem>
              <StyledItem>
                <StyledLink to="/profile">Profile</StyledLink>
              </StyledItem>
              <StyledItem onClick={userLogout}>Logout</StyledItem>
            </StyledList>
          </StyledNav>
          <HamburgerIcon onClick={() => setVisible(!visible)} />
        </InnerContainer>
      </StyledHeader>
      <PageOverlay visible={visible} onClick={handleOverlay} />
    </>
  );
};

export default Header;
