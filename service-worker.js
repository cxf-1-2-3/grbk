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
    "revision": "519871149193abd5a1139ad1874d8b95"
  },
  {
    "url": "assets/css/0.styles.eeeee01d.css",
    "revision": "64b1175859a81871567130f077bd8d33"
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
    "url": "assets/img/vuess.c913daa7.jpg",
    "revision": "c913daa7e3941fddc906ae34d979d7d0"
  },
  {
    "url": "assets/js/1.0c5ebbc3.js",
    "revision": "b8b98476d0a71741959278fd35c3e4db"
  },
  {
    "url": "assets/js/10.6e973f26.js",
    "revision": "2eba38d625f7b027fba98e27eac53208"
  },
  {
    "url": "assets/js/11.11b55f43.js",
    "revision": "b592877502b681d079cb379934b549cc"
  },
  {
    "url": "assets/js/12.9ae54e52.js",
    "revision": "0a6bca5c53a016ba3005bd87d7a3f158"
  },
  {
    "url": "assets/js/13.c1980914.js",
    "revision": "4e20bb36017600242ce482d36a5eca2d"
  },
  {
    "url": "assets/js/14.3f4524dc.js",
    "revision": "d6cd7e49c94d66ff863797f011cb2d72"
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
    "url": "assets/js/17.44ea09e1.js",
    "revision": "d68afddfe672e4d56cc8588cea7396b5"
  },
  {
    "url": "assets/js/18.7e1a94ad.js",
    "revision": "bc461ce4686afed3fe77b9b696ae7a44"
  },
  {
    "url": "assets/js/19.5f935864.js",
    "revision": "d3acb5a966e64a4c05391c975ee5cde8"
  },
  {
    "url": "assets/js/2.143d2e06.js",
    "revision": "be4cd151a6a15435d6e06160d05940c9"
  },
  {
    "url": "assets/js/20.1bed077b.js",
    "revision": "bf397fb956be1ed7d06dc15d2bf0e78b"
  },
  {
    "url": "assets/js/21.5527d355.js",
    "revision": "5114e19391388dd03f7dffa93592b6de"
  },
  {
    "url": "assets/js/22.ac90e98d.js",
    "revision": "afef640ce9558541a04f109fd28802ce"
  },
  {
    "url": "assets/js/23.7ff5961c.js",
    "revision": "93d335cc82e18bc7926132dc535cfbaf"
  },
  {
    "url": "assets/js/24.7669871e.js",
    "revision": "2176bb3fc0a603b848274276a2487e50"
  },
  {
    "url": "assets/js/25.ab52a9ff.js",
    "revision": "d76cc412e0c46854d3d56f253435ca2c"
  },
  {
    "url": "assets/js/26.b7feb570.js",
    "revision": "eb72e64217d4bc01045d2452b750b463"
  },
  {
    "url": "assets/js/27.8b36943e.js",
    "revision": "48105f84776fb83bf18e68888f5fa945"
  },
  {
    "url": "assets/js/28.6ebba82f.js",
    "revision": "e833aa64b789897e75c6f4ba845b1325"
  },
  {
    "url": "assets/js/29.dda67698.js",
    "revision": "c194279334d093ab0774f957ce4642e1"
  },
  {
    "url": "assets/js/3.ae49ffe1.js",
    "revision": "08e2bbc5e0020246fcc764556bdfa675"
  },
  {
    "url": "assets/js/30.2ff76903.js",
    "revision": "a482c8c23a4bb1f641682f4a0555b952"
  },
  {
    "url": "assets/js/31.3e738f4a.js",
    "revision": "96c8f99bb4da14ed9fee392a547d22c4"
  },
  {
    "url": "assets/js/32.a19be3a8.js",
    "revision": "bba92c027533d588802d7207e31bd665"
  },
  {
    "url": "assets/js/33.4f998377.js",
    "revision": "95ca7434e10782bc3e255f16b19b923b"
  },
  {
    "url": "assets/js/34.89c30fce.js",
    "revision": "5f13cabaf55c0d8cddc5a1fdecda841b"
  },
  {
    "url": "assets/js/35.1a2b4d9b.js",
    "revision": "fc7ee9e65896f943a842c48c2ae3cd97"
  },
  {
    "url": "assets/js/36.4d73450e.js",
    "revision": "38a800d40fb2339d3428cd1fa3ce2987"
  },
  {
    "url": "assets/js/4.e679038a.js",
    "revision": "fcb0473225197fbdbdd4d6e85170a9e9"
  },
  {
    "url": "assets/js/5.c56ac68b.js",
    "revision": "1cacadbb4882921e539fc234ea7d3ee8"
  },
  {
    "url": "assets/js/6.a58aea6f.js",
    "revision": "144ce7041c8461c8aff10a450ab02915"
  },
  {
    "url": "assets/js/7.e70a55db.js",
    "revision": "5361ed451184cdc6880ef27da566255a"
  },
  {
    "url": "assets/js/app.7fcde48f.js",
    "revision": "e61d7a053ca3fea9001013ca48bd4a97"
  },
  {
    "url": "assets/js/vendors~docsearch.bf1b5747.js",
    "revision": "0e4b14040d419302f8510ae219208f98"
  },
  {
    "url": "countUp.html",
    "revision": "dfdeb5a99ae26c50c8f6c38cbda1d26c"
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
    "revision": "1bf9cbe5f3742fe9620066deddb717d9"
  },
  {
    "url": "JS/基础知识.html",
    "revision": "be70304d8a842b9c73a947979a2db846"
  },
  {
    "url": "NodeJs/基础知识.html",
    "revision": "7079676590d3f4bfca3aaffe0159c39a"
  },
  {
    "url": "Other/VuePress学习.html",
    "revision": "41c330cda64354654d03a237e847bf4e"
  },
  {
    "url": "React/插件使用.html",
    "revision": "071bfacd53c1f7d75759aa79f7a9fe8e"
  },
  {
    "url": "vue/index.html",
    "revision": "3b2243bd4dd9dfa2a0196b65022fd3ae"
  },
  {
    "url": "vue/数字动画.html",
    "revision": "e97faca6a2e50c847d1f483e565ddb94"
  },
  {
    "url": "vue/视频播放.html",
    "revision": "5d150980329318e6cafd6caa25e4e92e"
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
