(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1423:function(t,e,a){},1460:function(t,e,a){"use strict";var n=a(1423);a.n(n).a},1526:function(t,e,a){"use strict";a.r(e);var n=a(49),s={name:"Newsletter",components:{KtInput:a(409).a,KtButton:n.default},props:{action:{type:String}},data:()=>({email:"",_action:"",id:(new Date).getTime()}),created(){this._action=this.action||this.$themeLocaleConfig.newsletter.action}},i=(a(1460),a(3)),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"newsletter not-black"},[a("span",{staticClass:"meta-text meta-text--primary not-black"},[t._v(t._s(t.$tn("stay_in")))]),t._v(" "),a("h2",{staticClass:"newsletter__title not-black"},[t._v(t._s(t.$tn("news_title")))]),t._v(" "),a("form",{staticClass:"newsletter__form not-black",attrs:{method:"post",action:t._action}},[a("label",{staticClass:"newsletter__label not-black",attrs:{for:"email_news-"+t.id}},[a("kt-input",{staticClass:"newsletter__input",attrs:{type:"email",name:"EMAIL",id:"email_news-"+t.id,required:"",autocomplete:"off","aria-label":t.$tn("ph_email"),value:t.email,placeholder:t.$tn("ph_email")},on:{"update:value":function(e){t.email=e}}})],1),t._v(" "),a("kt-button",{staticClass:"newsletter__button txt-upper",attrs:{type:"submit",color:"primary"}},[t._v("\n        "+t._s(t.$tn("subscribe"))+"\n      ")])],1)])}),[],!1,null,null,null);e.default=l.exports}}]);