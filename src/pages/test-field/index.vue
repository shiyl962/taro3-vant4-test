<template>
  <label></label>
  <demo-block title="测试1：v-model绑定报错">
    <van-cell-group>
      <van-cell-group>
        <van-field v-model="value"
                   label="文本1" />
      </van-cell-group>
    </van-cell-group>

    <button type="primary" @click="testRef(1)">测试按钮1</button>
  </demo-block>
  <demo-block title="测试2：v-model同时绑定Taro组件不报错">
    <van-cell-group>
      <van-field v-model="value1"
                 label="文本2" />
    </van-cell-group>
    <input type="text" placeholder="这个是Taro组件" v-model="value1" :focus="true" />

    <button type="primary" @click="testRef(2)">测试按钮2</button>
  </demo-block>
</template>

<script>
import { CellGroup, Field } from 'vant'

export default {
  components: {
    'van-cell-group': CellGroup,
    'van-field': Field
  },

  data() {
    return {
      value: '',
      count: 0,
      value1: '',
    };
  },
  methods: {
    testRef(btn_num) {
      console.log('testRef =>', this.count++, 'btn_num =>', btn_num)
      if (btn_num ==1) {
        this.value = `test ref: ${this.count}`
      }
      else
      {
        this.value1 = `test ref: ${this.count}`
      }
    }
  }
};
</script>
