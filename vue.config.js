/*
 * @Author: weihyZzz 971973918@qq.com
 * @Date: 2023-04-17 00:05:36
 * @LastEditors: weihyZzz 971973918@qq.com
 * @LastEditTime: 2023-04-17 00:17:53
 * @FilePath: \vue3-ts-cms\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const path = require('path')

module.exports = {
  // 1.配置方式一: CLI提供的属性..
  outputDir: './build',
  // publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        // target: 'http://152.136.185.210:5000',
        target:
          'https://www.fastmock.site/mock/1c5e8f3cc0c26cb2cac70e4c6541c965/cms',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // 2.配置方式二: 和webpack属性完全一致, 最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     components: '@/components'
  //   }
  // }
  // 3.配置方式三:
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('components', '@/components')
  // }
}
