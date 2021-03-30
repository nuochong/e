(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{2010:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("很多开发人员讨厌 CSS。根据我的经验，这是因为没有花时间学习 CSS。\nCSS 不是最漂亮的“语言”，但它已经成功地为 web 样式提供了超过 20 年的支持。还不错吧?\n但是，当您编写更多的 CSS 时，您很快就会看到一个很大的缺点。\n"),n("strong",[t._v("很难维护 CSS。")]),t._v("\n写得不好的 CSS 很快就会变成噩梦。\n下面是一些命名规范，可以为您节省一些压力和时间。")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(522),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("h2",{attrs:{id:"使用连字符-分隔字符串"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用连字符-分隔字符串"}},[t._v("#")]),t._v(" 使用连字符’-'分隔字符串")]),t._v(" "),n("p",[t._v("如果你写了很多 JavaScript，那么"),n("code",[t._v("驼峰式")]),t._v("编写变量就是常见的做法。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" redBox "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("看起来还不错。\n问题是这种命名形式不适合 CSS。\nDo not do this:")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".redBox")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Instead, do this:")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".red-box")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这是一个非常标准的 CSS 命名规范。可以说它更具有可读性。\n并且，它与 CSS 属性名称一致。")]),t._v(" "),n("div",{staticClass:"language-less extra-class"},[n("pre",{pre:!0,attrs:{class:"language-less"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Correct")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".some-class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10em"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wrong")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".some-class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("fontweight")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10em"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"bem-命名规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bem-命名规范"}},[t._v("#")]),t._v(" BEM 命名规范")]),t._v(" "),n("p",[t._v("每个团队有不同的方法来编写 CSS 选择器。有些团队使用连字符分隔符，而另一些团队则更喜欢使用名为 BEM 的结构化命名规范。\n通常来讲，CSS 命名约定试图解决 3 个问题：")]),t._v(" "),n("ol",[n("li",[t._v("想知道选择器的作用，只需查看其名称即可。")]),t._v(" "),n("li",[t._v("想了解选择器的使用位置，只需查看它即可。")]),t._v(" "),n("li",[t._v("想了解类名之间的关系，只需查看它们即可。")])]),t._v(" "),n("p",[t._v("你有没有见过这样的类名：")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav--secondary")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".nav__header")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ..."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这就是 BEM 命名规范。")]),t._v(" "),n("h2",{attrs:{id:"通过以下例子来解释-bem"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#通过以下例子来解释-bem"}},[t._v("#")]),t._v(" 通过以下例子来解释 BEM")]),t._v(" "),n("p",[t._v("假设 BEM 将整个用户界面划分为小型可重用组件。\n看下面的图片：")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(523),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("p",[t._v("这个火柴人代表整个组件。\n你可能已经猜到 BEM 中的 B 代表 "),n("strong",[t._v("Block")]),t._v("。\n现实中，这个‘块’可以表示站点导航，页眉，页脚或者任何其他设计块。\n按照上面的说法，这个组件理想的类名应该是"),n("code",[t._v("stick-man")]),t._v("。\n组件的样式应该是：")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".stick-man")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("我们这里已经使用了分隔符，good！")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(524),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("h3",{attrs:{id:"e-for-elements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#e-for-elements"}},[t._v("#")]),t._v(" E for Elements")]),t._v(" "),n("p",[t._v("BEM 中的 E 代表 Elements。\n这个整体的组件很少孤立存在。\n比如，火柴人有一个"),n("code",[t._v("头")]),t._v("，两个"),n("code",[t._v("手臂")]),t._v("，和"),n("code",[t._v("脚")]),t._v("。")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(525),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("p",[t._v("头部，脚部和手臂都是组件内的元素。它们可以被视为子组件，即整个父组件的子组件。\n使用 BEM 命名规范，通过添加两个下划线,后跟元素名称来派生元素类名称。\nFor example:")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".stick-man__head")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".stick-man__arms")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".stick-man__feet")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"m-for-modifiers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#m-for-modifiers"}},[t._v("#")]),t._v(" M for Modifiers")]),t._v(" "),n("p",[t._v("BEM 中的 M 代表修饰符。\n如果这个火柴人被修改了，我们可以有一个蓝色或红色的火柴人，怎么办？")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(526),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("p",[t._v("现实中，这可以是红色按钮或蓝色按钮。这些是对相关组件的修改。\n使用 BEM，通过添加两个"),n("code",[t._v("连字符")]),t._v("后跟元素名称来派生修饰符类名。\nFor example:")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".stick-man--blue")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".stick-man--red")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("最后一个示例显示了父组件被修改。但这并非总是如此。\n假如我们的火柴人有两个不同大小的头部，怎么办？")]),t._v(" "),n("figure",[n("img",{attrs:{src:a(527),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("p",[t._v("现在元素被修改了。请记住，元素是整个包含块中的子组件。\n"),n("code",[t._v(".stick-man")]),t._v(" 代表 "),n("strong",[t._v("Block")]),t._v("，"),n("code",[t._v(".stick-man_head")]),t._v("代表 "),n("strong",[t._v("Element")]),t._v("。\n根据上面的例子，双连字符应该这样使用：")]),t._v(" "),n("div",{staticClass:"language-css extra-class"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".stick-man__head--small")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".stick-man__head--big")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Now you’ve got it.\n这基本上是 BEM 命名约定的工作原理。\n就我个人而言，对于简单的项目仅适用连字符分隔符类名称就可以，而对于更多页面则适用 BEM。\n你可以"),n("a",{attrs:{href:"http://getbem.com/naming/",target:"_blank",rel:"noopener noreferrer"}},[t._v("阅读更多"),n("OutboundLink")],1),t._v("关于 BEM 的信息。")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6945262660887773198",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 命名规范 - BEM"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);