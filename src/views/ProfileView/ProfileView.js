import styled from "styled-components";
import {Container} from "../../styles/GlobalStyle";
import Heading from "../../components/Heading/Heading";

const InnerContainer = styled(Container)``
const StyledSection = styled.section``


const ProfileView = () => {

    return (
        <StyledSection>
            <InnerContainer>
                <Heading title="Profile"/>
            </InnerContainer>
        </StyledSection>
    )
}

export default ProfileView