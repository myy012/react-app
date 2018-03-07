/**
 * @desc [saga注册入口文件]
 * @author [myy]
 */
import { fork } from 'redux-saga/effects';
import serviceSagas from './testSagas';
// import StartAppSagas from './StartAppSagas';
/* ------------- Sagas ------------- */
// use redux-saga to manage the asynchronous tasks
const sagas = [
  ...serviceSagas
];

/* ------------- Connect Types To Sagas ------------- */

export default function * root() {
  yield sagas.map(saga => fork(saga)); 
};
