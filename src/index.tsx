import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootState, store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {AnyAction, Store} from "redux";
import {StoreContext} from "./StoreContext";


export const rerenderEntireTree = (store: Store<RootState, AnyAction>) => {
    const state:RootState = store.getState()

    ReactDOM.render(
        <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree(store)
});