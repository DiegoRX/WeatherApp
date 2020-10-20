import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import App from './router';
import './styles/app.scss';

const initialState = {
    "myList": []
}

console.log(initialState)

const store = createStore(reducer, initialState);

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'));
