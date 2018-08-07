import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'amfe-flexible';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import http from 'common/config';
import './assets/css/base.css';
// import registerServiceWorker from './registerServiceWorker';

React.$http = http;
export const history = createHistory();

export default function APP (createStore, routes) {
    const store = createStore();
    return ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter  history={history}>
                {renderRoutes(routes)}
            </ConnectedRouter>
        </Provider>,
        document.getElementById('root')
    )
};

// registerServiceWorker();
