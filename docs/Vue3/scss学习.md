---
autoPrev: axios
---
# scss文件自动导入

## 1.安装依赖

```
npm install --save-dev sass sass-loader
```

## 2.创建一个var.scss文件

```scss
$xtxColor: #27ba9b;
$helpCplpr: #ffb302;
```

## 3.在vite.config.js文件中配置

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/var.scss";` // 替换为您的SCSS文件路径
      }
    }
  }
})

```

## 4.使用

```vue
<template>
<div class="red">123</div>
</template>
<style scoped lang="scss">
.red {
  color: $helpCplpr;
}
</style>
```

## 5.注意

```
使用时必须配置lang="scss"
```

