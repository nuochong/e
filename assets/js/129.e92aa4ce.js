(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1149:function(e,t,a){"use strict";a.r(t);var s=a(2),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("在 2019 年 Chrome 开发者峰会 上，谷歌预览了全新的 Web Bundles API。这是一种基础架构 API，开发人员可以通过它以任何格式（电子邮件、FTP 甚至 USB）分发他们的 Web 内容，而内容本身不会有任何改动。这种技术不仅能够以闪电般的速度交付 Web 内容，而且即使用户处于脱机状态，也可以实现点对点内容分发。")])]),e._v(" "),s("p",[e._v("将完整的网站打包成单个文件并使其可共享的能力为 Web 打开了新的大门。想象这样一个世界，你可以在其中：")]),e._v(" "),s("ul",[s("li",[e._v("创建自己的内容并以各种方式分发它，而不受网络的限制。")]),e._v(" "),s("li",[e._v("通过蓝牙或 Wi-Fi Direct 与你的朋友共享一个 Web 应用或一段 Web 内容。 -使用你自己的 USB 设备携带你的站点内容，甚至将其托管在你自己的本地网络中。")])]),e._v(" "),s("p",[e._v("Web Bundles API 是一项前沿提案，可以让你做到上面的所有内容。")]),e._v(" "),s("h2",{attrs:{id:"web-bundles-api-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-bundles-api-简介"}},[e._v("#")]),e._v(" Web Bundles API 简介")]),e._v(" "),s("p",[e._v("Web Bundle 是一种文件格式，用于在一个文件中封装一项或多项 HTTP 资源。它可以包含一个或多个 HTML 文件、JavaScript 文件、图像或样式表。")]),e._v(" "),s("p",[e._v("Web Bundles（正式名称为 Bundled HTTP Exchanges）是 Web 打包提案的一部分。")]),e._v(" "),s("figure",[s("img",{attrs:{src:a(285),alt:"An image"}}),s("figcaption",[e._v("An image")])]),e._v(" "),s("p",[e._v("Web Bundels 的工作机制")]),e._v(" "),s("p",[e._v("Web Bundle 中的 HTTP 资源通过请求 URL 进行索引，并且可以选择带有可用来证明资源的签名。签名使浏览器能够理解和验证每种资源的来源，并将这些资源视为来自它们的真正源头。这种机制类似签名 HTTP 交换，也就是签名单个 HTTP 资源的功能。")]),e._v(" "),s("p",[e._v("本文将带你了解什么是 Web Bundle，以及如何使用它。")]),e._v(" "),s("h2",{attrs:{id:"web-bundles-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-bundles-介绍"}},[e._v("#")]),e._v(" Web Bundles 介绍")]),e._v(" "),s("p",[e._v("确切地说，Web Bundle 是一个扩展名为.wbn（按照约定）的 CBOR 文件，它将 HTTP 资源打包为二进制格式，并使用 application/webbundle MIME 类型。你可以在规范草案的“顶层结构”部分了解更多信息。")]),e._v(" "),s("p",[e._v("Web Bundle 具有多个独特功能：")]),e._v(" "),s("ul",[s("li",[e._v("封装多个页面，使整个网站可以打包到一个文件中。")]),e._v(" "),s("li",[e._v("支持可执行的 JavaScript，改进了 MHTML 的不足。")]),e._v(" "),s("li",[e._v("使用 HTTP Variants 进行内容协商，这样即使打好的包在离线时使用，也可以使用 Accept-Language 标头支持国际化功能。")]),e._v(" "),s("li",[e._v("由发布者加密签名时，在其来源的上下文中加载。")]),e._v(" "),s("li",[e._v("在本地启动时几乎瞬时加载。")])]),e._v(" "),s("p",[e._v("这些功能为众多场景打开了新的大门。一种常见的场景是构建自包含的 Web 应用，无需 Internet 连接即可轻松共享和使用这个应用。例如，假设你和朋友一起从东京飞往旧金山。你不喜欢机上娱乐系统。你的朋友正在玩一个名为 PROXX 的有趣的网络游戏，并告诉你在登机之前她以 Web Bundle 的形式下载了该游戏，它可以在离线状态下完美地运行。在 Web Bundles 发布之前，故事就此结束了，你们要么不得不轮流在你朋友的设备上玩游戏，要么找到其他东西来打发时间。但现在有了 Web Bundles，你就可以这样做了：")]),e._v(" "),s("ol",[s("li",[e._v("请你的朋友分享游戏的.wbn 文件。例如，可以使用文件共享应用轻松地对等共享文件。")]),e._v(" "),s("li",[e._v("在支持 Web Bundles 的浏览器中打开.wbn 文件。")]),e._v(" "),s("li",[e._v("开始在你自己的设备上玩游戏，并尝试打破朋友的高分纪录。")])]),e._v(" "),s("p",[e._v("下面这段视频解释了这种情况:\n"),s("a",{attrs:{href:"https://youtu.be/xAujz66la3Y",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://youtu.be/xAujz66la3Y"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("如你所见，Web Bundle 可以包含所有资源，使其脱机工作并瞬时加载。")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("当前，Chrome 80 仅支持未签名的 bundles（也就是不带原始签名的 Web Bundles）。由于 Web Worker 的跨域问题，没有签名的 PROXX 包运行起来不是很完美。Chrome 正在努力解决这个问题。同时，请查看处理未签名打包中的常见问题，了解如何避免跨域问题。")])]),e._v(" "),s("h2",{attrs:{id:"构建-web-bundles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建-web-bundles"}},[e._v("#")]),e._v(" 构建 Web Bundles")]),e._v(" "),s("p",[e._v("当前，go/bundle CLI 是打包网站的最简单方法。go/bundle 是 Go 中内置的 Web Bundles 规范的参考实现。")]),e._v(" "),s("ol",[s("li",[e._v("安装 Go。")]),e._v(" "),s("li",[e._v("安装 go/bundle。")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("go get -u github.com/WICG/webpackage/go/bundle/cmd/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])]),s("p",[e._v("克隆 preact-todomvc 仓库并构建 Web 应用，以准备打包资源。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/developit/preact-todomvc.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" preact-todomvc\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run build\n")])])]),s("p",[e._v("使用 gen-bundle 命令来生成.wbn 文件。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("gen-bundle -dir build -baseURL https://preact-todom.vc -primaryURL https://preact-todom.vc -o todomvc.wbn\n")])])]),s("p",[e._v("恭喜你！TodoMVC 现在就是一个 Web Bundle 了。打包方法还有其他选择，并且将来还会有更多选择。go/bundle CLI 让你可以使用 HAR 文件或资源 URL 的自定义列表来构建 Web Bundle。访问 GitHub 仓库以了解有关 go/bundle 的更多信息。你还可以尝试实验性的 Node.js 模块来打包 wbn。请注意，wbn 仍处于开发的早期阶段。")]),e._v(" "),s("p",[e._v("GitHub 仓库:\n"),s("a",{attrs:{href:"https://github.com/WICG/webpackage/tree/master/go/bundle",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/WICG/webpackage/tree/master/go/bundle"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"玩转-web-bundles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#玩转-web-bundles"}},[e._v("#")]),e._v(" 玩转 Web Bundles")]),e._v(" "),s("p",[e._v("要尝试 Web Bundle：")]),e._v(" "),s("ol",[s("li",[e._v("转到 chrome://version，查看你正在运行的 Chrome 版本。如果你运行的是 80 版或更高版本，请跳过下一步。")]),e._v(" "),s("li",[e._v("如果运行的不是 Chrome 80 或更高版本，请下载 Chrome Canary。")]),e._v(" "),s("li",[e._v("打开 chrome://flags/#web-bundles。")]),e._v(" "),s("li",[e._v("将"),s("code",[e._v("Web Bundles")]),e._v("标志设置为"),s("code",[e._v("Enabled")]),e._v("。")])]),e._v(" "),s("figure",[s("img",{attrs:{src:a(284),alt:"An image"}}),s("figcaption",[e._v("An image")])]),e._v(" "),s("p",[e._v("在 chrome://flags 中启用 Web Bundles")]),e._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[e._v("重新启动 Chrome。")]),e._v(" "),s("li",[e._v("如果你是在桌面环境中，则将 todomvc.wbn 文件拖放到 Chrome 中；如果是 Android 环境，则在文件管理应用中点击它。")])]),e._v(" "),s("p",[e._v("现在魔法一切就绪了。")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("提示")]),e._v(" "),s("p",[e._v("当前，你只能浏览存储在本地文件中的 Web Bundle，但这只是一个临时限制。")])]),e._v(" "),s("h2",{attrs:{id:"发送反馈"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送反馈"}},[e._v("#")]),e._v(" 发送反馈")]),e._v(" "),s("p",[e._v("Chrome 中的 Web Bundle API 实现是实验性的，尚不完整。并非所有功能都会正常运行，并且可能会失败或崩溃。这就是为什么它位于实验性标志后。但是这个 API 已经足够让你在 Chrome 中进行探索了。Web 开发人员的反馈对于新 API 的设计是至关重要的，因此请尝试一下，并告诉正在开发 Web Bundles 的人们你的想法如何。")]),e._v(" "),s("ul",[s("li",[e._v("将常规反馈发送到 "),s("a",{attrs:{href:"mailto:webpackage-dev@chromium.org"}},[e._v("webpackage-dev@chromium.org")]),e._v("。")]),e._v(" "),s("li",[e._v("如果你对规范有任何反馈，请访后面网址提交新的规范问题，或发送电子邮件至 "),s("a",{attrs:{href:"mailto:wpack@ietf.org"}},[e._v("wpack@ietf.org")]),e._v("。\n"),s("a",{attrs:{href:"https://github.com/WICG/webpackage/issues/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/WICG/webpackage/issues/new"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("如果你发现 Chrome 的行为有任何问题，请访问后面网址提交 Chromium 错误。\n"),s("a",{attrs:{href:"https://crbug.com/new",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://crbug.com/new"),s("OutboundLink")],1)]),e._v(" "),s("li",[e._v("我们也非常欢迎对规范讨论和工具的任何贡献。访问规范仓库以参与其中。\n"),s("a",{attrs:{href:"https://github.com/WICG/webpackage",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/WICG/webpackage"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"致-谢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#致-谢"}},[e._v("#")]),e._v(" 致 谢")]),e._v(" "),s("p",[e._v("我们想向优秀的 Chrome 工程团队致以诚挚的谢意，他们是坂本邦彦、霍隆刚、丰岛隆史、安田健子 和 Jeffrey Yasskin，他们为规范做出了巨大贡献，在 Canary 上构建了该功能并审阅了本文。在标准化过程中，Dan York 帮助引导了 IETF 的讨论，还有 Dave Cramer，为发布者提供了所需要的重要资源。我们还要感谢 Jason Miller 制作的出色的 preact-todomvc，以及他为改进框架而做出的不懈努力。")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s/__iKteDq9z8AMXsnr57N3g",target:"_blank",rel:"noopener noreferrer"}},[e._v("谷歌新提案：Web Bundles API 可在脱机状态实现内容分发"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);