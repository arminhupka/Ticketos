import {ThemeProvider} from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import Theme from "../styles/Theme";
import Header from "../components/Header/Header";


const MainLayout = ({children}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Header/>
        {children}
    </ThemeProvider>
)

export default MainLayout