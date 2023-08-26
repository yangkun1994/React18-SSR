const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
    target: 'node',
    entry: './src/server/index.js',
    output: {
        path: path.resolve(__dirname, '../build/server'),
        filename: 'server_bundle.js'
    },
})