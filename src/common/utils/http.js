import axios from 'axios';
import qs from 'qs';
import axiosRetry from 'axios-retry';

const qsOption = {
    arrayFormat: 'indices',
    encodeValuesOnly: true,
    allowDots: true
};

axios.defaults.paramsSerializer = params => qs.stringify(params, qsOption);

//处理请求错误信息
function globalErrorHandler(config, data) {
    if (!config.silence && data.errorMsg) {
        alert(data.errorMsg);
    }
}

// 请求失败之后，重新发3次请求
axiosRetry(axios, { retries: 3 });

axios.interceptors.request.use((config = {}) => {
    const after = { ...config, withCredentials: true };
    //添加其他操作
    return after;
}, error => Promise.reject(error));



axios.interceptors.response.use(response => {
    const { config, data } = response;
    const result = data.data || {};
    if ({}.hasOwnProperty.call(data, 'code')) {
        if (data.code) {
            if (data.code === 2) {
                globalErrorHandler(config, data);
            }
            else {
                // login(config);
                console.log('code 为 1');
            }
            return Promise.reject(data);
        }
    }
    else if ({}.hasOwnProperty.call(data, 'isSuccess')) {
        if (!data.isSuccess) {
            globalErrorHandler(config, data);
            return Promise.reject(data);
        }
    }
    return result;
}, error => Promise.reject(error));

export default axios;
