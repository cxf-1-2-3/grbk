# 基础知识

## 快捷方式

```
//div*30>lorem4 文字随机生成4个单词
```

## MutationObserver  （监听DOM元素变化）

* **介绍：**

  `MutationObserver` 是浏览器提供的一个强大 API，用于监听 DOM 树的变化并做出响应。它是现代 Web 开发中处理动态 DOM 变化的标准方式，比传统的 DOM 事件更高效、更灵活。

* **基本概念：**

  - **监听范围**：可以监听节点的添加 / 删除、属性变化、文本内容变化等。
  - **异步触发**：DOM 变化不会立即触发回调，而是在事件循环结束后批量处理，避免性能问题。
  - **兼容性**：现代浏览器（Chrome 26+、Firefox 14+、Safari 6.1+、Edge）均支持。

* 使用场景

  * `MutationObserver` 是处理动态 DOM 变化的首选工具，尤其适合：
    - 需要响应第三方库修改 DOM 的场景
    - 需要监听复杂 DOM 变化的组件
    - 需要在不修改源码的情况下扩展现有功能

* 使用：

  ```vue
  <template>
    <div ref="box"></div>
  </template>
  <script>
  export default {
    data() {
      return {
        observer: null,
      }
    },
    mounted() {
      // 获取元素
      const box = this.$refs.box
      // 创建观察者
      this.observer = new MutationObserver((mutations) => {
        // mutations 是一个数组，包含所有观察到的变化
        // mutation 是一个对象，包含变化的信息
        // mutation.type 是变化的类型
        // mutation.target 是变化的元素
        // mutation.addedNodes 是添加的节点
        // mutation.removedNodes 是删除的节点
        // mutation.previousSibling 是前一个兄弟节点
        // mutation.nextSibling 是后一个兄弟节点
        // mutation.oldValue 是旧的值 
        // mutation.attributeName 是变化的属性名
        // mutation.attributeNamespace 是变化的属性命名空间
        // mutation.newValue 是新的值
        mutations.forEach((mutation) => {
          console.log(mutation)
          // 监听属性变化
          if (mutation.type === 'attributes') {
            console.log(mutation.attributeName, mutation.newValue)
          }
          // 监听子节点变化
          if (mutation.type === 'childList') {
            console.log(mutation.addedNodes, mutation.removedNodes)
          }
          // 监听文本内容变化
          if (mutation.type === 'characterData') {
            console.log(mutation.target.textContent)
          }
        })
      })
      // 观察元素
      this.observer.observe(box, {
        attributes: true,      // 观察属性变化
        childList: true,       // 观察子节点变化
        subtree: true,         // 观察所有后代节点
        characterData: true,   // 观察文本内容变化
      })
    },
    beforeDestroy() {
      // 停止观察
      this.observer.disconnect()
    }
  }
  </script>
  <style scoped>
  
  </style>
  
  ```

* **Vue封装自定义指令:**

  ```js
  const resizeDirective = {
    mounted(el, binding) {
      const observer = new MutationObserver(() => {
        binding.value(el.offsetWidth, el.offsetHeight);
      });
      
      observer.observe(el, {
        attributes: true,
        attributeFilter: ['style', 'class']
      });
      
      el.__resizeObserver__ = observer;
    },
    
    unmounted(el) {
      el.__resizeObserver__.disconnect();
      delete el.__resizeObserver__;
    }
  };
  
  // 使用
  Vue.directive('resize', resizeDirective);
  ```

* **注意：**

  * **性能优化**：
    * 只监听必要的节点和变化类型。
    * 避免在回调中频繁修改 DOM（可能导致无限循环）。

  - **内存管理**：
    * 确保在组件 / 页面销毁时调用 `disconnect()`，防止内存泄漏。

  - **异步触发特性**：
    * 回调在事件循环结束后执行，适合批量处理变化。
    * 如需同步响应，可使用轮询。

  - **跨浏览器兼容性**：
    * 主流浏览器均支持，但需注意旧版本可能需要 polyfill。

* **替代方案：**
  * **ResizeObserver**：专门监听元素大小变化（更高效）。
  * **IntersectionObserver**：监听元素可见性变化。
  * **DOM 事件**：如 `input`、`change` 等（适用于特定场景）。