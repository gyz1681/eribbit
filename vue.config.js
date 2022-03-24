const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 那些文件自动引入，最好使用绝对路径
      patterns: [
        path.join(__dirname, './src/assets/styles/mixin.less'),
        path.join(__dirname, './src/assets/styles/variables.less')
      ]
    }
  }
}
