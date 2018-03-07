import {put, takeLatest, call} from 'redux-saga/effects';
import {ServiceTypes, ServiceActions} from '../redux/test';
import API from '../config';
import http from '../../common/utils/http';


const fetch = (params = {}) => {
    return http.get(API.servicepack, params).catch(() => ({}));
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
