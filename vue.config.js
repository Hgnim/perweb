const {defineConfig} = require('@vue/cli-service')

/**
 * 为css文件封装
 * @param className 封装类名，例如：.xxx
 * @param cssFile 目标文件，参数输入whitelist，将使用正则表达式匹配合法文件。（使用路径匹配时分隔符得使用[\\\/]以支持跨平台）
 * @returns {postcss.AcceptedPlugin}
 */
const createCssWrap = (className, cssFile) => {
    return require('postcss-prefixwrap')(className, {//postcss-prefixwrap，它会在CSS样式前添加一个选择器，以限制它们对页面中父元素的影响。
        whitelist: [cssFile]
    });
};

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Hagnimik的个人网页'
                return args
            })
    },
    publicPath: '',
    outputDir: 'dist',
    css: {
        loaderOptions: {
            postcss: {
                postcssOptions: {
                    plugins: [
                        createCssWrap('.terminal-wrap', /node_modules[\\\/]terminal\.css/),//https://terminalcss.xyz/
                        createCssWrap('.animate-wrap', /node_modules[\\\/]animate\.css/),//https://animate.style/
                        createCssWrap('.hover-wrap', /node_modules[\\\/]hover\.css/),//http://ianlunn.github.io/Hover/
                    ]
                }
            }
        }
    }
})
