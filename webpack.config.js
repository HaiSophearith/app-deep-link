const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = {
    mode: "none",
    entry: {
        'app-deep-link': './src/index.js',
        'app-deep-link.min': './src/index.js'
    },
    output: {
        filename: (chunkData) => {
            return chunkData.chunk.name === 'app-deep-link.min' ? '[name].min.js' : '[name].js';
        },
        library: 'AppDeepLink',
        libraryTarget: 'umd',
    },
    
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                include: /\.min\.js$/
            })
        ]
    }
};
