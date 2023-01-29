import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store._addPost.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);