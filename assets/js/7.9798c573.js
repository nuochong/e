(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1601:function(t,e,i){"use strict";e.a={props:{includeLevel:{type:Array,required:!1,default:()=>[2,3]}},data:()=>({newTreeArray:[]}),watch:{$lang(){this.newTreeArray=this.getHeaders()}},mounted(){this.newTreeArray=this.getHeaders()},methods:{getHeaders(){if(this.$page&&this.$page.headers){const t=this.includeLevel[0],e=this.includeLevel[1],i=(s,n=t)=>{const l=[];for(let t=0;t!==s.length;){const a=s.slice(t+1).findIndex(t=>t.level===n),r=-1===a?s.length:a+t+1,o=s[t];if(o.level>=n&&o.level<=e){const a=s.slice(t+1,r),c=n<e&&a.length>0?i(a,n+1):null;l.push({...o,children:c})}t=r}return l};return i(this.$page.headers)}return null}}}},1749:function(t,e,i){},1791:function(t,e,i){"use strict";i(1749)},1861:function(t,e,i){"use strict";i.r(e);var s=i(1601),n=i(8),l={name:"TableContentsFixed",props:{headers:{type:Array,required:!0,default:()=>[]}},mixins:[s.a],data:()=>({juli:0,bottomjuli:0,gaodu:0,tempTitle:"h3 Heading",newTreeArrayActive:[],isFold:!1,isActivityFixed:!1,initClientWidth:!1}),watch:{$route(){""!=this.$route.hash&&this.isActivityFixed&&0!=this.headers.length&&this.initData()},isActivityFixed(t,e){t&&0!=this.headers.length&&this.initData()}},created(){"undefined"!=typeof document&&0!=this.headers.length&&this.listenerFunction()},mounted(){this.initFold(),n.a.$on("isActivityFixed",t=>{this.isActivityFixed=!t}),window.innerWidth>=1366&&(this.isActivityFixed=!0)},beforeDestroy(){0!=this.headers.length&&document.removeEventListener("scroll",this.handleScroll)},methods:{initFold(){this.isFold=this.$themeLocaleConfig.tableContentIsFold},initData(){this.tempTitle=decodeURI(this.$route.hash),this.newTreeArrayActive=[...this.newTreeArray],this.addData(this.newTreeArrayActive)},addData(t,e=""){let i=t.length,s=0;for(let i in t){let n=e+""+(parseInt(i)+1);if(this.tempTitle=="#"+t[i].slug?t[i].isActive=!0:(n+=".",t[i].isActive=!1,s++),t[i].children){this.addData(t[i].children,n)?t[i].isActive=!0:t[i].isActive||(t[i].isActive=!1)}}return i!=s||0==i},getNum(){this.juli=document.querySelector("#shangfang").offsetTop+document.querySelector("#zhongjian").offsetTop+50,this.bottomjuli=document.querySelector("#dibujuli").offsetTop,this.gaodu=document.querySelector(".table-contents-fixed").clientHeight},listenerFunction(t){document.addEventListener("scroll",this.handleScroll)},handleScroll(){let t=window.pageYOffset;this.getNum();let e=document.querySelector(".table-contents-fixed"),i=this.bottomjuli-this.gaodu;t<this.juli?e.setAttribute("style",""):t<i?e.setAttribute("style","position: fixed;top: 50px;"):t>=i&&e.setAttribute("style","position: absolute;bottom: 0;")},scrollToHeader(t){const e=document.getElementById(t);let i=window.scrollY,s=setInterval(()=>{window.requestAnimationFrame(()=>{window.scrollTo({top:i})}),i+=50,i>=e.offsetTop-40&&clearInterval(s)},1)}}},a=(i(1791),i(3)),r=Object(a.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return 0!=t.headers.length?i("div",{staticClass:"table-contents-fixed"},[i("h3",{staticClass:"table-contents__title",attrs:{id:"table-of-content"}},[t._v(t._s(t.$tn("table_content_fixed")))]),t._v(" "),i("nav",[i("ol",{staticClass:"table-contents__list"},t._l(t.newTreeArrayActive,(function(e){return i("li",{key:e.slug,staticClass:"table-contents__item"},[i("a",{staticClass:"table-contents__link",class:{active:e.isActive},attrs:{href:"#"+e.slug,title:e.title}},[i("span",[t._v(t._s(e.title))])]),t._v(" "),e.children?i("ol",{directives:[{name:"show",rawName:"v-show",value:e.isActive||!t.isFold,expression:"header.isActive || !isFold"}],staticClass:"table-contents__list"},t._l(e.children,(function(e,s){return i("li",{key:s,staticClass:"table-contents__item"},[i("a",{staticClass:"table-contents__link",class:{active:e.isActive},attrs:{href:"#"+e.slug,title:e.slug}},[i("span",[t._v(t._s(e.title||e.slug))])])])})),0):t._e()])})),0)])]):t._e()}),[],!1,null,null,null);e.default=r.exports}}]);