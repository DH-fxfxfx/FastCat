module.exports = {
  devServer: {
    proxy: 'http://m.maoyan.com/'
    // proxy: {
    //   '/maoyan': {
    //     target: 'http://m.maoyan.com/',
    //     pathRewrite: {
    //       '^/maoyan': ''
    //     }
    //   }
    // }
  }
}
