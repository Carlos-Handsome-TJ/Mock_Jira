import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProviders} from "./context";
import { loadDevTools } from "jira-dev-tool";

loadDevTools(() => {
    ReactDOM.render(
        <React.StrictMode>
            <AuthProviders>
                <App />
            </AuthProviders>
        </React.StrictMode>,
        document.getElementById('root')
    );
})



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
