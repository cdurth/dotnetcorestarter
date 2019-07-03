import './css/site.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import store from './store';
import App from './App.js';
// TODO: this needs updated and refactored to include redux dev tools
let appStore = createStore(store, applyMiddleware(thunk));
ReactDOM.render(
    <AppContainer>
        <BrowserRouter>
            <Provider store={appStore}>
                <App />
            </Provider>
        </BrowserRouter>
    </AppContainer>
    , document.getElementById('react-app'));

module.hot.accept();