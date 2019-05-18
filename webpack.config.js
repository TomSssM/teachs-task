const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main-page/main.js'),
        one: path.resolve(__dirname, './src/one/one.js'),
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(s?css)$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/main-page/main.html",
            title: "Welcome Page",
            filename: "index.html",
            chunks: ['main'],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/one/one.html",
            title: "2+2",
            filename: "one.html",
            hash: true,
            chunks: ['one'],
        }),
        new CleanWebpackPlugin(),
    ],
};