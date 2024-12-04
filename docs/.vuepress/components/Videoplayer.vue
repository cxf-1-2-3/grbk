<template>
  <div class="videoplayer">
    <div id="dplayer" style="width: 600px; height: 400px"></div>
  </div>
</template>
<script>
import DPlayer from 'dplayer'
export default {
  data() {
    return {
      dp: {}
    }
  },
  methods: {
    loadVideo() {
      this.dp = new DPlayer({
        container: document.getElementById('dplayer'), //播放器容器
        mutex: false, //  防止同时播放多个用户，在该用户开始播放时暂停其他用户
        theme: '#b7daff', // 风格颜色，例如播放条，音量条的颜色
        loop: false, // 是否自动循环
        lang: 'zh-cn', // 语言，'en', 'zh-cn', 'zh-tw'
        screenshot: true, // 是否允许截图（按钮），点击可以自动将截图下载到本地
        hotkey: true, // 是否支持热键，调节音量，播放，暂停等
        preload: 'auto', // 自动预加载
        volume: 0.7, // 初始化音量
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2, 3], //可选的播放速度，可自定义
        logo: 'https://qczh-1252727916.cos.ap-nanjing.myqcloud.com/pic/273658f508d04d488414fd2b84c9f923.png', // 在视频左上角上打一个logo
        video: {
          url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4', // 播放视频的路径
          quality: [
            // 设置多个质量的视频
            {
              name: '高清',
              url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
              type: 'auto' // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
            },
            {
              name: '标清',
              url: 'https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4',
              type: 'auto'
            }
          ],
          defaultQuality: 0, // 默认是高清
          pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=24336452,906724543&fm=26&gp=0.jpg', // 视频封面图片
          thumbnails:
            'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=24336452,906724543&fm=26&gp=0.jpg' // 进度条上的缩略图,需要通过dplayer-thumbnails来生成
        },
        // subtitle: {
        //   //字幕
        //   url: "", //字幕网址
        //   color: "#fff", //字幕颜色
        //   fontSize: "20px",
        //   bottom: "40px"
        // },
        // danmaku: {
        //   // 弹幕
        //   id: '9E2E3368B56CDBB4',
        //   api: 'https://api.prprpr.me/dplayer/',
        //   token: 'tokendemo', //后端验证令牌
        //   maximum: 1000, //弹幕最大数量
        //   addition: ['https://api.prprpr.me/dplayer/v3/bilibili?aid=4157142'], //其他弹幕
        //   user: 'DIYgod', //弹幕用户名
        //   bottom: '15%', //值，例如：10px，10％，即弹幕底部和播放器底部之间的距离，以防止遮挡字幕
        //   unlimited: true //即使弹幕重叠也显示所有弹幕
        // },
        contextmenu: [
          //  自定义上下文菜单
          // 右键菜单
          {
            text: 'b站',
            link: 'https://www.bilibili.com'
          },
          {
            text: '选项二',
            click: (player) => {
              console.log(player)
            }
          }
        ],
        highlight: [
          //进度条上的自定义时间标记
          // 进度条时间点高亮
          {
            text: '10M',
            time: 6
          },
          {
            text: '20M',
            time: 12
          }
        ]
      })
      // 以下为隐藏一些作者的信息和视频播放源 如不需要可删除
      // document.querySelector(".dplayer-menu").remove(); //隐藏右键菜单
      // document.querySelector('.dplayer-mask').remove()
      // document.querySelector('.dplayer-info-panel-item-url').remove() //隐藏播放源
      // let length = document.querySelectorAll('.dplayer-menu-item').length
      // document.querySelectorAll('.dplayer-menu-item')[length - 2].remove() // 去掉作者信息
      // document.querySelectorAll('.dplayer-menu-item')[length - 1].remove() // 去掉作者信息
      //考虑隐私问题，初始化时把音量设为0,才可自动播放
      //this.dp.volume(percentage: number, nostorage: boolean, nonotice: boolean): 设置视频音量
      this.dp.volume(0, true, true)
      //视频组件加载完成后自动播放
      this.dp.on('loadedmetadata', function () {
        this.dp.play()
      })
      //视频流出问题时触发
      this.dp.on('error', function () {
        if (document.getElementById('player')) {
          //当前时间＋1
          let time = Number(Math.round(this.dp.video.currentTime + 1))
          //重新加载视频
          loadVideo()
          //跳转到更新后的时间
          this.dp.seek(time)
        }
      })
    }
  },
  mounted() {
    this.loadVideo()
  }
}
</script>
<style scoped>
/* .videoplayer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
} */

.video-box {
  width: 100%;
  height: 100%;
}

/* 禁用视频右键菜单 */
:deep(.dplayer-menu, .dplayer-mask) {
  display: none !important;
}

/* 隐藏底部操作栏 */
/* :deep(.dplayer-controller) {
   display: none;
 } */
/* 隐藏底部操作栏动画 */
/* :deep(.dplayer-controller-mask) {
   display: none;
 } */
</style>
