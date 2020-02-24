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
    "revision": "2221dbe263e9cc304fe0d87466042547"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "cfe1df311ef148726ff13870145a0368"
  },
  {
    "url": "assets/css/0.styles.c06b9c58.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.1bb8bb51.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.d21290dd.css",
    "revision": "c1d016415691a599105549ad2e4df75d"
  },
  {
    "url": "assets/css/11.styles.a434aed8.css",
    "revision": "bf2b5d8f759255025f779664a03e26e9"
  },
  {
    "url": "assets/css/12.styles.1162a42b.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/13.styles.807e8b66.css",
    "revision": "86e463286683c49c2c08b770630cb28c"
  },
  {
    "url": "assets/css/14.styles.6092b4e1.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/15.styles.d60b9c95.css",
    "revision": "bcf9eca32341b75323122b762fa9abb3"
  },
  {
    "url": "assets/css/16.styles.6d3e1c24.css",
    "revision": "665eddf34bff48bdaf5e911f0482955f"
  },
  {
    "url": "assets/css/17.styles.333f1474.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/18.styles.7fb56909.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/19.styles.5d38adbf.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/2.styles.4e1cf7bb.css",
    "revision": "cc806e876100d56caed897b53b9e3843"
  },
  {
    "url": "assets/css/20.styles.58d83b45.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/21.styles.ac68c5cb.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/22.styles.d2c8c14e.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/23.styles.baa390a9.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/24.styles.0a8f25b1.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/25.styles.8297cc3e.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/26.styles.ebfa4c8b.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/27.styles.b2dfe2e8.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/3.styles.b958ec6b.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "assets/css/31.styles.e93619cc.css",
    "revision": "68488905995da2a785500f9bb7753c21"
  },
  {
    "url": "assets/css/4.styles.d21ead9b.css",
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
    "url": "assets/css/styles.1714ea05.css",
    "revision": "bcd71790dca0be782ef5e7ea62b13e6d"
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
    "url": "assets/js/0.c06b9c58.js",
    "revision": "ac3e9616f1efcb9f10651d5686e7e4fd"
  },
  {
    "url": "assets/js/1.1bb8bb51.js",
    "revision": "2cd98913229e472d7a2b21d08fed0781"
  },
  {
    "url": "assets/js/10.d21290dd.js",
    "revision": "8ee1e9dad137bc2c021db56e79ba7177"
  },
  {
    "url": "assets/js/100.9d474f4b.js",
    "revision": "94fd2f1b1c94837b13909f132891e92e"
  },
  {
    "url": "assets/js/101.03e8c34e.js",
    "revision": "d9b65ecbd26e31f576018906f9652865"
  },
  {
    "url": "assets/js/102.856ea00d.js",
    "revision": "732fa8b0e790c54bf641372964aeaea4"
  },
  {
    "url": "assets/js/103.1a73fb4e.js",
    "revision": "150f15f9c8397cc3eb99451213cf0e8c"
  },
  {
    "url": "assets/js/104.23478e4e.js",
    "revision": "8c7b5373b2c2cc481eaf7147f66b533d"
  },
  {
    "url": "assets/js/105.ef93eaa7.js",
    "revision": "27edc84a3faf50c92d24975e8e15b446"
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
    "url": "assets/js/11.a434aed8.js",
    "revision": "2230bffd6bdac71beac0a87dfb24391e"
  },
  {
    "url": "assets/js/12.1162a42b.js",
    "revision": "e22f6a3841a25320ae8072a94e7ea7ef"
  },
  {
    "url": "assets/js/13.807e8b66.js",
    "revision": "b0d309716c5a27c12efe3b2c1cd8047a"
  },
  {
    "url": "assets/js/14.6092b4e1.js",
    "revision": "994b7fb46a0e3eed5c3d39f09ac39ac0"
  },
  {
    "url": "assets/js/15.d60b9c95.js",
    "revision": "7b347f77aac79c2cdea2d3339415653b"
  },
  {
    "url": "assets/js/16.6d3e1c24.js",
    "revision": "61b17f662a01a0e40b164d4f76b85aa6"
  },
  {
    "url": "assets/js/17.333f1474.js",
    "revision": "d83cd2872cfb9f2b15c242d23ed04864"
  },
  {
    "url": "assets/js/18.7fb56909.js",
    "revision": "fd6eb49f3e0a1b0ed2b67751e74161c9"
  },
  {
    "url": "assets/js/19.5d38adbf.js",
    "revision": "d6f3598d17df06bd758af6cd71f8f319"
  },
  {
    "url": "assets/js/2.4e1cf7bb.js",
    "revision": "2dadd5b1fd5f04f4484b1717bebd28a1"
  },
  {
    "url": "assets/js/20.58d83b45.js",
    "revision": "d56c432b375d6b44bb3ca683536381a2"
  },
  {
    "url": "assets/js/21.ac68c5cb.js",
    "revision": "e277ec9ab9a19ca0e2fb4f1f1611f235"
  },
  {
    "url": "assets/js/22.d2c8c14e.js",
    "revision": "124593c33122889390863292f6268a53"
  },
  {
    "url": "assets/js/23.baa390a9.js",
    "revision": "410133d55e2f5810a62affbccf4f8eff"
  },
  {
    "url": "assets/js/24.0a8f25b1.js",
    "revision": "3fcf11b899f1d8206171e2dc93d5e05c"
  },
  {
    "url": "assets/js/25.8297cc3e.js",
    "revision": "71379f40649b9d32c28c5b7268e5eeaf"
  },
  {
    "url": "assets/js/26.ebfa4c8b.js",
    "revision": "8a3f3dc114dacf80918eb945158e5293"
  },
  {
    "url": "assets/js/27.b2dfe2e8.js",
    "revision": "916b666c8b765541e01470e71ac3b1da"
  },
  {
    "url": "assets/js/28.3ed092ff.js",
    "revision": "81cb0b83f684ccba0713ffe695f8f45b"
  },
  {
    "url": "assets/js/29.eeacfcc6.js",
    "revision": "7dae11d8a5a58ceefcf090546cf3d791"
  },
  {
    "url": "assets/js/3.b958ec6b.js",
    "revision": "ce72e31154ebd1300b136fd22bbf4bb0"
  },
  {
    "url": "assets/js/30.b16bd2ae.js",
    "revision": "b5bfa4130ed0d57745a1276a56884c7d"
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
    "url": "assets/js/34.08a5bfb9.js",
    "revision": "a38c0707d792c8881f18f502a27073cc"
  },
  {
    "url": "assets/js/35.de943d65.js",
    "revision": "fa5d3a85a60908aec0fa31805a99001b"
  },
  {
    "url": "assets/js/36.0100b6d5.js",
    "revision": "606022c618092bec929b521b48de98b0"
  },
  {
    "url": "assets/js/37.5a384f4b.js",
    "revision": "20f3838914e38a6a7e0c28bdf7b529d9"
  },
  {
    "url": "assets/js/38.a7d37ac2.js",
    "revision": "bbb5d2237de4ea09bb64ac731434dbd5"
  },
  {
    "url": "assets/js/39.589f0376.js",
    "revision": "9b15dca425b89e76e10a0f8d010824e6"
  },
  {
    "url": "assets/js/4.d21ead9b.js",
    "revision": "58bfe221d67fa889d9904833641e364d"
  },
  {
    "url": "assets/js/40.97beb425.js",
    "revision": "3a319e31d3521948ddb7fbd490b6013e"
  },
  {
    "url": "assets/js/41.4a28a1ec.js",
    "revision": "37e7cae522a286a75e6c11221c30d8a5"
  },
  {
    "url": "assets/js/42.6d075df2.js",
    "revision": "bc6e9511e49965ec033717c1565b03f8"
  },
  {
    "url": "assets/js/43.9894eeb1.js",
    "revision": "34c8452aa508e957c66c8577f06fa32d"
  },
  {
    "url": "assets/js/44.3968340f.js",
    "revision": "9e4358afce38617ed4c5c8af8031606e"
  },
  {
    "url": "assets/js/45.5014b73a.js",
    "revision": "ac89652b0e7e615f480dfb8fb6fc9735"
  },
  {
    "url": "assets/js/46.e09c4d8f.js",
    "revision": "b1b7c8e7f8b261f1d8a2ea5bf67db3e9"
  },
  {
    "url": "assets/js/47.86b68006.js",
    "revision": "31470e3225c2481e4dba264c0ee19dd8"
  },
  {
    "url": "assets/js/48.09906088.js",
    "revision": "383e3fe8705d789fbdf86753c7702000"
  },
  {
    "url": "assets/js/49.49d1383c.js",
    "revision": "ee8b00f70583ee7f6ac6db1ee66e9940"
  },
  {
    "url": "assets/js/5.183f53b1.js",
    "revision": "498c0b54f5205fc0a3dbb1041d4a8230"
  },
  {
    "url": "assets/js/50.912b242c.js",
    "revision": "077ef7d3cbc7d08d9a0c96c3da147e0a"
  },
  {
    "url": "assets/js/51.5419a9b0.js",
    "revision": "0611321f185423508e03fc10f8c39df0"
  },
  {
    "url": "assets/js/52.ff19fbb4.js",
    "revision": "a4407440a8841d7a3c4c6a8e2ed19d50"
  },
  {
    "url": "assets/js/53.5fb7aebc.js",
    "revision": "d82c8c59e9fbb6bbfd53d7212d1aac7a"
  },
  {
    "url": "assets/js/54.420a00ac.js",
    "revision": "edb9c490eaf59599b2b64752d88291d4"
  },
  {
    "url": "assets/js/55.71ac203a.js",
    "revision": "fc6573feee22b51787febfa236aac63b"
  },
  {
    "url": "assets/js/56.b06c98f5.js",
    "revision": "2380e7321fd31bdefdec9fd609a190ad"
  },
  {
    "url": "assets/js/57.45b885eb.js",
    "revision": "d49859218c58cea9b5aee754c789b823"
  },
  {
    "url": "assets/js/58.0dbfa3d6.js",
    "revision": "bd8d1f05ed5a6f23f6f1385e80b0e388"
  },
  {
    "url": "assets/js/59.cbb7a8b3.js",
    "revision": "382674b5641cb580eb5a0477c1b5d6aa"
  },
  {
    "url": "assets/js/6.5f5e2587.js",
    "revision": "9125b53e61a93b6bf716694f8d700563"
  },
  {
    "url": "assets/js/60.deff3b4b.js",
    "revision": "597537d1c85ffbb9e2f59c5ab2be6af4"
  },
  {
    "url": "assets/js/61.5c51bec0.js",
    "revision": "d620383fca6bf5df4d1a94d3d19369b5"
  },
  {
    "url": "assets/js/62.c9a72458.js",
    "revision": "6579f15fbc9c8788cf1bf19968ad0794"
  },
  {
    "url": "assets/js/63.51e099d0.js",
    "revision": "2e88c299a3a8154fc30bca1734d4285e"
  },
  {
    "url": "assets/js/64.998130ab.js",
    "revision": "fc3f5f1f7eb2679869be3c2a27ec7952"
  },
  {
    "url": "assets/js/65.4cb541bf.js",
    "revision": "ea4885ee9e3a43942245d51bce9a1a38"
  },
  {
    "url": "assets/js/66.fb36eab0.js",
    "revision": "7684723ea4b84616be60071e62338fab"
  },
  {
    "url": "assets/js/67.c06e885d.js",
    "revision": "2f1a7f8f55ddafbb96efe16107656809"
  },
  {
    "url": "assets/js/68.8e024474.js",
    "revision": "221caf7925795b1a9742cca58f8a0619"
  },
  {
    "url": "assets/js/69.7a4d42e4.js",
    "revision": "e48eafc2df3c7f6a72116722956315de"
  },
  {
    "url": "assets/js/7.3f7d0493.js",
    "revision": "ac30dfdf735844901cb26f8d4bac2bc9"
  },
  {
    "url": "assets/js/70.b34f6222.js",
    "revision": "65fc94deac4c31c53e0508487ad23869"
  },
  {
    "url": "assets/js/71.c1175f4e.js",
    "revision": "3365d2a2792b80a6f9c9cd75b40efec0"
  },
  {
    "url": "assets/js/72.5002b9c4.js",
    "revision": "1504e9d1629f6a0a3454c2acbe577d48"
  },
  {
    "url": "assets/js/73.eb2049da.js",
    "revision": "c1c2ce385e610dbb8b5a8aa996c2a8da"
  },
  {
    "url": "assets/js/74.d19cddfd.js",
    "revision": "6149a7e8a6afa780aea31336d9fe8d76"
  },
  {
    "url": "assets/js/75.b1f9fedf.js",
    "revision": "4671cfcf8e92b7de7bb46061b6f8a3a9"
  },
  {
    "url": "assets/js/76.83ef69d6.js",
    "revision": "cc7f2deab72d8c5e8cee20994a156cbd"
  },
  {
    "url": "assets/js/77.548211b0.js",
    "revision": "51d63299a548954738b403dd4605e8db"
  },
  {
    "url": "assets/js/78.c89ea3c3.js",
    "revision": "936047be03f4b009e6b267b32b589e0d"
  },
  {
    "url": "assets/js/79.9e400d1c.js",
    "revision": "8b5e01bbcc8fe38f5e367168fd5341f3"
  },
  {
    "url": "assets/js/80.db4bff9d.js",
    "revision": "e28a4d10d9091882c3d883762c9a924e"
  },
  {
    "url": "assets/js/81.6ce405ad.js",
    "revision": "23aacb3533aba01db480a45672b91182"
  },
  {
    "url": "assets/js/82.b1e0dd21.js",
    "revision": "096e0c608a3dfbe9393da5c6e3aba6c0"
  },
  {
    "url": "assets/js/83.f4351309.js",
    "revision": "45c79784b9b04943d6b7daebf8e2464c"
  },
  {
    "url": "assets/js/84.086620ab.js",
    "revision": "f1801318ac1cf52a88b9071c13e16918"
  },
  {
    "url": "assets/js/85.53c8352f.js",
    "revision": "1d37fbc533a46fbb334f16d97e5a49ea"
  },
  {
    "url": "assets/js/86.6b0ed105.js",
    "revision": "8e4d788454b277eb66f457d53ecbb2ea"
  },
  {
    "url": "assets/js/87.d1ae775f.js",
    "revision": "ca6a9ca8098710d33c0916ad1cd873e8"
  },
  {
    "url": "assets/js/88.613c826e.js",
    "revision": "266a32ad861d7fc6e4d403e905eee010"
  },
  {
    "url": "assets/js/89.9e7f8b47.js",
    "revision": "b2f78f37376ad49140ce8ac6be0957cd"
  },
  {
    "url": "assets/js/90.7afa4bc2.js",
    "revision": "075ba8b7a74b3bcaa7073c45968a52c5"
  },
  {
    "url": "assets/js/91.e2559f22.js",
    "revision": "4194cb5965abe1ec0c38cc1ab62855f1"
  },
  {
    "url": "assets/js/92.13d7c429.js",
    "revision": "5afc534f974db9114766ea7d4c41cb7f"
  },
  {
    "url": "assets/js/93.264d42e9.js",
    "revision": "dbff1574cdf6bbe7c519561c0b9132c1"
  },
  {
    "url": "assets/js/94.b080348d.js",
    "revision": "e6f8077f40d7ac0c2d2432866b52d3a6"
  },
  {
    "url": "assets/js/95.77973239.js",
    "revision": "665ed82263b6292b0e7f649264e04a94"
  },
  {
    "url": "assets/js/96.065f18fe.js",
    "revision": "366c40db2375e00e3c76eb8592001b85"
  },
  {
    "url": "assets/js/97.7012318b.js",
    "revision": "00a4b690bc706af38d489354cf663b9b"
  },
  {
    "url": "assets/js/98.a01e599b.js",
    "revision": "e6e5c08e9de002d6018e5474cbf7f2e5"
  },
  {
    "url": "assets/js/99.9178ee07.js",
    "revision": "16d14ab9110c5525be41f7b035f2f06d"
  },
  {
    "url": "assets/js/app.1714ea05.js",
    "revision": "b518395a26ddb726c73e020b8ca105cf"
  },
  {
    "url": "assets/js/vendors~flowchart.ec2b4b60.js",
    "revision": "1345b72bb80f6d0c171d01b382cb35a5"
  },
  {
    "url": "authors/index.html",
    "revision": "4603b176fb812ccef796cf35204cd71d"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "3b404a386057b8524b0126ce0f6c2e9f"
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
    "revision": "b333c980634c8853e85db8b513e6c3d0"
  },
  {
    "url": "categories/frontend.html",
    "revision": "d1e8e5f21f9e29237548ea74174de3f2"
  },
  {
    "url": "categories/index.html",
    "revision": "723e7dff406617ed0606241ad9a06c95"
  },
  {
    "url": "comments/index.html",
    "revision": "75df7ab2c8ec89ac4b0972b92b0a4c81"
  },
  {
    "url": "contact/index.html",
    "revision": "96fdab05810d66b80ad5064c274b5918"
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
    "revision": "ac65443b10e76920e3735c6e46c7c4fb"
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
    "revision": "1b0803a618217ce7afdbe66950be5535"
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
    "revision": "87af30a89e862f1e51b73e14cc156ddb"
  },
  {
    "url": "posts/index.html",
    "revision": "cd6a8fe48e68b89f16bbc837bfce5ae4"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "bb07d194fd3bb524b65c5c4a772f3bda"
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
    "revision": "1358c230685174ae1398c0c4ee4b947a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "14940622ba062d4f1267037e4f57653a"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "62e8d9d15d41aadf9604e2b4c392d12d"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "fe76346aabb2a1b3711df714566edca4"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "16d70bf6974ce65c1822472a9c51aa50"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "0ea5252b2c0506346823c6f12acc94c6"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "8c88036e92977ddd0edb4ebfefefc376"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "4a7cd844b5f0024aedf56f290deca0e9"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "faffc5045c1ea30462495aefa32f3619"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "743ef2a7711a4b1a7c44d5f456b4a500"
  },
  {
    "url": "zh/index.html",
    "revision": "8a0a140cc8f6e0e643ff8e2300a0c44b"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-shang-.html",
    "revision": "e704e36356dfff1b8a9a04815a2efbf4"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-xia-.html",
    "revision": "b6686e4146a0dd2976cced8db9485c8c"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-zhong-.html",
    "revision": "7f04564e736bc111e689ab55e24b060f"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "672905f34545e550e6a775ebd2bd79f2"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "2270a31670e7a33000e2125b080b0fcf"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "941703669ca7e7588be741f25c108328"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "fae0a97a715aece07ab2aad24b12c661"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "7f8c79fc7c958737cb719b4286d7ff3d"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "4abc64727d573c801d18f492b1cd72e2"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "99f189919184822f3fe88d51e444f513"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "99b8e7aa18e65b82b853074fc6b99ebc"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "0b8fa0d2c1b6b55a22f6db4ffc6beadd"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "4a2e79091318cda1741c2ad475ef6682"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "8e33bd47fd418950882267ed2dc8b9d9"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "13f101ea90d661a78b1c10cc4ffaabc1"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "1f00aed7677eb10c077d6f8ba4390f18"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "baa06a725aaabbc0ed9a0d00a5cad72f"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "371a79c5229e9d5341719b7a17a13767"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "4321d2493210b7357a53f4d9620b2328"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "19b426470060af6d187547da01e343ab"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "68ae97d8972bd0d60dbb50f493a1a58f"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "65d2963da73d9589280a6ff0e0ae3146"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "2f1455573de2d1a6526dc26ac66fda4c"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "9aebd4959b8fe86be63aa0822e53812f"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "935d2e8e0257526fca5e2879f48fd4a0"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "2c7ab7ad86ff3d9cb656383cd29533ff"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "7866a49df7c5f962f6f5cc2eb85b0157"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "5378e5f5fb4d175a1ea0035cdcb6c5d4"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "fbaf422c56029ced54578fe3f96aed67"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "f019c320220d33a5f128663a16d8191f"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "803546f4495a6ea8554732afa43604e3"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "51a794a88afe5b8064317ccb84dccc05"
  },
  {
    "url": "zh/posts/tong-guohtml-shu-xing-ke-gai-shan-yong-hu-de-shuang-chong-shen-fen-yan-zheng-ti-yan.html",
    "revision": "fc69d7489a0d85b2a534bc1b4390a704"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "dc55afd9645a96d02f873d3cac3f7185"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "b633726b1e0c216604ccb59a7b64ab0f"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "31a1aa88d72f903b5e6ad39f9a79f6c8"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "d077c41d03d7aa7c5025dd3fbd5d4f8d"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "67b3b59cf063ac1f78b02b55a75229c5"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "8ef5c88aafdd62277b913d4c0680f6de"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "a402a08f4f5e5584d051dbbdfdd6f1c4"
  },
  {
    "url": "zh/posts/yu-shan-dao.html",
    "revision": "fd7c150c1ccd66034680df32ff287305"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "d2de81694b95daa32a501d448f076be7"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "e092ad3a9d1e91948d78c816785615a8"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "7fbae2e817459d1fd3ddc4973d1e5b76"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "ae9d8cb666082b88b477856e6bef54fa"
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
