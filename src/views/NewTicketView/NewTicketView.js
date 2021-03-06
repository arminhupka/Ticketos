import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import shortid from 'shortid';
import { Container } from '../../styles/GlobalStyle';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { firestore } from '../../services/firebase';
import Heading from '../../components/Heading/Heading';
import TextInput from '../../components/TextInput/TextInput';
import { UserContext } from '../../provider/UserProvider';
import Notification from '../../components/Notification/Notification';
import Select from '../../components/Select/Select';

const InnerContainer = styled(Container)``;

const StyledSection = styled.section`
  position: relative;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem 2.4rem;
  background-color: #fff;
  border-radius: 0.3rem;

  & > * {
    margin-bottom: 2rem;
  }
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;

  select {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    select {
      width: 50%;
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;

const NewTicketView = () => {
  const { user } = useContext(UserContext);
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');
  const [notification, setNotification] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const categoriesArr = [];
    const categoriesRef = await firestore.collection('categories');
    const snapshot = await categoriesRef.get();
    // eslint-disable-next-line max-len
    await snapshot.docs.forEach((el) => categoriesArr.push(el.data().name));
    setCategories(categoriesArr);
  };

  const addNewTicket = async () => {
    const id = shortid();
    await firestore
      .collection('tickets')
      .doc(id)
      .set({
        id,
        userId: user.uid,
        title: ticketTitle,
        createdAt: new Date(),
        status: 'New',
        messages: [
          {
            author: user.email,
            message: ticketMessage,
          },
        ],
      });
    setTicketTitle('');
    setTicketMessage('');
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 4000);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Helmet>
        <title>Add New Ticket | Supporteo</title>
      </Helmet>
      <InnerContainer>
        <StyledSection>
          <Heading title="New Ticket" />
          <StyledForm
            onSubmit={(e) => {
              e.preventDefault();
              addNewTicket();
            }}
          >
            <StyledRow>
              <Input placeholder="Title" value={ticketTitle} onChange={(e) => setTicketTitle(e.target.value)} />
              <Select name="categories" id="categories">
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </StyledRow>
            <TextInput placeholder="Message" value={ticketMessage} onChange={(e) => setTicketMessage(e.target.value)} />
            <Button type="submit">Add new ticket</Button>
          </StyledForm>
          <Notification notification={notification} />
        </StyledSection>
      </InnerContainer>
    </>
  );
};

export default NewTicketView;
