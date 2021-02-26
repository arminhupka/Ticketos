import {useEffect, useState, useContext} from 'react'
import styled from "styled-components";
import {Helmet} from "react-helmet";
import {Container} from "../../styles/GlobalStyle";
import Table from "../../components/Table/Table";
import Heading from "../../components/Heading/Heading";
import {firestore} from "../../services/firebase";
import {UserContext} from "../../provider/UserProvider";

const InnerContainer = styled(Container)``
const StyledSection = styled.section``

const UserTicketsView = () => {

    const {user: {uid}} = useContext(UserContext)
    const [tickets, setTickets] = useState([])

    const getUserTickets = async (uid) => {
        const tickets = []
        const ticketsRef = await firestore.collection('tickets').where("userId", "==", uid);
        const snapshot = await ticketsRef.get();
        snapshot.docs.forEach(snap => tickets.push(snap.data()));
        setTickets(prevState => [...prevState, ...tickets]);
    }

    useEffect(() => {
        getUserTickets(uid);
    }, [uid])

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
