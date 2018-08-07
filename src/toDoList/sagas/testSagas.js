import {put, takeLatest, call} from 'redux-saga/effects';
import http from 'common/utils/http';
import {ServiceTypes, ServiceActions} from '../redux/test';
import config from '../config';


const fetch = (params = {}) => {
    return http.get(config.apis.syncPath, params).catch(() => ({}));
}

function* service(action) {
    const res = yield call(fetch, {
        params: {
            id: action.payload.id
        }
    })
    const data = res || {};
    yield put(ServiceActions.serviceInfo(data));
}

// process login actions
export function* serviceSaga() {
    yield takeLatest(ServiceTypes.GETSERVICEINFO, service);
}

const sagas = [
    serviceSaga,
];

export default sagas;
