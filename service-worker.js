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
    "revision": "e8416304785300bf100efffa3024416e"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "536f9c892e0bd17644639465904c545f"
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
    "url": "assets/css/10.styles.62ac1a04.css",
    "revision": "dd46b5d73e50cf46d0911ff59a3f4e35"
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
    "url": "assets/css/14.styles.6b145aa0.css",
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
    "url": "assets/css/17.styles.5a6b76b7.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/18.styles.b9aaa057.css",
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
    "url": "assets/css/21.styles.513c739a.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/22.styles.f8b63a0b.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/23.styles.34a168f6.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/24.styles.d189a04b.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/28.styles.94f3d1bc.css",
    "revision": "c1bb58668873a7bd5cc84b074530082d"
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
    "url": "assets/css/styles.b7a10910.css",
    "revision": "646ed5b988924bb401b1031280f5faa3"
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
    "url": "assets/js/10.62ac1a04.js",
    "revision": "a7c61898fffad6eb9c1d91ad58dd4b9c"
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
    "url": "assets/js/14.6b145aa0.js",
    "revision": "450e1fb749b521073025a49ff257a010"
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
    "url": "assets/js/17.5a6b76b7.js",
    "revision": "46ed16fa3f65d263df18fdf2993cc0d2"
  },
  {
    "url": "assets/js/18.b9aaa057.js",
    "revision": "eb95e1f5f05d1c00821ca00fb6f779fd"
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
    "url": "assets/js/21.513c739a.js",
    "revision": "f117bb6017d81f2fc48f6298102bc393"
  },
  {
    "url": "assets/js/22.f8b63a0b.js",
    "revision": "59df55f1bf28c1714891c9d9a8df5a84"
  },
  {
    "url": "assets/js/23.34a168f6.js",
    "revision": "a1a347dcd702ba9c9076e690d397b061"
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
    "url": "assets/js/28.94f3d1bc.js",
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
    "url": "assets/js/31.89e9556b.js",
    "revision": "d91e51f52e1831af874df5dd6ae25824"
  },
  {
    "url": "assets/js/32.9e140ae2.js",
    "revision": "afc09b3b94c62b6c36a2745f9b821a97"
  },
  {
    "url": "assets/js/33.3b0d2490.js",
    "revision": "a0e59a8168a6f638a710f14a64c5d0cb"
  },
  {
    "url": "assets/js/34.721fa8a8.js",
    "revision": "aed2a5e07d0bdb4eada02aea3f5c7341"
  },
  {
    "url": "assets/js/35.88970fd1.js",
    "revision": "1c0f4df5bb3f2430817ebae48add2e6c"
  },
  {
    "url": "assets/js/36.4d5e4ac9.js",
    "revision": "d119ed1b920a0a3a39972b49e53ea3b4"
  },
  {
    "url": "assets/js/37.85bc9423.js",
    "revision": "2731b339480ee183c27369117a2fd721"
  },
  {
    "url": "assets/js/38.05afc6cd.js",
    "revision": "6a1bdd55cbd676930f522b173efee106"
  },
  {
    "url": "assets/js/39.f7a447c8.js",
    "revision": "362d8dde5a75ba3d9b1aeca5192d30fe"
  },
  {
    "url": "assets/js/4.bfddec90.js",
    "revision": "8f7ead6d06106ba64a91bef5ab5390be"
  },
  {
    "url": "assets/js/40.63b1d3d6.js",
    "revision": "65295bfccd64b46088d2708285e6415e"
  },
  {
    "url": "assets/js/41.fc655688.js",
    "revision": "5b37aa25b56e9341a7e9a97b18385cf5"
  },
  {
    "url": "assets/js/42.6454396f.js",
    "revision": "ea171d4247ad6ef40f593cede4dfa308"
  },
  {
    "url": "assets/js/43.1dc0393c.js",
    "revision": "9ce5d43ab03636350ca680360f8ca595"
  },
  {
    "url": "assets/js/44.bea12b85.js",
    "revision": "70ea9e5454df1ae3b1acf56e06c56f8e"
  },
  {
    "url": "assets/js/45.2474b67f.js",
    "revision": "bc361d468cbdb2f1ef093b267f6d41b2"
  },
  {
    "url": "assets/js/46.be2f8cd1.js",
    "revision": "8751e0b73d4d33cbfe23f20478d654f1"
  },
  {
    "url": "assets/js/47.89b83944.js",
    "revision": "178b2a06173b63b320d593f8be0c94d4"
  },
  {
    "url": "assets/js/48.81b9dba1.js",
    "revision": "555e7ce1bd1cf9714e2c6508b13d6077"
  },
  {
    "url": "assets/js/49.bd04e4bd.js",
    "revision": "e8ad27f51b9864c99ca8b374fb012587"
  },
  {
    "url": "assets/js/5.b2c9a86e.js",
    "revision": "6a3f8f1802c00fbca347ad38911e2f9e"
  },
  {
    "url": "assets/js/50.7929b8c2.js",
    "revision": "c93d4f804a41c55b236977bd9a5920d7"
  },
  {
    "url": "assets/js/51.b68c14c5.js",
    "revision": "5484a9bda3a114cb84cfedf502469e4c"
  },
  {
    "url": "assets/js/52.b30f4c5b.js",
    "revision": "2002923c67621736aebd110099254e48"
  },
  {
    "url": "assets/js/53.12f118b4.js",
    "revision": "54ea667152b1b66be7907a5d8dee8456"
  },
  {
    "url": "assets/js/54.1cd99ec9.js",
    "revision": "d811f9487601975876a00469e1f71c80"
  },
  {
    "url": "assets/js/55.ddc14f5b.js",
    "revision": "45e1a753d542791b461f513445d9ca86"
  },
  {
    "url": "assets/js/56.2a12668d.js",
    "revision": "18dda3c80f1bc905208cbd845439bdcf"
  },
  {
    "url": "assets/js/57.51e0cc39.js",
    "revision": "cb800baa79e14691f1523c46e59838b1"
  },
  {
    "url": "assets/js/58.6055675a.js",
    "revision": "e4cebef602c1a1c79771d53a51d82438"
  },
  {
    "url": "assets/js/59.c52b8fc8.js",
    "revision": "92f0dd7160f6b6a07c66108f0c427bc1"
  },
  {
    "url": "assets/js/6.e51a0712.js",
    "revision": "793efa4b022c896c47ab7e2f73d01105"
  },
  {
    "url": "assets/js/60.ab94cf2e.js",
    "revision": "dd294b43d796c62080e10d72680ca005"
  },
  {
    "url": "assets/js/61.3c355e0d.js",
    "revision": "68ab2c1c0a479b272b502a842635dd8a"
  },
  {
    "url": "assets/js/62.3a246b02.js",
    "revision": "f87c7b04836b7d650335cde7d6ff1be1"
  },
  {
    "url": "assets/js/63.39e4d1b6.js",
    "revision": "5e8a1ad7c74b09da22ae7ddda13a6453"
  },
  {
    "url": "assets/js/64.5e93f615.js",
    "revision": "522078167abab1674e45de8b353c0b6c"
  },
  {
    "url": "assets/js/65.7fa4a63e.js",
    "revision": "910d01f74cc6034d9f9615153de6e66b"
  },
  {
    "url": "assets/js/66.dd5cd2c2.js",
    "revision": "e6c89d72e21efa49243d6b831ce20d93"
  },
  {
    "url": "assets/js/67.66519a12.js",
    "revision": "f332d23579c2ffd0a07587e07defeab8"
  },
  {
    "url": "assets/js/68.8ef4fe47.js",
    "revision": "b291f30576b736d1248f6007339921e1"
  },
  {
    "url": "assets/js/69.fe10b46e.js",
    "revision": "7d37582bf677e70d9a68964720d529fa"
  },
  {
    "url": "assets/js/7.5d6a6685.js",
    "revision": "b617c299d1948c45c163c68a8fc8b5e2"
  },
  {
    "url": "assets/js/70.74fc8cee.js",
    "revision": "47832725ab5f99699936dfabf5995d61"
  },
  {
    "url": "assets/js/71.3d16f532.js",
    "revision": "f982f2d2221fbf63d7e46d66203c20dc"
  },
  {
    "url": "assets/js/72.1113d072.js",
    "revision": "d32e943da33d76d3461da928fab0aa8b"
  },
  {
    "url": "assets/js/73.e8ab17d7.js",
    "revision": "86efa4d609e913722c4435a98cb3b086"
  },
  {
    "url": "assets/js/74.68d9075f.js",
    "revision": "86b87045a2deff12b6018fd56e1a74f0"
  },
  {
    "url": "assets/js/75.6cc5b856.js",
    "revision": "139a7330f9b8f838259348257df804aa"
  },
  {
    "url": "assets/js/76.bb668b73.js",
    "revision": "4f1d6c250c552f077192a11defc2e94e"
  },
  {
    "url": "assets/js/77.96c6a640.js",
    "revision": "6cc304f216aff41edff5d6ae70a2c4c8"
  },
  {
    "url": "assets/js/78.388ee70a.js",
    "revision": "20da3550752ebf7f15f0c51e2cf8e17a"
  },
  {
    "url": "assets/js/79.ecebbb28.js",
    "revision": "771d3ffdaa75e3c753bdcc0fb6fd9795"
  },
  {
    "url": "assets/js/80.ad8e159f.js",
    "revision": "837c164905c6511223e8298bb6f45cef"
  },
  {
    "url": "assets/js/81.d5b63059.js",
    "revision": "a27f6f46df7c9f741f144ab47de44ede"
  },
  {
    "url": "assets/js/82.d5c081c2.js",
    "revision": "bc9b3dbb535b0cacb1d768e5b141c95e"
  },
  {
    "url": "assets/js/83.e98ab430.js",
    "revision": "b26aa050a5074d92ddf981d01c634fd5"
  },
  {
    "url": "assets/js/84.2263ae7f.js",
    "revision": "244c540548e5fad8f35402a3dd321a49"
  },
  {
    "url": "assets/js/85.dae0d221.js",
    "revision": "73dc20a91c741f3974fcc9ea0e56042b"
  },
  {
    "url": "assets/js/86.16522b85.js",
    "revision": "69cb9f1a2a589dcfa326883f76bc0116"
  },
  {
    "url": "assets/js/87.7d7ef6b0.js",
    "revision": "f28a9713479abacb2b91cc5abe4be36e"
  },
  {
    "url": "assets/js/88.d5fe5661.js",
    "revision": "2cf01981ee4c0c1a7e8a3e10971424eb"
  },
  {
    "url": "assets/js/89.c9d64992.js",
    "revision": "9ec02083329cdd07166de2cb8be758ab"
  },
  {
    "url": "assets/js/90.adf7bac1.js",
    "revision": "201b98f76fcfddc24e4e0c4ffcc9c464"
  },
  {
    "url": "assets/js/91.2ab1aa85.js",
    "revision": "5286cebae43a0385af665a86faa42e2d"
  },
  {
    "url": "assets/js/92.72a02646.js",
    "revision": "4cc802228d133361e2c4d8e0f07c3931"
  },
  {
    "url": "assets/js/93.1d7a322a.js",
    "revision": "ebfac1b94b9fddc244e3b0720b6401e5"
  },
  {
    "url": "assets/js/94.d1a3e5fd.js",
    "revision": "783a07377241b93a538aa1405d0c8e3b"
  },
  {
    "url": "assets/js/95.193e347d.js",
    "revision": "cf053cded56991c15e161c1572a8cfd7"
  },
  {
    "url": "assets/js/96.35524f91.js",
    "revision": "f716ea321fdc72f147756057c57140c7"
  },
  {
    "url": "assets/js/97.9f73b536.js",
    "revision": "7af499785df2deb3d5df2d03b5fed680"
  },
  {
    "url": "assets/js/98.596d5ac0.js",
    "revision": "647c9a661366c6be61c4668aebf22970"
  },
  {
    "url": "assets/js/app.b7a10910.js",
    "revision": "a9224ea767e0e0144deb2345f153e9e0"
  },
  {
    "url": "assets/js/vendors~flowchart.66b0012f.js",
    "revision": "f15f6e3831f474d10c1a816039124eb1"
  },
  {
    "url": "authors/index.html",
    "revision": "fdd6051e533c558147ec7dbeb5b9f326"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "6b54e542f633a344cc3c865d4b93631c"
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
    "revision": "dc3bf31d285c30ec9df6aa2bc465bb4e"
  },
  {
    "url": "categories/frontend.html",
    "revision": "5f9d8f1189509395460dc2ece712b2ae"
  },
  {
    "url": "categories/index.html",
    "revision": "a359ccd4f6f8a54bc8af9a2a2d8feb00"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "5bfa101a8d569625b3bbd194713fa4c6"
  },
  {
    "url": "contact/index.html",
    "revision": "5f9a5f552b57aeea0b111d66432c06ae"
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
    "revision": "38bb7d489840056a5bf22d2d5723c385"
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
    "url": "images/posts-base/2020/1/my-first-post.png",
    "revision": "9d3936d8080aeecc8593bb8e1cefd52b"
  },
  {
    "url": "images/posts-base/2020/2/my-first-post.png",
    "revision": "9d3936d8080aeecc8593bb8e1cefd52b"
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
    "revision": "7caf6f2a22b9414f20defc1feaaf7b0c"
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
    "revision": "bb6477694b4fca206282ebd0fe568a3f"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "ac3d15c46b06453186c78d383be57498"
  },
  {
    "url": "travel/index.html",
    "revision": "24793ad89de03d34794612af9a31afd5"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "130ca60b363fcde0c370602e18fa4b26"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "094cc01e1965ad97c17f6d1851c5e90c"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "f180d4473ea82e7c1ec9348a81f45ebb"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "8c786e866f5858b54e005aaaee780a59"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "e39a4a75546b97545904215f751af1d7"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "8a8b89a725d6dce3fab55bab2db9e1f7"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "de01bcd1179a399abe571cad42fdff6a"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "e0d0e4a4060a6dd251a844b8a0ba26a5"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "9736f59c10c6e2b198c69953d2f93652"
  },
  {
    "url": "zh/index.html",
    "revision": "e81416a6f386ea2608204f55db704e8e"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "328e29932b5c26cd3e8a8a6514ce73c8"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "3515e289c7497aa62ba16c867a7ad868"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "08e0131a09f9b4f053ee1758a6f8825c"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "34f3d0ee8541546ef8abb1feba3c9742"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "8b53c978f99694ff6bf622eb6e0b1cac"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "2f47c18b0458c4ce700e3db0e925d393"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "8c491f14b038ffbf73fb1ed27c89ce7f"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "b9249e19916381dab88b17775745e533"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "52b2bd939d63c5540720551606b2070e"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "2890c09a69fd662a3c49704cab56b7a4"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "14d291b15cfc694636025972b2180aa3"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "ba3bf02b1c1e45e0a05fb6d5a5ed2895"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "459dd5395e00348cb5e8ebbf17f47cfc"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "c883e4dcce59d4ac9ac2edf81cc3eadf"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "87f1530683f219bd1c61d3e5d15096a3"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "fbbf9d697a32b7f3ec53da834bd3765a"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "2f9e62b1af42978ad88aa195fffffa06"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "2411ae0e7168bebb22b33aac18d1571c"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "c89fe0d47311932a10483013005f0fdb"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "63f737b331a859e765bde8ec4bfba6b7"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "d4fd787baa46fb6ea410e9656d85c1ed"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "b7151489209f12754d299c75bd2e43a7"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "8c4e019a56b77db70d56d49dcb4ac822"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "208308a20211d2aeb998641ddf675686"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "24bc110e34d5b0ff7231b2d2c28c8e11"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "270092752421dafa612df6f33d42e32d"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "d2ae42a106e9dd33dd9eb18f54391e79"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "561e08fec9f690b78c9058c08579bc2f"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "255a92e4a55b27d6f4d4a04948ece2ad"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "e3ec80cfd1eec801eb802a5e2d61ce51"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "bbe31d1488d06419ea220927d538cf36"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "ccc325bb8af86417fee8d5f81fda2197"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "8c065f9f4c610348bd99918b8bfaa3f2"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "4a2079dba98718775f72401b932267f0"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "c53a45a4c5e733f2c5d9b85612a35144"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "3c2ebabf1e67a491640ae24ac99cba88"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "32600b0752fd69ea6a3f5521df773dd0"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "e9e0a2e58634e177b1541b0a26dfb8de"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "0ea1d8212f4b95ece06f7d769bda73db"
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
