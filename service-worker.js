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
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/0.styles.223b3c77.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/1.styles.cfd96a6f.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/10.styles.cbc94126.css",
    "revision": "09bce7ebeb8b278e641f8e358307294a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/11.styles.10cf89b8.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/12.styles.c28042c6.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/13.styles.50d62fe7.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/14.styles.03da9c95.css",
    "revision": "86e463286683c49c2c08b770630cb28c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/15.styles.72fb122c.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/16.styles.0925d81d.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/17.styles.a64042ba.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/18.styles.5d3efb7f.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/19.styles.8565d381.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/2.styles.c8ede7fb.css",
    "revision": "cc806e876100d56caed897b53b9e3843"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/20.styles.f0397513.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/21.styles.89878bb6.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/22.styles.93e2e1a6.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/23.styles.382764fe.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/24.styles.0effd0d3.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/25.styles.8ea9b951.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/26.styles.bb9eb929.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/27.styles.33aed88f.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/3.styles.b17d2b51.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/31.styles.e8973f5c.css",
    "revision": "e2e6c6c2c34718ae31f0bf26ae234e64"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/4.styles.cf737a9c.css",
    "revision": "bd33d9448b225cff24ecb4995c9cb6bf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/6.styles.651742e3.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/7.styles.9e97ad61.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/css/styles.a9d4ba55.css",
    "revision": "29dbde21b2b53dddc750e484a8bb565a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_AMS-Regular.07173fb7.woff",
    "revision": "07173fb77d2ee655811499d40c8388e7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Fraktur-Bold.bc421258.woff",
    "revision": "bc42125861bd5bfc8686deeb612dcbb3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Fraktur-Regular.b80e08d5.woff",
    "revision": "b80e08d5a79acbd1fafb1ca6f3515664"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Main-Bold.c9423d5d.woff",
    "revision": "c9423d5dc9d82a38ca215f74e9cdd9f2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Main-Italic.7e83626b.woff",
    "revision": "7e83626ba8bf2d20dc41565f1e6d0afc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Main-Regular.9995de47.woff",
    "revision": "9995de4787f908d8237dba7007f6c3fe"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Math-BoldItalic.77dbcee3.woff",
    "revision": "77dbcee3c3d9a82a0c04a4ae7992b895"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Math-Italic.5589d1a8.woff",
    "revision": "5589d1a8fc62be6613020ef2fa13e410"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_SansSerif-Bold.07281897.woff",
    "revision": "07281897a98a61c3733e1670f82a9fd5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_SansSerif-Italic.3d580bd5.woff",
    "revision": "3d580bd561716bfb1f0b4fdd7063a802"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_SansSerif-Regular.bc3af04f.woff",
    "revision": "bc3af04f9a671fcabd6498042c57478f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Script-Regular.4c74e33b.woff",
    "revision": "4c74e33b0feb1fdbda49403a5e7ed604"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/MathJax_Typewriter-Regular.72815766.woff",
    "revision": "72815766b08ca24d4d29ad1f5d4ecb45"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/nuochong.62dd1db9.ttf",
    "revision": "62dd1db92021295bdb2805e95b02e476"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/nuochong.79e4088b.eot",
    "revision": "79e4088be0be8c6300e32b62524ee2f4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/fonts/nuochong.e502b610.woff",
    "revision": "e502b6101ed056d1ea71b8061f11cda0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/01-small.a7b63d7c.jpg",
    "revision": "a7b63d7cd3692369a7ce954f5d391a0b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/01.42551915.jpg",
    "revision": "425519157db3792e7eecd471f517c500"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/02-small.d11f548f.jpg",
    "revision": "d11f548fab0753dd23028cf9a82b0c65"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/02.018f96d6.jpg",
    "revision": "018f96d6bda6d3444ede2d7f563f55eb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/03-small.3eae93c6.jpg",
    "revision": "3eae93c619f6332b1e63534bacc3138f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/03.cdc702ef.jpg",
    "revision": "cdc702ef13c0875812d718887d32a8ff"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/04-small.1228eaa7.jpg",
    "revision": "1228eaa786deea100720090efc736378"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/04.56a7d567.jpg",
    "revision": "56a7d5673426d52314d7e7144add9e52"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/05-small.2b960291.jpg",
    "revision": "2b960291dfdbbe7324ee94c1b71f9e0f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/05.f97f7861.jpg",
    "revision": "f97f78611d6227a6d6c98e2190bb0d6d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/06-small.eb8c4b4c.jpg",
    "revision": "eb8c4b4cb30f78ff1e17a00cfb94de6b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/06.d960eea9.jpg",
    "revision": "d960eea99450afc31c4e389a1c8ca73e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/07-small.615dc1d2.jpg",
    "revision": "615dc1d2c6da87177d49f35ece84be17"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/07.da789016.jpg",
    "revision": "da789016360cc226720b74c846f51b46"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/08-small.44a2660b.jpg",
    "revision": "44a2660b1c73e7ac9d8d131c412d3c61"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/08.9a818f79.jpg",
    "revision": "9a818f793ace8b40edfc94de2cd143ee"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/09-small.80b6716c.jpg",
    "revision": "80b6716c83e2a2f02a5fe6947743abb8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/09.a2b2c77a.jpg",
    "revision": "a2b2c77ac2f3ab8f9c88fbcb5c1e502c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-1.04ed6c2b.jpg",
    "revision": "04ed6c2b24cd443df2edb8f9536e1a00"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-1.cca6f9b2.jpg",
    "revision": "cca6f9b2ac0a85fcdb348cf14d8530a9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-2.0d03009b.jpg",
    "revision": "0d03009b6db7d20fd95ddd1e535c6baa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-2.4ffd7515.jpg",
    "revision": "4ffd75154b8dd634b5f537753a3e7a54"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-3.14b201b5.jpg",
    "revision": "14b201b5ef3c25c55d1a5465fa89af24"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-3.5ae82fbd.jpg",
    "revision": "5ae82fbdc3b51b49239ddf2e93b9ec6d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-4.e4e485cc.jpg",
    "revision": "e4e485cc75367a8e6ba846b8f7bfd22e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-5.5c7fe539.jpg",
    "revision": "5c7fe53928473bc45b6d155d52c3fe40"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-5.f512d6af.jpg",
    "revision": "f512d6af493c26b648bc710d3da151ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-6.48bf56c0.jpg",
    "revision": "48bf56c06b2929dd0a2f449072c38327"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-6.cae213a2.jpg",
    "revision": "cae213a23a60db461b2e4e842a6e50dc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-7.0c362fe4.jpg",
    "revision": "0c362fe4b42ecd68f46fe83fe8694e7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-7.3a49e43c.jpg",
    "revision": "3a49e43cd5f030d9ee5aedc6922e2cdf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-8.06c9fe01.jpg",
    "revision": "06c9fe0163a08a87925b318aa55938c9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/1-8.1a1c8fc6.jpg",
    "revision": "1a1c8fc6fb566ca99c91cd9366dab4e1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/10-small.77f3204b.jpg",
    "revision": "77f3204b08ea0c7a76126fb1ebac798b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/10.689f71f4.jpg",
    "revision": "689f71f4448ab26e6d298298eb7297d7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/11-small.33d71e0a.jpg",
    "revision": "33d71e0a3719b666f859446ba92166c8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/11.643b78c6.jpg",
    "revision": "643b78c60e95897f3b2673a0195c8378"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/12-small.c16dd9a7.jpg",
    "revision": "c16dd9a75e047fcc1f38006193cbb270"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/12.fe31abc8.jpg",
    "revision": "fe31abc86edd516f83722c71785e0261"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/13-small.481fb760.jpg",
    "revision": "481fb760fca770be1e8d78f48a708c5f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/13.9d044541.jpg",
    "revision": "9d04454158b57171c61d9100c6a267f2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/14-small.dbb54130.jpg",
    "revision": "dbb54130c53d7ac88b28b6cdb2b4ea04"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/14.a436304c.jpg",
    "revision": "a436304c7db7c5910c1941b964132b51"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/15-small.4414ad5a.jpg",
    "revision": "4414ad5a60b2ddb92a1cf79cd28136f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/15.81545084.jpg",
    "revision": "81545084257ee04b9d2a9241cb5c36ae"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/16-small.955ce5db.jpg",
    "revision": "955ce5dbebddbe33b807dbd24f11d067"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/16.d60bfcd6.jpg",
    "revision": "d60bfcd659068bab13b14383de7166ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/17-small.73f35009.jpg",
    "revision": "73f35009cb91dce2354528a5f23d1080"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/17.53e5ec88.jpg",
    "revision": "53e5ec8852e790d5c4f216118cc83685"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-1.4cef7f3f.jpg",
    "revision": "4cef7f3f35a6d30dae3a2d06ee94ccb4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-1.76e5b4ae.jpg",
    "revision": "76e5b4ae72849a943d2ba95aa672d481"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-1.d9f1f056.jpg",
    "revision": "d9f1f0567375fc5e75a9f2e8842522b8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-1.ec07d37b.jpg",
    "revision": "ec07d37b598e3371c72fd7ca558d822d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-1.ffb52990.jpg",
    "revision": "ffb529903d395a671e910d78dee015cc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-2.490a7acc.jpg",
    "revision": "490a7acc98b7e9eef5a2a5502cd229f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-2.73667c08.jpg",
    "revision": "73667c0834d8756cf1781e01745ef365"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-2.895cccaa.jpg",
    "revision": "895cccaad19398f202f646811fffc461"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-2.de5bf508.jpg",
    "revision": "de5bf508a5a404e9f890d67fc4b59a32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-2.f4834dce.jpg",
    "revision": "f4834dce63f19a0bbdf81d423c3e0e45"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-3.11840f95.jpg",
    "revision": "11840f953a7f9fec8efbe0679901e80a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-3.71de3f63.jpg",
    "revision": "71de3f63181b815c7f390158402f9e7f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-3.8a199b32.jpg",
    "revision": "8a199b32c3126988e4a963b60050b0e3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-3.e3618fa9.jpg",
    "revision": "e3618fa962300c00c3c68fbbd2bc9b8b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-4.05b7896a.jpg",
    "revision": "05b7896a09aaccdcff2cef671fe8050e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-4.1a6787d1.jpg",
    "revision": "1a6787d187bbff341166de28e6c0f858"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-4.2461a0ac.jpg",
    "revision": "2461a0accc6a1e87113329f730b6ace8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-4.b0b80e5e.jpg",
    "revision": "b0b80e5efb28676cfc2d92b4d1aad625"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-4.f14a424a.jpg",
    "revision": "f14a424af161aef0f90de93f4e650b7f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2-small.578cc7b2.jpg",
    "revision": "578cc7b21b9b2cb9b4f083b02a1c7b19"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/2.48baf7c9.jpg",
    "revision": "48baf7c915f4fe6ba6151caca356dcb8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_102917.cdd629bf.jpg",
    "revision": "cdd629bf8022629d5bb2e1ec2afeb605"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_124106.7e3512ad.jpg",
    "revision": "7e3512adf0c935ffbbd28325b24912ef"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_153600_HDR.90daba5e.jpg",
    "revision": "90daba5e97fd4f8128c98059d7b5fa59"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_154151_HDR.5def0f7c.jpg",
    "revision": "5def0f7c988f49e94f3f633401e19d5c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_154512_HDR.d97d9086.jpg",
    "revision": "d97d90865c5c36521daa5ae351fbb11a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_154524_HDR.5d4151bc.jpg",
    "revision": "5d4151bc45388455b890dd3456227321"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_155135_HDR.bba674d6.jpg",
    "revision": "bba674d6ff1e190058e4c167a6764895"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_155216_HDR.ececfffa.jpg",
    "revision": "ececfffaf567a47e39ee1a066a6f2e8c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_155617_HDR.637551ba.jpg",
    "revision": "637551ba76ed5788522a55ee000e286c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_160207_HDR.3cce6e39.jpg",
    "revision": "3cce6e399a9ce1344e841283cf20b2ce"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_161833_HDR.c8b9df6b.jpg",
    "revision": "c8b9df6b376c996315b1fc516673b15e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_162152_HDR.a4842c23.jpg",
    "revision": "a4842c23b79f750ef8ce8c344ca37e50"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161002_162310_HDR.642b5d25.jpg",
    "revision": "642b5d258b794657aef0d7b874da7702"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161003_073445_HDR.ca6b9f78.jpg",
    "revision": "ca6b9f783c05cd8b4354774c8e935688"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161003_075709_HDR.bef797a4.jpg",
    "revision": "bef797a48201143b6a84b2207d8527d4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161003_103619_HDR.d6500022.jpg",
    "revision": "d650002251bd89c26a79941679d61e5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20161003_114219_HDR.be954e48.jpg",
    "revision": "be954e489fa4e2ead36a2d6add3a8baf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190210_122840-small.02ed1a49.jpg",
    "revision": "02ed1a497792b6d8b40796a819f1dadb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190210_122840.a9993265.jpg",
    "revision": "a99932656a7214075016317c2516b3d7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190211_115351-small.7fc0381a.jpg",
    "revision": "7fc0381a5d020c758b2e83d95e03a57f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190211_115351.ef97171f.jpg",
    "revision": "ef97171f8c7b3b7c1016f63047bbf8c0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190211_122735-small.5ca29b50.jpg",
    "revision": "5ca29b500f68470496424ba4b3e0ad5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190211_122735.1ac5b005.jpg",
    "revision": "1ac5b005b4ee0db39f3519acfd2b890f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190212_170821-small.489e862e.jpg",
    "revision": "489e862ef913cf390195ad07c65a7cda"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190212_170821.d6e4f326.jpg",
    "revision": "d6e4f326edbf64748902277097e70a1f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190213_112738_003-small.25db26bd.jpg",
    "revision": "25db26bd010a0698524a3bcbd1732f6a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190213_112738_003.bc315c96.jpg",
    "revision": "bc315c9604eacef337bf754ca0ff2fa1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190214_165923-small.6083c4cb.jpg",
    "revision": "6083c4cbdbd9a57f7bdc9483285b9420"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/20190214_165923.8f004009.jpg",
    "revision": "8f004009e37b470b2f93abf368fde70f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3-1.7cdcaae0.jpg",
    "revision": "7cdcaae070246d120e4efe3ea6cf3f05"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3-2.0e0989a9.jpg",
    "revision": "0e0989a98573c446204a389646ee48ad"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3-2.9637739f.jpg",
    "revision": "9637739f40f8ef092ac7f09d83608556"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3-3.51b97597.jpg",
    "revision": "51b975977d248c291acc5a3a99e9777d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3-3.5b1b6ac0.jpg",
    "revision": "5b1b6ac0be8858a6e243274a7a94b676"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3-4.2e9acf66.jpg",
    "revision": "2e9acf66636ddd5a3c58a43f1b8a037b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3-4.d7a56af3.jpg",
    "revision": "d7a56af3ce16c2fe944b72a51d6b332d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3-small.fbea5aec.jpg",
    "revision": "fbea5aec700e793e3b5f3141d23557ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/3.53b1e317.jpg",
    "revision": "53b1e317080e08681bfff6f594dd418f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-1.4f92350f.jpg",
    "revision": "4f92350f96782728e921acbeac11c8f8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-1.58f6e058.jpg",
    "revision": "58f6e058cce353fe30024b72b1b708d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-2.4b02da3f.jpg",
    "revision": "4b02da3f8bf8fb102f1918e85392da26"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-2.c47a56cc.jpg",
    "revision": "c47a56cc30880c2e7a0a875e73517782"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-3.5940c806.jpg",
    "revision": "5940c8064a2d477bccf867e9f08ca722"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-3.8bde8485.jpg",
    "revision": "8bde848522d7f653b0f57b63b2549164"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-4.11791e0f.jpg",
    "revision": "11791e0fdcb698b4f9448ec6d6c4aac6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-4.deeb195b.jpg",
    "revision": "deeb195b40bc64db8e64940cdb5b4853"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4-small.b37736b9.jpg",
    "revision": "b37736b9443c065025bf1d5de716b35e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/4.fbe52e2d.jpg",
    "revision": "fbe52e2d74b08b4467ce01cfc7ba034b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/5-1.d2e5689b.jpg",
    "revision": "d2e5689b7fe6c3d22e4743ebb6b5fb59"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/5-1.f8e2999c.jpg",
    "revision": "f8e2999c1df9bcc78f7dbba9b9e18206"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/5-small.3eda5685.jpg",
    "revision": "3eda5685194a4cfb2ee585378a8b69f7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/5.5d2e75ca.jpg",
    "revision": "5d2e75cac965cbd8698c479033b2ad57"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/5caf13406227685daf019539_1024.1b20c90b.jpg",
    "revision": "1b20c90bf45636f433a630104cf3af58"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640-1.083e01bf.gif",
    "revision": "083e01bf10d52a15d3b39fda272d3af9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640-1.2fa552bd.gif",
    "revision": "2fa552bde38f5e5dfaa7150ec22ce5da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640-1.e65e6c39.gif",
    "revision": "e65e6c39f57759b7fc6809d03bf07b17"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640-2.39946d67.gif",
    "revision": "39946d678246fba63503db18a49edae5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640-2.4ae42d01.gif",
    "revision": "4ae42d0137cb624b74ce590e4bc7195e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640-3.0f61102f.gif",
    "revision": "0f61102f9301a47c3a70b34d2092cab1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640-4.af730268.gif",
    "revision": "af7302689b03adf2b40db51f4cbd34fb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640.21dedbf1.gif",
    "revision": "21dedbf1e72415263f6aade2fda38aa9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640.45a831e1.gif",
    "revision": "45a831e1705a3f502a57b25f26e048f0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/640.e65e6c39.gif",
    "revision": "e65e6c39f57759b7fc6809d03bf07b17"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/abduction.ef6dc31a.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/banner-1xx.2bf475a5.jpg",
    "revision": "2bf475a57aba0ba1dd3a7e285390cafb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/banner-2xx.553d69c1.jpg",
    "revision": "553d69c1b6fa425def125b2afad09e01"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/banner-3xx.94b7514b.jpg",
    "revision": "94b7514b9ed260361d7070afc14d318b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/chapter1.39355032.png",
    "revision": "39355032dec73749bb82f8c64541a28e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/chapter2.0ef0f6f9.png",
    "revision": "0ef0f6f9a07071b91c709ec17775b707"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/finally-have-a-nest,w_320.3809309e.png",
    "revision": "3809309e23df054ee1d6d42490b51f53"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/finally-have-a-nest,w_427.4dcb9579.png",
    "revision": "4dcb9579f76eb932194d3b722e64fe10"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/finally-have-a-nest,w_524.654096e8.png",
    "revision": "654096e8de98af70bfbb4bd1a82f5da3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/finally-have-a-nest,w_680.c86d9406.png",
    "revision": "c86d9406066538f63a504d1e0deecae4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/finally-have-a-nest.30a81e76.png",
    "revision": "30a81e76162516f1e2f98edcac228dbc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/iconfont.8eef8638.svg",
    "revision": "8eef86381d36c7d02ce250e5243b0752"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/image-social-share-en.b13f8f7e.png",
    "revision": "b13f8f7e79796052b8f83cf65c1b0695"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/image-social-share-zh.61ac0f84.png",
    "revision": "61ac0f842db5b157678fa31b57be1bd4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/image-social-share.a59b074f.png",
    "revision": "a59b074f08dd5b7e0ceb510e00c3b3d2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/IMG_6828.c69a1570.jpg",
    "revision": "c69a1570b01fdcef34d5c2da7053a23e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/IMG_6881.37bd533b.jpg",
    "revision": "37bd533b42e878036452eb26f05f411f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/IMG_6890.f44ab094.jpg",
    "revision": "f44ab094df1d447b345ba29960a9c210"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/IMG_6917.ed760a18.jpg",
    "revision": "ed760a180246de32e6092acfff3f6e5b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/IMG_6940.b3bedc6a.jpg",
    "revision": "b3bedc6aeb1c97d0dae40068b0259fc0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/IMG_6992-small.8841b748.jpg",
    "revision": "8841b7482d6a748f7429d1fb7b36fdbb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/IMG_6992.05549486.jpg",
    "revision": "05549486d140fedeaf0c3c6e3cdc1480"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/IMG_6992.3ff8df20.jpg",
    "revision": "3ff8df209897a981d11e23d6a288c619"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/my-first-post,w_320.7d60ae1c.png",
    "revision": "7d60ae1cff4eb3faa81bb9d38e7946da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/my-first-post,w_427.c9bc1e0e.png",
    "revision": "c9bc1e0ee16c3e0061500946f4b90b86"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/my-first-post,w_524.37be47a5.png",
    "revision": "37be47a571cb5a35524091784fb33391"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/my-first-post,w_680.6e310936.png",
    "revision": "6e31093651c15d3797279592c8da47c4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/my-first-post.159656db.png",
    "revision": "159656dbf182d53c98a21bbb2ad3dc32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/nuochong.01c327bf.svg",
    "revision": "01c327bfe3678b322333efa9c6c2ba5e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/nuochong.baf34344.png",
    "revision": "baf343445710e0d93761999cc90467c5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-164437.7f8a03c1.jpg",
    "revision": "7f8a03c14f88f9dd14914615549fa70b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-165300.05a47fca.jpg",
    "revision": "05a47fca62f02c6d079a53061c9cb6e4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-165742.1b37d363.jpg",
    "revision": "1b37d363cd7b03c312c64dfd0a18fe16"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-165813-small.72079327.jpg",
    "revision": "7207932702cb81138b9f86520745e521"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-165813.583ddb7d.jpg",
    "revision": "583ddb7d308531e2c98daf7d195ebf99"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-165813.67e3928e.jpg",
    "revision": "67e3928e342ad16dcc9eb88e8a3f689e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-170021.d8c83669.jpg",
    "revision": "d8c8366968e7413ec593250fa7085a55"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-171817.b767bb82.jpg",
    "revision": "b767bb82d20cd4ff863ca4d82ad74c31"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-171823.575f85ba.jpg",
    "revision": "575f85ba5185f054ad3d9d6717f07414"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-172720-small.e0e9b576.jpg",
    "revision": "e0e9b57649a109d78c52f4fe93236a7e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-172720.84eff724.jpg",
    "revision": "84eff7245da5ff22fc41ac3593f8d394"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61002-172720.adfa3854.jpg",
    "revision": "adfa3854c67f0f2d187b27ad4799f47c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-054711.cd9926f4.jpg",
    "revision": "cd9926f4f4f1ee56f8eab04302284398"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-055845-small.a95c108a.jpg",
    "revision": "a95c108a66e2ec773336105f3e937c4e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-055845.0e719d32.jpg",
    "revision": "0e719d3259219bb6e4cd6752d83da88c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-055845.f3afaf48.jpg",
    "revision": "f3afaf4870d125c43567fb4b349773da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-060526.253a5d0f.jpg",
    "revision": "253a5d0f0d3a5266eb475edd321776a3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-062342.76f427d6.jpg",
    "revision": "76f427d61ccf06b2f063541f34c21142"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-062909-small.c7b197ca.jpg",
    "revision": "c7b197cadf2db69ffc01ae79dfc325de"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-062909.362bb868.jpg",
    "revision": "362bb86884f3896a25c9fee75c73b40e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/P61003-062909.6115a27a.jpg",
    "revision": "6115a27af09b0d799b6592e179dcb89c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/safari-pinned-tab.43f3881d.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101151042.8742a3c5.gif",
    "revision": "8742a3c536746c5bd90e7745d2a0f6b4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101151107.8404eb56.gif",
    "revision": "8404eb565dbc414ee858ed8b63c7b2c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101151118.8b3e85fa.gif",
    "revision": "8b3e85fa5ad3d3553afd3297f82a17a1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101151126.4d2816c2.gif",
    "revision": "4d2816c27963b95978aa963034509984"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101151143.296ded96.gif",
    "revision": "296ded9686cb596ffee672ffc128da12"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101151151.20dc93e0.gif",
    "revision": "20dc93e0c3b55c9037ca243add5144b4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101151159.3201809f.gif",
    "revision": "3201809f23c0b41d99ab06d7a9d85d0f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101162809.47d5b5d1.jpg",
    "revision": "47d5b5d15c33489020cf2957f730d78b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101162911.57659483.jpg",
    "revision": "57659483b1436b69173f7d3f6b8cb87d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101163009.d4e5f113.jpg",
    "revision": "d4e5f1131c2d81139a90246c4e44a685"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101163308.11383451.jpg",
    "revision": "11383451e1257fd38422173943c4ae25"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200101163405.58f2a7dd.jpg",
    "revision": "58f2a7ddd319a0dfddc3e1490f6a104e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200218083547.7fdd6a40.jpg",
    "revision": "7fdd6a401321fdac0f2026515ad31977"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200218083704.551f0f9e.jpg",
    "revision": "551f0f9e6df84752af0c96b2c775ae87"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200218083744.4783cd62.jpg",
    "revision": "4783cd6265dd7a2711e48d5c7013299a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200218083801.4c59ed55.png",
    "revision": "4c59ed554e662dd22dcdef0d940cd125"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/微信图片_20200218083833.c57c6d6a.jpg",
    "revision": "c57c6d6a5db0283b420148e957646c5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/img/水印.041ceaaa.jpg",
    "revision": "041ceaaa3debf8203d5633b669b14faf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/autores/nuochong.png",
    "revision": "baf343445710e0d93761999cc90467c5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-chrome-192x192.png",
    "revision": "8c0281163800ff1ad83a05f043b97722"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-chrome-512x512.png",
    "revision": "2b6246ea922b7b03c0af8dc70b6815a9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-192x192.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-36x36.png",
    "revision": "7243fbd3f15500638752cc2c080c0643"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-48x48.png",
    "revision": "28f681e29955398e22e8febbd510557a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-72x72.png",
    "revision": "41191dc8c7fb62f4c7f00e6fb036ff2b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/android-icon-96x96.png",
    "revision": "9f2d4e0c5c147ec6418c87a9ded56b7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-114x114.png",
    "revision": "f8fddabcc40b2dfb1644f9fe98e5b325"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-120x120.png",
    "revision": "758e7164bba2b4c2ff071d829add67cf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-152x152.png",
    "revision": "32b4a25c2b866d5f5cbdefbaea9d9745"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-180x180.png",
    "revision": "f8b8c060fccabfbfbf28ffe35ca30163"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-57x57.png",
    "revision": "03bd68feb0a330becd03ac3d7cac4ef2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-60x60.png",
    "revision": "48d3bfea3eb10bf359e1bc631ff05d05"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-72x72.png",
    "revision": "41191dc8c7fb62f4c7f00e6fb036ff2b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-76x76.png",
    "revision": "71d292012ea7ad6e2412c2636a098675"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon-precomposed.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-icon.png",
    "revision": "6c504daeb790f689b7bedf792db7c7a5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-120x120.png",
    "revision": "abc32381e9212668447d9397c6950705"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-152x152.png",
    "revision": "e4b80289303a1333343bd29ae4e50a7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-180x180.png",
    "revision": "f35c2d671681642add62a85a0d93230d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-60x60.png",
    "revision": "d88d5f6f142035e75b490164beeb5e30"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon-76x76.png",
    "revision": "7d5cd0a0fa1eb6cb5ad340208b6adfdb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/apple-touch-icon.png",
    "revision": "f35c2d671681642add62a85a0d93230d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/favicon-16x16.png",
    "revision": "1c01a2b344fb20661ff638ddbd0c9123"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/favicon-32x32.png",
    "revision": "0ce15980034dcd586481cc56d1561316"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/favicon-96x96.png",
    "revision": "9f2d4e0c5c147ec6418c87a9ded56b7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/ms-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/ms-icon-150x150.png",
    "revision": "4f8a49044d84c5b4dc2b22ccef698554"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/ms-icon-310x310.png",
    "revision": "66fa31225664e0099c105a8d19cfee29"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/ms-icon-70x70.png",
    "revision": "4526f94a4e31854bca77a44d6c5c0bc4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/msapplication-icon-144x144.png",
    "revision": "161b61b6aa59cfe850640fb6535ff9c3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/mstile-150x150.png",
    "revision": "912a2b4912dffcd93ef62167bae738e4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/01-small.jpg",
    "revision": "a7b63d7cd3692369a7ce954f5d391a0b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/02-small.jpg",
    "revision": "d11f548fab0753dd23028cf9a82b0c65"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/03-small.jpg",
    "revision": "3eae93c619f6332b1e63534bacc3138f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/04-small.jpg",
    "revision": "1228eaa786deea100720090efc736378"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/05-small.jpg",
    "revision": "2b960291dfdbbe7324ee94c1b71f9e0f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/06-small.jpg",
    "revision": "eb8c4b4cb30f78ff1e17a00cfb94de6b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/07-small.jpg",
    "revision": "615dc1d2c6da87177d49f35ece84be17"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/08-small.jpg",
    "revision": "44a2660b1c73e7ac9d8d131c412d3c61"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/09-small.jpg",
    "revision": "80b6716c83e2a2f02a5fe6947743abb8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/10-small.jpg",
    "revision": "77f3204b08ea0c7a76126fb1ebac798b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/11-small.jpg",
    "revision": "33d71e0a3719b666f859446ba92166c8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/12-small.jpg",
    "revision": "c16dd9a75e047fcc1f38006193cbb270"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/13-small.jpg",
    "revision": "481fb760fca770be1e8d78f48a708c5f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/15-small.jpg",
    "revision": "4414ad5a60b2ddb92a1cf79cd28136f6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/blessed-state/17-small.jpg",
    "revision": "73f35009cb91dce2354528a5f23d1080"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/IMG_6992-small.jpg",
    "revision": "8841b7482d6a748f7429d1fb7b36fdbb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/P61002-165813-small.jpg",
    "revision": "7207932702cb81138b9f86520745e521"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/P61002-172720-small.jpg",
    "revision": "e0e9b57649a109d78c52f4fe93236a7e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/P61003-055845-small.jpg",
    "revision": "a95c108a66e2ec773336105f3e937c4e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/dayushan-island/P61003-062909-small.jpg",
    "revision": "c7b197cadf2db69ffc01ae79dfc325de"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/2-small.jpg",
    "revision": "578cc7b21b9b2cb9b4f083b02a1c7b19"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190210_122840-small.jpg",
    "revision": "02ed1a497792b6d8b40796a819f1dadb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190211_115351-small.jpg",
    "revision": "7fc0381a5d020c758b2e83d95e03a57f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190211_122735-small.jpg",
    "revision": "5ca29b500f68470496424ba4b3e0ad5a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190212_170821-small.jpg",
    "revision": "489e862ef913cf390195ad07c65a7cda"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190213_112738_003-small.jpg",
    "revision": "25db26bd010a0698524a3bcbd1732f6a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/20190214_165923-small.jpg",
    "revision": "6083c4cbdbd9a57f7bdc9483285b9420"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/3-small.jpg",
    "revision": "fbea5aec700e793e3b5f3141d23557ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/4-small.jpg",
    "revision": "b37736b9443c065025bf1d5de716b35e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/formosa/5-small.jpg",
    "revision": "3eda5685194a4cfb2ee585378a8b69f7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/hometown/14-small.jpg",
    "revision": "dbb54130c53d7ac88b28b6cdb2b4ea04"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/bitty/hometown/16-small.jpg",
    "revision": "955ce5dbebddbe33b807dbd24f11d067"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/fadeIn-animation/3-1.jpg",
    "revision": "bb91bd86e4918daf05976f294927cfa0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/fadeIn-animation/3-2.jpg",
    "revision": "0e0989a98573c446204a389646ee48ad"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/fadeIn-animation/3-3.jpg",
    "revision": "51b975977d248c291acc5a3a99e9777d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/fadeIn-animation/3-4.jpg",
    "revision": "d7a56af3ce16c2fe944b72a51d6b332d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/responsive-images/2-1.jpg",
    "revision": "d9f1f0567375fc5e75a9f2e8842522b8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/responsive-images/2-2.jpg",
    "revision": "de5bf508a5a404e9f890d67fc4b59a32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/responsive-images/2-3.jpg",
    "revision": "8a199b32c3126988e4a963b60050b0e3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/responsive-images/2-4.jpg",
    "revision": "1a6787d187bbff341166de28e6c0f858"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-1.jpg",
    "revision": "cca6f9b2ac0a85fcdb348cf14d8530a9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-2.jpg",
    "revision": "4ffd75154b8dd634b5f537753a3e7a54"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-3.jpg",
    "revision": "5ae82fbdc3b51b49239ddf2e93b9ec6d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-4.jpg",
    "revision": "2c6fccf80141265c0c78710eb06a5e96"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-5.jpg",
    "revision": "f512d6af493c26b648bc710d3da151ba"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-6.jpg",
    "revision": "48bf56c06b2929dd0a2f449072c38327"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-7.jpg",
    "revision": "3a49e43cd5f030d9ee5aedc6922e2cdf"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/sample-gallery/1-8.jpg",
    "revision": "06c9fe0163a08a87925b318aa55938c9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/single-image/5-1.jpg",
    "revision": "f8e2999c1df9bcc78f7dbba9b9e18206"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/small-images/4-1.jpg",
    "revision": "58f6e058cce353fe30024b72b1b708d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/small-images/4-2.jpg",
    "revision": "c47a56cc30880c2e7a0a875e73517782"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/small-images/4-3.jpg",
    "revision": "5940c8064a2d477bccf867e9f08ca722"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/gallery/thumbs/small-images/4-4.jpg",
    "revision": "deeb195b40bc64db8e64940cdb5b4853"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/general/web-development.png",
    "revision": "6b0edf9a6ea1a74ca4153ea0252d37ab"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts-base/2018/8/my-first-post.png",
    "revision": "159656dbf182d53c98a21bbb2ad3dc32"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts-base/2020/2/finally-have-a-nest.png",
    "revision": "30a81e76162516f1e2f98edcac228dbc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2018/8/my-first-post,w_320.png",
    "revision": "7d60ae1cff4eb3faa81bb9d38e7946da"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2018/8/my-first-post,w_427.png",
    "revision": "c9bc1e0ee16c3e0061500946f4b90b86"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2018/8/my-first-post,w_524.png",
    "revision": "37be47a571cb5a35524091784fb33391"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2018/8/my-first-post,w_680.png",
    "revision": "6e31093651c15d3797279592c8da47c4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2020/2/finally-have-a-nest,w_320.png",
    "revision": "3809309e23df054ee1d6d42490b51f53"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2020/2/finally-have-a-nest,w_427.png",
    "revision": "4dcb9579f76eb932194d3b722e64fe10"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2020/2/finally-have-a-nest,w_524.png",
    "revision": "654096e8de98af70bfbb4bd1a82f5da3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/images/posts/2020/2/finally-have-a-nest,w_680.png",
    "revision": "c86d9406066538f63a504d1e0deecae4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/fallback.png",
    "revision": "30b3fbf300209144862e9ff08c564168"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/ktquez-play-logo.png",
    "revision": "89f11077e7bdb3d4dcb168e734ecd54e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/ktquez-play-logo@2x.png",
    "revision": "a8efae32b64b6301a3fcec47a8d93096"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/logo.png",
    "revision": "a8efae32b64b6301a3fcec47a8d93096"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/logo/watermark-logo.png",
    "revision": "4240e98a8008dee7317a4a5020f6437a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/banner-1xx.jpg",
    "revision": "2bf475a57aba0ba1dd3a7e285390cafb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/banner-2xx.jpg",
    "revision": "553d69c1b6fa425def125b2afad09e01"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/banner-3xx.jpg",
    "revision": "94b7514b9ed260361d7070afc14d318b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/blog-1x.png",
    "revision": "c11b7eeacf87ecba445150bfe00e96c4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/blog-3.png",
    "revision": "d79d2cd337e5ae3fdc03856924c0ed63"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/blog-4x.png",
    "revision": "58ef8b2436337cd812be5ab6a5608015"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/quote-1.png",
    "revision": "b4adc60d66045f747d4e52d1fb211a75"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/quote-2.png",
    "revision": "68d6a7fee1d2887618e2a18fa23ba1ad"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/side-arrows.png",
    "revision": "bab52160ea0d10fb154bff6657689df8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/social-sprit-bottom.png",
    "revision": "7361841cb56ba3c7ec048561b6c662d6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/photograph/social-sprit.png",
    "revision": "ad84eea44d6006598269e12e4ab7fe96"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/social/image-social-share-en.png",
    "revision": "b13f8f7e79796052b8f83cf65c1b0695"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/social/image-social-share-zh.png",
    "revision": "61ac0f842db5b157678fa31b57be1bd4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/social/image-social-share.png",
    "revision": "a59b074f08dd5b7e0ceb510e00c3b3d2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/music/ding.mp3",
    "revision": "4dd02c4eddb635d48e39f920ac4beab4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/music/elevator.mp3",
    "revision": "a41b4d171e7c3f51998da1601d833a53"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/locales/en/manifest.json",
    "revision": "13ca69bc48609f4446b596a2c837c4ce"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/locales/zh/manifest.json",
    "revision": "0bb79767e4d186f98549a2345df04139"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/0.223b3c77.js",
    "revision": "60f498d9203901dc807bdb3b49e2c004"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/1.cfd96a6f.js",
    "revision": "38cd6e00c62d5d8ccb9571c571cdcd07"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/10.cbc94126.js",
    "revision": "002aefa7fc41769dabdc05915dd86797"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/100.6457858b.js",
    "revision": "fc55c308d326ab512b02cb688dd6a984"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/101.1af74e7b.js",
    "revision": "da4c54b6c597685194b790eaab0ad3b4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/102.521e4dfc.js",
    "revision": "fc662c26f1d2890ff2b2f0ec8ba9c3d8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/103.20d0a471.js",
    "revision": "0f1a2f4df878d8786e0ce3388192c800"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/104.d7b447d7.js",
    "revision": "eb3a3d77d9a94c18c7e1baa26a32f93c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/105.5c920743.js",
    "revision": "cfa7af5e5aab705cfc2e5f5e998a522f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/106.7634bff5.js",
    "revision": "14b5f1daac909705365f0d8b03f29898"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/107.c65a63ca.js",
    "revision": "5a837b48a7d83c85f23b7a06eaa6f335"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/108.3fc271d4.js",
    "revision": "c506e21597a5fe1854ab89eed4c3cce3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/109.41e105b5.js",
    "revision": "e3fb5df624e30e2dabb7a7cb8afde098"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/11.10cf89b8.js",
    "revision": "8844bfe6516a9ae340e804c63a917b59"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/110.1a963e88.js",
    "revision": "7033626c37042ad76ea01055ed0aec8c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/111.687ff9ac.js",
    "revision": "b1c648fd4fdd6fa66951a651fd89a0a2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/112.5970cd93.js",
    "revision": "21d7dfb9a25e8131eebf091e1a2e1b5b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/113.80c1f43e.js",
    "revision": "837cd9d921d837e748fa9b39295bfd62"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/114.f0d1dd90.js",
    "revision": "762990ebc3699f3e36a38a1958af8ee4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/115.6c57d7cc.js",
    "revision": "66a19a399acb5d6408cb0ba75f781d73"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/116.05372ba3.js",
    "revision": "9dd269aa782a11ec8fce9cd5b467d8ae"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/117.f39b73c8.js",
    "revision": "8c04c55caac29cae45412ce51b0bccf4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/118.525f3b33.js",
    "revision": "e919c4757906924da2d112f30ffb07a8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/119.fbdcd698.js",
    "revision": "77b5910a14dd95019d545cf5c09b5882"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/12.c28042c6.js",
    "revision": "f46193f6fa42a537cc1d2e543a1df976"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/120.4cb4eb91.js",
    "revision": "697fe918180eab2fe3ca13cd60f9a1a1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/121.a64c0189.js",
    "revision": "30fd52f4a5a66d1843b53c2edbfa04d5"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/122.3b3b0a78.js",
    "revision": "c9b56e42f4ebaea00b660c4c7db7e916"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/123.e2d20ef4.js",
    "revision": "3943d1263464c86f0058929dff908bee"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/124.8995350a.js",
    "revision": "d114287855476025bad0324dab94544f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/125.e1c98438.js",
    "revision": "37d9b8297694ba514693d34e58cca863"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/126.0e5bf89d.js",
    "revision": "2acba614575c969129a96173d562f4ec"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/127.50eddea3.js",
    "revision": "c6f1bc87410c02805fab987bd9e9d309"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/128.c0a157c8.js",
    "revision": "e8f854633babfc4c51e9d9607c2450b4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/129.5b0bb661.js",
    "revision": "51245d7ea0a6cfd2c1f86f6d264d6cc9"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/13.50d62fe7.js",
    "revision": "ab2d81ac2633951a5023d34c5f23b106"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/130.98e70694.js",
    "revision": "dd958b7f1b677e59df87b08e326ee684"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/131.15289701.js",
    "revision": "67c61bc2fd9f1f8a4f35457bdc8dd639"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/132.61a4d6f1.js",
    "revision": "beb1703265b062a62524be3d366f6d3f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/133.e3454ce8.js",
    "revision": "6c6d098b74ee122f5d200fc6ebd4fe1a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/134.1feaa906.js",
    "revision": "97fcdb7c53408b06fbfe185c42986840"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/14.03da9c95.js",
    "revision": "ed6b28aa62c86c4cebfc85efeda0f9aa"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/15.72fb122c.js",
    "revision": "3efe4393490f5827cb695fc8d8277c16"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/16.0925d81d.js",
    "revision": "826140d0ee8c8a9077d5a97bfdc58ec4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/17.a64042ba.js",
    "revision": "45df7121cad82e85d4a71a6d043b6b20"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/18.5d3efb7f.js",
    "revision": "2502be1af3f5b3fd2e0a7f7600c686cb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/19.8565d381.js",
    "revision": "5f7ff6f98a3a1100899172f835d71172"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/2.c8ede7fb.js",
    "revision": "552221d0dcbb14be04ecb5256c7c468a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/20.f0397513.js",
    "revision": "55e41a8526d05030379a5ef9c28f558c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/21.89878bb6.js",
    "revision": "52409dd9a8c29785c6a40b2f9957508f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/22.93e2e1a6.js",
    "revision": "b5743d150c95df3105104c63467c78c6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/23.382764fe.js",
    "revision": "bc4daa49a7380e27ad3c38a275a81cfc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/24.0effd0d3.js",
    "revision": "293301587e0100d6e3a1dbe148af008c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/25.8ea9b951.js",
    "revision": "2ef495a5fdf9566cc086233a08a36b78"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/26.bb9eb929.js",
    "revision": "12f88d651956700f76a098a59fb1d8f2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/27.33aed88f.js",
    "revision": "b466ceb9d1d81db75c9cfdf06caa0739"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/28.c0202b6a.js",
    "revision": "00f90ca791f2181cac7edd490a17810f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/29.45bebb5a.js",
    "revision": "c87ba2b7027f44a2a08715488b2c2ec1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/3.b17d2b51.js",
    "revision": "7e701ac5cebb3b2d7ed5a73e1531fb72"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/30.c4823c96.js",
    "revision": "3ebee6b2ee40a8b7206a6933ce265acb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/31.e8973f5c.js",
    "revision": "1d0653a02cd89fb7a8226334a3ac1fdd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/32.1162ed7d.js",
    "revision": "d9996509e9e04f243c5ce76f22693d51"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/33.ba88182b.js",
    "revision": "87a794b029e1165084a31b95a50bc94f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/34.30b28fcf.js",
    "revision": "7534ef3115b9f30148c51b10721b39ec"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/35.95110123.js",
    "revision": "c652f57a0f3640e6cdfd7eb753516c65"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/36.d3ac09a3.js",
    "revision": "ff72328636e043770a5c841464432731"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/37.ac67afdc.js",
    "revision": "18db827df98d07618fa2f8372cb884ff"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/38.9e57cfd6.js",
    "revision": "d526c67471b663d4ce9ecb2196d05bc7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/39.74c86b92.js",
    "revision": "9df6e5661563beb16e454a98eaad0dbd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/4.cf737a9c.js",
    "revision": "013c8e30a59abd3d4c37bd9ff3bd6acb"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/40.10cc4739.js",
    "revision": "c059f7a7cb8dbd8297befee3f24bb237"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/41.b1228fbf.js",
    "revision": "15ca126d0334a6172598a246741796a4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/42.2fba3e59.js",
    "revision": "bad19d62c2cd8d7dab9920bd2afc5e56"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/43.eabd0646.js",
    "revision": "2d5618555e93264b25ec08d31d1dd2e8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/44.42f5c6d9.js",
    "revision": "5780761b0bab21ee4ffb927244e9163e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/45.352b2407.js",
    "revision": "6b42ec99fd744465f706c6dfb375216e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/46.a7591620.js",
    "revision": "29dfce89cefc4bad576e1e0ebfe1d3b0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/47.e9c76b97.js",
    "revision": "ec4cd04efd301295a24e9ced6b540414"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/48.824b861e.js",
    "revision": "9d28555881e150e965cfb5f8d79f18ab"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/49.5fe179c0.js",
    "revision": "afc4ba9547cdb695d129f25bf584a1c2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/5.107d5ea7.js",
    "revision": "86d2033f54ef89fda920d9b0c753d778"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/50.60a23cc9.js",
    "revision": "b266939738247c66bf50dfd375b21493"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/51.33e73bfd.js",
    "revision": "2716ddf4e57677f80bf24821db33b826"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/52.e242e88f.js",
    "revision": "7c7f899c51b0ca73c61e5d792737286a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/53.4d8214b8.js",
    "revision": "2758dfe5d27eb3776a911607198d735d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/54.161fdd2b.js",
    "revision": "32e930cc8d3d5ad61475064a93a17abd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/55.3fcd5bbc.js",
    "revision": "ec201d6b571bafdd300a9f61862556fd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/56.3ba188b1.js",
    "revision": "1f07b1d504715fba308588fcf92d277e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/57.958e2205.js",
    "revision": "4f85817f9856edd92ef39fc3550c41a0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/58.5417d48a.js",
    "revision": "30cc24de5c0bca77586a161771a9c219"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/59.c36444c1.js",
    "revision": "d2bb9fa6aa37354e2a8223b2aa73f596"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/6.651742e3.js",
    "revision": "b9e0dbe95fb27c2faae75fee857fe0c8"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/60.d304ef04.js",
    "revision": "84e03091e984aa740c166977f7dc2867"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/61.d28e5918.js",
    "revision": "153858b47c9b4eb2ae32569277de0660"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/62.11a37fe1.js",
    "revision": "2b482d932df58fc98b3d059a6a9fc01b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/63.8f85ae9d.js",
    "revision": "2cd5da24156297edfec89dc9afa166fd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/64.2d0ecd11.js",
    "revision": "db34cd6ea5665c9df7db31e58ba44760"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/65.7b711106.js",
    "revision": "a416f0e7441ea35e0f53a49bf3df162f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/66.6db56612.js",
    "revision": "9ff4b9e18b7c86db176aa625c42be11a"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/67.dacb0e16.js",
    "revision": "403833834f8db5d05d2c866c49b9172c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/68.bc370e8c.js",
    "revision": "6e303e4d7e5e71e5df0ef0af2dd475cd"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/69.2804e0c0.js",
    "revision": "a5c717c0e65e1a10b04b697878a534ab"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/7.9e97ad61.js",
    "revision": "f2f1dde6a6e0ed00e583c3de8799c481"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/70.46078622.js",
    "revision": "f054663fa0add189c296bbb0e47b2d25"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/71.537fa25e.js",
    "revision": "1e5e6afe9f1e30854b5e1cc4cf76a7dc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/72.a4bdc0f0.js",
    "revision": "2b9210c92e3a0d10f25ec6c804fe8ecc"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/73.ee11dd3c.js",
    "revision": "5531a8ae7f49704e9301af128f27e0b4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/74.1bce3262.js",
    "revision": "47a62e07f76afd6a6ac27fdd39372b7d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/75.ed791ffd.js",
    "revision": "b9adf4607692aa4b0147fb28b8ad895b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/76.660dbb9b.js",
    "revision": "ce8098840aee4c41b375e4c50e8808e7"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/77.8c3f0ced.js",
    "revision": "528de1d6be0891ed92d60447cd20a7d1"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/78.163dd90e.js",
    "revision": "dc99bf2b70943818aec368414ddde664"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/79.4fe7b7c7.js",
    "revision": "520f8541067962abd403f82aab8642ee"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/80.3ecbf148.js",
    "revision": "b50a288e59ee6a729f1296dd023ac08d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/81.27220c64.js",
    "revision": "cf309cc90d01ce8442c9af80e540f216"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/82.741a3fea.js",
    "revision": "f9fccb7006afcf4db4e8f289e59240a2"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/83.589bcc3f.js",
    "revision": "26823a4ffc591172f44e94f2dc2b7e4e"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/84.19f15304.js",
    "revision": "2b42dc8ecbca2f6c1dbac308bbf45072"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/85.ccf637fb.js",
    "revision": "a59869facab55593079077a474a36ee0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/86.2cfad4de.js",
    "revision": "c1cbce611f60f10bbaf41233b3e6dbf3"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/87.c9cafdff.js",
    "revision": "312233446c0ebd370e7a7e76e4b46502"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/88.4fe81bfb.js",
    "revision": "e72c6be56fc26b7a40b0920dbfc1b580"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/89.675f8383.js",
    "revision": "5a32102b6b1d91340d84dbdf9338d82c"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/90.3deb8475.js",
    "revision": "1a5a6e524052352a0536d21816b68950"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/91.6f24e08f.js",
    "revision": "a16d1ee9b79e1335f7c0869a01c261c6"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/92.edefeaf9.js",
    "revision": "5cdaca1bc3f144460bb74d9fecef6f42"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/93.931cecc7.js",
    "revision": "a4864b685bd2047e4cdbafe448b85c0d"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/94.eadbbe67.js",
    "revision": "9631f9a56feb851606c50ca4071b5c86"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/95.90c00ee3.js",
    "revision": "1d7b804cf84c4f465f3bb8d9eb409190"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/96.02b7b58f.js",
    "revision": "48f8eed4fbb6666f8203305bad8a318b"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/97.05397d32.js",
    "revision": "10014eec0805ccc113de14ebc2fc51b0"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/98.a69c856b.js",
    "revision": "e97c3419c96f0efb994d8a68f1f53a1f"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/99.9a5abb0e.js",
    "revision": "d0c481508da05bad223251c0f8e52542"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/js/vendors~flowchart.836b8c4e.js",
    "revision": "7d93cd8386544a149f31be1a25bb0228"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/media/ding.4dd02c4e.mp3",
    "revision": "4dd02c4eddb635d48e39f920ac4beab4"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/nuochong/nuochong.github.io@v1.0/assets/media/elevator.a41b4d17.mp3",
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
