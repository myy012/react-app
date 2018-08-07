const path = require('path');
const config = require('./config');

exports.resolve = dir => path.join(__dirname, '..', dir);

exports.assetsPath = _path => {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = (options = {}) => {
    function generateLoaders(loader, loaderOptions) {
        const loaders = ['style-loader', 'css-loader', 'postcss-loader'];
        if (loader) {
            loaders.push({
                loader: `${loader}-loader`,
                options: {
                    ...loaderOptions,
                    sourceMap: false
                }
            });
        }

        return loaders;
    }

    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    };
};

exports.styleLoaders = options => {
    const output = [];
    const loaders = exports.cssLoaders(options);
    /* eslint-disable guard-for-in */
    for (const extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp(`\\.${extension}$`),
            use: loader
        });
    }
    /* eslint-enable */
    return output;
};

