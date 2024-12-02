const headConfig = require('./config/headConfig.js');
const pluginsConfig = require('./config/pluginsConfig.js');
const navConfig = require('./config/navConfig.js');
module.exports = {
  base: '/grbk/', //部署站点的基础路径
  title: '小陈同学', // 网站标题
  description: '学习笔记', // 描述
  head: headConfig,
  plugins: pluginsConfig,
  themeConfig: {
    lastUpdated: '更新时间', // 显示更新时间
    logo: '/assets/img/hero.png', //设置图标
    navbar: true, //是否显示导航栏 false 不显示 true 显示
    sidebar: 'auto', // 侧边栏是否自动生成 false 关闭 true 自动生成
    // 设置导航栏
    nav: navConfig
  }
}
