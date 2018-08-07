/**
 * @desc [初始化redux]
 */
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { routerReducer } from 'react-router-redux';
import configureStore from 'common/utils/CreateStore';
import rootSaga from '../sagas';
import { serviceReducers } from './test';

// use Immutable.Map to create the store state tree
const initialState = Immutable.Map();

export default () => {
    // Assemble The Reducers
    const rootReducer = combineReducers({
        ...serviceReducers,
        routing: routerReducer
    });

    return configureStore(rootReducer, initialState, rootSaga);
}
