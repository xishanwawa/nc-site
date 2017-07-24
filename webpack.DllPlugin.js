const webpack = require('webpack');

const vendors = [
  'redux',
  'react-redux',
  'react-router',
  'react-router-redux',
  'redux-logger',
  'redux-thunk',
  'reqwest',
];

module.exports = {
  output: {
    path: 'public',
    filename: '[name].[chunkhash:8].js',
    library: '[name]_[chunkhash:8]',
  },
  entry: {
    vendor: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]_[chunkhash:8]',
      context: __dirname,
    })
  ],
};