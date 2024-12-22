---
autoPrev: axios
---
# scss文件自动导入

## 1.创建一个var.scss文件

```scss
$xtxColor: #27ba9b;
$helpCplpr: #ffb302;
```

## 2.在vite.config.js文件中配置

```js
css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/var.scss" as *;
        `
      }
    }
  }
```

## 3.使用

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

## 4.注意

```
使用时必须配置lang="scss"
```

