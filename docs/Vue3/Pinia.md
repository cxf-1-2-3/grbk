---
autoPrev: 语法学习
---

# Pinia
## 	1.介绍

* **介绍**
  * Pinia是vue的状态管理库，是Vuex状态管理库的替代
* **优势**
  * 提供更加简单的API(去掉了mutation)
  * 提供符合组合式风格的API
  * 去掉了modules的概念，每个store都是一个独立的模块
  * 搭配TypeScript一起使用提供可靠的类型推断

## 2.使用

* **安装依赖**

  ```
  npm install pinia
  ```

* **在`src`目录下创建`stores`文件夹，并初始化 Pinia**

  ```javascript
  // src/stores/index.js 位置
  import { createPinia } from 'pinia';
  
  const pinia = createPinia();
  export default pinia;
  ```

* **在`main.js`中注册 Pinia：**

  ```javascript
  // src/main.js 位置
  import { createApp } from 'vue';
  import App from './App.vue';
  import pinia from './stores'; // 引入Pinia
  
  createApp(App)
    .use(pinia) // 注册Pinia
    .mount('#app');
  ```

* **创建 Store：**

  ```javascript
  // src/stores/counter.js 位置
  import { defineStore } from 'pinia'
  export const useCounterStore = defineStore('counter', {
      // 状态
      state: () => ({
        count: 0,
        name: 'Vue 3 + Pinia'
      }),
      // 计算属性
      getters: {
        doubleCount: (state) => state.count * 2
      },
      // 方法（可以是同步或异步）
      actions: {
        increment() {
          this.count++
        },
        decrement() {
          this.count--
        },
        async asyncIncrement() {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          this.count++
        }
      }
    })
  
  ```
  
* **组件使用Store：**

  ```javascript
  <template>
    <div>
      <h1>{{ store.name }}</h1>
      <p>Count: {{ store.count }}</p>
      <p>Double Count: {{ store.doubleCount }}</p>
      <button @click="store.increment">+1</button>
      <button @click="store.decrement">-1</button>
      <button @click="store.asyncIncrement">Async +1</button>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '../stores/counter';
  
  // 获取store实例
  const store = useCounterStore();
  </script>
  ```
* **解构 Store（保留响应式）:**

  * **直接解构 Store 会失去响应式，需使用`storeToRefs`：**

  ```javascript
  <script setup>
  import { useCounterStore } from '../stores/counter';
  import { storeToRefs } from 'pinia';
  // 获取store实例
  const store = useCounterStore();
  // 使用storeToRefs解构state和getters（保留响应式）
  const { name, count, doubleCount } = storeToRefs(store);
  //  解构actions（无需storeToRefs）
  const { increment, decrement } = store;
  const add = () => { 
    increment()
  }
  const del = () => { 
    decrement()
  }
  
  </script>
  ```

* **在非组件环境使用**

  ```javascript
  // utils/api.js
  import { useCounterStore } from '@/stores/counter'
  import { createPinia } from 'pinia'
  
  const pinia = createPinia()
  const counterStore = useCounterStore(pinia)
  
  export const getCount = () => {
    return counterStore.count
  }
  
  export const getDoubleCount = () => {
    return counterStore.doubleCount
  }
  ```

* **监听 Store 变化**

  * **使用`$subscribe`监听 state 变化，或使用`$onAction`监听 action 调用：**

  ```javascript
  <script setup>
  import { useCounterStore } from '../stores/counter';
  
  const store = useCounterStore();
  // 监听state变化
  store.$subscribe((mutation, state) => {
    // mutation 是当前的mutation对象
    // state 是当前的state对象
    console.log(mutation, state);
  })
  
  // 监听action调用
  store.$onAction(({ name, store, args, after, onError, afterError }) => {
    // action相关信息
    // name: 当前action的名称
    // store: 当前store实例
    // args: 当前action的参数
    // after: 当前action执行成功后的回调
    after((result) => {
      console.log(`Action ${name} succeeded with result:`, result);
    });
    // onError: 当前action执行失败时的错误处理
    onError((error) => {
      console.log(`Action ${name} failed with error:`, error);
    });
    // afterError: 当前action执行失败后的错误处理 
  })
  </script>
  ```

* **使用`$reset()`方法重置 store 到初始状态：**

  ```javascript
  <script setup>
  import { useCounterStore } from '../stores/counter';
  
  const store = useCounterStore();
  
  const resetStore = () => {
    store.$reset(); // 重置为初始状态
  };
  </script>
  ```

* **动态修改 State**

  * **除了通过 actions 修改 state，还可以直接修改：**

  ```javascript
  <script setup>
  import { useCounterStore } from '../stores/counter';
  
  const store = useCounterStore();
  
  // 直接修改state（不推荐，建议通过actions）
  const incrementBy = (amount) => {
    store.count += amount;
  };
  
  // 使用$patch批量修改（推荐）
  const updateState = () => {
    store.$patch({
      count: store.count + 10,
      name: 'Updated Name'
    });
    
    // 或使用函数式$patch
    store.$patch((state) => {
      state.count += 10;
      state.name = 'Updated Name';
    });
  };
  </script>
  ```

* **在 setup () 中使用 Store：**

  ```javascript
  <template>
    <div>
      <p>Count: {{ count }}</p>
      <button @click="increment">+1</button>
    </div>
  </template>
  
  <script>
  import { useCounterStore } from '../stores/counter';
  
  export default {
    setup() {
      const store = useCounterStore();
      
      return {
        count: store.count,
        increment: store.increment,
      };
    },
  };
  </script>
  ```

