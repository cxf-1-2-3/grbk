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
    "revision": "c4230ce4253a75d3831d8b8c46e9d3a1"
  },
  {
    "url": "assets/css/0.styles.e9a7ea3a.css",
    "revision": "aac233dc69ba127404dbe46e824107c5"
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
    "url": "assets/js/17.d9fc4f8d.js",
    "revision": "26298babe086ae273c8c72f92e66f0b8"
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
    "url": "assets/js/20.9b9d2c0b.js",
    "revision": "83d433ed57068e1c9c9e55fbfd32a256"
  },
  {
    "url": "assets/js/21.92aef9e3.js",
    "revision": "316a2306664998978810ea90ccebdd8a"
  },
  {
    "url": "assets/js/22.a28eb7b8.js",
    "revision": "e0cfd0cece541770e0439a8cad5024f8"
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
    "url": "assets/js/27.83d4fac0.js",
    "revision": "ab1ac59de6698843117bcb5ce1cb0b13"
  },
  {
    "url": "assets/js/28.777b03c4.js",
    "revision": "02a4c4ca8a525142f0fd5a2813bd7cb9"
  },
  {
    "url": "assets/js/29.a6a9d90e.js",
    "revision": "f027cb54dcd78f73e2b8074e53da4aec"
  },
  {
    "url": "assets/js/3.3547f946.js",
    "revision": "d55f76dbe476a2229b2ef2928afba2d3"
  },
  {
    "url": "assets/js/30.72de84de.js",
    "revision": "05a2dd35c9c51d517e55dba7fa72c487"
  },
  {
    "url": "assets/js/31.e9b69fbd.js",
    "revision": "caf88d3c538d753035135efce54c6871"
  },
  {
    "url": "assets/js/32.50f7ba23.js",
    "revision": "e7d0637833eefd068b4d8e2a152cdc9a"
  },
  {
    "url": "assets/js/33.83ba4f06.js",
    "revision": "6cd57fd38b10c416373a27e4aa865d40"
  },
  {
    "url": "assets/js/34.92746370.js",
    "revision": "f13b0c2e0c30464fde79821d406adeb0"
  },
  {
    "url": "assets/js/35.a64890b0.js",
    "revision": "72b63ed5369a0d6c053bb300bccd08bc"
  },
  {
    "url": "assets/js/36.b47f10ea.js",
    "revision": "64ebe5da5b5823d33eabc4f7d4ecbf2d"
  },
  {
    "url": "assets/js/37.cef817f6.js",
    "revision": "621e1e4f4a081f808b4bf7a4696714aa"
  },
  {
    "url": "assets/js/38.aba0f60b.js",
    "revision": "7aed1638e1e2fb87cbcd49e50a8b9daf"
  },
  {
    "url": "assets/js/39.27b1cca3.js",
    "revision": "0d3e1d3e4152067bd0d61fc0a6b6fa58"
  },
  {
    "url": "assets/js/4.1fd84505.js",
    "revision": "abfef1d06a8cc9890aaebc381cae3daf"
  },
  {
    "url": "assets/js/40.eec5c85e.js",
    "revision": "9ae4f812866eaca23fab23112811e5f4"
  },
  {
    "url": "assets/js/41.e085b1c2.js",
    "revision": "81d27ef6036632ce46470a08becc3f29"
  },
  {
    "url": "assets/js/42.3bb138cd.js",
    "revision": "42dcf368698f66758a7ad13436bf976e"
  },
  {
    "url": "assets/js/43.2ba8723e.js",
    "revision": "17b61c570ff967dc2a4ec22362e8c554"
  },
  {
    "url": "assets/js/44.da5a3351.js",
    "revision": "8f4a2b68510fd5eaf008d671e8c189b5"
  },
  {
    "url": "assets/js/45.2b146ab0.js",
    "revision": "8f9a2891b3bcff45963fd85e6c0c3d94"
  },
  {
    "url": "assets/js/46.d3921fac.js",
    "revision": "dc208d9d45f46f8709796b0ece07ed1b"
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
    "url": "assets/js/app.b50cdfd5.js",
    "revision": "5a5ed684e496e33ea8bcde35f655b769"
  },
  {
    "url": "assets/js/vendors~docsearch.0f7eca41.js",
    "revision": "db913a80c48d1c08cabfbe42d43a0096"
  },
  {
    "url": "countUp.html",
    "revision": "7d7d835f0f657a9221d57e90f154d016"
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
    "revision": "4c0c3c9f85b33973e186fcd5047f71da"
  },
  {
    "url": "JS/基础知识.html",
    "revision": "bc1f338bd3ee82cd7584ea128d25b31a"
  },
  {
    "url": "NodeJs/基础知识.html",
    "revision": "e811290bf785689d86b687932dd3b17d"
  },
  {
    "url": "Other/Vsode插件.html",
    "revision": "e3f28bfe0494375818674de1fca4876d"
  },
  {
    "url": "Other/VuePress学习.html",
    "revision": "45fd731c7a2579c8bc96e9fdcfd92f0f"
  },
  {
    "url": "React/插件使用.html",
    "revision": "2c6908e32d232f7433dd33f16c241f86"
  },
  {
    "url": "vue/index.html",
    "revision": "f703fd8651f618e0cd4654aa4e9cf319"
  },
  {
    "url": "vue/数字动画.html",
    "revision": "dbfbad554f90683051b4f97491f6cbf4"
  },
  {
    "url": "vue/视频播放.html",
    "revision": "b06faed32db0fd8372f50b5ca28e3f9b"
  },
  {
    "url": "vue/页面水印.html",
    "revision": "f024a53df9a8dc2d7f5c818d546289de"
  },
  {
    "url": "Vue3/axios.html",
    "revision": "7f88f5ece7a5e239002b90cc7316ae44"
  },
  {
    "url": "Vue3/elementPlus.html",
    "revision": "197b283b133a2352f52b2fe0f17b6058"
  },
  {
    "url": "Vue3/Pinia.html",
    "revision": "94f5eec1458529bb8db6ac68487df204"
  },
  {
    "url": "Vue3/scss学习.html",
    "revision": "23bd4dd7b3373ecff2a1c948811ad057"
  },
  {
    "url": "Vue3/其他.html",
    "revision": "e911c1f99f938602b6d56eb0e2258a84"
  },
  {
    "url": "Vue3/语法学习.html",
    "revision": "23ac0f074ce5716d65edd9255eea4bb3"
  },
  {
    "url": "WeChatMiniProgram/基础知识.html",
    "revision": "f4a3983509e41d652cfff415d13a3d6c"
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
