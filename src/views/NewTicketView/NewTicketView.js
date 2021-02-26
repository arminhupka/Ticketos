import {useState, useContext} from 'react';
import styled from "styled-components";
import {Helmet} from "react-helmet";
import {nanoid} from "nanoid";
import {Container} from "../../styles/GlobalStyle";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {firestore} from "../../services/firebase";
import Heading from "../../components/Heading/Heading";
import TextInput from "../../components/TextInput/TextInput";
import {UserContext} from "../../provider/UserProvider";
import Notification from "../../components/Notification/Notification";
import Select from "../../components/Select/Select";


const InnerContainer = styled(Container)`
`

const StyledSection = styled.section`
  position: relative;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 2rem;
  }
`

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
`

const NewTicketView = () => {
    const {user} = useContext(UserContext);
    const [ticketTitle, setTicketTitle] = useState("");
    const [ticketMessage, setTicketMessage] = useState("");
    const [notification, setNotification] = useState(false);

    const addNewTicket = async () => {
        const id = nanoid();
        await firestore.collection("tickets").doc(id).set({
            id,
            userId: user.uid,
            title: ticketTitle,
            createdAt: new Date(),
            status: "New",
            messages: [
                {
                    author: user.email,
                    message: ticketMessage
                }
            ]
        })
        setTicketTitle("");
        setTicketMessage("");
        setNotification(true);
        setTimeout(() => {
            setNotification(false);
        }, 4000)
    }

    return (
        <>
            <Helmet>
                <title>Add New Ticket | Supporteo</title>
            </Helmet>
            <InnerContainer>
                <StyledSection>
                    <Heading title="New Ticket"/>
                    <StyledForm onSubmit={e => {
                        e.preventDefault()
                        addNewTicket();
                    }}>
                        <StyledRow>
                            <Input placeholder="Title" value={ticketTitle}
                                   onChange={e => setTicketTitle(e.target.value)}/>
                            <Select name="cars" id="cars">
                                <option value="volvo">Volvo</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </Select>
                        </StyledRow>
                        <TextInput placeholder="Message" value={ticketMessage}
                                   onChange={e => setTicketMessage(e.target.value)}/>
                        <Button type="submit">Add new ticket</Button>
                    </StyledForm>
                    <Notification notification={notification}/>
                </StyledSection>
            </InnerContainer>
        </>
    )
}

export default NewTicketView