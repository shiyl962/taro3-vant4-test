const path = require('node:path');
//console.log('path =>', path)
// Vant 4按需引入组件样式：
// https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart#2.-pei-zhi-cha-jian
//const { VantResolver } = require('unplugin-vue-components/resolvers');
//const ComponentsPlugin = require('unplugin-vue-components/webpack');
//console.log('unplugin-vue-components =>', VantResolver, ComponentsPlugin)
const config = {
  projectName: 'taro-vant4',
  date: '2023-7-7',
  // 按需注入和用时注入
  //https://developers.weixin.qq.com/miniprogram/dev/framework/ability/lazyload.html
  lazyCodeLoading: "requiredComponents",
  // 在 Taro 项目中使用 NutUI
  // https://nutui.jd.com/taro/vue/4x/#/zh-CN/guide/start
  //designWidth: 750,
  // 配置全局 Scss 变量
  //sass: {
  //  data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
  //},
  designWidth(input) {
    // 配置 NutUI 375 尺寸
    if (input?.file?.replace(/\\+/g, '/').indexOf('@nutui') > -1) {
      return 375
    }
    // 全局使用 Taro 默认的 750 尺寸
    //return 750
    return 375
  },
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sourceRoot: 'src',
  //outputRoot: 'dist',
  // 多端开发: https://docs.taro.zone/docs/guide/#%E5%A4%9A%E7%AB%AF%E5%BC%80%E5%8F%91
  outputRoot: `dist/${process.env.TARO_ENV}`,
  // 参考：https://nervjs.github.io/taro-docs/docs/config-detail/#alias
  alias: {
    //"@": path.resolve(__dirname, '..', 'src'),
    "@/common": path.resolve(__dirname, '..', 'src/common'),
    "@/components": path.resolve(__dirname, '..', 'src/components')
  },
  plugins: [
    ['@tarojs/plugin-html', {
      // 过滤 vant 组件库的前缀：van-
      // https://github.com/NervJS/taro-vant
      pxtransformBlackList: [/demo-/, /van-/]
    }]
  ],
  defineConstants: {
  },
  copy: {
    patterns: [
      //{ from: 'src/assets/icons/', to: `dist/${process.env.TARO_ENV}/assets/icons/`, ignore: ['*.js'] }, // 指定需要 copy 的目录
      //{ from: 'src/assets/images/', to: `dist/${process.env.TARO_ENV}/assets/images/` }
    ],
    options: {
    }
  },
  framework: 'vue3',
  //compiler: 'webpack5',
  //[BUG] 引入 @nutui/icons-vue-taro 组件后，小程序端 app.js 偶尔会报错，无法编译
  //https://github.com/NervJS/taro/issues/13456
  compiler: { type: 'webpack5', prebundle: { enable: false } },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 参考：nutui 自动按需引入，vant 4的用法报错不可行
    // https://nutui.jd.com/taro/vue/4x/#/zh-CN/guide/start
    //webpackChain(chain) {
    //  chain.plugin('unplugin-vue-components').use(ComponentsPlugin({
    //    resolvers: [VantResolver({ taro: true })]
    //  }))
    //}
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    //webpackChain(chain) {
    //  chain.plugin('unplugin-vue-components').use(ComponentsPlugin({
    //    resolvers: [VantResolver({ taro: true })]
    //  }))
    //}
  },
  rn: {
    appName: 'taroDemo',
    postcss: {
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
    //return merge({}, config, require('./dev'), {
    //  plugins: [
    //    ComponentsPlugin({
    //      resolvers: [VantResolver()],
    //    }),
    //  ],
    //})
  }
  return merge({}, config, require('./prod'))
}
