const path = require('path');

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
// Other rules like entry, output, devserver....,
plugins: [
    new NodePolyfillPlugin()
],
resolve: {
    fallback: {
      path: "false"
    }
  }
}

  