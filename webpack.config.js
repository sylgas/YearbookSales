/**
 * Created by syga on 2017-05-11.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: ["babel-polyfill", "./src/index.js"],
    output: {filename: 'yearsales.js', path: path.join(__dirname, 'dist')},
    module: {
        rules: [
            {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
            {test: /\.less/, loader: "style-loader!css-loader!postcss-loader!less-loader"},
            {test: /\.js$/, loader: 'babel-loader',
                include: path.resolve('src'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: ['transform-class-properties']
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    devServer: {
      port: 8081
    }
};