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
    "revision": "357ed6d5958183e8614803b83294df42"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "761c26c21243313b699e095644fe6876"
  },
  {
    "url": "assets/css/0.styles.0e34bbc8.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.4920de8d.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.f917575e.css",
    "revision": "0bf19c3bead6517705639c89aefcd969"
  },
  {
    "url": "assets/css/11.styles.046f8a3a.css",
    "revision": "6bd69883ed7895c6c33c7fcccccaa88e"
  },
  {
    "url": "assets/css/12.styles.7d092717.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/13.styles.57490ce7.css",
    "revision": "491dc36f2392016e106d41abd18bef20"
  },
  {
    "url": "assets/css/14.styles.8984be44.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/15.styles.d0c4df64.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/16.styles.f209131e.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/17.styles.dbfc2f92.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/18.styles.3398530a.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/19.styles.7711c911.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/2.styles.f05567c6.css",
    "revision": "bdc8a080bae6f23e3a0647ae023a7b6e"
  },
  {
    "url": "assets/css/20.styles.eec0ee02.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/21.styles.d58ed4be.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/22.styles.8529c0e9.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/23.styles.1f788c7a.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/24.styles.a8c06c35.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/28.styles.0a79ac50.css",
    "revision": "f17899bd26a2f3e1e82ae5e3d70bcffe"
  },
  {
    "url": "assets/css/3.styles.5bb2e98a.css",
    "revision": "9d0ab6d41a09d29d4de1250bd8291da3"
  },
  {
    "url": "assets/css/4.styles.6f1378a5.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.f02408d3.css",
    "revision": "c4bdcd40485672eca04486d47727b0d8"
  },
  {
    "url": "assets/css/7.styles.c0272b13.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.6da54c3a.css",
    "revision": "4549bd58488fded8459342a8a8afd8c5"
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
    "url": "assets/js/0.0e34bbc8.js",
    "revision": "12471fec8eaadd79d65d6ce76bf2241f"
  },
  {
    "url": "assets/js/1.4920de8d.js",
    "revision": "4076cd27f99284b4f69fd4a7e3858520"
  },
  {
    "url": "assets/js/10.f917575e.js",
    "revision": "4803c43e25490cd50e6d165a3df09e08"
  },
  {
    "url": "assets/js/11.046f8a3a.js",
    "revision": "6734f969ddc75f8b1d00764b327adc6a"
  },
  {
    "url": "assets/js/12.7d092717.js",
    "revision": "2673ba553f336daf7039415aa388b540"
  },
  {
    "url": "assets/js/13.57490ce7.js",
    "revision": "ce59814da52a83ab2497fe3a02da01cf"
  },
  {
    "url": "assets/js/14.8984be44.js",
    "revision": "0c7977d3ffd21b57fc3fb70dac7638cd"
  },
  {
    "url": "assets/js/15.d0c4df64.js",
    "revision": "764376b07918fcf9cd9526514e058899"
  },
  {
    "url": "assets/js/16.f209131e.js",
    "revision": "2e576bd1f7a694524c40fa65c1e8bdc7"
  },
  {
    "url": "assets/js/17.dbfc2f92.js",
    "revision": "c71b9c2784634203d768e97f51926d09"
  },
  {
    "url": "assets/js/18.3398530a.js",
    "revision": "4e92107b5a889359166971a59f995296"
  },
  {
    "url": "assets/js/19.7711c911.js",
    "revision": "66171acfe4c80efdd3c98bdf6e76a053"
  },
  {
    "url": "assets/js/2.f05567c6.js",
    "revision": "bcedcf615621b6d27974f67d3337bb2e"
  },
  {
    "url": "assets/js/20.eec0ee02.js",
    "revision": "7797add318af484995d35a98c640de22"
  },
  {
    "url": "assets/js/21.d58ed4be.js",
    "revision": "2d8768341c7048ea7e923248be88f84b"
  },
  {
    "url": "assets/js/22.8529c0e9.js",
    "revision": "67e0e65e8971a3ee7f19bedd5299860e"
  },
  {
    "url": "assets/js/23.1f788c7a.js",
    "revision": "b142e95afd9b501e1315bf8013924593"
  },
  {
    "url": "assets/js/24.a8c06c35.js",
    "revision": "417625afce6ec3c07c8fb4debd6c4765"
  },
  {
    "url": "assets/js/25.23506b2c.js",
    "revision": "975e6653bc1fa9ad963a688902aa607e"
  },
  {
    "url": "assets/js/26.a0e26dd7.js",
    "revision": "625e87ea03dad40d621c3508e72de449"
  },
  {
    "url": "assets/js/27.c9b1da65.js",
    "revision": "f01f781a9558d70b1b550f002b848dc4"
  },
  {
    "url": "assets/js/28.0a79ac50.js",
    "revision": "e4ab1930e5782975e212447ad9e3ae08"
  },
  {
    "url": "assets/js/29.af9cb744.js",
    "revision": "493f6cbc6ad6634768d1f53371aec96f"
  },
  {
    "url": "assets/js/3.5bb2e98a.js",
    "revision": "800f3731d0f535d8a9e2810b175bf7cc"
  },
  {
    "url": "assets/js/30.d363a092.js",
    "revision": "c7efcc721bb0214d58278a833027baa9"
  },
  {
    "url": "assets/js/31.66139d19.js",
    "revision": "bbdc2da21e891947997b3755820452af"
  },
  {
    "url": "assets/js/32.44969052.js",
    "revision": "8f670dd1759a15d3f0dacb86303f0282"
  },
  {
    "url": "assets/js/33.8b5b8303.js",
    "revision": "638a46ffb9c55b93c1ead64f63a4158d"
  },
  {
    "url": "assets/js/34.1755bf5d.js",
    "revision": "9d028ac08596ad58fb59be3e3c6aea91"
  },
  {
    "url": "assets/js/35.4de87a6f.js",
    "revision": "6592aee1dd454f93e57c2df65d717634"
  },
  {
    "url": "assets/js/36.26d9aae6.js",
    "revision": "b483faf45682d2dc07c6451d3112e56c"
  },
  {
    "url": "assets/js/37.ec6b0c45.js",
    "revision": "c92636e7f710d1f68fd4514ef9cac154"
  },
  {
    "url": "assets/js/38.f236205e.js",
    "revision": "9f6f5610ef3010df1cbab487a19eeda3"
  },
  {
    "url": "assets/js/39.4deff459.js",
    "revision": "35cb718a253df4aaf43484ad0b0e735c"
  },
  {
    "url": "assets/js/4.6f1378a5.js",
    "revision": "39ae5641b58275bc96d9bd8e11346cc1"
  },
  {
    "url": "assets/js/40.d2d6a885.js",
    "revision": "8b6cd5692006a99f05ce011d9de3ade2"
  },
  {
    "url": "assets/js/41.7606f6f9.js",
    "revision": "95c2c7d47ecc47e214b47d07e3552604"
  },
  {
    "url": "assets/js/42.e33cb483.js",
    "revision": "10997c4111f4d640cbdab7bfd5f3c4a0"
  },
  {
    "url": "assets/js/43.0eda7a45.js",
    "revision": "924f9354b2b27e6d41fb5bf6e0ead01a"
  },
  {
    "url": "assets/js/44.0d94a012.js",
    "revision": "bab6145be8cb17677b8ef6cd041a623f"
  },
  {
    "url": "assets/js/45.112a016b.js",
    "revision": "88a9044756b3f4bf8c867fb425616851"
  },
  {
    "url": "assets/js/46.e0661c60.js",
    "revision": "0f2d642c739fd77fc59599c699d64f3b"
  },
  {
    "url": "assets/js/47.b67a7a52.js",
    "revision": "e7b3e2812ffcefbe46489ff42bcfe4ca"
  },
  {
    "url": "assets/js/48.5099ee26.js",
    "revision": "5e0d75312b6b27dcd2b34edccf839b2c"
  },
  {
    "url": "assets/js/49.791f12f7.js",
    "revision": "1def68b3839b8831fe1a687e1d56ca15"
  },
  {
    "url": "assets/js/5.c605b54d.js",
    "revision": "97f8ab15d07ce4d865274e3cfe21fdcc"
  },
  {
    "url": "assets/js/50.049d1445.js",
    "revision": "0cd912c6f7d0046fc1dbcc8981c3da6b"
  },
  {
    "url": "assets/js/51.a69766ce.js",
    "revision": "903a7e3fd1af73aa0ea29708db7b09d4"
  },
  {
    "url": "assets/js/52.a668d29c.js",
    "revision": "1d14e7202c1795f9806b9320e939734c"
  },
  {
    "url": "assets/js/53.39cff426.js",
    "revision": "d4d15ebe264946d343edbd1d4bd1c93c"
  },
  {
    "url": "assets/js/54.01d3f3d6.js",
    "revision": "9ca0b4ef8cd467441d1a3b97b1a8b394"
  },
  {
    "url": "assets/js/55.f0e65464.js",
    "revision": "77da49443cad1b2c2a1515b07cdc928a"
  },
  {
    "url": "assets/js/56.b0c2e334.js",
    "revision": "c6c8f160cc6e5a83b75b000dda0964e8"
  },
  {
    "url": "assets/js/57.1fd24f08.js",
    "revision": "07df8bcfffbde1a1bbf84924b21f96bb"
  },
  {
    "url": "assets/js/58.203516d3.js",
    "revision": "b30609b31f091b6162e75f3feadff7b7"
  },
  {
    "url": "assets/js/59.ae288ada.js",
    "revision": "782670c9f945afe37d3b5c3e21f59196"
  },
  {
    "url": "assets/js/6.f02408d3.js",
    "revision": "ea1d54e4cabb8735d4cf51289e3e481b"
  },
  {
    "url": "assets/js/60.ad564585.js",
    "revision": "447143baf51da2fa8d4172dd35cdd105"
  },
  {
    "url": "assets/js/61.977e285a.js",
    "revision": "cb7c05491070c8be23772ce8f44c3a6c"
  },
  {
    "url": "assets/js/62.776ff8bc.js",
    "revision": "4b452ef3a313b1561ade5051c18fb3cf"
  },
  {
    "url": "assets/js/63.1d7e939b.js",
    "revision": "93c3fe4a6cf34d7c3c693f5eda4c374c"
  },
  {
    "url": "assets/js/64.e2513ee9.js",
    "revision": "a60902c0e19278140cf90ffe7cfa9536"
  },
  {
    "url": "assets/js/65.d6822918.js",
    "revision": "2eed59fcaaba0a7246592d9ab67dbe0a"
  },
  {
    "url": "assets/js/66.14f9c5dd.js",
    "revision": "b3d73c4046e0acf66580ed93818f2987"
  },
  {
    "url": "assets/js/67.ab63f22e.js",
    "revision": "55e75b5c93406c1ac0e76f7263d3531e"
  },
  {
    "url": "assets/js/68.94c3402b.js",
    "revision": "c8efb13faf814a450f45fa1dbddacfbf"
  },
  {
    "url": "assets/js/69.ca7cdd92.js",
    "revision": "add34d1e12b87935399cddfbae66d97f"
  },
  {
    "url": "assets/js/7.c0272b13.js",
    "revision": "774070e37ad447d4692b820a4c9fd9cb"
  },
  {
    "url": "assets/js/70.b1526b06.js",
    "revision": "d06b869b480dc0891f1400d998936837"
  },
  {
    "url": "assets/js/71.84886884.js",
    "revision": "eb24f4d18621b7b1c221715c0cb88f21"
  },
  {
    "url": "assets/js/72.37bb1ee4.js",
    "revision": "76a76ac00ba5b1cbd443faff938b2766"
  },
  {
    "url": "assets/js/73.745a3ae7.js",
    "revision": "044e6e8781897e4d1e8aa2dacf833a7b"
  },
  {
    "url": "assets/js/74.d74bf8c8.js",
    "revision": "af0ee000eb8d8e18c3e9de89c2198334"
  },
  {
    "url": "assets/js/75.c16f6e2e.js",
    "revision": "6dabf7b1b2560496f664e240910d8174"
  },
  {
    "url": "assets/js/76.ec271ea6.js",
    "revision": "558e99a5bef8b3f89ef1ba17b0625ad3"
  },
  {
    "url": "assets/js/77.547b67d8.js",
    "revision": "a730ea628e2caa83b37c071911876379"
  },
  {
    "url": "assets/js/78.f3dc8258.js",
    "revision": "0153c24de7d679a4ce128c150430673b"
  },
  {
    "url": "assets/js/79.35808e4e.js",
    "revision": "ab16d03f761cff5350b3362c9c6f927a"
  },
  {
    "url": "assets/js/80.2a236a0f.js",
    "revision": "5591c6a6fd6b82da9d0a3d91123a0745"
  },
  {
    "url": "assets/js/81.d91367ac.js",
    "revision": "295630e5d0036fa8a9c3a29423aa7fa8"
  },
  {
    "url": "assets/js/82.1d725eb5.js",
    "revision": "e1af1832eb8945c95cd092b684804c07"
  },
  {
    "url": "assets/js/83.bd17e731.js",
    "revision": "0e5fbf0de39b7188c2b9875c974635b9"
  },
  {
    "url": "assets/js/84.6100ff28.js",
    "revision": "d498ba10a211947ac9dfe5f5bfa03555"
  },
  {
    "url": "assets/js/85.cef90183.js",
    "revision": "662b0bb214d36b21f6efb1ebb54a24f0"
  },
  {
    "url": "assets/js/86.2cd22efd.js",
    "revision": "1f89e3669207ca4d4aac1ec5e5cf957c"
  },
  {
    "url": "assets/js/87.7ee13333.js",
    "revision": "ed3a72878b69da83b2a0a26e950b35df"
  },
  {
    "url": "assets/js/88.bea75999.js",
    "revision": "46e2af66314b93000925fb2d5d4ffe0f"
  },
  {
    "url": "assets/js/89.aea7f659.js",
    "revision": "1058587438420163d6beb3c653148ec2"
  },
  {
    "url": "assets/js/90.99baad3b.js",
    "revision": "792e729311ccfad9c20940436b70f720"
  },
  {
    "url": "assets/js/91.49813302.js",
    "revision": "8c802a61f7e8f75402a45a06cad381ee"
  },
  {
    "url": "assets/js/92.cf87ba90.js",
    "revision": "0dfeae75e468dd5e0168a74060200a1a"
  },
  {
    "url": "assets/js/93.f23f2aa6.js",
    "revision": "ca2e275f26663fa5b23c6df853b61ac7"
  },
  {
    "url": "assets/js/94.8863c47f.js",
    "revision": "5003318f2cbd55ec6b876caedca410fc"
  },
  {
    "url": "assets/js/app.6da54c3a.js",
    "revision": "0e6ec4b2e6efe47a41b31a52568b384e"
  },
  {
    "url": "assets/js/vendors~flowchart.1a689dc7.js",
    "revision": "22a9cde8a780327587f5f8844a5ce035"
  },
  {
    "url": "authors/index.html",
    "revision": "f71bd5894bd67ac3ebca1ca794fdad19"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "6ab0db29ac507109673120a08b54c70e"
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
    "revision": "c8a9f6091536fa27c1793d0f7f97df3d"
  },
  {
    "url": "categories/frontend.html",
    "revision": "8605da2c0ef32602e3370e4cc4b40777"
  },
  {
    "url": "categories/index.html",
    "revision": "3e59ad8d9738641e813f872a959892d8"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "257109c6c256f2f93df8cc51440cc054"
  },
  {
    "url": "contact/index.html",
    "revision": "d4cb4d60593bf31c095772a68bb082ab"
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
    "revision": "c1c8c77de529c1ccad7c26e661d0421c"
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
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
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
    "url": "images/posts/2018/8/my-first-post,w_320.png",
    "revision": "9d3936d8080aeecc8593bb8e1cefd52b"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_427.png",
    "revision": "9d3936d8080aeecc8593bb8e1cefd52b"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_524.png",
    "revision": "9d3936d8080aeecc8593bb8e1cefd52b"
  },
  {
    "url": "images/posts/2018/8/my-first-post,w_680.png",
    "revision": "9d3936d8080aeecc8593bb8e1cefd52b"
  },
  {
    "url": "images/posts/2018/8/my-first-post.png",
    "revision": "9d3936d8080aeecc8593bb8e1cefd52b"
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
    "revision": "bca80d63dc37a3588fd5fbd44c98b64c"
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
    "url": "posts/index.html",
    "revision": "7d311c0a7e4a2e6eeb3a6e7cee888f73"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "eb04a99b075b6cb2679d9e048b559b02"
  },
  {
    "url": "travel/index.html",
    "revision": "e40d018756ffb0749c2b910eee47a665"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "9fc2a9e8ee5849ed84ca7e9121de4425"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "ac817ace5ea462fa84de89ee029eac25"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "cb9e5e7053f3f2010b188f65406a8d7a"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "567f1c03aef130e16f89e61b9f07d27d"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "eea9545eae5b1befb47fe19d29a31e26"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "65ee9abb30fbb28845b6bfb692262f99"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "4070f1368f79f16b5969f08bae401a7b"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "a82e8af61834981cd1a3028277f74592"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "6ff4746788e2f9ac1d1a8741befe42c1"
  },
  {
    "url": "zh/index.html",
    "revision": "cc8604ff1556f9354a87604a1774bc0c"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "873bd416c29928ce63dd826e76545569"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "62680d2c20fd9dc650b48b1cecce4eae"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "931747ffe67c648c28580eece3dea319"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "8786d603ddad6fbf160f237d4b1065b7"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "8826332c405564c321be734c89431961"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "714f7dd0936b71b91a9fd00b7c788387"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "cb4a7d44eee6d4f67912ad45e7b9a3b8"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "efb628d75e5d9531ffc7fa89da082ee8"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "d11d50ea0b3afedd2b84fa577965c6db"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "076fd48db23ebfa618b255476691ad08"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "b38b338c66e08ada91fe55d55e2a6920"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "f60e009e8fe86a5bba972c39c90fbea9"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "ac34c7fa56ecc62e896908d2606a262e"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "d0a03cc97c4b2b973538896dc5702eff"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "4fcecc64a0ec3fc4db13afa5a6fc0a46"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "5a51cdea8b5accfabb3e13c579439819"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "6ea97f75e5a11a71074576d2283f2ef6"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "d31fb48037fcc938159b86aed262c042"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "f645dd229b9b7b9b61ba301ed3ed32e1"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "1bee384e0b31afa45c97a1613ecd6ec0"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "9d0491c275fc69bc6f3c04d62e8fe4a3"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "22b0165fa6db948820039a892a50c4cc"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "52f449ae9aa6fbdc80b2fedfcbdfadb6"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "b4e10833ecb9c367f739a43f479c3112"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "8c0d6f54ff3aaf4637c542bde57095f4"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "b0cdfd51f112c5047024e2d4e18cfd5b"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "6aff65ba9bfe1cf2725a2896bbeb9094"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "eda984843be3c1f9eadd5bac40db74fb"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "f6f93593a6af261a5518a06152c95271"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "4fcc463ff095251466506ba0ab13c4e2"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "9cea433ad49281fa7dc862137e859975"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "a3afeb149fc0069979173249f8a61d2f"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "ebd27be7ab95d028659b0f2f5b4c005c"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "b71a79dd1061c0aedaead5db794b1598"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "a1fe9b1a57ced8fbea3142e9f1a7238e"
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
