!function(t){function e(e){for(var i,r,s=e[0],d=e[1],c=e[2],l=0,v=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(t[i]=d[i]);for(u&&u(e);v.length;)v.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var d=a[s];0!==n[d]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={"app~1d2036f6":0},o=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://cdn.jsdelivr.net/gh/Rsplwe/akarin-static/";var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=d;o.push([0,"chunk-vendors~253ae210","chunk-vendors~7e5e8261","chunk-vendors~93acefaf","chunk-vendors~ccb0b3ac","chunk-vendors~b1de8ae2","chunk-vendors~85de788a","chunk-vendors~eb28bb5f","chunk-vendors~216d6f1c","chunk-vendors~33680eaf","chunk-vendors~54c10a32","chunk-vendors~e82227b4","chunk-vendors~ffdacff0","chunk-vendors~099fc0d6","chunk-vendors~4fcd5a78","chunk-vendors~7d359b94","chunk-vendors~77bf5e45","chunk-vendors~98b45fc0","chunk-vendors~cfef651e","chunk-vendors~bc261e74","chunk-vendors~ccfd30e1","chunk-vendors~fdc6512a","chunk-vendors~6ff199a4","chunk-vendors~3f797b31","chunk-vendors~b1f96ece","chunk-vendors~d2305125","app~d0ae3f07","app~50b71177","app~3d9b8e9e","app~3909c92f"]),a()}({"07b6":function(t,e,a){"use strict";var i=(a("99af"),a("4160"),a("c975"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("498a"),a("159b"),a("4795"),a("96cf"),a("1da1")),n=a("f844"),o=a.n(n),r=a("7123"),s=a("a161"),d=a("2ef0"),c=a.n(d),u={name:"DanmakuSearch",components:{AkarinEditText:a("f72b").a},data:function(){return{loadingStatus:!1,danmakuList:[],videoId:"",danmakuKeyword:"",pageList:[],currentCId:0,loadedVideoInfo:!1,danmakuLoading:!1}},methods:{formatTime:function(t){return Object(s.a)(t)},openUserSpace:function(t){return window.open("https://space.bilibili.com/".concat(t))},helpDialog:function(){this.$mdui.dialog({title:"食用说明",content:'\n        <div class="mdui-typo">\n<ul>\n<li>\n由于Hash冲突，可能会产生多个结果，排除掉0级和不存在的Uid就是正确的结果了\n</li>\n<li>\n影视、番剧和电影一般都是ep或者ss开头的\n</li>\n<li>\n在点击查询按钮的时候会自动把bv号转换成av号\n</li>\n\x3c!--<li> 还是不说这么多了。。。\n非常非常不建议以<b style="color: #fb7299">对线</b>的方式对他人进行<b style="color: #fb7299">攻击</b>…\n</li>--\x3e\n</ul>\n</div>\n        ',buttons:[{text:"确定"}]})},trackUser:function(t,e){var a=this;this.danmakuList[e].domStatus="f4dbdf21"===t?"any":"load",setTimeout((function(){new r.Crc32Mid(t).tracker().forEach((function(t){a.danmakuList[e].uid.push(t)})),a.danmakuList[e].domStatus="over"}),0)},resetAll:function(){this.loadingStatus||(this.pageList=[],this.danmakuList=[],this.videoId="",this.danmakuKeyword="",this.loadingStatus=!1,this.loadedVideoInfo=!1,this.danmakuLoading=!1,this.currentCId=0)},setLoadedVideoInfo:function(t){this.loadedVideoInfo=t},setLoadingStatus:function(t){this.loadingStatus=t},setDanmakuLoadingStatus:function(t){this.danmakuLoading=t},getDanmakuData:function(t,e){var a=this;return Object(i.a)(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=[],n.prev=1,n.next=4,a.axios.get("https://bilibili.red/bili-api/x/v2/dm/web/seg.so?type=1&oid=".concat(t,"&segment_index=").concat(e),{headers:{"content-type":"application/octet-stream"},responseType:"arraybuffer"});case 4:if(200!==(r=n.sent).status||0===r.data.length){n.next=9;break}return o.a.DmSegMobileReply.deserializeBinary(r.data).array[0].forEach((function(t){i.push(t)})),n.abrupt("return",i);case 9:return n.abrupt("return",[]);case 12:return n.prev=12,n.t0=n["catch"](1),n.abrupt("return",[]);case 15:case"end":return n.stop()}}),n,null,[[1,12]])})))()},getDanmakuList:function(t){var e=this;return Object(i.a)(regeneratorRuntime.mark((function a(){var i,n,o;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t!==e.currentCId){a.next=2;break}return a.abrupt("return");case 2:e.currentCId=t,e.danmakuList=[],e.setDanmakuLoadingStatus(!0),i=[],n=1;case 7:if(!(n>=1)){a.next=19;break}return a.next=10,e.getDanmakuData(t,n);case 10:if(0===(o=a.sent).length){a.next=16;break}i=i.concat(o),n+=1,a.next=17;break;case 16:return a.abrupt("break",19);case 17:a.next=7;break;case 19:0!==i.length?((i=c.a.sortBy(i,(function(t){return t[1]}))).forEach((function(t){(t[6].indexOf(e.danmakuKeyword)>=0||""===e.danmakuKeyword)&&e.danmakuList.push({time:parseInt(t[1]/1e3,10),hash:t[5],text:t[6],domStatus:"raw",uid:[]})})),e.setDanmakuLoadingStatus(!1)):(e.setDanmakuLoadingStatus(!1),e.$errorDialog("Oops...貌似没有获取到任何弹幕"));case 20:case"end":return a.stop()}}),a)})))()},getVideoInfo:function(){var t=this;if(!this.loadingStatus){this.pageList=[],this.danmakuList=[],this.videoId=c.a.trim(this.videoId);var e="",a=!1;if(/^ss[0-9]*$/.test(this.videoId))a=!0,e="/bili-api/pgc/view/web/season?season_id=";else if(/^ep[0-9]*$/.test(this.videoId))a=!0,e="/bili-api/pgc/view/web/season?ep_id=";else if(this.$bvValid(this.videoId))e="/bili-api/x/player/pagelist?aid=",this.videoId="av".concat(this.$bvConvertAvNumber(this.videoId));else{if(!/^av[0-9]*$/.test(this.videoId))return void this.$errorDialog("请输入视频id<br><br>番剧: ss12345 或 ep12345<br>普通视频: av123456 或 BV1xx411c7mD");e="/bili-api/x/player/pagelist?aid="}var i=this.videoId.replace("av","").replace("ss","").replace("ep","");""!==i?(this.setLoadingStatus(!0),this.axios.get("".concat(this.$BASE_API_URL).concat(e).concat(i)).then((function(e){if(0!==e.data.code)throw new Error("获取视频数据失败");if(a){if(a){if("undefined"==typeof e.data.result)throw new Error("解析视频数据失败");e.data.result.episodes.forEach((function(e,a){t.pageList.push({index:a,name:e.long_title,cid:e.cid})})),t.setLoadedVideoInfo(!0)}}else{if("undefined"==typeof e.data.data)throw new Error("解析视频数据失败");e.data.data.forEach((function(e,a){t.pageList.push({index:a,name:e.part,cid:e.cid})})),t.setLoadedVideoInfo(!0)}t.setLoadingStatus(!1)}))["catch"]((function(e){t.setLoadingStatus(!1),t.$errorDialog(e.toString())}))):this.$errorDialog("请输入视频id<br><br>番剧: ss12345 或 ep12345<br>普通视频: av123456 或 BV1xx411c7mD")}}}},l=(a("d80b"),a("2877")),v=Object(l.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("AkarinEditText",{attrs:{title:"BV号 / 番剧：(ss12345 或者 ep12345)"},model:{value:t.videoId,callback:function(e){t.videoId=e},expression:"videoId"}}),a("AkarinEditText",{attrs:{placeholder:"默认留空装载全量弹幕",title:"弹幕关键词"},model:{value:t.danmakuKeyword,callback:function(e){t.danmakuKeyword=e},expression:"danmakuKeyword"}}),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.loadedVideoInfo,expression:"!loadedVideoInfo"}],"class":[!1!==t.loadingStatus?"mdui-color-grey-600":"mdui-color-theme-accent","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:t.getVideoInfo}},[t._v("查询(゜-゜)つロ ")]),a("button",{"class":[!1!==t.loadingStatus?"mdui-color-grey-600":"mdui-color-green-600","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:t.resetAll}},[t._v("重置 ")]),a("button",{staticClass:"mdui-color-deep-purple-500\n          mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding",on:{click:t.helpDialog}},[t._v("食用说明 (请务必要看) ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loadingStatus,expression:"loadingStatus"}]},[t._v("加载中...")]),a("div",t._l(t.pageList,(function(e,i){return a("button",{key:i,"class":[e.cid===t.currentCId?"mdui-color-grey-600":"mdui-color-blue-600","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:function(a){return t.getDanmakuList(e.cid)}}},[t._v(" 分P"+t._s(e.index+1)+": "+t._s(e.name)+" ")])})),0),a("br"),a("br"),a("p",{directives:[{name:"show",rawName:"v-show",value:t.danmakuLoading,expression:"danmakuLoading"}]},[t._v("装载弹幕中...可能需要较长时间")]),a("div",{staticClass:"mdui-table-fluid"},[a("table",{staticClass:"mdui-table",staticStyle:{"background-color":"rgba(255,255,255,0.6)"}},[t._m(1),a("tbody",t._l(t.danmakuList,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(t.formatTime(e.time)))]),a("td",[t._v(t._s(e.text))]),"raw"===e.domStatus?a("td",{staticStyle:{color:"#ff80ab"},on:{click:function(a){return t.trackUser(e.hash,i)}}},[t._v("查看 ")]):"over"===e.domStatus?a("td",{staticStyle:{color:"#ff80ab"}},t._l(e.uid,(function(e,i){return a("div",{key:i},[a("a",{staticStyle:{color:"#ff80ab"},on:{click:function(a){return t.openUserSpace(e)}}},[t._v(t._s(e))])])})),0):"any"===e.domStatus?a("td",{staticStyle:{color:"#ff80ab"}},[t._v("匿名弹幕")]):"load"===e.domStatus?a("td",{staticStyle:{color:"#ff80ab"}},[t._v("Loading...")]):"fail"===e.domStatus?a("td",{staticStyle:{color:"#ff80ab"}},[t._v("获取失败")]):t._e()])})),0)])])],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"akarin-title"},[a("i",{staticClass:"mdui-icon material-icons text-white"},[t._v("")]),t._v(" 查询弹幕发送者 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Time")]),a("th",[t._v("Content")]),a("th",[t._v("Result")])])])}],!1,null,"5294623a",null);e.a=v.exports},"16a6":function(t,e,a){"use strict";a("e6a0")},"2a15":function(t,e,a){"use strict";var i={name:"DanmakuSearch",components:{AkarinEditText:(a("99af"),a("d3b7"),a("25f0"),a("f72b")).a},data:function(){return{bvId:"",videoInfoTitle:"",videoInfoDesc:"",videoInfoAid:"",videoInfoBvId:"",loadedVideoInfo:!1,loadingStatus:!1}},methods:{setLoadedVideoInfo:function(t){this.loadedVideoInfo=t},setLoadingStatus:function(t){this.loadingStatus=t},getVideoInfo:function(){var t=this;this.loadingStatus||(this.$bvValid(this.bvId)?(this.setLoadingStatus(!0),this.axios.get("".concat(this.$BASE_API_URL,"/bili-api/x/web-interface/view?aid=").concat(this.$bvConvertAvNumber(this.bvId))).then((function(e){if(0!==e.data.code)throw new Error("获取视频数据失败");t.videoInfoTitle=e.data.data.title.toString(),t.videoInfoDesc=e.data.data.desc.toString(),t.videoInfoAid="av".concat(e.data.data.aid.toString()),t.videoInfoBvId=e.data.data.bvid.toString(),t.setLoadedVideoInfo(!0),t.setLoadingStatus(!1)}))["catch"]((function(e){t.setLoadingStatus(!1),t.$errorDialog(e.toString())}))):this.$errorDialog("请输入合法的BV号"))},resetAll:function(){this.loadingStatus||(this.bvId="",this.videoInfoTitle="",this.videoInfoDesc="",this.videoInfoAid="",this.videoInfoBvId="",this.loadedVideoInfo=!1,this.loadingStatus=!1)}}},n=a("2877"),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("AkarinEditText",{attrs:{title:"bv号"},model:{value:t.bvId,callback:function(e){t.bvId=e},expression:"bvId"}}),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.loadedVideoInfo,expression:"!loadedVideoInfo"}],"class":[!1!==t.loadingStatus?"mdui-color-grey-600":"mdui-color-theme-accent","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:t.getVideoInfo}},[t._v("转换(゜-゜)つロ ")]),a("button",{"class":[!1!==t.loadingStatus?"mdui-color-grey-600":"mdui-color-green-600","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:t.resetAll}},[t._v("重置 ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loadingStatus,expression:"loadingStatus"}]},[t._v("加载中...")]),a("br"),a("br"),a("div",{staticClass:"mdui-table-fluid"},[a("table",{staticClass:"mdui-table",staticStyle:{"background-color":"rgba(255,255,255,0.6)"}},[t._m(1),a("tbody",[""!==t.videoInfoTitle?a("tr",[a("td",[t._v("标题")]),a("td",[t._v(t._s(t.videoInfoTitle))])]):t._e(),""!==t.videoInfoDesc?a("tr",[a("td",[t._v("简介")]),a("td",[t._v(t._s(t.videoInfoDesc))])]):t._e(),""!==t.videoInfoAid?a("tr",[a("td",[t._v("AV号")]),a("td",[t._v(t._s(t.videoInfoAid))])]):t._e(),""!==t.videoInfoBvId?a("tr",[a("td",[t._v("BV号")]),a("td",[t._v(t._s(t.videoInfoBvId))])]):t._e()])])])],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"akarin-title"},[a("i",{staticClass:"mdui-icon material-icons text-white"},[t._v("")]),t._v(" bv号转av号 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Result")])])])}],!1,null,"29366948",null);e.a=o.exports},3528:function(t,e,a){"use strict";var i=(a("99af"),a("d3b7"),a("25f0"),a("0a5d")),n=a("4328"),o=a.n(n),r=a("6213"),s=a.n(r),d={name:"JapanesePronunciation",components:{AkarinTextarea:a("3b4b").a},data:function(){return{origin_text:"",loading_status:!1,result:""}},methods:{resetAll:function(){this.origin_text="",this.loading_status=!1,this.result=""},translate:function(){var t=this,e=this.origin_text.replaceAll('"',""),a=s.a.checkTextInput(e).replaceAll("\\","\\\\");0===(a=JSON.parse(a)).code?(this.loading_status=!0,this.axios.post("".concat(this.$GOOGLE_TRANSLATE_API_URI).concat(Object(i.a)(a.data)),o.a.stringify({q:a.data})).then((function(a){if(void 0===a.data[0])throw new Error("Google Translate Error");var i=a.data[0][0][3],n=JSON.parse(s.a.notateTranslate(e,i));if(0!==n.code)throw new Error(n.message);t.result=n.html.replaceAll("&amp;","&").replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&quot;",'"').replaceAll("&#039;","'"),t.loading_status=!1}))["catch"]((function(e){t.loading_status=!1,t.$errorDialog(e.stack.toString())}))):this.$errorDialog(a.message)}}},c=a("2877"),u=Object(c.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("AkarinTextarea",{attrs:{title:"日文"},model:{value:t.origin_text,callback:function(e){t.origin_text=e},expression:"origin_text"}}),a("button",{"class":[!1!==t.loading_status?"mdui-color-grey-600":"mdui-color-theme-accent","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:t.translate}},[t._v("转换(゜-゜)つロ ")]),a("button",{"class":[!1!==t.loading_status?"mdui-color-grey-600":"mdui-color-green-600","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:t.resetAll}},[t._v("重置 ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loading_status,expression:"loading_status"}]},[t._v("加载中...")]),a("br"),a("br"),a("div",{domProps:{innerHTML:t._s(t.result)}})],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"akarin-title"},[a("i",{staticClass:"mdui-icon material-icons text-white"},[t._v("")]),t._v(" 日文注音 ")])}],!1,null,"6da7929a",null);e.a=u.exports},"49cb":function(t,e,a){"use strict";var i={name:"DanmakuDownload",methods:{importXML:function(){return 0}}},n=a("2877"),o=Object(n.a)(i,(function(){var t=this;t.$createElement;return t._self._c,t._m(0)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"akarin-title"},[a("i",{staticClass:"mdui-icon material-icons text-white"},[t._v("")]),t._v(" 弹幕下载&ass字幕 ")]),a("p",[t._v("暂不可用")])])}],!1,null,"731eccea",null);e.a=o.exports},"58ce":function(t,e,a){"use strict";var i={name:"VideoCover",components:{AkarinEditText:(a("99af"),a("d3b7"),a("25f0"),a("f72b")).a},data:function(){return{bvId:"",picUrl:"",loadedVideoInfo:!1,loadingStatus:!1}},methods:{setLoadedVideoInfo:function(t){this.loadedVideoInfo=t},setLoadingStatus:function(t){this.loadingStatus=t},getVideoInfo:function(){var t=this;this.loadingStatus||(this.$bvValid(this.bvId)?(this.setLoadingStatus(!0),this.axios.get("".concat(this.$BASE_API_URL,"/bili-api/x/web-interface/view?aid=").concat(this.$bvConvertAvNumber(this.bvId))).then((function(e){if(0!==e.data.code)throw new Error("获取视频数据失败");t.picUrl=e.data.data.pic.toString(),t.setLoadedVideoInfo(!0),t.setLoadingStatus(!1)}))["catch"]((function(e){t.setLoadingStatus(!1),t.$errorDialog(e.toString())}))):this.$errorDialog("请输入合法的BV号"))},resetAll:function(){this.loadingStatus||(this.bvId="",this.picUrl="",this.loadedVideoInfo=!1,this.loadingStatus=!1)}}},n=(a("16a6"),a("2877")),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("AkarinEditText",{attrs:{title:"bv号"},model:{value:t.bvId,callback:function(e){t.bvId=e},expression:"bvId"}}),a("button",{directives:[{name:"show",rawName:"v-show",value:!t.loadedVideoInfo,expression:"!loadedVideoInfo"}],"class":[!1!==t.loadingStatus?"mdui-color-grey-600":"mdui-color-theme-accent","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:t.getVideoInfo}},[t._v("获取(゜-゜)つロ ")]),a("button",{"class":[!1!==t.loadingStatus?"mdui-color-grey-600":"mdui-color-green-600","mdui-btn mdui-btn-raised mdui-ripple akarin-button-padding"],on:{click:t.resetAll}},[t._v("重置 ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.loadingStatus,expression:"loadingStatus"}]},[t._v("加载中...")]),a("br"),a("br"),""!==t.picUrl?a("AkarinEditText",{attrs:{title:"Link"},model:{value:t.picUrl,callback:function(e){t.picUrl=e},expression:"picUrl"}}):t._e()],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"akarin-title"},[a("i",{staticClass:"mdui-icon material-icons text-white"},[t._v("")]),t._v(" 获取视频封面")])}],!1,null,"139f467c",null);e.a=o.exports},b7ed:function(t,e,a){"use strict";var i=a("c65c"),n=a.n(i);e["default"]=n.a},bb51:function(t,e,a){"use strict";var i=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mdui-card-content"},[i("h2",[t._v("新年快乐！")]),i("img",{attrs:{alt:"bang_dream!happy new year 2021 jp",src:a("70f9")}}),i("p",[t._v("Image Source: BanG Dream! 2021 日服新年")]),i("p",[t._v("三天之内，心想事成！")]),i("p",[t._v("Happy Lucky Smile Yeah！")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("p",[t._v("||")]),i("div",[t._v("现在已经用 Vue.js 重写了一遍。目前日文注音的功能暂时不可用，其他功能暂时无变化，可能会更稳定，或许也会有更多Bug。")]),i("div",[i("br")]),i("div",[t._v("如果遇到Bug的话，可以发个邮件给我 Email(Base64): aUByc3Bsd2UuY29t 或者 在b站私信我一下 "),i("a",{attrs:{target:"_blank",href:"https://space.bilibili.com/44974083"}},[t._v("(点击访问)")]),t._v(" 如果能在 "),i("del",[t._v("顺带点个 "),i("b",[t._v("关注")])]),t._v(" 就再好不过了(笑Cry)。 ")]),i("br"),i("div",[i("div",[t._v("手机用户请点击"),i("b",[t._v("左上角")]),t._v("的按钮来切换工具")])]),i("br"),i("div",[i("div",[t._v("目前的待开发功能 (时间不定)")]),i("div",[t._v("1. 弹幕下载 && ASS字幕格式")]),i("div",[i("del",[t._v("2. 重新设计页面")])]),i("div",[i("del",[t._v("3. 番剧和影视资源的查询")])]),i("div",[t._v("4. 互动视频的查询")]),i("div",[t._v("5. vtuber 排行榜")]),i("div",[t._v("6. 图片混淆 && 反混淆")]),i("div",[t._v("7. 视频下载 (可能需要做成客户端)")]),i("div",[t._v("8. 支持AcFun的弹幕查询")])]),i("br"),i("div",[i("div",[t._v("Rsplwe")]),i("div",[t._v("2021/2/8")])])])}],n=(a("99af"),{name:"Home",data:function(){return{haruhiEgg:""}},mounted:function(){var t="0123456789";this.haruhiEgg="00298".concat(t.charAt(5+Math.floor(5*Math.random()))).concat(t.charAt(Math.floor(10*Math.random())))}}),o=a("2877"),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mdui-typo"},[a("div",{staticClass:"mdui-card",staticStyle:{"background-color":"rgba(255,255,255,0.75) !important"}},[a("div",{staticClass:"mdui-card-primary"},[a("div",{staticClass:"mdui-card-primary-title"},[t._v("Welcome to Bilibili.Red")]),a("div",{staticClass:"mdui-card-primary-subtitle"},[t._v(" あなたは "),a("span",{staticStyle:{background:"#000000",color:"#ffffff","font-weight":"bold"}},[t._v(t._s(t.haruhiEgg))]),t._v(" 人目の訪問者です ")])]),t._m(0)])])])}),i,!1,null,null,null);e.a=r.exports},c63e:function(t,e,a){"use strict";var i=a("ff13"),n=a("b7ed"),o=a("2877"),r=Object(o.a)(n["default"],i.a,i.b,!1,null,"4055bac5",null);e["default"]=r.exports},c65c:function(t,e){},d80b:function(t,e,a){"use strict";a("fb9f")},e6a0:function(t,e,a){},fb9f:function(t,e,a){},ff13:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return n}));var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("访问的页面不存在... Orz")])},n=[]}});