import styled from 'styled-components'
import {FaThumbsUp} from "react-icons/all";

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem;
  color: #fff;
  background-color: ${({theme}) => theme.primary};
  border-radius: .5rem;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  padding: 1rem;
  background: linear-gradient(45deg, white, whitesmoke);
  border-radius: 50%;
  svg {
    color: ${({theme}) => theme.primary};
  }
`

const Title = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
`

const Count = styled.span`
  margin-left: auto;
  font-size: 1.8rem;
  font-weight: 800;
`

const InfoCard = ({title, count}) => (
    <CardWrapper>
        <IconWrapper>
            <FaThumbsUp/>
        </IconWrapper>
        <Title>Info Card</Title>
        <Count>20</Count>
    </CardWrapper>
)

export default InfoCard
