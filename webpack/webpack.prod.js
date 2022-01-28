const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => {
    const mode = 'production'
    process.env.NODE_CONFIG_ENV = mode

    return merge(webpackBase, {
        mode: mode,

        plugins: [new MiniCssExtractPlugin()],

        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
    })
}
