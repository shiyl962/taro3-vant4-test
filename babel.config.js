// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'vue3',
      ts: true
    }],
    //[
    //  'import',
    //  {
    //    libraryName: '@nutui/nutui',
    //    libraryDirectory: 'dist/packages/_es',
    //    camel2DashComponentName: false
    //  },
    //  'nutui3-vue'
    //],
    //[
    //  'import',
    //  {
    //    libraryName: '@nutui/nutui-taro',
    //    libraryDirectory: 'dist/packages/_es',
    //    camel2DashComponentName: false
    //  },
    //  'nutui3-taro'
    //]
  ]
}
