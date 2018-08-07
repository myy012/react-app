const path = require('path');
const express = require('express');
const upath = require('upath');
const chalk = require('chalk');
const fs = require('fs');
const utils = require('./utils');
const config = require('./config');

let apiList = [];
const mockupPath = utils.resolve('mockup');

function calcPath(dir) {
    return fs.readdirSync(dir).reduce((list, file) => {
        const name = path.join(dir, file);
        const isDir = fs.statSync(name).isDirectory();
        return list.concat(isDir ? calcPath(name) : [name.replace('.js', '')]);
    }, []);
}
const readSource = file => {
    const relativePath = `../mockup${file}.js`;
    delete require.cache[require.resolve(relativePath)];
    /* eslint-disable import/no-dynamic-require */
    return require(relativePath);
    /* eslint-enable */
}
function syncMockData() {
    apiList = calcPath(mockupPath).map(file => upath.normalizeSafe(file.split(mockupPath).pop()));
    console.log(chalk.green('Mock data updated.'));
}
fs.watch(mockupPath, { recursive: true }, syncMockData);
syncMockData();

const hasMockData = path => apiList.indexOf(path) >= 0;


module.exports = {
    hasMockData,
    readSource
}
