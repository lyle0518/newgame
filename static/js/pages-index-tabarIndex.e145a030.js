(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-tabarIndex"],{"0494":function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("0c26");var n=a(i("8b9d")),o={name:"u-input",mixins:[n.default],props:{value:{type:[String,Number],default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0},cursorSpacing:{type:[Number,String],default:0},selectionStart:{type:[Number,String],default:-1},selectionEnd:{type:[Number,String],default:-1},trim:{type:Boolean,default:!0},showConfirmbar:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,lastValue:""}},watch:{value:function(t,e){this.defaultValue=t,t!=e&&"select"==this.type&&this.handleInput({detail:{value:t}})}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t=Object.assign(t,this.customStyle),t},getCursorSpacing:function(){return Number(this.cursorSpacing)},uSelectionStart:function(){return String(this.selectionStart)},uSelectionEnd:function(){return String(this.selectionEnd)}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},methods:{handleInput:function(t){var e=this,i=t.detail.value;this.trim&&(i=this.$u.trim(i)),this.$emit("input",i),this.defaultValue=i,setTimeout((function(){e.dispatch("u-form-item","on-form-change",i)}),40)},handleBlur:function(t){var e=this;setTimeout((function(){e.focused=!1}),100),this.$emit("blur",t.detail.value),setTimeout((function(){e.dispatch("u-form-item","on-form-blur",t.detail.value)}),40)},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};e.default=o},"06c6":function(t,e,i){"use strict";var a=i("c02e"),n=i.n(a);n.a},2171:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("e6e2").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?i("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.defaultValue,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"cursor-spacing":t.getCursorSpacing,"show-confirm-bar":t.showConfirmbar},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}):i("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType,"cursor-spacing":t.getCursorSpacing,"selection-end":t.uSelectionEnd,"selection-start":t.uSelectionStart,"show-confirm-bar":t.showConfirmbar},on:{focus:function(e){arguments[0]=e=t.$handleEvent(e),t.onFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBlur.apply(void 0,arguments)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.onConfirm.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&""!=t.value&&t.focused?i("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClear.apply(void 0,arguments)}}},[i("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"}})],1):t._e(),t.passwordIcon&&"password"==t.type?i("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[i("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?i("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[i("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},o=[]},2192:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"cbody"},[e("v-uni-web-view",{staticStyle:{height:"calc(100vh - 100rpx)"},attrs:{src:"http://muchenlou.cn/qinglv/feixingqi/#/"}})],1)},n=[]},"23ba":function(t,e,i){var a=i("cb04");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("5f4ccfa8",a,!0,{sourceMap:!1,shadowMode:!1})},"275c":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,".cubody[data-v-37b3ba28]{height:100%;overflow:hidden}body[data-v-37b3ba28]::-webkit-scrollbar{display:none}",""]),t.exports=e},"27e0":function(t,e,i){"use strict";i.r(e);var a=i("2f69"),n=i("c766");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("06c6");var r=i("828b"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"8dd5ec1e",null,!1,a["a"],void 0);e["default"]=s.exports},"2f69":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uToast:i("bc1f").default,uModal:i("6b05").default,uInput:i("66d8").default,uSwiper:i("583e").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"tabarIndex"},[i("u-toast",{ref:"uToast"}),i("u-modal",{attrs:{"mask-close-able":!0,title:"识别码认证"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("v-uni-view",{staticClass:"slot-content"},[i("v-uni-view",{staticClass:"_title"},[t._v("关注公众号，获取识别码")]),i("v-uni-view",{staticClass:"_width",staticStyle:{width:"85%",margin:"auto"}},[i("u-input",{attrs:{type:"number",width:"80%",placeholder:"请输入识别码",focus:!0,border:!0},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}})],1)],1)],1),i("u-modal",{attrs:{showCancelButton:!1,showConfirmButton:!1,closeOnClickOverlay:!0,"mask-close-able":!0,title:"代理中心"},model:{value:t.addShow,callback:function(e){t.addShow=e},expression:"addShow"}},[i("v-uni-view",{staticClass:"agent-content"},[i("v-uni-view",{staticClass:"_width",staticStyle:{width:"85%",heigth:"350rpx",margin:"auto"}},[i("v-uni-view",{staticClass:"agent_btn"},[i("v-uni-text",[t._v("佣金:50% | 价格: 598")]),i("v-uni-text",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBuy(1)}}},[t._v("加入我们")])],1),i("v-uni-view",{staticClass:"agent_btn"},[i("v-uni-text",[t._v("佣金:60% | 价格: 798")]),i("v-uni-text",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBuy(2)}}},[t._v("加入我们")])],1),i("v-uni-view",{staticClass:"agent_btn"},[i("v-uni-text",[t._v("佣金:70% | 价格: 998")]),i("v-uni-text",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleBuy(3)}}},[t._v("加入我们")])],1)],1)],1)],1),0===t.selectTab?i("v-uni-view",[i("index",{tag:"component",staticClass:"cbody"})],1):t._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:[1,2].includes(t.selectTab),expression:"[1,2].includes(selectTab) "}],staticClass:"content_box"},[i("u-swiper",{attrs:{height:"250",list:t.imgs}}),i("v-uni-view",{staticClass:"addBtn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleAdd.apply(void 0,arguments)}}},[t._v("代理中心")]),i("v-uni-view",{staticClass:"content"},t._l(t.modeList,(function(e,a){return i("v-uni-view",{key:a+"cont",staticClass:"content_item",style:{backgroundImage:e.backgroundImg,width:e.width},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toDetail(e,a)}}},[t._v(t._s(e.value)),i("v-uni-text",{staticClass:"go_btn"},[t._v("Go >")])],1)})),1)],1),3===t.selectTab?i("v-uni-view",[i("Shop")],1):t._e(),i("v-uni-view",{staticClass:"tabarFooter"},t._l(t.tabList,(function(e,a){return i("v-uni-view",{key:a+"tab",class:a===t.selectTab?"tabitem  select_tab":"tabitem",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleTab(a)}}},[t._v(t._s(e.value))])})),1)],1)},o=[]},"32b8":function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */.u-input[data-v-23939e4b]{position:relative;flex:1;display:flex;flex-direction:row}.u-input__input[data-v-23939e4b]{font-size:%?28?%;color:#303133;flex:1}.u-input__textarea[data-v-23939e4b]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal;flex:1}.u-input--border[data-v-23939e4b]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-23939e4b]{border-color:#fa3534!important}.u-input__right-icon__item[data-v-23939e4b]{margin-left:%?10?%}.u-input__right-icon--select[data-v-23939e4b]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-23939e4b]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=e},4139:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("5ef2"),i("dc8a"),i("5c47"),i("0506");var a={name:"u-toast",props:{zIndex:{type:[Number,String],default:""}},data:function(){return{isShow:!1,timer:null,config:{params:{},title:"",type:"",duration:2e3,isTab:!1,url:"",icon:!0,position:"center",callback:null,back:!1},tmpConfig:{}}},computed:{iconName:function(){if(["error","warning","success","info"].indexOf(this.tmpConfig.type)>=0&&this.tmpConfig.icon){var t=this.$u.type2icon(this.tmpConfig.type);return t}},uZIndex:function(){return this.isShow?this.zIndex?this.zIndex:this.$u.zIndex.toast:"999999"}},methods:{show:function(t){var e=this;this.tmpConfig=this.$u.deepMerge(this.config,t),this.timer&&(clearTimeout(this.timer),this.timer=null),this.isShow=!0,this.timer=setTimeout((function(){e.isShow=!1,clearTimeout(e.timer),e.timer=null,"function"===typeof e.tmpConfig.callback&&e.tmpConfig.callback(),e.timeEnd()}),this.tmpConfig.duration)},hide:function(){this.isShow=!1,this.timer&&(clearTimeout(this.timer),this.timer=null)},timeEnd:function(){if(this.tmpConfig.url){if("/"!=this.tmpConfig.url[0]&&(this.tmpConfig.url="/"+this.tmpConfig.url),Object.keys(this.tmpConfig.params).length){var t="";/.*\/.*\?.*=.*/.test(this.tmpConfig.url)?(t=this.$u.queryParams(this.tmpConfig.params,!1),this.tmpConfig.url=this.tmpConfig.url+"&"+t):(t=this.$u.queryParams(this.tmpConfig.params),this.tmpConfig.url+=t)}this.tmpConfig.isTab?uni.switchTab({url:this.tmpConfig.url}):uni.navigateTo({url:this.tmpConfig.url})}else this.tmpConfig.back&&this.$u.route({type:"back"})}}};e.default=a},"4a6c":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"shop"},[a("v-uni-view",{staticClass:"big"},[a("v-uni-view",{staticClass:"big_title"},[t._v("官方大奖")]),a("v-uni-view",{staticClass:"big_shop"},[a("v-uni-view",{staticClass:"uni-margin-wrap"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{circular:!0,"indicator-dots":t.indicatorDots,interval:t.interval,duration:t.duration}},[a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item "},[a("v-uni-view",{staticClass:"item_shop"},[a("img",{staticStyle:{height:"500rpx"},attrs:{src:i("57f4"),alt:""}}),a("v-uni-view",{staticClass:"swiper_title"},[t._v("2024款iphone 16")]),a("v-uni-view",{staticClass:"btn"},[t._v("参与抽奖")])],1)],1)],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item "},[a("v-uni-view",{staticClass:"item_shop"},[a("img",{staticStyle:{height:"500rpx"},attrs:{src:i("57f4"),alt:""}}),a("v-uni-view",{staticClass:"swiper_title"},[t._v("2024款iphone 16")]),a("v-uni-view",{staticClass:"btn"},[t._v("参与抽奖")])],1)],1)],1),a("v-uni-swiper-item",[a("v-uni-view",{staticClass:"swiper-item "},[a("v-uni-view",{staticClass:"item_shop"},[a("img",{staticStyle:{height:"500rpx"},attrs:{src:i("57f4"),alt:""}}),a("v-uni-view",{staticClass:"swiper_title"},[t._v("2024款iphone 16")]),a("v-uni-view",{staticClass:"btn"},[t._v("参与抽奖")])],1)],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"day"},[a("v-uni-view",{staticClass:"day_title"},[t._v("今日奖品")]),a("v-uni-view",{staticClass:"day_title_msg"},[t._v("今日更新，官方发货有保障")]),a("v-uni-view",{staticClass:"day_item"},[a("img",{attrs:{src:i("e748"),alt:""}}),a("v-uni-view",{staticClass:"day_item_title"},[t._v("台式小夜灯")]),a("v-uni-view",{staticClass:"day_item_title"},[a("v-uni-text",{staticStyle:{color:"red"}},[t._v("16:00:00")]),t._v("后开奖")],1)],1),a("v-uni-view",{staticClass:"day_item"}),a("v-uni-view",{staticClass:"day_item"})],1),a("v-uni-view",{staticClass:"luck"},[a("v-uni-view",{staticClass:"luck_title"},[t._v("手气广场")]),a("v-uni-view",{staticClass:"luck_list"},[a("v-uni-view",{staticClass:"luck_item"},[a("img",{attrs:{src:"",alt:""}}),a("v-uni-view",{},[t._v("标题")])],1),a("v-uni-view",{staticClass:"luck_item"}),a("v-uni-view",{staticClass:"luck_item"}),a("v-uni-view",{staticClass:"luck_item"})],1)],1)],1)],1)},n=[]},"4b44":function(t,e,i){"use strict";i.r(e);var a=i("ec09"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},5010:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */.u-swiper-wrap[data-v-92d7f9e0]{position:relative;overflow:hidden;-webkit-transform:translateY(0);transform:translateY(0)}.u-swiper-image[data-v-92d7f9e0]{width:100%;will-change:transform;height:100%;display:block;pointer-events:none}.u-swiper-indicator[data-v-92d7f9e0]{padding:0 %?24?%;position:absolute;display:flex;flex-direction:row;width:100%;z-index:1}.u-indicator-item-rect[data-v-92d7f9e0]{width:%?26?%;height:%?8?%;margin:0 %?6?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-rect-active[data-v-92d7f9e0]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-dot[data-v-92d7f9e0]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-dot-active[data-v-92d7f9e0]{background-color:hsla(0,0%,100%,.8)}.u-indicator-item-round[data-v-92d7f9e0]{width:%?14?%;height:%?14?%;margin:0 %?6?%;border-radius:%?20?%;transition:all .5s;background-color:rgba(0,0,0,.3)}.u-indicator-item-round-active[data-v-92d7f9e0]{width:%?34?%;background-color:hsla(0,0%,100%,.8)}.u-indicator-item-number[data-v-92d7f9e0]{padding:%?6?% %?16?%;line-height:1;background-color:rgba(0,0,0,.3);border-radius:%?100?%;font-size:%?26?%;color:hsla(0,0%,100%,.8)}.u-list-scale[data-v-92d7f9e0]{-webkit-transform-origin:center center;transform-origin:center center}.u-list-image-wrap[data-v-92d7f9e0]{width:100%;height:100%;flex:1;transition:all .5s;overflow:hidden;box-sizing:initial;position:relative}.u-swiper-title[data-v-92d7f9e0]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;width:100%;font-size:%?28?%;padding:%?12?% %?24?%;color:hsla(0,0%,100%,.9)}.u-swiper-item[data-v-92d7f9e0]{display:flex;flex-direction:row;overflow:hidden;align-items:center}',""]),t.exports=e},"57f4":function(t,e,i){t.exports=i.p+"static/kh.png"},"583e":function(t,e,i){"use strict";i.r(e);var a=i("ecd8"),n=i("4b44");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c10d");var r=i("828b"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"92d7f9e0",null,!1,a["a"],void 0);e["default"]=s.exports},6663:function(t,e,i){var a=i("275c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("3e923ea6",a,!0,{sourceMap:!1,shadowMode:!1})},"66d8":function(t,e,i){"use strict";i.r(e);var a=i("2171"),n=i("d974");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("de95");var r=i("828b"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"23939e4b",null,!1,a["a"],void 0);e["default"]=s.exports},"700d":function(t,e,i){"use strict";var a=i("8e61"),n=i.n(a);n.a},7363:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{keyName:"base",value:"基础模式",backgroundImg:"linear-gradient(to right,#7b8aff 0%,#7afcb5 100%)"},{keyName:"love",value:"恋爱模式",backgroundImg:"linear-gradient(to right,#84f8b2 0%, #8ed4f1 100%)"},{keyName:"height",value:"热恋模式",backgroundImg:"linear-gradient(to right, #ffe9cf 0%,#fcb7a0 100%)"},{keyName:"hot",value:"至死不渝",backgroundImg:"linear-gradient(to right, #a2c5fd 0%, #c0e7fb 100%)"},{keyName:"sm",value:"SM模式",backgroundImg:"linear-gradient(to right, #a690d5 0%, #a9c1ee 100%)"},{keyName:"violent",value:"猛烈模式",backgroundImg:"linear-gradient(to right, red 0%, #fcf370 100%)"}];e.default=a},8649:function(t,e,i){"use strict";var a=i("23ba"),n=i.n(a);n.a},"8b9d":function(t,e,i){"use strict";function a(t,e,i){this.$children.map((function(n){t===n.$options.name?n.$emit.apply(n,[e].concat(i)):a.apply(n,[t,e].concat(i))}))}i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("fd3c"),i("c223");var n={methods:{dispatch:function(t,e,i){var a=this.$parent||this.$root,n=a.$options.name;while(a&&(!n||n!==t))a=a.$parent,a&&(n=a.$options.name);a&&a.$emit.apply(a,[e].concat(i))},broadcast:function(t,e,i){a.call(this,t,e,i)}}};e.default=n},"8e61":function(t,e,i){var a=i("aaa1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("754d004a",a,!0,{sourceMap:!1,shadowMode:!1})},"8eaf":function(t,e,i){"use strict";var a=i("6663"),n=i.n(a);n.a},"9a8b":function(t,e,i){"use strict";i.r(e);var a=i("baf3"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9c48":function(t,e,i){"use strict";i.r(e);var a=i("4139"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},aaa1:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */.u-toast[data-v-36307caf]{position:fixed;z-index:-1;transition:opacity .3s;text-align:center;color:#fff;border-radius:%?8?%;background:#585858;display:flex;flex-direction:row;align-items:center;justify-content:center;font-size:%?28?%;opacity:0;pointer-events:none;padding:%?18?% %?40?%}.u-toast.u-show[data-v-36307caf]{opacity:1}.u-icon[data-v-36307caf]{margin-right:%?10?%;display:flex;flex-direction:row;align-items:center;line-height:normal}.u-position-center[data-v-36307caf]{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);max-width:70%}.u-position-top[data-v-36307caf]{left:50%;top:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-position-bottom[data-v-36307caf]{left:50%;bottom:20%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.u-type-primary[data-v-36307caf]{color:#2979ff;background-color:#ecf5ff;border:1px solid #d7eafe}.u-type-success[data-v-36307caf]{color:#19be6b;background-color:#dbf1e1;border:1px solid #bef5c8}.u-type-error[data-v-36307caf]{color:#fa3534;background-color:#fef0f0;border:1px solid #fde2e2}.u-type-warning[data-v-36307caf]{color:#f90;background-color:#fdf6ec;border:1px solid #faecd8}.u-type-info[data-v-36307caf]{color:#909399;background-color:#f4f4f5;border:1px solid #ebeef5}.u-type-default[data-v-36307caf]{color:#fff;background-color:#585858}',""]),t.exports=e},b31a:function(t,e,i){var a=i("32b8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("55ed9c71",a,!0,{sourceMap:!1,shadowMode:!1})},b504:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{keyName:"base",value:"基础模式",backgroundImg:"linear-gradient(to right, #ffe9cf 0%,#fcb7a0 100%)"},{keyName:"love",value:"恋爱模式",backgroundImg:"linear-gradient(to right,#84f8b2 0%, #8ed4f1 100%)"},{keyName:"height",value:"热恋模式",backgroundImg:"linear-gradient(to right,#7b8aff 0%,#7afcb5 100%)"},{keyName:"hot",value:"至死不渝",backgroundImg:"linear-gradient(to right, #fbc2eb 0%, #a9c1ee 100%)"},{keyName:"dog",value:"小狗模式",backgroundImg:"linear-gradient(to right, #a2c5fd 0%, #c0e7fb 100%)"},{keyName:"violent",value:"女王模式",backgroundImg:"linear-gradient(to right, red 0%, #fcf370 100%)"}];e.default=a},baf3:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}}}},bc1f:function(t,e,i){"use strict";i.r(e);var a=i("fb9a"),n=i("9c48");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("700d");var r=i("828b"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"36307caf",null,!1,a["a"],void 0);e["default"]=s.exports},c02e:function(t,e,i){var a=i("c730");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("1b1bf643",a,!0,{sourceMap:!1,shadowMode:!1})},c10d:function(t,e,i){"use strict";var a=i("faca"),n=i.n(a);n.a},c504:function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("0c26"),i("4626");var n=a(i("f296")),o=a(i("f564")),r=a(i("e7d89")),s={components:{Shop:o.default,Index:n.default},data:function(){return{title:"情侣飞行棋",url:"",code:"",imgs:["../../static/headerbg1.jpg","../../static/headerbg2.jpg"],tabList:[],show:!1,modeList:[],selectTab:0,codes:{555666:!0,666777:!0},outUrl:"",addShow:!1}},onLoad:function(){this.tabList=r.default},mounted:function(){},methods:{handleAdd:function(){this.addShow=!0},handleBuy:function(t){this.outUrl=1===t?"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx04e1ea81d161a578&redirect_uri=http://muchenlou.cn/feixingqi/createAgencyV1&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect":2===t?"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx04e1ea81d161a578&redirect_uri=http://muchenlou.cn/feixingqi/createAgencyV2&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect":"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx04e1ea81d161a578&redirect_uri=http://muchenlou.cn/feixingqi/createAgencyV3&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect",window.location.href=this.outUrl},confirm:function(){""!==this.code&&this.codes[this.code.trim()]?(localStorage.setItem("locCode",this.code),uni.navigateTo({url:this.url})):(this.$refs.uToast.show({title:"请输入正确的6位数游戏码!",type:"error"}),this.show=!0)},auth:function(t){var e=JSON.parse(localStorage.getItem("locCode"));if(console.log(e,"locCode"),!e||![555666,666777,"555666","666777"].includes(e))return this.url=t,void(this.show=!0);uni.navigateTo({url:t})},toDetail:function(t,e){if("no"!==t.keyName){var i=r.default[this.selectTab];if(i.url){var a=i.url+"?item=".concat(t.keyName);e>0?this.auth(a):uni.navigateTo({url:a})}}else this.$refs.uToast.show({title:t.msg,type:"error"})},handleTab:function(t){this.selectTab=t,this.modeList=r.default[t].modeList,console.log("歘")},changeTabar:function(t){}}};e.default=s},c730:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */@-webkit-keyframes move-data-v-8dd5ec1e{0%{background-position:0}100%{background-position:100%}}@keyframes move-data-v-8dd5ec1e{0%{background-position:0}100%{background-position:100%}}._title[data-v-8dd5ec1e]{margin:5px;font-size:18px;text-align:center;font-weight:700}body[data-v-8dd5ec1e]::-webkit-scrollbar{display:none}.content_box[data-v-8dd5ec1e]{position:relative}.addBtn[data-v-8dd5ec1e]{width:%?180?%;height:%?80?%;position:absolute;right:0;top:%?160?%;background-color:#409eff;color:#fff;z-index:9999;text-align:center;line-height:%?80?%;border-radius:%?30?%;font-size:%?30?%}.tabarIndex[data-v-8dd5ec1e]{height:100vh}.tabarIndex .content[data-v-8dd5ec1e]{padding:%?15?%}.tabarIndex .content_item[data-v-8dd5ec1e]{margin-bottom:%?30?%;width:65%;margin:auto;margin-top:20px;height:%?100?%;border-radius:%?10?%;background-color:#fff;text-align:center;line-height:%?100?%;font-size:%?40?%;color:#fff;font-weight:700;box-shadow:3px 3px 5px #b3b1b1}.tabarIndex .content_item .go_btn[data-v-8dd5ec1e]{height:%?30?%;width:%?80?%;color:#fff;border-radius:%?30?%;font-size:%?30?%;padding:%?4?% %?8?%;line-height:%?30?%;margin-left:%?10?%}.tabarIndex .agent-content[data-v-8dd5ec1e]{height:%?400?%}.tabarIndex .agent_btn[data-v-8dd5ec1e]{height:%?120?%;line-height:%?120?%;border-bottom:%?4?%;display:flex;justify-content:space-between;align-items:center}.tabarIndex .agent_btn .btn[data-v-8dd5ec1e]{height:%?80?%;width:%?120?%;display:flex;justify-content:center;align-items:center;background-color:#409eff;border-radius:%?30?%;color:#fff;font-size:%?20?%;box-shadow:7px 7px 12px rgba(0,0,0,.4),-7px -7px 12px hsla(0,0%,100%,.9)}.tabarIndex .tabarFooter[data-v-8dd5ec1e]{position:fixed;bottom:0;left:0;right:0;display:flex;height:40px;background-color:#fff;z-index:100}.tabarIndex .tabarFooter .tabitem[data-v-8dd5ec1e]{width:33%;display:flex;font-size:%?30?%;flex-direction:column;align-items:center;justify-content:center}.tabarIndex .tabarFooter .tabitem .icon[data-v-8dd5ec1e]{width:%?80?%;height:%?80?%}.tabarIndex .tabarFooter .select_tab[data-v-8dd5ec1e]{color:#f4c45d}',""]),t.exports=e},c766:function(t,e,i){"use strict";i.r(e);var a=i("c504"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},ca21:function(t,e,i){"use strict";i.r(e);var a=i("eeeb"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},cb04:function(t,e,i){var a=i("c86c");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */uni-swiper[data-v-64a15b65]{height:%?900?%}uni-swiper .item_shop[data-v-64a15b65]{width:%?500?%;text-align:center;background-color:#fff;border:%?10?% solid #fff;border-radius:%?30?%;padding-bottom:%?30?%;margin:auto}uni-swiper .item_shop img[data-v-64a15b65]{margin:%?40?% 0}uni-swiper .item_shop .swiper_title[data-v-64a15b65]{margin-bottom:%?40?%}uni-swiper .item_shop .btn[data-v-64a15b65]{height:%?80?%;line-height:%?80?%;text-align:center;width:%?280?%;background-color:#e2453a;border-radius:%?10?%;margin:0 auto;color:#fff}.day[data-v-64a15b65]{padding:%?40?%;text-align:center}.day .day_title[data-v-64a15b65]{text-align:left}.day .day_title_msg[data-v-64a15b65]{text-align:left}.day_item[data-v-64a15b65]{margin-bottom:%?20?%}.day img[data-v-64a15b65]{width:90%}',""]),t.exports=e},d974:function(t,e,i){"use strict";i.r(e);var a=i("0494"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},de0f:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=[{keyName:"base",value:"基础模式",backgroundImg:"linear-gradient(to right,#7b8aff 0%,#7afcb5 100%)"},{keyName:"love",value:"恋爱模式",backgroundImg:"linear-gradient(to right,#84f8b2 0%, #8ed4f1 100%)"},{keyName:"height",value:"热恋模式",backgroundImg:"linear-gradient(to right, #ffe9cf 0%,#fcb7a0 100%)"},{keyName:"hot",value:"至死不渝",backgroundImg:"linear-gradient(to right, #a2c5fd 0%, #c0e7fb 100%)"},{keyName:"sm",value:"色色模式",backgroundImg:"linear-gradient(to right, #a690d5 0%, #a9c1ee 100%)"},{keyName:"violent",value:"女王模式",backgroundImg:"linear-gradient(to right, red 0%, #fcf370 100%)"}];e.default=a},de95:function(t,e,i){"use strict";var a=i("b31a"),n=i.n(a);n.a},e748:function(t,e,i){t.exports=i.p+"static/j2.png"},e7d89:function(t,e,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("bf0f"),i("5ef2");a(i("7363"));var n=a(i("de0f")),o=a(i("b504")),r=[{gameName:"feixingqi",value:"飞行棋",modeList:[]},{gameName:"kapai",value:"情侣卡牌",url:"./kapai/kapai",modeList:n.default},{gameName:"dazhuanpan",value:"情侣转盘",url:"./zhuanpan",modeList:o.default},{gameName:"shop",value:"抽奖助手",url:"./shop",modeList:[]}],s=window.location.href,u=!1;if(["4everland.app"].forEach((function(t){s.indexOf(t)>-1&&(u=!0)})),!u);var c=r;e.default=c},ec09:function(t,e,i){"use strict";i("6a54"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("64aa"),i("5ef2");var a={name:"u-swiper",props:{list:{type:Array,default:function(){return[]}},title:{type:Boolean,default:!1},indicator:{type:Object,default:function(){return{}}},borderRadius:{type:[Number,String],default:8},interval:{type:[String,Number],default:3e3},mode:{type:String,default:"round"},height:{type:[Number,String],default:250},indicatorPos:{type:String,default:"bottomCenter"},effect3d:{type:Boolean,default:!1},effect3dPreviousMargin:{type:[Number,String],default:50},autoplay:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},circular:{type:Boolean,default:!0},imgMode:{type:String,default:"aspectFill"},name:{type:String,default:"image"},bgColor:{type:String,default:"#f3f4f6"},current:{type:[Number,String],default:0},titleStyle:{type:Object,default:function(){return{}}}},watch:{list:function(t,e){t.length!==e.length&&(this.uCurrent=0)},current:function(t){this.uCurrent=t}},data:function(){return{uCurrent:this.current}},computed:{justifyContent:function(){return"topLeft"==this.indicatorPos||"bottomLeft"==this.indicatorPos?"flex-start":"topCenter"==this.indicatorPos||"bottomCenter"==this.indicatorPos?"center":"topRight"==this.indicatorPos||"bottomRight"==this.indicatorPos?"flex-end":void 0},titlePaddingBottom:function(){var t=0;return"none"==this.mode?"12rpx":(t=["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"==this.mode?"60rpx":["bottomLeft","bottomCenter","bottomRight"].indexOf(this.indicatorPos)>=0&&"number"!=this.mode?"40rpx":"12rpx",t)},elCurrent:function(){return Number(this.current)}},methods:{listClick:function(t){this.$emit("click",t)},change:function(t){var e=t.detail.current;this.uCurrent=e,this.$emit("change",e)},animationfinish:function(t){}}};e.default=a},ecd8:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-swiper-wrap",style:{borderRadius:t.borderRadius+"rpx"}},[i("v-uni-swiper",{style:{height:t.height+"rpx",backgroundColor:t.bgColor},attrs:{current:t.elCurrent,interval:t.interval,circular:t.circular,duration:t.duration,autoplay:t.autoplay,"previous-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0","next-margin":t.effect3d?t.effect3dPreviousMargin+"rpx":"0"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},t._l(t.list,(function(e,a){return i("v-uni-swiper-item",{key:a,staticClass:"u-swiper-item"},[i("v-uni-view",{staticClass:"u-list-image-wrap",class:[t.uCurrent!=a?"u-list-scale":""],style:{borderRadius:t.borderRadius+"rpx",transform:t.effect3d&&t.uCurrent!=a?"scaleY(0.9)":"scaleY(1)",margin:t.effect3d&&t.uCurrent!=a?"0 20rpx":0},on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.listClick(a)}}},[i("v-uni-image",{staticClass:"u-swiper-image",attrs:{src:e[t.name]||e,mode:t.imgMode}}),t.title&&e.title?i("v-uni-view",{staticClass:"u-swiper-title u-line-1",style:[{"padding-bottom":t.titlePaddingBottom},t.titleStyle]},[t._v(t._s(e.title))]):t._e()],1)],1)})),1),i("v-uni-view",{staticClass:"u-swiper-indicator",style:{top:"topLeft"==t.indicatorPos||"topCenter"==t.indicatorPos||"topRight"==t.indicatorPos?"12rpx":"auto",bottom:"bottomLeft"==t.indicatorPos||"bottomCenter"==t.indicatorPos||"bottomRight"==t.indicatorPos?"12rpx":"auto",justifyContent:t.justifyContent,padding:"0 "+(t.effect3d?"74rpx":"24rpx")}},["rect"==t.mode?t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-indicator-item-rect",class:{"u-indicator-item-rect-active":a==t.uCurrent}})})):t._e(),"dot"==t.mode?t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-indicator-item-dot",class:{"u-indicator-item-dot-active":a==t.uCurrent}})})):t._e(),"round"==t.mode?t._l(t.list,(function(e,a){return i("v-uni-view",{key:a,staticClass:"u-indicator-item-round",class:{"u-indicator-item-round-active":a==t.uCurrent}})})):t._e(),"number"==t.mode?[i("v-uni-view",{staticClass:"u-indicator-item-number"},[t._v(t._s(t.uCurrent+1)+"/"+t._s(t.list.length))])]:t._e()],2)],1)},n=[]},eeeb:function(t,e){},f296:function(t,e,i){"use strict";i.r(e);var a=i("2192"),n=i("ca21");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8eaf");var r=i("828b"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"37b3ba28",null,!1,a["a"],void 0);e["default"]=s.exports},f564:function(t,e,i){"use strict";i.r(e);var a=i("4a6c"),n=i("9a8b");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("8649");var r=i("828b"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"64a15b65",null,!1,a["a"],void 0);e["default"]=s.exports},faca:function(t,e,i){var a=i("5010");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("967d").default;n("266e9ff6",a,!0,{sourceMap:!1,shadowMode:!1})},fb9a:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uIcon:i("e6e2").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-toast",class:[t.isShow?"u-show":"","u-type-"+t.tmpConfig.type,"u-position-"+t.tmpConfig.position],style:{zIndex:t.uZIndex}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[t.tmpConfig.icon?i("u-icon",{staticClass:"u-icon",attrs:{name:t.iconName,size:30,color:t.tmpConfig.type}}):t._e()],1),i("v-uni-text",{staticClass:"u-text"},[t._v(t._s(t.tmpConfig.title))])],1)},o=[]}}]);