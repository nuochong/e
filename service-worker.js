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
    "revision": "0a35a350f2c2e7258798d9c4ad082b0f"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "c00e90dab3d56027b6d1ef1c9aff1910"
  },
  {
    "url": "assets/css/0.styles.b1386384.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.a499e67a.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.4de675de.css",
    "revision": "386da01274835ceaa4bb9c5aaba59137"
  },
  {
    "url": "assets/css/11.styles.96cca117.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/12.styles.5ff5212c.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/13.styles.762c1c5d.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/14.styles.23bd2b99.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/15.styles.28a60f16.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/16.styles.f4540c40.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/17.styles.cc95cab6.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/18.styles.f6f00e4e.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/19.styles.fdf83d68.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/2.styles.5bb63078.css",
    "revision": "bdc8a080bae6f23e3a0647ae023a7b6e"
  },
  {
    "url": "assets/css/20.styles.7153579b.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/21.styles.d781a59c.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/22.styles.ef21c4da.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/23.styles.0c0a9b85.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/24.styles.ac265258.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/28.styles.7711d279.css",
    "revision": "42ddc9bb6778818a2268b3bc468bd392"
  },
  {
    "url": "assets/css/3.styles.37a5f415.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "assets/css/4.styles.9d1f3385.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.9683aecf.css",
    "revision": "c4bdcd40485672eca04486d47727b0d8"
  },
  {
    "url": "assets/css/7.styles.9358b989.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.4fc7aa85.css",
    "revision": "90853cc7696a8ad0049ba06d05d14854"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "assets/fonts/nuochong.62dd1db9.ttf",
    "revision": "62dd1db92021295bdb2805e95b02e476"
  },
  {
    "url": "assets/fonts/nuochong.79e4088b.eot",
    "revision": "79e4088be0be8c6300e32b62524ee2f4"
  },
  {
    "url": "assets/fonts/nuochong.e502b610.woff",
    "revision": "e502b6101ed056d1ea71b8061f11cda0"
  },
  {
    "url": "assets/img/iconfont.8eef8638.svg",
    "revision": "8eef86381d36c7d02ce250e5243b0752"
  },
  {
    "url": "assets/img/nuochong.01c327bf.svg",
    "revision": "01c327bfe3678b322333efa9c6c2ba5e"
  },
  {
    "url": "assets/js/0.b1386384.js",
    "revision": "f9d3c7b275baddb1b15e6dd44ebe74d9"
  },
  {
    "url": "assets/js/1.a499e67a.js",
    "revision": "4ab2f1c85b0d4b7bca488f06da4f4219"
  },
  {
    "url": "assets/js/10.4de675de.js",
    "revision": "121fefb9bc46759385f0bb0c5712ec59"
  },
  {
    "url": "assets/js/100.2ffd67aa.js",
    "revision": "e288f770aa07ddae765da68ab8c5f6c0"
  },
  {
    "url": "assets/js/11.96cca117.js",
    "revision": "5004d3dd1402bbfee242ae2f40c07597"
  },
  {
    "url": "assets/js/12.5ff5212c.js",
    "revision": "6029b9cb13deedfb7045793a605255f0"
  },
  {
    "url": "assets/js/13.762c1c5d.js",
    "revision": "d709bf5799f93cb0abf56fcb1d92f54d"
  },
  {
    "url": "assets/js/14.23bd2b99.js",
    "revision": "fbf38a187976cfa8068150864d09c7e5"
  },
  {
    "url": "assets/js/15.28a60f16.js",
    "revision": "7a0567cd64983587b724b9c8311accfe"
  },
  {
    "url": "assets/js/16.f4540c40.js",
    "revision": "73be922ffa5dcc6d9dade5aef358b86c"
  },
  {
    "url": "assets/js/17.cc95cab6.js",
    "revision": "2fe1bd7590f9d249dd495c4dac7b6006"
  },
  {
    "url": "assets/js/18.f6f00e4e.js",
    "revision": "c0fba651d85a9fc7f1dcd2bac5d6b8b9"
  },
  {
    "url": "assets/js/19.fdf83d68.js",
    "revision": "8964efef0b8afa759a61a43419aba7c0"
  },
  {
    "url": "assets/js/2.5bb63078.js",
    "revision": "2c852401a972bcf96c910af9319f4a95"
  },
  {
    "url": "assets/js/20.7153579b.js",
    "revision": "7352b6cd0315dedf500aef766b9d143e"
  },
  {
    "url": "assets/js/21.d781a59c.js",
    "revision": "96693b2afb069190a4b683d222a4720b"
  },
  {
    "url": "assets/js/22.ef21c4da.js",
    "revision": "3bac9b84e7b60ec64c529132ab584630"
  },
  {
    "url": "assets/js/23.0c0a9b85.js",
    "revision": "001168fccaabf92404e07628d6e2127c"
  },
  {
    "url": "assets/js/24.ac265258.js",
    "revision": "29919298a5e574c17c4893269498c00c"
  },
  {
    "url": "assets/js/25.c3990d45.js",
    "revision": "37e7c4e55e0294d67a2938569e7bd156"
  },
  {
    "url": "assets/js/26.b2a0ea60.js",
    "revision": "3801172ae089201ee61a2a9e149d7315"
  },
  {
    "url": "assets/js/27.daef4c90.js",
    "revision": "33ff695b8520c0de3c4cdb213cd86eaf"
  },
  {
    "url": "assets/js/28.7711d279.js",
    "revision": "b3f94a9af79568e6487d3f8b8a143f16"
  },
  {
    "url": "assets/js/29.75e5c0fa.js",
    "revision": "8c0850a381ed4366a3273c25bac24bbb"
  },
  {
    "url": "assets/js/3.37a5f415.js",
    "revision": "3ceb7fdc42a0afe40a8ca37a4eb6b0af"
  },
  {
    "url": "assets/js/30.456251f8.js",
    "revision": "b98f6fc81e09dbf25ad5adf45d425caf"
  },
  {
    "url": "assets/js/31.5a3b9def.js",
    "revision": "28ac7bb2631045e0a5ee3617323d25b2"
  },
  {
    "url": "assets/js/32.b38dba1f.js",
    "revision": "53d0533ac237f7957fdf6acab3cd9043"
  },
  {
    "url": "assets/js/33.1063eeb7.js",
    "revision": "88353905e967e280539e758cebc66748"
  },
  {
    "url": "assets/js/34.df4c0f7f.js",
    "revision": "9e4636d9e5b466f69cd169dfcab07c5d"
  },
  {
    "url": "assets/js/35.bfded35b.js",
    "revision": "82c96a7970fb1488a1f2f673777ef187"
  },
  {
    "url": "assets/js/36.56156446.js",
    "revision": "8eff00df49084283f02a9db1ee9bf766"
  },
  {
    "url": "assets/js/37.0ffc6618.js",
    "revision": "b36eea3797b05e67e85cf9048af126d3"
  },
  {
    "url": "assets/js/38.ca8023e7.js",
    "revision": "355672503f0797021735d1346512fe47"
  },
  {
    "url": "assets/js/39.d36d6a02.js",
    "revision": "2e21595450638e6a19b08ee85ddad1a2"
  },
  {
    "url": "assets/js/4.9d1f3385.js",
    "revision": "8fb8efac590d7b49fdfa3a191307ef40"
  },
  {
    "url": "assets/js/40.0507191e.js",
    "revision": "ccbeadf64e97ccc065fda7d8e8ebccaa"
  },
  {
    "url": "assets/js/41.02ea5377.js",
    "revision": "855340e0724cae34c5b96665968cd5a6"
  },
  {
    "url": "assets/js/42.81e885be.js",
    "revision": "182877a63b9247fd9a271f0827da73d6"
  },
  {
    "url": "assets/js/43.bc0e9e7d.js",
    "revision": "53276f44ff3885f9f53ed7889f9b77cf"
  },
  {
    "url": "assets/js/44.89553c7c.js",
    "revision": "106734b4e6a8ff638f16f2dcf360ef21"
  },
  {
    "url": "assets/js/45.2474b67f.js",
    "revision": "bc361d468cbdb2f1ef093b267f6d41b2"
  },
  {
    "url": "assets/js/46.19cac246.js",
    "revision": "72777f14fc349be6faa4571384c0abca"
  },
  {
    "url": "assets/js/47.a3917e61.js",
    "revision": "10a9dad8cc3db9808539753f62058aaa"
  },
  {
    "url": "assets/js/48.0b192eb6.js",
    "revision": "555e7ce1bd1cf9714e2c6508b13d6077"
  },
  {
    "url": "assets/js/49.a60e2e63.js",
    "revision": "ce34258c8b80021af3e27c4fbf9f0fd1"
  },
  {
    "url": "assets/js/5.c7c48ee1.js",
    "revision": "4b5a0d2504befea4400320aaf331d47d"
  },
  {
    "url": "assets/js/50.2a7910d5.js",
    "revision": "eb7ef096c1cf15e1edd3688e2563817f"
  },
  {
    "url": "assets/js/51.259d0810.js",
    "revision": "dc654d64c46c752a1ca75bbf656043e8"
  },
  {
    "url": "assets/js/52.18d4d04c.js",
    "revision": "6fb6d0c9bf43605f2d2af041c92324a2"
  },
  {
    "url": "assets/js/53.46e42b5e.js",
    "revision": "c32683b181b14057389e664ec6ed8cff"
  },
  {
    "url": "assets/js/54.6a795f28.js",
    "revision": "9a55cbc5243ade40cb53ba64addd5f3d"
  },
  {
    "url": "assets/js/55.02cf11c1.js",
    "revision": "58b0307f608606a370aa1fb5e9c15600"
  },
  {
    "url": "assets/js/56.2aa5eb2d.js",
    "revision": "78c7c2f22bad8852457bc7d4f875e56c"
  },
  {
    "url": "assets/js/57.f9635fd6.js",
    "revision": "bb622a3304afa4988502f46e65f7b86e"
  },
  {
    "url": "assets/js/58.b4b44b3d.js",
    "revision": "70ea84fbdfc55ed97594cfb78f8709f6"
  },
  {
    "url": "assets/js/59.f987bda5.js",
    "revision": "eabf394fac0ce732bfd3344becd752a7"
  },
  {
    "url": "assets/js/6.9683aecf.js",
    "revision": "57ca621fceaaa1306643deb73f0ffb7f"
  },
  {
    "url": "assets/js/60.a2825755.js",
    "revision": "f49d22cea2f84590e9b4c4f90f62a125"
  },
  {
    "url": "assets/js/61.e091b492.js",
    "revision": "df1ba15c0cbde5ccc09c26792e6a88da"
  },
  {
    "url": "assets/js/62.4eba6b72.js",
    "revision": "484e595582b4e3baeef0eddd5b0e5852"
  },
  {
    "url": "assets/js/63.58ac028a.js",
    "revision": "26f5b48513e5bdc2100fd118eb7e66c7"
  },
  {
    "url": "assets/js/64.15b9d55e.js",
    "revision": "68fd6b842044edad20af164249818973"
  },
  {
    "url": "assets/js/65.65d8d8a3.js",
    "revision": "06edd674a67443aee9bdcdf658f41651"
  },
  {
    "url": "assets/js/66.6405d106.js",
    "revision": "228845c9136b3045849ac2b08f100259"
  },
  {
    "url": "assets/js/67.ee8bf57c.js",
    "revision": "35a2f7014897a34ec0ca5a80118b5ad8"
  },
  {
    "url": "assets/js/68.9719cc2d.js",
    "revision": "3f288ea53f0f24590bc72e81e1901bc5"
  },
  {
    "url": "assets/js/69.f75d8aeb.js",
    "revision": "1b5d5dc7f9fcda83ddc529681137539b"
  },
  {
    "url": "assets/js/7.9358b989.js",
    "revision": "4082997e91c036cb5ce9d52a44b929ff"
  },
  {
    "url": "assets/js/70.9c73705f.js",
    "revision": "32f7ec7d8933503dab97fec5c967dc3e"
  },
  {
    "url": "assets/js/71.ed2ee18e.js",
    "revision": "e787ac6d6002ec47704844633d945481"
  },
  {
    "url": "assets/js/72.59da4a99.js",
    "revision": "cada881b4337b9cb4438999bf778a4de"
  },
  {
    "url": "assets/js/73.61d2bf9c.js",
    "revision": "e4e96ab142e8c9bf6930debcdfd895ef"
  },
  {
    "url": "assets/js/74.c9353ef4.js",
    "revision": "3e9105de720ee3da1e67bd99926328f2"
  },
  {
    "url": "assets/js/75.d6d0f0dc.js",
    "revision": "380be4984afeac752299b1c3e8990ecc"
  },
  {
    "url": "assets/js/76.13f523e5.js",
    "revision": "c3a1c3783db0a9bc2ee30569cf955f6f"
  },
  {
    "url": "assets/js/77.46dc46b4.js",
    "revision": "e44e18f1174b3ec23012ffc6eab1d43e"
  },
  {
    "url": "assets/js/78.5306db2c.js",
    "revision": "a17873122130372931e7ab724dd54e45"
  },
  {
    "url": "assets/js/79.bdda108c.js",
    "revision": "8d370b2bc7997e5b9d42514b1be71d66"
  },
  {
    "url": "assets/js/80.72ec0c38.js",
    "revision": "b8ff27b1198600c3cb3d557023b34995"
  },
  {
    "url": "assets/js/81.9b9e8bb3.js",
    "revision": "bc26a5f6deb406c6ceeb8b760d36a269"
  },
  {
    "url": "assets/js/82.2004d122.js",
    "revision": "bf36f2c0da4f7714a04ed434f52d1f23"
  },
  {
    "url": "assets/js/83.115c48c3.js",
    "revision": "cb0d99f1b47ddd262a34ffdf11fc994f"
  },
  {
    "url": "assets/js/84.f69a1b66.js",
    "revision": "6368efcd1288723e622df447e5509804"
  },
  {
    "url": "assets/js/85.0586c718.js",
    "revision": "f5b8176d74c6f8750f8531e9cf9a4c77"
  },
  {
    "url": "assets/js/86.a6f517fd.js",
    "revision": "a422b10eaa6068c77c604c9a507c40b4"
  },
  {
    "url": "assets/js/87.d8eaee9e.js",
    "revision": "0037e5ab887216e9897b330cc5090df0"
  },
  {
    "url": "assets/js/88.2196d8d8.js",
    "revision": "1d965a63cf27bdfb761ac0308bec1832"
  },
  {
    "url": "assets/js/89.d617e9da.js",
    "revision": "3f02d7bacb8ffdd6c19237388a1b50a2"
  },
  {
    "url": "assets/js/90.985dec2a.js",
    "revision": "ddaf8cca88e0f945e8a61d8b39dac831"
  },
  {
    "url": "assets/js/91.739c3d1e.js",
    "revision": "705ca240ee69ac44e9a01235344c85ac"
  },
  {
    "url": "assets/js/92.62b541b2.js",
    "revision": "6f8adbc62b3943d8802dd9e8d7a76377"
  },
  {
    "url": "assets/js/93.48d3030b.js",
    "revision": "7e6878b97bd2c4bf2ffc71ec7313a600"
  },
  {
    "url": "assets/js/94.0d6b8f68.js",
    "revision": "2949af65102db8662745d39cc9533d75"
  },
  {
    "url": "assets/js/95.78650575.js",
    "revision": "e821deb352ec1bcc5c34f14a879adc72"
  },
  {
    "url": "assets/js/96.fd85589e.js",
    "revision": "6c227db273df49c683061aadfdddebcb"
  },
  {
    "url": "assets/js/97.13cca325.js",
    "revision": "c1d1996f02ceafdbaf7ad5c65b92fc19"
  },
  {
    "url": "assets/js/98.fa08398e.js",
    "revision": "d144102220df4ab0a95ef4790943eb6d"
  },
  {
    "url": "assets/js/99.71111b7b.js",
    "revision": "ef10f6d4962283f23f218f3b39dea218"
  },
  {
    "url": "assets/js/app.4fc7aa85.js",
    "revision": "7836297eda4d0f3cf64f211c7f4c977a"
  },
  {
    "url": "assets/js/vendors~flowchart.ea78a59a.js",
    "revision": "3e552aaa2a89bb9df9d346d3aeb6a3d8"
  },
  {
    "url": "authors/index.html",
    "revision": "77697009d08c63f779a4e68bbbe83c61"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "e1d597e54789e9a036b5b7abca413dc1"
  },
  {
    "url": "autores/github_awatar1.png",
    "revision": "e0e40ff4b24009a10352a807ee1cdda7"
  },
  {
    "url": "autores/github_awatar2.png",
    "revision": "4f017abcc4845fbe3149814943309303"
  },
  {
    "url": "autores/nuochong.jpg",
    "revision": "fc1b128ff0bda5804531082b33a425f3"
  },
  {
    "url": "autores/nuochong.png",
    "revision": "f5dc4668fa3cc1173ca23413e490bd06"
  },
  {
    "url": "categories/backend.html",
    "revision": "420525d96e7fb6958db84cbfbcc0632f"
  },
  {
    "url": "categories/frontend.html",
    "revision": "0d6891c34e5d664d9e136b9b726b188c"
  },
  {
    "url": "categories/index.html",
    "revision": "73755cdb8b80a863b4b676697debcae3"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "82f20430dd0892b28c9b06eb4df27a13"
  },
  {
    "url": "contact/index.html",
    "revision": "a80d643b6d11dfdc0623516c7c246598"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/msapplication-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "gallery/2.jpg",
    "revision": "48baf7c915f4fe6ba6151caca356dcb8"
  },
  {
    "url": "gallery/3.jpg",
    "revision": "53b1e317080e08681bfff6f594dd418f"
  },
  {
    "url": "gallery/4.jpg",
    "revision": "fbe52e2d74b08b4467ce01cfc7ba034b"
  },
  {
    "url": "gallery/5.jpg",
    "revision": "5d2e75cac965cbd8698c479033b2ad57"
  },
  {
    "url": "gallery/index.html",
    "revision": "307ab58e7f43e6233d39e786929b0650"
  },
  {
    "url": "gallery/thumbs/2-small.jpg",
    "revision": "578cc7b21b9b2cb9b4f083b02a1c7b19"
  },
  {
    "url": "gallery/thumbs/3-small.jpg",
    "revision": "fbea5aec700e793e3b5f3141d23557ba"
  },
  {
    "url": "gallery/thumbs/4-small.jpg",
    "revision": "b37736b9443c065025bf1d5de716b35e"
  },
  {
    "url": "gallery/thumbs/5-small.jpg",
    "revision": "3eda5685194a4cfb2ee585378a8b69f7"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share-bak.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "image-social-share-edit.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "image-social-share.png",
    "revision": "8a837fb586cb5deb9bf52a9efd750b46"
  },
  {
    "url": "images/2019年，是否可以抛弃CSS预处理器？/640-1.gif",
    "revision": "2fa552bde38f5e5dfaa7150ec22ce5da"
  },
  {
    "url": "images/2019年，是否可以抛弃CSS预处理器？/640-2.gif",
    "revision": "4ae42d0137cb624b74ce590e4bc7195e"
  },
  {
    "url": "images/2019年，是否可以抛弃CSS预处理器？/640.gif",
    "revision": "45a831e1705a3f502a57b25f26e048f0"
  },
  {
    "url": "images/HybridApp离线包方案实践/微信图片_20200101163308.jpg",
    "revision": "11383451e1257fd38422173943c4ae25"
  },
  {
    "url": "images/HybridApp离线包方案实践/微信图片_20200101163405.jpg",
    "revision": "58f2a7ddd319a0dfddc3e1490f6a104e"
  },
  {
    "url": "images/posts-base/2018/8/my-first-post.png",
    "revision": "9d3936d8080aeecc8593bb8e1cefd52b"
  },
  {
    "url": "images/posts-base/2020/2/finally-have-a-nest.png",
    "revision": "bbad8d4dc3c2419af32a5bb6c7ba0cfb"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_320.png",
    "revision": "dda81a0d5ec7cb47821c832ddc5e8142"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_427.png",
    "revision": "bf4d9d64d0247a7990d68c05f916a83a"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_524.png",
    "revision": "a4378b6380354e380d894e9de46932ac"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_680.png",
    "revision": "5564910acfaa678c4ed0a60215bf2e39"
  },
  {
    "url": "images/posts/2020/2/finally-have-a-nest,w_320.png",
    "revision": "cc3354b705c1059f4787697c82e97dc9"
  },
  {
    "url": "images/posts/2020/2/finally-have-a-nest,w_427.png",
    "revision": "5054fa8c21169c88d42999566a74318a"
  },
  {
    "url": "images/posts/2020/2/finally-have-a-nest,w_524.png",
    "revision": "f89ff7438928360292fedbb6691dc1fe"
  },
  {
    "url": "images/posts/2020/2/finally-have-a-nest,w_680.png",
    "revision": "3613a6af5910e9fa518155eab12b355d"
  },
  {
    "url": "images/Vue这些修饰符帮我节省五分之一的开发时间/微信图片_20200113110946.jpg",
    "revision": "1d5bb227fb0df121af5b9cc36976e6a6"
  },
  {
    "url": "images/Vue这些修饰符帮我节省五分之一的开发时间/微信图片_20200113111039.jpg",
    "revision": "8a3df7a3c6092096d8000a35d2a20d9f"
  },
  {
    "url": "images/Vue这些修饰符帮我节省五分之一的开发时间/微信图片_20200113111110.jpg",
    "revision": "d8e39e9c4e968746d19165ceee9821e7"
  },
  {
    "url": "images/Vue这些修饰符帮我节省五分之一的开发时间/微信图片_20200113111130.jpg",
    "revision": "a477d6343e2d271092ab93c312d9d582"
  },
  {
    "url": "images/Vue这些修饰符帮我节省五分之一的开发时间/微信图片_20200113111143.jpg",
    "revision": "e1c51896165ba3f74218f92b4cc3add1"
  },
  {
    "url": "images/一篇文章彻底搞定富文本原理/640-1.gif",
    "revision": "083e01bf10d52a15d3b39fda272d3af9"
  },
  {
    "url": "images/一篇文章彻底搞定富文本原理/640-2.gif",
    "revision": "39946d678246fba63503db18a49edae5"
  },
  {
    "url": "images/一篇文章彻底搞定富文本原理/640-3.gif",
    "revision": "0f61102f9301a47c3a70b34d2092cab1"
  },
  {
    "url": "images/一篇文章彻底搞定富文本原理/640-4.gif",
    "revision": "af7302689b03adf2b40db51f4cbd34fb"
  },
  {
    "url": "images/一篇文章彻底搞定富文本原理/640.gif",
    "revision": "21dedbf1e72415263f6aade2fda38aa9"
  },
  {
    "url": "images/你连HTTPS原理都不懂，还讲“中间人攻击”？/微信图片_20200101162809.jpg",
    "revision": "47d5b5d15c33489020cf2957f730d78b"
  },
  {
    "url": "images/你连HTTPS原理都不懂，还讲“中间人攻击”？/微信图片_20200101162911.jpg",
    "revision": "57659483b1436b69173f7d3f6b8cb87d"
  },
  {
    "url": "images/你连HTTPS原理都不懂，还讲“中间人攻击”？/微信图片_20200101163009.jpg",
    "revision": "d4e5f1131c2d81139a90246c4e44a685"
  },
  {
    "url": "images/同一个坐标，谷歌、高德、百度地图居然指向了三个不同的地方/5caf13406227685daf019539_1024.jpg",
    "revision": "1b20c90bf45636f433a630104cf3af58"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101150753.jpg",
    "revision": "5f71a3e71dcd9ac61e89049738c967f6"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101151042.gif",
    "revision": "8742a3c536746c5bd90e7745d2a0f6b4"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101151107.gif",
    "revision": "8404eb565dbc414ee858ed8b63c7b2c3"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101151118.gif",
    "revision": "8b3e85fa5ad3d3553afd3297f82a17a1"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101151126.gif",
    "revision": "4d2816c27963b95978aa963034509984"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101151135.jpg",
    "revision": "f6c0e6eedffd5a8b1b8ea1b6d17e4528"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101151143.gif",
    "revision": "296ded9686cb596ffee672ffc128da12"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101151151.gif",
    "revision": "20dc93e0c3b55c9037ca243add5144b4"
  },
  {
    "url": "images/巧用CSS实现酷炫的充电动画/微信图片_20200101151159.gif",
    "revision": "3201809f23c0b41d99ab06d7a9d85d0f"
  },
  {
    "url": "images/彻底吃透JavaScript的执行机制/640-1.gif",
    "revision": "e65e6c39f57759b7fc6809d03bf07b17"
  },
  {
    "url": "images/彻底吃透JavaScript的执行机制/640.gif",
    "revision": "e65e6c39f57759b7fc6809d03bf07b17"
  },
  {
    "url": "images/纯CSS实现目录自动编号/chapter1.png",
    "revision": "39355032dec73749bb82f8c64541a28e"
  },
  {
    "url": "images/纯CSS实现目录自动编号/chapter2.png",
    "revision": "0ef0f6f9a07071b91c709ec17775b707"
  },
  {
    "url": "images/纯CSS实现目录自动编号/chapter3.png",
    "revision": "9189455f72acc12eba315cd0d048871e"
  },
  {
    "url": "images/纯CSS实现目录自动编号/chapter4.png",
    "revision": "45411872691135f1df60d6fa4f12221e"
  },
  {
    "url": "img/1-1.jpg",
    "revision": "04ed6c2b24cd443df2edb8f9536e1a00"
  },
  {
    "url": "img/1-2.jpg",
    "revision": "0d03009b6db7d20fd95ddd1e535c6baa"
  },
  {
    "url": "img/1-3.jpg",
    "revision": "14b201b5ef3c25c55d1a5465fa89af24"
  },
  {
    "url": "img/1-4.jpg",
    "revision": "e4e485cc75367a8e6ba846b8f7bfd22e"
  },
  {
    "url": "img/1-5.jpg",
    "revision": "5c7fe53928473bc45b6d155d52c3fe40"
  },
  {
    "url": "img/1-6.jpg",
    "revision": "cae213a23a60db461b2e4e842a6e50dc"
  },
  {
    "url": "img/1-7.jpg",
    "revision": "0c362fe4b42ecd68f46fe83fe8694e7d"
  },
  {
    "url": "img/1-8.jpg",
    "revision": "1a1c8fc6fb566ca99c91cd9366dab4e1"
  },
  {
    "url": "img/2-1.jpg",
    "revision": "ffb529903d395a671e910d78dee015cc"
  },
  {
    "url": "img/2-2.jpg",
    "revision": "f4834dce63f19a0bbdf81d423c3e0e45"
  },
  {
    "url": "img/2-3.jpg",
    "revision": "11840f953a7f9fec8efbe0679901e80a"
  },
  {
    "url": "img/2-4.jpg",
    "revision": "f14a424af161aef0f90de93f4e650b7f"
  },
  {
    "url": "img/3-1.jpg",
    "revision": "7cdcaae070246d120e4efe3ea6cf3f05"
  },
  {
    "url": "img/3-2.jpg",
    "revision": "9637739f40f8ef092ac7f09d83608556"
  },
  {
    "url": "img/3-3.jpg",
    "revision": "5b1b6ac0be8858a6e243274a7a94b676"
  },
  {
    "url": "img/3-4.jpg",
    "revision": "2e9acf66636ddd5a3c58a43f1b8a037b"
  },
  {
    "url": "img/5-1.jpg",
    "revision": "d2e5689b7fe6c3d22e4743ebb6b5fb59"
  },
  {
    "url": "img/big/2-1.jpg",
    "revision": "ec07d37b598e3371c72fd7ca558d822d"
  },
  {
    "url": "img/big/2-2.jpg",
    "revision": "895cccaad19398f202f646811fffc461"
  },
  {
    "url": "img/big/2-3.jpg",
    "revision": "11840f953a7f9fec8efbe0679901e80a"
  },
  {
    "url": "img/big/2-4.jpg",
    "revision": "05b7896a09aaccdcff2cef671fe8050e"
  },
  {
    "url": "img/forkme-on-github-right.png",
    "revision": "cdc54f17d05bf3147e34a6a7067b7245"
  },
  {
    "url": "img/medium/2-1.jpg",
    "revision": "4cef7f3f35a6d30dae3a2d06ee94ccb4"
  },
  {
    "url": "img/medium/2-2.jpg",
    "revision": "490a7acc98b7e9eef5a2a5502cd229f6"
  },
  {
    "url": "img/medium/2-3.jpg",
    "revision": "e3618fa962300c00c3c68fbbd2bc9b8b"
  },
  {
    "url": "img/medium/2-4.jpg",
    "revision": "b0b80e5efb28676cfc2d92b4d1aad625"
  },
  {
    "url": "img/small/2-1.jpg",
    "revision": "76e5b4ae72849a943d2ba95aa672d481"
  },
  {
    "url": "img/small/2-2.jpg",
    "revision": "73667c0834d8756cf1781e01745ef365"
  },
  {
    "url": "img/small/2-3.jpg",
    "revision": "71de3f63181b815c7f390158402f9e7f"
  },
  {
    "url": "img/small/2-4.jpg",
    "revision": "2461a0accc6a1e87113329f730b6ace8"
  },
  {
    "url": "img/small/4-1.jpg",
    "revision": "4f92350f96782728e921acbeac11c8f8"
  },
  {
    "url": "img/small/4-2.jpg",
    "revision": "4b02da3f8bf8fb102f1918e85392da26"
  },
  {
    "url": "img/small/4-3.jpg",
    "revision": "8bde848522d7f653b0f57b63b2549164"
  },
  {
    "url": "img/small/4-4.jpg",
    "revision": "11791e0fdcb698b4f9448ec6d6c4aac6"
  },
  {
    "url": "img/thumbs/1-1.jpg",
    "revision": "cca6f9b2ac0a85fcdb348cf14d8530a9"
  },
  {
    "url": "img/thumbs/1-2.jpg",
    "revision": "4ffd75154b8dd634b5f537753a3e7a54"
  },
  {
    "url": "img/thumbs/1-3.jpg",
    "revision": "5ae82fbdc3b51b49239ddf2e93b9ec6d"
  },
  {
    "url": "img/thumbs/1-4.jpg",
    "revision": "2c6fccf80141265c0c78710eb06a5e96"
  },
  {
    "url": "img/thumbs/1-5.jpg",
    "revision": "f512d6af493c26b648bc710d3da151ba"
  },
  {
    "url": "img/thumbs/1-6.jpg",
    "revision": "48bf56c06b2929dd0a2f449072c38327"
  },
  {
    "url": "img/thumbs/1-7.jpg",
    "revision": "3a49e43cd5f030d9ee5aedc6922e2cdf"
  },
  {
    "url": "img/thumbs/1-8.jpg",
    "revision": "06c9fe0163a08a87925b318aa55938c9"
  },
  {
    "url": "img/thumbs/2-1.jpg",
    "revision": "d9f1f0567375fc5e75a9f2e8842522b8"
  },
  {
    "url": "img/thumbs/2-2.jpg",
    "revision": "de5bf508a5a404e9f890d67fc4b59a32"
  },
  {
    "url": "img/thumbs/2-3.jpg",
    "revision": "8a199b32c3126988e4a963b60050b0e3"
  },
  {
    "url": "img/thumbs/2-4.jpg",
    "revision": "1a6787d187bbff341166de28e6c0f858"
  },
  {
    "url": "img/thumbs/3-1.jpg",
    "revision": "bb91bd86e4918daf05976f294927cfa0"
  },
  {
    "url": "img/thumbs/3-2.jpg",
    "revision": "0e0989a98573c446204a389646ee48ad"
  },
  {
    "url": "img/thumbs/3-3.jpg",
    "revision": "51b975977d248c291acc5a3a99e9777d"
  },
  {
    "url": "img/thumbs/3-4.jpg",
    "revision": "d7a56af3ce16c2fe944b72a51d6b332d"
  },
  {
    "url": "img/thumbs/4-1.jpg",
    "revision": "58f6e058cce353fe30024b72b1b708d8"
  },
  {
    "url": "img/thumbs/4-2.jpg",
    "revision": "c47a56cc30880c2e7a0a875e73517782"
  },
  {
    "url": "img/thumbs/4-3.jpg",
    "revision": "5940c8064a2d477bccf867e9f08ca722"
  },
  {
    "url": "img/thumbs/4-4.jpg",
    "revision": "deeb195b40bc64db8e64940cdb5b4853"
  },
  {
    "url": "img/thumbs/5-1.jpg",
    "revision": "f8e2999c1df9bcc78f7dbba9b9e18206"
  },
  {
    "url": "index.html",
    "revision": "3ba2957bd3fdff58e54dcbe3653e2bd6"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "logo.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "photo.jpg",
    "revision": "2a01c01dc7a9a0eec3dc8785bfd7d6f9"
  },
  {
    "url": "photograph/banner-1xx.jpg",
    "revision": "36282ea45aab36956fc4316cfff6173d"
  },
  {
    "url": "photograph/banner-2xx.jpg",
    "revision": "af6382e38fddf4fa62c249d7422e05d8"
  },
  {
    "url": "photograph/banner-3xx.jpg",
    "revision": "322568cc82606dfdbea0c433e010280a"
  },
  {
    "url": "photograph/blog-1x.png",
    "revision": "b663729f560f8a2909964c14a9b225b7"
  },
  {
    "url": "photograph/blog-3.png",
    "revision": "3fe749c6aa635c2fc64863bcba9224d3"
  },
  {
    "url": "photograph/blog-4x.png",
    "revision": "3e205842bceb7db7b97aad0546fb1f57"
  },
  {
    "url": "photograph/hills.jpg",
    "revision": "95e6b63d01dd1b40ef1a90df9fa06ef3"
  },
  {
    "url": "photograph/hrt.png",
    "revision": "20524c45921f77e8154274b4bb237fbc"
  },
  {
    "url": "photograph/icons.svg",
    "revision": "5d6e0255a7862551b3a3afea8568f305"
  },
  {
    "url": "photograph/logo.png",
    "revision": "6c0080fe245e3faea0688eabca876e4b"
  },
  {
    "url": "photograph/nav-icon.png",
    "revision": "b85394a00f9080c7c4bf4cf1d2dbd6ad"
  },
  {
    "url": "photograph/photo/large/01.jpg",
    "revision": "425519157db3792e7eecd471f517c500"
  },
  {
    "url": "photograph/photo/large/02.jpg",
    "revision": "018f96d6bda6d3444ede2d7f563f55eb"
  },
  {
    "url": "photograph/photo/large/03.jpg",
    "revision": "cdc702ef13c0875812d718887d32a8ff"
  },
  {
    "url": "photograph/photo/large/04.jpg",
    "revision": "56a7d5673426d52314d7e7144add9e52"
  },
  {
    "url": "photograph/photo/large/05.jpg",
    "revision": "f97f78611d6227a6d6c98e2190bb0d6d"
  },
  {
    "url": "photograph/photo/large/06.jpg",
    "revision": "d960eea99450afc31c4e389a1c8ca73e"
  },
  {
    "url": "photograph/photo/large/07.jpg",
    "revision": "da789016360cc226720b74c846f51b46"
  },
  {
    "url": "photograph/photo/large/08.jpg",
    "revision": "9a818f793ace8b40edfc94de2cd143ee"
  },
  {
    "url": "photograph/photo/large/09.jpg",
    "revision": "a2b2c77ac2f3ab8f9c88fbcb5c1e502c"
  },
  {
    "url": "photograph/photo/large/10.jpg",
    "revision": "689f71f4448ab26e6d298298eb7297d7"
  },
  {
    "url": "photograph/photo/large/11.jpg",
    "revision": "643b78c60e95897f3b2673a0195c8378"
  },
  {
    "url": "photograph/photo/large/12.jpg",
    "revision": "fe31abc86edd516f83722c71785e0261"
  },
  {
    "url": "photograph/photo/small/01-small.jpg",
    "revision": "a7b63d7cd3692369a7ce954f5d391a0b"
  },
  {
    "url": "photograph/photo/small/02-small.jpg",
    "revision": "d11f548fab0753dd23028cf9a82b0c65"
  },
  {
    "url": "photograph/photo/small/03-small.jpg",
    "revision": "3eae93c619f6332b1e63534bacc3138f"
  },
  {
    "url": "photograph/photo/small/04-small.jpg",
    "revision": "1228eaa786deea100720090efc736378"
  },
  {
    "url": "photograph/photo/small/05-small.jpg",
    "revision": "2b960291dfdbbe7324ee94c1b71f9e0f"
  },
  {
    "url": "photograph/photo/small/06-small.jpg",
    "revision": "eb8c4b4cb30f78ff1e17a00cfb94de6b"
  },
  {
    "url": "photograph/photo/small/07-small.jpg",
    "revision": "615dc1d2c6da87177d49f35ece84be17"
  },
  {
    "url": "photograph/photo/small/08-small.jpg",
    "revision": "44a2660b1c73e7ac9d8d131c412d3c61"
  },
  {
    "url": "photograph/photo/small/09-small.jpg",
    "revision": "80b6716c83e2a2f02a5fe6947743abb8"
  },
  {
    "url": "photograph/photo/small/10-small.jpg",
    "revision": "77f3204b08ea0c7a76126fb1ebac798b"
  },
  {
    "url": "photograph/photo/small/11-small.jpg",
    "revision": "33d71e0a3719b666f859446ba92166c8"
  },
  {
    "url": "photograph/photo/small/12-small.jpg",
    "revision": "c16dd9a75e047fcc1f38006193cbb270"
  },
  {
    "url": "photograph/quote-1.png",
    "revision": "992f452390d29db27524de3a32d1b76c"
  },
  {
    "url": "photograph/quote-2.png",
    "revision": "cb5e1250e0f038767825e0162df4f584"
  },
  {
    "url": "photograph/rsh.png",
    "revision": "1c149d1b71ee7742fabb67fd9028d5ac"
  },
  {
    "url": "photograph/side-arrows.png",
    "revision": "ed8a2f7221467895d286793be8c3bd6d"
  },
  {
    "url": "photograph/social-sprit-bottom.png",
    "revision": "4abba7f2a817cbd8cb92a9623c54140f"
  },
  {
    "url": "photograph/social-sprit.png",
    "revision": "7650d524a96c20c3ea3d441ec06bc9d4"
  },
  {
    "url": "photograph/srch.png",
    "revision": "5d79a659b4030a162c76a3b5bc39de77"
  },
  {
    "url": "photograph/top-arrow.png",
    "revision": "88d9cfe8de3003d0b48428e2989c1460"
  },
  {
    "url": "posts/finally-have-a-nest.html",
    "revision": "0b7488ee55faaa1f28907672704dcab8"
  },
  {
    "url": "posts/index.html",
    "revision": "fcc48f5c29cdcc4ec2e7263cb5d50662"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "bdd008bcdc66a4eb3383c4dd10e3daf7"
  },
  {
    "url": "travel/index.html",
    "revision": "a5a14abbcca08406d046cb5f291dc20b"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "5a7f19887b35c489c127db81c3921b05"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "f886cf3632c07446a8e3e613c32cdd12"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "cd8c4125de8ce1f39f70e34f418283ea"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "c86ecc4b4c6b9e81419c6da4fb58f4ef"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "71c10c531e7175a35a7ac3c22f6a638e"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "c0b4a139180981a5d6ef9337e3dbd651"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "111acca9e5c7981599680bb4853526e2"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "aa3d42fd80d6f450c0ac35753b62bf75"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "0185e2225ff059ae61bef124e30edc68"
  },
  {
    "url": "zh/index.html",
    "revision": "1679e7280627a1a82b23cb15ce52beee"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "98424fc8e5c3647a21e6721a65984f0a"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "a392ded911246f5beb628ddd848b8e37"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "8ed9de5a783a58e7dc16ff73b72f6fc2"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "8ceecda0df21049717cdbd2698ecf3e5"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "648debba60bc204afe6d59b5def7816e"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "d8250b97f99a3a9861915c3dc7380d78"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "10b9154fc7ae444cbba69edc2fd14c0e"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "c1aa34ccf61e56e4c8b021ddf98dceb9"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "8b7fb67552b4d3414a342495a160f1ee"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "44762cb163b9edfa132caada6c76fcb1"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "94d1c9491243fd6db914edc79ae21c4f"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "494967a17846a389027b1402d1c22f49"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "4ce48abad76dad8cec01eaeca0e88fa8"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "02caa7dc9aecceb140009bf16a09a3f8"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "480f33ada94c5417b8864d5c160a4702"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "52faf2b86f35f8cd203728400ec6762e"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "1bb4d2ed4b924e39893d236144c0266b"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "688cc060fd851cfa0b7e8cbd9ee1afa7"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "715cdf8dcb5b2b53b0bb212f7eb6e97d"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "b00d7112549f3dc35b8c33ccad332ec3"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "d68ef39dfcef843f5e24af0d728c9958"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "1f03f1a733420d2b4e25a056cf7192a8"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "1b326877e444716b167c818d53974508"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "afdcb9a61a64671cbd27a2eb688bc33d"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "64dac44c871938280dad9971316426c5"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "daf3236fc849de08ac099fa75c73f8b5"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "1532f1713379e5f03f5b7a0124197b5f"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "42e86e29e23c13fbb94dc4fb33a51c11"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "e43ff4936a991901981ec864a9a5c38d"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "480601d606588c915c21d871fa80d7fc"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "d8d01aa0bf15ac8efa19858e1341b2c6"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "387d9d7544b9e15ad63fbb0b2208b246"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "ae6ac0e0c4dcfaf9e3775921e421aff3"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "f5eade141d83478b2c8fa3c5eddcb039"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "dda1ae8605107ccf8de528629006a5f7"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "0efaa6baab1372819c8349d6977e56b4"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "19185d58aebc55b989825c2b5baa3181"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "f6c7f2d4eb4ac6e535d75e22e9bcb43a"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "e97842d615c5e598683e1f0d52ed1285"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "d0b75ff45505e0f5c54893b7b4010ee3"
  },
  {
    "url": "加载失败-1.png",
    "revision": "578b3cf75d5033987407f4f2fc2eac12"
  },
  {
    "url": "加载失败-2.png",
    "revision": "afddd75b868ee00c8302c5eeba9df88b"
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
