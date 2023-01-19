const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

module.exports = {
    mode: 'development'
    //... other configuration options
  }


module.exports = {
    //... other configuration options
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  }
  