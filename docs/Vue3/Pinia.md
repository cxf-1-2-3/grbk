---
autoPrev: 语法学习
---

# 状态管理库Pinia
## 	1.介绍

```
介绍
Pinia是vue的状态管理库，是Vuex状态管理库的替代

优势
1.提供更加简单的API(去掉了mutation)
2.提供符合组合式风格的API
3.去掉了modules的概念，每个store都是一个独立的模块
4.搭配TypeScript一起使用提供可靠的类型推断
```
## 2.使用

```vue
1.安装
npm install pinia

2.创建一个 pinia 实例
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
// 导入createPinia
import { createPinia } from 'pinia'
// 创建实例
const pinia = createPinia()
// 挂载pinia到app应用中
createApp(App).use(pinia).mount('#app')

3.定义Store(state+action)
在Stores文件夹下创建counter.js文件
// 导入一个方法 defineStore
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounter = defineStore('counter', () => {
  //定义数据(state)
  const count = ref(0)
  // 定义修改数据的方法(action 同步和异步)
  const increment = () => {
    count.value += 1
  }
  // getter定义
  const getterCount = computed(() => count.value * 2)
    // 以对象的方法return提供组件使用
  return {
    count,
    increment,
    getterCount
  }

})


4.组件使用Store
<script setup>
// 导入pinia
import { useCounter } from '@/Stores/counter.js'

const Counter = useCounter()
console.log(Counter);

</script>
<template>
  <button @click="Counter.increment">{{ Counter.count }}</button>
  <div>
    {{ Counter.getterCount }}
  </div>
</template>

<style scoped></style>

5.storeToRefs
介绍
使用storeToRefs函数可以辅助保持数据(state+getter)的响应式解构

定义
const { 解构数据 } = storeToRefs(Counter)

使用
<script setup>
// 导入pinia
import { useCounter } from '@/Stores/counter.js'
import { storeToRefs } from 'pinia';

const Counter = useCounter()
//解构赋值保存响应式数据
const { count, getterCount } = storeToRefs(Counter)
// 方法的解构赋值
const { increment } = Counter
console.log(Counter);

</script>
<template>
  <button @click="increment">{{ count }}</button>
  <div>
    {{ getterCount }}
  </div>
</template>
```