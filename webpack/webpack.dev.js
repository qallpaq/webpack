const webpackBase = require('./webpack.base')
const { merge } = require('webpack-merge');

module.exports = () => {
    return merge(webpackBase, {
        mode: 'development',

        devServer: {
            historyApiFallback: true,
            compress: false,
            port: 8080,
            open: true,
            hot: true,
        },

        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                },
            ],
        },
    })
}
