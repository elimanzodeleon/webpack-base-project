const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/, //regex to match all tsx  or ts (?) files
        use: ['ts-loader'],
        exclude: /node_modules/, // wont be transformed by babel
      },
    ],
  },

  // order in which to resolve files with same name
  // [this is how we import without adding file ext]
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
