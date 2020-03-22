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
    "url": "assets/css/0.styles.60dbefee.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.b8f54b5d.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.21be7de5.css",
    "revision": "3a096fbf3ddc101ad85a450e29783657"
  },
  {
    "url": "assets/css/11.styles.86d53c32.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "assets/css/12.styles.c1076456.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/13.styles.89574ad2.css",
    "revision": "86e463286683c49c2c08b770630cb28c"
  },
  {
    "url": "assets/css/14.styles.5925d3be.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/15.styles.6e72e27a.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "assets/css/16.styles.d496d40b.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "assets/css/17.styles.ad4372c7.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/18.styles.f2412a09.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/19.styles.c6215fa8.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/2.styles.adefa073.css",
    "revision": "cc806e876100d56caed897b53b9e3843"
  },
  {
    "url": "assets/css/20.styles.de5c0067.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/21.styles.21e487f6.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/22.styles.e12d4cf7.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/23.styles.530c3ffa.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/24.styles.270560a9.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/25.styles.50a120f2.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/26.styles.a335a656.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/27.styles.a102359f.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/3.styles.a21bd211.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "assets/css/31.styles.b8fbbea8.css",
    "revision": "e2e6c6c2c34718ae31f0bf26ae234e64"
  },
  {
    "url": "assets/css/4.styles.99adfabd.css",
    "revision": "bd33d9448b225cff24ecb4995c9cb6bf"
  },
  {
    "url": "assets/css/6.styles.1e8a6b89.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "assets/css/7.styles.199c31f4.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.1402655e.css",
    "revision": "6e3ceec8422ffb7fd8e6136cb263bffb"
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
    "url": "gallery/bitty/blessed-state/15-small.jpg",
    "revision": "4414ad5a60b2ddb92a1cf79cd28136f6"
  },
  {
    "url": "gallery/bitty/blessed-state/17-small.jpg",
    "revision": "73f35009cb91dce2354528a5f23d1080"
  },
  {
    "url": "gallery/bitty/dayushan-island/IMG_6992-small.jpg",
    "revision": "8841b7482d6a748f7429d1fb7b36fdbb"
  },
  {
    "url": "gallery/bitty/dayushan-island/P61002-165813-small.jpg",
    "revision": "7207932702cb81138b9f86520745e521"
  },
  {
    "url": "gallery/bitty/dayushan-island/P61002-172720-small.jpg",
    "revision": "e0e9b57649a109d78c52f4fe93236a7e"
  },
  {
    "url": "gallery/bitty/dayushan-island/P61003-055845-small.jpg",
    "revision": "a95c108a66e2ec773336105f3e937c4e"
  },
  {
    "url": "gallery/bitty/dayushan-island/P61003-062909-small.jpg",
    "revision": "c7b197cadf2db69ffc01ae79dfc325de"
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
    "url": "gallery/bitty/hometown/14-small.jpg",
    "revision": "dbb54130c53d7ac88b28b6cdb2b4ea04"
  },
  {
    "url": "gallery/bitty/hometown/16-small.jpg",
    "revision": "955ce5dbebddbe33b807dbd24f11d067"
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
  },
  {
    "url": "locales/en/manifest.json",
    "revision": "13ca69bc48609f4446b596a2c837c4ce"
  },
  {
    "url": "locales/zh/manifest.json",
    "revision": "0bb79767e4d186f98549a2345df04139"
  },
  {
    "url": "assets/js/0.60dbefee.js",
    "revision": "15a6baa82a18f2ad9212213eccb95335"
  },
  {
    "url": "assets/js/1.b8f54b5d.js",
    "revision": "de0b2f21cd73c5fccd36b81c818030ab"
  },
  {
    "url": "assets/js/10.21be7de5.js",
    "revision": "5eba9da93774b66ae6b15e7babc67e1b"
  },
  {
    "url": "assets/js/100.ccc10bb6.js",
    "revision": "98cc5a8a574212b29921e90529ff8b5e"
  },
  {
    "url": "assets/js/101.486d7d50.js",
    "revision": "30d9f5735e32d7c7e8775b5e66730592"
  },
  {
    "url": "assets/js/102.3a289e49.js",
    "revision": "8e21f0285063b2e730d410e00bfbab18"
  },
  {
    "url": "assets/js/103.f6d4dfee.js",
    "revision": "f9d815761df1a7fcd6c1488b3e8537a9"
  },
  {
    "url": "assets/js/104.5b9c93b6.js",
    "revision": "dc12793e985c64b2e0197f8c94f4c015"
  },
  {
    "url": "assets/js/105.6b9553c4.js",
    "revision": "68d10da5227444bcea0bea660ad90c76"
  },
  {
    "url": "assets/js/106.3cef219a.js",
    "revision": "4482352b1fec608003f33febc7d29f4a"
  },
  {
    "url": "assets/js/107.08e954ba.js",
    "revision": "c73d0de4163f930c80a05b23d871589c"
  },
  {
    "url": "assets/js/108.b6b32d41.js",
    "revision": "b5dcbec9c600ded61f8a02bcd092a5f3"
  },
  {
    "url": "assets/js/109.4e3c78e3.js",
    "revision": "c929624f57bb5f828b80cd68b65b16a0"
  },
  {
    "url": "assets/js/11.86d53c32.js",
    "revision": "06c2b26f167a9e19705332dbd368d2f4"
  },
  {
    "url": "assets/js/110.f9b0de6e.js",
    "revision": "972fc2910d425504fa4568bedf305d23"
  },
  {
    "url": "assets/js/111.ff05fcc3.js",
    "revision": "723e5e186e2b3d60de3098bf78dbfd8b"
  },
  {
    "url": "assets/js/112.8127fcd7.js",
    "revision": "73af12a2990f017652f05114c1a48773"
  },
  {
    "url": "assets/js/113.0f6353c8.js",
    "revision": "53f3d9f5e7cec9d6b82267991048b9d8"
  },
  {
    "url": "assets/js/114.d7c8af92.js",
    "revision": "b467d647e630397d548ffae94b13f2c4"
  },
  {
    "url": "assets/js/115.9c8a645d.js",
    "revision": "b395355e7125b2b9cb201495e806b071"
  },
  {
    "url": "assets/js/116.dece2ee5.js",
    "revision": "260a45d8c96c45630ccc5b7c3ad41625"
  },
  {
    "url": "assets/js/117.73f9b456.js",
    "revision": "b6dd0c42216131350e4c5cf45230144c"
  },
  {
    "url": "assets/js/118.9a80888c.js",
    "revision": "bf6ea067ef064dd5d9c674a2b10864a3"
  },
  {
    "url": "assets/js/119.494387ff.js",
    "revision": "f0be29af7c19c2d1628ca44a02ca816d"
  },
  {
    "url": "assets/js/12.c1076456.js",
    "revision": "4233441bbb2a41f6d512e9bc2bea7c26"
  },
  {
    "url": "assets/js/120.3681211a.js",
    "revision": "e23c1eef1efe8b96a2c36e5caf841099"
  },
  {
    "url": "assets/js/121.4072c9ea.js",
    "revision": "491fbacd26efc1bd8a8d9c7e2476e128"
  },
  {
    "url": "assets/js/122.a9b56166.js",
    "revision": "e97219f8e0af9a57ecb347a677ea7480"
  },
  {
    "url": "assets/js/123.1b875158.js",
    "revision": "244f0fcd8a6d0f4ee3b5f4db7bfe562f"
  },
  {
    "url": "assets/js/124.f0ec46d1.js",
    "revision": "32579aa9cf4c55f900d4210d88a35458"
  },
  {
    "url": "assets/js/125.36447f04.js",
    "revision": "698bfa1405af1d0047e572a396519259"
  },
  {
    "url": "assets/js/126.65a60ca5.js",
    "revision": "4c832f7dfa73f391efe0a0b432681148"
  },
  {
    "url": "assets/js/127.6907b1f1.js",
    "revision": "7e8531c0051f2c0bf8bde015a6e3c2ae"
  },
  {
    "url": "assets/js/128.e39d62f0.js",
    "revision": "9a771425e6ed73ace8ab98ec7aadc653"
  },
  {
    "url": "assets/js/129.c23eb2b1.js",
    "revision": "592608ec77420dd31a2e660047ee699e"
  },
  {
    "url": "assets/js/13.89574ad2.js",
    "revision": "de71cd8090a211a1cea8b38055be41ac"
  },
  {
    "url": "assets/js/130.f05ad410.js",
    "revision": "243dbff6411c106f430f704b932d5131"
  },
  {
    "url": "assets/js/131.2f1a57ed.js",
    "revision": "9bd0e9a5c699fa49a365f427e1673b33"
  },
  {
    "url": "assets/js/132.a741b4c7.js",
    "revision": "9f6894fd56f10dccb8c521de1f73b870"
  },
  {
    "url": "assets/js/133.57890ed8.js",
    "revision": "0b69f2b62c6c9dda423673910f2c0010"
  },
  {
    "url": "assets/js/134.f934fe5a.js",
    "revision": "c9fa04108f23f653c84d9aab53f7d0fd"
  },
  {
    "url": "assets/js/14.5925d3be.js",
    "revision": "4a498d77a0c1fcecae32db087fb20e0c"
  },
  {
    "url": "assets/js/15.6e72e27a.js",
    "revision": "2c9a1483de6c9a09cb43c24b805d5183"
  },
  {
    "url": "assets/js/16.d496d40b.js",
    "revision": "7cec11174a742da49c09e425ac2b60a7"
  },
  {
    "url": "assets/js/17.ad4372c7.js",
    "revision": "4f27b0b2912fc1624436c4f0aff7a911"
  },
  {
    "url": "assets/js/18.f2412a09.js",
    "revision": "9c14c726035d7723f99e672206e15b98"
  },
  {
    "url": "assets/js/19.c6215fa8.js",
    "revision": "64c9247d7a9f88c9ba153d6d846e9a2f"
  },
  {
    "url": "assets/js/2.adefa073.js",
    "revision": "6ba0e2ec447a125569727f369473ab18"
  },
  {
    "url": "assets/js/20.de5c0067.js",
    "revision": "b9881d0f1db398023c6eeeadbc824630"
  },
  {
    "url": "assets/js/21.21e487f6.js",
    "revision": "d20c4ec46134e536ccb006495a7f932b"
  },
  {
    "url": "assets/js/22.e12d4cf7.js",
    "revision": "0572e4b9512a1d21d6285a5e26cfc558"
  },
  {
    "url": "assets/js/23.530c3ffa.js",
    "revision": "1288c9762db801aba51150e13350f4b3"
  },
  {
    "url": "assets/js/24.270560a9.js",
    "revision": "9efabf5a379755b1cdb34b5488c4f544"
  },
  {
    "url": "assets/js/25.50a120f2.js",
    "revision": "ee0eeac1c2cbb55a28fe07a8fceb9d09"
  },
  {
    "url": "assets/js/26.a335a656.js",
    "revision": "8d5e4b6f4c43d1363acee2638e13cd63"
  },
  {
    "url": "assets/js/27.a102359f.js",
    "revision": "66705ae95b066007643678350a744ebf"
  },
  {
    "url": "assets/js/28.01dcb4a1.js",
    "revision": "a46c621c34701ecd328d86a3fbccdc16"
  },
  {
    "url": "assets/js/29.a325d5a8.js",
    "revision": "cd1e1187f85cc1c75a7be5a32cc834bc"
  },
  {
    "url": "assets/js/3.a21bd211.js",
    "revision": "537007747da60668bc6b6912b0f9dd7d"
  },
  {
    "url": "assets/js/30.cde04687.js",
    "revision": "8dbb5772ba8b39bd249c49b6d7c76297"
  },
  {
    "url": "assets/js/31.b8fbbea8.js",
    "revision": "bf64658763f323a9e3ddc8892cf4007e"
  },
  {
    "url": "assets/js/32.01d9f045.js",
    "revision": "18f56afd49b4ff377a8f10f9fc3b53d6"
  },
  {
    "url": "assets/js/33.115cf2bb.js",
    "revision": "c7cdcc4699e5ea52db10f2217009cbcb"
  },
  {
    "url": "assets/js/34.91970c1f.js",
    "revision": "1ff269b418d6044d2fe150dbd2ab2c7a"
  },
  {
    "url": "assets/js/35.13e92dac.js",
    "revision": "ad8f02c34f54c44acdf40637adc847ce"
  },
  {
    "url": "assets/js/36.2dd8a473.js",
    "revision": "ffde1463b48a55a3df8fbbc209414feb"
  },
  {
    "url": "assets/js/37.a4047514.js",
    "revision": "372180af2298c9864d1c40771697eba6"
  },
  {
    "url": "assets/js/38.2e8f226d.js",
    "revision": "9014aed7f83579c639708f9b085196f7"
  },
  {
    "url": "assets/js/39.7a43a318.js",
    "revision": "4a76fb3c7c419358b056c40d0b9b4eb7"
  },
  {
    "url": "assets/js/4.99adfabd.js",
    "revision": "2871bf45bd69147f83e18e04ed1f7902"
  },
  {
    "url": "assets/js/40.e6fb3b1d.js",
    "revision": "3c9c8b0968437f50b54f972c94a1424a"
  },
  {
    "url": "assets/js/41.61c5553a.js",
    "revision": "9fceaaf690e14592f4c229ace51b23ce"
  },
  {
    "url": "assets/js/42.19d16d9a.js",
    "revision": "e7c1494376729bc60f957971df28fb70"
  },
  {
    "url": "assets/js/43.1d3b3b42.js",
    "revision": "3db9f77df66772de79885532d377227f"
  },
  {
    "url": "assets/js/44.3b81617d.js",
    "revision": "5099ca9da14f26654710d5f2d358b850"
  },
  {
    "url": "assets/js/45.6075ff7e.js",
    "revision": "28e2145f0c460d14c37607dc3f92f458"
  },
  {
    "url": "assets/js/46.e8d9c9c0.js",
    "revision": "b277ad5c7009dacb3fc8cb26d80e7657"
  },
  {
    "url": "assets/js/47.606bc8f0.js",
    "revision": "bd15db372353633e78f126fe00cb6700"
  },
  {
    "url": "assets/js/48.d47cc7e3.js",
    "revision": "680857c867f633270926318a77cb7f95"
  },
  {
    "url": "assets/js/49.4ae2249c.js",
    "revision": "3ad47d71c60925bba60edca936ca0499"
  },
  {
    "url": "assets/js/5.c3a4fbed.js",
    "revision": "4f573430e1f3d28b93015b3b9750ee07"
  },
  {
    "url": "assets/js/50.baf231ab.js",
    "revision": "170358482c51460799736389939463e8"
  },
  {
    "url": "assets/js/51.cab555b6.js",
    "revision": "06ae5c3893e34d155337893adc3fc993"
  },
  {
    "url": "assets/js/52.7750d920.js",
    "revision": "bb75d522f7a41f137c6a6690a1888c16"
  },
  {
    "url": "assets/js/53.64e583dd.js",
    "revision": "a1f22defba886b60c8f21184d3f40c11"
  },
  {
    "url": "assets/js/54.220e6094.js",
    "revision": "45dce5726794580e1524cd14ad2878c5"
  },
  {
    "url": "assets/js/55.520abef4.js",
    "revision": "3c817ae9b34a7b1917d445cebdcc9536"
  },
  {
    "url": "assets/js/56.f28e23b4.js",
    "revision": "281bfcc048056e6915bec44abafd1b0e"
  },
  {
    "url": "assets/js/57.7a9e7d89.js",
    "revision": "3b1c613ecf717747a3d2665bec753e64"
  },
  {
    "url": "assets/js/58.3913e022.js",
    "revision": "d48f5808c2c33899ee5a525126c535a4"
  },
  {
    "url": "assets/js/59.14f0e1a2.js",
    "revision": "aced9cead658537937e04ed58b014fe8"
  },
  {
    "url": "assets/js/6.1e8a6b89.js",
    "revision": "0cf34745f97fca009cc4d0ed9d8c6fdc"
  },
  {
    "url": "assets/js/60.53518378.js",
    "revision": "c768b2c3e67445cb52d95b12c8c875a8"
  },
  {
    "url": "assets/js/61.c048adb4.js",
    "revision": "aaa5bb962b2d0b1ff9bd922516f82377"
  },
  {
    "url": "assets/js/62.cb2675ad.js",
    "revision": "0bf86ed857f9516cffc20132b3c7b33c"
  },
  {
    "url": "assets/js/63.1a3cba7a.js",
    "revision": "38db7cfb072cea079ad732d2513fa899"
  },
  {
    "url": "assets/js/64.c22c8ebd.js",
    "revision": "be84206a22bf437b724738b9052bab33"
  },
  {
    "url": "assets/js/65.693c4521.js",
    "revision": "3dd06217ff287dcbf3a2d8d553fe3574"
  },
  {
    "url": "assets/js/66.fd41542e.js",
    "revision": "e3846cb5694c063888901a10edb7229d"
  },
  {
    "url": "assets/js/67.a1d8af18.js",
    "revision": "36fb35daa891bf6dead6f6bb8cd8177e"
  },
  {
    "url": "assets/js/68.0f0fe7ce.js",
    "revision": "6d779425a0b0522f166b9569b46d658a"
  },
  {
    "url": "assets/js/69.b4db486c.js",
    "revision": "b17bf870942055dcc9c4ccaa5a9f82db"
  },
  {
    "url": "assets/js/7.199c31f4.js",
    "revision": "ef995eb269bce749a98ec8ef863a0721"
  },
  {
    "url": "assets/js/70.733eacd9.js",
    "revision": "8633f991dc1f68f467a248f988ee67f1"
  },
  {
    "url": "assets/js/71.96255859.js",
    "revision": "8871de6cc1ab9aecea14c30a084c6c83"
  },
  {
    "url": "assets/js/72.6b8861cc.js",
    "revision": "88af41ca8b73c289b852df97d940743d"
  },
  {
    "url": "assets/js/73.df88564f.js",
    "revision": "2dad20fe19bc15242f7cb93c6297f19d"
  },
  {
    "url": "assets/js/74.2e462246.js",
    "revision": "c5121fac5d2dfae4494c50e44623c682"
  },
  {
    "url": "assets/js/75.b35077bb.js",
    "revision": "f50753b4bdec370c0da11b49630074ff"
  },
  {
    "url": "assets/js/76.361fba0d.js",
    "revision": "6ce04d0a1abb122199679ddcefbca0e5"
  },
  {
    "url": "assets/js/77.9f6f57bd.js",
    "revision": "957039aa3f713bb0fe64b7841e2cb578"
  },
  {
    "url": "assets/js/78.62db281c.js",
    "revision": "de6d9fac2e6a9020334eb9241df09620"
  },
  {
    "url": "assets/js/79.858a0ef8.js",
    "revision": "e3193b9a720cf598fee1acc8c61b8e46"
  },
  {
    "url": "assets/js/80.3a1ddbe6.js",
    "revision": "87c44ded315313d125dbe90324601940"
  },
  {
    "url": "assets/js/81.7463a73e.js",
    "revision": "d2ceb53be2fb7ce0e5e978d7591225f0"
  },
  {
    "url": "assets/js/82.aeaf45ab.js",
    "revision": "5a39c5862fbd3740f4cbb1506d15b713"
  },
  {
    "url": "assets/js/83.08f7c916.js",
    "revision": "21d93077f6f6fa92e3186a2426cc7ac1"
  },
  {
    "url": "assets/js/84.0951a9f3.js",
    "revision": "1d6c871dc8815f6a00b47497e703ecf9"
  },
  {
    "url": "assets/js/85.d025e21e.js",
    "revision": "e1edb8109071ec2c7d78f9c9926c81aa"
  },
  {
    "url": "assets/js/86.bb7882be.js",
    "revision": "fcd6fb049d44c4352602a5bf227f6aa7"
  },
  {
    "url": "assets/js/87.2827e659.js",
    "revision": "5290dc201b0fcc1a6be8ab17f658acfe"
  },
  {
    "url": "assets/js/88.e5e5546f.js",
    "revision": "1330d5d2d8624c287424c108428077c8"
  },
  {
    "url": "assets/js/89.72d095ff.js",
    "revision": "bbcc2d46856bcee9cd5df822b983ab45"
  },
  {
    "url": "assets/js/90.32d3a92f.js",
    "revision": "7815863f641fb5f44c71d1f6b7e6a567"
  },
  {
    "url": "assets/js/91.b0ba26d9.js",
    "revision": "68714eeda1b70aed9baf0b16272cd746"
  },
  {
    "url": "assets/js/92.f486a565.js",
    "revision": "22ddc40609e5536e6c0c50ad4a9795c7"
  },
  {
    "url": "assets/js/93.591594df.js",
    "revision": "278317248c5e5920b61e163811a6a570"
  },
  {
    "url": "assets/js/94.ab041615.js",
    "revision": "5e13accd985c47364c814e25c092b179"
  },
  {
    "url": "assets/js/95.be79d903.js",
    "revision": "a9ec43cb9526e4c8f8d91d5eff5255d4"
  },
  {
    "url": "assets/js/96.9ed5f297.js",
    "revision": "9181e4adc9e74b08abd92d1567021c18"
  },
  {
    "url": "assets/js/97.5c7b8830.js",
    "revision": "80e831d2d2f304fb000caf265ee83ad8"
  },
  {
    "url": "assets/js/98.9e3f3fb5.js",
    "revision": "0ef66ea498977f50ef0ec596adbb0112"
  },
  {
    "url": "assets/js/99.caa2e20d.js",
    "revision": "8905d623dfe420653dd15c6162314b78"
  },
  {
    "url": "assets/js/app.1402655e.js",
    "revision": "992f95ef00412518cd2ce45e1cc6a004"
  },
  {
    "url": "assets/js/vendors~flowchart.ba735c56.js",
    "revision": "29c445d36c85d179896a622ded40e98d"
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
