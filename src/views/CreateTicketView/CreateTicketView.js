import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import shortid from 'shortid';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyle';
import Input from '../../components/Input/Input';
import TextInput from '../../components/TextInput/TextInput';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import BasicLayout from '../../layouts/BasicLayout';
import { firestore, storage } from '../../services/firebase';
import Notification from '../../components/Notification/Notification';

const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.primary};
`;
const InnerContaineer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 2.4rem;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 3.5rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

const AgentRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  color: inherit;
`;

const StyledButton = styled(Button)`
  margin-left: 2rem;
`;

const StyledSelect = styled(Select)`
  flex: 1;
`;

const CreateTicketView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState('');
  const [notification, setNotification] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'title':
        setTitle(value);
        break;
    }
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleTextarea = (e) => setMessage(e.target.value);

  const handleOption = (e) => setCategory(e.target.value);

  const sendFile = async (file) => {
    const storageRef = storage.ref('attachments');
    const fileRef = storageRef.child(file.name);
    try {
      await fileRef.put(file);
      const downloadLink = await fileRef.getDownloadURL();
      setDownloadLink(downloadLink);
    } catch (err) {
      console.log(err);
    }
  };

  const sendEmail = async (id, name, email) => {
    const emailData = {
      id,
      name,
      email,
    };
    await emailjs.send('service_gsj1btc', 'template_t4zswdq', emailData, 'user_Hhrb21IywlqpLJh3Bz30N');
  };

  const submitTicket = async (name, email, category, title, message, downloadLink) => {
    const id = shortid();
    try {
      await firestore
        .collection('tickets')
        .doc(id)
        .set({
          id,
          title,
          createdAt: new Date(),
          status: 'New',
          category,
          messages: [
            {
              author: name,
              message,
              attachment: downloadLink,
            },
          ],
        });
      await sendEmail(id, name, email);
      setName('');
      setEmail('');
      setCategory('');
      setTitle('');
      setMessage('');
      setFile(null);
      setNotification(true);
      setTimeout(() => setNotification(false), 3000);
    } catch (err) {
      console.log(err);
    }
  };

  const getCategories = async () => {
    const categoriesArr = [];
    const categoriesRef = await firestore.collection('categories');
    const snapshot = await categoriesRef.get();
    // eslint-disable-next-line max-len
    await snapshot.docs.forEach((el) => categoriesArr.push(el.data().name));
    setCategories(categoriesArr);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <Helmet>
        <title>Create Ticket | Supporteo</title>
      </Helmet>
      <Notification notification={notification} />
      <BasicLayout>
        <StyledContainer>
          <InnerContaineer>
            <FormContainer>
              <h2>Create Ticket</h2>
              <StyledRow>
                <Input placeholder="Name" name="name" value={name} onChange={handleInput} />
                <Input placeholder="Email" name="email" value={email} onChange={handleInput} />
              </StyledRow>
              <StyledRow>
                <StyledSelect name="categories" id="categories" onChange={handleOption}>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </StyledSelect>
                <Input placeholder="Title" name="title" value={title} onChange={handleInput} />
              </StyledRow>
              <TextInput value={message} onChange={handleTextarea} />
              <input type="file" onChange={handleFile} />
              <Button
                onClick={() => {
                  submitTicket(name, email, category, title, message, downloadLink);
                  if (file) {
                    sendFile(file);
                  }
                }}
              >
                Create Ticket
              </Button>
            </FormContainer>
            <AgentRow>
              <StyledLink to="/login">
                <StyledButton dark>Agent Login</StyledButton>
              </StyledLink>
              <StyledLink to="/search">
                <StyledButton dark>Search ticket</StyledButton>
              </StyledLink>
            </AgentRow>
          </InnerContaineer>
        </StyledContainer>
      </BasicLayout>
    </>
  );
};

export default CreateTicketView;
