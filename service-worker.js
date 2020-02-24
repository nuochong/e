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
    "revision": "300f211d521eaa14e863778e6f2cbb65"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "9805c398f2f1ba5b96e9c39508d95f5d"
  },
  {
    "url": "assets/css/0.styles.95367131.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.c6f634f4.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.9791f035.css",
    "revision": "c1d016415691a599105549ad2e4df75d"
  },
  {
    "url": "assets/css/11.styles.76d68614.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "assets/css/12.styles.bc1487d6.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/13.styles.1aa2799b.css",
    "revision": "86e463286683c49c2c08b770630cb28c"
  },
  {
    "url": "assets/css/14.styles.cda4d07e.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/15.styles.b7c70e4f.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "assets/css/16.styles.8633e20f.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "assets/css/17.styles.4db59ca2.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/18.styles.d6c25221.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/19.styles.529413e3.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/2.styles.83fbcca8.css",
    "revision": "cc806e876100d56caed897b53b9e3843"
  },
  {
    "url": "assets/css/20.styles.c4553558.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/21.styles.60bb7490.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/22.styles.4950daa5.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/23.styles.311d6a44.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/24.styles.dca8d4b2.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/25.styles.34f45b41.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/26.styles.fd0a18a9.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/27.styles.b2dfe2e8.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/3.styles.298b176f.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "assets/css/31.styles.e93619cc.css",
    "revision": "68488905995da2a785500f9bb7753c21"
  },
  {
    "url": "assets/css/4.styles.49b8df3b.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.bde52b62.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "assets/css/7.styles.3f7d0493.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.a5785ae0.css",
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
    "url": "assets/js/0.95367131.js",
    "revision": "181424f1a3668556e7d51965145152b9"
  },
  {
    "url": "assets/js/1.c6f634f4.js",
    "revision": "7e11bcb19d9832b763ec8b7cbb71e95b"
  },
  {
    "url": "assets/js/10.9791f035.js",
    "revision": "598fc9fde2af8b81c25f07b29ddc5cdb"
  },
  {
    "url": "assets/js/100.10f48bd8.js",
    "revision": "6ee5d071cc22b5d6984cc9371c083888"
  },
  {
    "url": "assets/js/101.7a6293f6.js",
    "revision": "0d83ef4d2526eded6799c35b3fc99f6d"
  },
  {
    "url": "assets/js/102.883fef98.js",
    "revision": "7b59348257f74536a164b1104a91f75c"
  },
  {
    "url": "assets/js/103.c5aa560d.js",
    "revision": "cd305d65e75008b380bab44d440bdb1f"
  },
  {
    "url": "assets/js/104.3a60d32f.js",
    "revision": "f20fae41c2db73d2a1927ee72f2ed000"
  },
  {
    "url": "assets/js/105.9dd71d9b.js",
    "revision": "89260f25235c63826605a550a9825f5a"
  },
  {
    "url": "assets/js/106.0dc63830.js",
    "revision": "f3e1fd044da54838ae2fbc416989a5bd"
  },
  {
    "url": "assets/js/107.a551f4c7.js",
    "revision": "f68e470917c7a7bc2ad50f6f0360e717"
  },
  {
    "url": "assets/js/11.76d68614.js",
    "revision": "c0a734c88039ad75da21754b0e504421"
  },
  {
    "url": "assets/js/12.bc1487d6.js",
    "revision": "de86a459f35d41a489dfb827fdb37208"
  },
  {
    "url": "assets/js/13.1aa2799b.js",
    "revision": "5a5fa68a01c47ae3f3e9a2a79b51607d"
  },
  {
    "url": "assets/js/14.cda4d07e.js",
    "revision": "87cc7d7e31c1b5a950fd2d8474479124"
  },
  {
    "url": "assets/js/15.b7c70e4f.js",
    "revision": "f7f0a743c6453d536f7835230cfc10f3"
  },
  {
    "url": "assets/js/16.8633e20f.js",
    "revision": "c9695684f8d85fd83ff006c4963b765d"
  },
  {
    "url": "assets/js/17.4db59ca2.js",
    "revision": "aa761a5ba4737e0925bbd64c92eea93a"
  },
  {
    "url": "assets/js/18.d6c25221.js",
    "revision": "9652bd5e7a06d4506820fa834754ad91"
  },
  {
    "url": "assets/js/19.529413e3.js",
    "revision": "30b39a05abae5f20f312ca1d3f4a3219"
  },
  {
    "url": "assets/js/2.83fbcca8.js",
    "revision": "694f7dd466414acadeaaacbb8dacc443"
  },
  {
    "url": "assets/js/20.c4553558.js",
    "revision": "5e7163d4ed4ff1da853d98095eed15de"
  },
  {
    "url": "assets/js/21.60bb7490.js",
    "revision": "7508e7ecec37b5542bd51ecc0c562844"
  },
  {
    "url": "assets/js/22.4950daa5.js",
    "revision": "d5597cb7fd831c466f15c7367f38be41"
  },
  {
    "url": "assets/js/23.311d6a44.js",
    "revision": "5ae612b6a2fb2980dd9392542d04effa"
  },
  {
    "url": "assets/js/24.dca8d4b2.js",
    "revision": "cd1d516fbce93006a009e085f1c03828"
  },
  {
    "url": "assets/js/25.34f45b41.js",
    "revision": "86a6877a189a4bd3b0aaff061141c41c"
  },
  {
    "url": "assets/js/26.fd0a18a9.js",
    "revision": "a6a15582efb60fa8476158f5ee0f4bb1"
  },
  {
    "url": "assets/js/27.b2dfe2e8.js",
    "revision": "916b666c8b765541e01470e71ac3b1da"
  },
  {
    "url": "assets/js/28.40505132.js",
    "revision": "2ff48d59e844d276fdb792d989b4092a"
  },
  {
    "url": "assets/js/29.5bba55f7.js",
    "revision": "e6dd2803bb816eb9654e3d8aef1a8798"
  },
  {
    "url": "assets/js/3.298b176f.js",
    "revision": "816ddbea4b126db014d6dafba6ee8d1c"
  },
  {
    "url": "assets/js/30.12525b5a.js",
    "revision": "df2af9424f5e7759818b5dcf1b0d726d"
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
    "url": "assets/js/34.d64ef539.js",
    "revision": "1922badad65e94a909ecb7199af9fc8f"
  },
  {
    "url": "assets/js/35.adcdf62f.js",
    "revision": "7b66049c326a38882db0adcc74dd91a9"
  },
  {
    "url": "assets/js/36.0100b6d5.js",
    "revision": "606022c618092bec929b521b48de98b0"
  },
  {
    "url": "assets/js/37.b2f796e0.js",
    "revision": "bf4651ecbf571f94e729de5feff35eae"
  },
  {
    "url": "assets/js/38.7b3bc57b.js",
    "revision": "a45c4efa9c726de958661469d97505b8"
  },
  {
    "url": "assets/js/39.65cb10c3.js",
    "revision": "261606eebfb2623ecea63f958b23b3b5"
  },
  {
    "url": "assets/js/4.49b8df3b.js",
    "revision": "10764fa1b6681798b716453837495252"
  },
  {
    "url": "assets/js/40.08f05b4c.js",
    "revision": "81070e89f85adf5845658525121ccbbd"
  },
  {
    "url": "assets/js/41.c4a93bd0.js",
    "revision": "f98f8a6df0914acb3f2d2da7867846d4"
  },
  {
    "url": "assets/js/42.6d075df2.js",
    "revision": "bc6e9511e49965ec033717c1565b03f8"
  },
  {
    "url": "assets/js/43.d6e343c2.js",
    "revision": "5ab9a22530d7b9aec8b52db4008419c8"
  },
  {
    "url": "assets/js/44.3968340f.js",
    "revision": "9e4358afce38617ed4c5c8af8031606e"
  },
  {
    "url": "assets/js/45.71fdc6c0.js",
    "revision": "e57e0311c5cc52f256f7c7006df0c6fb"
  },
  {
    "url": "assets/js/46.5042b4e2.js",
    "revision": "ca331e0a234b2de6edc4ac5380452dd1"
  },
  {
    "url": "assets/js/47.b24a94f3.js",
    "revision": "3f768a7cbec2f063fc2d2ef95264d0a5"
  },
  {
    "url": "assets/js/48.aa2fb04a.js",
    "revision": "6e89df699b3b1b4f6104d5e2ef53afb8"
  },
  {
    "url": "assets/js/49.241f7538.js",
    "revision": "d90c7b3f8c591dceff442857c8517b20"
  },
  {
    "url": "assets/js/5.4a8d493c.js",
    "revision": "f902337e1d1fbea762726045d513db4d"
  },
  {
    "url": "assets/js/50.6779a62d.js",
    "revision": "eb7ef096c1cf15e1edd3688e2563817f"
  },
  {
    "url": "assets/js/51.50eb8f0b.js",
    "revision": "b51fbacbeaa4aabd6977df32e1d89764"
  },
  {
    "url": "assets/js/52.ead08f4e.js",
    "revision": "1e89f83c694a44606bedba07cf932a93"
  },
  {
    "url": "assets/js/53.c8ff8e74.js",
    "revision": "2fda878218c18023ceacc3eb1074b26e"
  },
  {
    "url": "assets/js/54.cacc3556.js",
    "revision": "4902123fa7373533e3c057b0bc4a347b"
  },
  {
    "url": "assets/js/55.c913e97a.js",
    "revision": "97ffe3c93074d895dac798ba360c7ae0"
  },
  {
    "url": "assets/js/56.6c333f07.js",
    "revision": "fe11679f54cf83fab8c3903f46718165"
  },
  {
    "url": "assets/js/57.ed6d82aa.js",
    "revision": "825edc6cf2abf57ed7b3559d6c3eaced"
  },
  {
    "url": "assets/js/58.8f155b1d.js",
    "revision": "f2abfa6744277fc58d43869747e8917b"
  },
  {
    "url": "assets/js/59.8bb4d621.js",
    "revision": "c651b06247a42889d6fe071ed024f342"
  },
  {
    "url": "assets/js/6.bde52b62.js",
    "revision": "03a56c10bc2d168775776fb25bdaac0e"
  },
  {
    "url": "assets/js/60.1cc2b7e1.js",
    "revision": "9655afeadc15663ba0885d1a687c0116"
  },
  {
    "url": "assets/js/61.9252d2e8.js",
    "revision": "5037ac76017f3a3a064bc3652ddd43a0"
  },
  {
    "url": "assets/js/62.9642f0d4.js",
    "revision": "ae396b3abfebe37cdddca599b0c5ed5c"
  },
  {
    "url": "assets/js/63.b1bdaf69.js",
    "revision": "09e9087c617711a23e70d883f412c1de"
  },
  {
    "url": "assets/js/64.ddcd42c4.js",
    "revision": "9b589ce8dbd73fe2d854ca7a0adab077"
  },
  {
    "url": "assets/js/65.a2240853.js",
    "revision": "2299e22ee25e34d06664679bcf8f256b"
  },
  {
    "url": "assets/js/66.26e37152.js",
    "revision": "b52d0e072c2a0a41ab47ba5c94b242c6"
  },
  {
    "url": "assets/js/67.7a580659.js",
    "revision": "a8bbbb8559a558bb65a6e6c55305cf5e"
  },
  {
    "url": "assets/js/68.d23964d7.js",
    "revision": "1ec97046a95d6e05be58ec306dbc4643"
  },
  {
    "url": "assets/js/69.2fac0f9e.js",
    "revision": "57c45e4e1d3e92fc6f36a27ce33fb7d3"
  },
  {
    "url": "assets/js/7.3f7d0493.js",
    "revision": "ac30dfdf735844901cb26f8d4bac2bc9"
  },
  {
    "url": "assets/js/70.77b64015.js",
    "revision": "d2d182ab046b3dfa2bbcf0bbe7f15589"
  },
  {
    "url": "assets/js/71.4a2565cc.js",
    "revision": "4528a49b930860b66e96f59b5e66e628"
  },
  {
    "url": "assets/js/72.4d311071.js",
    "revision": "cf71e7ccaca603ceeb9a017ff9b7940d"
  },
  {
    "url": "assets/js/73.fcfe5ccb.js",
    "revision": "5066828b359ec7e2f671cf69121b4241"
  },
  {
    "url": "assets/js/74.ce237fc8.js",
    "revision": "4fec464697de6960842e8291ed425e4a"
  },
  {
    "url": "assets/js/75.0692ba20.js",
    "revision": "703879408d38c4d68162b4fa9abc6f37"
  },
  {
    "url": "assets/js/76.49c47440.js",
    "revision": "13601d13eae5a6397c5d44b41f4d0499"
  },
  {
    "url": "assets/js/77.a29101e6.js",
    "revision": "050fd0dafbc318f8968fbc8c68567f58"
  },
  {
    "url": "assets/js/78.c5f2bfa8.js",
    "revision": "bfde3c9b6d57c6474707382b8e7c134d"
  },
  {
    "url": "assets/js/79.fa3ec8e2.js",
    "revision": "b88af38b178e5db844ecac8267157f5c"
  },
  {
    "url": "assets/js/80.3e064edb.js",
    "revision": "95adc5ef885252acb252d69133d48653"
  },
  {
    "url": "assets/js/81.eaacf90a.js",
    "revision": "77fa5f5ef4e359a7a513e8a1749b200e"
  },
  {
    "url": "assets/js/82.2315b435.js",
    "revision": "63a3c66d520de10c1ce9a860548f0c78"
  },
  {
    "url": "assets/js/83.33b9a707.js",
    "revision": "7a99344601a47a620cf469a29898089e"
  },
  {
    "url": "assets/js/84.cab2824c.js",
    "revision": "05ee5bd3598838aa1fc570d426c917ed"
  },
  {
    "url": "assets/js/85.59fde732.js",
    "revision": "8cc94e64167981cbce11a6b23ed78b8e"
  },
  {
    "url": "assets/js/86.4d106a82.js",
    "revision": "8a7b6f7b89b1639f312f35564c38baf8"
  },
  {
    "url": "assets/js/87.37a56ad7.js",
    "revision": "5c288d2786fc077d5340e816f6d881f9"
  },
  {
    "url": "assets/js/88.48dd7650.js",
    "revision": "0b6ca2eb6382a3d97078c35c5a594ffe"
  },
  {
    "url": "assets/js/89.1098f466.js",
    "revision": "d62885a63dbd1b87348d3f4af51ac43f"
  },
  {
    "url": "assets/js/90.d5a444f5.js",
    "revision": "d4b89a6c239e807753e63d63b47e00b5"
  },
  {
    "url": "assets/js/91.42ff8f42.js",
    "revision": "7c5d4de822bb4422f6bee3ae7200cc12"
  },
  {
    "url": "assets/js/92.6db810ca.js",
    "revision": "9019b7487d5e1953804a51225968d2f3"
  },
  {
    "url": "assets/js/93.9693fb91.js",
    "revision": "fdf67957235457240b0c00b4d40a00c3"
  },
  {
    "url": "assets/js/94.4e7683a4.js",
    "revision": "1c6e45c62a9c653ad3f66ef60f076b21"
  },
  {
    "url": "assets/js/95.f567c986.js",
    "revision": "0fbe467ed6c0324fcc872e63743f39f8"
  },
  {
    "url": "assets/js/96.065f18fe.js",
    "revision": "366c40db2375e00e3c76eb8592001b85"
  },
  {
    "url": "assets/js/97.780fe13c.js",
    "revision": "94c4adb73a95bb534315c57051259e12"
  },
  {
    "url": "assets/js/98.c45bae57.js",
    "revision": "b7ba602519c538098f2440422973324f"
  },
  {
    "url": "assets/js/99.0d73fd3b.js",
    "revision": "117a2aba209549cb9f81b57adaa6af5c"
  },
  {
    "url": "assets/js/app.a5785ae0.js",
    "revision": "3ee8e06a252702ed3a80455e90c62a02"
  },
  {
    "url": "assets/js/vendors~flowchart.ec2b4b60.js",
    "revision": "1345b72bb80f6d0c171d01b382cb35a5"
  },
  {
    "url": "authors/index.html",
    "revision": "ce1d988a05c8beb00816d0ca68d9ab7a"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "a2898c16a3503653ef237d7fe85a5001"
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
    "revision": "5a4a93d0ad76c83509787900cf29de19"
  },
  {
    "url": "categories/frontend.html",
    "revision": "7849834b77717e840032bbee0541ed8c"
  },
  {
    "url": "categories/index.html",
    "revision": "10f0ecd62f60ba5b469b7f9976f8650a"
  },
  {
    "url": "comments/index.html",
    "revision": "c7e7a1b0c88ebbccf1a42466a45a86ac"
  },
  {
    "url": "contact/index.html",
    "revision": "17500d6a5e4ebe9ff79d7631089c0342"
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
    "revision": "657e21ef8a81661b2ef7b1d250df2a0b"
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
    "revision": "983a151d0a9aae69a318745c8d78b93b"
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
    "url": "posts/finally-have-a-nest.html",
    "revision": "f52099429025347225eb0a812654fbfe"
  },
  {
    "url": "posts/index.html",
    "revision": "3cf93a2b5be4d032f4bd259c8cc883fb"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "d7a4fecdbd4f0b9d9f3c063f38e8ef85"
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
    "revision": "dec291ef9fa71c90fdcac786245edd6a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "50cd99bf2e1fecc4727e03e51c664455"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "728fbca5e9ac398d983501397480a3b9"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "12322a37d9ddc578f51b5d486ce9a84c"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "d06318d2be7326d093aea724fcd2273d"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "04700a500f072f888ef0b5f94890f362"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "1356455499c1c7824906f12418711a19"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "c2d61b7fdf7454bfa401822c46479251"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "029309a5ea0532231314346b6b44b47a"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "e51bd5667d0f7a164ef16a63d696adbd"
  },
  {
    "url": "zh/index.html",
    "revision": "b296bc177457d77dc449ee5e71e53e7e"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-shang-.html",
    "revision": "cad5ef8f7aca2d7fa8bfda13e3dfaabc"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-xia-.html",
    "revision": "058b2e0ab01224e903198cd67de15750"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-zhong-.html",
    "revision": "259b78f9e00fce288714953122be4b8a"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "f3726ae0c18577c6f53f8d08543f3802"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "c5a71d84ecd39e3aa2fc57a9f29817ef"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "2d6fe19ee8ff34c63583808e96d1dffc"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "19e301384e99b20d80aec84ed613bb4c"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "e88a6bb7d9498f6a20827a7bae204bcb"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "a971022c261c239f0908eb3482cdd205"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "8bdbd2f3d5c188e6ddc865abe9460ffb"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "4dba1d543607bc50d2441ead4d428d8e"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "6f73486475965e11085f4673cf320825"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "d500d6b123e7bdd6beb2a82a745c36d0"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "864ba4bccda5547b4713d2b6cd652077"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "af086fcb73c4ab1579d9e34cd14e6d6c"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "529c91c9909dd92072e98cacd19e68a2"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "eec69590d1a66d5020993f7fd89cf217"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "dd8e59cd9a5745136ec760318346f931"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "d17cae2dbe9b2f11b6edeb8da213a015"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "fc57f9649b8ac2b0aa321833c3df0031"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "f78c1631f819f5a96f73b943dca4ab1b"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "cb56994412bc68e4177bdb4a07651a18"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "7ba2f71be0bd45d5dac7195ebb995411"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "fd2ee377d79565a39e8a98e399ac23e5"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "1b2e7b649b557216f0ae76bc23f7256c"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "1e7ff601d2882fa673ea59e3f8f1c322"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "92758d9c3cc49f0486d1f342e7864fb8"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "63452f4b57c57d087c888e68c202f06d"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "7cdceb5764976190543fc10bfe1e7068"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "07b6e54ba470f20ea0910e7a930cdb1f"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "a3dba729a016fe3fa48eccdccd07cbc6"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "9edee7baee306db54e06cab34a3d549e"
  },
  {
    "url": "zh/posts/tong-guohtml-shu-xing-ke-gai-shan-yong-hu-de-shuang-chong-shen-fen-yan-zheng-ti-yan.html",
    "revision": "7775d7f982a12bbdc1a87f96c148e3d0"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "d5a9cdef09138a8c4a9b6088c654274d"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "1f2a9b6221c2f17beee9c86b282d3d5f"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "8e1336a1ee4401ec595ff723356047e5"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "b2c4c06f9e85b843ad8f6436ea280881"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "c568faf188545b88faaa34e5f300278a"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "03e32fad078a90a90ba4812f62538131"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "5c10ccb7f809ef5304181cba9e31f890"
  },
  {
    "url": "zh/posts/yu-shan-dao.html",
    "revision": "0b00454124ea6c12ba6f09bfb3813c32"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "20860b1d81e723e496604d709bfc37af"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "aeb24c6300eb41b3787164d9304522e0"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "6de8dadd1420f3aa2e439638ac0f10e3"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "ae38ee2edfb54656fb90c61cadf55692"
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
