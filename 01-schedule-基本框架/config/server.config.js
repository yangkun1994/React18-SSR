const path = require('path')

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        path: path.resolve(__dirname, './build/server'),
        filename: 'server.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.wasm', '.jsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}