module.exports = {
    map: false,
    sourceMap: false,
    plugins: [
        require('postcss-flexbugs-fixes'),
        require('postcss-utilities'),
        require('rucksack-css'),
        require('postcss-short'),
        require('postcss-preset-env')({
            stage: 0
        }),
        require('postcss-cssnext')({
            features: {
                rem: false
            }
        })
    ]
}
