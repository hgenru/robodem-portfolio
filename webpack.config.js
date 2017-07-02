const path = require('path');
const webpack = require('webpack');
const Typograf = require('typograf');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const call = (func) => func();
const typograf = new Typograf({locale: ['ru', 'en-US']});

module.exports = ({staticBuilderEnv} = {}) => {
    const isServerBuild = staticBuilderEnv === 'server';
    const isClientBuild = staticBuilderEnv !== 'server';

    const entry = {
        index: path.resolve(__dirname, './index.js'),
        fontsLoader: path.resolve(__dirname, './fonts-loader.js')
    };

    if (isServerBuild) {
        entry.staticBuilderEntry = path.resolve(__dirname, './index-static.js');
    }

    return {
        entry,
        devtool: 'cheap-module-source-map',
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
                        presets: ['react', ['babel-preset-es2015', {modules: false}]],
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
                {
                    test: /\.md$/,
                    use: [
                        {loader: 'html-loader'},
                        {loader: './src-builder/typograf-loader'},
                        {loader: 'markdown-loader'}
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                        {loader: 'html-loader'},
                        {loader: './src-builder/typograf-loader'}
                    ]
                },
                {
                    test: /\.(png|jpg|gif|swf)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                    use: 'file-loader'
                }
            ]
        },
        resolve: {
            alias: call(() =>
                isClientBuild ? {
                    'react': 'preact-compat',
                    'react-dom': 'preact-compat',
                    'create-react-class': 'preact-compat/lib/create-react-class'
                } : undefined
            )
        },
        plugins: [
            new ExtractTextPlugin('styles.css'),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            
            new webpack.optimize.AggressiveMergingPlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.ModuleConcatenationPlugin()
        ]
    }
};
