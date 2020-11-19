const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'word-relay-dev',
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.js', '.jsx'],
    },

    entry: {
        app: ['./client'],
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx$/, //js, jsx 파일 룰 적용 (정규표현식)
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 1% in KR'], // browserslist
                        },  
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: [
                    'react-hot-loader/babel',
                    '@babel/plugin-proposal-class-properties',
                ],
            },
            exclude: path.join(__dirname, 'node_modules'),
        }],
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    }, // 출력
    devServer: {
        historyApiFallback: true,
        publicPath: '/dist',
        hot: true
    },
};