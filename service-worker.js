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
    "revision": "255f2060b9b3c812638893dea1889040"
  },
  {
    "url": "assets/css/0.styles.eef62e04.css",
    "revision": "c7fe6b0171fd70472685e1b6a45d3b34"
  },
  {
    "url": "assets/image/DeepSeek/cc1.jpg",
    "revision": "5aeb0a02dc65d83aaa77e0f1f1921b01"
  },
  {
    "url": "assets/image/DeepSeek/cc2.jpg",
    "revision": "774034a7abf5d4576ba3b7b68e733311"
  },
  {
    "url": "assets/image/DeepSeek/cjkb1.jpg",
    "revision": "eeb6de27e2ffa4e9e592017eb8d7efa2"
  },
  {
    "url": "assets/image/DeepSeek/cs1.jpg",
    "revision": "6798a3a95406462f4f4fd8aae3d90dd9"
  },
  {
    "url": "assets/image/DeepSeek/dify.jpg",
    "revision": "a6d4ecd89150e4553bc397e7ecf1ccd5"
  },
  {
    "url": "assets/image/DeepSeek/mx.jpg",
    "revision": "f2525c0662d6d14544b76b823f99363a"
  },
  {
    "url": "assets/image/DeepSeek/mx2.jpg",
    "revision": "39192da63a4628cc00d011e7753b22b5"
  },
  {
    "url": "assets/image/DeepSeek/pzdpmx.jpg",
    "revision": "67efc55df37674b3bab8d3c970695e89"
  },
  {
    "url": "assets/image/DeepSeek/RAG.jpg",
    "revision": "cb629ee38f927480aba4404359262ad8"
  },
  {
    "url": "assets/image/DeepSeek/xz1.jpg",
    "revision": "1c3647ac461056a010e0b727bf591e0f"
  },
  {
    "url": "assets/image/DeepSeek/xz2.jpg",
    "revision": "eab69d27064fb54c687536a61141427e"
  },
  {
    "url": "assets/image/DeepSeek/xz3.jpg",
    "revision": "61a88343262567981ed58ba96f66fe45"
  },
  {
    "url": "assets/image/DeepSeek/xzlt.jpg",
    "revision": "69a15f7712bd1cf9f2780ec2eb2e9f85"
  },
  {
    "url": "assets/image/JAVA/ascii.jpg",
    "revision": "da5f03075a6470542484676436035677"
  },
  {
    "url": "assets/image/JAVA/dkxm1.png",
    "revision": "a8f7fd3ddc5b290d2172f0ebd3438aa4"
  },
  {
    "url": "assets/image/JAVA/dkxm2.png",
    "revision": "7b1c045c80e9bea6debd5aa0f4b06c75"
  },
  {
    "url": "assets/image/JAVA/dkxm3.png",
    "revision": "eea81e5dd0e4cd701bb6b1bd08a581c6"
  },
  {
    "url": "assets/image/JAVA/drmk1.png",
    "revision": "aa93d66f77d85e52e58110a8000f6187"
  },
  {
    "url": "assets/image/JAVA/drmk10.png",
    "revision": "aa424b5ff779d4acbbb6cd87f3dd0b54"
  },
  {
    "url": "assets/image/JAVA/drmk11.png",
    "revision": "8a5f9dd7c1a9cef68375f2aa363c3ed9"
  },
  {
    "url": "assets/image/JAVA/drmk2.png",
    "revision": "68045a6bfda3dc0b2121655282a2a310"
  },
  {
    "url": "assets/image/JAVA/drmk3.png",
    "revision": "2c14a4f6d30e36c1381e4e34287f719f"
  },
  {
    "url": "assets/image/JAVA/drmk4.png",
    "revision": "c2500d61cc200cadaa06a1397e4f03e0"
  },
  {
    "url": "assets/image/JAVA/drmk5.png",
    "revision": "c10dcf98d46a026fba693a0fb63a65c6"
  },
  {
    "url": "assets/image/JAVA/drmk6.png",
    "revision": "66becc9a5fdd7af9b96d92a38ebcdf45"
  },
  {
    "url": "assets/image/JAVA/drmk7.png",
    "revision": "a4a8db148f24ee9ac54cd582c1184e93"
  },
  {
    "url": "assets/image/JAVA/drmk8.png",
    "revision": "be3e079bd213b0fbfdc3a1ad3091c215"
  },
  {
    "url": "assets/image/JAVA/drmk9.png",
    "revision": "899a6e64ef0407ceda489755d9017841"
  },
  {
    "url": "assets/image/JAVA/dxnct1.png",
    "revision": "00b9d114cfccff51a1b1da702d64eabe"
  },
  {
    "url": "assets/image/JAVA/dxnct2.png",
    "revision": "a33374d61c0cc433a364eb361764c89c"
  },
  {
    "url": "assets/image/JAVA/dxnct3.png",
    "revision": "6370af2f3631974ca46ac029d33543af"
  },
  {
    "url": "assets/image/JAVA/dxnct4.png",
    "revision": "77f6181abc9529e16ce9cd61f3767c46"
  },
  {
    "url": "assets/image/JAVA/ewsznct1.jpg",
    "revision": "4b814ab04026cc465a43b460ebe6d98c"
  },
  {
    "url": "assets/image/JAVA/ewsznct2.jpg",
    "revision": "e8256782ce5e8e8e8c7d24208f010ce4"
  },
  {
    "url": "assets/image/JAVA/ewsznct3.jpg",
    "revision": "f74a52fc68c9db7c69c4b960783e9baa"
  },
  {
    "url": "assets/image/JAVA/ffcrz.jpg",
    "revision": "170c4cf0953da7f03e6cf55d72bf7a26"
  },
  {
    "url": "assets/image/JAVA/gbxm1.png",
    "revision": "de66e69c8aa6cdd5fb24d224d58d1116"
  },
  {
    "url": "assets/image/JAVA/gbxm2.png",
    "revision": "b07a9bbbe4cd4207c847e4224b4a7574"
  },
  {
    "url": "assets/image/JAVA/gbxm3.png",
    "revision": "2e54809a98965af335c9a9b8b5c13d53"
  },
  {
    "url": "assets/image/JAVA/gj.jpg",
    "revision": "b15f4f7bbb7fd996d7f4681ec2a4f5b4"
  },
  {
    "url": "assets/image/JAVA/idea1.png",
    "revision": "d22e1c27c3d3b282d8122c01d004c880"
  },
  {
    "url": "assets/image/JAVA/idea10.png",
    "revision": "ed98065f5b7962a8266bbf5475dbc1e7"
  },
  {
    "url": "assets/image/JAVA/idea11.png",
    "revision": "369870fed33f2a23fd6cedf67fc05861"
  },
  {
    "url": "assets/image/JAVA/idea12.png",
    "revision": "07c3bc0b00dbad89a019abf80fdb10a8"
  },
  {
    "url": "assets/image/JAVA/idea13.png",
    "revision": "251a7d11b41d55929cfe742c16454fdd"
  },
  {
    "url": "assets/image/JAVA/idea14.png",
    "revision": "33ce6086707c026d0b49b5d9cb4b4810"
  },
  {
    "url": "assets/image/JAVA/idea15.png",
    "revision": "62f8363fc4237bfca8739422d561d155"
  },
  {
    "url": "assets/image/JAVA/idea16.png",
    "revision": "99d9ec20bf33d9d236c5c7a1b1b31712"
  },
  {
    "url": "assets/image/JAVA/idea2.png",
    "revision": "97c9b516f37bdb118347ef1fb34c919a"
  },
  {
    "url": "assets/image/JAVA/idea3.png",
    "revision": "d0dcce5946e4bccc9f736e51d0705555"
  },
  {
    "url": "assets/image/JAVA/idea4.png",
    "revision": "a31d3f0d0dd6288cee33c06f48b12fb1"
  },
  {
    "url": "assets/image/JAVA/idea5.png",
    "revision": "035a675a1d1497c293b4692b8858c810"
  },
  {
    "url": "assets/image/JAVA/idea6.png",
    "revision": "2c66e7b048b0fa74d704c4c9fb23be4b"
  },
  {
    "url": "assets/image/JAVA/idea7.png",
    "revision": "4ad1939d6ebaee3959017606817fed70"
  },
  {
    "url": "assets/image/JAVA/idea8.png",
    "revision": "4833375ec16211eae007d78be23cae72"
  },
  {
    "url": "assets/image/JAVA/idea9.png",
    "revision": "727797203c94464797189def1c6a9d48"
  },
  {
    "url": "assets/image/JAVA/ideaaz1.png",
    "revision": "d5c81696fc1145e0b2d24ce7dc449140"
  },
  {
    "url": "assets/image/JAVA/ideaaz10.png",
    "revision": "333a540f442a34221a4c3df4d3039186"
  },
  {
    "url": "assets/image/JAVA/ideaaz11.png",
    "revision": "95db2ca1570c24c4a4cc50fff9ed88fb"
  },
  {
    "url": "assets/image/JAVA/ideaaz2.png",
    "revision": "41bede4bec8164ebdcdbff149c47a6d6"
  },
  {
    "url": "assets/image/JAVA/ideaaz3.png",
    "revision": "afcf614d48facabbc1a9988be3f35ba0"
  },
  {
    "url": "assets/image/JAVA/ideaaz4.png",
    "revision": "7da23ed65d4c76269323d874c311a427"
  },
  {
    "url": "assets/image/JAVA/ideaaz5.png",
    "revision": "3a5b7b875398672044b0afb805499a2b"
  },
  {
    "url": "assets/image/JAVA/ideaaz6.png",
    "revision": "66c7de87db5bd0458dfb12614dbc3cc4"
  },
  {
    "url": "assets/image/JAVA/ideaaz7.png",
    "revision": "a4acbd3c45a2cb7c42d67989e78c8929"
  },
  {
    "url": "assets/image/JAVA/ideaaz8.png",
    "revision": "044a5337eaaff9288e3ec307e34dfe88"
  },
  {
    "url": "assets/image/JAVA/ideaaz9.png",
    "revision": "e6c29e5b60a47b7487d8a889c7eb8ebb"
  },
  {
    "url": "assets/image/JAVA/idea使用1.png",
    "revision": "4c725754efd0d454d0a550997946391e"
  },
  {
    "url": "assets/image/JAVA/Java内存分配.jpg",
    "revision": "cbe6e6c7435ea648f9643c503ef626af"
  },
  {
    "url": "assets/image/JAVA/jcsjlx.jpg",
    "revision": "52fb33477249cf2cf3536f7a8bdf76af"
  },
  {
    "url": "assets/image/JAVA/kjj1.jpg",
    "revision": "3f88cb91074da647580c4537f4f14166"
  },
  {
    "url": "assets/image/JAVA/mrz.jpg",
    "revision": "cc5ed49971eafa181732c33fca3c92cc"
  },
  {
    "url": "assets/image/JAVA/nct.jpg",
    "revision": "02ff937e52b6b559a24add2b0fcc5cc5"
  },
  {
    "url": "assets/image/JAVA/ptg.jpg",
    "revision": "867bdd040ddd9db0ba0d3aad165471b6"
  },
  {
    "url": "assets/image/JAVA/pz.jpg",
    "revision": "51dbf361d5f783a6e82e1941ac1c44b1"
  },
  {
    "url": "assets/image/JAVA/scGS.jpg",
    "revision": "6fcac207c0f53ee36b5b819825eb5ef4"
  },
  {
    "url": "assets/image/JAVA/sclmwj1.png",
    "revision": "642f1585e727ba937d2b4588ec8e52c0"
  },
  {
    "url": "assets/image/JAVA/sclmwj2.png",
    "revision": "c6d9d2434d30a9a2379e736a14d9e3cf"
  },
  {
    "url": "assets/image/JAVA/scmk1.png",
    "revision": "be947a14d085ef78b4aebc47289bab9d"
  },
  {
    "url": "assets/image/JAVA/scmk2.png",
    "revision": "467de7136c89be907b12a29cf0da822b"
  },
  {
    "url": "assets/image/JAVA/scmk3.png",
    "revision": "c5b8c97106a27505eadbb41ca8eb340b"
  },
  {
    "url": "assets/image/JAVA/sz.jpg",
    "revision": "a9fbd8fc5b4c7bf5a7f3863987053389"
  },
  {
    "url": "assets/image/JAVA/sz2.jpg",
    "revision": "d28fadd9419bec209ff0fd682e9e262b"
  },
  {
    "url": "assets/image/JAVA/szbjtp.jpg",
    "revision": "bff1581db79eea0135cb9915a882daa2"
  },
  {
    "url": "assets/image/JAVA/szncfp.jpg",
    "revision": "b1a99a9b795690d4419866db92ec5e14"
  },
  {
    "url": "assets/image/JAVA/szzddr.jpg",
    "revision": "8e4603d3c3f93c6dcdebd42ca5fe437c"
  },
  {
    "url": "assets/image/JAVA/szzsys.jpg",
    "revision": "4dc6a0f4db08319fb727e486686427d8"
  },
  {
    "url": "assets/image/JAVA/szzt.jpg",
    "revision": "329c20e90821526196993ac5919db98c"
  },
  {
    "url": "assets/image/JAVA/szzt2.jpg",
    "revision": "32bcd8fef173662b941570069120bff3"
  },
  {
    "url": "assets/image/JAVA/szzt3.jpg",
    "revision": "0be24610af763a2a0fbc4afe11466d92"
  },
  {
    "url": "assets/image/JAVA/thisncz.jpg",
    "revision": "4c84e91e5fb76540c2a98394c6ec01b1"
  },
  {
    "url": "assets/image/JAVA/xglm1.png",
    "revision": "a97b55a6ba7bc37af505f4cfddd16c28"
  },
  {
    "url": "assets/image/JAVA/xglm2.png",
    "revision": "3e256c9e4660a38f6bdbacace4377de8"
  },
  {
    "url": "assets/image/JAVA/xglm3.png",
    "revision": "c5fed6f23e7b73463c52a52cc8017af3"
  },
  {
    "url": "assets/image/JAVA/xgmkm1.png",
    "revision": "d23c436f9e485b3bb392ae360a5e31e1"
  },
  {
    "url": "assets/image/JAVA/xgmkm3.png",
    "revision": "81ded46dea9319ece585b8dfd25a7e25"
  },
  {
    "url": "assets/image/JAVA/xgmkm4.png",
    "revision": "dc7fc5e8a21b6410600c0b613551d631"
  },
  {
    "url": "assets/image/JAVA/xgmkm5.png",
    "revision": "df2acbb4c6285d861ea063e95a6fda4d"
  },
  {
    "url": "assets/image/JAVA/xgxm1.png",
    "revision": "d1208bc70ac6768ab240d4245ee5a850"
  },
  {
    "url": "assets/image/JAVA/xgxm2.png",
    "revision": "9919d9178468c12dbee39dd19b3af4bd"
  },
  {
    "url": "assets/image/JAVA/xgxm3.png",
    "revision": "680cda64b21f7bb07b74bc691269321a"
  },
  {
    "url": "assets/image/JAVA/xgxm4.png",
    "revision": "37f11016f7195f68c7ff8f15c0d9cdf4"
  },
  {
    "url": "assets/image/JAVA/xgxm5.png",
    "revision": "a861ecc363ed3d04ef1d95281f67cb3b"
  },
  {
    "url": "assets/image/JAVA/xgxm6.png",
    "revision": "2fd8ca4910a61242ba78d410b37479f7"
  },
  {
    "url": "assets/image/JAVA/xgxm7.png",
    "revision": "049c8d18d399a2cf4d0cab98f1ccc55e"
  },
  {
    "url": "assets/image/JAVA/xjl1.png",
    "revision": "0ef86263fee439f2229b11b11c8f1bd3"
  },
  {
    "url": "assets/image/JAVA/xjl2.png",
    "revision": "aa0235eb71e4c6d1de736d6a41f98781"
  },
  {
    "url": "assets/image/JAVA/xjl3.png",
    "revision": "d188d6685e9bfc9c8cf0e1be1b6dd104"
  },
  {
    "url": "assets/image/JAVA/xjmk1.png",
    "revision": "ce27527bbe2bf6c72457f82650f7726a"
  },
  {
    "url": "assets/image/JAVA/xjmk2.png",
    "revision": "27935456cce8f91611ef71777217f3a3"
  },
  {
    "url": "assets/image/JAVA/xjmk3.png",
    "revision": "6deebd111b56a91a160269b85f750d2c"
  },
  {
    "url": "assets/image/JAVA/xjmk4.png",
    "revision": "a18b13bde9c50a54d23d25f26378defb"
  },
  {
    "url": "assets/image/JAVA/xjmk5.png",
    "revision": "3c6177738a45f2c7938b0f23a61c2d62"
  },
  {
    "url": "assets/image/JAVA/xjmk6.png",
    "revision": "3d3a1c8fc56a91422c8a80447876b4d8"
  },
  {
    "url": "assets/image/JAVA/xjmk7.png",
    "revision": "d339ad4c71e436e1d65bea2851dabba0"
  },
  {
    "url": "assets/image/JAVA/xjxm1.png",
    "revision": "d277d7ae392d350278aec368768a8bc3"
  },
  {
    "url": "assets/image/JAVA/xjxm2.png",
    "revision": "1525dee3af9b3fb38b9b21c5333991e5"
  },
  {
    "url": "assets/image/JAVA/xjxm3.png",
    "revision": "5d24b527ed93c908392ab48d0e3b3bbf"
  },
  {
    "url": "assets/image/JAVA/xjxm4.png",
    "revision": "9fe81007e8bd3b66e42430cee9955cf3"
  },
  {
    "url": "assets/image/JAVA/xjxm5.png",
    "revision": "b6083e5062bfc8d657467b500a82f7d8"
  },
  {
    "url": "assets/image/JAVA/xjxm6.png",
    "revision": "6f215a022c82f48026214ab610f59c39"
  },
  {
    "url": "assets/image/JAVA/yysjlx.jpg",
    "revision": "386b6d3c1b8b65116e9f1c2ee2957641"
  },
  {
    "url": "assets/image/JS/bj.jpg",
    "revision": "8ac90b23aceafde304b0c4492b6a7ca6"
  },
  {
    "url": "assets/image/JS/cj.jpg",
    "revision": "c80beaebbba0768f81d121ed617533cf"
  },
  {
    "url": "assets/image/JS/ckcj.jpg",
    "revision": "f6c93b29aea57f7b9fd96988ab282b8b"
  },
  {
    "url": "assets/image/JS/css.jpg",
    "revision": "2fc4b9dbe382439d8d23360d0b6af375"
  },
  {
    "url": "assets/image/JS/glh.jpg",
    "revision": "12860af7e941293d3ebbad417001e6ee"
  },
  {
    "url": "assets/image/JS/gzh.jpg",
    "revision": "cfd106b7c2f6be6d68a409e82ba4f9e5"
  },
  {
    "url": "assets/image/JS/hua.jpg",
    "revision": "f0e8ef19bae507c99eb6fbd54eac30fb"
  },
  {
    "url": "assets/image/JS/hz.jpg",
    "revision": "e85b13e6e5facabe8ef44d3779889e42"
  },
  {
    "url": "assets/image/JS/hz1.jpg",
    "revision": "5cd964fb9a7a8cfe72f75d38595fdce5"
  },
  {
    "url": "assets/image/JS/js.jpg",
    "revision": "3a79aa04a5676997304247f51120d006"
  },
  {
    "url": "assets/image/JS/jxhtml.jpg",
    "revision": "14aff771a336a396e5db16244a370d7d"
  },
  {
    "url": "assets/image/JS/llq.jpg",
    "revision": "057d6f06657b13ee32f31c8674460c47"
  },
  {
    "url": "assets/image/JS/llqjc.jpg",
    "revision": "d1f8f0d0c25d6a20d0a6ab657a7b87bf"
  },
  {
    "url": "assets/image/JS/wzgc.jpg",
    "revision": "b3bc91fc06f1d072fe3b08f07876d38d"
  },
  {
    "url": "assets/image/JS/xrgc1.jpg",
    "revision": "6b405331615c33bcb140a9722c7f2167"
  },
  {
    "url": "assets/image/JS/xrgc2.jpg",
    "revision": "d517372a91f36b3deb89b74a523fcc90"
  },
  {
    "url": "assets/image/JS/xrlsx.jpg",
    "revision": "2ef7ff87102c0ac7087aabc59e82dd18"
  },
  {
    "url": "assets/image/JS/xrsjd.jpg",
    "revision": "fb57b508a0427218cba08393fd750767"
  },
  {
    "url": "assets/image/JS/yrgj.jpg",
    "revision": "250b798441b17d8dbb303a31d97a075e"
  },
  {
    "url": "assets/image/JS/ysjs.jpg",
    "revision": "92f22d811fdf053bce14d40559ea3dec"
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
    "url": "assets/image/mst/a.jpg",
    "revision": "b9f65c73e96f41c57628dfb4d352d963"
  },
  {
    "url": "assets/image/mst/r.jpg",
    "revision": "149a93c472e037a9a9b6ec1c515c86a9"
  },
  {
    "url": "assets/image/mst/r1.jpg",
    "revision": "3161794818ab5f74175aa455ff995d95"
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
    "url": "assets/image/window/jhwindow.jpg",
    "revision": "1554d006621b3d6f45ac6c6673b8fd01"
  },
  {
    "url": "assets/img/a.b9f65c73.jpg",
    "revision": "b9f65c73e96f41c57628dfb4d352d963"
  },
  {
    "url": "assets/img/ascii.da5f0307.jpg",
    "revision": "da5f03075a6470542484676436035677"
  },
  {
    "url": "assets/img/bj.8ac90b23.jpg",
    "revision": "8ac90b23aceafde304b0c4492b6a7ca6"
  },
  {
    "url": "assets/img/cc2.774034a7.jpg",
    "revision": "774034a7abf5d4576ba3b7b68e733311"
  },
  {
    "url": "assets/img/cj.c80beaeb.jpg",
    "revision": "c80beaebbba0768f81d121ed617533cf"
  },
  {
    "url": "assets/img/cjkb1.eeb6de27.jpg",
    "revision": "eeb6de27e2ffa4e9e592017eb8d7efa2"
  },
  {
    "url": "assets/img/ckcj.f6c93b29.jpg",
    "revision": "f6c93b29aea57f7b9fd96988ab282b8b"
  },
  {
    "url": "assets/img/css.2fc4b9db.jpg",
    "revision": "2fc4b9dbe382439d8d23360d0b6af375"
  },
  {
    "url": "assets/img/dify.a6d4ecd8.jpg",
    "revision": "a6d4ecd89150e4553bc397e7ecf1ccd5"
  },
  {
    "url": "assets/img/dkxm1.a8f7fd3d.png",
    "revision": "a8f7fd3ddc5b290d2172f0ebd3438aa4"
  },
  {
    "url": "assets/img/dkxm2.7b1c045c.png",
    "revision": "7b1c045c80e9bea6debd5aa0f4b06c75"
  },
  {
    "url": "assets/img/dkxm3.eea81e5d.png",
    "revision": "eea81e5dd0e4cd701bb6b1bd08a581c6"
  },
  {
    "url": "assets/img/drmk1.aa93d66f.png",
    "revision": "aa93d66f77d85e52e58110a8000f6187"
  },
  {
    "url": "assets/img/drmk10.aa424b5f.png",
    "revision": "aa424b5ff779d4acbbb6cd87f3dd0b54"
  },
  {
    "url": "assets/img/drmk11.8a5f9dd7.png",
    "revision": "8a5f9dd7c1a9cef68375f2aa363c3ed9"
  },
  {
    "url": "assets/img/drmk2.68045a6b.png",
    "revision": "68045a6bfda3dc0b2121655282a2a310"
  },
  {
    "url": "assets/img/drmk3.2c14a4f6.png",
    "revision": "2c14a4f6d30e36c1381e4e34287f719f"
  },
  {
    "url": "assets/img/drmk4.c2500d61.png",
    "revision": "c2500d61cc200cadaa06a1397e4f03e0"
  },
  {
    "url": "assets/img/drmk5.c10dcf98.png",
    "revision": "c10dcf98d46a026fba693a0fb63a65c6"
  },
  {
    "url": "assets/img/drmk6.66becc9a.png",
    "revision": "66becc9a5fdd7af9b96d92a38ebcdf45"
  },
  {
    "url": "assets/img/drmk7.a4a8db14.png",
    "revision": "a4a8db148f24ee9ac54cd582c1184e93"
  },
  {
    "url": "assets/img/drmk8.be3e079b.png",
    "revision": "be3e079bd213b0fbfdc3a1ad3091c215"
  },
  {
    "url": "assets/img/drmk9.899a6e64.png",
    "revision": "899a6e64ef0407ceda489755d9017841"
  },
  {
    "url": "assets/img/dxnct1.00b9d114.png",
    "revision": "00b9d114cfccff51a1b1da702d64eabe"
  },
  {
    "url": "assets/img/dxnct2.a33374d6.png",
    "revision": "a33374d61c0cc433a364eb361764c89c"
  },
  {
    "url": "assets/img/dxnct3.6370af2f.png",
    "revision": "6370af2f3631974ca46ac029d33543af"
  },
  {
    "url": "assets/img/dxnct4.77f6181a.png",
    "revision": "77f6181abc9529e16ce9cd61f3767c46"
  },
  {
    "url": "assets/img/ewsznct1.4b814ab0.jpg",
    "revision": "4b814ab04026cc465a43b460ebe6d98c"
  },
  {
    "url": "assets/img/ewsznct2.e8256782.jpg",
    "revision": "e8256782ce5e8e8e8c7d24208f010ce4"
  },
  {
    "url": "assets/img/ewsznct3.f74a52fc.jpg",
    "revision": "f74a52fc68c9db7c69c4b960783e9baa"
  },
  {
    "url": "assets/img/ffcrz.170c4cf0.jpg",
    "revision": "170c4cf0953da7f03e6cf55d72bf7a26"
  },
  {
    "url": "assets/img/gbxm1.de66e69c.png",
    "revision": "de66e69c8aa6cdd5fb24d224d58d1116"
  },
  {
    "url": "assets/img/gbxm2.b07a9bbb.png",
    "revision": "b07a9bbbe4cd4207c847e4224b4a7574"
  },
  {
    "url": "assets/img/gbxm3.2e54809a.png",
    "revision": "2e54809a98965af335c9a9b8b5c13d53"
  },
  {
    "url": "assets/img/gj.b15f4f7b.jpg",
    "revision": "b15f4f7bbb7fd996d7f4681ec2a4f5b4"
  },
  {
    "url": "assets/img/glh.12860af7.jpg",
    "revision": "12860af7e941293d3ebbad417001e6ee"
  },
  {
    "url": "assets/img/gzh.cfd106b7.jpg",
    "revision": "cfd106b7c2f6be6d68a409e82ba4f9e5"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "a286bea7c1f63b77af23dd8bd18bceae"
  },
  {
    "url": "assets/img/hua.f0e8ef19.jpg",
    "revision": "f0e8ef19bae507c99eb6fbd54eac30fb"
  },
  {
    "url": "assets/img/hz.e85b13e6.jpg",
    "revision": "e85b13e6e5facabe8ef44d3779889e42"
  },
  {
    "url": "assets/img/hz1.5cd964fb.jpg",
    "revision": "5cd964fb9a7a8cfe72f75d38595fdce5"
  },
  {
    "url": "assets/img/ideaaz1.d5c81696.png",
    "revision": "d5c81696fc1145e0b2d24ce7dc449140"
  },
  {
    "url": "assets/img/ideaaz10.333a540f.png",
    "revision": "333a540f442a34221a4c3df4d3039186"
  },
  {
    "url": "assets/img/ideaaz11.95db2ca1.png",
    "revision": "95db2ca1570c24c4a4cc50fff9ed88fb"
  },
  {
    "url": "assets/img/ideaaz2.41bede4b.png",
    "revision": "41bede4bec8164ebdcdbff149c47a6d6"
  },
  {
    "url": "assets/img/ideaaz4.7da23ed6.png",
    "revision": "7da23ed65d4c76269323d874c311a427"
  },
  {
    "url": "assets/img/ideaaz5.3a5b7b87.png",
    "revision": "3a5b7b875398672044b0afb805499a2b"
  },
  {
    "url": "assets/img/ideaaz6.66c7de87.png",
    "revision": "66c7de87db5bd0458dfb12614dbc3cc4"
  },
  {
    "url": "assets/img/ideaaz7.a4acbd3c.png",
    "revision": "a4acbd3c45a2cb7c42d67989e78c8929"
  },
  {
    "url": "assets/img/ideaaz8.044a5337.png",
    "revision": "044a5337eaaff9288e3ec307e34dfe88"
  },
  {
    "url": "assets/img/ideaaz9.e6c29e5b.png",
    "revision": "e6c29e5b60a47b7487d8a889c7eb8ebb"
  },
  {
    "url": "assets/img/jcsjlx.52fb3347.jpg",
    "revision": "52fb33477249cf2cf3536f7a8bdf76af"
  },
  {
    "url": "assets/img/jhwindow.1554d006.jpg",
    "revision": "1554d006621b3d6f45ac6c6673b8fd01"
  },
  {
    "url": "assets/img/js.3a79aa04.jpg",
    "revision": "3a79aa04a5676997304247f51120d006"
  },
  {
    "url": "assets/img/jxhtml.14aff771.jpg",
    "revision": "14aff771a336a396e5db16244a370d7d"
  },
  {
    "url": "assets/img/kjj1.3f88cb91.jpg",
    "revision": "3f88cb91074da647580c4537f4f14166"
  },
  {
    "url": "assets/img/llq.057d6f06.jpg",
    "revision": "057d6f06657b13ee32f31c8674460c47"
  },
  {
    "url": "assets/img/llqjc.d1f8f0d0.jpg",
    "revision": "d1f8f0d0c25d6a20d0a6ab657a7b87bf"
  },
  {
    "url": "assets/img/mrz.cc5ed499.jpg",
    "revision": "cc5ed49971eafa181732c33fca3c92cc"
  },
  {
    "url": "assets/img/mx.f2525c06.jpg",
    "revision": "f2525c0662d6d14544b76b823f99363a"
  },
  {
    "url": "assets/img/mx2.39192da6.jpg",
    "revision": "39192da63a4628cc00d011e7753b22b5"
  },
  {
    "url": "assets/img/nct.02ff937e.jpg",
    "revision": "02ff937e52b6b559a24add2b0fcc5cc5"
  },
  {
    "url": "assets/img/ptg.867bdd04.jpg",
    "revision": "867bdd040ddd9db0ba0d3aad165471b6"
  },
  {
    "url": "assets/img/pz.51dbf361.jpg",
    "revision": "51dbf361d5f783a6e82e1941ac1c44b1"
  },
  {
    "url": "assets/img/pzdpmx.67efc55d.jpg",
    "revision": "67efc55df37674b3bab8d3c970695e89"
  },
  {
    "url": "assets/img/r.149a93c4.jpg",
    "revision": "149a93c472e037a9a9b6ec1c515c86a9"
  },
  {
    "url": "assets/img/r1.31617948.jpg",
    "revision": "3161794818ab5f74175aa455ff995d95"
  },
  {
    "url": "assets/img/RAG.cb629ee3.jpg",
    "revision": "cb629ee38f927480aba4404359262ad8"
  },
  {
    "url": "assets/img/sclmwj1.642f1585.png",
    "revision": "642f1585e727ba937d2b4588ec8e52c0"
  },
  {
    "url": "assets/img/sclmwj2.c6d9d243.png",
    "revision": "c6d9d2434d30a9a2379e736a14d9e3cf"
  },
  {
    "url": "assets/img/scmk1.be947a14.png",
    "revision": "be947a14d085ef78b4aebc47289bab9d"
  },
  {
    "url": "assets/img/scmk2.467de713.png",
    "revision": "467de7136c89be907b12a29cf0da822b"
  },
  {
    "url": "assets/img/scmk3.c5b8c971.png",
    "revision": "c5b8c97106a27505eadbb41ca8eb340b"
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
    "url": "assets/img/sz.a9fbd8fc.jpg",
    "revision": "a9fbd8fc5b4c7bf5a7f3863987053389"
  },
  {
    "url": "assets/img/sz2.d28fadd9.jpg",
    "revision": "d28fadd9419bec209ff0fd682e9e262b"
  },
  {
    "url": "assets/img/szbjtp.bff1581d.jpg",
    "revision": "bff1581db79eea0135cb9915a882daa2"
  },
  {
    "url": "assets/img/szncfp.b1a99a9b.jpg",
    "revision": "b1a99a9b795690d4419866db92ec5e14"
  },
  {
    "url": "assets/img/szzddr.8e4603d3.jpg",
    "revision": "8e4603d3c3f93c6dcdebd42ca5fe437c"
  },
  {
    "url": "assets/img/szzsys.4dc6a0f4.jpg",
    "revision": "4dc6a0f4db08319fb727e486686427d8"
  },
  {
    "url": "assets/img/szzt.329c20e9.jpg",
    "revision": "329c20e90821526196993ac5919db98c"
  },
  {
    "url": "assets/img/szzt2.32bcd8fe.jpg",
    "revision": "32bcd8fef173662b941570069120bff3"
  },
  {
    "url": "assets/img/szzt3.0be24610.jpg",
    "revision": "0be24610af763a2a0fbc4afe11466d92"
  },
  {
    "url": "assets/img/thisncz.4c84e91e.jpg",
    "revision": "4c84e91e5fb76540c2a98394c6ec01b1"
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
    "url": "assets/img/wzgc.b3bc91fc.jpg",
    "revision": "b3bc91fc06f1d072fe3b08f07876d38d"
  },
  {
    "url": "assets/img/xglm1.a97b55a6.png",
    "revision": "a97b55a6ba7bc37af505f4cfddd16c28"
  },
  {
    "url": "assets/img/xglm2.3e256c9e.png",
    "revision": "3e256c9e4660a38f6bdbacace4377de8"
  },
  {
    "url": "assets/img/xglm3.c5fed6f2.png",
    "revision": "c5fed6f23e7b73463c52a52cc8017af3"
  },
  {
    "url": "assets/img/xgmkm1.d23c436f.png",
    "revision": "d23c436f9e485b3bb392ae360a5e31e1"
  },
  {
    "url": "assets/img/xgmkm3.81ded46d.png",
    "revision": "81ded46dea9319ece585b8dfd25a7e25"
  },
  {
    "url": "assets/img/xgmkm4.dc7fc5e8.png",
    "revision": "dc7fc5e8a21b6410600c0b613551d631"
  },
  {
    "url": "assets/img/xgmkm5.df2acbb4.png",
    "revision": "df2acbb4c6285d861ea063e95a6fda4d"
  },
  {
    "url": "assets/img/xgxm1.d1208bc7.png",
    "revision": "d1208bc70ac6768ab240d4245ee5a850"
  },
  {
    "url": "assets/img/xgxm2.9919d917.png",
    "revision": "9919d9178468c12dbee39dd19b3af4bd"
  },
  {
    "url": "assets/img/xgxm3.680cda64.png",
    "revision": "680cda64b21f7bb07b74bc691269321a"
  },
  {
    "url": "assets/img/xgxm4.37f11016.png",
    "revision": "37f11016f7195f68c7ff8f15c0d9cdf4"
  },
  {
    "url": "assets/img/xgxm6.2fd8ca49.png",
    "revision": "2fd8ca4910a61242ba78d410b37479f7"
  },
  {
    "url": "assets/img/xgxm7.049c8d18.png",
    "revision": "049c8d18d399a2cf4d0cab98f1ccc55e"
  },
  {
    "url": "assets/img/xjl1.0ef86263.png",
    "revision": "0ef86263fee439f2229b11b11c8f1bd3"
  },
  {
    "url": "assets/img/xjl2.aa0235eb.png",
    "revision": "aa0235eb71e4c6d1de736d6a41f98781"
  },
  {
    "url": "assets/img/xjl3.d188d668.png",
    "revision": "d188d6685e9bfc9c8cf0e1be1b6dd104"
  },
  {
    "url": "assets/img/xjmk1.ce27527b.png",
    "revision": "ce27527bbe2bf6c72457f82650f7726a"
  },
  {
    "url": "assets/img/xjmk2.27935456.png",
    "revision": "27935456cce8f91611ef71777217f3a3"
  },
  {
    "url": "assets/img/xjmk3.6deebd11.png",
    "revision": "6deebd111b56a91a160269b85f750d2c"
  },
  {
    "url": "assets/img/xjmk4.a18b13bd.png",
    "revision": "a18b13bde9c50a54d23d25f26378defb"
  },
  {
    "url": "assets/img/xjmk5.3c617773.png",
    "revision": "3c6177738a45f2c7938b0f23a61c2d62"
  },
  {
    "url": "assets/img/xjmk6.3d3a1c8f.png",
    "revision": "3d3a1c8fc56a91422c8a80447876b4d8"
  },
  {
    "url": "assets/img/xjmk7.d339ad4c.png",
    "revision": "d339ad4c71e436e1d65bea2851dabba0"
  },
  {
    "url": "assets/img/xjxm.29a3617e.jpg",
    "revision": "29a3617e5591cf586b29b773b5880b30"
  },
  {
    "url": "assets/img/xjxm1.d277d7ae.png",
    "revision": "d277d7ae392d350278aec368768a8bc3"
  },
  {
    "url": "assets/img/xjxm2.1525dee3.png",
    "revision": "1525dee3af9b3fb38b9b21c5333991e5"
  },
  {
    "url": "assets/img/xjxm3.5d24b527.png",
    "revision": "5d24b527ed93c908392ab48d0e3b3bbf"
  },
  {
    "url": "assets/img/xjxm4.9fe81007.png",
    "revision": "9fe81007e8bd3b66e42430cee9955cf3"
  },
  {
    "url": "assets/img/xjxm5.b6083e50.png",
    "revision": "b6083e5062bfc8d657467b500a82f7d8"
  },
  {
    "url": "assets/img/xjxm6.6f215a02.png",
    "revision": "6f215a022c82f48026214ab610f59c39"
  },
  {
    "url": "assets/img/xrgc1.6b405331.jpg",
    "revision": "6b405331615c33bcb140a9722c7f2167"
  },
  {
    "url": "assets/img/xrgc2.d517372a.jpg",
    "revision": "d517372a91f36b3deb89b74a523fcc90"
  },
  {
    "url": "assets/img/xrlsx.2ef7ff87.jpg",
    "revision": "2ef7ff87102c0ac7087aabc59e82dd18"
  },
  {
    "url": "assets/img/xrsjd.fb57b508.jpg",
    "revision": "fb57b508a0427218cba08393fd750767"
  },
  {
    "url": "assets/img/xz1.1c3647ac.jpg",
    "revision": "1c3647ac461056a010e0b727bf591e0f"
  },
  {
    "url": "assets/img/xz2.eab69d27.jpg",
    "revision": "eab69d27064fb54c687536a61141427e"
  },
  {
    "url": "assets/img/xz3.61a88343.jpg",
    "revision": "61a88343262567981ed58ba96f66fe45"
  },
  {
    "url": "assets/img/xzlt.69a15f77.jpg",
    "revision": "69a15f7712bd1cf9f2780ec2eb2e9f85"
  },
  {
    "url": "assets/img/ylxg.87774d42.jpg",
    "revision": "87774d42f65083144c2cf95df4e95f1e"
  },
  {
    "url": "assets/img/yrgj.250b7984.jpg",
    "revision": "250b798441b17d8dbb303a31d97a075e"
  },
  {
    "url": "assets/img/ysjs.92f22d81.jpg",
    "revision": "92f22d811fdf053bce14d40559ea3dec"
  },
  {
    "url": "assets/img/yysjlx.386b6d3c.jpg",
    "revision": "386b6d3c1b8b65116e9f1c2ee2957641"
  },
  {
    "url": "assets/js/1.ff9c919f.js",
    "revision": "6d58639fac2c0f53566f214229078bc5"
  },
  {
    "url": "assets/js/10.42bef332.js",
    "revision": "e5a247da26c0b68082eee496c7103f20"
  },
  {
    "url": "assets/js/11.d33f226b.js",
    "revision": "c913648fe233cf6e70d4963d379b6673"
  },
  {
    "url": "assets/js/12.2183462a.js",
    "revision": "a4a242ed42859913332671e32073d6fc"
  },
  {
    "url": "assets/js/13.00b10df3.js",
    "revision": "23031bbb1aef0b74e41f250c2c79ddef"
  },
  {
    "url": "assets/js/14.d0fbc2fa.js",
    "revision": "3e1448345bd818f24412cbf60af1a78e"
  },
  {
    "url": "assets/js/15.4b23fe48.js",
    "revision": "bb5b7f04709dabec56ca183c9e88c000"
  },
  {
    "url": "assets/js/16.f0015375.js",
    "revision": "63b9747d584e54f77cde3fef32412c70"
  },
  {
    "url": "assets/js/17.7251c804.js",
    "revision": "fbe882074baef959b8cbae66c9da613e"
  },
  {
    "url": "assets/js/18.c7fe2f36.js",
    "revision": "e15efc265f35a21bbbfdaf3cff6ce0f1"
  },
  {
    "url": "assets/js/19.9d74e8b1.js",
    "revision": "1baa3b74c5342a4530b844377c9ec63a"
  },
  {
    "url": "assets/js/2.4e3fe7c8.js",
    "revision": "29b655f74edb98128596a97f670c0070"
  },
  {
    "url": "assets/js/20.92a514c1.js",
    "revision": "df158e331f8d92f56f688322690ac66f"
  },
  {
    "url": "assets/js/21.f121ddb3.js",
    "revision": "8c54c9c7f8819b36f67b325b294c47b5"
  },
  {
    "url": "assets/js/22.8ac004d0.js",
    "revision": "4e6a260e34314c6e339ce6c52a2ca46b"
  },
  {
    "url": "assets/js/23.66a3c431.js",
    "revision": "cca19ee8fde285e89b8cadffd64a1728"
  },
  {
    "url": "assets/js/24.18201f78.js",
    "revision": "47b062e9e5b877df21e81a7f2faab05f"
  },
  {
    "url": "assets/js/25.7da17bf8.js",
    "revision": "431d2f8f97b6bf7a6c6d23a06c3551b0"
  },
  {
    "url": "assets/js/26.a8b0cf7e.js",
    "revision": "b89e2e7964cc52c96516cc044bee3267"
  },
  {
    "url": "assets/js/27.df19411a.js",
    "revision": "bc641d12edf2c2deff08a0fc129b8a48"
  },
  {
    "url": "assets/js/28.bcb773bf.js",
    "revision": "84b28d18a14e8c1d9518b786e959be41"
  },
  {
    "url": "assets/js/29.2037deeb.js",
    "revision": "8349f505df6d611659842432e66af0a5"
  },
  {
    "url": "assets/js/3.f2465e90.js",
    "revision": "ac07616ccf29359a30e3d357b877bb97"
  },
  {
    "url": "assets/js/30.e14af42f.js",
    "revision": "c3e46266b6d159cafcec0e69a7a5b9a4"
  },
  {
    "url": "assets/js/31.a0eded46.js",
    "revision": "3eb3856544e0bd2c402eaf0dda9626f6"
  },
  {
    "url": "assets/js/32.65ccf191.js",
    "revision": "8d514cf0c09edc5397dd4688652bb898"
  },
  {
    "url": "assets/js/33.c38d39b3.js",
    "revision": "6fc28cba854cb55f047214259901fc58"
  },
  {
    "url": "assets/js/34.575c37cf.js",
    "revision": "b8d6cfd82dae62bf36380a6df60114d0"
  },
  {
    "url": "assets/js/35.dcd4ceb4.js",
    "revision": "94fc1e8e7074bff0b8bc36ed3403ea91"
  },
  {
    "url": "assets/js/36.18ac629d.js",
    "revision": "25bdc7fb241c48ed8affe1563ce52ee2"
  },
  {
    "url": "assets/js/37.ea168adb.js",
    "revision": "9fcf9b6b98a7797957e3aacef0a3e993"
  },
  {
    "url": "assets/js/38.8d4ce851.js",
    "revision": "a458531e91cf7a23258899e55b57b848"
  },
  {
    "url": "assets/js/39.de972b07.js",
    "revision": "b0694368f307e96e89b2ab3d426b8f1f"
  },
  {
    "url": "assets/js/4.900243f4.js",
    "revision": "a06cd5ede1882a1330d8483bcb7f55da"
  },
  {
    "url": "assets/js/40.fe6b3e47.js",
    "revision": "9fa8fc9e84144e2170a57c3883c232e8"
  },
  {
    "url": "assets/js/41.c26cc1d6.js",
    "revision": "e98fe0f07b554bc38b4838c604b43ce4"
  },
  {
    "url": "assets/js/42.1d96438e.js",
    "revision": "fd3b95a576c1f97a089ebab288d9f7a0"
  },
  {
    "url": "assets/js/43.2eeed3af.js",
    "revision": "0217baaa836535211a34538a7fe03b3a"
  },
  {
    "url": "assets/js/44.7d19abee.js",
    "revision": "cafda69e78da1c089ee36125bdb22f65"
  },
  {
    "url": "assets/js/45.53ec8bf1.js",
    "revision": "8738758a004fedc56fcdcf2abd3f7919"
  },
  {
    "url": "assets/js/46.ebb1bf5c.js",
    "revision": "91a73a5ae44d80a77c589ba9d48c1988"
  },
  {
    "url": "assets/js/47.fe4caeb4.js",
    "revision": "5aef28c901fdc46dbbc920b77855d074"
  },
  {
    "url": "assets/js/48.866ff092.js",
    "revision": "ddc2171497e55c566dfb9ce1b5b253da"
  },
  {
    "url": "assets/js/49.6bb6d97d.js",
    "revision": "b15ae934950ab72b1b5feeb3a88d7e5e"
  },
  {
    "url": "assets/js/5.4ddca4b4.js",
    "revision": "9b79c7967ba2ee1e1b945a531e21a499"
  },
  {
    "url": "assets/js/50.1d97d2c1.js",
    "revision": "eb3e6e2a0de2f822de58ba79d18813f2"
  },
  {
    "url": "assets/js/51.270feca8.js",
    "revision": "05f48df752e30c741fa4983ed8e20f0c"
  },
  {
    "url": "assets/js/52.983f3263.js",
    "revision": "d9fccf7aac2577f9f05c3b8bbeddb23f"
  },
  {
    "url": "assets/js/53.9499daa6.js",
    "revision": "76ed913a24e72b8157b36473a188bb7a"
  },
  {
    "url": "assets/js/54.6418dcfc.js",
    "revision": "68241c1f45de2d48ed93615ea100c174"
  },
  {
    "url": "assets/js/55.a21a0b17.js",
    "revision": "cca40d091116441eb1a777b1a278d605"
  },
  {
    "url": "assets/js/56.468e53bd.js",
    "revision": "e3bccc254af37a008de197b9c5466f7c"
  },
  {
    "url": "assets/js/57.ee46af43.js",
    "revision": "9303a1923729e7be22df0978d32b1ecb"
  },
  {
    "url": "assets/js/58.3a92fd02.js",
    "revision": "1504719001c95ccb2a8ac352d5bf46ca"
  },
  {
    "url": "assets/js/59.42514fbf.js",
    "revision": "a00205bae24775fb6c4cccb510a9948e"
  },
  {
    "url": "assets/js/6.c3272f67.js",
    "revision": "ccbc268262f5411cda42dcd8caebd94a"
  },
  {
    "url": "assets/js/7.163fa683.js",
    "revision": "51cfd1a293c2efec3d5659872cdbd5dc"
  },
  {
    "url": "assets/js/app.929e1578.js",
    "revision": "3191789f1046f0f63c7fb19f96f670c1"
  },
  {
    "url": "assets/js/vendors~docsearch.1aa9d4a5.js",
    "revision": "5dc6a9c73ffdb8ad18869c752f3e3347"
  },
  {
    "url": "countUp.html",
    "revision": "2ae31da750301ff79a1ae7cf93e79517"
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
    "revision": "4878bae08cb66ad48499775490a30ce5"
  },
  {
    "url": "Java/IDEA插件.html",
    "revision": "fa40959d631eb28324d1ca8da12d8e21"
  },
  {
    "url": "Java/内存图展示.html",
    "revision": "9e7a3201181c7257d6e7e1964d7fbf13"
  },
  {
    "url": "Java/内置类.html",
    "revision": "b1ca04ff213c34d17fb20731015298f9"
  },
  {
    "url": "Java/基础学习.html",
    "revision": "ebfc091ccae198f5774df1ac452742d8"
  },
  {
    "url": "Java/基础语法.html",
    "revision": "f076b994019d8d020ff7368d4bbfeb73"
  },
  {
    "url": "Java/方法例子.html",
    "revision": "47e435fd5c9d64ef70a3f266931babc5"
  },
  {
    "url": "JS/基础知识.html",
    "revision": "82df54721a96513347cd4bed0f63ff0b"
  },
  {
    "url": "JS/实现响应式数据效果.html",
    "revision": "a7cdd6f0b45ffa7959de2a920a47f588"
  },
  {
    "url": "JS/属性.html",
    "revision": "534575195469f392fd9c1386a309d288"
  },
  {
    "url": "NodeJs/基础知识.html",
    "revision": "d0322dc7b967c7bf32f62eeeb2b5bf66"
  },
  {
    "url": "Other/deepseek学习.html",
    "revision": "352f16b43e76fcfa0e918d7370178a04"
  },
  {
    "url": "Other/Vsode插件.html",
    "revision": "dbd826d713ea29435cfe3684641e3131"
  },
  {
    "url": "Other/VuePress学习.html",
    "revision": "8af9d27e9007be74d8458930442dfa02"
  },
  {
    "url": "Other/激活window.html",
    "revision": "3f869c7a1ab3cce1a58055b2498aa797"
  },
  {
    "url": "Other/面试题.html",
    "revision": "f9e15f83864a358b71537683957628b9"
  },
  {
    "url": "React/插件使用.html",
    "revision": "25b805c6ac29bc7a9e8dbee6a40b3a68"
  },
  {
    "url": "vue/index.html",
    "revision": "8b27b375f195cc22c2c989faa0e31773"
  },
  {
    "url": "vue/数字动画.html",
    "revision": "1c9334c4e704fb875e2b0aaac7315ab5"
  },
  {
    "url": "vue/视频播放.html",
    "revision": "7324cd28592d681369e322bb3c90305c"
  },
  {
    "url": "vue/音频播放.html",
    "revision": "209fe2817ec2c314aa98e2e898aef594"
  },
  {
    "url": "vue/页面水印.html",
    "revision": "1f4d9726a3dc78db65b54dee1a0712d1"
  },
  {
    "url": "Vue3/axios.html",
    "revision": "9527788362803fbc093588ed3c30c438"
  },
  {
    "url": "Vue3/elementPlus.html",
    "revision": "89c8c19aac129e012670cc9c20ef639b"
  },
  {
    "url": "Vue3/Pinia.html",
    "revision": "a5da2b83474ec4ed43437839db4b3703"
  },
  {
    "url": "Vue3/scss学习.html",
    "revision": "cde3782a3a37e809fd0548dfa4300fa4"
  },
  {
    "url": "Vue3/其他.html",
    "revision": "6cecd548c14a59eb132ae8a0c4943644"
  },
  {
    "url": "Vue3/语法学习.html",
    "revision": "e72c55beb6807b0999210912dc65e1f3"
  },
  {
    "url": "WeChatMiniProgram/基础知识.html",
    "revision": "7de9d60dc4bb333ccdacdba206e8d98d"
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
