const moment = require('moment')
const secret = require('./secret')
module.exports = [
  // 配置更新时间
  [
    '@vuepress/last-updated',
    {
      transformer: (timestamp) => {
        moment.locale('zh-CN')
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  ],
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    }
  ],
  [
    '@vssue/vuepress-plugin-vssue',
    {
      // 设置 `platform` 而不是 `api`
      platform: 'github-v4',
      // 其他vssue配置
      // locale: 'zh', // 语言设置
      owner: 'cxf-1-2-3',
      repo: 'grbk',
      clientId: secret.clientIdent,
      clientSecret: secret.clientSecret,
      autoCreateIssue: true
    }
  ],
  // 返回顶部功能
  ['@vuepress/back-to-top'],
  // 图片的缩放功能
  [
    '@vuepress/medium-zoom',
    {
      selector: 'img'
    }
  ],
  // 自动生成侧边栏
  [
    'vuepress-plugin-auto-sidebar',
    {
      // options
      nav: true //生成导航栏文件
    }
  ]
]
