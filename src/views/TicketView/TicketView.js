import styled from "styled-components";
import {Container} from "../../styles/GlobalStyle";
import Heading from "../../components/Heading/Heading";

const StyledSection = styled.section``

const InnerContainer = styled(Container)``

const TicketView = ({match: {params: {id}}}) => {
    return (
        <StyledSection>
            <InnerContainer>
                <Heading title="Ticket View"/>
            </InnerContainer>
        </StyledSection>
    )
}

export default TicketView