---
autoPrev: Pinia
---
# 使用elementPlus

## 	1.安装

```
npm install element-plus --save
```

## 	2.全局引入

```js
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

## 	3.按文档使用组件

```vue
<template>
  <el-button type="primary">按钮</el-button>
</template>
```

## 	4.修改主题色

### 		4.1安装

```js
npm i sass -D
```

### 		4.2配置自定义的样式文件styles/element/index.scss

```
@forward 'element-plus/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': #cd4d15
    )
  )
);
@use 'element-plus/theme-chalk/src/index.scss' as *;
```

### 		4.3删除配置

```
将main.js中
import 'element-plus/dist/index.css' //删除默认文件
import './styles/element/index.scss' //使用自定义样式
```



