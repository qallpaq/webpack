const { merge } = require('webpack-merge')
const webpackBase = require('./webpack.base')

module.exports = () => {
    const mode = 'development'
    process.env.NODE_CONFIG_ENV = mode

    return merge(webpackBase, {
        mode: mode,

        devtool: 'inline-source-map',

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
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },
            ],
        },
    })
}
