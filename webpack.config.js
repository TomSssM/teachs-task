const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main-page/main.js'),
        one: path.resolve(__dirname, './src/one/one.js'),
        two: path.resolve(__dirname, './src/two/two.js'),
        three: path.resolve(__dirname, './src/three/three.js'),
        five: path.resolve(__dirname, './src/five/five.js'),
        six: path.resolve(__dirname, './src/six/six.js'),
        seven: path.resolve(__dirname, './src/seven/seven.js'),
        eight: path.resolve(__dirname, './src/eight/eight.js'),
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
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                        },

                    },
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/main-page/main.html",
            filename: "index.html",
            chunks: ['main'],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/one/one.html",
            filename: "one.html",
            chunks: ['one'],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/two/two.html",
            filename: "two.html",
            chunks: ['two'],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/three/three.html",
            filename: "three.html",
            chunks: ['three'],
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/five/five.html",
            filename: "five.html",
            chunks: ['five'],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/six/six.html",
            filename: "six.html",
            chunks: ['six'],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/seven/seven.html",
            filename: "seven.html",
            chunks: ['seven'],
            hash: true,
        }),
        new HtmlWebpackPlugin({
            template: "./src/eight/eight.html",
            filename: "eight.html",
            chunks: ['eight'],
            hash: true,
        }),
        new CleanWebpackPlugin(),
    ],
};