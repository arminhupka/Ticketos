import {useEffect, useState} from 'react'
import styled from "styled-components";
import {Helmet} from "react-helmet";
import {Container} from "../../styles/GlobalStyle";
import Table from "../../components/Table/Table";
import Heading from "../../components/Heading/Heading";
import {firestore} from "../../services/firebase";

const InnerContainer = styled(Container)``
const StyledSection = styled.section``

const UserTicketsView = () => {

    const [tickets, setTickets] = useState([])

    const getUserTickets = async () => {
        const tickets = []
        const ticketsRef = await firestore.collection('tickets').where("userId", "==", "4MF2GNjwMihlDNjAUzVtJZ29P4G2");
        const snapshot = await ticketsRef.get();
        snapshot.docs.forEach(snap => tickets.push(snap.data()));
        setTickets(prevState => [...prevState, ...tickets]);
    }

    useEffect(() => {
        getUserTickets();
    },[])

    return (
        <>
            <Helmet>
                <title>My Tickets | Supporteo</title>
            </Helmet>
            <InnerContainer>
                <StyledSection>
                    <Heading title="My Tickets"/>
                    <Table tickets={tickets}/>
                </StyledSection>
            </InnerContainer>
        </>
    )
}

export default UserTicketsView