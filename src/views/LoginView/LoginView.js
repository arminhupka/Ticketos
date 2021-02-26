import styled from "styled-components";
import LoginBox from "../../components/LoginBox/LoginBox";
import GlobalStyle, {Container} from "../../styles/GlobalStyle";
import RegisterLoginLayout from "../../layouts/RegisterLoginLayout";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginView = () => (
    <RegisterLoginLayout>
        <GlobalStyle/>
        <StyledContainer>
            <LoginBox/>
        </StyledContainer>
    </RegisterLoginLayout>
)

export default LoginView