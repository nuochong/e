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
    "revision": "a79436d6c04bb39dab3183beeaec422f"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "08dfcafe2dcf38418c1026ea538e7f16"
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
    "url": "assets/css/15.styles.a0d17e7d.css",
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
    "url": "assets/css/22.styles.689e9014.css",
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
    "url": "assets/css/25.styles.73627609.css",
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
    "url": "assets/css/styles.b9691f46.css",
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
    "url": "assets/js/101.04749c98.js",
    "revision": "a1b496fec91e71561397bd40a5dc4bf0"
  },
  {
    "url": "assets/js/102.b504b4a0.js",
    "revision": "9a3912199e61bc2793f009d7b18808cd"
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
    "url": "assets/js/15.a0d17e7d.js",
    "revision": "add1d5c6b1b9ee548775e5c38b923feb"
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
    "url": "assets/js/22.689e9014.js",
    "revision": "be0d0824c16bae0a9e3260a33594e64b"
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
    "url": "assets/js/25.73627609.js",
    "revision": "6a40a35ec00f7d85d78e6bcf12a96d3f"
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
    "url": "assets/js/55.c79d75c0.js",
    "revision": "699d7beed19d8285ac53b228995a82b0"
  },
  {
    "url": "assets/js/56.3301a500.js",
    "revision": "73efeec4091c9e438f49260d91066be9"
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
    "url": "assets/js/62.2dd830c0.js",
    "revision": "dfca669a09995f3fc20efedbbcef5ab1"
  },
  {
    "url": "assets/js/63.6754c725.js",
    "revision": "a32cc079d0f8fb0212572a3b830b3c77"
  },
  {
    "url": "assets/js/64.7531bebe.js",
    "revision": "d47a202dc5fb0698b20630cef632ebf8"
  },
  {
    "url": "assets/js/65.c88c58c1.js",
    "revision": "f8205bdba6a41599322947d280fec2ca"
  },
  {
    "url": "assets/js/66.e0e90994.js",
    "revision": "f2efd3809fd748c2c6123e38764136e0"
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
    "url": "assets/js/69.f83e5332.js",
    "revision": "e09bd37ba720e36b9936d5c506800f1c"
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
    "url": "assets/js/72.db5cc67a.js",
    "revision": "3c18ca823b6b104abcdf71202d4ba540"
  },
  {
    "url": "assets/js/73.91347ca6.js",
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
    "url": "assets/js/78.590ee014.js",
    "revision": "b691a8315b22f497b05fd3c1a3e41c8c"
  },
  {
    "url": "assets/js/79.3bb1c457.js",
    "revision": "d38c274797b4384420285a8c9668a679"
  },
  {
    "url": "assets/js/80.73b2fccd.js",
    "revision": "01f8c4d929ee73d2a9e35ef8781f4c41"
  },
  {
    "url": "assets/js/81.b79d2091.js",
    "revision": "515d4b4e32c492414925140590ed26a1"
  },
  {
    "url": "assets/js/82.01717849.js",
    "revision": "040bddc76c7ce00ce81d4f5c5ac7e13d"
  },
  {
    "url": "assets/js/83.46c8db92.js",
    "revision": "545f5d59bfdaeaf4c832a48afbc326ea"
  },
  {
    "url": "assets/js/84.321f8e1f.js",
    "revision": "b50a1edd4608555f598b7b90c163204d"
  },
  {
    "url": "assets/js/85.e5deb80c.js",
    "revision": "06ce4a48a91a771bc509d41f1556fce9"
  },
  {
    "url": "assets/js/86.6ed0a1e9.js",
    "revision": "f89f59e613187181bc9af748a5eb9bbb"
  },
  {
    "url": "assets/js/87.7be985c9.js",
    "revision": "f053a405b4c3dcbbf684ecdff9f1781c"
  },
  {
    "url": "assets/js/88.b67421e4.js",
    "revision": "4fbaa886a721e3faad6e5934eba90fd6"
  },
  {
    "url": "assets/js/89.2e00ea66.js",
    "revision": "dc90ca9bb77ad63328f8de4b94386cb7"
  },
  {
    "url": "assets/js/90.4af3e00f.js",
    "revision": "d22bb3c5000d1144ef29f367f5fd8cc5"
  },
  {
    "url": "assets/js/91.127a0b03.js",
    "revision": "a47e6a6a424d9aadf51ef70195fd91ea"
  },
  {
    "url": "assets/js/92.bb96586e.js",
    "revision": "090f97516723c3ed72fdc91911946702"
  },
  {
    "url": "assets/js/93.d36d7b29.js",
    "revision": "dce2c725b5226e3ab5268c48ae9b5cf3"
  },
  {
    "url": "assets/js/94.590c00b7.js",
    "revision": "3715b6aeaae718e20f4f471fd1ecd6d9"
  },
  {
    "url": "assets/js/95.a5ecd2dc.js",
    "revision": "c89b93f6d2e123ed4bac46d5585212ae"
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
    "url": "assets/js/99.dd5fa396.js",
    "revision": "b70d8dd2545402d313b4b4ee48e71931"
  },
  {
    "url": "assets/js/vendors~flowchart.992bf744.js",
    "revision": "aa7aa7edc32637af63e96a74ceef573a"
  },
  {
    "url": "authors/index.html",
    "revision": "318844bd8ed4e79c323a927d1d9b502b"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "2b2706cbe9a2c77df30ab979490e1bc9"
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
    "revision": "3a695c4960c1328ca480ade981eb4f58"
  },
  {
    "url": "categories/frontend.html",
    "revision": "b79acdeb73b158585e5b7b1b467b8591"
  },
  {
    "url": "categories/index.html",
    "revision": "4156163885897bee6e5b2e97ebb8f102"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "4d2d1dedd33e11fce40606efaada08b9"
  },
  {
    "url": "contact/index.html",
    "revision": "7406172ea52d9b1214e100b18e679c1f"
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
    "url": "gallery/index.html",
    "revision": "4452effb5c0f45574898d7078cd5e3bd"
  },
  {
    "url": "gallery/thumbs/2-small.jpg",
    "revision": "578cc7b21b9b2cb9b4f083b02a1c7b19"
  },
  {
    "url": "gallery/thumbs/20190210_122840-small.jpg",
    "revision": "02ed1a497792b6d8b40796a819f1dadb"
  },
  {
    "url": "gallery/thumbs/20190211_115351-small.jpg",
    "revision": "7fc0381a5d020c758b2e83d95e03a57f"
  },
  {
    "url": "gallery/thumbs/20190211_122735-small.jpg",
    "revision": "5ca29b500f68470496424ba4b3e0ad5a"
  },
  {
    "url": "gallery/thumbs/20190212_170821-small.jpg",
    "revision": "489e862ef913cf390195ad07c65a7cda"
  },
  {
    "url": "gallery/thumbs/20190213_112738_003-small.jpg",
    "revision": "25db26bd010a0698524a3bcbd1732f6a"
  },
  {
    "url": "gallery/thumbs/20190214_165923-small.jpg",
    "revision": "6083c4cbdbd9a57f7bdc9483285b9420"
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
    "url": "image-social-share-en.png",
    "revision": "9a16367ce5bf5c91840834db89c6c074"
  },
  {
    "url": "image-social-share-zh.png",
    "revision": "14d33ab3d91740af9c8d42be9bb969ae"
  },
  {
    "url": "image-social-share.png",
    "revision": "8a837fb586cb5deb9bf52a9efd750b46"
  },
  {
    "url": "index.html",
    "revision": "6b78f8f1868f8b4124250910efcb2e29"
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
    "url": "photograph/icons.svg",
    "revision": "5d6e0255a7862551b3a3afea8568f305"
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
    "url": "photograph/photo/small/13-small.jpg",
    "revision": "481fb760fca770be1e8d78f48a708c5f"
  },
  {
    "url": "photograph/photo/small/14-small.jpg",
    "revision": "dbb54130c53d7ac88b28b6cdb2b4ea04"
  },
  {
    "url": "photograph/photo/small/15-small.jpg",
    "revision": "4414ad5a60b2ddb92a1cf79cd28136f6"
  },
  {
    "url": "photograph/photo/small/16-small.jpg",
    "revision": "955ce5dbebddbe33b807dbd24f11d067"
  },
  {
    "url": "photograph/photo/small/17-small.jpg",
    "revision": "73f35009cb91dce2354528a5f23d1080"
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
    "revision": "a817f11013a205f18cdb51a09f1a7164"
  },
  {
    "url": "posts/index.html",
    "revision": "30d30a3de248c947a3cfce61f27eaa15"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "73be2dbb012f9b061dd6d2be2f04aa79"
  },
  {
    "url": "travel/index.html",
    "revision": "a913b73baaff347dc865090018500b07"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "7e28898f7610bbe3fb60882f1dc3be2f"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "6e31e42997e438b038aa920b5a55ef48"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "c49cff2597a200339ac53a2e4760be09"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "605053d8af4cdf56f60faa1209aea8d1"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "b8927adfcfe2ee434898e9fe8d28d2e8"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "178927b5002e8c10a99fc37050399c39"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "040ce2340381e0800d0d4e426298b3bb"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "cb350353e042b0f675d12961e12bb137"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "e813e3897830ec64b8880407f66cb10d"
  },
  {
    "url": "zh/index.html",
    "revision": "3d0df46ef67bd96cbcf4bde302789c37"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "61e06abfd77f75948a8d272c61eab1c7"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "65ff49434e2343160b416f48a9fd6034"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "b5943f0afced88066476d4b77b60635b"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "77936d7fd0e68bd9dea73f632d0438cc"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "bffd75970795763d18876ecc781ab4cb"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "7d2782766a0a55ab2dee9f51fd15910f"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "41d4088b53f4ddd95c2c87cd4e093883"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "19e939eb95f836ff57ddf6f710408670"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "a31992f48d856a2593368ea05a30d50a"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "8c4e4becdb1ec4d632dca1d52d9309a9"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "cb5873691251422a86615a7ae39ef5bb"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "9e6f834849f66923f4ae3818ae3c8ad6"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "7add8c7f73dcbec60165dbe7f0fad2aa"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "2f8619d8a8c6ac8bc72191234d1a3fbe"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "c3180895527f86de06859a8c8b363ed4"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "1119888551028072ebb7c65e8778c61a"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "16ce167dc6763f95bbe1ad3223195198"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "2742263f89934c349ec8ee85c8834233"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "1308b4462849730392390b400261dc92"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "54a1c71a51875df8d5221c039afd1e15"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "5da534f536112e25bef970678767f796"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "39daf9e9ceee2c30278b6e0c9ac0a630"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "d0fc62a71cdd9ec7b98988dccee3cfc3"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "bbf1548d5d3fcff447d64d97921cd06e"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "68e8344a0fd051347b29b44754fd6e59"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "7d1199a7f5a0ad82e992dc453f304cbb"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "077a0cc5138a0200f180a096cbed8a79"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "07bfc62039ece446510ded6a02da43c4"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "9946a3889356ed1dfd60520035f12795"
  },
  {
    "url": "zh/posts/tong-guohtml-shu-xing-ke-gai-shan-yong-hu-de-shuang-chong-shen-fen-yan-zheng-ti-yan.html",
    "revision": "108488746e8cacd5e56aab81dc6125d7"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "35e84d2b0964b429cd3a960a6bad2ab3"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "32c4bef6109520a5358705f761072dd5"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "41e0fee6ad385c2f27f5137637f2cafe"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "cd032131b5bd3ec92fb28142a7447973"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "e7c5814358f8a54040f4dab36262a1e4"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "64b5fbb51afb8ec3911db7bf40bcb461"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "9edaa77b7bc40a38b537678498f89112"
  },
  {
    "url": "zh/posts/yu-shan-dao.html",
    "revision": "032238454541be34cf87471767db8eb5"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "4cbac17d4a2914f69ce6e27f8a6f2650"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "0c188b3f7b0cd72de6f552e9a3bee41c"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "6928ba9138fc07f8d98448e8a38693fc"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "aa99814a09e673af0c76ea5f3f36497d"
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
