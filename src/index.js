import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import { store } from "./store/store";
import ThemeProvider from "./context/ThemeProvider";
import App from './containers/App';
import './styles/index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider >
                <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
    //</React.StrictMode>
);
