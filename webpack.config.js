const path = require("path");

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
    publicPath: "/dist/"
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      minChunks: 2
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  }
};
