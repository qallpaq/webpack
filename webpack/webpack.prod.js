const { merge } = require('webpack-merge');
const webpackBase = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    return merge(webpackBase, {
        mode: 'production',

        plugins:  [
            new MiniCssExtractPlugin()
        ],

        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
                },
            ],
        },
    })
}
