module.exports = [
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