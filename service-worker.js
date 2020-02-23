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
    "revision": "63aa2d608d117fdc9408feb4e57e9237"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "2756231b467220c13a6beaf92d229582"
  },
  {
    "url": "assets/css/0.styles.c9b73e64.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.2100691d.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.59c56a9a.css",
    "revision": "c1d016415691a599105549ad2e4df75d"
  },
  {
    "url": "assets/css/11.styles.b8e211d6.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "assets/css/12.styles.59a898ab.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/13.styles.6748dce4.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/14.styles.b26bc78d.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/15.styles.fc93e22b.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "assets/css/16.styles.3776796b.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "assets/css/17.styles.8fceb276.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/18.styles.738488ad.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/19.styles.8afff5c2.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/2.styles.76906b15.css",
    "revision": "1797b8d617427ed3957936931d189371"
  },
  {
    "url": "assets/css/20.styles.3b31ca67.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/21.styles.24e966dc.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/22.styles.38644e02.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/23.styles.e0933e8e.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/24.styles.6ce081ae.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/25.styles.3063c3a2.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/26.styles.5277c6c8.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/27.styles.07bbfbd6.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/3.styles.d300bc54.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "assets/css/31.styles.e93619cc.css",
    "revision": "68488905995da2a785500f9bb7753c21"
  },
  {
    "url": "assets/css/4.styles.f15e68d4.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.b21665d4.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "assets/css/7.styles.3f7d0493.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.cd4ac461.css",
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
    "url": "assets/js/0.c9b73e64.js",
    "revision": "568bfac84e3d5564e30da402d80920c9"
  },
  {
    "url": "assets/js/1.2100691d.js",
    "revision": "a002960f537a657b0e10aa2eb03905f6"
  },
  {
    "url": "assets/js/10.59c56a9a.js",
    "revision": "54918f6a8b21ef2bce6b6dca225369c4"
  },
  {
    "url": "assets/js/100.260a0c6e.js",
    "revision": "515f7ebb5c568805313bfd794df74ef6"
  },
  {
    "url": "assets/js/101.ef6e5467.js",
    "revision": "5a3ee188a7ca61e93c12949e9315812b"
  },
  {
    "url": "assets/js/102.0b21fcb9.js",
    "revision": "1ae83e0cb053fbadcc3d0645769760b7"
  },
  {
    "url": "assets/js/103.62c492d1.js",
    "revision": "bfe1bf53c928e7f2181484417f422bd3"
  },
  {
    "url": "assets/js/104.1def107c.js",
    "revision": "8afa7d84d74f1f3e277b39e185664653"
  },
  {
    "url": "assets/js/105.5bafd582.js",
    "revision": "20fccf433c009b05d64a4e28f05997f5"
  },
  {
    "url": "assets/js/11.b8e211d6.js",
    "revision": "37e3b3ce49de701f00a9929c37d41108"
  },
  {
    "url": "assets/js/12.59a898ab.js",
    "revision": "31a15aba3550e63e221918ac8aa6ea79"
  },
  {
    "url": "assets/js/13.6748dce4.js",
    "revision": "7167540dad4fdb2e92793cf7e2e4a769"
  },
  {
    "url": "assets/js/14.b26bc78d.js",
    "revision": "f7f087c63397269a5825990d5f67f81c"
  },
  {
    "url": "assets/js/15.fc93e22b.js",
    "revision": "baa8db4ea5ee3c0a59443f316239974d"
  },
  {
    "url": "assets/js/16.3776796b.js",
    "revision": "61b17f662a01a0e40b164d4f76b85aa6"
  },
  {
    "url": "assets/js/17.8fceb276.js",
    "revision": "8ac28ede26ad5a618cf0426d24d6663c"
  },
  {
    "url": "assets/js/18.738488ad.js",
    "revision": "ba77cc72b024996432633bfad0ce1147"
  },
  {
    "url": "assets/js/19.8afff5c2.js",
    "revision": "39df3f58c6fa12418d3a413744e54138"
  },
  {
    "url": "assets/js/2.76906b15.js",
    "revision": "d17fbbc1752edcaf8cba9037cc342ace"
  },
  {
    "url": "assets/js/20.3b31ca67.js",
    "revision": "ddb72d52714fac46f6ba4c3c8be39b08"
  },
  {
    "url": "assets/js/21.24e966dc.js",
    "revision": "87df7cbe9fef352b209bc377058ec7fc"
  },
  {
    "url": "assets/js/22.38644e02.js",
    "revision": "124593c33122889390863292f6268a53"
  },
  {
    "url": "assets/js/23.e0933e8e.js",
    "revision": "ca10993c2784c9094d650f73c3d7b951"
  },
  {
    "url": "assets/js/24.6ce081ae.js",
    "revision": "c9d7d2ce65cef0762a271e8c4dbc77da"
  },
  {
    "url": "assets/js/25.3063c3a2.js",
    "revision": "31f323e311ce1fb2d6f01fbb320cf198"
  },
  {
    "url": "assets/js/26.5277c6c8.js",
    "revision": "7a88660a696ed268f19ab480d1c01086"
  },
  {
    "url": "assets/js/27.07bbfbd6.js",
    "revision": "916b666c8b765541e01470e71ac3b1da"
  },
  {
    "url": "assets/js/28.0b91c3ac.js",
    "revision": "8187220fd9313f532cebcb3e3d2bdffc"
  },
  {
    "url": "assets/js/29.469dc1b4.js",
    "revision": "8f2b0253caca0ffd43f91ae3e205430f"
  },
  {
    "url": "assets/js/3.d300bc54.js",
    "revision": "5c388378b85751a69fd3ea18d607d22f"
  },
  {
    "url": "assets/js/30.64ce65a8.js",
    "revision": "44fd0f09ffc080878c3ce3dfb2b9c8f1"
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
    "url": "assets/js/35.417c068b.js",
    "revision": "b842fd2d4090bd4de0cfaf50e22fae95"
  },
  {
    "url": "assets/js/36.a4597714.js",
    "revision": "d8f3e9ff42ca355f33a41588cc864fb3"
  },
  {
    "url": "assets/js/37.8022371f.js",
    "revision": "540391ea348f0a09202f93a7fb18e093"
  },
  {
    "url": "assets/js/38.fd68b60b.js",
    "revision": "e790b7b34be376a95785940826ac1866"
  },
  {
    "url": "assets/js/39.1a0ef215.js",
    "revision": "26b096bb4c1a4a27cb34f206ff79314f"
  },
  {
    "url": "assets/js/4.f15e68d4.js",
    "revision": "7b5ac81e2f1687d9f4fdc3ea3b2c5b44"
  },
  {
    "url": "assets/js/40.7eb2a645.js",
    "revision": "4c9e7f32e928ddbde0b9b27656391557"
  },
  {
    "url": "assets/js/41.d96fd340.js",
    "revision": "695fbf2dcfb64d58da5641d86e1e83d8"
  },
  {
    "url": "assets/js/42.58b74798.js",
    "revision": "4b46324e4ebd95282ba66405e20e0432"
  },
  {
    "url": "assets/js/43.7fb84693.js",
    "revision": "fe7e5b0c52c2575b143aad2ee2e3ddd7"
  },
  {
    "url": "assets/js/44.49315396.js",
    "revision": "a7989bb5aa32914a0026d84f13a4cf72"
  },
  {
    "url": "assets/js/45.5ebf6c6a.js",
    "revision": "02ea7ded71aba3d98e225501863ab996"
  },
  {
    "url": "assets/js/46.89271438.js",
    "revision": "a881960009532cf07d8c09e10da78783"
  },
  {
    "url": "assets/js/47.cfc2d9d3.js",
    "revision": "013a6c63a57187871f0df4fdfc7626da"
  },
  {
    "url": "assets/js/48.9f784d7d.js",
    "revision": "e3f35498dbba0e71a2d287f3f55a4254"
  },
  {
    "url": "assets/js/49.ebf8b6cf.js",
    "revision": "a66e806d6469886aec1e4c48d108d803"
  },
  {
    "url": "assets/js/5.6d6d56a1.js",
    "revision": "845d5b242ff972b26dc4ecfbcfc3dae3"
  },
  {
    "url": "assets/js/50.4ece4431.js",
    "revision": "a2d324b6bf87733e5fd6ab1854374ef2"
  },
  {
    "url": "assets/js/51.bd8b2745.js",
    "revision": "fcf0e93d28768ccb91eaaf27646f7d68"
  },
  {
    "url": "assets/js/52.27d5b181.js",
    "revision": "d7eee4439f0ca34d650e00560dae81e1"
  },
  {
    "url": "assets/js/53.9c0ba896.js",
    "revision": "7d039f405a50f32af783d0e5d1702bab"
  },
  {
    "url": "assets/js/54.4729f6e8.js",
    "revision": "060c56e8fb5eb0d55c0791bbba8dd697"
  },
  {
    "url": "assets/js/55.f4e30eba.js",
    "revision": "5c9bc747fad8e7f957f04dca5d27ef82"
  },
  {
    "url": "assets/js/56.1b15b2f3.js",
    "revision": "18dda3c80f1bc905208cbd845439bdcf"
  },
  {
    "url": "assets/js/57.64e72ce0.js",
    "revision": "0ec1d4b80bc56a2e96c4898304f30cd1"
  },
  {
    "url": "assets/js/58.8b393540.js",
    "revision": "e0325619101e41c244b9f09f6c98fb74"
  },
  {
    "url": "assets/js/59.dfbe88b4.js",
    "revision": "812812bf3cecb1cc290c0a56c923aa17"
  },
  {
    "url": "assets/js/6.b21665d4.js",
    "revision": "9125b53e61a93b6bf716694f8d700563"
  },
  {
    "url": "assets/js/60.012a26f6.js",
    "revision": "491f8193dbf45f59d9bc1675f4e01ad7"
  },
  {
    "url": "assets/js/61.f9183a06.js",
    "revision": "f63a55aae27a6dd4d66ee583d0411141"
  },
  {
    "url": "assets/js/62.5f9a8340.js",
    "revision": "5abcbb7274a28e3d467eb1852e3e8f02"
  },
  {
    "url": "assets/js/63.c208b609.js",
    "revision": "a92daf266abe45f96a1975fed4768914"
  },
  {
    "url": "assets/js/64.e938f7ef.js",
    "revision": "a2734b7b3527b1ef8ff6d2cac89f742a"
  },
  {
    "url": "assets/js/65.4eba430f.js",
    "revision": "9fe1568cc9d6820022307c44fab6d16d"
  },
  {
    "url": "assets/js/66.23ae97f6.js",
    "revision": "c069839f87f2b818253083e424932934"
  },
  {
    "url": "assets/js/67.06d70b9b.js",
    "revision": "b90f48e38c0d290114ad79557db8e3d0"
  },
  {
    "url": "assets/js/68.1ad24c74.js",
    "revision": "a1b02517d39ffaf145bfa5f7d5e075b2"
  },
  {
    "url": "assets/js/69.d2895b1b.js",
    "revision": "daea82d1af6c3344340430f6286eea12"
  },
  {
    "url": "assets/js/7.3f7d0493.js",
    "revision": "ac30dfdf735844901cb26f8d4bac2bc9"
  },
  {
    "url": "assets/js/70.0dccd28d.js",
    "revision": "8f2d46347149cf0ff13fd44150c21846"
  },
  {
    "url": "assets/js/71.5f7909dd.js",
    "revision": "02fa42b78c8bdeb65f8014812130af5a"
  },
  {
    "url": "assets/js/72.3aac3ce4.js",
    "revision": "db367e8a222400c1adcda36973e35184"
  },
  {
    "url": "assets/js/73.d9a5638d.js",
    "revision": "2451bff0547e0c2bec21dc93f5f0189a"
  },
  {
    "url": "assets/js/74.dcc5dc13.js",
    "revision": "48bd8bb2405de36dc96aaf1af002dee7"
  },
  {
    "url": "assets/js/75.a387d0a1.js",
    "revision": "14301bfdbae0ae4f9d4e2ecac29d83fe"
  },
  {
    "url": "assets/js/76.4be5779e.js",
    "revision": "81f2250046f0b15d75377e9225e18c41"
  },
  {
    "url": "assets/js/77.28ce7d64.js",
    "revision": "9e2f50ec373ae7e74f5c48a0341951f2"
  },
  {
    "url": "assets/js/78.c3250a11.js",
    "revision": "790f6fde79675b2d6febda10636b4b58"
  },
  {
    "url": "assets/js/79.8de360aa.js",
    "revision": "660196168a3bdd0753d2b5ba47abcaee"
  },
  {
    "url": "assets/js/80.c36dd9d4.js",
    "revision": "b704249580e109d0fd744b0d23b7f40a"
  },
  {
    "url": "assets/js/81.b79d2091.js",
    "revision": "515d4b4e32c492414925140590ed26a1"
  },
  {
    "url": "assets/js/82.ac817a3a.js",
    "revision": "d7c37ce5cdb766211ea8eb73608363d8"
  },
  {
    "url": "assets/js/83.46c8db92.js",
    "revision": "545f5d59bfdaeaf4c832a48afbc326ea"
  },
  {
    "url": "assets/js/84.6b2f1b71.js",
    "revision": "b5e30b29f106da941e310e80f4c85f8d"
  },
  {
    "url": "assets/js/85.af16bda7.js",
    "revision": "a3cd11ce9701046c8b53f780f1f6eaef"
  },
  {
    "url": "assets/js/86.b4d2a533.js",
    "revision": "e4eb01270311e94540b8185362fcaa0b"
  },
  {
    "url": "assets/js/87.7be985c9.js",
    "revision": "f053a405b4c3dcbbf684ecdff9f1781c"
  },
  {
    "url": "assets/js/88.c55e483b.js",
    "revision": "097d5723b82b2742a949b371689d9c66"
  },
  {
    "url": "assets/js/89.b288d9d4.js",
    "revision": "754b6f0be85a3f29695af3de7f1f3400"
  },
  {
    "url": "assets/js/90.8bcee0f7.js",
    "revision": "c24aeec324392d44dbdeaf85597b2b3f"
  },
  {
    "url": "assets/js/91.127a0b03.js",
    "revision": "a47e6a6a424d9aadf51ef70195fd91ea"
  },
  {
    "url": "assets/js/92.23361038.js",
    "revision": "979a29f41218bca7784a4c4c9b0d4a46"
  },
  {
    "url": "assets/js/93.d36d7b29.js",
    "revision": "dce2c725b5226e3ab5268c48ae9b5cf3"
  },
  {
    "url": "assets/js/94.c04d7266.js",
    "revision": "46f2804a64cd59b5c57e9017e018f3cb"
  },
  {
    "url": "assets/js/95.84381e82.js",
    "revision": "db92df820dd99eb7d7550bb54232b396"
  },
  {
    "url": "assets/js/96.108691df.js",
    "revision": "3747b54964e20331bffda094c7e7a454"
  },
  {
    "url": "assets/js/97.78e73b36.js",
    "revision": "e20a3180e27e8e8c2223199b2a40555a"
  },
  {
    "url": "assets/js/98.e1263e4b.js",
    "revision": "896f8dfee72b8ae60dfe3ed4e100995a"
  },
  {
    "url": "assets/js/99.8b5b747b.js",
    "revision": "f051838e06ee526c6b0093761710213f"
  },
  {
    "url": "assets/js/vendors~flowchart.992bf744.js",
    "revision": "aa7aa7edc32637af63e96a74ceef573a"
  },
  {
    "url": "authors/index.html",
    "revision": "3595c91596663dd90d7b2044fe8a8493"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "d0453e7b8f5c52f656e0c305180161ac"
  },
  {
    "url": "autores/github_awatar2.png",
    "revision": "4f017abcc4845fbe3149814943309303"
  },
  {
    "url": "autores/nuochong.png",
    "revision": "f5dc4668fa3cc1173ca23413e490bd06"
  },
  {
    "url": "categories/backend.html",
    "revision": "e90e12c31c805f21b05d4bbbb9626a0e"
  },
  {
    "url": "categories/frontend.html",
    "revision": "a02516c485e7f30c4d078f167939b88e"
  },
  {
    "url": "categories/index.html",
    "revision": "1e5715316d6ad8960fd77d25b6e202bd"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "fe7e28fd12b6c419201cf895eca2dffc"
  },
  {
    "url": "contact/index.html",
    "revision": "7e148eb145852cde100de7332ae36e5f"
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
    "revision": "73823e7067b051645d3c9fe8c93be45c"
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
    "revision": "4f3cf0f384b155165791d62b19b099f7"
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
    "url": "index.html",
    "revision": "2f0effe906a1301a9331a8c2204dee82"
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
    "url": "photograph/quote-1.png",
    "revision": "992f452390d29db27524de3a32d1b76c"
  },
  {
    "url": "photograph/quote-2.png",
    "revision": "cb5e1250e0f038767825e0162df4f584"
  },
  {
    "url": "photograph/side-arrows.png",
    "revision": "ed8a2f7221467895d286793be8c3bd6d"
  },
  {
    "url": "photograph/social-sprit-bottom.png",
    "revision": "a483ce08897b290f7c476e9d918e2cd2"
  },
  {
    "url": "photograph/social-sprit.png",
    "revision": "9685a3e40fc0efb895e3bc58dd9a5882"
  },
  {
    "url": "posts/finally-have-a-nest.html",
    "revision": "a40f90897f0a59df3f21f536c7649271"
  },
  {
    "url": "posts/index.html",
    "revision": "635bf1a0323fc5d02f39f561bbbce6ac"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "d951c014166bacd373104e99df22b0e1"
  },
  {
    "url": "social/image-social-share-en.png",
    "revision": "9a16367ce5bf5c91840834db89c6c074"
  },
  {
    "url": "social/image-social-share-zh.png",
    "revision": "14d33ab3d91740af9c8d42be9bb969ae"
  },
  {
    "url": "social/image-social-share.png",
    "revision": "8a837fb586cb5deb9bf52a9efd750b46"
  },
  {
    "url": "travel/index.html",
    "revision": "bded2f22a3074d5d02460826735ae16a"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "8b6247c29d02772b20ca0ff52a0cc0a9"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "a2f54e178706b8f51661ff635e242281"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "c8731e486a8b3f8568d835909b5f7411"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "07a0bfbac4b4a7a316922d71ce142493"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "f6a1195617827a3c7e195d0bdc6e0b8d"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "1a8d6b33ebc820ab6f566f943af8667b"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "746dd4bdf21c577c64312054b739d3c0"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "e59a90129c6a72a63d99e46d009e2792"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "d9907dd4d1601d687ea853fbd41f1112"
  },
  {
    "url": "zh/index.html",
    "revision": "3ef6d8ba4e37f6f1ca4890f50290ca37"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "516a74fd99c64924ce7ff5f2bf65f515"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "a48ef4b3faff8fb6638bc5ef91a4d60f"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "b12a331ee2d444b56da2539bd3572c37"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "bce8251891bf66ecc6952a0d02bedb1c"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "d21ce244d339d0b47d3273ae467dc9fb"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "76d20cf470513fdb76fe10a74fe674e6"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "6b4120f33a125528c25dc7671988342c"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "7735d56dde9108b9c5e2e5394eb13701"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "f7e15cc591b083eeba3e0c7ed475487e"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "6ee5c7a3eeee3943c6a77ff595f6a84c"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "7ae015fe9fad2eac6abf43dccb46345a"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "4026ed938108ca026c33767c46ff91e3"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "c2a8aeeca27dde64acc6b245867168c3"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "a5215541af594c0ef1c44b9addd3d77b"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "f798082a8395da64865c259768f894ad"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "a4850ae3f6e0519454e3d14a7574847e"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "9174d2c8883bd9c38285996ed2067fa1"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "e28ae7235818ab8507f6c481e67976e4"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "e049410bf1f0dcc2d1f5fa955ec4de76"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "5cbadad332ba9ffeda278bb2089c6577"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "93d576df389e7eccf29342f6d7442601"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "7c826ad372d309326cb2850086d9ca5a"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "fee5e9346cbc1e835d8eca6d6d9550f1"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "9ada8c5bdac3bbcd6d90a5b864cc53f8"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "36b25e3b48e3cad0d5248dfe92754c43"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "c2695787a5c85b46340a647285e84db4"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "9937ec4e2bd84e8fffe30f83471a14c5"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "5a9d7f1a4dd2766682ee4ef5fc0745cf"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "8d0d284e25c9991036fa5518471b30d0"
  },
  {
    "url": "zh/posts/tong-guohtml-shu-xing-ke-gai-shan-yong-hu-de-shuang-chong-shen-fen-yan-zheng-ti-yan.html",
    "revision": "ddc28f2ce83c9bb6430a6910c5def49f"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "5326e9b7b60fb60e7b75c448da3084ab"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "f1d857e929b40fa11386f00dd29a26be"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "d862313bf68faf9506d611e1b13751c7"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "024fdf42c736a4e25a41b3613a487240"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "1295a522e4d8259ac4c0036e9b61740f"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "254c70f16958def0816870d143bfedda"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "ad44b3bcf614054e2c7289d382e7c473"
  },
  {
    "url": "zh/posts/yu-shan-dao.html",
    "revision": "401558daa2c25c8187ee70fefc268c15"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "cdcac8fb5c6eabb555ecfddb7fb0bc04"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "64192dca238a9c02ea8c05050b508df6"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "2569425d5ea9a1393960adda2e5ac75f"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "c3e11598bd249fc314540f80ca95bf03"
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
