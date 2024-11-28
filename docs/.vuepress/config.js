const moment = require('moment')
module.exports = {
  base: '/cxf.github.io/', //部署站点的基础路径
  title: '小陈同学', // 网站标题
  description: '学习笔记', // 描述
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: '小陈同学' }],
    ['meta', { name: 'keywords', content: '学习笔记' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  plugins: {
    '@vuepress/last-updated': {
      transformer: (timestamp) => {
        moment.locale('zh-CN')
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    },
    '@vssue/vuepress-plugin-vssue': {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他vssue配置
      // locale: 'zh', // 语言设置
      owner: 'cxf-1-2-3',
      repo: 'cxf.github.io',
      clientId: 'Ov23liJQ9LkWypmtKdBu',
      clientSecret: 'ae50c7e17fa815964b2771e702e5afd55051f118',
      autoCreateIssue: true
    }
  },
  themeConfig: {
    lastUpdated: '更新时间', // 显示更新时间
    logo: '/assets/img/hero.png', //设置图标
    navbar: true, //是否显示导航栏 false 不显示 true 显示
    sidebar: 'auto', // 侧边栏是否自动生成 false 关闭 true 自动生成
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
