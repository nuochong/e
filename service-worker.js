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
    "revision": "324733d4468c35541287fd18725f287c"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "e5c1544a338eeceea7053533a4c98379"
  },
  {
    "url": "assets/css/0.styles.6d924dec.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.1bb8bb51.css",
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
    "url": "assets/css/12.styles.1162a42b.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/13.styles.746e586d.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/14.styles.6092b4e1.css",
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
    "url": "assets/css/17.styles.1e4368dd.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/18.styles.5642f77f.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/19.styles.2c02498d.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/2.styles.0adea04a.css",
    "revision": "1797b8d617427ed3957936931d189371"
  },
  {
    "url": "assets/css/20.styles.fc686a49.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/21.styles.60bb7490.css",
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
    "url": "assets/css/25.styles.88b2301d.css",
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
    "url": "assets/css/3.styles.b958ec6b.css",
    "revision": "d9acc3e1474062cd89d7da261af7e7e6"
  },
  {
    "url": "assets/css/31.styles.e93619cc.css",
    "revision": "68488905995da2a785500f9bb7753c21"
  },
  {
    "url": "assets/css/4.styles.6038e934.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.ae163cc9.css",
    "revision": "876b8d6019efbff1f13093dc39bf67d8"
  },
  {
    "url": "assets/css/7.styles.3f7d0493.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.9f663a4a.css",
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
    "url": "assets/js/0.6d924dec.js",
    "revision": "3469aa1250abb5863b293a93c8818df4"
  },
  {
    "url": "assets/js/1.1bb8bb51.js",
    "revision": "2cd98913229e472d7a2b21d08fed0781"
  },
  {
    "url": "assets/js/10.9791f035.js",
    "revision": "598fc9fde2af8b81c25f07b29ddc5cdb"
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
    "url": "assets/js/102.1ab87446.js",
    "revision": "01e768cc3a0df8ad38711b5f13615079"
  },
  {
    "url": "assets/js/103.6d7daf94.js",
    "revision": "e38da5ca7839265a372d90bd8db3de37"
  },
  {
    "url": "assets/js/104.86526f38.js",
    "revision": "ce6ff4eee3bdb4712ff4b9d911f523dc"
  },
  {
    "url": "assets/js/105.50866ee2.js",
    "revision": "0e2f58a42aad9d4adc92da200fbbfb0a"
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
    "url": "assets/js/12.1162a42b.js",
    "revision": "e22f6a3841a25320ae8072a94e7ea7ef"
  },
  {
    "url": "assets/js/13.746e586d.js",
    "revision": "cf591b111fe1dc649b55fcbf58775cdc"
  },
  {
    "url": "assets/js/14.6092b4e1.js",
    "revision": "994b7fb46a0e3eed5c3d39f09ac39ac0"
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
    "url": "assets/js/17.1e4368dd.js",
    "revision": "7dc942079a28208e09e3e0f4572ea06e"
  },
  {
    "url": "assets/js/18.5642f77f.js",
    "revision": "97c6781bc235b141561aac4b490ff249"
  },
  {
    "url": "assets/js/19.2c02498d.js",
    "revision": "fa598e8a08275f4db75fff1e99a2fa22"
  },
  {
    "url": "assets/js/2.0adea04a.js",
    "revision": "6c55c77b6b523ae449a2a3d7f342aaa6"
  },
  {
    "url": "assets/js/20.fc686a49.js",
    "revision": "aca8a09133e5c0748e76f1528d9d9bb9"
  },
  {
    "url": "assets/js/21.60bb7490.js",
    "revision": "7508e7ecec37b5542bd51ecc0c562844"
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
    "url": "assets/js/25.88b2301d.js",
    "revision": "47a4148c243f240c2dbc39422a7a6711"
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
    "url": "assets/js/34.d64ef539.js",
    "revision": "1922badad65e94a909ecb7199af9fc8f"
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
    "url": "assets/js/37.b2f796e0.js",
    "revision": "bf4651ecbf571f94e729de5feff35eae"
  },
  {
    "url": "assets/js/38.7b3bc57b.js",
    "revision": "a45c4efa9c726de958661469d97505b8"
  },
  {
    "url": "assets/js/39.c727d1e8.js",
    "revision": "7d75f43ce07d7ae9c95f9ffd92ca45ae"
  },
  {
    "url": "assets/js/4.6038e934.js",
    "revision": "a1eff526aeffbca1bcfb1fdd33570174"
  },
  {
    "url": "assets/js/40.97beb425.js",
    "revision": "3a319e31d3521948ddb7fbd490b6013e"
  },
  {
    "url": "assets/js/41.db43272e.js",
    "revision": "91bb4c24ab2e62d6b4c48b6e74eee0b2"
  },
  {
    "url": "assets/js/42.76556bda.js",
    "revision": "4ac8079b10f7d01735caaa6c322b9136"
  },
  {
    "url": "assets/js/43.be218e0b.js",
    "revision": "cf7ff0d3143134176924254becac16ca"
  },
  {
    "url": "assets/js/44.013e5ce6.js",
    "revision": "df5e2cbf682d9b4ee0994aa7d278f1a2"
  },
  {
    "url": "assets/js/45.f94d051c.js",
    "revision": "c56229f9072ee8c00036ba6215d0003a"
  },
  {
    "url": "assets/js/46.f6ee4116.js",
    "revision": "a881960009532cf07d8c09e10da78783"
  },
  {
    "url": "assets/js/47.cb684723.js",
    "revision": "8beea4b1e6acc803bc91db8850064fdd"
  },
  {
    "url": "assets/js/48.09906088.js",
    "revision": "383e3fe8705d789fbdf86753c7702000"
  },
  {
    "url": "assets/js/49.ef2c1a6e.js",
    "revision": "17abf50455f3de10ff0822f87994e7b7"
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
    "url": "assets/js/53.6eca3efd.js",
    "revision": "e825575f67bcfcefda1104c61a89c240"
  },
  {
    "url": "assets/js/54.b79cb315.js",
    "revision": "f37b059c5aa5e7573712846b4f1aaec0"
  },
  {
    "url": "assets/js/55.652d040e.js",
    "revision": "1f815cac5bd0392a3601c39f873c42f7"
  },
  {
    "url": "assets/js/56.39cd3fb4.js",
    "revision": "bb971af3cd563879fde20d65ea9c3cb4"
  },
  {
    "url": "assets/js/57.6d875922.js",
    "revision": "dbfbb3bba101f838d5350552b1f77f1f"
  },
  {
    "url": "assets/js/58.ae61925c.js",
    "revision": "8fd2f54635123c45d38cab053fdeec3c"
  },
  {
    "url": "assets/js/59.3e998a90.js",
    "revision": "b7006e2b12af466c7569aeb4dc7e1363"
  },
  {
    "url": "assets/js/6.ae163cc9.js",
    "revision": "dc09cfcb57cfc71a0e857e2b705807d1"
  },
  {
    "url": "assets/js/60.99ef763b.js",
    "revision": "6fd43d6aa6e0403f73ea8fb71dd3aa13"
  },
  {
    "url": "assets/js/61.d96a88e5.js",
    "revision": "a3f9866338d785138c23f7cbd542823f"
  },
  {
    "url": "assets/js/62.9c52afbb.js",
    "revision": "5cec2239a30daec918b2210815b448a6"
  },
  {
    "url": "assets/js/63.b1bdaf69.js",
    "revision": "09e9087c617711a23e70d883f412c1de"
  },
  {
    "url": "assets/js/64.01567eaa.js",
    "revision": "d94baeaf2b6c96207cb6e3580c4dda65"
  },
  {
    "url": "assets/js/65.91688101.js",
    "revision": "f2ac7f1ff49d434a57b7a72e48d4ba31"
  },
  {
    "url": "assets/js/66.5d253a47.js",
    "revision": "eba777c1be9d199e1a51fa32215cd588"
  },
  {
    "url": "assets/js/67.a8510074.js",
    "revision": "94bf07d3de1bccc1deb30e5e31c8b757"
  },
  {
    "url": "assets/js/68.4bde8948.js",
    "revision": "6d97425a9287b9387e46636e291d2796"
  },
  {
    "url": "assets/js/69.bae199b2.js",
    "revision": "d84588b7edec53fe1fb06baca14dda15"
  },
  {
    "url": "assets/js/7.3f7d0493.js",
    "revision": "ac30dfdf735844901cb26f8d4bac2bc9"
  },
  {
    "url": "assets/js/70.e1740d71.js",
    "revision": "70c0871f0d80931bf2b347806fa7938a"
  },
  {
    "url": "assets/js/71.5fb6f07a.js",
    "revision": "f206d22538b58f326ce533fc13459e34"
  },
  {
    "url": "assets/js/72.0ea6f960.js",
    "revision": "0d142da3b04080dda7e9e6f3c5d3704f"
  },
  {
    "url": "assets/js/73.d152ffad.js",
    "revision": "d255cca61ff52bddd5ecc07a49552a83"
  },
  {
    "url": "assets/js/74.18ef15d1.js",
    "revision": "7e321bd5d63ffe075dec13e20874b191"
  },
  {
    "url": "assets/js/75.c789387e.js",
    "revision": "4ec6a0bd32a9c0c17363cc16f572e209"
  },
  {
    "url": "assets/js/76.b41e6d88.js",
    "revision": "c1e593c667b9e451b90f4b14463cedc9"
  },
  {
    "url": "assets/js/77.548211b0.js",
    "revision": "51d63299a548954738b403dd4605e8db"
  },
  {
    "url": "assets/js/78.bc80ff5e.js",
    "revision": "e1977b4dec4e3b71c4f3f9e4202fcfc3"
  },
  {
    "url": "assets/js/79.cbaa6667.js",
    "revision": "cc04a0600d543c147e73e9ef3b435687"
  },
  {
    "url": "assets/js/80.760fba6e.js",
    "revision": "247f563e1cac5beef8330f5a2a90fed2"
  },
  {
    "url": "assets/js/81.185e528b.js",
    "revision": "f7b98845654999652b22df6e5f13cf11"
  },
  {
    "url": "assets/js/82.cd004125.js",
    "revision": "d572a29c9c51940d3cf9e98d1bc23cb8"
  },
  {
    "url": "assets/js/83.977f0cfa.js",
    "revision": "120a107c9f49c97e59cbdda8eb9c4517"
  },
  {
    "url": "assets/js/84.72f821ad.js",
    "revision": "f34ccff5133124d60191e5f87a5a84f1"
  },
  {
    "url": "assets/js/85.c7ab30d6.js",
    "revision": "9f59f81fc2f4d8179ec6a05d84bfebf9"
  },
  {
    "url": "assets/js/86.6b0ed105.js",
    "revision": "8e4d788454b277eb66f457d53ecbb2ea"
  },
  {
    "url": "assets/js/87.cdd76310.js",
    "revision": "ef7d48435300fe8b40997a18e9c0c6b9"
  },
  {
    "url": "assets/js/88.613c826e.js",
    "revision": "266a32ad861d7fc6e4d403e905eee010"
  },
  {
    "url": "assets/js/89.e11ec26e.js",
    "revision": "2a8acf92d686f8b834aff62065599025"
  },
  {
    "url": "assets/js/90.291f56ec.js",
    "revision": "94dbe328eaf9b1155d60bdd49e6d47a4"
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
    "url": "assets/js/93.3f29bcc9.js",
    "revision": "ffba9df1112b9233f747a6ac431d5b8d"
  },
  {
    "url": "assets/js/94.fe8c5f7a.js",
    "revision": "94f52d6c5d7f56aad9045f1822a1d5e6"
  },
  {
    "url": "assets/js/95.94cadf0c.js",
    "revision": "be9301f327b9aa83ef44ec201279ffc2"
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
    "url": "assets/js/app.9f663a4a.js",
    "revision": "ebfd4624a6bcc43ff13d15710a2e4129"
  },
  {
    "url": "assets/js/vendors~flowchart.ec2b4b60.js",
    "revision": "1345b72bb80f6d0c171d01b382cb35a5"
  },
  {
    "url": "authors/index.html",
    "revision": "cd2de2bb3883cc53980159f1d2dd85f2"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "c7c5dfe349e7cd08e610eddab4e5a09b"
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
    "revision": "a3c62481019cc3f39805b8c7f90ec47f"
  },
  {
    "url": "categories/frontend.html",
    "revision": "fdeb84ea16c0f046ce46ba0bdcee6def"
  },
  {
    "url": "categories/index.html",
    "revision": "e7e33ce04c8278a88a0afe1ba7fb3c0c"
  },
  {
    "url": "comments/index.html",
    "revision": "c73ce0f867bc7fd4ae80f4631682b7e2"
  },
  {
    "url": "contact/index.html",
    "revision": "96b143b6a4574139e719726783636f2f"
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
    "revision": "95e6f482f4ef670d8a5d463b714390c7"
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
    "revision": "3b949cb17fa63e5c9c0a916e3ef6b93f"
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
    "revision": "900d2117d54cb0076195afcc041c1dc3"
  },
  {
    "url": "posts/index.html",
    "revision": "38a9f1441ce37a646396edbea72da68e"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "e4ba2aba73a4c7ac00613129133117dd"
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
    "revision": "64e8b8981a0a445cbce959a58833676d"
  },
  {
    "url": "watermark-logo.png",
    "revision": "4240e98a8008dee7317a4a5020f6437a"
  },
  {
    "url": "zh/about/index.html",
    "revision": "6672746f3bde7019826b2cf9c8314d6e"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "5aa2dcd386b25f3ff6ac9763c50d0447"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "246ce49de9b88a4ddbbcd8ecab01e039"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "edb987a992a6a9afe0d6b01782fdf72d"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "8814bdc505b3a737debf818ce14e9fa5"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "0179af6d57335e036d436bf28c686d5c"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "3f0e59ef449a037fe4fe7b20a6a6145d"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "7a4326b64dfe027c43242285e256b8bc"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "d5243b63f9de727472443d2b9d9ebd2e"
  },
  {
    "url": "zh/index.html",
    "revision": "07e8d2485cf9d2297e373db7f199ce7a"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-shang-.html",
    "revision": "f4120f14459cdbb5a16583d19aba916d"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-xia-.html",
    "revision": "5a1b0c8d452da89f27a29a8c9c6c543f"
  },
  {
    "url": "zh/posts/127-ge-chang-yong-dejs-dai-ma-pian-duan-mei-duan-dai-ma-hua30-miao-jiu-neng-kan-dong-zhong-.html",
    "revision": "500d8a5c9c2cdfedb5272bf6738960c1"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "6dd0badd3ba27db56e9eeee4af7e874d"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "0020bd851bfd57e7221b5364ff0afd8b"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "8ab3cef3a4582cf1df865e26f4b8444d"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "26a57f1a4c1c4879f2c919beb3a973bd"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "46e410001787a100e784eca849775154"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "6d463305857f068e1fbf3a5ddd255976"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "796de40293686023741872021154f8d5"
  },
  {
    "url": "zh/posts/finally-have-a-nest.html",
    "revision": "94bcdd7eeeb87364c1b566ceea6d3640"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "ffb90a832fed5061ce25f1f28cf9b232"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "ac9c47f3fd9605d68036fc7ca3850be3"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "9f9b556cd54b5e9196ed05eab9cc4fb3"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "291641dd2b624bfd796c42f8727e0248"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "3352895d638d2e0be3f7d02f8d480880"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "333a6f1d57e096d3fa673f04e41a8486"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "d7679254ff58046b8a77ffb4a4e33b3c"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "1bdf12c0a409174aa488b79d21008893"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "ea4327389ad10cbf8fbcd560e5b9a0fc"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "0170f135d0e4c64df16029affe19382e"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "9ee21a17ab230eedee90924b81d944f9"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "65576827e3b6a32dcc663bc750b83790"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "676d9d22351d4ed33a373dba8228f290"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "23f80a9fd3fb60ecfb8d6b320570a6eb"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "1e42746ea05d20f6ccbfb16f7be336a7"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "2940aeb9dbcd57887f1d136f733c6f3c"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "44b22a4d942d42148d02231184871e95"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "bfe3e76f58ef0ff38b402d93b5eeef53"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "60bd4881ed8d6047abe516d078e41c76"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "da18fe9436f64d071583e21ed5fce5c2"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "6291c1b4b2285f61ecba94d86c3a7a5d"
  },
  {
    "url": "zh/posts/tong-guohtml-shu-xing-ke-gai-shan-yong-hu-de-shuang-chong-shen-fen-yan-zheng-ti-yan.html",
    "revision": "0870079dea268a244cd77a6820524e5e"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "617b836ae8ce3ca0ecfeae35989b4c34"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "59ace8f37ef07b81d02cecbd0179c1a6"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "5e01374eff6d64e25c75ff7e4616fd4b"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "9eed1eff4a5d8802e1954da7a3bc9512"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "4b1e0cad1781f943155a1ca3c27104c6"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "21ac6930adc382ffdae747576bff9b33"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "296c1c68d303a07481fc36ed6cf9b130"
  },
  {
    "url": "zh/posts/yu-shan-dao.html",
    "revision": "bcc1f9669f0d28878c177663ad89ebfc"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "70ae52fa8d9b28423e9b9ba3d9f4c101"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "1113c547423973d9b1091a8bbfd586a2"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "083f7845fcbbfaa46fa2575b7a6cf2fe"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "7ec2a0eb0aedd1f07199bcdf386b224f"
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
