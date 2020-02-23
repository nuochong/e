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
    "revision": "f67c66d1d6b0b7035390ab674855dcbc"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "1203d0aa08404db9988cd7b4dadd42ac"
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
    "url": "assets/css/13.styles.a8fa6d11.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/14.styles.90026e01.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/15.styles.19b89728.css",
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
    "url": "assets/css/styles.bf3335b5.css",
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
    "url": "assets/js/13.a8fa6d11.js",
    "revision": "424a4ad7bb6e4506875522bd733f57e5"
  },
  {
    "url": "assets/js/14.90026e01.js",
    "revision": "bae380e6ed07fe51a2cfa5055e973267"
  },
  {
    "url": "assets/js/15.19b89728.js",
    "revision": "085b90b944bc0dbcc536debce3597aac"
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
    "url": "assets/js/34.9ce468cf.js",
    "revision": "54bcdca9609882f58c123110bf0066cf"
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
    "url": "assets/js/47.d7f33d94.js",
    "revision": "40eba7fda0b261ee1c2029af7b1f1356"
  },
  {
    "url": "assets/js/48.196bd176.js",
    "revision": "df01c99b14a541d6022f3c0dbe365aa3"
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
    "url": "assets/js/66.5f9e931d.js",
    "revision": "2c06bd7169fae45f294da5f42fa36adb"
  },
  {
    "url": "assets/js/67.356e1492.js",
    "revision": "398f82ea0c45f293c0326e1a8410a092"
  },
  {
    "url": "assets/js/68.50113fe4.js",
    "revision": "9b68bc7724df2a16787809952bc205be"
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
    "url": "assets/js/70.2496381d.js",
    "revision": "b7d74ed8b9fe04aad7e8099d1036f5e6"
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
    "revision": "1747c0b72aacaa5e4348a6d3935360de"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "209a950d135bba8a09321a3c0a0f9b5b"
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
    "revision": "094855d8590145a4d9e665f4db20a880"
  },
  {
    "url": "categories/frontend.html",
    "revision": "89ea4fd333d400bf548d3289a3647d4d"
  },
  {
    "url": "categories/index.html",
    "revision": "6d01f4b9da84eb2ce1e0c2708a51e9b4"
  },
  {
    "url": "comments/index.html",
    "revision": "18d7275dcfc3ae6e9294a49e722a259d"
  },
  {
    "url": "contact/index.html",
    "revision": "65162c24a076cfeae324f19f109a7549"
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
    "revision": "e6a53db306cb1f629725f476a19c2de4"
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
    "revision": "b94d7cae0188edf245df36df8a3e0ddc"
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
    "revision": "41434ffc7ae6f4a2bb3b986bb3b1055a"
  },
  {
    "url": "posts/index.html",
    "revision": "a0aecf15f97a088b2a30f59a33a867d5"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "ae37d4bf987bd3fdc9794a42b4da4fe0"
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
    "revision": "4ce50bd3cd39c08a1d5faa40693c5eeb"
  },
  {
    "url": "watermark-logo.png",
    "revision": "4240e98a8008dee7317a4a5020f6437a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "248dc4e6ab0093976d75516b4d11e572"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "7ba30791ba915321270e17148f5bf736"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "6b5c937a93740e7311a8c9bbab4eb7a6"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "bb6a4ce4c68d7a4f4a2025218a734752"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "3a3f5340cc757c51801195cddad90035"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "2bd9d25e7f7617cea5dc882961e5f336"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "79cae042cf97272bc33ab7e6e9519725"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "f8fa9672d76974df5d511b78b6e7617d"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "e01e54eace3acb7b63c0005186e8ffaf"
  },
  {
    "url": "zh/index.html",
    "revision": "75ddefad86bf95fed2ffb7ef35b6cc31"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-shang-.html",
    "revision": "4f4e87bdce2144b23fb81ad45b173a33"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-xia-.html",
    "revision": "31eb4a0d9f1e0d15821cb696dfb54a30"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-zhong-.html",
    "revision": "113b62a119c68bfa2004dcf4bffc3ac8"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "4bd44f50166c175e4c0936120fbffa0a"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "74a53c921e2a87b9bc56a25f6cab7543"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "1bff64d59550d1a8577d170c1575e8db"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "2aba4607e570abc2bc1f3fcbcce226c1"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "849dc27ce48e0e17554abcb012370c26"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "a8c7ebe24b4a90b76d78a861effee17a"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "96731619316da4d4f16230ae9a214186"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "88be202db45f07ed19fcb0aef6fb1f1b"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "d0263f49386114cf9fa74430ae0f19c9"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "99002403d955809a17f9b9679ea7a482"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "733f1e7fb9c2e2a8dd185ddd3b97efd7"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "c260de4e937705e9f1fae8380c8a01a4"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "b3a71ba5b8c3ec363104a95912332f52"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "865acd7b8be1c27ac7befedc9415587b"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "8373e6daa386144a3f39f62ed380047e"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "e400626d2f1b8089ec8922b4ae426c1b"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "39fc75e9c8b729a741a271c0ffbbaa23"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "498d027e8adf8f587e93b6feaca83272"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "0114491afafa8296afda703e23938695"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "024fda61fdd2ac5734e30539f78763d8"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "eaff26d27daace16291ec18b354fe9aa"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "d741c375d78dce5ebb427272dc96c04d"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "66689062c511a601f70d0d2dc54ef288"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "e32f8c8c14407d1c345777e431e81845"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "1f3699cb52ff037068b423ddf8319cb5"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "383dc84af67aeb4973e39ef6b86569f0"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "b6de2e6c60614129e66c8c9edf489ae7"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "c089d865796b25528aa88e492873262a"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "83b6355d8c173c294ec71296bbe5f48a"
  },
  {
    "url": "zh/posts/tong-guohtml-shu-xing-ke-gai-shan-yong-hu-de-shuang-chong-shen-fen-yan-zheng-ti-yan.html",
    "revision": "aa69201b3a883d2193b6d24c443410ab"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "ade714cf0783f5583b383e140973887c"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "30ac4446c7a63ddd0db0c2fa74b69420"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "0b6cf403acd06af6c4e5ca10def682b5"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "3c4adfddfb609358829225548b49ac67"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "9947db69ffa9741e37851d90fbf96ee1"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "b132e82ee38b7c346a7c512929fc49e6"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "cf95c7d8de1c42f36bc01744721cae47"
  },
  {
    "url": "zh/posts/yu-shan-dao.html",
    "revision": "ced964f92e3bd27e992ffb3deecd4d29"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "3c65c56624a60929ca36c13fddcf18e5"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "44ebdd385fac605bde5d567fe6d9f210"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "1cba4b09090aae209fe74c2575078016"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "cb7d6f6274f8b375670025d2602aa3bf"
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
