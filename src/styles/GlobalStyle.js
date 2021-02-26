import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
  
  section {
    padding: 3.2rem 0;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 111.5rem;
  padding: 0 2.4rem;
  margin: 0 auto;
`


export default GlobalStyle
