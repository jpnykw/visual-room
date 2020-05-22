module.exports = {
  mode: "development",
  entry: "./src/index.tsx",

  output: {
    path: `${__dirname}/dist`,
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
  }
};
