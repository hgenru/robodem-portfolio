const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = () => ({
    entry: {
        index: path.resolve(__dirname, './index.js'),
        fontsLoader: path.resolve(__dirname, './fonts-loader.js'),
        staticBuilderEntry: path.resolve(__dirname, './index-static.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'babel-preset-es2015'],
                    plugins: ['babel-plugin-transform-runtime']
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
});
