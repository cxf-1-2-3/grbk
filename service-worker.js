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
    "revision": "3a692035c97d7834d02abe2a7b91fa70"
  },
  {
    "url": "assets/css/0.styles.27d5cf0d.css",
    "revision": "6b3f79c1e35f69414433cf2d6d940ba9"
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
    "url": "assets/js/1.cf48e5fe.js",
    "revision": "2726e656c33c1ac3a8b333190cbc9de2"
  },
  {
    "url": "assets/js/10.18903a0e.js",
    "revision": "81714baed849f165bab0ea539284337a"
  },
  {
    "url": "assets/js/11.6a3ace77.js",
    "revision": "14c2d1a76d6c0e4f3743135117060cac"
  },
  {
    "url": "assets/js/12.a6db0e46.js",
    "revision": "522bc98721134ce73fa862437504798c"
  },
  {
    "url": "assets/js/13.532d09e3.js",
    "revision": "a22f25821074dc011dc738506e1c56c0"
  },
  {
    "url": "assets/js/14.f72068ab.js",
    "revision": "9225d4b7ceec2a1ccb5fb93b8d6f3018"
  },
  {
    "url": "assets/js/15.aff17c76.js",
    "revision": "e2ae688f3ffa8477c7d9d0f480242912"
  },
  {
    "url": "assets/js/16.d544e82b.js",
    "revision": "43405e1b1ef9b9493010d03e56b7919d"
  },
  {
    "url": "assets/js/17.617b5c23.js",
    "revision": "111b0a43dfe064e52a796e2e22f78c72"
  },
  {
    "url": "assets/js/18.5bea09ad.js",
    "revision": "d400d99a2ea419856e327c8f8d602b88"
  },
  {
    "url": "assets/js/19.e2cfcb70.js",
    "revision": "a018229695d04ba2452e231d5a59f91a"
  },
  {
    "url": "assets/js/2.168ca37e.js",
    "revision": "e5de844b16de4a495af7354e65ad06f9"
  },
  {
    "url": "assets/js/20.12240659.js",
    "revision": "a71a2f03ee2f1472087cc8cdff000981"
  },
  {
    "url": "assets/js/21.76252f41.js",
    "revision": "54404e49b721441d5d7ac8886695ba7d"
  },
  {
    "url": "assets/js/22.20776499.js",
    "revision": "05bb4f283c7dc302197f03e0a288a4db"
  },
  {
    "url": "assets/js/23.960d07c6.js",
    "revision": "25cfb87b69818e8d722d5e073dae675a"
  },
  {
    "url": "assets/js/24.e7b55c7f.js",
    "revision": "574b6be112d4492353a582ad98983412"
  },
  {
    "url": "assets/js/25.2660bf1a.js",
    "revision": "8993dd209378f22846d4ef0baf5f4c61"
  },
  {
    "url": "assets/js/26.4278e6d7.js",
    "revision": "c2c3217b61d3a78e276f078d699b012a"
  },
  {
    "url": "assets/js/27.b998fdd2.js",
    "revision": "f5fb3480bf7564f8cae8d7ae0838283b"
  },
  {
    "url": "assets/js/28.57eab34f.js",
    "revision": "3587877726e626b81cb8378a406c12db"
  },
  {
    "url": "assets/js/29.68833f8c.js",
    "revision": "89992171cce9a007b7b7f8189004ba85"
  },
  {
    "url": "assets/js/3.2b1bcb75.js",
    "revision": "2fdab168d70f3d607b52093b3e407821"
  },
  {
    "url": "assets/js/30.ab4a5dc1.js",
    "revision": "5e7097f88f1cc209462e2e9dfddb60cf"
  },
  {
    "url": "assets/js/31.d11aa7d6.js",
    "revision": "030864371561ee9fe003547ccc78099b"
  },
  {
    "url": "assets/js/32.d877d419.js",
    "revision": "a40161d4df4381541e94bc713b6fb7cc"
  },
  {
    "url": "assets/js/4.1c15eedf.js",
    "revision": "f53a7fef73c4904160fa8f40f1924cd7"
  },
  {
    "url": "assets/js/5.44bc7b73.js",
    "revision": "c14c2b82da41d9efbe2a277300eaf6dc"
  },
  {
    "url": "assets/js/6.95e2981f.js",
    "revision": "15b6e328445860675e5e677409f5b591"
  },
  {
    "url": "assets/js/7.0517fa1d.js",
    "revision": "903dda75597708a4f71626fccd52706d"
  },
  {
    "url": "assets/js/app.a0bb2dcc.js",
    "revision": "bdfa1ffbe37efd545ebb1131baf6e626"
  },
  {
    "url": "assets/js/vendors~docsearch.38838867.js",
    "revision": "3c46eedf2e91c5434319f06db49490ca"
  },
  {
    "url": "countUp.html",
    "revision": "c0d84d0576474387c8179136ef3b9709"
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
    "revision": "5fc5c55b606e7ae01b4a978f977c0cfc"
  },
  {
    "url": "JS/基础知识.html",
    "revision": "c0b4d5d13f3d96648a7e0ee8ff178fe2"
  },
  {
    "url": "NodeJs/基础知识.html",
    "revision": "ef8d34e02fdcca3b7a879fcb65afc5aa"
  },
  {
    "url": "Other/VuePress学习.html",
    "revision": "1c5704ebc81108472855aa9cf4990040"
  },
  {
    "url": "React/插件使用.html",
    "revision": "5acc1a7298546ceb03e596c09b84b24e"
  },
  {
    "url": "vue/index.html",
    "revision": "7a7faef0f94772ca6e3054e6c7b82b61"
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
