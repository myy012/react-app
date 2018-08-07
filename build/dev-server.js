// const portfinder = require('portfinder');

const path = require('path');
const express = require('express');
const upath = require('upath');
const webpack = require('webpack');
const chalk = require('chalk');
const fs = require('fs');
const utils = require('./utils');
const config = require('./config');
const MockData = require('./syncMockup');
const webpackConfig = require('./webpack.dev.config');

const compiler = webpack(webpackConfig);
const app = express();

// console.log(webpackConfig.output.publicPath);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    historyApiFallback: true,
    stats: 'minimal',
    lazy: false,
    watchOptions: {
        poll: true,
        aggregateTimeout: 400
    }
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use((request, response, next) => {
    const requestPath = request.path.replace(/\/$/, '');
    const hasMockData = MockData.hasMockData(requestPath);
    if (hasMockData) {
        const data = JSON.stringify(MockData.readSource(requestPath)(request, response));
        console.info(chalk.yellow(`\n 😲  ==> ${request.url}`), chalk.green(' 🤗  <== 200'));
        response.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
        response.end(data);
    }
    else {
        next();
    }
});

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve webpack bundle output
app.use(devMiddleware);

const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.get('/react', (req, res, next) => {
    console.log(req);
    console.log(res);
    console.log('get' + staticPath)
    next();
});
app.get(staticPath, express.static('./static'));
// console.log(staticPath)

// console.log(process.cwd());

devMiddleware.waitUntilValid(() => {
    console.log('> Starting dev server...');

    const port = config.dev.port;
    const uri = `http://localhost:${port}`;

    console.log(`> Listening at ${uri}\n`);

    server = app.listen(port);

});
