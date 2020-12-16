(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{1990:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"本文主旨"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#本文主旨"}},[t._v("#")]),t._v(" 本文主旨")]),t._v(" "),n("p",[t._v("长列表渲染、无限下拉也算是前端开发老生常谈的问题之一了，本文将介绍一种"),n("strong",[t._v("简洁、巧妙、高效")]),t._v("的方式来实现。话不多说，看下图，也许你可以发现什么？")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(648),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("p",[t._v("不知你是否从上面这张图中注意到了什么，比如只是渲染了可视区域的部分 DOM ，滚动过程中只是外层容器的 padding 在改变？")]),t._v(" "),n("p",[t._v("前一点很好理解，我们考虑到性能，不可能将一个长列表（甚至是一个无限下拉列表）的所有列表元素都进行渲染；而后一点，则是本文所介绍方案的核心之一！")]),t._v(" "),n("p",[t._v("不卖关子，提前告诉你该方案的要素就是两个：")]),t._v(" "),n("ul",[n("li",[t._v("Intersection Observer")]),t._v(" "),n("li",[t._v("padding")])]),t._v(" "),n("p",[t._v("说明了要素，也许你可以尝试着开始思考，看你是否能猜到具体的实现方案。")]),t._v(" "),n("h2",{attrs:{id:"方案介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方案介绍"}},[t._v("#")]),t._v(" 方案介绍")]),t._v(" "),n("h3",{attrs:{id:"intersection-observer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intersection-observer"}},[t._v("#")]),t._v(" Intersection Observer")]),t._v(" "),n("h4",{attrs:{id:"基本概念"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" 基本概念")]),t._v(" "),n("p",[t._v("一直以来，"),n("strong",[t._v("检测元素的可视状态或者两个元素的相对可视状态")]),t._v("都不是件容易事。传统的各种方案不但复杂，而且性能成本很高，比如需要监听滚动事件，然后查询 DOM , 获取元素高度、位置，计算距离视窗高度等等。")]),t._v(" "),n("p",[t._v("这就是 Intersection Observer 要解决的问题。它为开发人员提供一种便捷的新方法来"),n("strong",[t._v("异步查询")]),t._v("元素相对于其他元素或视窗的位置，消除了昂贵的 DOM 查询和样式读取成本。")]),t._v(" "),n("h4",{attrs:{id:"兼容性"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),n("p",[t._v("主要在 Safari 上兼容性较差，需要 12.2 及以上才兼容，不过还好，有 polyfill 可食用。")]),t._v(" "),n("h4",{attrs:{id:"一些应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一些应用场景"}},[t._v("#")]),t._v(" 一些应用场景")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("页面滚动时的懒加载实现。")])]),t._v(" "),n("li",[n("p",[t._v("无限下拉（本文的实现）。")])]),t._v(" "),n("li",[n("p",[t._v("监测某些广告元素的曝光情况来做相关数据统计。")])]),t._v(" "),n("li",[n("p",[t._v("监测用户的滚动行为是否到达了目标位置来实现一些交互逻辑（比如视频元素滚动到隐藏位置时暂停播放）。")])])]),t._v(" "),n("h3",{attrs:{id:"padding-方案实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#padding-方案实现"}},[t._v("#")]),t._v(" padding 方案实现")]),t._v(" "),n("p",[t._v("基本了解 Intersection Observer 之后，接下来就看下如何用 Intersection Observer + padding 来实现无限下拉。")]),t._v(" "),n("p",[t._v("先概览下总体思路：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("监听一个固定长度列表的首尾元素是否进入视窗；")])]),t._v(" "),n("li",[n("p",[t._v("更新当前页面内渲染的第一个元素对应的序号；")])]),t._v(" "),n("li",[n("p",[t._v("根据上述序号，获取目标数据元素，列表内容重新渲染成对应内容；")])]),t._v(" "),n("li",[n("p",[t._v("容器 padding 调整，模拟滚动实现。")])])]),t._v(" "),n("p",[n("strong",[t._v("核心：利用父元素的 padding 去填充随着无限下拉而本该有的、越来越多的 DOM 元素，仅仅保留视窗区域上下一定数量的 DOM 元素来进行数据渲染。")])]),t._v(" "),n("h4",{attrs:{id:"_1、监听一个固定长度列表的首尾元素是否进入视窗"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、监听一个固定长度列表的首尾元素是否进入视窗"}},[t._v("#")]),t._v(" 1、监听一个固定长度列表的首尾元素是否进入视窗")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 观察者创建")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("observer "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntersectionObserver")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("callback"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 观察列表第一个以及最后一个元素")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("observer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("firstItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("observer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastItem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("我们以在页面中渲染固定的 20 个列表元素为例，我们对第一个元素和最后一个元素，用 Intersection Observer 进行观察，当他们其中一个重新进入视窗时，callback 函数就会触发：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entries")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  entries"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" firstItemId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当第一个元素进入视窗")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" lastItemId"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当最后一个元素进入视窗")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"_2、更新当前页面渲染的第一个元素对应的序号-firstindex"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、更新当前页面渲染的第一个元素对应的序号-firstindex"}},[t._v("#")]),t._v(" 2、更新当前页面渲染的第一个元素对应的序号 (firstIndex)")]),t._v(" "),n("p",[t._v("拿具体例子来说明，我们用一个数组来维护需要渲染到页面中的数据。数组的长度会随着不断请求新的数据而不断变大，而渲染的始终是其中一定数量的元素，比如 20 个。那么：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("1、最开始渲染的是数组中序号为 0 - 19 的元素，即此时对应的 firstIndex 为 0；")])]),t._v(" "),n("li",[n("p",[t._v("2、当序号为 19 的元素（即上一步的 lastItem ）进入视窗时，我们就会往后渲染 10 个元素，即渲染序号为 10 - 29 的元素，那么此时的 firstIndex 为 10；")])]),t._v(" "),n("li",[n("p",[t._v("3、下一次就是，当序号为 29 的元素进入视窗时，继续往后渲染 10 个元素，即渲染序号为 20 - 39 的元素，那么此时的 firstIndex 为 20，以此类推。。。")])])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 我们对原先的 firstIndex 做了缓存")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" currentIndex "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domDataCache"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 以全部容器内所有元素的一半作为每一次渲染的增量")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" increment "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" firstIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isScrollDown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向下滚动时序号增加")]),t._v("\n  firstIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" increment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 向上滚动时序号减少")]),t._v("\n  firstIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" increment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("总体来说，更新 firstIndex，是为了根据页面的滚动情况，知道接下来哪些数据应该被获取、渲染。")])]),t._v(" "),n("h4",{attrs:{id:"_3、根据上述序号-获取对应数据元素-列表重新渲染成新的内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3、根据上述序号-获取对应数据元素-列表重新渲染成新的内容"}},[t._v("#")]),t._v(" 3、根据上述序号，获取对应数据元素，列表重新渲染成新的内容")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("renderFunction")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("firstIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// offset = firstIndex, limit = 10 => getData")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getData Done =>  new dataItems => render DOM")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("这一部分就是根据 firstIndex 查询数据，然后将目标数据渲染到页面上即可。")]),t._v(" "),n("h4",{attrs:{id:"_4、padding-调整-模拟滚动实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4、padding-调整-模拟滚动实现"}},[t._v("#")]),t._v(" 4、padding 调整，模拟滚动实现")]),t._v(" "),n("p",[t._v("既然数据的更新以及 DOM 元素的更新我们已经实现了，那么无限下拉的效果以及滚动的体验，我们要如何实现呢？")]),t._v(" "),n("p",[t._v("想象一下，抛开一切，最原始最直接最粗暴的方式无非就是我们再又获取了 10 个新的数据元素之后，再塞 10 个新的 DOM 元素到页面中去来渲染这些数据。")]),t._v(" "),n("p",[t._v("但此时，对比上面这个粗暴的方案，我们的方案是："),n("strong",[t._v("这 10 个新的数据元素，我们用原来已有的 DOM 元素去渲染，替换掉已经离开视窗、不可见的数据元素；而本该由更多 DOM 元素进一步撑开容器高度的部分，我们用 padding 填充来模拟实现。")])]),t._v(" "),n("figure",[n("img",{attrs:{src:a(649),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("ul",[n("li",[t._v("向下滚动")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// padding的增量 = 每一个item的高度 x 新的数据项的数目")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remPaddingsVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" itemHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isScrollDown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// paddingTop新增，填充顶部位置")]),t._v("\n  newCurrentPaddingTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentPaddingTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" remPaddingsVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentPaddingBottom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    newCurrentPaddingBottom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果原来有paddingBottom则减去，会有滚动到底部的元素进行替代")]),t._v("\n    newCurrentPaddingBottom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentPaddingBottom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" remPaddingsVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("figure",[n("img",{attrs:{src:a(650),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("ul",[n("li",[t._v("向上滚动")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// padding的增量 = 每一个item的高度 x 新的数据项的数目")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" remPaddingsVal "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" itemHeight "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("floor")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("isScrollDown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// paddingBottom新增，填充底部位置")]),t._v("\n  newCurrentPaddingBottom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentPaddingBottom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" remPaddingsVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentPaddingTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    newCurrentPaddingTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果原来有paddingTop则减去，会有滚动到顶部的元素进行替代")]),t._v("\n    newCurrentPaddingTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" currentPaddingTop "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" remPaddingsVal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("figure",[n("img",{attrs:{src:a(651),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("ul",[n("li",[t._v("最后是 padding 设置更新以及相关缓存数据更新")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 容器padding重新设置")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateContainerPadding")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  newCurrentPaddingBottom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  newCurrentPaddingTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM元素相关数据缓存更新")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateDomDataCache")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  currentPaddingTop"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newCurrentPaddingTop"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  currentPaddingBottom"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newCurrentPaddingBottom"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"思考总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#思考总结"}},[t._v("#")]),t._v(" 思考总结")]),t._v(" "),n("h3",{attrs:{id:"方案总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#方案总结"}},[t._v("#")]),t._v(" 方案总结：")]),t._v(" "),n("p",[t._v("利用 Intersection Observer 来监测相关元素的滚动位置，异步监听，尽可能得减少 DOM 操作，触发回调，然后去获取新的数据来更新页面元素，并且用调整容器 padding 来替代了本该越来越多的 DOM 元素，最终实现列表滚动、无限下拉。")]),t._v(" "),n("h3",{attrs:{id:"相关方案的对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关方案的对比"}},[t._v("#")]),t._v(" 相关方案的对比")]),t._v(" "),n("p",[t._v("这里和较为有名的库 - iScroll 实现的无限下拉方案进行一个基本的对比，对比之前先说明下 iScroll infinite 的实现概要：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("iScroll 通过对传统滚动事件的监听，获取滚动距离，然后：")]),t._v(" "),n("p",[t._v("1.设置父元素的 translate 来实现整体内容的上移（下移）；")]),t._v(" "),n("p",[t._v("2.再基于这个滚动距离进行相应计算，得知相应子元素已经被滚动到视窗外，并且判断是否应该将这些离开视窗的子元素移动到末尾，从而再对它们进行 translate 的设置来移动到末尾。这就像是一个循环队列一样，随着滚动的进行，顶部元素先出视窗，但又将移动到末尾，从而实现无限下拉。")])]),t._v(" "),n("li",[n("p",[t._v("相关对比：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("实现对比：一个是 Intersection Observer 的监听，来通知子元素离开视窗，只要定量设置父元素 padding 就行；另一个是对传统滚动事件的监听，滚动距离的获取，再进行一系列计算，去设置父元素以及子元素的 translate。显而易见，前者看起来更加简洁明了一些。")])]),t._v(" "),n("li",[n("p",[t._v("性能对比：我知道说到对比，你脑海中肯定一下子会想到性能问题。其实性能对比的关键就是 Intersection Observer。因为单就 padding 设置还是 translate 设置，性能方面的差距是甚小的，只是个人感觉 padding 会简洁些？而 Intersection Observer 其实抽离了所有滚动层面的相关逻辑，你不再需要对滚动距离等相应 DOM 属性进行获取，也不再需要进行一系列滚动距离相关的复杂计算，并且同步的滚动事件触发变成异步的，你也不再需要另外去做防抖之类的逻辑，这在性能方面还是有所提升的。")])])])])]),t._v(" "),n("h3",{attrs:{id:"存在的缺陷"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#存在的缺陷"}},[t._v("#")]),t._v(" 存在的缺陷：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("padding 的计算依赖列表项固定的高度。")])]),t._v(" "),n("li",[n("p",[t._v("这是一个同步渲染的方案，也就是目前容器 padding 的计算调整，无法计算异步获取的数据，只跟用户的滚动行为有关。这看起来与实际业务场景有些不符。解决思路：")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("思路 1、利用 Skeleton Screen Loading 来同步渲染数据元素，不受数据异步获取的影响。即在数据请求还未完成时，先使用一些图片进行占位，待内容加载完成之后再进行替换。")])]),t._v(" "),n("li",[n("p",[t._v("思路 2、滚动到目标位置，阻塞容器 padding 的设置（即无限下拉的发生）直至数据请求完毕，用 loading gif 提示用户加载状态，但这个方案相对复杂，你需要全面考虑用户难以预测的滚动行为来设置容器的 padding。")])])])])]),t._v(" "),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("Intersection Observer API")])]),t._v(" "),n("li",[n("p",[t._v("IntersectionObserver’s Coming into View")])]),t._v(" "),n("li",[n("p",[t._v("Infinite Scroll’ing the right way")])])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/nLPT5RZ2w9nAERKbYGVviw",target:"_blank",rel:"noopener noreferrer"}},[t._v("性能优化之无限长列表"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);