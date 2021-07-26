const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './src/assets/js/app.js',
  output: {
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
         loader: 'babel-loader', 
         options: {
         presets: ['@babel/env'] 
        }
      },      
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
    }] 
  },
  devtool: 'source-map'
};
