import config from 'common/config';


const apis = {
    servicepack: '/load/scrvice/info/',
    syncPath: '/sync/path'
};

config.addApis(apis);

// config.setHost('http://192.168.10.214');

export default config;
