import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


let store = createStore(
    appReducer, 
    applyMiddleware(logger, thunk),
    );

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
