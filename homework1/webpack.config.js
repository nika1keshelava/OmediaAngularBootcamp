var path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"), // src/index.js is the path of our js file from Step 3
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./dist"), // you can name this however you want
    filename: "bundle.js", // this as well
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      inject: true,
    }),
  ],
  module: {
    rules: [],
  },
};

// import this in your webpack.config.js
var htmlWebpackPlugin = require("html-webpack-plugin");
// add the plugin in plugins array
