const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry:{
        main:"./src/index.js",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname ,"./dist")
    },
    module: {
        rules:[
            {test:/\.(js|jsx)$/, use:["babel-loader"], exclude:/node_modules/},
            {test:/\.css$/ ,use:["style-loader" ,"css-loader"]},
            {test:/\.less$/, use:["style-loader" ,"css-loader","less-loader"]},
            {test:/\.(jpg|gif|png|jpeg)$/, use:["file-loader"]}
        ]
    },
    devtool: `source-map`,
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template:"./index.html"
        })
    ]
};