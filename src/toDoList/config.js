const host = 'http://192.168.10.214';

const APIs = {
    servicepack: '/load/scrvice/info/'
};

let addApi = api => {
    Object.keys(api).forEach(key => {
        APIs[key] = `${host}${APIs[key]}`;
    });
};

addApi(APIs);

export default APIs;
