(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1715:function(t,e,n){},1756:function(t,e,n){"use strict";n(1715)},1823:function(t,e,n){"use strict";n.r(e);var s={name:"TableContents",props:{headers:{type:Array,required:!0}},methods:{scrollToHeader(t){const e=document.getElementById(t);let n=window.scrollY,s=setInterval(()=>{window.requestAnimationFrame(()=>{window.scrollTo({top:n})}),n+=50,n>=e.offsetTop-40&&clearInterval(s)},1)}}},l=(n(1756),n(3)),a=Object(l.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-contents"},[n("h3",{staticClass:"table-contents__title",attrs:{id:"table-of-content"}},[t._v(t._s(t.$tn("table_content")))]),t._v(" "),n("nav",[n("ol",{staticClass:"table-contents__list"},t._l(t.headers,(function(e){return e.level<3?n("li",{key:e.slug,staticClass:"table-contents__item"},[n("a",{staticClass:"table-contents__link",attrs:{href:"#"+e.slug,title:e.title},on:{click:function(n){return n.preventDefault(),t.scrollToHeader(""+e.slug)}}},[n("span",[t._v(t._s(e.title))])])]):t._e()})),0)])])}),[],!1,null,null,null);e.default=a.exports}}]);