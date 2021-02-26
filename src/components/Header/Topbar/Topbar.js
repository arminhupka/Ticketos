import {useContext} from 'react'
import styled from 'styled-components'
import {Container} from "../../../styles/GlobalStyle";
import {UserContext} from "../../../provider/UserProvider";

const StyledTopbar = styled.div`
  position: relative;
  padding: 1rem 0;
  background-color: ${({theme}) => theme.primary};
  color: #fff;
`

const InnerContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`

const StyledSpan = styled.span`
`

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.2);
  z-index: 1;
`

const Topbar = () => {

    const {user} = useContext(UserContext)

    return (
        <StyledTopbar>
            <InnerContainer>
                <StyledSpan>Logged as : {user.email}</StyledSpan>
            </InnerContainer>
            <StyledOverlay/>
        </StyledTopbar>
    )
}

export default Topbar