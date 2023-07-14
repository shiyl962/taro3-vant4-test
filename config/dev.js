const path = require('node:path');
module.exports = {
  env: {
    NODE_ENV: '"development"'
    //NODE_ENV: '"production"'  // 开启压缩
  },
  defineConstants: {
  },
  mini: {},
  h5: {
    devServer: {
      static: {
        directory: path.join(__dirname, '/')
      }
    }
  }
}
