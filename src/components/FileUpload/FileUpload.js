import styled from "styled-components";

const StyledUploader = styled.input`
  padding: 2rem;
  background-color: ${({theme}) => theme.lightGray};
  border-radius: .5rem;
`

const FileUpload = ({handleFile}) => <StyledUploader type="file" onChange={handleFile}/>

export default FileUpload
