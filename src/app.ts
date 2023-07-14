//import Vue from 'vue'
//import DemoBlock from './components/demo-block'
//import DemoSection from './components/demo-section'
//import './locales'
//import './app.less'

//const App = {
//  onShow (options) {
//  },
//  render(h) {
//    // this.$slots.default 是将要会渲染的页面
//    return h('block', this.$slots.default)
//  }
//}

//Vue.component(DemoBlock.name, DemoBlock)
//Vue.component(DemoSection.name, DemoSection)

//export default App

import { createApp } from 'vue'
//import Taro from '@tarojs/taro'
import { Avatar } from '@nutui/nutui-taro'
//import { Button } from 'vant'
import { mixinLocal } from './locales.vue3'
import DemoBlock from './components/demo-block'
import DemoSection from './components/demo-section'


// app.css
// html4
//import '@tarojs/taro/html.css';
//import './taro-h5.html.css';
//import './app.scss'

import './vant.index.css';
//import './app.less'
import './patch.index.css';

const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(Avatar)

App.mixin(mixinLocal)

//App.component(Button.name, Button)
App.component(DemoBlock.name, DemoBlock)
App.component(DemoSection.name, DemoSection)

export default App
