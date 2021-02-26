import {Helmet} from "react-helmet";
import styled from "styled-components";
import {Container} from "../../styles/GlobalStyle";
import Heading from "../../components/Heading/Heading";

const StyledSection = styled.section``

const SettingsView = () => {

    return (
        <>
            <Helmet>
                <title>Settings | Supporteo</title>
            </Helmet>
            <Container>
                <StyledSection>
                    <Heading title="Settings"/>
                </StyledSection>
            </Container>
        </>
    )
}

export default SettingsView