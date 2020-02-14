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
    "revision": "62d4ed58cd0a318b5eecf2fd337b05bd"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "35fc8cfbc73faf21c7808d653bea14c6"
  },
  {
    "url": "assets/css/0.styles.1a255c07.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.7509ba41.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.0adaaf41.css",
    "revision": "386da01274835ceaa4bb9c5aaba59137"
  },
  {
    "url": "assets/css/11.styles.89597856.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/12.styles.f582c862.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/13.styles.443d8904.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/14.styles.bb8694ec.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/15.styles.f608a162.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/16.styles.11f6f9cc.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/17.styles.5b21451e.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/18.styles.5aa11edf.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/19.styles.bfcd0017.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/2.styles.de94cd98.css",
    "revision": "bdc8a080bae6f23e3a0647ae023a7b6e"
  },
  {
    "url": "assets/css/20.styles.f2041e6c.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/21.styles.9d5222e4.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/22.styles.f8b63a0b.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/23.styles.5c0d55c6.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/24.styles.d189a04b.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/28.styles.ddec423e.css",
    "revision": "42ddc9bb6778818a2268b3bc468bd392"
  },
  {
    "url": "assets/css/3.styles.911b4edb.css",
    "revision": "9d0ab6d41a09d29d4de1250bd8291da3"
  },
  {
    "url": "assets/css/4.styles.bfddec90.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.e51a0712.css",
    "revision": "c4bdcd40485672eca04486d47727b0d8"
  },
  {
    "url": "assets/css/7.styles.5d6a6685.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.133c2aae.css",
    "revision": "6a67ddb596caf92ca4e360cb6d01cd16"
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
    "url": "assets/js/0.1a255c07.js",
    "revision": "873c63e1420ac6866dee3f41acaaded4"
  },
  {
    "url": "assets/js/1.7509ba41.js",
    "revision": "e23bf1ba2e59bbadc1cd02beb0e30592"
  },
  {
    "url": "assets/js/10.0adaaf41.js",
    "revision": "1b052d6c09bc34ec50bbb0ba84101c5f"
  },
  {
    "url": "assets/js/100.72815aaa.js",
    "revision": "96a83abdcf62c11e15d5e2fb85af922e"
  },
  {
    "url": "assets/js/11.89597856.js",
    "revision": "fee32aa41f2d3d406158d611f5227adb"
  },
  {
    "url": "assets/js/12.f582c862.js",
    "revision": "3610457cf041c51449f09aa8efa80094"
  },
  {
    "url": "assets/js/13.443d8904.js",
    "revision": "b03f98dc631b14f8a5a1afd3fbbbff29"
  },
  {
    "url": "assets/js/14.bb8694ec.js",
    "revision": "d86a9b79d2f0a77a4b0f2a286628f8e9"
  },
  {
    "url": "assets/js/15.f608a162.js",
    "revision": "750665130673336844d2b6c36333af42"
  },
  {
    "url": "assets/js/16.11f6f9cc.js",
    "revision": "270940fae73d252b7367c928ba9ce03a"
  },
  {
    "url": "assets/js/17.5b21451e.js",
    "revision": "fc6a4ac14a742a4e89a058d7d5c4e42f"
  },
  {
    "url": "assets/js/18.5aa11edf.js",
    "revision": "e04edf46ba41f3af7b6206473fff9847"
  },
  {
    "url": "assets/js/19.bfcd0017.js",
    "revision": "d798b6623cdb85a37b69283dd79ef8ee"
  },
  {
    "url": "assets/js/2.de94cd98.js",
    "revision": "a4d8c3954bf3a24a9ab95877a962ab8b"
  },
  {
    "url": "assets/js/20.f2041e6c.js",
    "revision": "9401e8c99d8e424008905dae54432d98"
  },
  {
    "url": "assets/js/21.9d5222e4.js",
    "revision": "d28ed42643ad82032d1cf00bc6ce77e6"
  },
  {
    "url": "assets/js/22.f8b63a0b.js",
    "revision": "59df55f1bf28c1714891c9d9a8df5a84"
  },
  {
    "url": "assets/js/23.5c0d55c6.js",
    "revision": "3c7c91a2b5ed5d5689f438e167d1c289"
  },
  {
    "url": "assets/js/24.d189a04b.js",
    "revision": "236488adfdaebc6a72722245a8481ec9"
  },
  {
    "url": "assets/js/25.9defe2f1.js",
    "revision": "4ebe3dc265b9596327e131f49108e4bc"
  },
  {
    "url": "assets/js/26.455195df.js",
    "revision": "31d74050df2bfb73d1bf45c5379bd0e5"
  },
  {
    "url": "assets/js/27.ede5d933.js",
    "revision": "cdd45105b2b172e78a0c8233b959ceb5"
  },
  {
    "url": "assets/js/28.ddec423e.js",
    "revision": "160741d26c09cd8dd64be905677b6052"
  },
  {
    "url": "assets/js/29.508b2e49.js",
    "revision": "65564d63e186706a49df58afb37b710b"
  },
  {
    "url": "assets/js/3.911b4edb.js",
    "revision": "52ce811347c090014617ded289b21faf"
  },
  {
    "url": "assets/js/30.97a5aafe.js",
    "revision": "e19ad77ae0c3e1381970c8f6f463406a"
  },
  {
    "url": "assets/js/31.81279497.js",
    "revision": "3c27c6ab0bc947de429125a62e724a95"
  },
  {
    "url": "assets/js/32.9e140ae2.js",
    "revision": "afc09b3b94c62b6c36a2745f9b821a97"
  },
  {
    "url": "assets/js/33.e6cafeee.js",
    "revision": "01278aa22ca7f693f68d63948fa76cb1"
  },
  {
    "url": "assets/js/34.6128806e.js",
    "revision": "e08598ab10b6f1f538ef3219515318a5"
  },
  {
    "url": "assets/js/35.1c8218dd.js",
    "revision": "0015183ae7aea74a750a24a54dff0875"
  },
  {
    "url": "assets/js/36.6c6dbdb5.js",
    "revision": "bed5c30781e55c4e7adcef8c2dfcd553"
  },
  {
    "url": "assets/js/37.790300a2.js",
    "revision": "528f9e91bf9000d6aab7346bc72af624"
  },
  {
    "url": "assets/js/38.c298e237.js",
    "revision": "ca68f705a288d1992baf41c1dbafba4b"
  },
  {
    "url": "assets/js/39.cd39e7e9.js",
    "revision": "c98d8266f4cbf753eefa954796e98e24"
  },
  {
    "url": "assets/js/4.bfddec90.js",
    "revision": "8f7ead6d06106ba64a91bef5ab5390be"
  },
  {
    "url": "assets/js/40.87711a13.js",
    "revision": "6205ae2136f471744c49aeb3df6376e4"
  },
  {
    "url": "assets/js/41.706ffe4b.js",
    "revision": "679f3caba13873a3e4ce745348e4e5df"
  },
  {
    "url": "assets/js/42.2aace049.js",
    "revision": "155ed4f38e502896b7e958db6826b077"
  },
  {
    "url": "assets/js/43.885fda49.js",
    "revision": "b2e4996c0ba52efbd29720963febf0b3"
  },
  {
    "url": "assets/js/44.81e0e54f.js",
    "revision": "c945721a58e8b860c63f7c0d925e3f0a"
  },
  {
    "url": "assets/js/45.05011f5f.js",
    "revision": "45dd44f760169b9ac74014e55a4db5bd"
  },
  {
    "url": "assets/js/46.71e0a9e2.js",
    "revision": "3c72d3317244af5bd7834686815ecb24"
  },
  {
    "url": "assets/js/47.6fe65fc1.js",
    "revision": "0e91488903a1b85e5141ea67ed495b31"
  },
  {
    "url": "assets/js/48.5f7a4f58.js",
    "revision": "a34695956fbacd0fa80bd4222b77c158"
  },
  {
    "url": "assets/js/49.d9bc5f7c.js",
    "revision": "71bda15bbe1ddda35655c1904d4c6a75"
  },
  {
    "url": "assets/js/5.a443cab5.js",
    "revision": "1925c06b347e1089af8c09448c44e282"
  },
  {
    "url": "assets/js/50.83ea165a.js",
    "revision": "c93d4f804a41c55b236977bd9a5920d7"
  },
  {
    "url": "assets/js/51.9ae37a4c.js",
    "revision": "ab7c94a3ad036fd528512bbbf16c47fe"
  },
  {
    "url": "assets/js/52.cad89578.js",
    "revision": "a4407440a8841d7a3c4c6a8e2ed19d50"
  },
  {
    "url": "assets/js/53.8265eafa.js",
    "revision": "7f366316a96be9ea074934618e5e97f1"
  },
  {
    "url": "assets/js/54.d38d3639.js",
    "revision": "a8190dbb062d1c8d43b7edf5b639bb0f"
  },
  {
    "url": "assets/js/55.4501fe33.js",
    "revision": "3d98b1b6596a13f40e132d7e9f8d8869"
  },
  {
    "url": "assets/js/56.d272488e.js",
    "revision": "5693939b4c4f4502eaf28a4a47ec4a5d"
  },
  {
    "url": "assets/js/57.3b772257.js",
    "revision": "01ed675a594ee0dffc8e675d7a04136a"
  },
  {
    "url": "assets/js/58.7b783907.js",
    "revision": "ffcac1a09bdbc26ef8aec59e97d7eb06"
  },
  {
    "url": "assets/js/59.bb91bf38.js",
    "revision": "8411c7fab8a90ab95db5b07ca8626865"
  },
  {
    "url": "assets/js/6.e51a0712.js",
    "revision": "793efa4b022c896c47ab7e2f73d01105"
  },
  {
    "url": "assets/js/60.32db3862.js",
    "revision": "a692a302cdc6b888e9b9054aa1921feb"
  },
  {
    "url": "assets/js/61.a697ed8b.js",
    "revision": "5e83ffbfd4c7e0945d9c1953431859a6"
  },
  {
    "url": "assets/js/62.1c2e869e.js",
    "revision": "cc6b8f9288502623980293aa911eae31"
  },
  {
    "url": "assets/js/63.0b8455bc.js",
    "revision": "7789a27b515cc43d25eb4d10f29b326d"
  },
  {
    "url": "assets/js/64.ebedec8d.js",
    "revision": "994314fd97a3f29a62f5b56d45b56d71"
  },
  {
    "url": "assets/js/65.cb004d43.js",
    "revision": "93a2e33d69ceb1832a2693154d11a57a"
  },
  {
    "url": "assets/js/66.4634fa72.js",
    "revision": "e25cfd7023b81e3469cbe439dbcc933d"
  },
  {
    "url": "assets/js/67.4c0f663b.js",
    "revision": "94b8e2b94f57691ebccdbc4edead1253"
  },
  {
    "url": "assets/js/68.237f9c77.js",
    "revision": "90a0945c53a7004c5264df09f2dbaaae"
  },
  {
    "url": "assets/js/69.10f6a9c2.js",
    "revision": "53713ce79213b15283e296aee241048c"
  },
  {
    "url": "assets/js/7.5d6a6685.js",
    "revision": "b617c299d1948c45c163c68a8fc8b5e2"
  },
  {
    "url": "assets/js/70.c2bbcad2.js",
    "revision": "10d25e8f48b107535f81f48b82bf5d2d"
  },
  {
    "url": "assets/js/71.ed2ee18e.js",
    "revision": "e787ac6d6002ec47704844633d945481"
  },
  {
    "url": "assets/js/72.6df92fc8.js",
    "revision": "2e0bb79af23066facd45bca289585311"
  },
  {
    "url": "assets/js/73.c77aaa9c.js",
    "revision": "604a5173eec03732f5eaa613e67ab652"
  },
  {
    "url": "assets/js/74.2d5d4639.js",
    "revision": "bde358aa579769746d8afae107b391fe"
  },
  {
    "url": "assets/js/75.c49de405.js",
    "revision": "f9789076f27add590db7a3980197e23f"
  },
  {
    "url": "assets/js/76.5c40ee45.js",
    "revision": "1c2567618e09da5ce1013e7d473da294"
  },
  {
    "url": "assets/js/77.ded4ed43.js",
    "revision": "2a90569cd0975d4b13f1a8027fb01c39"
  },
  {
    "url": "assets/js/78.e69a4d93.js",
    "revision": "e0ad38dc76bc4a31bb828a65fb0e4987"
  },
  {
    "url": "assets/js/79.27607054.js",
    "revision": "710b882713043b4ecbcf2ff27f8ead61"
  },
  {
    "url": "assets/js/80.c6d3dc17.js",
    "revision": "dc21bc3e07001c0017d5f869d5ef8648"
  },
  {
    "url": "assets/js/81.f5055b9d.js",
    "revision": "073ae791250c4d03c6b478b0a18a66e3"
  },
  {
    "url": "assets/js/82.ca3e01bd.js",
    "revision": "517492c4a063e63a9d1eb4a0f634335a"
  },
  {
    "url": "assets/js/83.7a871434.js",
    "revision": "5bb70ac7baa1adb4cb52ce8e2116b1da"
  },
  {
    "url": "assets/js/84.61be1922.js",
    "revision": "c25ed0fe6c65b89865846f509f7fd9a0"
  },
  {
    "url": "assets/js/85.a313f0ba.js",
    "revision": "1e9e7c166d6e5b56ef05d48920b8c432"
  },
  {
    "url": "assets/js/86.b235ebf8.js",
    "revision": "1ef2e4b354e414c70916444b8c50900c"
  },
  {
    "url": "assets/js/87.a7ed06f5.js",
    "revision": "ee7250cebf77bea44a19ac6497df9b94"
  },
  {
    "url": "assets/js/88.1dea6fb3.js",
    "revision": "36112f124fc814981f2723b09414232b"
  },
  {
    "url": "assets/js/89.5d10db0a.js",
    "revision": "96a7a610f91a8befbba13bc2af180cfd"
  },
  {
    "url": "assets/js/90.02ba770f.js",
    "revision": "83058d01ef01ea0e7f842fc5b93daed8"
  },
  {
    "url": "assets/js/91.62ab93f2.js",
    "revision": "c1e31b002a8d7c3c017191af4c728e02"
  },
  {
    "url": "assets/js/92.8e20169b.js",
    "revision": "c34d2d188f4e49d2d3aa8d1f6b7cbedb"
  },
  {
    "url": "assets/js/93.4faa0ef1.js",
    "revision": "78786926f9e1e7af840d761ee34eb7a0"
  },
  {
    "url": "assets/js/94.bc14231d.js",
    "revision": "c6bb16cd47a79898587ba109fc78c078"
  },
  {
    "url": "assets/js/95.27bcda5d.js",
    "revision": "25a0f89b5b54c6110aa3d240c974c064"
  },
  {
    "url": "assets/js/96.3c081112.js",
    "revision": "74452e768f510e5b096727808c765446"
  },
  {
    "url": "assets/js/97.f98976a9.js",
    "revision": "d908de8a188a3d00b2d143e7f81d4eb8"
  },
  {
    "url": "assets/js/98.ddb42436.js",
    "revision": "f63a341d1845c24d60b5b563fff44bbf"
  },
  {
    "url": "assets/js/99.4e107838.js",
    "revision": "86300aed16f045213de95814d7bd8fac"
  },
  {
    "url": "assets/js/app.133c2aae.js",
    "revision": "93155ec192c4d2aad46475b659115eea"
  },
  {
    "url": "assets/js/vendors~flowchart.66b0012f.js",
    "revision": "f15f6e3831f474d10c1a816039124eb1"
  },
  {
    "url": "authors/index.html",
    "revision": "b3171e74aebd273db2c49835e31e5c35"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "b8cc1fc951b53bb8a22d1719e9420c53"
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
    "revision": "563bdc94d36ba75d98faa35dae0fda26"
  },
  {
    "url": "categories/frontend.html",
    "revision": "4ba614457829d5fea9dbb8a0b3517d7d"
  },
  {
    "url": "categories/index.html",
    "revision": "7d539b5c562acbbc6264accf8d55bdb2"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "a8baee60f6e4b5ca5aa3a7b6eea85357"
  },
  {
    "url": "contact/index.html",
    "revision": "77a1e0055cacf24c75ed29843f96c6f3"
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
    "revision": "5e43021a9a9984166413790305d632be"
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
    "revision": "799174660ac64c622fe528fe8f9c0c4a"
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
    "revision": "038655d172e34f1c000c82d5e07669e2"
  },
  {
    "url": "posts/index.html",
    "revision": "3924765d9108571d56ec80af55463303"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "1876cbae8c32923f3ba7bc47c6834ef2"
  },
  {
    "url": "travel/index.html",
    "revision": "7db0b79df5b1b4a2967476ef040b1c2d"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "421a09e4248473bbde005e64a8ebb98d"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "cc5161e2831c376485f17d73b08a980d"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "d10a7184dab98514574a4d0f4ceb462d"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "f910134230b1b67ff899695d491b2b4d"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "2b43ce403684718a6be6a7b54127fad1"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "b4576f5112f23375a236de80d8be63d8"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "15c3fe07cb9cb022d8393631b14e5ce1"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "1aa29dd4335758458bda7d78f76e7d85"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "34d19d82ba0a998b2099fb62fc455219"
  },
  {
    "url": "zh/index.html",
    "revision": "aa4c1dc6c6714d6fb836ee3f3050906c"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "9f0fab65b96b72d5dd1830111da4503e"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "73c019458c5b8b4d19ce6e8f09b53e69"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "11324ecc34002760505d82452c93ec4b"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "d7615aaa2b0e8626b0c2276c3838a884"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "75c65a1a672b3824a0789b47252ffcf7"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "9c27180992937d635a87e695e47b2470"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "7a37d2d5888d5a8929cfc6bd3d04a6d5"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "cf6b2a6d4934c76c1e6279b3f9bb46d4"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "87feb8f646e37d817dd38bcc45ed42c6"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "e06916ebad84661eeeb405d0487f5eed"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "bb70b42bbb7fd58ecb51a2bc0b25408a"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "ba122fbc5064fd4f64641645c9b74ad3"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "61777139bbfdaf6bd8a4e272b5d8be85"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "70ae09ed72682b0998779505d7668eda"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "8e86c3fedf2565f8ea6558d926a41110"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "174cda72a625d1265373c06756efe2f6"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "7aabda62d9279144878ff59bfcb1f4a6"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "9230be92dd3849de0362b3fe49f41f9f"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "3a7ccbc947383d5fd9d78bd1bc1b1c5f"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "db8ed9254c1ead62586716c1d587e0c0"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "e7f08128b6173d41c5af37122a79991c"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "8fd986898adc1ffce414de0f2f2c9f9f"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "772523f7fc00cfa3be566dd0917448bd"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "a19891eca70bb3118f1a1087c6b6f086"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "2836f9b95cb056063105f1f8ba44c374"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "77b6389370c324e44e5ecbd98b749aa4"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "4de3d5b43a308b85cb0764976fe926e3"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "c84d5c8e9be86ffaf0d6ceeeaa46f58a"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "ff2e9eea6bade2f8abf6e12d9caa9856"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "f2c0071d903fb8acd80ef9ca61fa25ed"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "fc1c0dc791c9b7e9216b8ea6d2843937"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "1ac29c143c203962d43467265be0cdf4"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "f056e5c09ce870a8c02ec77f3f8b70f9"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "9b947d53cc52e5a9a3b88d2bc4e25967"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "7167de9ef385bd3be0e5c81d88049f3f"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "2aa10fdba38099382768795c340ecf8e"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "8f7e9adfa4c51d678674072895119ba4"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "9a9181903d98cc7f44aa9afdfd99e32b"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "b49b7439190847fb7507fe7274781ee5"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "0d1b2253bbdb029f05c587c5822e452b"
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
