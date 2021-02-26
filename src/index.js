import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root/Root'
import UserProvider from "./provider/UserProvider";

ReactDOM.render(
    <React.StrictMode>
        <UserProvider>
            <Root/>
        </UserProvider>
    </React.StrictMode>,
    document.getElementById('root')
);