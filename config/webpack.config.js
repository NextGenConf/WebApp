const paths = require("./paths");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
    const developerMode = argv.mode === "development";

    return {
        entry: paths.index,
        devtool: developerMode ? "inline-source-map" : "none",
        output: {
            path: paths.dist,
            filename: "bundle.js",
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    include: [paths.srcDir],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "public/index.html",
            }),
        ],
        devServer: {
            port: 3000,
        },
    };
}
