import styled from "styled-components";
import {Container} from "../../styles/GlobalStyle";
import Input from "../../components/Input/Input";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import BasicLayout from "../../layouts/BasicLayout";
import FileUpload from "../../components/FileUpload/FileUpload";

const StyledContainer = styled.div`
  background-color: ${({theme}) => theme.primary};
`;
const InnerContaineer = styled(Container)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 3.5rem 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  background-color: #fff;
  border-radius: .5rem;
  text-align: center;
`

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`


const CreateTicketView = () => (
    <BasicLayout>
        <StyledContainer>
            <InnerContaineer>
                <FormContainer>
                    <h2>Create Ticket</h2>
                    <StyledRow>
                        <Input placeholder="Name"/>
                        <Input placeholder="Email"/>
                    </StyledRow>
                    <StyledRow>
                        <Input placeholder="Category"/>
                        <Input placeholder="Title"/>
                    </StyledRow>
                    <TextInput/>
                    <FileUpload/>
                    <Button>Create Ticket</Button>
                </FormContainer>
            </InnerContaineer>
        </StyledContainer>
    </BasicLayout>

)

export default CreateTicketView
