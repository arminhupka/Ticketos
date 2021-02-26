import { useEffect} from 'react'
import styled from "styled-components";


const StyledNotification = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  height: 300px;
  width: 500px;
  background-color: #fff;
  border-radius: .5rem;
  transform: translate(-50%, ${({notification}) => notification ? `-50%` : `-20%`});
  visibility: ${({notification}) => notification ? `visible` : `hidden`};
  opacity: ${({notification}) => notification ? `1` : `0`};
  transition: visibility .5s, transform .5s, opacity .5s;
`

const Notification = ({notification}) => {

    const sayHello = () => console.log("Hello")


    useEffect(() => {
        if (notification) {
            sayHello();
        }
    }, [notification])

    return (
        <StyledNotification notification={notification}>
            <h2>Added new Ticket</h2>
        </StyledNotification>
    )
}

export default Notification
