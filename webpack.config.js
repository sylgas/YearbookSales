/**
 * Created by syga on 2017-05-11.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/components/App/App.js",
    output: {filename: 'yearsales.js', path: path.join(__dirname, 'dist')},
    module: {
        rules: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.less/, loader: "style-loader!css-loader!less-loader"},
            {test: /\.js$/, loader: 'babel-loader',
                include: path.resolve('src'),
                query: {
                    presets: ['es2015', 'react']
            }}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ],
    devServer: {
      port: 8081
    }
};