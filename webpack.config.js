const path = require('path')
const webpack = require('webpack')
const DEV_PORT = process.env.PORT || 3000;

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",

  output: {
    path: `${__dirname}/build`,
    // path: path.resolve(__dirname, 'build/'),
    filename: "index.js"
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  devServer: {
    contentBase: __dirname,
    // contentBase: path.join(__dirname, 'build/'),
    port: DEV_PORT,
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

