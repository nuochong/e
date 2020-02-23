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
    "revision": "d7201902af011a5ccf3b929959ebe10f"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "28c65180786f50aab1b57b4504aa13d9"
  },
  {
    "url": "assets/css/0.styles.34e2b345.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.1b3771be.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.e3f3123e.css",
    "revision": "c1d016415691a599105549ad2e4df75d"
  },
  {
    "url": "assets/css/11.styles.630d4237.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "assets/css/12.styles.4f6df1e6.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/13.styles.5f057080.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/14.styles.90026e01.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/15.styles.1596040f.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "assets/css/16.styles.8633e20f.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "assets/css/17.styles.73e778fc.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/18.styles.a0118937.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/19.styles.992fdcae.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/2.styles.145e088f.css",
    "revision": "1797b8d617427ed3957936931d189371"
  },
  {
    "url": "assets/css/20.styles.4eab8794.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/21.styles.ac68c5cb.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/22.styles.d2c8c14e.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/23.styles.48a75014.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/24.styles.b59b0e8d.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/25.styles.26b0b79d.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/26.styles.3ad07a26.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/27.styles.b2dfe2e8.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/3.styles.dc7fb3a5.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "assets/css/31.styles.e93619cc.css",
    "revision": "68488905995da2a785500f9bb7753c21"
  },
  {
    "url": "assets/css/4.styles.dd2d193c.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.756dee4b.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "assets/css/7.styles.3f7d0493.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.60798df5.css",
    "revision": "37c47843cc3a453a0693ece7a44f8f8f"
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
    "url": "assets/js/0.34e2b345.js",
    "revision": "4bf64e5bc2a3a555b747de12cb547916"
  },
  {
    "url": "assets/js/1.1b3771be.js",
    "revision": "a002960f537a657b0e10aa2eb03905f6"
  },
  {
    "url": "assets/js/10.e3f3123e.js",
    "revision": "29a06a381245ea8b2439ceec88f046e1"
  },
  {
    "url": "assets/js/100.c86b9041.js",
    "revision": "214c241ebeacca159d6984e248135a4e"
  },
  {
    "url": "assets/js/101.3331b5b8.js",
    "revision": "5130761db5036a99b8025973e8d3bf00"
  },
  {
    "url": "assets/js/102.a618d2fc.js",
    "revision": "f9cd68dca3d908694a5939db450f93b4"
  },
  {
    "url": "assets/js/103.03bce9ab.js",
    "revision": "03f75fc91843f4133bb53b3f5094d121"
  },
  {
    "url": "assets/js/104.8996b843.js",
    "revision": "2455587452834e6a2985be8331cc8dfa"
  },
  {
    "url": "assets/js/105.6582f8ef.js",
    "revision": "03e256f893adbb73d3855dca9ffa3a86"
  },
  {
    "url": "assets/js/106.d249ed31.js",
    "revision": "f242b0ac3f6410ca0325a393a473d154"
  },
  {
    "url": "assets/js/107.323e40af.js",
    "revision": "2137a74ef363ef75b163dc5b336b47b1"
  },
  {
    "url": "assets/js/108.8020351c.js",
    "revision": "5524e616a59545cb3ac55a5daabf33fd"
  },
  {
    "url": "assets/js/11.630d4237.js",
    "revision": "6cb5c84e37f1d23338da55c68ecb41b1"
  },
  {
    "url": "assets/js/12.4f6df1e6.js",
    "revision": "31a15aba3550e63e221918ac8aa6ea79"
  },
  {
    "url": "assets/js/13.5f057080.js",
    "revision": "0614f6c491b0381233b74564feaf9456"
  },
  {
    "url": "assets/js/14.90026e01.js",
    "revision": "bae380e6ed07fe51a2cfa5055e973267"
  },
  {
    "url": "assets/js/15.1596040f.js",
    "revision": "15a5b4962193216142c49c1bc688b610"
  },
  {
    "url": "assets/js/16.8633e20f.js",
    "revision": "c9695684f8d85fd83ff006c4963b765d"
  },
  {
    "url": "assets/js/17.73e778fc.js",
    "revision": "6eafca4fa8b84f256d90c1cdc31d8360"
  },
  {
    "url": "assets/js/18.a0118937.js",
    "revision": "a2f08c28138517fc34f385fa59569a14"
  },
  {
    "url": "assets/js/19.992fdcae.js",
    "revision": "39df3f58c6fa12418d3a413744e54138"
  },
  {
    "url": "assets/js/2.145e088f.js",
    "revision": "6b065aa8ab51db1aacfd0715548be122"
  },
  {
    "url": "assets/js/20.4eab8794.js",
    "revision": "ccb4f8611249b041595601ead708cf82"
  },
  {
    "url": "assets/js/21.ac68c5cb.js",
    "revision": "e277ec9ab9a19ca0e2fb4f1f1611f235"
  },
  {
    "url": "assets/js/22.d2c8c14e.js",
    "revision": "124593c33122889390863292f6268a53"
  },
  {
    "url": "assets/js/23.48a75014.js",
    "revision": "ef51d57b888d190459204730e1933fde"
  },
  {
    "url": "assets/js/24.b59b0e8d.js",
    "revision": "86215d732e10171211df9bad5559061e"
  },
  {
    "url": "assets/js/25.26b0b79d.js",
    "revision": "bcd9b1ed31167cdb48d046abd8560cd3"
  },
  {
    "url": "assets/js/26.3ad07a26.js",
    "revision": "cae8678e1b6eccb5aaaf32828d57171f"
  },
  {
    "url": "assets/js/27.b2dfe2e8.js",
    "revision": "916b666c8b765541e01470e71ac3b1da"
  },
  {
    "url": "assets/js/28.aadfb113.js",
    "revision": "8187220fd9313f532cebcb3e3d2bdffc"
  },
  {
    "url": "assets/js/29.71cce677.js",
    "revision": "e1eba2d1d41f0223f69ea8bc9cd46eb5"
  },
  {
    "url": "assets/js/3.dc7fb3a5.js",
    "revision": "67cfb11cee85191c52ec16a48199426f"
  },
  {
    "url": "assets/js/30.b16bd2ae.js",
    "revision": "b5bfa4130ed0d57745a1276a56884c7d"
  },
  {
    "url": "assets/js/31.e93619cc.js",
    "revision": "168b2cf44d20c725abae9143a9be260c"
  },
  {
    "url": "assets/js/32.f8ccc32f.js",
    "revision": "6aa2609250d400cc8702575f718c2948"
  },
  {
    "url": "assets/js/33.0b58bb2a.js",
    "revision": "d7b7af165efcce33630c977e79b384cb"
  },
  {
    "url": "assets/js/34.2b1219f5.js",
    "revision": "7058cbe58a5236fa8eeb4354089afea3"
  },
  {
    "url": "assets/js/35.d6f19473.js",
    "revision": "a66655e02b3076eba15c43e36c15e0c8"
  },
  {
    "url": "assets/js/36.30ac5597.js",
    "revision": "31dc235662af51119b8b7fa0c0db4802"
  },
  {
    "url": "assets/js/37.fe87b15b.js",
    "revision": "1a251387a7da289eccaf40980ed07f32"
  },
  {
    "url": "assets/js/38.70443114.js",
    "revision": "3f2364de08085d77c39a58d57980cda0"
  },
  {
    "url": "assets/js/39.b3d75b7c.js",
    "revision": "c473ec2b2a22ed36c7850e7707fe78ef"
  },
  {
    "url": "assets/js/4.dd2d193c.js",
    "revision": "7b5ac81e2f1687d9f4fdc3ea3b2c5b44"
  },
  {
    "url": "assets/js/40.075a2c46.js",
    "revision": "86a1bee5e20c0f65e5a1776636d5fdb7"
  },
  {
    "url": "assets/js/41.f23eec97.js",
    "revision": "dea459c44d2f5b4f434daa7c1ded72e4"
  },
  {
    "url": "assets/js/42.3fa46e95.js",
    "revision": "1110159e114682cbbb7bce957ff1158c"
  },
  {
    "url": "assets/js/43.aa26ff0a.js",
    "revision": "bb95f5c013e2a5433fdf803b3f485cde"
  },
  {
    "url": "assets/js/44.6a4ec8b6.js",
    "revision": "9673d2d945bebb388cb4afcba156c18d"
  },
  {
    "url": "assets/js/45.472ddca9.js",
    "revision": "2e3b26560802e8d4203d7a3a3b1646b7"
  },
  {
    "url": "assets/js/46.601cf4c3.js",
    "revision": "9c75201cf1a02cee61ba26faa12bd13d"
  },
  {
    "url": "assets/js/47.e1417d19.js",
    "revision": "cd5eb8c3c230c8cfeb250efa26ea4172"
  },
  {
    "url": "assets/js/48.6eb9ad60.js",
    "revision": "4f7d2f6bd3a53e5c3920f5fdae124612"
  },
  {
    "url": "assets/js/49.b2b1be20.js",
    "revision": "dda2650d932e6e4b832bd03f8b305865"
  },
  {
    "url": "assets/js/5.add188ef.js",
    "revision": "85dc29759a7352220adb6187347bc3e6"
  },
  {
    "url": "assets/js/50.78604287.js",
    "revision": "cf1d9525deea639b7a365407f739952c"
  },
  {
    "url": "assets/js/51.f6d015cb.js",
    "revision": "ff81e09951d1c36e889bf7b984f11d7d"
  },
  {
    "url": "assets/js/52.61f768bc.js",
    "revision": "f70cfd72c1ee164e6edbee70afe488ac"
  },
  {
    "url": "assets/js/53.45f76352.js",
    "revision": "7a71cf45598aa860e6df1aa91af2d35d"
  },
  {
    "url": "assets/js/54.74aca5d4.js",
    "revision": "3681d9f92a443394afcab9cbfa0d35f9"
  },
  {
    "url": "assets/js/55.1f41ed85.js",
    "revision": "0b0b57e82601c60c7425a8df396b094b"
  },
  {
    "url": "assets/js/56.a59bc046.js",
    "revision": "05936db3ca7aa5246913eb344e5e107a"
  },
  {
    "url": "assets/js/57.fd9722cb.js",
    "revision": "07df8bcfffbde1a1bbf84924b21f96bb"
  },
  {
    "url": "assets/js/58.8b74a789.js",
    "revision": "34ad00f818099daae39231a7b99a534b"
  },
  {
    "url": "assets/js/59.8b5b449a.js",
    "revision": "7217038fc257aebd3f291361e406e8c4"
  },
  {
    "url": "assets/js/6.756dee4b.js",
    "revision": "a2ca5e0613b1b9580d1646c1216f9a37"
  },
  {
    "url": "assets/js/60.1dde39fb.js",
    "revision": "46541a2438ee15bd5c46c1740fb17126"
  },
  {
    "url": "assets/js/61.84094924.js",
    "revision": "92368d33892059c746fe6082bdc4b024"
  },
  {
    "url": "assets/js/62.0c40c647.js",
    "revision": "bd23a5dae12295a1aca9f699f82ee050"
  },
  {
    "url": "assets/js/63.d07a12a8.js",
    "revision": "3ca3778a2856c0de3748651a86cf4669"
  },
  {
    "url": "assets/js/64.ceaf566b.js",
    "revision": "f35f29c8bf9be9b37f22565fb6faf27d"
  },
  {
    "url": "assets/js/65.b097863f.js",
    "revision": "56a8f51bb73a91831a990d319a1e3fa4"
  },
  {
    "url": "assets/js/66.674cfea1.js",
    "revision": "e2d19612c700792704c951fdef5fa8ad"
  },
  {
    "url": "assets/js/67.10a81393.js",
    "revision": "ca7e7412bfc976e567e58636be3178db"
  },
  {
    "url": "assets/js/68.adf60cc2.js",
    "revision": "99e474cf91d7b3cc65212c549780a493"
  },
  {
    "url": "assets/js/69.4e9b678c.js",
    "revision": "0fdd29ff8aa452f89754b9e597e43d79"
  },
  {
    "url": "assets/js/7.3f7d0493.js",
    "revision": "ac30dfdf735844901cb26f8d4bac2bc9"
  },
  {
    "url": "assets/js/70.c5fe1f0e.js",
    "revision": "bbb6293e970e36dd6af318171d9f3161"
  },
  {
    "url": "assets/js/71.f1aa56d3.js",
    "revision": "79af62a785548b438c3ff9ae4c98b22a"
  },
  {
    "url": "assets/js/72.45789f08.js",
    "revision": "e3b892e4cc5baa20c71e010972380ea5"
  },
  {
    "url": "assets/js/73.30997f4a.js",
    "revision": "5ee3ba835f0c320f8600476ddb52eb7f"
  },
  {
    "url": "assets/js/74.3b46c8a1.js",
    "revision": "0bb80adb6667a9b511ffa594e82be501"
  },
  {
    "url": "assets/js/75.10cd82ef.js",
    "revision": "e6cc76907e0da8e698a2ce33a34fa7cf"
  },
  {
    "url": "assets/js/76.ab7a853e.js",
    "revision": "93eeb277fe18d85809a603fc5f59c60b"
  },
  {
    "url": "assets/js/77.1f322923.js",
    "revision": "4a784ab55f36febbeb4a276ef87ed24e"
  },
  {
    "url": "assets/js/78.e7bdf4ad.js",
    "revision": "2014642f98f1125c0fe8a2dfd4b648c0"
  },
  {
    "url": "assets/js/79.04e925c3.js",
    "revision": "fd47d655e51f2d45f57946fecab5f74d"
  },
  {
    "url": "assets/js/80.3865baa6.js",
    "revision": "b6844a0e8ed5cd64fcf25629dbae8edf"
  },
  {
    "url": "assets/js/81.a3206a98.js",
    "revision": "cc89195d591488397914d1cfb4b57b94"
  },
  {
    "url": "assets/js/82.cbdb1415.js",
    "revision": "bcac48ceb2e247cd56271c3e95cda73a"
  },
  {
    "url": "assets/js/83.b6bec761.js",
    "revision": "3630c316cc487a69d96f74d0dfa65935"
  },
  {
    "url": "assets/js/84.e26a4cf5.js",
    "revision": "2711d9a3be73c0934a3c5448fb55fe7c"
  },
  {
    "url": "assets/js/85.7904307b.js",
    "revision": "7c04fc550411220e7a863e85d4a9fcb8"
  },
  {
    "url": "assets/js/86.730e434f.js",
    "revision": "b60f09e7293ca719c83131e25c8c6cd4"
  },
  {
    "url": "assets/js/87.fc6cf244.js",
    "revision": "b53e70ed312ee8e211779bb685282917"
  },
  {
    "url": "assets/js/88.7367c6e2.js",
    "revision": "51e63d0eb3f80e3886fb29f0d40e540a"
  },
  {
    "url": "assets/js/89.459907e5.js",
    "revision": "00a653550cc6498c11b540c3dcfdd520"
  },
  {
    "url": "assets/js/90.ff2a720e.js",
    "revision": "4a7e9e39f722b7c7a61763aab5749bab"
  },
  {
    "url": "assets/js/91.c7ab941e.js",
    "revision": "547fde2ffdf9a2b64a0029ac3f36106c"
  },
  {
    "url": "assets/js/92.e47a3140.js",
    "revision": "1c76bfb3522ec99dba5b2dd123eded0b"
  },
  {
    "url": "assets/js/93.fee458e9.js",
    "revision": "b7a42c2c9db9051723c8cba93fc94865"
  },
  {
    "url": "assets/js/94.dfb6f828.js",
    "revision": "ece849e7eea4920d34523387e2958051"
  },
  {
    "url": "assets/js/95.6c97442f.js",
    "revision": "86d869e84535a7e750c0e66ea41f0f3c"
  },
  {
    "url": "assets/js/96.8721779a.js",
    "revision": "ca90fe22ad28235b5fcdf0f211c2cca8"
  },
  {
    "url": "assets/js/97.f8fb90c6.js",
    "revision": "84b364e10c131ff995906e481278198d"
  },
  {
    "url": "assets/js/98.65239771.js",
    "revision": "86bc5138764cab2c3853d763439b0f4f"
  },
  {
    "url": "assets/js/99.3678c6f8.js",
    "revision": "a0c235355ca478b79a89e6bb6c8a1b51"
  },
  {
    "url": "assets/js/vendors~flowchart.992bf744.js",
    "revision": "aa7aa7edc32637af63e96a74ceef573a"
  },
  {
    "url": "authors/index.html",
    "revision": "b2de7acdcf4171c31aac328708172de4"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "f157bcc14c1b5a5620992f018fc3789e"
  },
  {
    "url": "autores/github_awatar2.png",
    "revision": "f7c47e0f8063804e2bd010ca9e2bf465"
  },
  {
    "url": "autores/nuochong.png",
    "revision": "baf343445710e0d93761999cc90467c5"
  },
  {
    "url": "categories/backend.html",
    "revision": "39437053450b9a032f07e6b588828009"
  },
  {
    "url": "categories/frontend.html",
    "revision": "c7ef15ae3fda2ed6db910fe82bbce6c1"
  },
  {
    "url": "categories/index.html",
    "revision": "c2e5213540daaf35d70582d0d33c1357"
  },
  {
    "url": "comments/index.html",
    "revision": "3e2925c8d27aca28b92f753378284368"
  },
  {
    "url": "contact/index.html",
    "revision": "39c9260a2c9bff51e3f4aab4b423326b"
  },
  {
    "url": "fallback.png",
    "revision": "30b3fbf300209144862e9ff08c564168"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "8c0281163800ff1ad83a05f043b97722"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "2b6246ea922b7b03c0af8dc70b6815a9"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "7243fbd3f15500638752cc2c080c0643"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "28f681e29955398e22e8febbd510557a"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "41191dc8c7fb62f4c7f00e6fb036ff2b"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "9f2d4e0c5c147ec6418c87a9ded56b7d"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "f8fddabcc40b2dfb1644f9fe98e5b325"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "758e7164bba2b4c2ff071d829add67cf"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "32b4a25c2b866d5f5cbdefbaea9d9745"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "f8b8c060fccabfbfbf28ffe35ca30163"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "03bd68feb0a330becd03ac3d7cac4ef2"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "48d3bfea3eb10bf359e1bc631ff05d05"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "41191dc8c7fb62f4c7f00e6fb036ff2b"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "71d292012ea7ad6e2412c2636a098675"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "abc32381e9212668447d9397c6950705"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "e4b80289303a1333343bd29ae4e50a7d"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "f35c2d671681642add62a85a0d93230d"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "d88d5f6f142035e75b490164beeb5e30"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "7d5cd0a0fa1eb6cb5ad340208b6adfdb"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "f35c2d671681642add62a85a0d93230d"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "1c01a2b344fb20661ff638ddbd0c9123"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "0ce15980034dcd586481cc56d1561316"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "9f2d4e0c5c147ec6418c87a9ded56b7d"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "4f8a49044d84c5b4dc2b22ccef698554"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "66fa31225664e0099c105a8d19cfee29"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "4526f94a4e31854bca77a44d6c5c0bc4"
  },
  {
    "url": "favicon/msapplication-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "912a2b4912dffcd93ef62167bae738e4"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "gallery/bitty/blessed-state/01-small.jpg",
    "revision": "a7b63d7cd3692369a7ce954f5d391a0b"
  },
  {
    "url": "gallery/bitty/blessed-state/02-small.jpg",
    "revision": "d11f548fab0753dd23028cf9a82b0c65"
  },
  {
    "url": "gallery/bitty/blessed-state/03-small.jpg",
    "revision": "3eae93c619f6332b1e63534bacc3138f"
  },
  {
    "url": "gallery/bitty/blessed-state/04-small.jpg",
    "revision": "1228eaa786deea100720090efc736378"
  },
  {
    "url": "gallery/bitty/blessed-state/05-small.jpg",
    "revision": "2b960291dfdbbe7324ee94c1b71f9e0f"
  },
  {
    "url": "gallery/bitty/blessed-state/06-small.jpg",
    "revision": "eb8c4b4cb30f78ff1e17a00cfb94de6b"
  },
  {
    "url": "gallery/bitty/blessed-state/07-small.jpg",
    "revision": "615dc1d2c6da87177d49f35ece84be17"
  },
  {
    "url": "gallery/bitty/blessed-state/08-small.jpg",
    "revision": "44a2660b1c73e7ac9d8d131c412d3c61"
  },
  {
    "url": "gallery/bitty/blessed-state/09-small.jpg",
    "revision": "80b6716c83e2a2f02a5fe6947743abb8"
  },
  {
    "url": "gallery/bitty/blessed-state/10-small.jpg",
    "revision": "77f3204b08ea0c7a76126fb1ebac798b"
  },
  {
    "url": "gallery/bitty/blessed-state/11-small.jpg",
    "revision": "33d71e0a3719b666f859446ba92166c8"
  },
  {
    "url": "gallery/bitty/blessed-state/12-small.jpg",
    "revision": "c16dd9a75e047fcc1f38006193cbb270"
  },
  {
    "url": "gallery/bitty/blessed-state/13-small.jpg",
    "revision": "481fb760fca770be1e8d78f48a708c5f"
  },
  {
    "url": "gallery/bitty/blessed-state/14-small.jpg",
    "revision": "dbb54130c53d7ac88b28b6cdb2b4ea04"
  },
  {
    "url": "gallery/bitty/blessed-state/15-small.jpg",
    "revision": "4414ad5a60b2ddb92a1cf79cd28136f6"
  },
  {
    "url": "gallery/bitty/blessed-state/16-small.jpg",
    "revision": "955ce5dbebddbe33b807dbd24f11d067"
  },
  {
    "url": "gallery/bitty/blessed-state/17-small.jpg",
    "revision": "73f35009cb91dce2354528a5f23d1080"
  },
  {
    "url": "gallery/bitty/formosa/2-small.jpg",
    "revision": "578cc7b21b9b2cb9b4f083b02a1c7b19"
  },
  {
    "url": "gallery/bitty/formosa/20190210_122840-small.jpg",
    "revision": "02ed1a497792b6d8b40796a819f1dadb"
  },
  {
    "url": "gallery/bitty/formosa/20190211_115351-small.jpg",
    "revision": "7fc0381a5d020c758b2e83d95e03a57f"
  },
  {
    "url": "gallery/bitty/formosa/20190211_122735-small.jpg",
    "revision": "5ca29b500f68470496424ba4b3e0ad5a"
  },
  {
    "url": "gallery/bitty/formosa/20190212_170821-small.jpg",
    "revision": "489e862ef913cf390195ad07c65a7cda"
  },
  {
    "url": "gallery/bitty/formosa/20190213_112738_003-small.jpg",
    "revision": "25db26bd010a0698524a3bcbd1732f6a"
  },
  {
    "url": "gallery/bitty/formosa/20190214_165923-small.jpg",
    "revision": "6083c4cbdbd9a57f7bdc9483285b9420"
  },
  {
    "url": "gallery/bitty/formosa/3-small.jpg",
    "revision": "fbea5aec700e793e3b5f3141d23557ba"
  },
  {
    "url": "gallery/bitty/formosa/4-small.jpg",
    "revision": "b37736b9443c065025bf1d5de716b35e"
  },
  {
    "url": "gallery/bitty/formosa/5-small.jpg",
    "revision": "3eda5685194a4cfb2ee585378a8b69f7"
  },
  {
    "url": "gallery/index.html",
    "revision": "883f8668ad3da6eb7649f34d7b4415db"
  },
  {
    "url": "gallery/thumbs/fadeIn-animation/3-1.jpg",
    "revision": "bb91bd86e4918daf05976f294927cfa0"
  },
  {
    "url": "gallery/thumbs/fadeIn-animation/3-2.jpg",
    "revision": "0e0989a98573c446204a389646ee48ad"
  },
  {
    "url": "gallery/thumbs/fadeIn-animation/3-3.jpg",
    "revision": "51b975977d248c291acc5a3a99e9777d"
  },
  {
    "url": "gallery/thumbs/fadeIn-animation/3-4.jpg",
    "revision": "d7a56af3ce16c2fe944b72a51d6b332d"
  },
  {
    "url": "gallery/thumbs/responsive-images/2-1.jpg",
    "revision": "d9f1f0567375fc5e75a9f2e8842522b8"
  },
  {
    "url": "gallery/thumbs/responsive-images/2-2.jpg",
    "revision": "de5bf508a5a404e9f890d67fc4b59a32"
  },
  {
    "url": "gallery/thumbs/responsive-images/2-3.jpg",
    "revision": "8a199b32c3126988e4a963b60050b0e3"
  },
  {
    "url": "gallery/thumbs/responsive-images/2-4.jpg",
    "revision": "1a6787d187bbff341166de28e6c0f858"
  },
  {
    "url": "gallery/thumbs/sample-gallery/1-1.jpg",
    "revision": "cca6f9b2ac0a85fcdb348cf14d8530a9"
  },
  {
    "url": "gallery/thumbs/sample-gallery/1-2.jpg",
    "revision": "4ffd75154b8dd634b5f537753a3e7a54"
  },
  {
    "url": "gallery/thumbs/sample-gallery/1-3.jpg",
    "revision": "5ae82fbdc3b51b49239ddf2e93b9ec6d"
  },
  {
    "url": "gallery/thumbs/sample-gallery/1-4.jpg",
    "revision": "2c6fccf80141265c0c78710eb06a5e96"
  },
  {
    "url": "gallery/thumbs/sample-gallery/1-5.jpg",
    "revision": "f512d6af493c26b648bc710d3da151ba"
  },
  {
    "url": "gallery/thumbs/sample-gallery/1-6.jpg",
    "revision": "48bf56c06b2929dd0a2f449072c38327"
  },
  {
    "url": "gallery/thumbs/sample-gallery/1-7.jpg",
    "revision": "3a49e43cd5f030d9ee5aedc6922e2cdf"
  },
  {
    "url": "gallery/thumbs/sample-gallery/1-8.jpg",
    "revision": "06c9fe0163a08a87925b318aa55938c9"
  },
  {
    "url": "gallery/thumbs/single-image/5-1.jpg",
    "revision": "f8e2999c1df9bcc78f7dbba9b9e18206"
  },
  {
    "url": "gallery/thumbs/small-images/4-1.jpg",
    "revision": "58f6e058cce353fe30024b72b1b708d8"
  },
  {
    "url": "gallery/thumbs/small-images/4-2.jpg",
    "revision": "c47a56cc30880c2e7a0a875e73517782"
  },
  {
    "url": "gallery/thumbs/small-images/4-3.jpg",
    "revision": "5940c8064a2d477bccf867e9f08ca722"
  },
  {
    "url": "gallery/thumbs/small-images/4-4.jpg",
    "revision": "deeb195b40bc64db8e64940cdb5b4853"
  },
  {
    "url": "general/web-development.png",
    "revision": "6b0edf9a6ea1a74ca4153ea0252d37ab"
  },
  {
    "url": "images/posts-base/2018/8/my-first-post.png",
    "revision": "159656dbf182d53c98a21bbb2ad3dc32"
  },
  {
    "url": "images/posts-base/2020/2/finally-have-a-nest.png",
    "revision": "30a81e76162516f1e2f98edcac228dbc"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_320.png",
    "revision": "7d60ae1cff4eb3faa81bb9d38e7946da"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_427.png",
    "revision": "c9bc1e0ee16c3e0061500946f4b90b86"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_524.png",
    "revision": "37be47a571cb5a35524091784fb33391"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_680.png",
    "revision": "6e31093651c15d3797279592c8da47c4"
  },
  {
    "url": "images/posts/2020/2/finally-have-a-nest,w_320.png",
    "revision": "3809309e23df054ee1d6d42490b51f53"
  },
  {
    "url": "images/posts/2020/2/finally-have-a-nest,w_427.png",
    "revision": "4dcb9579f76eb932194d3b722e64fe10"
  },
  {
    "url": "images/posts/2020/2/finally-have-a-nest,w_524.png",
    "revision": "654096e8de98af70bfbb4bd1a82f5da3"
  },
  {
    "url": "images/posts/2020/2/finally-have-a-nest,w_680.png",
    "revision": "c86d9406066538f63a504d1e0deecae4"
  },
  {
    "url": "index.html",
    "revision": "da1e0722661191fa727810e9b307b03c"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "89f11077e7bdb3d4dcb168e734ecd54e"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "a8efae32b64b6301a3fcec47a8d93096"
  },
  {
    "url": "logo.png",
    "revision": "a8efae32b64b6301a3fcec47a8d93096"
  },
  {
    "url": "photograph/banner-1xx.jpg",
    "revision": "2bf475a57aba0ba1dd3a7e285390cafb"
  },
  {
    "url": "photograph/banner-2xx.jpg",
    "revision": "553d69c1b6fa425def125b2afad09e01"
  },
  {
    "url": "photograph/banner-3xx.jpg",
    "revision": "94b7514b9ed260361d7070afc14d318b"
  },
  {
    "url": "photograph/blog-1x.png",
    "revision": "c11b7eeacf87ecba445150bfe00e96c4"
  },
  {
    "url": "photograph/blog-3.png",
    "revision": "d79d2cd337e5ae3fdc03856924c0ed63"
  },
  {
    "url": "photograph/blog-4x.png",
    "revision": "58ef8b2436337cd812be5ab6a5608015"
  },
  {
    "url": "photograph/quote-1.png",
    "revision": "b4adc60d66045f747d4e52d1fb211a75"
  },
  {
    "url": "photograph/quote-2.png",
    "revision": "68d6a7fee1d2887618e2a18fa23ba1ad"
  },
  {
    "url": "photograph/side-arrows.png",
    "revision": "bab52160ea0d10fb154bff6657689df8"
  },
  {
    "url": "photograph/social-sprit-bottom.png",
    "revision": "7361841cb56ba3c7ec048561b6c662d6"
  },
  {
    "url": "photograph/social-sprit.png",
    "revision": "ad84eea44d6006598269e12e4ab7fe96"
  },
  {
    "url": "posts/finally-have-a-nest.html",
    "revision": "5086cf864a7f1c54674712690dd0c224"
  },
  {
    "url": "posts/index.html",
    "revision": "abc979c9ef3d5b0a3b73d07959e30323"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "57072765f90466104b2b9c107e5291c8"
  },
  {
    "url": "social/image-social-share-en.png",
    "revision": "b13f8f7e79796052b8f83cf65c1b0695"
  },
  {
    "url": "social/image-social-share-zh.png",
    "revision": "61ac0f842db5b157678fa31b57be1bd4"
  },
  {
    "url": "social/image-social-share.png",
    "revision": "a59b074f08dd5b7e0ceb510e00c3b3d2"
  },
  {
    "url": "travel/index.html",
    "revision": "2b65bdac29c55466901974ac652901c8"
  },
  {
    "url": "watermark-logo.png",
    "revision": "4240e98a8008dee7317a4a5020f6437a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "8bd58db75159429e98e857e1d92e33d7"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "9c71ca24a1d20f26d7dd6e9bd2bc18c5"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "bfa939f23eec627d3910a5dffe26b3aa"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "d2eadb8816f6dcfd8be67dfc2388eab5"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "5f399409bd72156249bc1f88fbdacae0"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "c7f6e2bc5a143639c19eafaec10dff0f"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "5ffbcc56ba0ec48fe99e279694bc6817"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "ae35eb423162198831456333de4bdb1c"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "b2a4ef345dc8e083ca8fe833aa4e33d5"
  },
  {
    "url": "zh/index.html",
    "revision": "423281acccbfbbbd2688e2c339a4f9b5"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-shang-.html",
    "revision": "cde527bd8c692fe5207ad7fccb26de38"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-xia-.html",
    "revision": "d3348c4da811a7912ca8333234676ba4"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-zhong-.html",
    "revision": "478337effec255186c316192b77d4222"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "32574b7963a0ecb546a82eadd0cb3af6"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "95c89cd2a8eb2d1be8106f54558779e1"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "da0e78cb2466b48eb0b48f78d5596082"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "7aed1c37fb2469385d22a149ae0391c3"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "5c022fd7edef0e0ac9b2ae6fbc765016"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "2a8a9fd3b4e4fce463b7ad19024d607d"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "9f6798b9ca499473e0c8671f71f3fb64"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "e44bb6d70bb08bcc80b1df04119a197f"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "9f917dbe0a6d250e48f77864c0b2995f"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "5bc626da9b87523fd8e266821e586f6a"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "1e392c0d2cf0f8599ad686162e316e54"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "5582953566520c985b86a9544750f78c"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "4d7f0573905bbc61b1b942c2b8bddd8f"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "e993934c3ceeedc661e1b66bba32f4e2"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "02de056d766e4b622153742fb4dcece7"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "4459cf44c8b53279f77443cd4249b239"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "0f871f9d4a6c377bca30b11cbc18bc3c"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "2bf5727a77b1564b03c51cb93f4864ad"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "4de9d44ad73607828a5d7afd4856acf8"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "c3ea71466262c7cfa1eeb78cd7283637"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "7468c50291de249e556db8e560a09d5e"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "6fe40a278dda4a9e1dd3e6f7f9320613"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "d5400026c865644668e05e7964825d65"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "321218d6ddf7a1987a2165dbe35eaa91"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "9025d8c9fc7351e04ca7aec815e86eed"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "91667f9758ab43cc1a3d18887d967c55"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "2a646e6a0dd21f69d21a91cd064826d9"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "c99f95a2a707e15084c31ab76efad665"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "ec239e8fec505dcc55cf79d597a84cba"
  },
  {
    "url": "zh/posts/tong-guohtml-shu-xing-ke-gai-shan-yong-hu-de-shuang-chong-shen-fen-yan-zheng-ti-yan.html",
    "revision": "7631baeeb00d6f445e4000c80a9f161e"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "9c993b8e58536517e4a298d4941949dd"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "55604ee8b3c34c861e2f3b3a9a0d0652"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "d8999439aa7ace0c701a22255f4db303"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "5dcdac2908c2e3fc5034401e14140262"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "88cd5918e54e58d643a2c506d364622d"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "3d0f04576a4cd1be8161146657efa36f"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "2655a50fbba60f1893797c5673bd9248"
  },
  {
    "url": "zh/posts/yu-shan-dao.html",
    "revision": "05ae2429e8f5ce0ae48234a3e70b8481"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "de64fc46048268ae5365ee004e5cf1d5"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "c0a40218251b4ce3fe821aa5a723b9e9"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "06a11e399e91ef432a383141a505535c"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "befb8e16e41d672127a0a4d9534f7ed8"
  },
  {
    "url": "music/ding.mp3",
    "revision": "4dd02c4eddb635d48e39f920ac4beab4"
  },
  {
    "url": "music/elevator.mp3",
    "revision": "b0d9be6bf4c06142ff47790356c03d66"
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
