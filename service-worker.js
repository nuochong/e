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
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "assets/css/0.styles.41464f92.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.16b4a0c6.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.1d80d298.css",
    "revision": "c1d016415691a599105549ad2e4df75d"
  },
  {
    "url": "assets/css/11.styles.b2bdc8b9.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "assets/css/12.styles.7d98a455.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/13.styles.67503c56.css",
    "revision": "86e463286683c49c2c08b770630cb28c"
  },
  {
    "url": "assets/css/14.styles.1bc04cb8.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/15.styles.0a0401fa.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "assets/css/16.styles.4a2ddef4.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "assets/css/17.styles.df321109.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/18.styles.5a0299da.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/19.styles.543ba2ad.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/2.styles.b39f55df.css",
    "revision": "cc806e876100d56caed897b53b9e3843"
  },
  {
    "url": "assets/css/20.styles.55412ee0.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/21.styles.cc2f7368.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/22.styles.65b1c430.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/23.styles.5fd44870.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/24.styles.cab3d2e1.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/25.styles.98c6638b.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/26.styles.93139342.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/27.styles.28a171a7.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/3.styles.51ac92ae.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "assets/css/31.styles.e93619cc.css",
    "revision": "68488905995da2a785500f9bb7753c21"
  },
  {
    "url": "assets/css/4.styles.2f249663.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.f3c2a9b1.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "assets/css/7.styles.3f7d0493.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.ba93e203.css",
    "revision": "92fad9bc157ea736763a8c76cb98d962"
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
    "url": "assets/js/0.41464f92.js",
    "revision": "68daebe752baec0908bae42f3b4a4a8c"
  },
  {
    "url": "assets/js/1.16b4a0c6.js",
    "revision": "1e8ca8cc9a51e1cf2d363a426a238c25"
  },
  {
    "url": "assets/js/10.1d80d298.js",
    "revision": "3903be42f30d0ddd037726e585669ff9"
  },
  {
    "url": "assets/js/100.78ee8744.js",
    "revision": "bb5e405ad71a4ad37c89701d7575d095"
  },
  {
    "url": "assets/js/101.e8456742.js",
    "revision": "8209c45022f138034932a04ae637f37d"
  },
  {
    "url": "assets/js/102.4fa41e84.js",
    "revision": "841c1098b3b30e3de04251fc2cbd07a5"
  },
  {
    "url": "assets/js/103.c67cd2af.js",
    "revision": "c461ea42e6657a7c8adb3aa3547be062"
  },
  {
    "url": "assets/js/104.08132f7f.js",
    "revision": "187056da9a691d6ce58dda6a22244cb4"
  },
  {
    "url": "assets/js/105.bd27e32d.js",
    "revision": "e3b7465c67e14e63f94007be9305f75a"
  },
  {
    "url": "assets/js/106.e92db3b6.js",
    "revision": "fe53c3c8478fd0e24f82385196562771"
  },
  {
    "url": "assets/js/107.890af280.js",
    "revision": "ed92276db4ab32f929b774373c90ea75"
  },
  {
    "url": "assets/js/108.44916b45.js",
    "revision": "d8f8b35510041de9acca92086ee308ab"
  },
  {
    "url": "assets/js/109.3154e773.js",
    "revision": "b0d04f60d4b46bec7adff650e8243966"
  },
  {
    "url": "assets/js/11.b2bdc8b9.js",
    "revision": "7b9e763b330ce2ab8680fc6f740d0d7f"
  },
  {
    "url": "assets/js/110.d429a4c6.js",
    "revision": "18eb5bf50f91015190572b5dd3ddb767"
  },
  {
    "url": "assets/js/111.6054c3ee.js",
    "revision": "caeaefc87a14d354c6d7da33e94c64da"
  },
  {
    "url": "assets/js/112.8652cf9c.js",
    "revision": "23117985c8817c78208d13c401611006"
  },
  {
    "url": "assets/js/113.aa0676bc.js",
    "revision": "c3a65ca9960f61e28815f7684527470a"
  },
  {
    "url": "assets/js/114.31e39267.js",
    "revision": "faf452285c0bbcd0d0ee62ef132d02f7"
  },
  {
    "url": "assets/js/115.9f727ad2.js",
    "revision": "ebea097241fff17ea4583276916c0cd2"
  },
  {
    "url": "assets/js/116.2402f53e.js",
    "revision": "886424b49c4659c6dfc00c5a483a874c"
  },
  {
    "url": "assets/js/117.64c79ff5.js",
    "revision": "eb9c6069e6108eb72aa2dbc82b992acb"
  },
  {
    "url": "assets/js/118.baca9ef9.js",
    "revision": "09f06a0ddb2b8113a2cee43fd58074ff"
  },
  {
    "url": "assets/js/119.64cb5d28.js",
    "revision": "74dcfa339a31e6da98ef8e8eb3dcc46b"
  },
  {
    "url": "assets/js/12.7d98a455.js",
    "revision": "9cdf4bda6d7e2ba7cd8233bd141d78cd"
  },
  {
    "url": "assets/js/120.78950571.js",
    "revision": "ce34bd6f36e262ff69eb6e8b68d4e444"
  },
  {
    "url": "assets/js/121.f2705aa7.js",
    "revision": "ed912719e0e9e0e2f5e7603bc46b1ef6"
  },
  {
    "url": "assets/js/122.29886a34.js",
    "revision": "b28edeeffad91b4715b18d7a2826d252"
  },
  {
    "url": "assets/js/123.aedf0432.js",
    "revision": "b3923f3737160f121d019d25a6c2050d"
  },
  {
    "url": "assets/js/124.b6e966b1.js",
    "revision": "3628940cf0cd774c2687450e70a5c48b"
  },
  {
    "url": "assets/js/125.541dc7ef.js",
    "revision": "4b2fab9c146affcf6dbe5862fe01614f"
  },
  {
    "url": "assets/js/126.f5883f3c.js",
    "revision": "80c0e11f3670dcbce7618454ca396249"
  },
  {
    "url": "assets/js/127.19d17204.js",
    "revision": "6a0f800d48a9be6afd44403c5de3532f"
  },
  {
    "url": "assets/js/13.67503c56.js",
    "revision": "a417f2cab836f43fa61a29b67373a69b"
  },
  {
    "url": "assets/js/14.1bc04cb8.js",
    "revision": "d54915c6c8dd5a2abc222b667ab8efbb"
  },
  {
    "url": "assets/js/15.0a0401fa.js",
    "revision": "8a2ce08b289e8087b82f29ed8891555b"
  },
  {
    "url": "assets/js/16.4a2ddef4.js",
    "revision": "1b28d09d11694bb97dec6c13f81b9b33"
  },
  {
    "url": "assets/js/17.df321109.js",
    "revision": "a6ed64369f47f8d12111e52201866545"
  },
  {
    "url": "assets/js/18.5a0299da.js",
    "revision": "aacfe7aa92d65aa13ac4cedcd5399d56"
  },
  {
    "url": "assets/js/19.543ba2ad.js",
    "revision": "5a4578354aaae481a04a2246c5c1495a"
  },
  {
    "url": "assets/js/2.b39f55df.js",
    "revision": "79fa53cbe0d19b313549fe51e1e6b56a"
  },
  {
    "url": "assets/js/20.55412ee0.js",
    "revision": "2317a0c6da1fb13ef4e6aac6f9156250"
  },
  {
    "url": "assets/js/21.cc2f7368.js",
    "revision": "c8bd2c0112a5f4171cb58d1df43d6956"
  },
  {
    "url": "assets/js/22.65b1c430.js",
    "revision": "5c3b2ac58d28b0e50c7e71bada5a6cc6"
  },
  {
    "url": "assets/js/23.5fd44870.js",
    "revision": "0b7cba2d27a44d418eeccfe91b245c58"
  },
  {
    "url": "assets/js/24.cab3d2e1.js",
    "revision": "eb44f762aebd1159da9a74766f2428a6"
  },
  {
    "url": "assets/js/25.98c6638b.js",
    "revision": "e20fc3cc7cc4d7e835f0e4ebf70f3d02"
  },
  {
    "url": "assets/js/26.93139342.js",
    "revision": "d60dd1cab352efa5684f6eaad152b52e"
  },
  {
    "url": "assets/js/27.28a171a7.js",
    "revision": "cbb9f5819542784d087f57b9613a2174"
  },
  {
    "url": "assets/js/28.efde86dc.js",
    "revision": "a3dd51f13444e39525f03aa661df2d39"
  },
  {
    "url": "assets/js/29.67ae2ae3.js",
    "revision": "784a4594dfa15bf838c3c3a8b3c4ea2b"
  },
  {
    "url": "assets/js/3.51ac92ae.js",
    "revision": "f4a44e19b1149deabb1c5c6f2b52411e"
  },
  {
    "url": "assets/js/30.eca01ebc.js",
    "revision": "ea4e20772f644d792ef567ee6ed326a3"
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
    "url": "assets/js/33.d071267b.js",
    "revision": "98c170213b642e6d682297d76cd89b1f"
  },
  {
    "url": "assets/js/34.f88959d2.js",
    "revision": "77492c3bea29c53314c54bcf00d156ca"
  },
  {
    "url": "assets/js/35.09b95ab6.js",
    "revision": "3afccf86a909f51270f008f775b3a1c2"
  },
  {
    "url": "assets/js/36.cc542cee.js",
    "revision": "f8844705970b09729cc2550836a86cc3"
  },
  {
    "url": "assets/js/37.cd5e07c9.js",
    "revision": "98721465060b2896445a8a0116e79037"
  },
  {
    "url": "assets/js/38.5a304682.js",
    "revision": "1d383482bf9928b3a43e9ee4d75b4523"
  },
  {
    "url": "assets/js/39.8259b633.js",
    "revision": "c700835123a6bfbff6db075ea2855ca2"
  },
  {
    "url": "assets/js/4.2f249663.js",
    "revision": "3d0b228c715639fbe030940892a5e459"
  },
  {
    "url": "assets/js/40.79295639.js",
    "revision": "8de71afbcc5cbbe1b94b5d47ebfd9d0e"
  },
  {
    "url": "assets/js/41.617d2315.js",
    "revision": "2a8e277fde650156ce923b4b1cc3ac06"
  },
  {
    "url": "assets/js/42.458ba766.js",
    "revision": "e8ab0e3e25bfbc5951db214fb7184026"
  },
  {
    "url": "assets/js/43.1a27967c.js",
    "revision": "25b5a25bccccab9b8b502cd02e4ec026"
  },
  {
    "url": "assets/js/44.5912f23f.js",
    "revision": "ece07bb03db575e1e47d287f2ffb6b6d"
  },
  {
    "url": "assets/js/45.bc38317e.js",
    "revision": "862a9fda52657a74988789ebc3e20294"
  },
  {
    "url": "assets/js/46.3ff9acc4.js",
    "revision": "8c7291dbef3334e108a23cae16db547a"
  },
  {
    "url": "assets/js/47.855927c4.js",
    "revision": "7d1688116b2fcbfcffe88d60f8fd0010"
  },
  {
    "url": "assets/js/48.f5430d7e.js",
    "revision": "2dcc4b3a5b5711530a6e0f644ebb253b"
  },
  {
    "url": "assets/js/49.d01f4107.js",
    "revision": "4d4a379038ec9d2a1fb7b3a2d3998ece"
  },
  {
    "url": "assets/js/5.fff1bfae.js",
    "revision": "96642f5f8073aa8ca628e3769ea966bb"
  },
  {
    "url": "assets/js/50.aecb2d11.js",
    "revision": "95780a80b65577e242f065673c0a51ac"
  },
  {
    "url": "assets/js/51.0b59e8cd.js",
    "revision": "33a3833f21cf26644f405b0bf2149e34"
  },
  {
    "url": "assets/js/52.ffd6236f.js",
    "revision": "6ace60ba03d1a8f5a7a1426d6ae19df2"
  },
  {
    "url": "assets/js/53.9c231c6b.js",
    "revision": "72dc54b48219e104d2b528b99d0c0717"
  },
  {
    "url": "assets/js/54.608799c6.js",
    "revision": "edc227752ae4ffd85d67ffed6d057aa6"
  },
  {
    "url": "assets/js/55.a6db3af4.js",
    "revision": "13eb33653ecb6bc25e471cd42bcb732b"
  },
  {
    "url": "assets/js/56.f76a63bc.js",
    "revision": "5c0d8dc9e72438adbc7aea2d24991ef0"
  },
  {
    "url": "assets/js/57.36ad9c8c.js",
    "revision": "093c7bb0f46d53a3c858b134f688812e"
  },
  {
    "url": "assets/js/58.49532e37.js",
    "revision": "60bd430f5c0c7ebcce5a87672925d066"
  },
  {
    "url": "assets/js/59.3ea99394.js",
    "revision": "0d171dd51035b9c7c020ab5191b4b20b"
  },
  {
    "url": "assets/js/6.f3c2a9b1.js",
    "revision": "d11222d812adcdd08e17deab12b11fd8"
  },
  {
    "url": "assets/js/60.0afb48da.js",
    "revision": "93eac5b5fb9af98334fdac9ab3347842"
  },
  {
    "url": "assets/js/61.7d637c3b.js",
    "revision": "9921b58ff2af324032833140ac4946ae"
  },
  {
    "url": "assets/js/62.36efe174.js",
    "revision": "461ded379c20137c19099d12e566887f"
  },
  {
    "url": "assets/js/63.f465f858.js",
    "revision": "fe4546862c2cbb912ba12967d945a067"
  },
  {
    "url": "assets/js/64.44511a7e.js",
    "revision": "b1fb16836e36f72131211cf057be15bd"
  },
  {
    "url": "assets/js/65.42b93d86.js",
    "revision": "25da4c1922a24a380905bed6c40cdd51"
  },
  {
    "url": "assets/js/66.abd37d02.js",
    "revision": "696d93a1ad1b6c32312eddc7ba72f82a"
  },
  {
    "url": "assets/js/67.67e1be82.js",
    "revision": "a29beb733988de7240b0be4f98c21c9f"
  },
  {
    "url": "assets/js/68.0b06d7c1.js",
    "revision": "27f10437428723e7586a8e2dab2fa607"
  },
  {
    "url": "assets/js/69.df4685ea.js",
    "revision": "6e17614da276e0f3498535d21ba19a96"
  },
  {
    "url": "assets/js/7.3f7d0493.js",
    "revision": "ac30dfdf735844901cb26f8d4bac2bc9"
  },
  {
    "url": "assets/js/70.4aba3b11.js",
    "revision": "59b404a47dece906a358843977de77ca"
  },
  {
    "url": "assets/js/71.de5d5c73.js",
    "revision": "385fded4899afc821f942fe2708cbb62"
  },
  {
    "url": "assets/js/72.7f1ba235.js",
    "revision": "322d21f3151f6b06d0bf0fbc97464d8a"
  },
  {
    "url": "assets/js/73.6f90cd0e.js",
    "revision": "84e49fcbbd9fe6381ddfa49511351012"
  },
  {
    "url": "assets/js/74.07753326.js",
    "revision": "b4d2d5a247efeb1dbda64f96ffea9eca"
  },
  {
    "url": "assets/js/75.5151b29d.js",
    "revision": "919c895cc1a26f458f490cc90c7d5702"
  },
  {
    "url": "assets/js/76.0245a82b.js",
    "revision": "b842f6b2614b2f39e91d87f46b2a485c"
  },
  {
    "url": "assets/js/77.0248f73d.js",
    "revision": "78642b27581277274c006f50223bfdd0"
  },
  {
    "url": "assets/js/78.6f3789ca.js",
    "revision": "72891973438231d7d897cbd910925920"
  },
  {
    "url": "assets/js/79.524dfa74.js",
    "revision": "c7afc2d0c8c872ba7a5ac0088c6a4c07"
  },
  {
    "url": "assets/js/80.871e1afe.js",
    "revision": "793009f43fe4b849697ee366cfc9a4fe"
  },
  {
    "url": "assets/js/81.c9ae815a.js",
    "revision": "a60f976d2e49c04b75499af17cc02c78"
  },
  {
    "url": "assets/js/82.85931fed.js",
    "revision": "35245fedebb2a6e378b431b2d4e90bf8"
  },
  {
    "url": "assets/js/83.f4e64bf6.js",
    "revision": "afc378ffaf90733f0316fd8f4e9cc252"
  },
  {
    "url": "assets/js/84.ffb84c9e.js",
    "revision": "44f6ea5f17caab21ea87ce8e53d62044"
  },
  {
    "url": "assets/js/85.7f3b68c8.js",
    "revision": "5a075c7f7cb18f7ff7f36925e54c8833"
  },
  {
    "url": "assets/js/86.d3d9b0be.js",
    "revision": "19eee0f5d737178db2bce75b256193bb"
  },
  {
    "url": "assets/js/87.38e4dc80.js",
    "revision": "814c7d57e70fb6b93b7b0d47b8a8d1d2"
  },
  {
    "url": "assets/js/88.8a6a6f73.js",
    "revision": "dd3ec9af35b44ce662dc685d1b6100e3"
  },
  {
    "url": "assets/js/89.db9875e1.js",
    "revision": "13ecbb4e34cde7a0152476eaa3eaa846"
  },
  {
    "url": "assets/js/90.a24be9c8.js",
    "revision": "98462ad28fab98db0e39340c3d2480bc"
  },
  {
    "url": "assets/js/91.717a4fbe.js",
    "revision": "4a88c98a204e0176fa2e484dc99a0e08"
  },
  {
    "url": "assets/js/92.fdce477a.js",
    "revision": "a72339e438c145a7fce60a330d3153ba"
  },
  {
    "url": "assets/js/93.3e5b4bed.js",
    "revision": "433b4a19d00aa4b1ddcc6988102d1f44"
  },
  {
    "url": "assets/js/94.29cbe820.js",
    "revision": "2d3be9abfde523028f11a4ff66c789b2"
  },
  {
    "url": "assets/js/95.b2a6959d.js",
    "revision": "5e1a5c727b3ea0b82caf2a5a34fc8786"
  },
  {
    "url": "assets/js/96.af875fe8.js",
    "revision": "ed5efa97fc814648212ccd746b4e6eaf"
  },
  {
    "url": "assets/js/97.3470b4c3.js",
    "revision": "ec7cfd95b927cb500cc1af2f808fa18a"
  },
  {
    "url": "assets/js/98.329f40fe.js",
    "revision": "f8a5173e956fe19ca32c80fc5701f52b"
  },
  {
    "url": "assets/js/99.34aff29e.js",
    "revision": "f7065de2231a3d44a0ce13ac20d4ee73"
  },
  {
    "url": "assets/js/app.ba93e203.js",
    "revision": "fe8a401d3de91b8126ec3c7a609d2808"
  },
  {
    "url": "assets/js/vendors~flowchart.ec2b4b60.js",
    "revision": "1345b72bb80f6d0c171d01b382cb35a5"
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
    "url": "logo/fallback.png",
    "revision": "30b3fbf300209144862e9ff08c564168"
  },
  {
    "url": "logo/ktquez-play-logo.png",
    "revision": "89f11077e7bdb3d4dcb168e734ecd54e"
  },
  {
    "url": "logo/ktquez-play-logo@2x.png",
    "revision": "a8efae32b64b6301a3fcec47a8d93096"
  },
  {
    "url": "logo/logo.png",
    "revision": "a8efae32b64b6301a3fcec47a8d93096"
  },
  {
    "url": "logo/watermark-logo.png",
    "revision": "4240e98a8008dee7317a4a5020f6437a"
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
    "url": "music/ding.mp3",
    "revision": "4dd02c4eddb635d48e39f920ac4beab4"
  },
  {
    "url": "music/elevator.mp3",
    "revision": "a41b4d171e7c3f51998da1601d833a53"
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
