import styled from "styled-components";
import RegisterBox from "../../components/RegisterBox/RegisterBox";
import GlobalStyle, {Container} from "../../styles/GlobalStyle";
import RegisterLoginLayout from "../../layouts/RegisterLoginLayout";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const RegisterView = () => (
    <RegisterLoginLayout>
        <GlobalStyle/>
        <StyledContainer>
            <RegisterBox/>
        </StyledContainer>
    </RegisterLoginLayout>
)

export default RegisterView