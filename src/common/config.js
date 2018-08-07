const config = {
    apis: {},
    host: ''
};

config.setHost = (ip) => {
    if (process.env.NODE_ENV !== 'production') {
        config.host = ip;
        Object.keys(config.apis).forEach(key => {
            config.apis[key] = `${ip}${config.apis[key]}`
        });
    }
}

config.addApis = apis => {
    Object.keys(apis).forEach(api => {
        config.apis[api] = apis[api];
    })
}



export default config;
