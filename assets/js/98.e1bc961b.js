(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{810:function(e,t,a){"use strict";a.r(t);var r=a(0),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("最近在某笔记软件用 markdown 写数学公式时候发现，在 CSDN 里常用的敲公式方法在别的地方并不能显示(´；ω；‘)。查了一堆乱七八糟的表示方法之后发现了在 LATEX、KATEX 里同一个符号表示方法不太一样，所以闲着无聊扒了一下 LATEX、KATEX、MathJax 等东西。")]),e._v(" "),a("p",[e._v("本文简单整理了 TeX KeTeX MathJax LeTeX 等各种到底是什么，顺便整理了一些相关文档和 LATEX、KATEX 的符号表示方法（Supported Functions Tables / symbol tables）")]),e._v(" "),a("h2",{attrs:{id:"相关文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文档"}},[e._v("#")]),e._v(" 相关文档")]),e._v(" "),a("ul",[a("li",[e._v("MathJax 文档 2.7 英文版（截止 2019.3.8 最新版官方文档）："),a("a",{attrs:{href:"https://docs.mathjax.org/en/latest/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MathJax Documentation"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("MathJax 文档 2.0 中文版："),a("a",{attrs:{href:"https://mathjax-chinese-doc.readthedocs.io/en/latest/start.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("MathJax Documentation"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("KaTeX 官方文档："),a("a",{attrs:{href:"https://katex.org/docs/api.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("KaTeX API"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("KaTeX 支持的 TeX 函数/数学符号列表："),a("a",{attrs:{href:"https://katex.org/docs/support_table.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("按字母顺序排"),a("OutboundLink")],1),e._v("、"),a("a",{attrs:{href:"https://katex.org/docs/supported.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("按类型排"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("LaTeX 的函数/数学符号列表："),a("a",{attrs:{href:"http://web.ift.uib.no/Teori/KURS/WRK/TeX/symALL.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("LaTeX Math Symbols"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("备注")]),e._v(" "),a("p",[e._v("感觉 LATEX 表示方法比 KATEX 简单，试了挺多可以写 markdown 的地方，一般来说不管用哪种符号表示都能显示。( ‘-ωก̀ )")])]),e._v(" "),a("h2",{attrs:{id:"ketex-和-mathjax-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ketex-和-mathjax-的关系"}},[e._v("#")]),e._v(" KeTeX 和 MathJax 的关系")]),e._v(" "),a("p",[e._v("我以为 LATEX、KATEX 是同样的东西，后来自己深究了一下，发现不是，经过我查证：KATEX、MathJaxMathJaxMathJax 是等价的东西。")]),e._v(" "),a("p",[e._v("KATEX 和 MathJaxMathJaxMathJax 是 JavaScript 的数学公式渲染的类库：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.mathjax.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("MatJax"),a("OutboundLink")],1),e._v("： 适用于所有浏览器的数学的 javascript 显示引擎。Mathjax 联盟是美国数学学会（AMS）和工业和应用数学学会（SIAM）的合资企业，旨在推动网络上的数学和科学内容的发展。")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://katex.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("KaTex"),a("OutboundLink")],1),e._v(": 最快的网络数学排版库，由 Khan Academy 开发")])]),e._v(" "),a("h2",{attrs:{id:"tex、latex、miktex、fptex、tetex、ctex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tex、latex、miktex、fptex、tetex、ctex"}},[e._v("#")]),e._v(" TeX、LaTeX、MiKTeX、fpTeX、teTeX、CTeX")]),e._v(" "),a("ul",[a("li",[e._v("TEX 是由著名的计算机科学家 Donald E. Knuth 发明的排版系统")]),e._v(" "),a("li",[e._v("LATEX 是一种基于 ΤΕΧ 的排版系统，由美国计算机学家 Leslie Lamport 在 20 世纪 80 年代初期开发。")])]),e._v(" "),a("h3",{attrs:{id:"tex-和-latex-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tex-和-latex-的关系"}},[e._v("#")]),e._v(" TeX 和 LaTeX 的关系")]),e._v(" "),a("p",[e._v("LaTeXLaTeX 是当今世界上最流行和使用最为广泛的 TeX 格式，是建立在 TeX 基础上的宏语言。 也就是说，每一个 LaTeX 命令实际上最后都会被转换解释成几个甚至上百个 TeX 命令。但是，普通用户可以无需知道这中间的复杂联系。就像编程的时候如果使用一些已经编译好的函数库和模板可以使我们仅仅用几个命令就实现很多功能一样，LaTeX 根据人们排版文章的习惯，定义了许多命令和模板，通过这些命令和模板，我们可以很快的得到漂亮的排版结果。")]),e._v(" "),a("h3",{attrs:{id:"miktex、fptex、tetex、ctex-的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miktex、fptex、tetex、ctex-的关系"}},[e._v("#")]),e._v(" MiKTeX、fpTeX、teTeX、CTeX 的关系")]),e._v(" "),a("p",[e._v("TeX 在不同的硬件和操作系统上有不同的实现版本。这就像 C 语言，在不同的操作系统中有不同的编译系统，例如 Linux 下的 gcc，Windows 下的 Visual C++ 等。有时，一种操作系统里也会有好几种的 TeX 系统。目前常见的 Unix/Linux 下的 TeX 系统是 Texlive，Windows 下则有 MiKTeX 和 fpTeX。CTeX 指的是 CTeX 中文套装的简称，是把 MiKTeX 和一些常用的相关工具，如 GSview，WinEdt 等包装在一起制作的一个简易安装程序，并对其中的中文支持部分进行了配置，使得安装后马上就可以使用中文。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/qq_36667170/article/details/88360942",target:"_blank",rel:"noopener noreferrer"}},[e._v("理清 TeX、KeTeX、MathJax、LeTeX……的关系及符号表示集合"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);