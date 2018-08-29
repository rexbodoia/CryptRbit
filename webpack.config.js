const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
       test: /\.(scss)$/,
       use: [{
         loader: 'style-loader', // inject CSS to page
       }, {
         loader: 'css-loader', // translates CSS into CommonJS modules
       }, {
         loader: 'postcss-loader', // Run post css actions
         options: {
           plugins: function () { // post css plugins, can be exported to postcss.config.js
             return [
               require('precss'),
               require('autoprefixer')
             ];
           }
         }
       }, {
         loader: 'sass-loader' // compiles Sass to CSS
       }]
     },
    ]
  },
  devtool: 'source-map'
};
