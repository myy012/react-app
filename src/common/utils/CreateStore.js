/**
 * @desc [拓展createStore方法]
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { history } from '../../index';

// creates the store
export default (rootReducer, initialState, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];

    /* ------------- route redux ------------- */
    middleware.push(routerMiddleware(history));

    /* ------------- Saga Middleware ------------- */
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */
    enhancers.push(applyMiddleware(...middleware));

    // add redux devtools
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    // create store
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(...enhancers)
    );

    sagaMiddleware.run(rootSaga);

    return store;
}

