(window.webpackJsonp=window.webpackJsonp||[]).push([[18,43],{2e3:function(t,e,a){},2009:function(t,e,a){"use strict";a.r(e);var i={props:{autoplay:{type:Boolean,default:!1},theme:{type:String,default:"#3eaf7c"},loop:{type:Boolean,default:!1},lang:{type:String,default:"zh-CN"},screenshot:{type:Boolean,default:!1},hotkey:{type:Boolean,default:!0},preload:{type:String,default:"auto"},contextmenu:{type:Array},logo:{type:String},video:{type:Object}},data:()=>({dp:null,DPlayer:{}}),mounted(){this.DPlayer=a(1998),this.init()},methods:{init:function(){const t=this.dp=new this.DPlayer({element:this.$el,autoplay:this.autoplay,theme:this.theme,loop:this.loop,lang:this.lang,screenshot:this.screenshot,hotkey:this.hotkey,preload:this.preload,contextmenu:this.contextmenu,logo:this.logo,video:{pic:this.video.pic,defaultQuality:this.video.defaultQuality,quality:[{url:this.video.quality[0].url,name:this.video.quality[0].name},{url:this.video.quality[1].url,name:this.video.quality[1].name}],thumbnails:this.video.thumbnails,type:this.video.type}});t.on("play",()=>{this.$emit("play")}),t.on("quality_start",()=>{this.$emit("quality_start"),t.on("play")}),t.on("pause",()=>{this.$emit("pause")}),t.on("canplay",()=>{this.$emit("canplay")}),t.on("playing",()=>{this.$emit("playing")}),t.on("ended",()=>{this.$emit("ended")}),t.on("error",()=>{this.$emit("error")})}}},n=a(3),o=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"dplayer"})}),[],!1,null,"fa40c226",null);e.default=o.exports},2044:function(t,e,a){"use strict";a(2e3)},2085:function(t,e,a){"use strict";a.r(e);var i=a(2009),n=a(878),o=a.n(n),l={name:"MePlayer",data:()=>({video:{quality:[{name:"360P",url:"http://static.smartisanos.cn/common/video/t1-ui.mp4"},{name:"720P",url:"http://static.smartisanos.cn/common/video/t1-ui.mp4"}],pic:"http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg",defaultQuality:0,thumbnails:o.a,type:"normal"},lang:"zh-CN",logo:o.a,autoplay:!1,player:null,contextmenu:[{text:"nativescript-vue-examples",link:"http://luzhaoyang.com"},{text:"nativescript-vue-examples",link:"http://luzhaoyang.com"}]}),components:{"d-player":i.default},methods:{play(){}},mounted(){}},s=(a(2044),a(3)),u=Object(s.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"player-container"},[e("d-player",{ref:"player",attrs:{logo:this.logo,lang:this.lang,video:this.video,contextmenu:this.contextmenu},on:{play:this.play}})],1)}),[],!1,null,"066e8678",null);e.default=u.exports}}]);