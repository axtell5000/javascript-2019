const path = require('path');

module.exports = {
  // relative
  entry: './src/index.js',
  output: {
    // absolute so we have to do something different
    path: path.resolve(__dirname, 'public/scripts'),
    filename: 'bundle.js'
  }
};
