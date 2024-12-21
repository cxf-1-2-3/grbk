/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "61a3ff24748a4c7de5ae6128a6a9cafe"
  },
  {
    "url": "assets/css/0.styles.c17060ed.css",
    "revision": "9203eb27596842eda009495244eae9e5"
  },
  {
    "url": "assets/image/miniProgram/1.jpg",
    "revision": "fc9af876eea26d58456d873d8d1f1649"
  },
  {
    "url": "assets/image/miniProgram/scss、sass插件.jpg",
    "revision": "79fc7671022d68693086718e1f7154f2"
  },
  {
    "url": "assets/image/miniProgram/txxmxx.jpg",
    "revision": "58e50697728d84b46262f9c2a1ebc190"
  },
  {
    "url": "assets/image/miniProgram/xjxm.jpg",
    "revision": "29a3617e5591cf586b29b773b5880b30"
  },
  {
    "url": "assets/image/miniProgram/ylxg.jpg",
    "revision": "87774d42f65083144c2cf95df4e95f1e"
  },
  {
    "url": "assets/image/miniProgram/上传文件.jpg",
    "revision": "5b55be254dfcbfda4b4a37a0f0803fc1"
  },
  {
    "url": "assets/image/miniProgram/创建仓库.jpg",
    "revision": "7616c7d67171d644e9f96f0dbaab70c0"
  },
  {
    "url": "assets/image/miniProgram/发布.jpg",
    "revision": "1c9206354fbc92967779b701b2dcb067"
  },
  {
    "url": "assets/image/miniProgram/基础设置.jpg",
    "revision": "accbca1415692dfd7a678cd23abcf5fb"
  },
  {
    "url": "assets/image/miniProgram/填写信息.jpg",
    "revision": "9e18850ec3ef6b74051f308778a3b642"
  },
  {
    "url": "assets/image/miniProgram/导航.jpg",
    "revision": "a2ce59c89b5150918c83437e76ad08b3"
  },
  {
    "url": "assets/image/miniProgram/快捷键切换.jpg",
    "revision": "611f5deb1e0f25610492c061e46c58f8"
  },
  {
    "url": "assets/image/miniProgram/数字图标.jpg",
    "revision": "b444d810788758c602c3091f8515fa97"
  },
  {
    "url": "assets/image/miniProgram/数字输入框.jpg",
    "revision": "997aca263496b639f65bec554f68379c"
  },
  {
    "url": "assets/image/miniProgram/文本居中.jpg",
    "revision": "5a92940f7771529d1b012da3353b04ce"
  },
  {
    "url": "assets/image/miniProgram/更新1.jpg",
    "revision": "08823828dcd358b82d045ca39f476e49"
  },
  {
    "url": "assets/image/miniProgram/版本提交.jpg",
    "revision": "c55dfa963dbc1a66154f5188b9f45649"
  },
  {
    "url": "assets/image/miniProgram/编辑信息.jpg",
    "revision": "d5d1fa51055cd79af2bf93111f7d4b42"
  },
  {
    "url": "assets/image/miniProgram/设置.jpg",
    "revision": "730b5522c83bd1a7a0e121ac8cf0c1e6"
  },
  {
    "url": "assets/image/miniProgram/配置小程序Id.jpg",
    "revision": "9fabf593d2ad2d2a8f80f68831f6602e"
  },
  {
    "url": "assets/image/miniProgram/配置开发者路径.jpg",
    "revision": "50f76e2c5b3eec139359e9c3f2cb72a7"
  },
  {
    "url": "assets/image/miniProgram/配置页面.jpg",
    "revision": "1d2fea6145f0e968a3e0c7e4fbe2de05"
  },
  {
    "url": "assets/image/sp.jpg",
    "revision": "e80ca96c94d9103665bbdb629f106473"
  },
  {
    "url": "assets/image/vuess.jpg",
    "revision": "c913daa7e3941fddc906ae34d979d7d0"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "a286bea7c1f63b77af23dd8bd18bceae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sp.e80ca96c.jpg",
    "revision": "e80ca96c94d9103665bbdb629f106473"
  },
  {
    "url": "assets/img/txxmxx.58e50697.jpg",
    "revision": "58e50697728d84b46262f9c2a1ebc190"
  },
  {
    "url": "assets/img/vuess.c913daa7.jpg",
    "revision": "c913daa7e3941fddc906ae34d979d7d0"
  },
  {
    "url": "assets/img/xjxm.29a3617e.jpg",
    "revision": "29a3617e5591cf586b29b773b5880b30"
  },
  {
    "url": "assets/img/ylxg.87774d42.jpg",
    "revision": "87774d42f65083144c2cf95df4e95f1e"
  },
  {
    "url": "assets/js/1.55b4e68e.js",
    "revision": "d776aed2fc221f1381639c48538e6752"
  },
  {
    "url": "assets/js/10.d542067e.js",
    "revision": "67038cd41f825a64222ec04f9724e696"
  },
  {
    "url": "assets/js/11.5c426303.js",
    "revision": "4e342c30390a1969dce36222d517cbf2"
  },
  {
    "url": "assets/js/12.b9d98a1a.js",
    "revision": "e9bcf6af2d0af3f470a99770575814c9"
  },
  {
    "url": "assets/js/13.12b3381e.js",
    "revision": "b40600ae790c07825c31972b32678768"
  },
  {
    "url": "assets/js/14.5ac41178.js",
    "revision": "e66d6fa0d7d29e5965307af5cd0dd952"
  },
  {
    "url": "assets/js/15.aff17c76.js",
    "revision": "e2ae688f3ffa8477c7d9d0f480242912"
  },
  {
    "url": "assets/js/16.8fffea27.js",
    "revision": "60002b3641f41a00ba224c65541f7586"
  },
  {
    "url": "assets/js/17.073b3990.js",
    "revision": "4a22b550f227f5b13eb01e7ea57e1dce"
  },
  {
    "url": "assets/js/18.85f51e2e.js",
    "revision": "d542f06efa9ab920d2ec88f75b395a16"
  },
  {
    "url": "assets/js/19.f4fd38c7.js",
    "revision": "fc278b01aa9f0a205ecc55f4741a5137"
  },
  {
    "url": "assets/js/2.f91b59e3.js",
    "revision": "6f3170bfee02d0dbdd1f595e429cf038"
  },
  {
    "url": "assets/js/20.7e34460e.js",
    "revision": "1f232ddd04c9baafb7ee1b41b1848890"
  },
  {
    "url": "assets/js/21.f701fc70.js",
    "revision": "35176b8175c786c5ed623f793d12aa20"
  },
  {
    "url": "assets/js/22.2a1461fd.js",
    "revision": "c09d10fb8571c229449d70abaf5646ba"
  },
  {
    "url": "assets/js/23.82cf4625.js",
    "revision": "3819df5b9541aea8e3be270e919d903a"
  },
  {
    "url": "assets/js/24.0ca963e1.js",
    "revision": "1f074d78e8c53bc9702365f401eff4ba"
  },
  {
    "url": "assets/js/25.650fd3d8.js",
    "revision": "9b2f353898cb416386c7e8c0ca589542"
  },
  {
    "url": "assets/js/26.5c8eddc5.js",
    "revision": "bb6500258c635c13904f6471e17e0877"
  },
  {
    "url": "assets/js/27.9cb27819.js",
    "revision": "8145ac1f6cbc2bfbdf87a70b3f7bb146"
  },
  {
    "url": "assets/js/28.3aa19554.js",
    "revision": "49efe4a3e82afc688156416f7239c86d"
  },
  {
    "url": "assets/js/29.262d08e2.js",
    "revision": "2b05246eb7879a25e22944b47bcd21b5"
  },
  {
    "url": "assets/js/3.3547f946.js",
    "revision": "d55f76dbe476a2229b2ef2928afba2d3"
  },
  {
    "url": "assets/js/30.40523d49.js",
    "revision": "c9d0948befb6c466e2c2235c9ef18384"
  },
  {
    "url": "assets/js/31.df1f4f37.js",
    "revision": "15eb2768e305c71b4729dccd1b5ff433"
  },
  {
    "url": "assets/js/32.596994f5.js",
    "revision": "a253db32ec5d9aa1c73cb78410a4dcba"
  },
  {
    "url": "assets/js/33.79039c2a.js",
    "revision": "726f437d7a256c1c79c330047b72d9da"
  },
  {
    "url": "assets/js/34.f1484820.js",
    "revision": "d46f6991f9028010c75a4a8e8a6aef21"
  },
  {
    "url": "assets/js/35.989a3c3a.js",
    "revision": "40a389ee2abf20586fc451052ce4a11a"
  },
  {
    "url": "assets/js/36.b02176a8.js",
    "revision": "b9691967807a78f1344a603654a091a7"
  },
  {
    "url": "assets/js/37.56a5ab40.js",
    "revision": "9e6948af5dedfbaea8209596c090cd16"
  },
  {
    "url": "assets/js/38.28994205.js",
    "revision": "a83f9d20e94b46a8235c78c283660a82"
  },
  {
    "url": "assets/js/39.3e00e4f1.js",
    "revision": "f811d6d24825dd242238fd6c3f428e7b"
  },
  {
    "url": "assets/js/4.1fd84505.js",
    "revision": "abfef1d06a8cc9890aaebc381cae3daf"
  },
  {
    "url": "assets/js/5.e1b9c20f.js",
    "revision": "ef026226682f83bcb65c202358479d13"
  },
  {
    "url": "assets/js/6.f1cc023a.js",
    "revision": "a91efd50b95cc3a9ae6f97903f67eff8"
  },
  {
    "url": "assets/js/7.00f4a8f8.js",
    "revision": "3e3746f74afd3275fd64e42309269408"
  },
  {
    "url": "assets/js/app.f22187c9.js",
    "revision": "20554a2099e4c6fc611af0119fc8553a"
  },
  {
    "url": "assets/js/vendors~docsearch.0f7eca41.js",
    "revision": "db913a80c48d1c08cabfbe42d43a0096"
  },
  {
    "url": "countUp.html",
    "revision": "4b25845ea888406f312eadb11a54116e"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "index.html",
    "revision": "ac2aa9c1c9a79b8dc20cc8d5c6c420d2"
  },
  {
    "url": "JS/基础知识.html",
    "revision": "04b53c5c6ae2c121d001336fe4f739b4"
  },
  {
    "url": "NodeJs/基础知识.html",
    "revision": "ef0c1922b112bd1b6d7eb33a4b17f676"
  },
  {
    "url": "Other/VuePress学习.html",
    "revision": "4dd47303dc8d8ee4863637c628cdfc2e"
  },
  {
    "url": "React/插件使用.html",
    "revision": "fb096582637b000131c260558fe692a3"
  },
  {
    "url": "vue/index.html",
    "revision": "5fb79873ba0dafc8ad97912fcdc72331"
  },
  {
    "url": "vue/数字动画.html",
    "revision": "fc83a987738db593d2636d92b76d3158"
  },
  {
    "url": "vue/视频播放.html",
    "revision": "469365beed6915a9ee8421183098f28b"
  },
  {
    "url": "vue/页面水印.html",
    "revision": "0ae2ceac7fbdfc3af800da4617b6650a"
  },
  {
    "url": "WeChatMiniProgram/基础知识.html",
    "revision": "bba7d46f6dd2b9e2e12094cbd297fc3c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
