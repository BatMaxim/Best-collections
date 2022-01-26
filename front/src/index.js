import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, HashRouter } from "react-router-dom";
import {SocketContext, socket} from "./socket"
import "./firebase";

ReactDOM.render(
    <SocketContext.Provider value={socket}>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </SocketContext.Provider>,
  document.getElementById('root')
);

