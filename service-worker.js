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
    "revision": "ce135779b844554e1d0ff5dad4ed15a3"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "56a507708fab6bf5636c9cf346e14fbe"
  },
  {
    "url": "assets/css/0.styles.7da66add.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.1b3771be.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.99751187.css",
    "revision": "c1d016415691a599105549ad2e4df75d"
  },
  {
    "url": "assets/css/11.styles.66f4d594.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "assets/css/12.styles.4f6df1e6.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/13.styles.7e280c0f.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/14.styles.b2c2201c.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/15.styles.49f21290.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "assets/css/16.styles.6d3e1c24.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "assets/css/17.styles.01e6b81a.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/18.styles.cdf0d499.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/19.styles.992fdcae.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/2.styles.f59dc311.css",
    "revision": "1797b8d617427ed3957936931d189371"
  },
  {
    "url": "assets/css/20.styles.8af442f3.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/21.styles.0e552cf7.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/22.styles.d2c8c14e.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/23.styles.a3aa3bd2.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/24.styles.6ce081ae.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/25.styles.08d6983d.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/26.styles.8785fbf7.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/27.styles.b2dfe2e8.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/3.styles.bb3ff98f.css",
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
    "url": "assets/css/6.styles.5f5e2587.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "assets/css/7.styles.3f7d0493.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.4287dbc7.css",
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
    "url": "assets/js/0.7da66add.js",
    "revision": "568bfac84e3d5564e30da402d80920c9"
  },
  {
    "url": "assets/js/1.1b3771be.js",
    "revision": "a002960f537a657b0e10aa2eb03905f6"
  },
  {
    "url": "assets/js/10.99751187.js",
    "revision": "54918f6a8b21ef2bce6b6dca225369c4"
  },
  {
    "url": "assets/js/100.dcaf83db.js",
    "revision": "515f7ebb5c568805313bfd794df74ef6"
  },
  {
    "url": "assets/js/101.a6799eaf.js",
    "revision": "5a3ee188a7ca61e93c12949e9315812b"
  },
  {
    "url": "assets/js/102.82b78253.js",
    "revision": "1ae83e0cb053fbadcc3d0645769760b7"
  },
  {
    "url": "assets/js/103.80fa8fcd.js",
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
    "url": "assets/js/11.66f4d594.js",
    "revision": "7cb2b6eb51d803156d1502d93963cb5b"
  },
  {
    "url": "assets/js/12.4f6df1e6.js",
    "revision": "31a15aba3550e63e221918ac8aa6ea79"
  },
  {
    "url": "assets/js/13.7e280c0f.js",
    "revision": "a13104d46daf661ffeb9c7c278f8e91b"
  },
  {
    "url": "assets/js/14.b2c2201c.js",
    "revision": "f7f087c63397269a5825990d5f67f81c"
  },
  {
    "url": "assets/js/15.49f21290.js",
    "revision": "add1d5c6b1b9ee548775e5c38b923feb"
  },
  {
    "url": "assets/js/16.6d3e1c24.js",
    "revision": "61b17f662a01a0e40b164d4f76b85aa6"
  },
  {
    "url": "assets/js/17.01e6b81a.js",
    "revision": "8ac28ede26ad5a618cf0426d24d6663c"
  },
  {
    "url": "assets/js/18.cdf0d499.js",
    "revision": "ba77cc72b024996432633bfad0ce1147"
  },
  {
    "url": "assets/js/19.992fdcae.js",
    "revision": "39df3f58c6fa12418d3a413744e54138"
  },
  {
    "url": "assets/js/2.f59dc311.js",
    "revision": "d17fbbc1752edcaf8cba9037cc342ace"
  },
  {
    "url": "assets/js/20.8af442f3.js",
    "revision": "ddb72d52714fac46f6ba4c3c8be39b08"
  },
  {
    "url": "assets/js/21.0e552cf7.js",
    "revision": "87df7cbe9fef352b209bc377058ec7fc"
  },
  {
    "url": "assets/js/22.d2c8c14e.js",
    "revision": "124593c33122889390863292f6268a53"
  },
  {
    "url": "assets/js/23.a3aa3bd2.js",
    "revision": "ca10993c2784c9094d650f73c3d7b951"
  },
  {
    "url": "assets/js/24.6ce081ae.js",
    "revision": "c9d7d2ce65cef0762a271e8c4dbc77da"
  },
  {
    "url": "assets/js/25.08d6983d.js",
    "revision": "6a40a35ec00f7d85d78e6bcf12a96d3f"
  },
  {
    "url": "assets/js/26.8785fbf7.js",
    "revision": "7a88660a696ed268f19ab480d1c01086"
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
    "url": "assets/js/29.fcb1a481.js",
    "revision": "8f2b0253caca0ffd43f91ae3e205430f"
  },
  {
    "url": "assets/js/3.bb3ff98f.js",
    "revision": "5c388378b85751a69fd3ea18d607d22f"
  },
  {
    "url": "assets/js/30.482ff946.js",
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
    "url": "assets/js/35.bf394006.js",
    "revision": "b842fd2d4090bd4de0cfaf50e22fae95"
  },
  {
    "url": "assets/js/36.58ee63f0.js",
    "revision": "d8f3e9ff42ca355f33a41588cc864fb3"
  },
  {
    "url": "assets/js/37.234e87a5.js",
    "revision": "540391ea348f0a09202f93a7fb18e093"
  },
  {
    "url": "assets/js/38.cc2087c9.js",
    "revision": "e790b7b34be376a95785940826ac1866"
  },
  {
    "url": "assets/js/39.1210a95b.js",
    "revision": "26b096bb4c1a4a27cb34f206ff79314f"
  },
  {
    "url": "assets/js/4.dd2d193c.js",
    "revision": "7b5ac81e2f1687d9f4fdc3ea3b2c5b44"
  },
  {
    "url": "assets/js/40.fe1532e2.js",
    "revision": "4c9e7f32e928ddbde0b9b27656391557"
  },
  {
    "url": "assets/js/41.5793c320.js",
    "revision": "695fbf2dcfb64d58da5641d86e1e83d8"
  },
  {
    "url": "assets/js/42.be6868fa.js",
    "revision": "4b46324e4ebd95282ba66405e20e0432"
  },
  {
    "url": "assets/js/43.3b316018.js",
    "revision": "fe7e5b0c52c2575b143aad2ee2e3ddd7"
  },
  {
    "url": "assets/js/44.77543f45.js",
    "revision": "a7989bb5aa32914a0026d84f13a4cf72"
  },
  {
    "url": "assets/js/45.1cff0a7e.js",
    "revision": "02ea7ded71aba3d98e225501863ab996"
  },
  {
    "url": "assets/js/46.63dac161.js",
    "revision": "a881960009532cf07d8c09e10da78783"
  },
  {
    "url": "assets/js/47.2e25d0b8.js",
    "revision": "013a6c63a57187871f0df4fdfc7626da"
  },
  {
    "url": "assets/js/48.6eb9ad60.js",
    "revision": "4f7d2f6bd3a53e5c3920f5fdae124612"
  },
  {
    "url": "assets/js/49.0f329192.js",
    "revision": "8c0272293f6c2e0c7e81109cf26e1e52"
  },
  {
    "url": "assets/js/5.6d6d56a1.js",
    "revision": "845d5b242ff972b26dc4ecfbcfc3dae3"
  },
  {
    "url": "assets/js/50.a4137fc1.js",
    "revision": "991fd6782d8a1329a6862e48f0d300ec"
  },
  {
    "url": "assets/js/51.4bb7b5f8.js",
    "revision": "fcf0e93d28768ccb91eaaf27646f7d68"
  },
  {
    "url": "assets/js/52.512129d0.js",
    "revision": "6769d0763d9f79a9ff7d07d345e9ec43"
  },
  {
    "url": "assets/js/53.f8a1576d.js",
    "revision": "be26fbccca61f9ea0e64aad2ea4a3b0f"
  },
  {
    "url": "assets/js/54.69cecf4d.js",
    "revision": "060c56e8fb5eb0d55c0791bbba8dd697"
  },
  {
    "url": "assets/js/55.6dd26e95.js",
    "revision": "699d7beed19d8285ac53b228995a82b0"
  },
  {
    "url": "assets/js/56.80ab7a86.js",
    "revision": "73efeec4091c9e438f49260d91066be9"
  },
  {
    "url": "assets/js/57.9b8e23ee.js",
    "revision": "0ec1d4b80bc56a2e96c4898304f30cd1"
  },
  {
    "url": "assets/js/58.e316f2b7.js",
    "revision": "e0325619101e41c244b9f09f6c98fb74"
  },
  {
    "url": "assets/js/59.c2a02ece.js",
    "revision": "812812bf3cecb1cc290c0a56c923aa17"
  },
  {
    "url": "assets/js/6.5f5e2587.js",
    "revision": "9125b53e61a93b6bf716694f8d700563"
  },
  {
    "url": "assets/js/60.b248632d.js",
    "revision": "491f8193dbf45f59d9bc1675f4e01ad7"
  },
  {
    "url": "assets/js/61.3f4ef0ab.js",
    "revision": "f63a55aae27a6dd4d66ee583d0411141"
  },
  {
    "url": "assets/js/62.8cb189bb.js",
    "revision": "5abcbb7274a28e3d467eb1852e3e8f02"
  },
  {
    "url": "assets/js/63.13f82b75.js",
    "revision": "db06a2722e6472ebce5574af13f7b6a3"
  },
  {
    "url": "assets/js/64.877caf27.js",
    "revision": "d47a202dc5fb0698b20630cef632ebf8"
  },
  {
    "url": "assets/js/65.d6949b7d.js",
    "revision": "d83bccb3abead9e87be87517c704b33f"
  },
  {
    "url": "assets/js/66.21a7637d.js",
    "revision": "20471c7f973992fe4edb1c6ff8be184d"
  },
  {
    "url": "assets/js/67.c1d05a15.js",
    "revision": "b90f48e38c0d290114ad79557db8e3d0"
  },
  {
    "url": "assets/js/68.e2043555.js",
    "revision": "a1b02517d39ffaf145bfa5f7d5e075b2"
  },
  {
    "url": "assets/js/69.919c2680.js",
    "revision": "daea82d1af6c3344340430f6286eea12"
  },
  {
    "url": "assets/js/7.3f7d0493.js",
    "revision": "ac30dfdf735844901cb26f8d4bac2bc9"
  },
  {
    "url": "assets/js/70.a65ef84c.js",
    "revision": "8f2d46347149cf0ff13fd44150c21846"
  },
  {
    "url": "assets/js/71.febc25e4.js",
    "revision": "02fa42b78c8bdeb65f8014812130af5a"
  },
  {
    "url": "assets/js/72.798aed69.js",
    "revision": "555ec461849319e906293c278ad6a46c"
  },
  {
    "url": "assets/js/73.c9ab2c71.js",
    "revision": "711db4a407fed59c2a94ecc1dcc52c9e"
  },
  {
    "url": "assets/js/74.161babd9.js",
    "revision": "48bd8bb2405de36dc96aaf1af002dee7"
  },
  {
    "url": "assets/js/75.1f14426d.js",
    "revision": "14301bfdbae0ae4f9d4e2ecac29d83fe"
  },
  {
    "url": "assets/js/76.69cd43f7.js",
    "revision": "100281af2d3a7c27e61ad5c4948bb5e9"
  },
  {
    "url": "assets/js/77.c98bb3df.js",
    "revision": "469844c2826dc019fe9a99f444e3029e"
  },
  {
    "url": "assets/js/78.e413d504.js",
    "revision": "790f6fde79675b2d6febda10636b4b58"
  },
  {
    "url": "assets/js/79.b93a597e.js",
    "revision": "a97c495e96a7fc9b85d57533b6d92a97"
  },
  {
    "url": "assets/js/80.daf636dc.js",
    "revision": "b704249580e109d0fd744b0d23b7f40a"
  },
  {
    "url": "assets/js/81.9a3313d0.js",
    "revision": "515d4b4e32c492414925140590ed26a1"
  },
  {
    "url": "assets/js/82.5619dc51.js",
    "revision": "d7c37ce5cdb766211ea8eb73608363d8"
  },
  {
    "url": "assets/js/83.4a2343bd.js",
    "revision": "545f5d59bfdaeaf4c832a48afbc326ea"
  },
  {
    "url": "assets/js/84.4e515d06.js",
    "revision": "f775f104d42573f354a3c6b28d1a1992"
  },
  {
    "url": "assets/js/85.888e37e2.js",
    "revision": "a3cd11ce9701046c8b53f780f1f6eaef"
  },
  {
    "url": "assets/js/86.a8ef57bd.js",
    "revision": "2066111dc9dbba88556be7cd211f0e93"
  },
  {
    "url": "assets/js/87.28c26260.js",
    "revision": "f053a405b4c3dcbbf684ecdff9f1781c"
  },
  {
    "url": "assets/js/88.a3367363.js",
    "revision": "097d5723b82b2742a949b371689d9c66"
  },
  {
    "url": "assets/js/89.aa962206.js",
    "revision": "754b6f0be85a3f29695af3de7f1f3400"
  },
  {
    "url": "assets/js/90.c184eec1.js",
    "revision": "c24aeec324392d44dbdeaf85597b2b3f"
  },
  {
    "url": "assets/js/91.5db63c77.js",
    "revision": "a47e6a6a424d9aadf51ef70195fd91ea"
  },
  {
    "url": "assets/js/92.518d38e7.js",
    "revision": "979a29f41218bca7784a4c4c9b0d4a46"
  },
  {
    "url": "assets/js/93.2d42f817.js",
    "revision": "dce2c725b5226e3ab5268c48ae9b5cf3"
  },
  {
    "url": "assets/js/94.c7db41a5.js",
    "revision": "46f2804a64cd59b5c57e9017e018f3cb"
  },
  {
    "url": "assets/js/95.708997e8.js",
    "revision": "db92df820dd99eb7d7550bb54232b396"
  },
  {
    "url": "assets/js/96.c8943850.js",
    "revision": "3747b54964e20331bffda094c7e7a454"
  },
  {
    "url": "assets/js/97.208ed93c.js",
    "revision": "e20a3180e27e8e8c2223199b2a40555a"
  },
  {
    "url": "assets/js/98.c9b9136f.js",
    "revision": "896f8dfee72b8ae60dfe3ed4e100995a"
  },
  {
    "url": "assets/js/99.cac0eeb1.js",
    "revision": "f051838e06ee526c6b0093761710213f"
  },
  {
    "url": "assets/js/vendors~flowchart.992bf744.js",
    "revision": "aa7aa7edc32637af63e96a74ceef573a"
  },
  {
    "url": "authors/index.html",
    "revision": "0c14ec20a351611503f34af2a2594e41"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "74286e0b53f565129778d2350b302a8e"
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
    "revision": "6295ad70b40b1b66123177d01070a31c"
  },
  {
    "url": "categories/frontend.html",
    "revision": "2d59fad8891772842ca2f61c86a5083f"
  },
  {
    "url": "categories/index.html",
    "revision": "ead94d209575eab656338c2df86dadd8"
  },
  {
    "url": "comments/index.html",
    "revision": "2cbcc7aa117840c55f193fffa64366c9"
  },
  {
    "url": "contact/index.html",
    "revision": "8f6c97a01e113a00fac84a1c0cb30ed1"
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
    "revision": "3df7d965e5deaeb145ff4cf8f96e2538"
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
    "revision": "4beb5c3a632b656508c17c5bf0318f1f"
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
    "revision": "9fdeb56cce7f972f0df4338ce824abf2"
  },
  {
    "url": "posts/index.html",
    "revision": "daea6aa7df96fe8b0c0f5c7d81bc23f3"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "47435cd0a774ce69dd346b4424a1debb"
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
    "revision": "6b925eb42153ba8671a53c78dab54c25"
  },
  {
    "url": "watermark-logo.png",
    "revision": "4240e98a8008dee7317a4a5020f6437a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "8b62d3afd0457fc5d2e2de7c955726b3"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "2981061114963d95a41804b26f9345dc"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "d3e59d02f26d609b80d3207feca6fbe9"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "e3f296925c8a3d0e24c8570561689da2"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "788c725a70677ae632649064c20cf1da"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "7fe6a65051b3f05b4f12aad5811d9472"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "7c73a2bbc850006897250e491795b16a"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "72b159eea99185a7a7f6423f1f3b5840"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "fe828a8e6cead34d906fdeb1b5d6a7cb"
  },
  {
    "url": "zh/index.html",
    "revision": "d2cffbe2c7b7307c5b6feba170710546"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "5712df130fa0fbef526f15fd54c074dc"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "cad00e1bc32a84c18a6446ab3daf5bed"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "d132ae3293ab2c0fb0e8223ddb45bc83"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "cfbd2f2add677317d5b407b9dd50f9b3"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "8ab07567dc8f2f9adf4a68a089c02d25"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "b163b3697c10901f713e9d0e0624eaa0"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "0d4e65d2a947dcb952b03d1e7f37550f"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "f043c619199f0ced30dc14f04019e4e5"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "1c774b47ca12f7b7156d42942c0dc0de"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "f83b72768a62317dad1cbc34d740ec44"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "f87b7641e983048d9d6ff419fba9de5f"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "68a05964995e3177109e177d457f5192"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "7051cfac1b6db5027dce8b20a2d42790"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "b4aa17852921fbd7fab51ee0c0949b7d"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "a35b1bdc1770d8d1adcdd9c95a5e0dd4"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "943b1d18e9a55c5f6852219cfab94211"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "72b156a4edc67029d312f60c5b7b4528"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "c692046bb7b2d7cb4e2be4c8620be40e"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "fc29b6110bb2b7cab9289fecf64f6f37"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "024736af92dc50f275323a45d61063b5"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "afd4091127093902c3d02f7970bfda7e"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "2b06868385bcc1d54fc7f4ce53c98d22"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "0f7329cb97d03ec88444164ca4d2057b"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "bcfb6b20d345a674460085546dd375cc"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "302d43ec524804126fcd6c825d6b7a90"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "33b61632c459a5e00a7d9adcc00af546"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "91bb88f59d2df2352fff3b9853ce6fba"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "96d1d64e33b91ee79e987269c8327ab5"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "142fe022d8fefb80d0aa9c6734330054"
  },
  {
    "url": "zh/posts/tong-guohtml-shu-xing-ke-gai-shan-yong-hu-de-shuang-chong-shen-fen-yan-zheng-ti-yan.html",
    "revision": "cf345bf6c27da891edeba3a1112609fc"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "440e708da25089a727b61c8a2bba0074"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "bda2257b9dd352d69c1f9d33a5986c28"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "30d3f2494c2f2f2588d4e010e39bb78c"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "93c63ac31d18b5d1e8df7c8afe369010"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "9f87ce97f79b88b2059c840ce2534354"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "3ec44a9e7437ef43970a09b02f266542"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "09ea422157b293161f0f8ab70b272d43"
  },
  {
    "url": "zh/posts/yu-shan-dao.html",
    "revision": "2e759434e1050e52b849b6752c27fad9"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "23230272daccddacab18bce6eef774eb"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "9f09f4000faf1ea9829cdcc01d5c4f03"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "faad017025eacea3a7fa929f689ea36d"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "a68d9d7be34736a0ae2c6e94aae744d9"
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
