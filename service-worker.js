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
    "revision": "fe5678e135e88c74638ff54eae084c5a"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "b40c1ffc4521eff3fa45f6a1fa4e85c9"
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
    "url": "assets/js/37.9e30c69e.js",
    "revision": "02c76d3dba8fbd4135f4232d6ac02647"
  },
  {
    "url": "assets/js/38.c0be37f4.js",
    "revision": "95cf217690e66177fa06e5d02ff8ac73"
  },
  {
    "url": "assets/js/39.d1729e72.js",
    "revision": "d7cca6ebf2ec7e6d6499c6e5a5af7191"
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
    "url": "assets/js/50.3b4c6baf.js",
    "revision": "de0d5f1b1d26632b23f6da88600c34e7"
  },
  {
    "url": "assets/js/51.80dbf9cf.js",
    "revision": "1166068a56a9613bc2f28e1f30c63e87"
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
    "url": "assets/js/61.ac9eeb66.js",
    "revision": "80979a62e6d65b2454ca3e6784d73339"
  },
  {
    "url": "assets/js/62.b6538f9f.js",
    "revision": "6ce758297b69dc38001e688252977794"
  },
  {
    "url": "assets/js/63.00e3a5fb.js",
    "revision": "aceb52ac6ad20ea9b0e5061e76bb3f06"
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
    "url": "assets/js/68.285f62cd.js",
    "revision": "0aa27e208d8296d53f30ce268b6c6d26"
  },
  {
    "url": "assets/js/69.533f6482.js",
    "revision": "821efbd567634bc552f915cfc92eb8c4"
  },
  {
    "url": "assets/js/7.d6491bc5.js",
    "revision": "92d7bac1ace8cb177825d443536bd5e9"
  },
  {
    "url": "assets/js/70.cd8da073.js",
    "revision": "5cb80c3a3a93c656522441f3d604c4f5"
  },
  {
    "url": "assets/js/71.b6460683.js",
    "revision": "5da3b5e4a3fecf68b52d0e6a50f47b0c"
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
    "url": "assets/js/app.3f75a150.js",
    "revision": "e86f796f7b1beaa9852c67167d24e763"
  },
  {
    "url": "assets/js/vendors~flowchart.148aed4f.js",
    "revision": "efdacaa19dcf9f4fa7381dbe01614aec"
  },
  {
    "url": "authors/index.html",
    "revision": "c2812a2760cafc85abf7c827daa69f64"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "3c0567104007e110cd786c920162d583"
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
    "revision": "833fd198ff4f2451a39171b4da10fbf6"
  },
  {
    "url": "categories/frontend.html",
    "revision": "e3ccb0f931cca4fe1936b78378ce200d"
  },
  {
    "url": "categories/index.html",
    "revision": "1d3a85000c023cbcabd8d987268c8ddf"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "ebbb1339d7bdb086de1182d0f8d36529"
  },
  {
    "url": "contact/index.html",
    "revision": "d67cde0a53836b3b69b7550bbe837e95"
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
    "revision": "c61bf8e8019b0d634923a418d132b6af"
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
    "revision": "a9f04b9eddf620ad7ecdc326ae2a29ca"
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
    "revision": "4d236d51b1ee9fd38b1ff38aa93dfd58"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "4736babd4f7ff35bf63281e88fac5250"
  },
  {
    "url": "travel/index.html",
    "revision": "829094923685c06fedc849564d2138ef"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "c4e3062e4694a493cf2b8a3da50db77c"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "d8bf5251f6a210e9ed5e80283261ec77"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "d44ee2a4e33c80723f1578b1528a11af"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "123066b37a35f5cfb519ba0b04ceb6b7"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "96129dc5f5608f147104642c5bd6664f"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "b9e5dec86e3ec14eab543f76c73771e0"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "4d07042d44ceb2876f4d09f1946612f5"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "378f947573d9f845b4f9ee239d3d6037"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "770d4df6d455e222b6b6bfe36e3b26d4"
  },
  {
    "url": "zh/index.html",
    "revision": "53b42e3ce6d2bbb1a9fa15d4755f0fe8"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "0055b21385c2b6bf0ced770a59a8fdcc"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "208181f5819a86631f6fa23e6fe81859"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "a22154a7b76a8e69e9e0038a247f00c8"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "de0fc93e8c32911ef6e09c98b047c8ed"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "257ce8235b99b40cdb48eb1775fd736b"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "c1f29463bcbe80cc5cb941c7719372ad"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "5bb634156a7124094653114a8098b0aa"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "37208bc430220b6086e4ecef1f508022"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "ffe517a05efff12c4c24a7eb64a5f8b9"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "07cfd958aa051f361170120253ce2aad"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "d5aef3afc5139a69d4dd17ff1ee5e1fc"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "d13752e57a80f70ee608a1d7b1129a75"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "69efb82236e29dbacad6fb93194893d5"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "c07ddaefad176eca008cac6360e95d02"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "89adb16ad2eb70c1c5550b9831dbd352"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "680f258d72a6ae6d669de091341acc8b"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "d26fe4a8df4949410739ed7a5780f035"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "d7c446290f2fa9e53e382dc696766401"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "c7535a30bdbfd919e47b8147666e841c"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "91785ad93cd1a6a493c8dd3beb579528"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "bbd44750de8ed0e4bca1dd0bb5a8a6b6"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "36ec793a122ce667466938a34ca69349"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "cfa1fabcdfcc16675e37734cd3660cd3"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "44778a96ba21ca71c065115033f24eaf"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "460a9798afc6661dbfe577e66c29cec5"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "b9a0a3b99aee6265027ef41e7cf70107"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "fcbef443b20f8463f21dbf00d422db4d"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "806321a04fd3320834fcff6a15ec3c6d"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "9b0a122725acc07276544087f63a92b1"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "bbb1454d534a78da9fec7b177fbc678e"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "564e714e18a34afb449bdd5e125c8477"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "f65f5e9aae1d8c113cda133968ad7e34"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "93e786e2d8efdcc9a1037533f4f37d2d"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "560226ae6a9903d62acc354fcdf0beb6"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "34be0f56f4ec4c10fac316f2ac162de6"
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
