const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: {
        home: './src/js/app.js'
    },
    output: {
        filename: './dist/bundle.js'
    }
});
