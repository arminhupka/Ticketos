import {useState} from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import {auth} from "../../services/firebase";

const LoginBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 40rem;
  padding: 4rem 2rem;
  background-color: #fff;
  border-radius: .5rem;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 1rem;
  }
`

const StyledParagraph = styled.p`
  align-self: flex-end;
`

const StyledLink = styled(Link)``

const Branding = styled.h1`
  align-self: center;
  margin-bottom: 4rem;
  font-size: 4rem;
`

const LoginBox = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const loginWithEmailAndPassword = async (email, password) => {
        await auth.signInWithEmailAndPassword(email, password)
    }

    return(
        <LoginBoxWrapper>
            <Branding>Supporteo</Branding>
            <StyledForm onSubmit={e => {
                e.preventDefault();
                loginWithEmailAndPassword(email, password)
            }}>
                <Input placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <Button>Login</Button>
                <StyledParagraph>You don't have account? <StyledLink to="/register">Register</StyledLink></StyledParagraph>
            </StyledForm>
        </LoginBoxWrapper>
    )
}

export default LoginBox