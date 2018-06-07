import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'amfe-flexible';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import './common/assets/css/base.css';
// import registerServiceWorker from './registerServiceWorker';
import createStore from './toDoList/redux/index';
import routes from './toDoList/routes';

export const history = createHistory();

const store = createStore();

class App extends Component {
    render() {
		return (
            <Provider store={store}>
                <ConnectedRouter  history={history}>
                    {renderRoutes(routes)}
                </ConnectedRouter>
            </Provider>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
