(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{2188:function(t,s,v){"use strict";v.r(s);var S=v(3),i=Object(S.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p",[t._v("有些人极为讨厌 CSS-in-JS，单单提起这个名字都会让他们反感，总之就是拒绝二字。他们认为样式不属于 JavaScript，而是属于 CSS，并且 CSS 有着很长的历史，浏览器支持非常完善。关注点必须分离，其他路子都走错了，我们要以史为鉴（比如标签等）。")]),t._v(" "),v("p",[t._v("有些人非常喜欢 CSS-in-JS。他们看到模板和功能并存的理念和大多数的 JavaScript 框架都非常成功，所以包装在样式里似乎就是顺其自然。Vue 的单文件组件就是一个例子。")]),t._v(" "),v("p",[t._v("Brent Jackson 列举了一些 CSS-in-JS 能做和不能做的事情：")]),t._v(" "),v("h3",{attrs:{id:"css-in-js-能做什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-in-js-能做什么"}},[t._v("#")]),t._v(" CSS-in-JS 能做什么：")]),t._v(" "),v("ul",[v("li",[t._v("让你用 JavaScript 语法编写 CSS")]),t._v(" "),v("li",[t._v("组件和样式共用")]),t._v(" "),v("li",[t._v("利用原生 JS 语法功能")]),t._v(" "),v("li",[t._v("利用 JS 生态系统")])]),t._v(" "),v("h3",{attrs:{id:"css-in-js-没法让你了解"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-in-js-没法让你了解"}},[t._v("#")]),t._v(" CSS-in-JS 没法让你了解：")]),t._v(" "),v("ul",[v("li",[t._v("如何将样式应用于 DOM")]),t._v(" "),v("li",[t._v("继承如何工作")]),t._v(" "),v("li",[t._v("CSS 属性如何工作")]),t._v(" "),v("li",[t._v("CSS 布局如何工作")])]),t._v(" "),v("p",[t._v("CSS-in-JS 并不能减轻你学习 CSS 的负担，大多数情况下就是如此。")]),t._v(" "),v("h2",{attrs:{id:"css-in-js-是恶魔还是天使"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#css-in-js-是恶魔还是天使"}},[t._v("#")]),t._v(" CSS-in-JS 是恶魔还是天使？")]),t._v(" "),v("p",[t._v("我听过很多对 CSS-in-JS 的排斥言论，诸如“你用 CSS-in-JS 是因为你不懂 CSS”或者“你们这样做是因为你害怕级联。我已经知道如何定位 CSS 了。“但这些言论只是在挑事而已。")]),t._v(" "),v("p",[t._v("Lara buns 的那篇“没有 Web 的 Web 世界”写的很好，其中就提到了 React 和 CSS-in-JS：")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("我讨厌 React，因为默认情况下 CSS-in-JS 方法需要你编写完全自包含的组件，而不是从宏观层面构建网站的 UI。")])]),t._v(" "),v("p",[t._v("不是说你用了 React 就得用 CSS-in-JS，但这种做法很流行，上面这段评价也很公正有趣。如果你什么东西都要打包，难道不是在引入更多不一致的风险吗？")]),t._v(" "),v("p",[t._v("我一直都是 CSS 模块的粉丝，因为它就像 CSS-in-JS 一样简单，而且和 SASS 并用可以保证一致性。但人们使用它时也很容易陷入太多一次性使用的陷阱中。")]),t._v(" "),v("p",[t._v("这些只会用一次的代码可以抛弃，可以分离，一切都很平衡。")]),t._v(" "),v("p",[t._v("Laura 还说她喜欢 CSS-in-JS 方法，它提供了一些强大的功能和灵活性：")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("我喜欢 CSS-in-JS，因为它提供了足够的抽象，让你既能用通用选择器之类的技巧，同时也能充分利用 JS 来做容器查询之类的东西。")])]),t._v(" "),v("p",[t._v("Martin Hofmann 创建了一个网站，用一个很小的“警报组件”来客观地对比 BEM 与 Emotion。BEM 有一些优点，特别是不需要任何工具，并且可以轻松地与任何 Web 项目共享。但 Emotion 方法在很多方面都比较干净，看起来更容易处理。")]),t._v(" "),v("p",[t._v("我希望有更多这种客观的技术比较，公正地列出每项技术的优势和代价。")]),t._v(" "),v("p",[t._v("Scott Jehl 的一篇文章讨论了异步加载 CSS。文章开头写到：")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("我们可以用一种不会拖累页面渲染的方法加载 CSS，大幅提升页面性能和适应性。")])]),t._v(" "),v("p",[t._v("值得一提的是 CSS-in-JS 方法天然就有这种能力，因为样式被捆绑到了 JavaScript 中。当然这种做法需要付出性能代价，但是如果我们消除一些阻塞渲染的障碍就能减轻一些代价。起码这种方法值得多用一些数据。")]),t._v(" "),v("p",[t._v("我不觉得 CSS-in-JS 就一定提高了行业的门槛。我们并没有强行排除 CSS，强迫大家用别的语言。这种方法适合某些项目，适用于特定规模。")]),t._v(" "),v("p",[t._v("我觉得以下情况下你应该考虑一下 CSS-in-JS：")]),t._v(" "),v("ul",[v("li",[t._v("你正在开发一个有大量组件的 JavaScript 项目。")]),t._v(" "),v("li",[t._v("你要把模板、功能和数据查询做在一起。")]),t._v(" "),v("li",[t._v("你认为利用这种方法的同时不会影响用户体验。")]),t._v(" "),v("li",[t._v("你的团队喜欢这种技术，不会因此萌生退意。")])]),t._v(" "),v("p",[t._v("Max Stoiber 写的文章介绍了这种方法给他带来的信心和为他节省的时间。但他也认为这种方法只适合 JavaScript 框架应用程序。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("如果你使用 JavaScript 框架来构建包含组件的 Web 应用程序，那么 CSS-in-JS 可能非常适合你的需求。如果你的团队成员都具备基本的 JavaScript 能力那就最好不过了。")])]),t._v(" "),v("p",[t._v("英文原文:\n"),v("a",{attrs:{href:"https://css-tricks.com/the-differing-perspectives-on-css-in-js/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://css-tricks.com/the-differing-perspectives-on-css-in-js/"),v("OutboundLink")],1)]),t._v(" "),v("p",[v("a",{attrs:{href:"https://mp.weixin.qq.com/s/Zx3WI1s-egD4JfEjKspq3Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS-in-JS 是恶魔还是天使？"),v("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=i.exports}}]);