(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{540:function(t,a,s){t.exports=s.p+"assets/img/xjxm.29a3617e.jpg"},541:function(t,a,s){t.exports=s.p+"assets/img/txxmxx.58e50697.jpg"},542:function(t,a,s){t.exports=s.p+"assets/img/ylxg.87774d42.jpg"},595:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"小程序开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序开发"}},[t._v("#")]),t._v(" 小程序开发")]),t._v(" "),a("h2",{attrs:{id:"一、小程序和普通网页开发区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、小程序和普通网页开发区别"}},[t._v("#")]),t._v(" 一、小程序和普通网页开发区别")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.运行环境不同\n\t网页:浏览器环境\n\t小程序：微信环境\n\t\n2.API不同\n \t在小程序中，无法调用浏览器的DOM和 BOM API\n \t存在的可以调用微信环境提供的API：微信支付、微信扫描、地理定位\n \t\n3.开发模式不同\n\t页面开发模式：代码编辑器 + 浏览器\n\t小程序有自己的标准开发模式\n\t\ta.申请小程序开发账号\n\t\tb.安装小程序开发者工具\n\t\tc.创建和配置并开发小程序项目\n\t\td.上线到微信提供的环境当中\n\t\t\n4.网页开发渲染线程和脚本线程是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应。在小程序中，二者是分开的，分别运行在不同的线程中。\n \n5.运行机制\n\ta.小程序启动\n\t\t把小程序的代码包下载到本地\n        加载app.json全局配置文件\n        执行app.js小程序入口文件，调用APP()创建小程序实例\n        渲染小程序首页\n        小程序启动完成   \n\tb.页面渲染\n\t\t加载页面的.json配置文件\n        加载页面的.wxml模板和.wxss样式\n        执行页面的.js文件，调用Page()创建页面实例\n        页面渲染完成\n")])])]),a("h2",{attrs:{id:"二、注册小程序开发账号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、注册小程序开发账号"}},[t._v("#")]),t._v(" 二、注册小程序开发账号")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.打开小程序注册页面https://mp.weixin.qq.com/\n2.选择注册的账号类型\n3.填写账号信息\n4.邮箱激活\n")])])]),a("h2",{attrs:{id:"三、下载微信开发者工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、下载微信开发者工具"}},[t._v("#")]),t._v(" 三、下载微信开发者工具")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.了解微信开发者工具(小程序开发工具)\n\n2.主要功能：\n\t-创建小程序项目\n\t-代码查看编辑\n\t-小程序功能的开发和调试\n\t\n3.下载并安装微信开发者工具\n\t-推荐下载和安装最新的稳定版stable build 的微信开发者工具\n\t-微信开发者工具[地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)\n\t-安装方式： 下一步 -> 下一步\n\n4.扫码登录开发者工具\n\n5.设置外观\n\n6.设置代理\n\t-尽量设置成不使用任何代理，勾选后直连网络\n\t-原因：安装网络加速或者翻墙工具导致网络不稳定\n")])])]),a("h2",{attrs:{id:"四、创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、创建项目"}},[t._v("#")]),t._v(" 四、创建项目")]),t._v(" "),a("h3",{attrs:{id:"_1-点击-号-创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-点击-号-创建项目"}},[t._v("#")]),t._v(" 1.点击+号，创建项目"),a("img",{attrs:{src:s(540),alt:"新建项目"}})]),t._v(" "),a("h3",{attrs:{id:"_2-填写项目信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-填写项目信息"}},[t._v("#")]),t._v(" 2.填写项目信息")]),t._v(" "),a("p",[a("img",{attrs:{src:s(541),alt:"填写项目信息"}})]),t._v(" "),a("h3",{attrs:{id:"_3-预览效果展示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-预览效果展示"}},[t._v("#")]),t._v(" 3.预览效果展示"),a("img",{attrs:{src:s(542),alt:"预览效果"}})]),t._v(" "),a("h2",{attrs:{id:"五、小程序项目构成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、小程序项目构成"}},[t._v("#")]),t._v(" 五、小程序项目构成")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('1.项目构成\n    pages                 存放所有小程序页面的\n    utils                 用来存在工具性的模块\n    app.js                小程序的入口文件\n    app.json              小程序项目的全局配置文件\n    app.wxss              小程序项目全局样式文件\n    project.config.json   项目的配置文件\n    sitemap.json          用于配置小程序及其页面是否允许被微信索引\n\n2.页面组成\n    .js      页面脚本文件，定义页面的数据、事件、生命周期\n    .json    页面的配置文件，配置页面的外观、表现\n    .wxml    页面的模板结构\n    .wxss    页面的样式文件\n\n3.初始页面的定义\n \t-配置 "entryPagePath": "pages/index/index",\n    -不配entryPagePath,"pages"中第一和就是初始页面\n')])])]),a("h2",{attrs:{id:"六、wxml的概念以及和html之间的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、wxml的概念以及和html之间的区别"}},[t._v("#")]),t._v(" 六、WXML的概念以及和HTML之间的区别")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.什么是wxml\nwxml是框架设计的一套标签语言(组件)，用来构建小程序页面的结构，其作用类似于网页开发中的html\n2.wxml和html的区别\n  标签名不同、标签属性不同、提供了类似于vue的模板语法\n")])])]),a("h2",{attrs:{id:"七、wxss的概念以及css之间的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、wxss的概念以及css之间的区别"}},[t._v("#")]),t._v(" 七、WXSS的概念以及css之间的区别")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.什么是wxss\nwxss是一套样式语言，用于描述wxml的组件样式，类似于css\n2.wxss和css区别\n  新增rpx自适应尺寸单位\n  \tcss中需要手动进行像素单位转换\n  \twxss在底层支持新的尺寸单位rpx，在不同大小的屏幕上小程序会自动进行换算\n  提供了全局的样式和局部样式\n  \t项目根目录中的app.wxss会作用于所以小程序页面\n  \t局部页面的.wxss样式仅对当前页面生效\n  wxss支持部分css选择器\n  \t.class和#id\n  \telement(标签选择器)\n  \t并集选择器和后代选择器\n  \t::after和::before等伪类选择器\n")])])]),a("h2",{attrs:{id:"八、小程序中的js文件分类为三大类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#八、小程序中的js文件分类为三大类"}},[t._v("#")]),t._v(" 八、小程序中的js文件分类为三大类：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.app.js  是整个小程序项目的入口文件，通过调用App()函数，来启动小程序\n2.页面的.js文件  是页面的入口文件，通过调用Page()函数来创建小程序页面，并运行小程序页面\n3.普通的.js文件  是普通的功能模块文件，用来封装公共的函数或属性共\n")])])]),a("h2",{attrs:{id:"九、宿主环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#九、宿主环境"}},[t._v("#")]),t._v(" 九、宿主环境")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.宿主环境的概念\n\t宿主环境是程序运行的环境，Android和ios系统是两个不同的宿主环境\n\n2.小程序的宿主环境\n\t小程序借助宿主环境提供的能力，可以完成许多网页不能的功能 (微信扫码、微信支付、微信登录、地理定位)\n\n3.小程序的宿主环境包含\n\t通信模型、运行机制、组件、API\n\t\n4.小程序通信模型\n\ta.通信主体\n\t\t主体是渲染层和逻辑层，其中:\n\t\t\t(1)wxml模型和wxss样式工作在渲染层\n\t\t\t(2)js脚本工作在逻辑层\n\tb.工作方式\n\t\t(1)渲染层和逻辑层之间的通信      由微信客户端进行转发\n\t\t(2)逻辑层和第三方服务器之间通信   微信客户端进行转发\n")])])]),a("h2",{attrs:{id:"十、小程序中的组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十、小程序中的组件"}},[t._v("#")]),t._v(" 十、小程序中的组件")]),t._v(" "),a("h3",{attrs:{id:"_1-常见使用容器组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-常见使用容器组件"}},[t._v("#")]),t._v(" 1."),a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/component/",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见使用容器组件"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("视图容器、基础内容、表单组件、导航组件、媒体组件、map地图组件、canvas画布组件、开发能力、无障碍访问\n")])])]),a("h3",{attrs:{id:"_2-常见的视图组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-常见的视图组件"}},[t._v("#")]),t._v(" 2.常见的视图组件")]),t._v(" "),a("h4",{attrs:{id:"_2-1view组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1view组件"}},[t._v("#")]),t._v(" 2.1view组件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.介绍\n\t普通视图区域\n\t类似于HTML中的div，是块级元素\n\t常用来实现页面布局效果\n")])])]),a("h4",{attrs:{id:"_2-2scroll-view组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2scroll-view组件"}},[t._v("#")]),t._v(" 2.2scroll-view组件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1.介绍\n\t可滚动的视图区域\n\t常用来实现滚动列表\n\n2.使用\n<scroll-view  scroll-y></scroll-view>  竖轴滚动必须设置高度\n")])])]),a("h4",{attrs:{id:"_2-3swiper和swiper-item"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3swiper和swiper-item"}},[t._v("#")]),t._v(" 2.3swiper和swiper-item")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v('1.介绍\n\t轮播图容器组件和轮播图item组件\n\n2.使用\n  在wxml中\n   <swiper class=\'swiper_box\' interval=\'500\' autoplay\tcircular indicator-dots>\n    <swiper-item>\n      <view class="swiper_item_box box1">1</view>\n    </swiper-item>\n    <swiper-item>\n      <view class="swiper_item_box box2">2</view>\n    </swiper-item>\n    <swiper-item>\n      <view class="swiper_item_box box3">3</view>\n    </swiper-item>\n   </swiper>\n  在wxss中\n\t.swiper_box')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".swiper_item_box")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" greenyellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-常见的基本内容组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-常见的基本内容组件"}},[t._v("#")]),t._v(" 3.常见的基本内容组件")]),t._v(" "),a("h4",{attrs:{id:"_3-1text组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1text组件"}},[t._v("#")]),t._v(" 3.1text组件")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("1.介绍\n\t文本组件类似于HTML中的span标签，是个行内元素\n\n2.使用\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("user-select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("111111111111111"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-2rich-text组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2rich-text组件"}},[t._v("#")]),t._v(" 3.2rich-text组件")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("1.介绍\n\t富文本组件,支持把HTML字符串渲染为WXML结果\n\n2.使用\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("rich-text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('nodes="<h2')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("表情内容<")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("h2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("rich-text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-表单组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-表单组件"}},[t._v("#")]),t._v(" 4.表单组件")]),t._v(" "),a("h4",{attrs:{id:"_4-1button按钮组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1button按钮组件"}},[t._v("#")]),t._v(" 4.1button按钮组件")]),t._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("1.介绍\n\t按钮组件:功能比HTML的button更丰富,通过open-type属性可以调用微信提供的各种功能\n\n2.使用\n\t "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("warn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mini"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("plain")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loading")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("123"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t //type  按钮的样式  primary 绿色/default 白色/warn 红色\n\t //size  按钮的大小 default 默认大小/mini 小尺寸\n\t //plain 按钮是否镂空，背景色透明\n")])])]),a("h3",{attrs:{id:"_5-媒体组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-媒体组件"}},[t._v("#")]),t._v(" 5.媒体组件")]),t._v(" "),a("h4",{attrs:{id:"_5-1image图片组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1image图片组件"}},[t._v("#")]),t._v(" 5.1image图片组件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('1.介绍\n\t展示图片组件\n\t\n2.使用\n\t<image src="../images/2.jpg" mode="widthFix"></image>\n\t//src  主持本地和网络上的图片\n\t//mode 指定图片的剪裁、缩放模式\n\t\tscaleToFill\t缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素\t\n\t\taspectFit\t缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。\t\n\t\taspectFill\t缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。\t\n\t\twidthFix\t缩放模式，宽度不变，高度自动变化，保持原图宽高比不变\t\n\t\theightFix\t缩放模式，高度不变，宽度自动变化，保持原图宽高比不变\t2.10.3\n\t\ttop\t裁剪模式，不缩放图片，只显示图片的顶部区域。仅 Webview 支持。\t\n\t\tbottom\t裁剪模式，不缩放图片，只显示图片的底部区域。仅 Webview 支持。\t\n\t\tcenter\t裁剪模式，不缩放图片，只显示图片的中间区域。仅 Webview 支持。\t\n\t\tleft\t裁剪模式，不缩放图片，只显示图片的左边区域。仅 Webview 支持。\t\n\t\tright\t裁剪模式，不缩放图片，只显示图片的右边区域。仅 Webview 支持。\t\n\t\ttop left\t裁剪模式，不缩放图片，只显示图片的左上边区域。仅 Webview 支持。\t\n\t\ttop right\t裁剪模式，不缩放图片，只显示图片的右上边区域。仅 Webview 支持。\t\n\t\tbottom left\t裁剪模式，不缩放图片，只显示图片的左下边区域。仅 Webview 支持。\t\n\t\tbottom right\t裁剪模式，不缩放图片，只显示图片的右下边区域。仅 Webview 支持。\n')])])]),a("h2",{attrs:{id:"十三、协调工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十三、协调工作"}},[t._v("#")]),t._v(" 十三、协调工作")]),t._v(" "),a("h3",{attrs:{id:"_1-项目成员-运营者、开发者、数据分析者"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目成员-运营者、开发者、数据分析者"}},[t._v("#")]),t._v(" 1.项目成员(运营者、开发者、数据分析者)")]),t._v(" "),a("h3",{attrs:{id:"_2-体验成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-体验成员"}},[t._v("#")]),t._v(" 2.体验成员")]),t._v(" "),a("h2",{attrs:{id:"十四、上传小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十四、上传小程序"}},[t._v("#")]),t._v(" 十四、上传小程序")]),t._v(" "),a("h2",{attrs:{id:"十五、小程序码及线下物料下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十五、小程序码及线下物料下载"}},[t._v("#")]),t._v(" 十五、小程序码及线下物料下载")])])}),[],!1,null,null,null);a.default=e.exports}}]);