import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootState, store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


    const state:RootState = store.getState()
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    )



