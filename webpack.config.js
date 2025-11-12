const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: './src/index.js',
        about: './src/pages/js/about.js',
        classes: './src/pages/js/classes.js',
        classDetail: './src/pages/js/class-detail.js',
        instructors: './src/pages/js/instructors.js',
        faqs: './src/pages/js/faqs.js',
        testimonial: './src/pages/js/testimonial.js',
        postHarmony: './src/pages/posts/blog-post.js',
        body: './src/pages/posts/post.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    level: {
                        1: {
                            roundingPrecision: "all=3,px=5",
                        },
                    },
                },
                minify: CssMinimizerPlugin.cleanCssMinify,
            }),
        ],
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            chunks: ['index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/about.html',
            inject: 'body',
            chunks: ['about'],
            filename: 'about.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/classes.html',
            inject: 'body',
            chunks: ['classes'],
            filename: 'classes.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/class-detail.html',
            inject: 'body',
            chunks: ['classDetail'],
            filename: 'class-detail.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/instructors.html',
            inject: 'body',
            chunks: ['instructors'],
            filename: 'instructors.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/faqs.html',
            inject: 'body',
            chunks: ['faqs'],
            filename: 'faqs.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/testimonial.html',
            inject: 'body',
            chunks: ['testimonial'],
            filename: 'testimonial.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/posts/harmony.html',
            inject: 'body',
            chunks: ['postHarmony'],
            filename: 'harmony.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/posts/body.html',
            inject: 'body',
            chunks: ['body'],
            filename: 'body.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/404.html',
            filename: '404.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/plugins/css", to: "css" },
                { from: "./src/plugins/js", to: "js" },
                { from: "./src/public", to: "./" },
                { from: "./src/plugins/webfonts", to: "webfonts" },
                { from: "./src/plugins/fonts", to: "fonts" },
                { from: "./src/assets/images", to: "images" },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css"
        }),
    ],
    output: {
        filename: '[name].[hash:20].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: '.dist',
        compress: true,
        historyApiFallback: true, /* If you want to use location.pathname for SPA */
        port: 9000,
    },
};
