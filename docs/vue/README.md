---
sidebar: auto
---
# Vuepress学习

## 1.创建项目

```bash
# 安装
yarn global add vuepress # 或者：npm install -g vuepress

# 初始化项目
npm init -y 

# 创建一个 docs文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md

# 在 package.json 中 配置
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}

# 启动项目
yarn docs:dev # npm run docs:dev

# 构建静态文件
vuepress build .
```

## 2.配置首页

```makefile
在docs\README.md文件
---
home: true
# heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## 3.默认页面路由地址如下：

| 文件的相对路径     | 页面路由地址   |
| ------------------ | -------------- |
| `/README.md`       | `/`            |
| `/guide/README.md` | `/guide/`      |
| `/config.md`       | `/config.html` |

## 4.导航栏配置

```
在.vuepress/config.js 
module.exports = {
  themeConfig: {
    logo: '/assets/img/hero.png', //设置图标  图片存放位置docs\.vuepress\public\assets\img\hero.png
    navbar: true, //是否显示导航栏 false 不显示 true 显示
    // 设置导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'vue', link: '/vue/' },
      { text: 'External', link: 'https://google.com' }, //跳转页面
      // 配置存在下拉框的
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [{ text: 'vue', link: '/vue/' }] },
          { text: 'Group2', items: [{ text: 'vue', link: '/vue/' }] }
        ]
      }
    ]
  }
}

注意可以在某个页面添加如下代码表示当前页面不存在导航栏
---
navbar: false
---

```

## 5.侧边栏配置