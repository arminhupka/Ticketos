import {ThemeProvider} from "styled-components";
import Helmet from "react-helmet";
import GlobalStyle from "../styles/GlobalStyle";
import Theme from "../styles/Theme";
import Header from "../components/Header/Header";


const MainLayout = ({children}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyle/>
        <Helmet>
            <meta name="theme-color" content={Theme.primary}/>
        </Helmet>
        <Header/>
        {children}
    </ThemeProvider>
)

export default MainLayout
