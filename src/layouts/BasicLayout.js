import {ThemeProvider} from "styled-components";
import Theme from "../styles/Theme";
import GlobalStyle from "../styles/GlobalStyle";

const BasicLayout = ({children}) => (
    <ThemeProvider theme={Theme}>
        {children}
    </ThemeProvider>
)

export default BasicLayout
