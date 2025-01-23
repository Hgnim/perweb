const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].title= 'Hgnim的个人网页'
          return args
        })
  },
    publicPath: '',
    outputDir: 'dist'
})
