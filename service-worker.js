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
    "revision": "13df29d702b840f0b0198e5423451267"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "d6a63c4a6412bd0e81c285fba878a511"
  },
  {
    "url": "assets/css/0.styles.f9d3da01.css",
    "revision": "1f88b78e2b6073ceb6140a176d654d88"
  },
  {
    "url": "assets/css/1.styles.a0797fd4.css",
    "revision": "0a4840576ce533b9d0e8c082db1d9318"
  },
  {
    "url": "assets/css/10.styles.d5875b97.css",
    "revision": "5e2451763ae8b62b5f8f95baea6792a7"
  },
  {
    "url": "assets/css/11.styles.db66b2a9.css",
    "revision": "6bd69883ed7895c6c33c7fcccccaa88e"
  },
  {
    "url": "assets/css/12.styles.31e428d0.css",
    "revision": "e7fe57c281d81e8a696f5d720b1cd282"
  },
  {
    "url": "assets/css/13.styles.4cb8b5f5.css",
    "revision": "0b2ae54c704619583566dca98da1702a"
  },
  {
    "url": "assets/css/14.styles.6bcb3a5a.css",
    "revision": "e08cfead16fd0be21c7a9b7561329178"
  },
  {
    "url": "assets/css/15.styles.b6d4cc73.css",
    "revision": "6ae62e69a9beef6a8f1cb760d7d49048"
  },
  {
    "url": "assets/css/16.styles.92b41f98.css",
    "revision": "c6e5b912d7575ee2d2b379528b4d6e00"
  },
  {
    "url": "assets/css/17.styles.65f92815.css",
    "revision": "ee2570984dc2e39c3c25cb9fb0413359"
  },
  {
    "url": "assets/css/18.styles.1202b836.css",
    "revision": "49e661aaf914fb980b2340d6375df3ba"
  },
  {
    "url": "assets/css/19.styles.a27bc3df.css",
    "revision": "95d6166296fdc068a3595d724c30d1f0"
  },
  {
    "url": "assets/css/2.styles.8dd1fb37.css",
    "revision": "bdc8a080bae6f23e3a0647ae023a7b6e"
  },
  {
    "url": "assets/css/20.styles.b3e27a27.css",
    "revision": "e5993078e223b8b0317bf1e538260a5b"
  },
  {
    "url": "assets/css/21.styles.d252ae83.css",
    "revision": "d9dfd37f06d8f435dee028aabf1dbc48"
  },
  {
    "url": "assets/css/22.styles.ac1cc50b.css",
    "revision": "66966f5a94d28a9f757aafc718fb67d6"
  },
  {
    "url": "assets/css/23.styles.3ca9a906.css",
    "revision": "b856b4b3d5151f58db3290cfe137b8df"
  },
  {
    "url": "assets/css/24.styles.083af98b.css",
    "revision": "5584c5f211b1410ae55977fa382984c2"
  },
  {
    "url": "assets/css/28.styles.a059945f.css",
    "revision": "c223717726b04b4669d46bab42accfd2"
  },
  {
    "url": "assets/css/3.styles.ccc9f383.css",
    "revision": "9d0ab6d41a09d29d4de1250bd8291da3"
  },
  {
    "url": "assets/css/4.styles.d1645688.css",
    "revision": "86ff2d5a369ed571d670c840540ea286"
  },
  {
    "url": "assets/css/6.styles.f513c6a0.css",
    "revision": "c4bdcd40485672eca04486d47727b0d8"
  },
  {
    "url": "assets/css/7.styles.eec1b914.css",
    "revision": "388b56d3051f9e07ccfec53a7f866be0"
  },
  {
    "url": "assets/css/styles.8faf59c6.css",
    "revision": "a9175bb76edbaff43c31d4afef8043f3"
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
    "url": "assets/js/0.f9d3da01.js",
    "revision": "ffd1d8455d0e65af7c744e062761f9c9"
  },
  {
    "url": "assets/js/1.a0797fd4.js",
    "revision": "c4bfd6192414140b2fc9e77699941a72"
  },
  {
    "url": "assets/js/10.d5875b97.js",
    "revision": "ae15273af49fa8548416d2fa43845f5f"
  },
  {
    "url": "assets/js/11.db66b2a9.js",
    "revision": "6ba7375ea37e3cbe1ef0d5f3ed47f733"
  },
  {
    "url": "assets/js/12.31e428d0.js",
    "revision": "67b8239ac95be352b2bd9d743c32eb11"
  },
  {
    "url": "assets/js/13.4cb8b5f5.js",
    "revision": "16bea00d13ab9c82e7099620b07c4961"
  },
  {
    "url": "assets/js/14.6bcb3a5a.js",
    "revision": "e896c02b04c10d3cb76d2c6867e28a54"
  },
  {
    "url": "assets/js/15.b6d4cc73.js",
    "revision": "55cdaaabb0ec067a2b8e07a21373d795"
  },
  {
    "url": "assets/js/16.92b41f98.js",
    "revision": "379c9cbb75fc06c647180323a10b4c03"
  },
  {
    "url": "assets/js/17.65f92815.js",
    "revision": "afc2de09695f69c02ea478d0b71ec389"
  },
  {
    "url": "assets/js/18.1202b836.js",
    "revision": "df55e4272911d780aee7fe36360aefd3"
  },
  {
    "url": "assets/js/19.a27bc3df.js",
    "revision": "fcae39aeec5bc13493f2a23ab9ebac47"
  },
  {
    "url": "assets/js/2.8dd1fb37.js",
    "revision": "658e7f615a83dcf3fe449b26cf6f275f"
  },
  {
    "url": "assets/js/20.b3e27a27.js",
    "revision": "ae0dbe90f95495c7a3a7c764a4430ca4"
  },
  {
    "url": "assets/js/21.d252ae83.js",
    "revision": "9cd19a5cfe09521a1c79afd2f5b2ffe9"
  },
  {
    "url": "assets/js/22.ac1cc50b.js",
    "revision": "0dad9dfda66fd54e8e3b76a8f5a0e9d3"
  },
  {
    "url": "assets/js/23.3ca9a906.js",
    "revision": "d0e83ab48f54d1a0334bcdc09cd3b89e"
  },
  {
    "url": "assets/js/24.083af98b.js",
    "revision": "7f92d5e0455e7326e47d9bd593b3bbc1"
  },
  {
    "url": "assets/js/25.d384021b.js",
    "revision": "84cd7175f5cedbedf88bf78611d0e73f"
  },
  {
    "url": "assets/js/26.fd3e70af.js",
    "revision": "51ecadd1acc42d60eae40af813f3e1e6"
  },
  {
    "url": "assets/js/27.a15da13a.js",
    "revision": "47df6dd1fff3f92e5837cfd5005b3970"
  },
  {
    "url": "assets/js/28.a059945f.js",
    "revision": "4ddff232fa889ddb9e3871660ee92af8"
  },
  {
    "url": "assets/js/29.6e8315c6.js",
    "revision": "9639859492b631d5ca45e09f01685be0"
  },
  {
    "url": "assets/js/3.ccc9f383.js",
    "revision": "4fd862ca2508ae12bd078c3978b2df68"
  },
  {
    "url": "assets/js/30.f7cc4f51.js",
    "revision": "bcb964caf319fbdb240d02754abca6ec"
  },
  {
    "url": "assets/js/31.61614258.js",
    "revision": "448abf0f350b14068e5e599f604d5b1f"
  },
  {
    "url": "assets/js/32.ce3010cc.js",
    "revision": "2d8ff7bfd450005c89469dd9273ba064"
  },
  {
    "url": "assets/js/33.b25ccaca.js",
    "revision": "ea532acda9e8d73b85da814c2b9e5612"
  },
  {
    "url": "assets/js/34.0da5f067.js",
    "revision": "bca230490a721332707ecda6f996246e"
  },
  {
    "url": "assets/js/35.ccea0bc7.js",
    "revision": "93fb4f437266b1afedaae7184e6ebbba"
  },
  {
    "url": "assets/js/36.1a04bde7.js",
    "revision": "d3ae099bcd91a13dce3cde7ba1ac8cec"
  },
  {
    "url": "assets/js/37.3a785121.js",
    "revision": "164015ae959cb5dae3e87c89ca6abb87"
  },
  {
    "url": "assets/js/38.1f067f93.js",
    "revision": "0da5e35b2497dcd7ba6e7a7c369622f6"
  },
  {
    "url": "assets/js/39.5cc39038.js",
    "revision": "732724d69c95189b0e094b98a7dc52e0"
  },
  {
    "url": "assets/js/4.d1645688.js",
    "revision": "ee78889f76fcbc486895dbaa90f18946"
  },
  {
    "url": "assets/js/40.9498e11a.js",
    "revision": "c38823f05017c59a81c3fd41179c2464"
  },
  {
    "url": "assets/js/41.e926e8d3.js",
    "revision": "d6787f392324026dfe6d2424f320f3ce"
  },
  {
    "url": "assets/js/42.3360d5d6.js",
    "revision": "2eeb6ce0636953fe7f86812fc3a797fd"
  },
  {
    "url": "assets/js/43.869852e2.js",
    "revision": "d6b2157244c914a65b7879a1cac9a484"
  },
  {
    "url": "assets/js/44.c4cbdd72.js",
    "revision": "e3153caf5287b00672b522f84f517032"
  },
  {
    "url": "assets/js/45.8e03eaa4.js",
    "revision": "d80be86cda6f5ed0e6165027b862148c"
  },
  {
    "url": "assets/js/46.58342b91.js",
    "revision": "d41fe6233e4c16b58a2a240901b87c67"
  },
  {
    "url": "assets/js/47.e9e0f86a.js",
    "revision": "3c5cc33bb3bbdf4b5d82808c9dfcb5dd"
  },
  {
    "url": "assets/js/48.ef474139.js",
    "revision": "3f5822c7b8a15ae796416c3724eeb95e"
  },
  {
    "url": "assets/js/49.eb62aadc.js",
    "revision": "282149f35b7c88c9593b3afd751f85f4"
  },
  {
    "url": "assets/js/5.4dbd4f9c.js",
    "revision": "05921ccc6cce2b99ab4149b089bd1a02"
  },
  {
    "url": "assets/js/50.adc3f6a1.js",
    "revision": "c73def82c7b1e8345b8bb6639c0c22a5"
  },
  {
    "url": "assets/js/51.032629da.js",
    "revision": "c2eec5c0eb08e22ab4e301059e01856d"
  },
  {
    "url": "assets/js/52.b30f4c5b.js",
    "revision": "2002923c67621736aebd110099254e48"
  },
  {
    "url": "assets/js/53.7097f5dc.js",
    "revision": "18dd8640de9a97088fced40afbca1831"
  },
  {
    "url": "assets/js/54.cbed966d.js",
    "revision": "daa9dfc7c882371b67566d16e116fee3"
  },
  {
    "url": "assets/js/55.a8dd6b9a.js",
    "revision": "0dc07b7fd16fb6e2634b3435e8034436"
  },
  {
    "url": "assets/js/56.7ca48b52.js",
    "revision": "7cb7912abe3d7c5d78056069705a41a7"
  },
  {
    "url": "assets/js/57.12f93e2f.js",
    "revision": "8f1e9a8699a187acca04d8a151149251"
  },
  {
    "url": "assets/js/58.6055675a.js",
    "revision": "e4cebef602c1a1c79771d53a51d82438"
  },
  {
    "url": "assets/js/59.ddafef6e.js",
    "revision": "e60cfe899936cacf488ec12f17a94d71"
  },
  {
    "url": "assets/js/6.f513c6a0.js",
    "revision": "4fb28f4c99d98918ee69f09e29799209"
  },
  {
    "url": "assets/js/60.b72a2a36.js",
    "revision": "674521151dbc2b4d8dffcdc7f2cb135e"
  },
  {
    "url": "assets/js/61.c5dee28a.js",
    "revision": "374c9e0d4895bb41689670cb83416f9c"
  },
  {
    "url": "assets/js/62.51b96244.js",
    "revision": "6bade1bfe8c71aa051d3fc0fafdc206a"
  },
  {
    "url": "assets/js/63.1098ddf9.js",
    "revision": "665763fe6cdeafca695f0b02bf5d446f"
  },
  {
    "url": "assets/js/64.5efffa0c.js",
    "revision": "98845744ccaa1f75a015deb3a8356025"
  },
  {
    "url": "assets/js/65.3a59cd12.js",
    "revision": "157532aa2c0674477ef1984d484e66ef"
  },
  {
    "url": "assets/js/66.b1da3a7b.js",
    "revision": "18c7a7d506ff6182eae0082afccc92b9"
  },
  {
    "url": "assets/js/67.575a1c04.js",
    "revision": "c267bf9be4853c7edaaf5a83489a1167"
  },
  {
    "url": "assets/js/68.7273971e.js",
    "revision": "fd9c12a3ca2fd2cc757273afb77f8b79"
  },
  {
    "url": "assets/js/69.1f52dfc5.js",
    "revision": "bbed7a429e3fc89c549724694cd2e28b"
  },
  {
    "url": "assets/js/7.eec1b914.js",
    "revision": "57435fd5edcb269ad2d01981805b1fd9"
  },
  {
    "url": "assets/js/70.dbf84f23.js",
    "revision": "7fbc377c99a188b198609e6a0f17204d"
  },
  {
    "url": "assets/js/71.0e9ba423.js",
    "revision": "b1f2477aa370560f42f614581c835e5d"
  },
  {
    "url": "assets/js/72.afb9b7c0.js",
    "revision": "7bbad0b138ad013e7aff8b64b94f5524"
  },
  {
    "url": "assets/js/73.a48b0244.js",
    "revision": "83ad7e679e899df258377f0f112c9cfa"
  },
  {
    "url": "assets/js/74.83846ba9.js",
    "revision": "316960e453a059af0ffa009beb057f6c"
  },
  {
    "url": "assets/js/75.1180cd8e.js",
    "revision": "a4409fee7b5428a8a1d61ae6bf15e61d"
  },
  {
    "url": "assets/js/76.e6c2c444.js",
    "revision": "1377935aa2123c9a9c5acf0a21505bf9"
  },
  {
    "url": "assets/js/77.e6a8e47f.js",
    "revision": "90c59bc06a591fe502ff1fa39bb9d74b"
  },
  {
    "url": "assets/js/78.4a0be1eb.js",
    "revision": "23607936f5e07446fb26ee567e1b06d5"
  },
  {
    "url": "assets/js/79.5cc64182.js",
    "revision": "a881ea6cdbee7c3020a5842f83a9926b"
  },
  {
    "url": "assets/js/80.fa1a57c1.js",
    "revision": "9ccda7536db1ba849f68fa990f34b43f"
  },
  {
    "url": "assets/js/81.06a80a8c.js",
    "revision": "948ac3d4506bb9f2beab9f175ba751ac"
  },
  {
    "url": "assets/js/82.46b630ac.js",
    "revision": "9b7ad50611bd32ad8fc663099670f255"
  },
  {
    "url": "assets/js/83.b34b68ee.js",
    "revision": "4e237f36fe9baf99969268efc0703deb"
  },
  {
    "url": "assets/js/84.d3dcf171.js",
    "revision": "5da9cfc248de8fbeddf6531f7b941de0"
  },
  {
    "url": "assets/js/85.af755d57.js",
    "revision": "3d70ae6eeb9fabdad707fdb38bfca001"
  },
  {
    "url": "assets/js/86.caa63ff9.js",
    "revision": "ba51f9b5d49d143008c355093ed8e2c0"
  },
  {
    "url": "assets/js/87.fb9e0702.js",
    "revision": "a863ec870ac7a9af82fbe115fd61c36a"
  },
  {
    "url": "assets/js/88.5c8dfbb8.js",
    "revision": "f46399cfd7df0ab3cfcc3409465df512"
  },
  {
    "url": "assets/js/89.5e418160.js",
    "revision": "a9f2054e08a05a0d76035e5b1b3c9dda"
  },
  {
    "url": "assets/js/90.09ca8856.js",
    "revision": "caea0c11f764d15a213b1e7b041e726d"
  },
  {
    "url": "assets/js/91.81b6dedc.js",
    "revision": "2e4518a5c6145e40c67e3acdd8cb8fbe"
  },
  {
    "url": "assets/js/92.aaf869d0.js",
    "revision": "d76506e14b7e9fb1acceb9b14414cfd9"
  },
  {
    "url": "assets/js/93.81bb67f7.js",
    "revision": "483c53875952ea72a9bbc43aabc89514"
  },
  {
    "url": "assets/js/94.ecf14afa.js",
    "revision": "917bce27edd0296bf5890f0cd670b4b9"
  },
  {
    "url": "assets/js/95.f2dc3543.js",
    "revision": "ed06f22594e0d744e65f0180fb895fac"
  },
  {
    "url": "assets/js/96.918a1c3b.js",
    "revision": "c1b0ba852ec1eada14d76d8e9884cfcf"
  },
  {
    "url": "assets/js/97.b626eeab.js",
    "revision": "f9449f7bae94dbbb7c720c59dd4ec7c6"
  },
  {
    "url": "assets/js/98.37300a40.js",
    "revision": "8883abef54d4f240feb9548b13d20673"
  },
  {
    "url": "assets/js/app.8faf59c6.js",
    "revision": "95a229a8ddcca23bd57344637cf9be79"
  },
  {
    "url": "assets/js/vendors~flowchart.3b8239cb.js",
    "revision": "53dce59b863f7f68c85bb35b08eda270"
  },
  {
    "url": "authors/index.html",
    "revision": "2d795aabb8b7685d1bc4f8fac8555bd3"
  },
  {
    "url": "authors/nuochong.html",
    "revision": "937bb1da9aa56f339c474e1197ca611a"
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
    "revision": "f79f9bcd938cd38fb209f1e3c4db3fa2"
  },
  {
    "url": "categories/frontend.html",
    "revision": "0b3f05de978077eaa30183af0b67e454"
  },
  {
    "url": "categories/index.html",
    "revision": "cfd52455ec26d08780129a017878fda3"
  },
  {
    "url": "code/test.js",
    "revision": "fd6f28d74414e49eaf52366abb4b4ed5"
  },
  {
    "url": "comments/index.html",
    "revision": "04f79cf918af965ac480c86c4c180fa3"
  },
  {
    "url": "contact/index.html",
    "revision": "e299a09779be4c9f0a6c582185688531"
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
    "revision": "868ca5014c686f2f5cb2861256054319"
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
    "revision": "d4b6ac468387b4bd899a6425a3f82766"
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
    "revision": "21ecc14fcbb38c9f18ae12f19342d795"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "b88ad7a8a5a3555e15584e18fe19c886"
  },
  {
    "url": "travel/index.html",
    "revision": "07e984f32304624b1e3167054c9879a6"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  },
  {
    "url": "zh/about/index.html",
    "revision": "6931a48a618210867e8cae59b9a2d983"
  },
  {
    "url": "zh/authors/index.html",
    "revision": "011a224dd014a1fe2097be19aa565805"
  },
  {
    "url": "zh/authors/nuochong.html",
    "revision": "5048ee87751b06ed16861329a621a6cf"
  },
  {
    "url": "zh/categories/backend.html",
    "revision": "b1eedfb57e0511271f41cc3de309a1f7"
  },
  {
    "url": "zh/categories/frontend.html",
    "revision": "796f55054897a21d3268f55c3ac81478"
  },
  {
    "url": "zh/categories/index.html",
    "revision": "bdef5020c1bb06acd166ff19df18fe7a"
  },
  {
    "url": "zh/comments/index.html",
    "revision": "65a6d741c6071b4be59cdd4919f824cd"
  },
  {
    "url": "zh/contact/index.html",
    "revision": "933a3fc92a828969ba4b2f16f918c611"
  },
  {
    "url": "zh/gallery/index.html",
    "revision": "dbc7d83b8625057e16e4131c5d84136c"
  },
  {
    "url": "zh/index.html",
    "revision": "7d82d1e96775144baa715ece975b2635"
  },
  {
    "url": "zh/posts/2019-nian-shi-fou-ke-yi-pao-qicss-yu-chu-li-qi-.html",
    "revision": "dee2e2ad286c860d04340dceb598e0b3"
  },
  {
    "url": "zh/posts/array-yuan-xing-fang-fa-yuan-ma-shi-xian-da-jie-mi.html",
    "revision": "68e8f72723efac42ad1c359b5dd9630c"
  },
  {
    "url": "zh/posts/che-di-chi-toujavascript-de-zhi-xing-ji-zhi.html",
    "revision": "523a24f00fd4904721542cffbf723e44"
  },
  {
    "url": "zh/posts/chuncss-shi-xian-mu-lu-zi-dong-bian-hao.html",
    "revision": "ac30c11f91b793909f2e14b63bf863c1"
  },
  {
    "url": "zh/posts/cong-ling-kai-shi-xie-yi-ge-fu-hepromises.html",
    "revision": "46f23a3798fd4dd84a280154c7339462"
  },
  {
    "url": "zh/posts/css-di-si-ji-xuan-ze-qi.html",
    "revision": "c16bb97c22b084e152a0a69a8e385229"
  },
  {
    "url": "zh/posts/css-hun-he-mo-shi.html",
    "revision": "9c165cc7a88a7f7f8d4e09be889c5c97"
  },
  {
    "url": "zh/posts/gang-gang-huan-hao-hao-de-zha-tu-ran-kua-yu-liao-.html",
    "revision": "5b7aea0f22187c08553810f0ffbb7f75"
  },
  {
    "url": "zh/posts/gong-zuo-zhong-bi-xu-yao-zhang-wo-de-ji-chong-wen-jian-lu-jing-zhi-shi.html",
    "revision": "629484f63ea38a48fe0f1a39071e10b2"
  },
  {
    "url": "zh/posts/gu-ge-xin-ti-an-webbundlesapi-ke-zai-tuo-ji-zhuang-tai-shi-xian-nei-rong-fen-fa.html",
    "revision": "d3920176a01df5acc554f630adf69082"
  },
  {
    "url": "zh/posts/hybridapp-chi-xian-bao-fang-an-shi-jian.html",
    "revision": "6f3968705f7bb5b2d4d43565ad9ab0ca"
  },
  {
    "url": "zh/posts/index.html",
    "revision": "bca8b7114c0c1312cc98ecb7621628ec"
  },
  {
    "url": "zh/posts/javascript-es2019-de-xin-te-xing.html",
    "revision": "1b1f88531307bea7650f2adb909dedac"
  },
  {
    "url": "zh/posts/javascript-yun-xing-yuan-li.html",
    "revision": "b4277de9421d0d71c55837cf1149d05d"
  },
  {
    "url": "zh/posts/javascript-zhong-de-shu-ju-jie-gou.html",
    "revision": "72394e55aa2897a66a5485ad477a7f25"
  },
  {
    "url": "zh/posts/ji-yi-ciwebpack-gou-jian-ti-su.html",
    "revision": "1d1f6398cb3d45c358d854546e8cca76"
  },
  {
    "url": "zh/posts/ji-yuvue-hets-deweb-yi-dong-duan-xiang-mu-shi-zhan-xin-de.html",
    "revision": "1c0cc5d65a57c4bf5499b99a374f12d4"
  },
  {
    "url": "zh/posts/js-zhong-ke-yi-ti-sheng-xing-fu-du-de-xiao-ji-qiao.html",
    "revision": "0714e0fe1e76190011c258fa1d1dbd28"
  },
  {
    "url": "zh/posts/li-qingtex-ketex-mathjax-letex......-de-guan-xi-ji-fu-hao-biao-shi-ji-he.html",
    "revision": "b97cd15f204039db941c7486d16b6e67"
  },
  {
    "url": "zh/posts/liao-jiewasm-de-qian-shi-jin-shen.html",
    "revision": "ef4bb024320ddbeeb2ab76419adfa56a"
  },
  {
    "url": "zh/posts/my-first-post.html",
    "revision": "80a9f1d0c109fb42cea002627eddfe9b"
  },
  {
    "url": "zh/posts/ni-lianhttps-yuan-li-du-bu-dong-huan-jiang-zhong-jian-ren-gong-ji-.html",
    "revision": "dff642bf527a9c1a387e14a7010557b8"
  },
  {
    "url": "zh/posts/ni-zhen-de-dongpackage.json-ma-.html",
    "revision": "13523f19f39cda7e212cd7f5c0444898"
  },
  {
    "url": "zh/posts/qian-duan-dai-ma-mei-hua-de-yi-zhu.html",
    "revision": "04ef691370c274542c683d832dc33adc"
  },
  {
    "url": "zh/posts/qian-duan-gong-cheng-shi-bi-xu-zhang-wo-debabel-zhi-shi.html",
    "revision": "4233a3b656553af6ac9bcaa2e216e929"
  },
  {
    "url": "zh/posts/qian-duancodereview-de-zui-jia-shi-jian-fang-an-lai-liao.html",
    "revision": "f5a1890797329663eb2c7617bee2e590"
  },
  {
    "url": "zh/posts/qiao-yongcss-shi-xian-ku-xuan-de-chong-dian-dong-hua.html",
    "revision": "f7ac6e4461f7c9569eb0b1f05439a2a1"
  },
  {
    "url": "zh/posts/ru-he-you-ya-chu-li-qian-duan-yi-chang-.html",
    "revision": "c9634b8382d66b2611ec61c063d38e40"
  },
  {
    "url": "zh/posts/tong-yi-ge-zuo-biao-gu-ge-gao-de-bai-du-di-tu-ju-ran-zhi-xiang-liao-san-ge-bu-tong-de-di-fang.html",
    "revision": "bab55d2f70c5d57fcdc0bebbf92ffe90"
  },
  {
    "url": "zh/posts/vue-zhe-xie-xiu-shi-fu-bang-wo-jie-sheng-wu-fen-zhi-yi-de-kai-fa-shi-jian.html",
    "revision": "e99997a104788824f887c1b1aa2b4ffd"
  },
  {
    "url": "zh/posts/web-chang-jian-gong-ji-zong-jie.html",
    "revision": "de40877d5cbd30700d546b88c2e97754"
  },
  {
    "url": "zh/posts/webcomponents-ru-men-shi-li-jiao-cheng.html",
    "revision": "6d507c9206a05715751fe8366b6ffcb9"
  },
  {
    "url": "zh/posts/xun-xu-jian-jin-zhang-wojavascript-han-shu-de-jin-jie-zhi-nan.html",
    "revision": "cc3d69334e1a43600a4264ba8563fee9"
  },
  {
    "url": "zh/posts/yi-pian-chang-zuo-cuo-de-jing-dianjs-bi-bao-mian-shi-ti.html",
    "revision": "8c1fdfdf1ba91ee3917f412176c241f3"
  },
  {
    "url": "zh/posts/yi-pian-wen-zhang-che-di-gao-ding-fu-wen-ben-yuan-li.html",
    "revision": "fda6c2a156420a2cbc4ffc2978a58542"
  },
  {
    "url": "zh/posts/yuan-shengjs-de-zhi-shi-xi-tong-shu-li.html",
    "revision": "f13dd8cff9a515db6294402ce2ba4b6f"
  },
  {
    "url": "zh/posts/zui-chang-yong-degit-ming-ling-zong-jie.html",
    "revision": "bb0181d068c4daf50dedbbc0927ee995"
  },
  {
    "url": "zh/posts/zuo-kai-yuan-ying-zhi-dao-de-san-ge-fa-lu-yao-dian.html",
    "revision": "9e5c9eb764c948192a69c63591641450"
  },
  {
    "url": "zh/travel/index.html",
    "revision": "78dc7ee68fe592d838d34adeb31b028e"
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
