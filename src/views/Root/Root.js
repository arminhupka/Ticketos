import {useContext} from 'react';
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Helmet from "react-helmet";
import LoginView from "../LoginView/LoginView";
import RegisterView from "../RegisterView/RegisterView";
import DashboardView from "../DashboardView/DasboardView";
import UserTicketsView from "../UserTicketsView/UserTicketsView";
import NewTicketView from "../NewTicketView/NewTicketView";
import SettingsView from "../SettingsView/SettingsView";
import AllUsersTicketsView from "../AllUsersTicketsView/AllUsersTicketsView";
import TicketView from "../TicketView/TicketView";
import ProfileView from "../ProfileView/ProfileView";
import MainLayout from "../../layouts/ MainLayout";
import {UserContext} from "../../provider/UserProvider";


const Root = () => {
    const {user, admin} = useContext(UserContext);
    const userData = localStorage.getItem("user");

    return (
        <>
            <Helmet>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
                      rel="stylesheet"/>
            </Helmet>
            <BrowserRouter>
                {userData ?
                    <MainLayout>
                        <Redirect to='/'/>
                        <Route exact path="/" component={DashboardView}/>
                        <Route path="/new-ticket" component={NewTicketView}/>
                        <Route path="/tickets" component={UserTicketsView}/>
                        <Route path="/all-tickets" component={AllUsersTicketsView}/>
                        <Route path="/ticket/:id" component={TicketView}/>
                        <Route path="/profile" component={ProfileView}/>
                        {admin ?
                            <Route path="/settings" component={SettingsView}/>
                            : null
                        }
                    </MainLayout>
                    :
                    <>
                        <Redirect to='/'/>
                        <Route exact path="/" component={LoginView}/>
                        <Route path="/register" component={RegisterView}/>
                    </>}
            </BrowserRouter>
        </>
    )
}

export default Root
