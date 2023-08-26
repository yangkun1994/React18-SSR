const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, '../build/client'),
        filename: 'client_bundle.js'
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