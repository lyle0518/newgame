(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-kapai-kapai"],{"385f":function(t,a,e){var i=e("c86c");a=i(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 下方引入的为uView UI的集成样式文件，为scss预处理器，其中包含了一些"u-"开头的自定义变量\n * 使用的时候，请将下面的一行复制到您的uniapp项目根目录的uni.scss中即可\n * uView自定义的css类名和scss变量，均以"u-"开头，不会造成冲突，请放心使用 \n */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */uni-page-body[data-v-1c175663]{min-height:calc(100vh - 50px)}.list[data-v-1c175663]{height:calc(100vh - %?200?%);display:flex;flex-wrap:wrap;justify-content:space-around;align-content:flex-start}.update[data-v-1c175663]{margin:%?20?% auto;display:flex;justify-content:center;align-items:center}.update .update_img[data-v-1c175663]{width:%?120?%;height:%?120?%}.cardBox[data-v-1c175663]{width:23%;height:27%;position:relative;-webkit-perspective:224px;perspective:224px;margin:%?6?% 0;text-align:center;border-radius:%?20?%}.cardBox uni-view[data-v-1c175663]{\n  /*美化子级div*/color:#fff;font-size:%?32?%;\n  /*设置flex布局，使图片以及文字居中*/display:flex;justify-content:center;align-items:center;border-radius:%?20?%}.cardForeCover[data-v-1c175663]{width:100%;height:100%;position:absolute;background:#fae8a3;-webkit-transform:rotateY(-180deg);transform:rotateY(-180deg);\n  /*初始化表示正面的子级div相对于Y轴角度*/transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out;\n  /*设置div旋转时所应用的过渡效果*/-webkit-backface-visibility:hidden;backface-visibility:hidden\n  /*设置div隐藏其背面*/}.cardBackCover[data-v-1c175663]{width:100%;height:100%;position:absolute;background-image:linear-gradient(to right top,#5f39a6,#6640ad,#956fd7,#af8beb,#6f4bb5,#603aa6,#5d36a3,#6943af);-webkit-transform:rotateY(0deg);transform:rotateY(0deg);\n  /*初始化表示背面的子级div相对于Y轴的角度*/transition:-webkit-transform .5s ease-in-out;transition:transform .5s ease-in-out;transition:transform .5s ease-in-out,-webkit-transform .5s ease-in-out;\n  /*设置div旋转时所应用的过渡效果*/-webkit-backface-visibility:hidden;backface-visibility:hidden\n  /*设置div隐藏其背面*/}.cardBox_show uni-view[data-v-1c175663]{color:#000!important;font-size:%?24?%}.cardBox_show .cardForeCover[data-v-1c175663]{-webkit-transform:rotateY(0deg);transform:rotateY(0deg)\n  /*指定鼠标移动至父级div时，表示正面的子级div相对于Y轴的角的角度*/}.cardBox_show .cardBackCover[data-v-1c175663]{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)\n  /*指定鼠标移动至父级div时，表示背面的子级div相对于Y轴的角度*/}',""]),t.exports=a},5231:function(t,a,e){"use strict";var i=e("a16f"),n=e.n(i);n.a},"579e":function(t,a,e){"use strict";e.r(a);var i=e("9973"),n=e("ddc0");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("5231");var s=e("828b"),r=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"1c175663",null,!1,i["a"],void 0);a["default"]=r.exports},"6f56":function(t,a,e){t.exports=e.p+"static/qingshu.png"},9973:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uModal:e("6b05").default},n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"kapai_bg"},[i("u-modal",{attrs:{title:"情侣卡牌",content:t.content},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}}),i("v-uni-view",{staticClass:"update",staticStyle:{width:"100%"}},[i("v-uni-view",{staticClass:"update_btn"},[i("v-uni-image",{staticClass:"update_img",attrs:{src:e("6f56")},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleUptate.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"list"},[t._l(t.list,(function(a,e){return i("v-uni-view",{key:e,class:a.show?"cardBox cardBox_show":"cardBox",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleShow(e)}}},[i("v-uni-view",{staticClass:"cardForeCover"},[i("v-uni-view",{},[t._v(t._s(a.value))])],1),i("v-uni-view",{staticClass:"cardBackCover"},[i("v-uni-view",[t._v("好事卡")])],1)],1)})),i("v-uni-view",{staticClass:"rule_text",staticStyle:{"margin-top":"10rpx"}},[i("v-uni-view",{staticClass:"rule_item"},[t._v("提示 : 点击顶部信封可刷新卡牌")])],1)],2)],1)},o=[]},a16f:function(t,a,e){var i=e("385f");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("967d").default;n("445b34ea",i,!0,{sourceMap:!1,shadowMode:!1})},d312:function(t,a,e){"use strict";e("6a54"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={base:["吻对方的手背","吻对方的额头","亲吻对方的脖子","拍对方屁屁两下","抚摸对方大腿","用你的舌头挑逗对方的耳垂","立刻脱掉一件衣物","轻声对她说出你的欲望","施出你的浑身解数诱惑对方","用牙齿轻咬对方耳垂,并说宝贝","你的手掌轻柔地压她的胸部","贴着ta跳30秒性感扭臀舞","大声喊两次：我想做爱","脱掉你的T恤并展示你的胸罩","你在接下来的1分钟里一动都不能动","可以对对方为所欲为3秒","说一句真诚的赞美","你现在选自己身上的两件衣物脱掉","你脱到只剩内衣，然后穿上ta为你选的鞋或紧身裤袜","你们想象一个情色电影的角色扮演","单膝下跪亲吻对方的手","在阳台或花园里接吻，享受爱情的美妙","抚摸对方的大腿30秒","用舌尖轻轻刺激对方耳朵","轻轻抚摸对方xiong30秒","制作一个属于你们两人的性爱指南，包括喜好、愿望和界限","使用食物进行亲吻和舔舐，例如巧克力酱或者生果","相互用手掌轻轻触摸对方的敏感部位","用冰块在对方身上轻轻滑动，直到溶化","模仿对方的声音和样子，玩起角色扮演游戏","撅起PP，让对方打10下","男生公主抱女生，并坚持15秒","轻轻的在对方耳朵边吹气10下","根据对方指定，脱掉任意一件衣服","为对方做一个放松的肩部按摩","和对方一起尝试新的性爱姿势或者技巧，寻找新的刺激","脱掉一件衣服","和对方法式湿吻20秒","闭上眼睛让对方为所欲为1分钟","躺下给对方按摩1分钟","温柔抚摸对方下体30秒，给予快感","将对方压在身下做十个俯卧撑","在镜子前拥吻","轻轻抚摸对方下面30秒","温柔地抚摸对方的胸部30秒","展示一种性感的舞蹈，持续1分钟","学猫叫三声","从背后抱对方1分钟","给对方梳头发","给对方说悄悄话","拥抱30秒","从背后抱对方1分钟","亲吻对方额头","摸对方头10秒","尝试接吻的感觉","给对方按摩捶背1分钟","手牵手一分钟","一起恶搞自拍","对视5秒","一起给对方按摩","尝试接吻的感觉","说说初次见面的感受","一起恶搞自拍","对方闭上眼睛给你涂口红","对方闭上眼睛给你涂口红","手牵手30秒","摸对方耳朵2秒","拍一段表白的视频留作纪念","学猫叫三声","学猫叫三声","喂对方喝水","对方站着自己跪着喂食物","被对方手伸进裤子随便摸10秒","【福利】躺下对方给你按摩一分钟","跪舔对方30秒","女生坐在男生身上扭动30秒","摸对方胸部或打屁屁各3下","揉对方胸部10秒","【福利】躺下享受被对方舔遍全身1分钟","女方被男方公主抱在房内绕一圈","脱光衣服","用奶或JJ蹭对方的脸10秒","被对方拔一根毛","吸咬对方的乳头20秒","像口交一样吸吮对方手指10秒","和对方舌吻半分钟","在对方耳边说3次我爱你宝贝","对着镜子拍揉胸视频10秒","用嘴含住对方的蛋蛋或阴蒂10秒","脱掉对方一条内裤","撅起PP，让对方打10下","用手扣自己下面1分钟，或lu30下","把酒水或酸奶倒在自己身上对方舔干","男方捏着女方屁屁拥抱30s"],love:["路过麦当劳时， 买俩个甜筒，一人一个","脱掉对方上衣","挑逗对方敏感位置","自拍一段接吻小视频","福利： 躺下对方给你按摩一分钟","把酒水或酸奶倒在自己身上对方舔干","亲吻对方大腿内测10秒","自己趴着， 对方舔你后背20秒","和对方湿吻十秒","舔或轻咬对方耳垂5下","试着舔自己的乳头","涂上口红，然后吻ta","跳一小段脱衣舞，只脱掉上衣","轻轻地咬ta的下唇","触摸ta身体的不同部位","像第一次接吻那样亲吻","用你的头发轻柔地抚摸ta的上半身","把胸罩轻柔地从你的胸部滑向你的私处","温柔地爱抚ta的屁屁","慢慢地爱抚ta的私密处","来一次情趣按摩","在2分钟内你们要互相回复短信，但不能说话","用你的胸部蹭ta的背部","在床上从后面紧紧抱住","激情地舔ta的手指","自豪地向ta展示你的胸部","闭上眼睛，让ta给你尝三种食物","脱掉ta的衣服，只能用牙齿","送女生一束花， 20元左右预算~","去Diy店铺一起做石膏娃娃~","给对方写一封未来信， 对方不许看， 寄快递给客户， 一年后发回给对方","网上下单透明手机壳， 然后放对方的照片或合照","对方舔你上半身的各个部位超过30秒","揉对方nai一下","给对方小腿按摩","脱掉对方一件衣服","跪舔对方三十秒","喝交杯酒并拍照","添对方脖子到胸口30秒","伸手到内衣抓胸十秒","给对方小腿按摩一分钟","用一只手解开ta的胸罩","尝试接吻的感觉","拍一张恶搞自拍","夸奖对方一分钟","亲吻对方额头","被挠痒痒30秒","摸对方头10秒","买DIY一起画画","给对方按摩捶背1分钟","唱一首抖音热门情歌","学鸭子叫","拥抱一分钟","让对方闭上眼睛给你涂口红","摸对方耳朵2秒","喂对方喝水","手牵手一分钟","拍一段表白的视频留作纪念","猪八戒背媳妇","用你的胸，轻轻拂过ta的小腹5次","一根手指放进你的嘴巴里","选择一件必须穿上的性感衣服或配饰","用祢的乳头蹭ta的乳头","用你的胸脯，爱抚ta的脸","你要穿上你最出格的衣服","用你的手指轻挠阴蒂","在你的每一个r头上涂上不同的食物","在1分钟的时间内尽全力让ta性致盎然","给ta发一张你的私密部位照片","让ta捏你的乳头","在黒暗赴相互爱抚","摆一个性感的姿势，让ta给你拍照片","在ta的胸部种一个草莓","选一个浴室用品，ta要在1分钟之内用此物给你带来快感","从颈部开始慢慢向下舔","肚子向下趴在地上，用一个枕头垫高你的骨盆","看着ta的眼睛抚摸自己的私处","用一种默契的眼神看着ta","玩你自己的手指，然后把手指放在你的嘴巴里","脱掉对方一件衣服","伸进衣服摸ta屁股30秒","自己趴着对方舔你后背20秒","想尽办法弄对方勃起或者流水","挠痒痒到对方求饶为止，至少10秒","猜拳输的被脱光所有衣服","捏ta奶头3下并配合呻吟","舔对方耳朵10秒","脱光衣服","把酒水或酸奶倒在自己身上对方舔干","被对方隔着衣服抚摸下体10秒","被对方伸进内裤抚摸20秒","和对方湿吻10秒","用嘴吸吮对方手指10秒","互相舌吻10秒","从后面抱着对方任意摩擦10秒","脱掉对方一条内裤","被对手用牙齿咬住乳头磨蹭10秒","为对方做一个放松的肩部按摩","与对方舌吻30秒","自拍一段接吻小视频","撅起PP让对方打5下","轻揉对方PP","用舌尖轻轻刺激对方耳朵","【惩罚】对方背对着坐到身上直到游戏结束","用丝巾或者眼罩绑住对方的眼睛，进行一个感官探索游戏","涂上油胸对胸帮对手推胸30秒","给对方按摩小腿","舔对方耳朵10秒","一起恶搞自拍","跪舔对方30秒","后入抽搐20次不许射","给对方按小腿1分钟","帮对手含住蛋蛋或阴蒂10秒舌头打转","和对方舌吻半分钟","和对方湿吻10秒","舔或轻咬对方耳垂5下","口含热水给对手进行口30秒","一起给对方按摩","尝试接吻的感觉","互相对视30s,最后互相接吻","和对方一起在马路上接吻",""],height:["乳交30秒","从背后伸手过来揉胸30秒","对方给你口置顶位置一分钟","拍一段涩涩视频","酸奶倒在大腿内测并吃干净","拍一段对方口的视频15秒","脱光衣服或穿情趣内衣","轻咬对方耳垂5下","湿吻10秒","舔对方脖子到胸30秒","用熊蹭对方脸10秒","撅起屁屁让对方打三下","男生喊住阴蒂10秒， 并舌头打转","对着镜子揉胸拍视频十秒","尝试一次外出xing爱","拥有一次对方kou交20分钟","帮对方舔全身各个部位2分钟","用嘴含住对手的蛋蛋","对方喊着水在你身上亲吻30秒","你们互相激情抚摸一分钟","看一段由ta选择的激情视频","你们面对面自慰","只能用小拇指，在ta双腿之间的私密地带嬉戏","舔ta身上的3个部位","你要用你的私处抚摸ta的身体1分钟","你任由ta把你绑起来","在你身体的一部分涂上奶油","双手和膝盖着地蹲着","用手指在离菊花越近越好的地方划着圈","肚子朝下趴在地上，再轻轻抬起屁屁","用冰块摩擦乳头","你们赤身裸体贴在一起，同时互相抚摸对方身体","给你的美臀拍照","你们互相亲吻，要让舌尖相触哦","在不脱掉T恤的前提下脱掉胸罩","用你的手轻轻环绕ta的脖子","把灯光调暗，只留下极暗的光线，再缓缓地脱掉你的衣服","拍一些你的情趣照片","赤身裸体，或者近乎赤身裸体，装作在做菜的样子","在不接触私密部位的前提下，用尽全力挑逗她","让她感觉到你的情欲","蹲在ta身上，她要用嘴给你带来快乐","一只手爱抚她的双臀之间的私密地带","你们互相激情抚摸一分钟","亲吻ta的肚子，同时手在她的乳头上游走","可以对你为所欲为","试着穿ta的胸罩","尝试一次外出xing爱","拥有一次对方kou交20分钟","你要在1分钟内抵抗住诱惑","你要竭尽所能让ta来抚摸你","来一场枕头大战吧","充满情欲地亲吻ta的颈脖","抚摸她的身体，舔她的耳朵吧","你让ta摁住你的脖子","用你的舌头触碰ta的舌头","激烈地吻ta30秒","轻轻地咬ta的屁屁","抚摸ta的屁屁。就让你的手指迷路一会儿吧","把你的手机调成振动模式放在私处","乳交30秒","从背后伸手过来揉胸30秒","对方给你口置顶位置一分钟","拍一段涩涩视频","被对方用牙齿咬住乳头磨蹭10秒","女生穿情趣内衣， 男生舔对方后背1分钟","温柔地舔她的嘴唇","轻轻啃ta右边的屁屁","提升她的快感，但是不能碰她的私处哦","吸吮ta的下嘴唇","把舌头滑进她的双唇之间","按摩ta的大腿20秒","轻轻吹气，让她越来越性奋","你们贴在一起互相摸对方的屁屁","可以在1分钟内挑逗身体部位","只用你的指尖，轻轻拂掠ta的身体","轻咬或吸吮她的嘴唇","脱掉一件衣服。鞋子和袜子不算数","在ta耳边轻轻说挑逗的话","让ta脱掉你的上衣","身体向后倾，亲吻ta","接吻","在1分钟內跳贴身舞","你们每人脱掉一件衣服","在她的身体上留下口红唇印哦","下一次你们和其他朋友一起出门的时候，你们双双都不要穿内衣内裤","你有1分钟来只用舌头和小拇指让ta欲仙欲死","选择她身体的一个部位，由你来剃毛","在ta的胸部种一个草莓","只用舌头，轻轻地挠ta的胸部","在客厅的地板上激情啪啪啪","说出你想和她一起做的极端的事情","你在ta的屁股上留下一丝口水，然后用舌头把口水涂开","同时要相互说挑逗的话","在30秒内各自自慰得到快感","尝试一次外出xing爱","拥有一次对方kou交20分钟","把她捆在椅子上，蒙住她的眼睛并玩弄她的身体","用一个水果来爱抚ta的私处","一只手抓住她的脖子，同时另一只手为她制造快感吧","你跪在地上，激烈地舔ta","用她的手指给你测体温","尝试一次外出xing爱","拥有一次对方kou交20分钟","可以在1分钟内在你身上满足她所有的欲望","不用手脱掉ta的内衣","你的整个手掌抓住ta的胸部，轻轻把玩","把ta的双手捆在她背后","喝一口酒，然后用你的舌头给她带去私密的快感","一边舔ta乳头，一边抚摸她的下体","用你的中指给她带去最强烈的快感","在她身体的不同部位(腹部、耳朵、嘴唇，等等)轻轻吹气","口含冰水伺候对方直到他/她受不了为止","用绳子把对方绑起来尽情调戏","指定身体某个部位让对方舔20秒","互相拥抱热吻30秒","躺下让对方服侍你一分钟","被对方捆起来任意处置3分钟","带上眼罩（或胸罩）被任意玩弄","撅起PP让对方拿数据线抽打3下","拽着女方头发后入30s","用口红在对方胸部上写下邪恶的文字","轻轻用舌头在对方背部画圈","男生给女生转账13.14（获取七夕主动权）","女生给男生转账13.14（获取七夕主动权）","男生深情对女生告白(成功后可策马崩腾）","吮吸对方的耳垂并喘粗气","女生深情对男生告白(成功后可策马崩腾）","互相激吻抚摸一分钟（扛不住诱惑的负责解决需求）","女生教导男生怎样才能让自己最舒服（男生必须认真聆听）","男生教导女生怎样才能让自己最舒服（女生必须认真聆听）","隔着衣服给对方胸部做5分钟情趣按摩","跪舔对方30秒（可指定任意部位）","脱光衣服（禁止抚摸）","打开美团购买一件情趣用品（男生付款）","躺在床上任由对方抚摸15秒","拍一段跟对方亲热的视频（游戏结束后删除）","用胸或JJ蹭对方脸部15秒","脱光衣服（穿上情趣内衣）","用牙齿咬住对方敏感部位磨蹭10秒","用妩媚的表情吸吮对方手指10秒","女生给男生来一次情趣按摩（对方有反应即止）","男生给女生来一次情趣按摩（对方有反应即止）","选择一件礼物让对方送给你（价值200以内）","想办法一分钟内把对方弄硬/湿","从额头一直往下舔直到脚趾结束","让对方撅起PP,用力拍5下（必须用力）","女生尽情调戏男生（男生什么都不能做）","躺下享受被对方舔遍全身一分钟","把手慢慢滑进对方的内裤里（轻轻的爱抚他/她）","蒙住对方的双眼,将他/她推到床上激情地吸吮","抚摸对方的屁股,并用指尖自由游走","慢慢地抚摸对方的大腿内侧（直到对方起反应为止）","假扮成医生给女生看病打针（用你的独有针头）","女生将胸部对着男生的背部摩擦","激情地亲吻女生的耳后（直到女生叫停）","女生假扮按摩师给男生按摩","用手轻轻的挑逗女生的樱桃小点（直到变硬）","从背后慢慢地进入女生的身体","将女生抱起并亲吻她1分钟（坚持不到一分钟接受女生任意惩罚）","用低温蜡在女生身上滴3下","女生躺下闭上眼睛,男生爱抚她的身体用你的口水覆盖她的全身","女生坐下,男生面对女生,把头放在女生的大腿内侧摩擦","男生隔着内裤舔女生10下,让她感受到你的欲火"],hot:["你的手要充满情欲地一直滑到她的下体","站在她身后并抚摸她的胸部","你要用你的舌头舔她","发挥你的创造力，不用手抚摸ta的大腿","你要抚摸，轻咬，亲吻ta的屁屁","用口水湿润你的手指，再轻柔地抚慰ta的菊花","可以用她的舌头来做想做的事","边热吻ta边抚摸她","把ta推到窗户上，在她耳边低声说出你的欲望","把酒倒在ta的胸部和肚子上，然后舔干净","同时爱抚ta身体的两个部位","喊着蛋蛋半分钟","对着镜子揉胸拍视频10秒","脱光","酸奶倒在大腿内测并吃干净","对方站着自己跪着帮他口","打开门， 在门口口交10秒","尝试一次外出xing爱","拥有一次对方kou交20分钟","用你的胸，轻轻拂过ta的小腹5次","一根手指放进你的嘴巴里","选择一件必须穿上的性感衣服或配饰","用祢的乳头蹭ta的乳头","让ta差一点就够摸到你，并在她眼前爱抚自己","掰开你的两瓣美臀","跪着双手拷背后为男主忘我kou并拍视频","用双乳为男主推油按摩背部和臀部至男主满意","被男主再下体塞跳跳糖后猛烈抽插30秒","不断舌舔吸撸舌头打转让男主高潮口射并吞","剥开密穴自摸阴蒂求男主cao死自己","骑男仆背上喊驾， 用皮鞭抽淀演骑马游戏","坐男仆身上抚摸胸部并掀起BRA用乳头碰他鼻尖挑逗","男仆的屁股上写某某的男仆让起撅屁股抓住JJ拍照留恋","命令男仆用JJ蘸番茄酱喂女王吃","女王把棒棒糖塞入私处让男仆舔","真空去买避孕套","拍一张口的照片","去超时或电梯露出","边打电话给父母边做","在1分钟内爱抚自己","你在ta的屁股上留下一丝口水，然后用舌头把口水涂开","同时要相互说挑逗的话","在30秒内各自自慰得到快感","把她捆在椅子上，蒙住她的眼睛并玩弄她的身体","用一个水果来爱抚ta的私处","一只手抓住她的脖子，同时另一只手为她制造快感吧","你跪在地上，激烈地舔ta","用她的手指给你测体温","可以在1分钟内在你身上满足她所有的欲望","不用手脱掉ta的内衣","你的整个手掌抓住ta的胸部，轻轻把玩","把ta的双手捆在她背后","喝一口酒，然后用你的舌头给她带去私密的快感","尝试一次外出xing爱","拥有一次对方kou交20分钟","一边舔ta乳头，一边抚摸她的下体","用你的中指给她带去最强烈的快感","用一只手解开ta的胸罩","试着舔自己的乳头","涂上口红，然后吻ta","拽着女方头发后入30s","跳一小段脱衣舞，只脱掉上衣","轻轻地咬ta的下唇","触摸ta身体的不同部位","像第一次接吻那样亲吻","用你的头发轻柔地抚摸ta的上半身","把胸罩轻柔地从你的胸部滑向你的私处","温柔地爱抚ta的屁屁","慢慢地爱抚ta的私密处","来一次情趣按摩","在2分钟内你们要互相回复短信，但不能说话","用你的胸部蹭ta的背部","抚摸你的私密处，直到下一次挑战","在床上从后面紧紧抱住","激情地舔ta的手指","自豪地向ta展示你的胸部","闭上眼睛，让ta给你尝三种食物","脱掉ta的衣服，只能用牙齿","【福利】对方含着水在你身上亲吻30秒","撅起PP让对方打5下","边插入边打对方屁股30秒","相互拥抱并热情亲吻30秒","后入抽搐20次不许射","【福利】对手帮你舔全身各个部位2分钟","后入抽插20次不许射","被对手用JJ打脸3下或B蹭脸10秒","拍一段和对方爱爱的视频","躺在床上任由对方抚摸30秒","【惩罚】撅起PP让对方打3下","用胸或者JJ蹭对方的脸10秒","脱光衣服[或穿情趣内衣]","【福利】对方给你口指定部位一分钟","观音坐莲30秒运动不许射","女穿情超内衣,男舔对方后背1分钟","被对方用牙齿咬住乳头磨蹭10秒","用嘴含住对手蛋蛋或阴蒂30秒","69式相互口交1分钟","吸吮对方手指10秒"],violent:["激烈反抗后被男主qj,为了不吃亏把男主qj","帮男主从拉链处掏出JJ用舌尖刺激","一起洗澡, 并为对方打上沐浴露, 游戏结束不许洗","双手涂油为男主变换手势为JJ做精致SPA","为男主跳脱衣热舞","让男主亲吻揉捏乳房","为男主捏肩捶背并不断吸允男主耳垂","让男仆JJ在外阴摩擦三次，然后内插一次（循环20次）","男仆条劲爆脱衣舞， 拖到只剩内裤时被女王使劲捏蛋蛋","拽着女方头发后入30s","用脉动瓶子给男仆紫薇，jj涂油全部塞入瓶内","用gui头帮女王胸部按摩俩分钟","男仆勃起JJ写死女王名并问这男仆谁的","被女王一只手托起下巴欣赏， 另一只手伸进裤子把玩蛋蛋","男含女阴蒂吸允直到女喊停， 节奏时快时慢","男仆为女王做背部推油并JJ涂油为阴道推油","男仆抽插时， 双腿交叉收集阴道口","男方跟异性表白","趴在地上叫对方妈妈","车震","把你的裸体发给作者","在楼道做","让女方穿上黑丝与搞高跟去加异性微信","选择她身体的一个部位，由你来剃毛","在ta的胸部种一个草莓","只用舌头，轻轻地挠ta的胸部","尝试一次外出xing爱","拥有一次对方kou交20分钟","在客厅的地板上激情啪啪啪","说出你想和她一起做的极端的事情","不断变化姿势让男主拍10张露yin道做手机壁纸","跪着被男主双手抓胳膊用JJ爆菊花一分钟","被男主暴力搓揉乳房并用俩指夹住乳头","跪着双手拷背后为男主忘我kou并拍视频","用双乳为男主推油按摩背部和臀部至男主满意","被男主再下体塞跳跳糖后猛烈抽插30秒","不断舌舔吸撸舌头打转让男主高潮口射并吞","剥开密穴自摸阴蒂求男主cao死自己","骑男仆背上喊驾， 用皮鞭抽淀演骑马游戏","坐男仆身上抚摸胸部并掀起BRA用乳头碰他鼻尖挑逗","男仆的屁股上写某某的男仆让起撅屁股抓住JJ拍照留恋","命令男仆用JJ蘸番茄酱喂女王吃","女王把棒棒糖塞入私处让男仆舔","真空去买避孕套","拍一张口的照片","去超时或电梯露出","边打电话给父母边做","在1分钟内爱抚自己","让ta差一点就够摸到你，并在她眼前爱抚自己","尝试一次外出xing爱","拥有一次对方kou交20分钟","掰开你的两瓣美臀","拽着女方头发后入30s","观看由ta选择的成人电影时自慰","仔仔细细地描述一下你今天穿的内衣","用手指辅助，展示你的私处","脱光","趴着撅屁股， 求男生进来， 被男主暴力揉胸并夹住乳头","上完小便后， 男生舔干净","舔对方屁眼15秒","让小狗真空出去买避孕套","打对方屁股， 打红为止","拍一张口的照片","对方跪着自己站着口一分钟","给对方戴上狗链","低温蜡烛滑热刺激敏感带","冰块冰火交替增加对方的兴奋感","适当的给对方皮鞭抽动的刺痛感","给对方穿上小尾巴","扮演霸道机长和性感空姐","在1分钟内爱抚自己","让ta差一点就够摸到你，并在她眼前爱抚自己","掰开你的两瓣美臀","尝试一次外出xing爱","拥有一次对方kou交20分钟","观看由ta选择的成人电影时自慰","仔仔细细地描述一下你今天穿的内衣","用手指辅助，展示你的私处","有2分钟对ta做想做的一切","让ta把你的脚踝和手腕捆在一起","尝试一次外出xing爱","拥有一次对方kou交20分钟","让ra先温柔地舔你30秒，再激烈地舔你","用你的舌头和一件羞羞的小道具与ta嬉戏","你们有2分钟的时间满足欲望","邀请一个你认识人加入你们的战斗","骑在ta身上1分钟","用你的手指，或是羞羞的小道具，给你自己带去快感","手肘撑地支撑胯部，做瑜伽的蜡烛式","和ta一起去淋浴，仔细地为ta清洗","在ta的脸部上方爱抚自己","把自己紧紧地裹在被子里，只露出头","你俯身倒在桌子上，胸部贴着桌面","让ta撕扯你的裤袜覆盖私处的部分","带上眼罩任由对方处置30秒","对方站着自己跪着帮他（她）口1分钟","将酸奶倒在对方乳头并舔干净吃掉","涂上油胸对胸帮对手推胸30秒","口含冰水或冰块给对手进行口30秒","对手从大腿根部倒水你接着喝光","把对方弄硬或弄湿","舔对方的脖子到胸30秒","打开门在门口口交10秒","和对方舌吻半分钟","后入抽插20次不许射","【惩罚】对方背对着坐到身上直到游戏结束","对着镜子后入一分钟，不许射","【福利】对方用嘴给你投食","被对方用脚踩胸或蛋蛋10秒","从额头一直往下舔到脚趾","对方站着自己跪着帮他（她）口一分钟","将酸奶倒在对方乳头上舔干净吃掉","拍一张给对方口交的照片","揉一下对方的胸或揪一下","用嘴含住对方的蛋蛋或阴蒂半分钟","用嘴含住对方的蛋蛋或阴蒂10秒","跟对方乳交半分钟","指定身上任意位置让对方舔20秒"],dog:["在她身体的不同部位(腹部、耳朵、嘴唇，等等)轻轻吹气","口含冰水伺候对方直到他/她受不了为止","用绳子把对方绑起来尽情调戏","指定身体某个部位让对方舔20秒","互相拥抱热吻30秒","躺下让对方服侍你一分钟","被对方捆起来任意处置3分钟","带上眼罩（或胸罩）被任意玩弄","撅起PP让对方拿数据线或鞭子抽打3下","用口红在对方胸部上写下邪恶的文字","轻轻用舌头在对方背部画圈","男生给女生转账13.14（获取七夕主动权）","女生给男生转账13.14（获取七夕主动权）","男生深情对女生告白(成功后可策马崩腾）","女生深情对男生告白(成功后可策马崩腾）","互相激吻抚摸一分钟（扛不住诱惑的负责解决需求）","女生教导男生怎样才能让自己最舒服（男生必须认真聆听）","男生教导女生怎样才能让自己最舒服（女生必须认真聆听）","隔着衣服给对方胸部做5分钟情趣按摩","跪舔对方30秒（可指定任意部位）","脱光衣服（禁止抚摸）","打开美团购买一件情趣用品（男生付款）","躺在床上任由对方抚摸15秒","拍一段跟对方亲热的视频（游戏结束后删除）","尝试一次外出xing爱","拥有一次对方kou交20分钟","给对方带上奶饰","用胸或JJ蹭对方脸部15秒","脱光衣服（穿上情趣内衣）","用牙齿咬住对方敏感部位磨蹭10秒","用妩媚的表情吸吮对方手指10秒","女生给男生来一次情趣按摩（对方有反应即止）","xing爱的时候尝试一个男女角色对调角色","男生给女生来一次情趣按摩（对方有反应即止）","选择一件礼物让对方送给你（价值200以内）","想办法一分钟内把对方弄硬/湿","从额头一直往下舔直到脚趾结束","让对方撅起PP,用力拍5下（必须用力）","女生尽情调戏男生（男生什么都不能做）","躺下享受被对方舔遍全身一分钟","把手慢慢滑进对方的内裤里（轻轻的爱抚他/她）","蒙住对方的双眼,将他/她推到床上激情地吸吮","抚摸对方的屁股,并用指尖自由游走","慢慢地抚摸对方的大腿内侧（直到对方起反应为止）","假扮成医生给女生看病打针（用你的独有针头）","女生将胸部对着男生的背部摩擦","激情地亲吻女生的耳后（直到女生叫停）","女生假扮按摩师给男生按摩","用手轻轻的挑逗女生的樱桃小点（直到变硬）","从背后慢慢地进入女生的身体","将女生抱起并亲吻她1分钟（坚持不到一分钟接受女生任意惩罚）","用低温蜡在女生身上滴3下","拽着女方头发后入30s","女生躺下闭上眼睛,男生爱抚她的身体用你的口水覆盖她的全身","女生坐下,男生面对女生,把头放在女生的大腿内侧摩擦","男生隔着内裤舔女生10下,让她感受到你的欲火","尝试一次外出xing爱","拥有一次对方kou交20分钟"],sm:["喝酒到微醺状态","舔对方屁眼15秒","让小狗真空出去买避孕套","打对方屁股， 打红为止","拍一张口的照片","用巴掌拍打对方的阴处","对方跪着自己站着口一分钟","给对方戴上狗链","低温蜡烛滑热刺激敏感带","给对方的菊花塞入肛塞","拽着狗链让对方跪下舔脚","用高跟鞋踩踏对方的弟弟","冰块冰火交替增加对方的兴奋感","适当的给对方皮鞭抽动的刺痛感","给对方穿上小尾巴","扮演霸道机长和性感空姐","同时要相互说挑逗的话","在爱爱的时候给对方胸部滴蜡","在30秒内各自自慰得到快感","把她捆在椅子上，蒙住她的眼睛并玩弄她的身体","用一个水果来爱抚ta的私处","一只手抓住她的脖子，同时另一只手为她制造快感吧","你跪在地上，激烈地舔ta","用她的手指给你测体温","可以在1分钟内在你身上满足她所有的欲望","不用手脱掉ta的内衣","你的整个手掌抓住ta的胸部，轻轻把玩","把ta的双手捆在她背后","后入对方的时候给对方屁股滴蜡","喝一口酒，然后用你的舌头给她带去私密的快感","一边舔ta乳头，一边抚摸她的下体","用你的中指给她带去最强烈的快感","男生抓着跪在地上的女生头发， 用鞭子或手抽女生屁股","男生用夹子夹住女生咪咪","半夜在楼道帮男生口， 女生不穿下衣","脱光对方并且用内裤绑住手模拟强奸","趴着撅屁股求男生进来， 被男主暴力揉胸并夹住乳头","上完小便后男生舔干净","全程戴着眼罩到结束","给对方用飞机杯打飞机,并且不让对方射","趴在地上学狗叫","舌吻30秒","咬住对方奶头20秒","把你的裸体发给作者","打对方屁股，打红为止","私密部位中倒满白水共男生引用","像口一样吸吮手指头10秒","舔对方脚30秒","童军绳缠住男人不安分小手","让他差一点就够摸到你，并在她眼前爱抚自己","眼罩遮住双眼放大男人的各个感官","观看由ta选择的成人电影时自慰","仔仔细细地描述一下你今天穿的内衣","用手指辅助，展示你的私处","有2分钟对ta做想做的一切","让ta把你的脚踝和手腕捆在一起","让ra先温柔地舔你30秒，再激烈地舔你","用你的舌头和一件羞羞的小道具与ta嬉戏","你们有2分钟的时间满足欲望","骑在ta身上1分钟","用你的手指，或是羞羞的小道具，给你自己带去快感","手肘撑地支撑胯部，做瑜伽的蜡烛式","和ta一起去淋浴，仔细地为ta清洗","把自己紧紧地裹在被子里，只露出头","你俯身倒在桌子上，胸部贴着桌面","让ta撕扯你的裤袜覆盖私处的部分","穿着高跟鞋踩男生私处一分钟","等男生小便后帮男生口","穿情趣丝袜给男生足交","让男生穿上衬衫， 半脱状态， 用打火机或低温蜡烛轻轻烧他的咪咪（注意把握距离， 安全最重要。）","让对方跪下绕着你爬行3圈","让对方蒙上眼睛， 并抽打任意位置","绑住手脚, 并用工具玩弄对方3分钟"],movie:["偷偷伸入对方的内裤","穿着情趣内衣去看电影","在影院给对方口","在影院给对方ziwei","摸女生的mimi","女生坐在男生的腿上","在电影院厕所play","在影院接吻","尝试在影院do love(慎重)","女生带着跳单看电影,并到电影结束","用嘴巴喂对方吃爆米花","电影结束前想办法塞入跳蛋并在结束后走出影院","用妩媚的表情吸吮对方手指10秒","在电影院用耳机听情色电影的声音并且互相给对方自wei","揪住对方的奶头10s不放手","男生带着跳单看完电影","看电影的时候给对方蒙上眼睛并且舔对方的胸部10s","在电影喝冰水给男方口10s"," "]},n=i;a.default=n},ddc0:function(t,a,e){"use strict";e.r(a);var i=e("ef03"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},ef03:function(t,a,e){"use strict";e("6a54");var i=e("f5bd").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("5c47"),e("a1c1"),e("bf0f"),e("2797"),e("aa9c");var n=i(e("d312")),o={data:function(){return{show:!1,content:"重新开始",listContent:[],randomIndex:[],list:[{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1},{value:"翻牌",show:!1}]}},onLoad:function(t){var a=t.item?t.item.replace('"([^"]*)"',""):"base";this.listContent=n.default[a],this.handleUptate()},methods:{update:function(){for(var t=this,a=(this.listContent.length,0);a<12;a++)this.getMathRandom();console.log(this.randomIndex,"randomIndex"),this.list.forEach((function(a,e){t.list[e].value=t.listContent[t.randomIndex[e]]}))},getMathRandom:function(){var t=Math.floor(Math.random()*this.listContent.length);this.randomIndex.some((function(a){return a==t}))?this.getMathRandom():this.randomIndex.push(t)},handleUptate:function(){this.randomIndex=[],this.list.forEach((function(t){t.show=!1})),this.update()},handleShow:function(t){this.list[t].show=!0}}};a.default=o}}]);