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
    "revision": "f5a8ce91a41214de12a6f1cefcbf32b8"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "118d1d3965e3344948a67fbbfb0b0cb5"
  },
  {
    "url": "assets/css/0.styles.b1bdabc8.css",
    "revision": "551ffb4d27ca9f3e9ebc1260a5e066c6"
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
    "url": "assets/js/1.35798176.js",
    "revision": "110fc61c22747f06af5e73280d9b9e6d"
  },
  {
    "url": "assets/js/11.eee1fe0e.js",
    "revision": "b08483dfd4197932b6d1ba7fa44d4ca5"
  },
  {
    "url": "assets/js/12.2eb092a6.js",
    "revision": "397003d56fbaa2a3f14d6b5550d8b01b"
  },
  {
    "url": "assets/js/13.4e84f1f0.js",
    "revision": "fdd965420e96cc6fdb15d71531665ab0"
  },
  {
    "url": "assets/js/14.1c7be7f5.js",
    "revision": "f75a62864f13a5da6e7d32b3a2273d10"
  },
  {
    "url": "assets/js/15.7803348f.js",
    "revision": "a902fa6a42b9a7b134dade3adac9e178"
  },
  {
    "url": "assets/js/16.55c9aaa6.js",
    "revision": "4ef627439b3251bfe7ac634bd809287b"
  },
  {
    "url": "assets/js/17.92b0f279.js",
    "revision": "a24feb7ecc4526443f5142c96eb485ae"
  },
  {
    "url": "assets/js/18.c50c6843.js",
    "revision": "871071828c65aa91630f526e5b4e58c4"
  },
  {
    "url": "assets/js/19.3996e2bb.js",
    "revision": "2ab1daa5d1585b4ef5ecdd592c728bd3"
  },
  {
    "url": "assets/js/2.d9691f81.js",
    "revision": "6b3f007f783000f28062d95d9cc929cf"
  },
  {
    "url": "assets/js/20.79d369cd.js",
    "revision": "d058458bde27ae12a2a374eb0ad1c13f"
  },
  {
    "url": "assets/js/21.f825acf5.js",
    "revision": "1e25786038fdc750bd8b229de6ef7156"
  },
  {
    "url": "assets/js/22.2f4cdc37.js",
    "revision": "b1198219dee0013046c147f48cf325c1"
  },
  {
    "url": "assets/js/23.d62d391f.js",
    "revision": "935a3cb7269d9529082e5e237a36a5e4"
  },
  {
    "url": "assets/js/24.07b0d058.js",
    "revision": "7132c3b606638e24a85b57587a5f2597"
  },
  {
    "url": "assets/js/25.d0431ac3.js",
    "revision": "a06484f4061fa3b141e67504c19c59e8"
  },
  {
    "url": "assets/js/26.91feb214.js",
    "revision": "b0f9b660488183e1417ebb5e893c47e7"
  },
  {
    "url": "assets/js/27.f7590f54.js",
    "revision": "a0e52a6f3b1cafb9482138269d3d0a44"
  },
  {
    "url": "assets/js/28.553758a6.js",
    "revision": "6345419702d340cf0e727713e51e410d"
  },
  {
    "url": "assets/js/29.0834301c.js",
    "revision": "a247629997055c99e92977e03e6cf40e"
  },
  {
    "url": "assets/js/3.0a28d219.js",
    "revision": "1dcd03e18127c8e2b8627d97531ed641"
  },
  {
    "url": "assets/js/30.dc9fff15.js",
    "revision": "acee90c127e263fddc4551939b361816"
  },
  {
    "url": "assets/js/31.e49d3fed.js",
    "revision": "d1555cea1777584e08c85578bda2590b"
  },
  {
    "url": "assets/js/32.e2d4e090.js",
    "revision": "1b65cadd77e7658cc67440a97a52d4f5"
  },
  {
    "url": "assets/js/33.cfb93339.js",
    "revision": "946efd3b740e94d058855ab1b1cac97d"
  },
  {
    "url": "assets/js/34.cf4d8cfb.js",
    "revision": "b5321da63ce7b9e0ca41aa52803ea4dc"
  },
  {
    "url": "assets/js/35.7c720096.js",
    "revision": "b4ca3e5d1691ec7eb6061848271c86b9"
  },
  {
    "url": "assets/js/36.13fbc3ed.js",
    "revision": "9fe0fe08931e458a26e6ad099942644d"
  },
  {
    "url": "assets/js/37.e04d21ba.js",
    "revision": "e60998bfde78cdcf60faac6e6b4ce124"
  },
  {
    "url": "assets/js/38.fec1677d.js",
    "revision": "e51d235ddb3e6e4318d23aaf58d66dbd"
  },
  {
    "url": "assets/js/39.803435ad.js",
    "revision": "257e71c5cca27f9ae711fbbbe9aa8e6a"
  },
  {
    "url": "assets/js/4.257a7894.js",
    "revision": "efb47b1bca468243d6833d96a2aad8c5"
  },
  {
    "url": "assets/js/40.4567a5f3.js",
    "revision": "ac8f57140ee8c40a8f2683d7a1e4808a"
  },
  {
    "url": "assets/js/41.5c728c9d.js",
    "revision": "59a2426011bfe8f7fd5a7c60f41814b8"
  },
  {
    "url": "assets/js/42.9c56c800.js",
    "revision": "38b2cbbe988c9edd170ca84aef1c2006"
  },
  {
    "url": "assets/js/43.676abfe6.js",
    "revision": "266d1e071acbc5235e14b4c61ac8a1c6"
  },
  {
    "url": "assets/js/44.ea8545ad.js",
    "revision": "442a1d08faf23bb9658fc078e689aa3c"
  },
  {
    "url": "assets/js/45.29af040c.js",
    "revision": "2dc0f327e9f44a597e67d0809fecc668"
  },
  {
    "url": "assets/js/46.7e3cd429.js",
    "revision": "227cb5ef3f37b99b4ac505a1290d4ef4"
  },
  {
    "url": "assets/js/47.6190f908.js",
    "revision": "bd6cd7150f5e5612383cb54f3677064a"
  },
  {
    "url": "assets/js/48.a09b6685.js",
    "revision": "0b5ec87af305f3043f0a7edc5fda7a51"
  },
  {
    "url": "assets/js/49.b265b07a.js",
    "revision": "83489521d7f5c56b69915114002b01ef"
  },
  {
    "url": "assets/js/5.c8a8d801.js",
    "revision": "a855f71d231ac0026272b03dc46f7cc2"
  },
  {
    "url": "assets/js/50.7d0ea405.js",
    "revision": "220c9096ad5d949ea8f025fe0abbb162"
  },
  {
    "url": "assets/js/51.b4b405ff.js",
    "revision": "7b34a661bdb771381e55e1ff5695f0ea"
  },
  {
    "url": "assets/js/52.9270d916.js",
    "revision": "6ca6f8439beca6d6eada3c3abe01f4d0"
  },
  {
    "url": "assets/js/53.2ff264db.js",
    "revision": "46bb3dc22b56f5471685122dc10909e6"
  },
  {
    "url": "assets/js/54.d16124be.js",
    "revision": "82935d8e331d293c6873014ed145628c"
  },
  {
    "url": "assets/js/55.4d57d71f.js",
    "revision": "c34a1406b86f3f8e4ff722cac0ae714d"
  },
  {
    "url": "assets/js/56.6bcc52da.js",
    "revision": "932773d990e28da7757b60119435ad62"
  },
  {
    "url": "assets/js/57.9eac68fb.js",
    "revision": "91989eef1086015a6ca455fdfd554c41"
  },
  {
    "url": "assets/js/58.1e2f730d.js",
    "revision": "ffa6186707b5323ca3f4557c45e0054f"
  },
  {
    "url": "assets/js/59.16c6c560.js",
    "revision": "6126f11d42e72c9fa221f883ebfe898a"
  },
  {
    "url": "assets/js/6.cfe3b70b.js",
    "revision": "a6197c0ec90a8c4579bed0cd7146bf7c"
  },
  {
    "url": "assets/js/60.6db5b55f.js",
    "revision": "9665f229cf16bc39832426cd0ac5d72e"
  },
  {
    "url": "assets/js/61.8dc32d96.js",
    "revision": "d7cff8383aad4b97525beddf40bafc92"
  },
  {
    "url": "assets/js/62.376de57f.js",
    "revision": "fa918ddc94dd5d54e914990cf38da363"
  },
  {
    "url": "assets/js/63.86531188.js",
    "revision": "2d0fe6b492a9a068d9de5de6dc63d7f0"
  },
  {
    "url": "assets/js/64.0d678644.js",
    "revision": "443b35d7d635021385b9323703f4a3de"
  },
  {
    "url": "assets/js/65.a9a83b14.js",
    "revision": "7225a91ce04854e7147ab706b9716e0b"
  },
  {
    "url": "assets/js/66.0109a5e4.js",
    "revision": "875f38e1defeabaecf95d8bb9305a964"
  },
  {
    "url": "assets/js/67.f24e0a56.js",
    "revision": "df04d64f53af039f13e97d4a3145646f"
  },
  {
    "url": "assets/js/68.2b53b24e.js",
    "revision": "fca65245ebe2d98a5580f8981acbd009"
  },
  {
    "url": "assets/js/69.9c89d61d.js",
    "revision": "09ca564166c7093aa9f1bf02ce59f15c"
  },
  {
    "url": "assets/js/7.d6491bc5.js",
    "revision": "92d7bac1ace8cb177825d443536bd5e9"
  },
  {
    "url": "assets/js/70.0d8e118e.js",
    "revision": "adf8ea5c267aae13e09be05e68cd2aab"
  },
  {
    "url": "assets/js/71.31e36c94.js",
    "revision": "5da0519ebb1fc08655ab94da7b14ca7d"
  },
  {
    "url": "assets/js/72.4df86c17.js",
    "revision": "45bd834ca32d9815519a58a4e58f9bb3"
  },
  {
    "url": "assets/js/73.faac9eb5.js",
    "revision": "c7919a2a46f8cdf161b347fcac7d819e"
  },
  {
    "url": "assets/js/74.90172a40.js",
    "revision": "7feff75adea50ee16340f62784721097"
  },
  {
    "url": "assets/js/75.e6399289.js",
    "revision": "a8d2d04343e318a4b86addf15f60e76e"
  },
  {
    "url": "assets/js/76.baa161bc.js",
    "revision": "ae8ba43b6cc9014c33112884cdc0819b"
  },
  {
    "url": "assets/js/77.da6df1f1.js",
    "revision": "cf1a509fe196784772bc436a6b07fb36"
  },
  {
    "url": "assets/js/78.afff8519.js",
    "revision": "d781d478583a231c0cd60fcebb81366c"
  },
  {
    "url": "assets/js/79.ce34ded1.js",
    "revision": "825513a1ddd70a6f1eb0c362fa5c2746"
  },
  {
    "url": "assets/js/8.4c27a84c.js",
    "revision": "99ec15d1d5123fdff6d26d6462243be4"
  },
  {
    "url": "assets/js/80.e7200af2.js",
    "revision": "91d12b2dee71f5e802cddccb12d47805"
  },
  {
    "url": "assets/js/81.cd02130b.js",
    "revision": "005e63f6470de700bfc77a7c95cc94e7"
  },
  {
    "url": "assets/js/82.dcbb7946.js",
    "revision": "30149f17d8d6e0393ddb7d3c76b5d2db"
  },
  {
    "url": "assets/js/83.6e356ec5.js",
    "revision": "18b24002d1ab1da35e2b7a94192d5a73"
  },
  {
    "url": "assets/js/84.470d7b8f.js",
    "revision": "9600c1aa498522ac64bfb2ccd76e59fe"
  },
  {
    "url": "assets/js/85.6461bf74.js",
    "revision": "06687be9aa1470bc318b23df4b16c237"
  },
  {
    "url": "assets/js/86.d52ca160.js",
    "revision": "84973eae83bd3eee904a92eaab318eff"
  },
  {
    "url": "assets/js/87.571fb715.js",
    "revision": "8db438aecab5721c0bfd544f2bd821f6"
  },
  {
    "url": "assets/js/88.553c13e4.js",
    "revision": "cd1c971ea753103edbb9a9e5f9691628"
  },
  {
    "url": "assets/js/89.28a81250.js",
    "revision": "06848cdaac865312c2a54a4e8fe6df87"
  },
  {
    "url": "assets/js/90.6391d660.js",
    "revision": "3534304e0d8bd889feb0b61923ae8502"
  },
  {
    "url": "assets/js/91.86411a4e.js",
    "revision": "37243fcb4c17303fa5b2b5207fe8c8d9"
  },
  {
    "url": "assets/js/92.63c4960d.js",
    "revision": "c25e4f529d9704873ca350ea2a699022"
  },
  {
    "url": "assets/js/93.06e61d9a.js",
    "revision": "4558acb7fbd3e8f85955f672b1184128"
  },
  {
    "url": "assets/js/94.2610b8eb.js",
    "revision": "3c2de0e7353a771bb80fc2d72800b52e"
  },
  {
    "url": "assets/js/95.60a84312.js",
    "revision": "19c6faad56c4e58f1741ebaa4dface5b"
  },
  {
    "url": "assets/js/app.7ea7ff67.js",
    "revision": "0f7b22b737fa33ab240a0c9cfec3f635"
  },
  {
    "url": "assets/js/vendors~flowchart.148aed4f.js",
    "revision": "efdacaa19dcf9f4fa7381dbe01614aec"
  },
  {
    "url": "authors/index.html",
    "revision": "641b507d1f7c80937358756916ca193c"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "d2a96a39b3fda454b1e024ccabb43114"
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
    "revision": "38b607c350c5686c3fcd58dd16da95ec"
  },
  {
    "url": "categories/frontend.html",
    "revision": "aa68f663fad941d2b4993b736559f5e6"
  },
  {
    "url": "categories/index.html",
    "revision": "d8278cea9e5a6c0d7d28630d8ebfd97b"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "6eaeb656ab2f9def19afeb9bc970903d"
  },
  {
    "url": "contact/index.html",
    "revision": "38317b6e6e250fbb2ed6ad33a5081e5b"
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
    "revision": "36336919d05bebbf550a7b2adf22079d"
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
    "revision": "fff1d6398bd916b30608c397a9ecf217"
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
    "revision": "118be01208f8be692a896d18732c4c63"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "cc3e7d43d151f1896defbf6c42ae6319"
  },
  {
    "url": "travel/index.html",
    "revision": "629100c5e96b4b749cba20b047add7e3"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "be7f1e6799f83d669a232d4d2ab6eb56"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "b26d04e08a0a72094ae5637aac82bfd2"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "c20003fae34951461318c0a82ac3a21d"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "7486fc7389eeb7d8d045d6bfc0ae47fe"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "cff4988cf2c43981253d367ba8eac488"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "f33971a91b056ac6242a4283035cd0d0"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "6f66e72c3688b384e8c918a054fafeac"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "1aaf072f8c40b0de4d1066514b48b6ae"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "b85d082fb739bd0cd95b95ad839bc27a"
  },
  {
    "url": "zh/index.html",
    "revision": "1a4347f15de2cbe050750d7496684b45"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "ebde63902db4e627748b273ffa84a65d"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "9bd09158954d38d11b5db8ff69ac4619"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "da0bebe229ad3251202f59beb884a2d5"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "64e35a64b454c715feaa15f0bd8c09ac"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "3c6b57027ecbf532deaf57b75305be80"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "ee1f85b623511ff06a86ebcd206b4c34"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "6f0b69de1dab058da998964606cfde32"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "6590d73abfc96ca2df8af18015be7965"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "7548d866e737127cbd8d5bda0fe6124d"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "a4fec0a794b45e9972d96d70d12b047f"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "6555ee5421b75933d0d666ac13f32b1d"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "fa5895e623bcfb7fcaa9eabda51ff8d7"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "9669a7906b2c68eb6c83ab66a2c3f5be"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "153a1981e692fd00727fe8717a884335"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "56a9ed181c2304cbb300a2325cff4047"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "d208e23b6a63623eba9a0071cf8cdcc5"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "6b8483b7fb72c5887d7b035c293c4a98"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "80efbe98066cbc3c168fb8afcd1a4711"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "391d44a7eecced4a8a4a7cef55b1af95"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "bb37be05c3bb1e9b5c341fe7df0b7b83"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "83a579f28244c816a901c5cde203d89b"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "194ab10195577eae8e945bb86e69b14f"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "9fdc2974e075ab7a84bda47761004d35"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "e77a027b72cba448e894fa7a35277333"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "6d9372384fc4dad1f9945ec3dcfd5735"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "26475a3255d800442fc0b94d79c94ff0"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "17c41995a2e72610492d8d06191aa918"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "0cb5d64e7df080dc4f19dc57ceac078f"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "df73b23230f9800b33977f0764d17e87"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "e8b08cf0302dd05c4d91420d8727566c"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "79e0744d455bece622d580d7f67f8155"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "cd9c2e23e3e878cc034346c3d0e0945f"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "6eb973700f209d0add211e6f08f55bc5"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "0d95fe70cac6e7479052bda68bc9a477"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "e8ee11bcad0ce2f723218fa1654b859f"
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
