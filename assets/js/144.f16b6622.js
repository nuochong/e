(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{2090:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("figure",[n("img",{attrs:{src:a(533),alt:""}}),n("figcaption",[t._v("章节配图")])]),t._v(" "),n("h2",{attrs:{id:"前言"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),n("p",[t._v("团队多人协同开发项目中困恼团队管理一个很大的问题是：无可避免地会出现每个开发者编码习惯不同、代码风格迥异，为了代码高可用、可维护性， 如何从项目管理上尽量统一和规范代码呢？")]),t._v(" "),n("blockquote",[n("p",[n("input",{attrs:{type:"checkbox",id:"cbx_8",checked:"true",disabled:"true"}}),n("label",{attrs:{for:"cbx_8"}},[t._v("文档约定 - 谆谆教导，自求多福？")])])]),t._v(" "),n("blockquote",[n("p",[n("input",{attrs:{type:"checkbox",id:"cbx_9",checked:"true",disabled:"true"}}),n("label",{attrs:{for:"cbx_9"}},[t._v("经常性 CodeRevice - 苦口婆心，耳提面命？")])])]),t._v(" "),n("p",[t._v("显然这种无法实时反馈、延迟解决的方式会造成沟通成本高，往往最终结果还不太理想…\n理想的方式是在项目工程化层面 借助可灵活配置的工具，自动化 解决。")]),t._v(" "),n("p",[n("strong",[t._v("而于此对应的，")]),t._v("\n细心的你，如果仔细观察，会发现无论是开源项目还是成熟的团队项目，打开项目源码，你会发现根目录下出现了越来越多的配置文件，这是前端项目在快速演变、逐渐完善健壮的一种表现。而对于我们来说，傻傻分不清楚可不行。")]),t._v(" "),n("p",[t._v("今天，我们就来分析一下跟编码风格、代码规范相关的\n"),n("img",{attrs:{src:a(534),alt:""}}),t._v(" "),n("img",{attrs:{src:a(535),alt:""}}),t._v(" "),n("img",{attrs:{src:a(536),alt:""}})]),t._v(" "),n("p",[t._v("这几个常见配置功能。")]),t._v(" "),n("p",[t._v("借助于"),n("code",[t._v("EditorConfig")]),t._v("+"),n("code",[t._v("Prettier")]),t._v("+"),n("code",[t._v("ESLint")]),t._v(" 的组合，项目中通过统一约定配置，可以在团队成员在代码开发过程中就检查、约束、美化代码，统一编码风格；且可以省去很多的沟通成本，提前暴露代码缺陷，减少后期二次修改代码的风险；")]),t._v(" "),n("p",[n("strong",[t._v("简单归纳：")])]),t._v(" "),n("ul",[n("li",[t._v("EditorConfig: 跨编辑器和 IDE 编写代码，保持一致的简单编码风格；")]),t._v(" "),n("li",[t._v("Prettier: 专注于代码格式化的工具，美化代码；")]),t._v(" "),n("li",[t._v("ESLint：作代码质量检测、编码风格约束等；")])]),t._v(" "),n("p",[t._v("当然，他们各有适用范围，接下来，我们就来一探究竟，重点关注 ESLint。")]),t._v(" "),n("h2",{attrs:{id:"editorconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#editorconfig"}},[t._v("#")]),t._v(" EditorConfig")]),t._v(" "),n("p",[t._v("EditorConfig 有助于从事同一项目的多个开发人员在跨多个编辑器和 IDE 使用时保持一致的编码风格。")]),t._v(" "),n("blockquote",[n("p",[t._v("EditorConfig 项目包含一个用于定义编码样式的文件格式和一个文本编辑器插件集合，这些文本编辑器插件使编辑器可以读取文件格式并遵循定义的样式。")])]),t._v(" "),n("h3",{attrs:{id:"解读"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解读"}},[t._v("#")]),t._v(" 解读")]),t._v(" "),n("h4",{attrs:{id:"_1-依赖编辑器-ide-的支持"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-依赖编辑器-ide-的支持"}},[t._v("#")]),t._v(" 1.依赖编辑器 IDE 的支持")]),t._v(" "),n("p",[t._v("某些编辑器已默认集成对 EditorConfig 的支持，比如常用的：Webstorm、IntelliJ IDEA 等；\n而另一些编辑器则需要借助安装对应的插件来支持：比如 Visual Studio Code、Atom 等；")]),t._v(" "),n("p",[t._v("我们常用的 Visual Studio Code 安装的必装插件：\n"),n("img",{attrs:{src:a(537),alt:""}})]),t._v(" "),n("h4",{attrs:{id:"_2-支持多种文件格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-支持多种文件格式"}},[t._v("#")]),t._v(" 2.支持多种文件格式")]),t._v(" "),n("p",[t._v("编辑器读取到文件格式会匹配并遵循配置文件定义的规则；")]),t._v(" "),n("h4",{attrs:{id:"_3-就近原则"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-就近原则"}},[t._v("#")]),t._v(" 3.就近原则")]),t._v(" "),n("p",[t._v("打开文件时，EditorConfig 插件会在打开的文件的目录中以及"),n("code",[t._v("每个父目录中查找名为")]),t._v(".editorconfig"),n("code",[t._v("的文件。如果到达根文件路径或找到root = true的EditorConfig文件，将停止对")]),t._v(".editorconfig 文件的搜索。\n离文件最近的配置规则生效，优先级更高；一般在根目录设置一个配置文件即可。")]),t._v(" "),n("h4",{attrs:{id:"_4-配置文件-editorconfig"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置文件-editorconfig"}},[t._v("#")]),t._v(" 4.配置文件 "),n("code",[t._v(".editorconfig")])]),t._v(" "),n("p",[t._v("定义规则配置，来避免常见的代码格式不一致和丑陋的 diffs。例如常见配置项：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# http://editorconfig.org")]),t._v("\nroot "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 说明")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置文件编码为 UTF-8；")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 用两个空格代替制表符；")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 在保存时删除尾部的空白字符；")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 在文件结尾添加一个空白行；")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nindent_style "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" space\nindent_size "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nend_of_line "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lf\ncharset "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" utf-8\ntrim_trailing_whitespace "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\ninsert_final_newline "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("*.md"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntrim_trailing_whitespace "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Makefile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nindent_style "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" tab\n")])])]),n("p",[t._v("更多内容可以访问官网查看。")]),t._v(" "),n("p",[t._v("当然，我们看到 EditorConfig 包含的内容比较少，主要是配置我们的编辑器，编写代码时的简单规则，不足以满足项目更多需求；")]),t._v(" "),n("h2",{attrs:{id:"prettier"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prettier"}},[t._v("#")]),t._v(" Prettier")]),t._v(" "),n("p",[t._v("Prettier 是一个诞生于 2016 年就迅速流行起来的专注于代码格式化的工具。出道即巅峰啊-.-\n"),n("code",[t._v("Prettier")]),t._v("只关注格式化，并不具有 lint 检查语法等能力。它通过解析代码并匹配自己的一套规则，来强制执行一致的代码展示格式。\n它在美化代码方面有很大的优势，配合 ESLint 可以对 ESLint 格式化基础上做一个很好的补充。")]),t._v(" "),n("h3",{attrs:{id:"那么如何使用呢"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#那么如何使用呢"}},[t._v("#")]),t._v(" 那么如何使用呢？")]),t._v(" "),n("p",[t._v("单独使用，配合编辑器 IDE 作代码格式化；\n与 ESLint 等配合使用；在下文 ESLint 中详细谈，此处不予赘述；")]),t._v(" "),n("h4",{attrs:{id:"_1-单独使用-配合编辑器-ide-作代码格式化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-单独使用-配合编辑器-ide-作代码格式化"}},[t._v("#")]),t._v(" 1. 单独使用，配合编辑器 IDE 作代码格式化")]),t._v(" "),n("p",[t._v("以 VSCode 为例，首先安装 Prettier 插件。\n"),n("img",{attrs:{src:a(538),alt:""}}),t._v("\nVSCode 内置的代码格式化工具可以指定为由 Prettier 接管，此时右下角会显示为 Prettier。可以自行配置格式化触发机制：换行时格式化、保存文件时格式化、还是自行快捷键触发；")]),t._v(" "),n("p",[t._v("本人的使用习惯是用快捷键手动触发格式化。")]),t._v(" "),n("p",[t._v("当在编辑器里格式化未生效时，可以在"),n("code",[t._v(".settings.json")]),t._v("里检查对应文件格式指定的格式化程序并调整就可以：\n"),n("img",{attrs:{src:a(539),alt:""}}),t._v("\n这样在 VSCode 编辑器里，触发文件格式化时就能根据配置自动美化格式代码；")]),t._v(" "),n("p",[n("strong",[t._v("配置项：")]),t._v("\n可以在 VSCode "),n("code",[t._v("首选项-设置-扩展")]),t._v("或"),n("code",[t._v(".settings.json")]),t._v("中更改通用配置；\n当然还可以在具体项目根目录设置"),n("code",[t._v(".prettierrc")]),t._v("单独配置；")]),t._v(" "),n("p",[t._v("比如以下一些配置：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('{\n  // 设置强制单引号\n  "singleQuote": true,\n  // 为多行数组的非末尾行添加逗号 es5的对象，数组等\n  "trailingComma": "es5",\n  // 每行最大宽度 100\n  "printWidth": 100,\n  // 设置语句末尾不加分号\n  "semi": false,\n  // jsx中使用单引号\n  "jsxSingleQuote": true,\n}\n')])])]),n("p",[t._v("最后格式化的生效策略同样是"),n("strong",[t._v("就近原则")]),t._v("，一步步匹配目标文件最近父目录的配置文件，越近优先级越高。")]),t._v(" "),n("h2",{attrs:{id:"eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint"}},[t._v("#")]),t._v(" ESLint")]),t._v(" "),n("p",[t._v("ESLint 是一个在 JavaScript 代码中通过规则模式匹配作代码识别和报告的插件化的检测工具，它的目的是保证代码规范的一致性和及时发现代码问题、提前避免错误发生。\nESLint 的关注点是代码质量，检查代码风格并且会提示不符合风格规范的代码。除此之外 ESLint 也具有一部分代码格式化的功能。")]),t._v(" "),n("p",[t._v("我们跟着 ESLint 官网的说明，来理解 ESLint。")]),t._v(" "),n("h3",{attrs:{id:"lint-发展历程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#lint-发展历程"}},[t._v("#")]),t._v(" Lint 发展历程")]),t._v(" "),n("blockquote",[n("p",[t._v("ESLint 最初是由 Nicholas C. Zakas ( JavaScript 高级程序设计 作者)于 2013 年 6 月创建的开源项目。它的目标是提供一个插件化的 javascript 代码检测工具。")])]),t._v(" "),n("p",[t._v("JavaScript 发展历程中出现的 Lint 工具：JSLint->JSHint->ESLint/TSLint；")]),t._v(" "),n("ul",[n("li",[t._v("JSLint 是最早出现的 Lint 工具，不支持灵活拓展及配置，必须接受它所有规则；")]),t._v(" "),n("li",[t._v("JSHint 在 JSLint 的基础上提供了一定的配置项，给了开发者较大的自由，但无法添加自定义规则；")]),t._v(" "),n("li",[t._v("Zakas 创建 ESLint 的初衷就是觉得当时的 JSHint 存在局限性，无法添加自定义规则。")]),t._v(" "),n("li",[t._v("ES6 的出现后则让 ESLint 迅速大火。\n因为 ES6 新增了很多语法，JSHint 短期内无法提供支持，而 ESLint 只需要有合适的解析器以及拓展校验规则 就能够进行 Lint 检查。此时 babel 就为兼容 ESLint 开发了 babel-eslint 解析器，提供支持的同时也让 ESLint 成为最快支持 ES6 语法的 Lint 工具。")])]),t._v(" "),n("p",[n("strong",[t._v("关于 TSLint(已停止维护)")]),t._v("\n使用过 TypeScript 的童鞋对于 TSLint 应该不会陌生，它是由 TypeScript 团队推出并维护的。")]),t._v(" "),n("p",[t._v("但自 2019 年 1 月起，根据 TSLint 的官方声明，TSLint 正在慢慢被废弃，并会逐步迁移到 ESLint 作为代码检查的工具。\n至于停止维护的原因：一是 ESLint 社区更活跃、越来越完善，且社区对 ESLint 的拥护声浪越来越高，相反 TSLint 则完善度不够；二是在持续迭代、支持新特性的过程中发现 TSLint 的规则运作方式存在架构性的性能问题，相反的 ESLint 则具有更高效能的架构。")]),t._v(" "),n("p",[t._v("不过不得不感慨一句：即使官方已声明停止更新很长时间了，你会发现还是有很多 TypeScript 项目采用 TSLint 作为代码检查的工具，未做迁移。\n如果你的项目还在使用 TSLint，为了项目的长期维护性和获得更好的 ts 代码检查使用体验，尽快迁移至 ESLint；")]),t._v(" "),n("p",[t._v("下图为 JSHint、TSLint、ESLint、Prettier 的 Npm 包下载量对比图：\n"),n("img",{attrs:{src:a(540),alt:""}})]),t._v(" "),n("h3",{attrs:{id:"那么-eslint-出现的意义是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#那么-eslint-出现的意义是什么"}},[t._v("#")]),t._v(" 那么 ESLint 出现的意义是什么？")]),t._v(" "),n("blockquote",[n("p",[t._v("ESLint 官网的说明：代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。")])]),t._v(" "),n("p",[t._v("JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。")]),t._v(" "),n("p",[t._v("与 Java 等编程语言不同，JavaScript 作为弱类型的动态语言，因为缺少编译阶段，有些本可以在编译过程中发现的错误，只能等到运行时才发现，这给我们调试和提前发现隐藏问题增加了一些难度，而 Lint 工具相当于为 js 增加了编译过程，在代码部署运行前进行静态分析，找到出错的地方和不规范的代码。")]),t._v(" "),n("p",[t._v("那么 TypeScript 已经能够在编译阶段检查出很多问题了，为什么还需要 Lint 工具代码检查呢？\n因为 TypeScript 关注的重心是类型的检查，而不是代码风格。")]),t._v(" "),n("p",[n("strong",[t._v("总结一下 ESLint 的作用及优势：")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("检查语法错误，避免低级 bug；")]),t._v(" "),n("blockquote",[n("p",[t._v("比如：api 语法错误、使用了未定义的变量、修改 const 变量")])])]),t._v(" "),n("li",[n("p",[t._v("统一团队代码风格")]),t._v(" "),n("blockquote",[n("p",[t._v("比如：使用 tab 还是空格，使用单引号还是双引号等")])])]),t._v(" "),n("li",[n("p",[t._v("确保代码遵循最佳实践")]),t._v(" "),n("blockquote",[n("p",[t._v("比如：可以借助 eslint-config-standard 配置包扩展社区中流行的最佳实践的风格指南。")])])])]),t._v(" "),n("p",[t._v("这样就能"),n("strong",[t._v("极大提高项目中多人协作开发时的效率、代码的可读性以及可维护性。")])]),t._v(" "),n("h3",{attrs:{id:"eslint-特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint-特点"}},[t._v("#")]),t._v(" ESLint 特点")]),t._v(" "),n("h4",{attrs:{id:"一、eslint-的所有规则都被设计成可插拔的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、eslint-的所有规则都被设计成可插拔的"}},[t._v("#")]),t._v(" 一、ESLint 的所有规则都被设计成可插拔的")]),t._v(" "),n("p",[t._v("每条校验规则都是独立的，可以单独开启或关闭（没有什么可以被认为“太重要所以不能关闭”），还可以将结果设置成警告或者错误。\n在规则编写时，每个规则都是单独的文件和对应的格式化方法。")]),t._v(" "),n("h4",{attrs:{id:"二、eslint-是完全可配置的"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、eslint-是完全可配置的"}},[t._v("#")]),t._v(" 二、ESLint 是完全可配置的")]),t._v(" "),n("p",[t._v("ESlint 被设计为完全可配置的，除了规则可插拔，还可以编写自定义规则、引入社区规则配置集、插件等，让 ESLint 更契合每个项目的具体需求情况；\n通过 "),n("code",[t._v("eslint-plugin-react")]),t._v(" "),n("strong",[t._v("配置")]),t._v("包扩展支持 React 语法；\n通过"),n("code",[t._v("@typescript-eslint/parser")]),t._v(" "),n("strong",[t._v("解析器")]),t._v("支持 typeScript 语法及校验等；")]),t._v(" "),n("h4",{attrs:{id:"三、eslint-使用-node-js-编写"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、eslint-使用-node-js-编写"}},[t._v("#")]),t._v(" 三、ESLint 使用 Node.js 编写")]),t._v(" "),n("p",[t._v("在前端项目中便于安装且有一个快速的运行环境；\n减轻了开发者编写自定义规则的门槛；")]),t._v(" "),n("h4",{attrs:{id:"四、eslint-解析时将源码先转换成-ast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、eslint-解析时将源码先转换成-ast"}},[t._v("#")]),t._v(" 四、ESLint 解析时将源码先转换成 AST")]),t._v(" "),n("p",[t._v("ESLint 使用 Esprima 将源代码解析成 AST 来分析代码中的模式，再通过匹配规则定义识别和报告搜集的代码信息。\n虽然多转换一层效率略微降低，好处是可以支持使用任意规则来检测 AST 是否符合预期，这使得 ESLint 高可扩展性。")]),t._v(" "),n("h3",{attrs:{id:"支持的配置文件格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#支持的配置文件格式"}},[t._v("#")]),t._v(" 支持的配置文件格式")]),t._v(" "),n("p",[t._v("ESLint 支持几种格式的配置文件：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("JavaScript")]),t._v(" - 使用 "),n("code",[t._v(".eslintrc.js")]),t._v(" 然后输出一个配置对象。")]),t._v(" "),n("li",[n("strong",[t._v("YAML")]),t._v(" - 使用 "),n("code",[t._v(".eslintrc.yaml")]),t._v(" 或 "),n("code",[t._v(".eslintrc.yml")]),t._v(" 去定义配置的结构。")]),t._v(" "),n("li",[n("strong",[t._v("JSON")]),t._v(" - 使用 "),n("code",[t._v(".eslintrc.json")]),t._v(" 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。")]),t._v(" "),n("li",[n("strong",[t._v("(弃用)")]),t._v(" - 使用 "),n("code",[t._v(".eslintrc")]),t._v("，可以使 JSON 也可以是 YAML。")]),t._v(" "),n("li",[n("strong",[t._v("package.json")]),t._v(" - 在 "),n("code",[t._v("package.json")]),t._v(" 里创建一个 "),n("code",[t._v("eslintConfig")]),t._v(" 属性，在那里定义你的配置。\n如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：")])]),t._v(" "),n("ol",[n("li",[n("code",[t._v(".eslintrc.js")])]),t._v(" "),n("li",[n("code",[t._v(".eslintrc.yaml")])]),t._v(" "),n("li",[n("code",[t._v(".eslintrc.yml")])]),t._v(" "),n("li",[n("code",[t._v(".eslintrc.json")])]),t._v(" "),n("li",[n("code",[t._v(".eslintrc")])]),t._v(" "),n("li",[n("code",[t._v("package.json")])])]),t._v(" "),n("p",[t._v("遇到项目内有多个层叠配置时，依然采用就近原则作为高优先级；")]),t._v(" "),n("h3",{attrs:{id:"配置文件说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置文件说明"}},[t._v("#")]),t._v(" 配置文件说明")]),t._v(" "),n("p",[n("strong",[t._v("Rules-启用的规则及其各自的错误级别")]),t._v("\nESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v('"off"')]),t._v(" 或 "),n("code",[t._v("0")]),t._v(" - 关闭规则")]),t._v(" "),n("li",[n("code",[t._v('"warn"')]),t._v(" 或 "),n("code",[t._v("1")]),t._v(" - 开启规则，使用警告级别的错误："),n("code",[t._v("warn")]),t._v(" (不会导致程序退出)")]),t._v(" "),n("li",[n("code",[t._v('"error"')]),t._v(" 或 "),n("code",[t._v("2")]),t._v(" - 开启规则，使用错误级别的错误："),n("code",[t._v("error")]),t._v(" (当被触发的时候，程序会退出)")])]),t._v(" "),n("p",[n("strong",[t._v("Globals-配置额外的全局变量")]),t._v("\n启用 ESLint 规则后，当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。\n而有时候，我们是需要在其他文件访问一些全局变量的，且保证能正常取到值。这时可以在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。")]),t._v(" "),n("ul",[n("li",[t._v("用注释指定全局变量，格式如下：")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* global var1, var2 */")]),t._v("\n")])])]),n("p",[t._v("这定义了两个全局变量，"),n("code",[t._v("var1")]),t._v(" 和 "),n("code",[t._v("var2")]),t._v("。如果你想选择性地指定这些全局变量可以被写入(而不是只被读取)，那么你可以用一个 “writable” 的标志来设置它们:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* global var1:writable, var2:writable */")]),t._v("\n")])])]),n("p",[t._v("配置文件中通过 globals 配置属性设置，对于每个全局变量键，将对应的值设置为 “writable” 以允许重写变量，或 “readonly” 不允许重写变量。例如：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"globals"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"var1"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"writable"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"var2"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"readonly"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Environments - 指定脚本的运行环境")]),t._v("\n每种环境都有一组特定的预定义全局变量。如 brower、node 环境变量、es6 环境变量等。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'env'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'browser'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commonjs'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es6'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Plugins - 第三方插件")]),t._v("\nESLint 支持使用第三方插件，先在项目中下载安装要引入的插件，配置文件中使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("plugins: ['react', 'babel'], // eslint-plugin-react eslint-plugin-babel\n")])])]),n("p",[n("strong",[t._v("Extends - 继承")]),t._v("\n一个配置文件可以被基础配置中的已启用的规则继承。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint:recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:prettier/recommended"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),n("h3",{attrs:{id:"配置代码注释方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#配置代码注释方式"}},[t._v("#")]),t._v(" 配置代码注释方式")]),t._v(" "),n("p",[t._v("有时候，我们需要在代码中忽略 ESLint 的某些规则检查，此时我们可以通过加入代码注释的方式解决：可以指定整个文件、某一行、某一区块开启/关闭 某些或全部规则检查；")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable */")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("禁用全部规则  放在文件顶部则整个文件范围都不检查\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable no-alert, no-console */")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("禁用某些规则\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint-disable-line     --当前行上禁用规则")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// eslint-disable-next-line --下一行上禁用规则")]),t._v("\n")])])]),n("p",[t._v("具体参考："),n("a",{attrs:{href:"http://eslint.bootcss.com/docs/user-g%E2%80%A6%EF%BC%9B",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint.bootcss.com/docs/user-g…；"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"使用-eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-eslint"}},[t._v("#")]),t._v(" 使用 ESLint")]),t._v(" "),n("h4",{attrs:{id:"安装-eslint"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装-eslint"}},[t._v("#")]),t._v(" 安装 ESLint")]),t._v(" "),n("p",[t._v("ESLint 可以安装在当前项目中或全局环境下，但因项目间存在的差异性，我们一般会将它安装在当前项目中。安装：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --save-dev eslint\n")])])]),n("h4",{attrs:{id:"安装插件和解析器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装插件和解析器"}},[t._v("#")]),t._v(" 安装插件和解析器")]),t._v(" "),n("p",[t._v("假如项目中使用了 TypeScript 和 React，则安装：")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("// 我们需要安装 @typescript-eslint/parser，替代掉默认的Espree解析器。\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --save-dev typescript @typescript-eslint/parser\n\n// 安装eslint-plugin-react配置包扩展支持React语法；安装@typescript-eslint/eslint-plugin提供额外的ts 语法的规则\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --save-dev eslint-plugin-react @typescript-eslint/eslint-plugin\n")])])]),n("p",[t._v("其他的插件和解析器请根据实际项目需要安装。")]),t._v(" "),n("h4",{attrs:{id:"创建配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件"}},[t._v("#")]),t._v(" 创建配置文件")]),t._v(" "),n("p",[t._v("我们在项目的根目录下创建一个 "),n("code",[t._v(".eslintrc.js")]),t._v("，内容如下：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  parser"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint/parser'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rules"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 禁止使用 var")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'no-var'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 优先使用 interface 而不是 type")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint/consistent-type-definitions'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'interface'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h4",{attrs:{id:"站在巨人的肩膀上使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#站在巨人的肩膀上使用"}},[t._v("#")]),t._v(" 站在巨人的肩膀上使用")]),t._v(" "),n("p",[t._v("前端社区中有很多比较好的规则集，我们要做的是站在巨人的肩膀上，基于已有规则集，构建适合自己及团队的规则配置。\n通过研究他人优秀的规则集，慢慢地构建自用或公司的规则配置；")]),t._v(" "),n("p",[t._v("本篇文章介绍的 ESLint 只是涉及的一些重要的概念及基本使用。ESLint 规则及配置包含了很多的内容，想要用的好，值得花精力自行好好研究。")]),t._v(" "),n("p",[n("strong",[t._v("Q&A")])]),t._v(" "),n("h5",{attrs:{id:"_1-如何方便地开始使用-eslint-而且尽量不改动以前的代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何方便地开始使用-eslint-而且尽量不改动以前的代码"}},[t._v("#")]),t._v(" 1. 如何方便地开始使用 ESLint，而且尽量不改动以前的代码？")]),t._v(" "),n("p",[t._v("如果你正在使用 GIt 做项目代码管理，那么则可以借助 husky + lint-staged + Prettier 在 Git 提交时，自动强制校验并格式化且修复代码，而且只处理自己本次改动提交的文件。")]),t._v(" "),n("p",[t._v("采用这种 pre-commit 阶段增量校验的模式，尽量避免对老旧代码的影响；这种方式可以稳健地逐步完善老项目；")]),t._v(" "),n("h5",{attrs:{id:"_2-如何解决-prettier-与-eslint-的配置冲突问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何解决-prettier-与-eslint-的配置冲突问题"}},[t._v("#")]),t._v(" 2. 如何解决 Prettier 与 ESLint 的配置冲突问题？")]),t._v(" "),n("p",[t._v("在代码格式化时采用 Perttier 规则，而我们代码校验使用的是 ESLint，如果同一个规则配置不一致，往往就会出现冲突问题；")]),t._v(" "),n("blockquote",[n("p",[t._v("比如：字符串单、双引号的配置，eslint fix 后把字符串变成单引号，再次编辑文件后，保存（Prettier）自动格式化后却又变成双引号，导致代码校验异常。")])]),t._v(" "),n("p",[n("strong",[t._v("解决方式一：要么修改 eslintrc，要么修改 prettierrc 配置，让它们配置保持一致；")])]),t._v(" "),n("p",[n("strong",[t._v("解决方式二：禁用 ESLint 中和 Prettier 配置有冲突的规则；再使用 Prettier 来替代 ESLint 的格式化功能；")]),t._v("\n安装"),n("code",[t._v("eslint-config-prettier")]),t._v("插件配置集，把其配置到 eslintrc 规则的尾部。执行 ESLint 命令，会禁用那些和 Prettier 配置有冲突的规则。\n安装"),n("code",[t._v("eslint-plugin-prettier")]),t._v("插件，先使用 Prettier 对代码进行格式化，再并对不一致的地方进行标记；\n这两个包配合使用，可以达到运行 "),n("code",[t._v("eslint \\--fix")]),t._v(" 时，采用 Prettier 的配置规则 来格式化文件。")]),t._v(" "),n("p",[t._v("具体配置及使用方式，请自行查阅探索；")]),t._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),n("p",[t._v("ESLint、Prettier、EditorConfig 的引入，需要牺牲一些开发人员的编码自由，来保证团队成员代码风格的一致性，进而提高代码的可读性、可维护性。使项目更好管理，成员之间合作更顺畅。")]),t._v(" "),n("p",[t._v("就算不从团队开发考虑，个人从中也能逐渐建立良好的开发规范，对于自己的成才也是长久的。")]),t._v(" "),n("p",[t._v("当然，我们也该清楚地认识到"),n("strong",[t._v("工具的局限性：")])]),t._v(" "),n("p",[n("strong",[t._v("一、清楚定位：")]),t._v("\nESLint 等解决的是团队开发规范的问题，并不能解决其他诸如编码能力、代码合理性等问题， 还属于工程化中比较弱的一环。")]),t._v(" "),n("blockquote",[n("p",[t._v("有时会遇到团队制定特别严格的规则校验，且在每次代码提交时，收集检查结果作为代码质量评估的重要指标。个人认为这种方式固然可以量化一部分代码质量考核问题 ，但形式主义过重。不过也是廖胜于无的做法。")])]),t._v(" "),n("ol",[n("li",[t._v("太过严格的规则，限制了代码的灵活性。每一个规则都应该是可被讨论，具体开启与否应该视团队而定；")]),t._v(" "),n("li",[t._v("语言或框架某个写法如果是被严禁使用的，那它就应该在源头被消灭；之所以存在肯定有一定的意义的；")]),t._v(" "),n("li",[t._v("ESLint 不是神药，最佳代码实践往往在于多多探索，持续更新；\n"),n("strong",[t._v("二、技术革新快速，之前认为的准则不一定就适用于当下，要保持持续调整的心态和跟进优化的行动力；")])])]),t._v(" "),n("p",[n("strong",[t._v("三、不要作严格代码规范的强迫症患者， 它并不是目的，只是一个让我们更方便管理项目，从复杂团队项目解脱出来的一个方式。")])]),t._v(" "),n("p",[t._v("更倾向的做法是："),n("strong",[t._v("不要完全依赖工具的规则校验，要让它们帮忙我们养成良好的编码习惯，培养代码质量意识，指引我们写出更优的代码，而不是依赖它")])]),t._v(" "),n("p",[n("a",{attrs:{href:"https://mp.weixin.qq.com/s/kJ14P828NHUdvA9JSoUQzg",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码规范之-理解 ESLint、Prettier、EditorConfig"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);