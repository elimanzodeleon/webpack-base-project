import path from 'path';
import webpack from 'webpack';
import ForkTsCheckWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  // loaders
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|js)x?$/, //regex to match all ts, tsx, js, or jsx files
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
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
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new ForkTsCheckWebpackPlugin({
      async: false, // webpack will wait for typechecking to finish before emitting
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}', // lint any files in the src folder
      },
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new CleanWebpackPlugin(),
  ],
};

export default config;
