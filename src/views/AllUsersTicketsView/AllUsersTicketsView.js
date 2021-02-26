import {useState, useEffect} from 'react';
import styled from "styled-components";
import {firestore} from "../../services/firebase";
import {Container} from "../../styles/GlobalStyle";
import Heading from "../../components/Heading/Heading";

const StyledSection = styled.section``
const InnerContainer = styled(Container)``


const AllUsersTicketsView = () => {

    const [tickets, setTickets] = useState([])

    const getUserTickets = async () => {
        const ticketsRef = await firestore.collection("tickets")
        const snapshot = await ticketsRef.get();
        const tickets = snapshot.docs.map(el => el.data())
        setTickets(tickets)
    }

    useEffect(() => {
        getUserTickets();
    }, [])

    return (

        <StyledSection>
            <InnerContainer>
                <Heading title="All Tickets"/>
                <ul>
                    {tickets.map(ticket => (
                        <li key="3">{ticket.title}</li>
                    ))}
                </ul>
            </InnerContainer>
        </StyledSection>
    )
}

export default AllUsersTicketsView