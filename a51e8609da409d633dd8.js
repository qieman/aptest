(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{691:function(t,e,r){"use strict";r(72),r(73),r(40),r(447);var c=r(81),n=r(228),o=r(229),l=r(182),f=r(51),d=r(183);function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var v=function(t,e,r,desc){var c,n=arguments.length,o=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(n<3?c(o):n>3?c(e,r,o):c(e,r))||o);return n>3&&o&&Object.defineProperty(e,r,o),o},h=function(t){Object(n.a)(f,t);var e,r=(e=f,function(){var t,r=Object(l.a)(e);if(m()){var c=Object(l.a)(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return Object(o.a)(this,t)});function f(){var t;return Object(c.a)(this,f),(t=r.apply(this,arguments)).statusMap=["已发布","","已撤销"],t.statusColorMap=["green","orange","purple"],t.columns=[{title:"ID",dataIndex:"articleID",key:"articleID",width:100},{title:"封面",dataIndex:"articleCover",key:"articleCover",scopedSlots:{customRender:"articleCover"},width:100},{title:"标题",dataIndex:"articleTitle",key:"articleTitle",width:300},{title:"标签",dataIndex:"articleTags",key:"articleTags",scopedSlots:{customRender:"articleTags"}},{title:"含视频",dataIndex:"articleVideo",key:"articleVideo"},{title:"来源",dataIndex:"articleSource",key:"articleSource"},{title:"发布时间",dataIndex:"postTime",key:"postTime",scopedSlots:{customRender:"postTime"}},{title:"状态",dataIndex:"articleStatus",key:"articleStatus",scopedSlots:{customRender:"articleStatus"},width:100},{title:"操作",dataIndex:"actions",key:"actions",scopedSlots:{customRender:"actions"}}],t.data=[{articleID:"001",articleCover:"https://ali.xinshipu.cn/20160621_1/original/1466449368012.jpg@288w_216h_99q_1e_1c.jpg",articleTitle:"水煮蛋时，有人开水煮有人冷水煮，都不对，这才是正确做法",articleTags:["鸡蛋","美食","国外"],articleVideo:"是",articleSource:"百度百科",postTime:1587089567692,articleStatus:0},{articleID:"002",articleCover:"https://i8.meishichina.com/attachment/recipe/2019/04/05/20190405155446475110411273881.jpg?x-oss-process=style/p320",articleTitle:"香菇滑鸡的做法",articleTags:["香菇","美食","鸡"],articleVideo:"否",articleSource:"百度百科",postTime:1587089592704,articleStatus:2}],t}return f}(d.c),y=h=v([d.a],h),_=r(59),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-table",{staticClass:"article-list",attrs:{columns:t.columns,dataSource:t.data,bordered:""},scopedSlots:t._u([{key:"actions",fn:function(text,e){return r("span",{},[r("a",{attrs:{href:"#"}},[t._v("修改")]),t._v(" "),r("a-divider",{attrs:{type:"vertical"}}),t._v(" "),0===e.articleStatus?r("a",{attrs:{href:"#"}},[t._v("撤回")]):r("a",{attrs:{href:"#"}},[t._v("发布")])],1)}},{key:"articleTags",fn:function(e){return r("span",{},t._l(e,(function(e){return r("a-tag",{key:e,attrs:{color:"blue"}},[t._v(t._s(e))])})),1)}},{key:"articleCover",fn:function(t){return r("span",{},[r("img",{attrs:{src:t,width:"80",height:"60"}})])}},{key:"articleStatus",fn:function(text,e){return r("span",{},[r("a-tag",{attrs:{color:t.statusColorMap[text]}},[t._v(t._s(t.statusMap[text]))])],1)}},{key:"postTime",fn:function(e){return r("span",{},[t._v(t._s(t._f("moment")(e,"MM-DD h:mm")))])}}])},[r("span",{attrs:{slot:"actions1"},slot:"actions1"},[t._v("123")])])}),[],!1,null,null,null);e.a=component.exports},697:function(t,e,r){"use strict";r.r(e);r(72),r(73),r(40),r(447);var c=r(81),n=r(82),o=r(228),l=r(229),f=r(182),d=r(51),m=r(183),v=r(691);function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=function(t,e,r,desc){var c,n=arguments.length,o=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(n<3?c(o):n>3?c(e,r,o):c(e,r))||o);return n>3&&o&&Object.defineProperty(e,r,o),o},_=function(t){Object(o.a)(d,t);var e,r=(e=d,function(){var t,r=Object(f.a)(e);if(h()){var c=Object(f.a)(this).constructor;t=Reflect.construct(r,arguments,c)}else t=r.apply(this,arguments);return Object(l.a)(this,t)});function d(){var t;return Object(c.a)(this,d),(t=r.apply(this,arguments)).searchForm={keyword:"",source:"all",lan:"zh"},t.sourceList=["cookpad"],t}return Object(n.a)(d,[{key:"created",value:function(){this.$store.commit("NavType",1)}}]),d}(m.c),k=_=y([Object(m.a)({components:{ArticleList:v.a}})],_),j=r(59),component=Object(j.a)(k,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a-card",{staticClass:"article-list-card"},[r("div",{attrs:{slot:"title"},slot:"title"},[t._v("已爬取的文章列表")]),t._v(" "),r("a-row",{staticClass:"article-list-tool-bar"},[r("a-col",{attrs:{span:"24"}},[r("a-form-model",{attrs:{layout:"inline"},nativeOn:{submit:function(t){t.preventDefault()}}},[r("a-form-model-item",{attrs:{label:"翻译选项"}},[r("a-button",[t._v("\r\n                        随机翻译10篇\r\n                    ")])],1),t._v(" "),r("a-form-model-item",[r("a-button",[t._v("\r\n                        随机翻译100篇\r\n                    ")])],1),t._v(" "),r("a-form-model-item",{attrs:{label:"5分钟翻译一次"}},[r("a-switch",{attrs:{defaultChecked:""}})],1)],1)],1)],1),t._v(" "),r("a-row",{staticClass:"article-list-tool-bar"},[r("a-col",{attrs:{span:"24"}},[r("a-form-model",{attrs:{layout:"inline",model:t.searchForm},on:{submit:t.handleSubmit},nativeOn:{submit:function(t){t.preventDefault()}}},[r("a-form-model-item",{attrs:{label:"切换站源"}},[r("a-select",{attrs:{placeholder:"切换站源",defaultValue:"all"},model:{value:t.searchForm.source,callback:function(e){t.$set(t.searchForm,"source",e)},expression:"searchForm.source"}},[r("a-select-option",{attrs:{value:"all"}},[t._v("\r\n                            全部站源\r\n                        ")]),t._v(" "),t._l(t.sourceList,(function(source){return r("a-select-option",{attrs:{value:source}},[t._v("\r\n                            "+t._s(source)+"\r\n                        ")])}))],2)],1),t._v(" "),r("a-form-model-item",{staticStyle:{"margin-right":"0px"},attrs:{label:"搜索文章"}},[r("a-input",{attrs:{placeholder:"输入关键词"},model:{value:t.searchForm.keyword,callback:function(e){t.$set(t.searchForm,"keyword",e)},expression:"searchForm.keyword"}})],1),t._v(" "),r("a-form-model-item",{staticStyle:{"margin-right":"0px"}},[r("a-select",{attrs:{placeholder:"搜索语言",defaultValue:"zh"},model:{value:t.searchForm.lan,callback:function(e){t.$set(t.searchForm,"lan",e)},expression:"searchForm.lan"}},[r("a-select-option",{attrs:{value:"zh",selected:""}},[t._v("\r\n                            中文\r\n                        ")]),t._v(" "),r("a-select-option",{attrs:{value:"jp"}},[t._v("\r\n                            日语\r\n                        ")]),t._v(" "),r("a-select-option",{attrs:{value:"en"}},[t._v("\r\n                            英语\r\n                        ")])],1)],1),t._v(" "),r("a-form-model-item",[r("a-button",{attrs:{type:"primary","html-type":"submit",disabled:""===t.searchForm.keyword}},[t._v("\r\n                        搜索\r\n                    ")])],1)],1)],1)],1),t._v(" "),r("ArticleList")],1)}),[],!1,null,null,null);e.default=component.exports}}]);