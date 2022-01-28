const paths = require('./paths')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        main: paths.entryPath,
    },

    output: {
        path: paths.distPath,
        filename: '[name].bundle.js',
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            template: paths.templatePath,
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.ts$|tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
}
