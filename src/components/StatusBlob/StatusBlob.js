import styled from 'styled-components'

const StyledSpan = styled.span`
  padding: .5rem 1rem;
  color: #fff;
  background-color: ${({status}) => status};
  border-radius: .3rem;
`

const StatusBlob = ({status}) => {

    const statusHandler = (status) => {
        switch (status) {
            case "New":
                return "green"
        }
    }

    return(
        <StyledSpan status={() => statusHandler(status)}>{status}</StyledSpan>
    )
}

export default StatusBlob
