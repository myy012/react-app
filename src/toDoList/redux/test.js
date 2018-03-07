/**
 * @desc [登录注销账号相关redux]
 */
import Immutable from 'immutable';
import CreateAction from '../../common/utils/CreateAction';

/* Constants */
const GETSERVICEINFO = 'GETSERVICEINFO';
const SERVICEINFO = 'SERVICEINFO';


export const ServiceTypes = {
    GETSERVICEINFO,
    SERVICEINFO
}

/* Action Creators */
export const ServiceActions = {
    getServiceInfo: CreateAction(GETSERVICEINFO),
    serviceInfo: CreateAction(SERVICEINFO)
};
const initialState = Immutable.fromJS({
    id: null,
    info: {}
});

/* Reducers */
const serviceReducer = (state = initialState, action) => {
    const type = action && action.type;

    switch(type) {
        case GETSERVICEINFO:
            const id = action.payload;
            return state.merge(id);
        case SERVICEINFO:
            const info = action.payload;
            return state.merge(info || {});
        default:
            return state;
    }
}

export const serviceReducers = {
    service: serviceReducer
};
