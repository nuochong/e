(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{1949:function(t,r,e){"use strict";e.r(r);var a=e(3),s=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("最近一段时间 Flutter 的技术热度非常高，各个大厂和很多开发者都在积极的学习并尝试。关于 Flutter 的科普文章已经非常多了，Flutter 的优点也不再骜述。本文会结合 Flutter 和 React Native 的实际项目中的遇到的问题，进行相对客观的对比，也指出一些现阶段 Flutter 的不足之处，避免大家踩坑。")]),t._v(" "),e("h2",{attrs:{id:"js-vs-dart"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-vs-dart"}},[t._v("#")]),t._v(" JS VS Dart")]),t._v(" "),e("p",[t._v("Facebook 最明智的一点就是让 RN 采用 JS 作为开发语言。因为 JS 拥有非常好的群众基础和较低的学习门槛，所以 RN 不仅可以吸引大量的前端开发者加入，而且可以和 React 社区形成正向互补，进一步巩固 Facebook 在前端领域的统治力。基本上所有合格的前端开发者都可以低成本的学习并使用 RN 进行跨端开发。Google 让 Flutter 采用 Dart 进行开发，可能是基于对未来的判断，希望 Dart 可以逐步取代 JS 成为前端的开发标准。实际上 Dart 的语法更接近原生开发语言，用 Java 或者 Swift 的开发者会更加喜欢。可以想象下，团队在进行技术选型的时候，必须要考虑招 JS 的开发者容易还是招 Dart 的开发者容易呢？")]),t._v(" "),e("p",[t._v("综上所述，这点上 RN 暂时胜出。")]),t._v(" "),e("h2",{attrs:{id:"开发调试环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发调试环境"}},[t._v("#")]),t._v(" 开发调试环境")]),t._v(" "),e("p",[t._v("我们团队同时做过 RN 和 Flutter 的开发项目，从工具链来说，两者都非常成熟、调试都非常方便。但是从开发环境的搭建来看，尤其是集成到已有 APP 项目中，RN 相对来说就容易太多了。我们为了让 Flutter 集成到已有 APP 中，做了大量工程化改造，甚至分别准备了 debug 和 release 两种开发模式。业务模块的集成打包方面，RN 也更加方便和灵活，可以按不同 GIT 库进行业务管理，打成不同的 jsbundle 分别集成。而 Flutter 开发需要集中式管理，在同一个 GIT 中进行维护。")]),t._v(" "),e("p",[t._v("综上所述，这点上 RN 暂时胜出。")]),t._v(" "),e("h2",{attrs:{id:"原生混合开发支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原生混合开发支持"}},[t._v("#")]),t._v(" 原生混合开发支持")]),t._v(" "),e("p",[t._v("原生混合开发方面其实是 RN 的强项。由于 RN 的组件原本就是通过原生 UI 系统进行渲染，所以可以非常容易的实现在原生页面中嵌入 RN 的 RootView 或者在 RN 页面中嵌入原生 UI 组件，对已有 APP 上进行混合开发支持非常友好。而 Flutter 因为无论是在原生页面中嵌入 FlutterView 或者在 Flutter 页面中嵌入原生 UI 组件，都会有内存或者性能等不少问题。目前国内实践比较多的是闲鱼团队，也开源了 FlutterBoost 项目尝试解决这个问题，但是官方始终还没有非常完美的解决方案。所以 Flutter 更适合在全新 APP 上使用。")]),t._v(" "),e("p",[t._v("综上所述，这点上 RN 暂时胜出。")]),t._v(" "),e("h2",{attrs:{id:"热更新支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#热更新支持"}},[t._v("#")]),t._v(" 热更新支持")]),t._v(" "),e("p",[t._v("热更新一直以来都是 RN 框架的卖点之一，无论是微软提供的 CodePush 服务还是各个大厂自己搭建的热更新平台，例如国内京东、携程都有非常成熟 RN 更新平台。而 Google 则完全没有计划支持 Flutter 热更新功能，从目前了解的信息来看，京东 JDFlutter 在 Android 平台已经实现了热更新，但是实际效果和灵活程度还是远远不及 RN。而受限于苹果的限制，iOS 平台上没有一家公司真正意义上实现了 Flutter 热更新。开源项目 MXFlutter 通过 JS 开发的方式，曲线救国间接的实现了 Flutter 动态化。虽然是很有价值的尝试，但是抛弃 Dart 改为 JS 开发也会带来其他更多的问题。")]),t._v(" "),e("p",[t._v("综上所述，这点上 RN 暂时胜出。")]),t._v(" "),e("h2",{attrs:{id:"全平台支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全平台支持"}},[t._v("#")]),t._v(" 全平台支持")]),t._v(" "),e("p",[t._v("其实无论 RN 还是 Flutter 都有相当大的野心实现全平台制霸。除了 Android、iOS 平台之外，RN 已经可以通过第三方工具支持 Windows UMP、Web、Desktop、macOS，甚至近期京东开源的 Alita 项目 已经实现 RN 到微信小程序的打通。而 Flutter 目前还不完善，虽然以已经官方支持了 Android、iOS、Desktop、Web，但是实际测试下来成熟度还不够，特别是 Hummingbird 还处于早期阶段，转换后 Web 的性能还达不到生产环境的要求。")]),t._v(" "),e("p",[t._v("综上所述，这点上 RN 暂时胜出。")]),t._v(" "),e("h2",{attrs:{id:"开发者生态支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开发者生态支持"}},[t._v("#")]),t._v(" 开发者生态支持")]),t._v(" "),e("p",[t._v("RN 的 Github Star 已经达到了 80K，而且借助于 React 生态，有大量的第三方插件可以使用。微软、airbnb 等公司也贡献了大量高质量的插件，整个开发者生态非常完善和活跃。相比之下，Flutter 的生态刚刚处于早期阶段，虽然 Github Star 也已经有 72K，但是整体可用的第三方库的数量不如 RN。当然，我们也看到 Flutter 生态最近发展很快，Dart Pubs 上的公开库数量也日趋上升，基本可以满足一般业务的开发。")]),t._v(" "),e("p",[t._v("综上所述，这点上 RN 暂时胜出。")]),t._v(" "),e("h2",{attrs:{id:"框架稳定性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#框架稳定性"}},[t._v("#")]),t._v(" 框架稳定性")]),t._v(" "),e("p",[t._v("从团队实际使用 RN 和 Flutter 框架情况来看，RN 经过 4 年的发展和不断迭代，目前的稳定性和兼容性已经有了很大的改善。Github 上 open issue 只有 500 多，而且国内不少大厂例如京东、携程等也在大规模使用中，整体上稳定性已经到达生产环境的要求。但是由于 RN 整体架构设计的限制，还比较依赖原生组件，所以随着 Android、iOS 的系统迭代，未来还是需要持续的完善稳定性和兼容性。所以我们也建议大厂在应用 RN 框架的时候，能有专门的原生团队维护和优化 RN 引擎，可以带来最大的收益。Flutter 的版本号已经快速迭代到了 1.7，不过实际使用中遇到的问题还是比较多的，性能和稳定性方面还有很长的路要走，更让人担忧的是 Github 上有 7000 多的 open issue。而且 Flutter 引擎部分大量 C 代码，比较晦涩难懂，一般团队很难去优化进行稳定性加固。")]),t._v(" "),e("p",[t._v("综上所述，这点上 RN 暂时胜出。")]),t._v(" "),e("h2",{attrs:{id:"flutter-真的不如-rn-吗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flutter-真的不如-rn-吗"}},[t._v("#")]),t._v(" Flutter 真的不如 RN 吗？")]),t._v(" "),e("p",[t._v("文章最后必须强调下，技术层面其实 RN 和 Flutter 没有孰优孰劣的对立关系，都是非常出色的跨端框架。虽然上面列了不少 Flutter 的问题，但是这些都不是不能解决的问题，而是处于早期阶段任何框架都可能遇到的问题。相反从整体架构设计和整体规划上来说，我认为 Flutter 比 RN 更加出色，属于下一代的跨端框架。我们可以预见到在几年后 Google Fuchsia 系统正式发布的时候，这才是 Flutter 可以大显身手的时刻。")]),t._v(" "),e("p",[t._v("但是目前阶段，RN 才是业内最成熟的跨端框架。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/DlzY6qxFC8UnmvnJJtMXTQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么 Flutter 还不是最成熟的跨端框架？"),e("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports}}]);