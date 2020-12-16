(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1923:function(t,s,a){"use strict";a.r(s);var n=a(3),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在编译器的第一个工作阶段：分词/词法分析也叫词法化，就是对编写的代码进行检查，如果是有状态的解析还会赋予单词语义。像这种在我们编写代码时，将变量和作用域写在哪里决定的就叫做词法作用域，当词法分析器处理代码时候会保持作用域不变（大部分情况下）。")]),t._v(" "),a("p",[t._v("相对的还有一种作用域叫做动态作用域，也就是在运行时就被动态确定的形式。在动态作用域中我们并不关心函数和作用域是如何声明的，只关心它们从何处调用。\n接下来举个例子来说明这两个做作用域的区别：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("猜一下这一段 js 代码在不同的作用域情况下会输出什么？\n"),a("strong",[t._v("词法作用域下：")]),t._v("\n会输出：1；\n因为 JavaScript 的作用域是词法作用域（大部分是！！！，除了 this），在 bar 中调用 foo 之后会去执行 foo，而在 foo 中要出输出 a，这个时候就要执行上一篇博客所说的，去执行一个 RHS 查找，因为在 foo 作用域中没有找到 a，所以就去上级作用域去查找，于是就找到了 a 的值是 1.\n"),a("strong",[t._v("动态作用域下")]),t._v("\n会输出：3；\n因为是在动态的作用域下，所以不关心函数和作用域是在何处声明的，只关心它们从何处调用的，换句话说，就是关心调用链和调用栈，当在 foo 中要去输出 a 的时候，因为 foo 中没有 a，所以要顺着它的调用栈也就是调用它的地方去查找 a，跟词法作用域不同的是它不是根据嵌套的词法作用域上找的，由于 foo 是在 bar 中调用的，所以引擎会去检查 bar 的作用域，并且找到了 a，值为 3。")]),t._v(" "),a("h2",{attrs:{id:"作用域是严格包含的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域是严格包含的"}},[t._v("#")]),t._v(" 作用域是严格包含的")]),t._v(" "),a("p",[t._v("上面我们说了两个作用域的区别，下面我们主要说说词法作用域。\n"),a("strong",[t._v("作用域的嵌套")]),t._v("\n这个大家都知道，所以只说说细节")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局作用域，里面有一个标识符 a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aaa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//包含aaa的作用域 有a，b，bbb三个标识符")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bbb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//包含bbb的作用域，有c一个标识符")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bbb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aaa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 2 3")]),t._v("\n")])])]),a("p",[t._v("从上面的代码可以看出作用域是层层嵌套的，并且是严格嵌套的，没有那个作用域会出现两个父级函数作用域,并且作用域的查找是从内往外的，会在找到第一个匹配的标识符时停止(这里不考虑找不到的情况），在多层的嵌套作用域中可以定义同名的标识符，叫做“遮蔽效应”。")]),t._v(" "),a("h2",{attrs:{id:"欺骗词法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#欺骗词法"}},[t._v("#")]),t._v(" 欺骗词法")]),t._v(" "),a("p",[t._v("在上面我们说了词法作用域是在写代码的时候就确定的，但是也可以通过一些方法来欺骗词法作用域。")]),t._v(" "),a("p",[t._v("在 JavaScript 中的 eval()函数可以接受一个字符串为参数，并将其中的内容视为好像在书写的时候就存在这个作用域里面了一样")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'var a  = 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 3;")]),t._v("\n")])])]),a("p",[t._v("在上面的代码中可以看到 foo 接受了一个字符串和一个数值当作参数，其中在 foo 中将 str 传入 eval()函数中，所以此时接受到的字符串"),a("code",[t._v("var a = 1")]),t._v("就像是书写时就存在的一样，所以当要输出 a 的时候就不会去使用外面的"),a("code",[t._v("a = 2")]),t._v("的值，而是使用"),a("code",[t._v("a = 1")]),t._v("(因为是从内向外找的，当找的第一个匹配的标识符就停止)。")]),t._v(" "),a("p",[t._v("但是这种办法再严格模式下是无法使用的，而且会有性能上的问题")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'var a  = 1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2 3")]),t._v("\n")])])]),a("p",[t._v("可以看到上面的 a 是直接输出的是 2 3，因为在严格模式下 eval 有自己的作用域，意味着其中的声明是无法去修改所在的作用域的。")]),t._v(" "),a("p",[t._v("性能上也是会有损耗的，因为 JavaScript 引擎会在编译阶段进行数项的优化。其中有些优化依赖于能够根据代码的词法进行静态分析，并且预先的确定代码的位置，以至于在之后的运行过程中快速找到标识符，但是如果使用的 eval，编译器就会无法知道 eval 会接受什么代码，这些代码会如何修改作用域，所以这时候优化是没有意义的，所以最简单的做法就是完全不做任何优化。")]),t._v(" "),a("p",[t._v("还有一些欺骗词法作用域的办法也有很多，例如 with，setTimeout(…)和 setInterval(…)的第一个参数，这个第一个参数可以是字符串，也是可以被解释为书写代码阶段就存在的，但是这个功能已经过时，现在不提倡。")]),t._v(" "),a("p",[t._v("在理解了词法作用域之后就可以更好的去理解闭包了。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/6880031383616487437",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 中的词法作用域详解"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=p.exports}}]);