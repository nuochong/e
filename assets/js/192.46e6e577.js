(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{1833:function(e,t,n){e.exports=function(){"use strict";var e={name:"VueAnnouncer",data:function(){return{content:""}},created:function(){this.$announcer.data=this.$data}},t=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"announcer",attrs:{id:"announcer","aria-live":"polite","aria-atomic":"true"},domProps:{textContent:e._s(e.content)}})};function n(){var e=document.head||document.getElementsByTagName("head")[0],t=n.styles||(n.styles={}),o="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());return function(n,a){if(!document.querySelector('style[data-vue-ssr-id~="'+n+'"]')){var i=o?a.media||"default":n,r=t[i]||(t[i]={ids:[],parts:[],element:void 0});if(!r.ids.includes(n)){var c=a.source,s=r.ids.length;if(r.ids.push(n),a.map&&(c+="\n/*# sourceURL="+a.map.sources[0]+" */",c+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a.map))))+" */"),o&&(r.element=r.element||document.querySelector("style[data-group="+i+"]")),!r.element){var d=r.element=document.createElement("style");d.type="text/css",a.media&&d.setAttribute("media",a.media),o&&(d.setAttribute("data-group",i),d.setAttribute("data-next-index","0")),e.appendChild(d)}if(o&&(s=parseInt(r.element.getAttribute("data-next-index")),r.element.setAttribute("data-next-index",s+1)),r.element.styleSheet)r.parts.push(c),r.element.styleSheet.cssText=r.parts.filter(Boolean).join("\n");else{var u=document.createTextNode(c),l=r.element.childNodes;l[s]&&r.element.removeChild(l[s]),l.length?r.element.insertBefore(u,l[s]):r.element.appendChild(u)}}}}}var o=function(e,t,n,o,a,i,r,c){var s,d=n||{};if(d.render||(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,a&&(d.functional=!0)),d._scopeId=o,t&&(s=function(e){t.call(this,r(e))}),void 0!==s)if(d.functional){var u=d.render;d.render=function(e,t){return s.call(t),u(e,t)}}else{var l=d.beforeCreate;d.beforeCreate=l?[].concat(l,s):[s]}return d}(void 0!==t?{render:t,staticRenderFns:[]}:{},(function(e){e&&e("data-v-d2ab3a3c_0",{source:"\n.announcer[data-v-d2ab3a3c]{position:absolute;left:-10000px;top:auto;width:1px;height:1px;overflow:hidden\n}",map:void 0,media:void 0})}),void 0===e?{}:e,"data-v-d2ab3a3c",!1,0,void 0!==n?n:function(){},"undefined"!=typeof __vue_create_injector_ssr__&&__vue_create_injector_ssr__),a=function(e){requestAnimationFrame((function(){requestAnimationFrame(e)}))},i=function(e){if(!e||"function"!=typeof e)return new Promise((function(e){a(e)}));a(e)},r={install:function(e){e.$forceNextTick=i,e.prototype.$forceNextTick=i}},c={complementRoute:"has loaded"};function s(e,t,n){void 0===t&&(t={}),void 0===n&&(n=null),t=Object.assign({},c,t),e.use(r),e.component("VueAnnouncer",o),e.prototype.$announcer={set:function(t){var n=this;this.data&&(this.data.content="",e.$forceNextTick((function(){n.data.content=t})))},setComplementRoute:function(e){"string"==typeof e&&(t.complementRoute=e)},data:null},n&&n.afterEach((function(n){e.prototype.$announcer.set((n.meta.announcer||document.title.trim())+" "+t.complementRoute)}))}return"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(s),s}()}}]);