import {useState} from 'react'
import styled from "styled-components";
import Button from "../Button/Button";
import firebase ,{firestore} from "../../services/firebase";

const StyledTextArea = styled.textarea`
  margin: 1rem 0;
  padding: 1rem;
  min-height: 20rem;
  font-family: 'Montserrat', sans-serif;
  border-radius: .3rem;
  resize: vertical;
`

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: #fff;
  border: .1rem solid ${({theme}) => theme.primary};
  border-radius: .5rem;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);

  @media screen and (min-width: 992px) {
    //margin-left: 2rem;
  }
`

const AddMessage = ({ticketid, getTicket}) => {

    const [message, setMessage] = useState("")

    const addMessage = (ticketid, message) => {
        const respond = {
            author: "JANUSZ MAJ1",
            message
        }
        const ticketRef = firestore.collection('tickets').doc(ticketid);
        ticketRef.update({
            messages: firebase.firestore.FieldValue.arrayUnion(respond)
        })

    }

    return (
        <StyledContainer>
            <h2>Add Message</h2>
            <StyledTextArea value={message} onChange={e => setMessage(e.target.value)}/>
            <Button onClick={() => {
                addMessage(ticketid, message)
                getTicket(ticketid);
                setMessage("")
            }}>Send message</Button>
        </StyledContainer>
    )
}

export default AddMessage
