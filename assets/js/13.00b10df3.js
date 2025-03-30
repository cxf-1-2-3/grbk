(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{445:function(t,s,a){t.exports=a.p+"assets/img/jcsjlx.52fb3347.jpg"},446:function(t,s,a){t.exports=a.p+"assets/img/yysjlx.386b6d3c.jpg"},447:function(t,s,a){t.exports=a.p+"assets/img/szncfp.b1a99a9b.jpg"},448:function(t,s,a){t.exports=a.p+"assets/img/nct.02ff937e.jpg"},449:function(t,s,a){t.exports=a.p+"assets/img/ffcrz.170c4cf0.jpg"},450:function(t,s,a){t.exports=a.p+"assets/img/ewsznct1.4b814ab0.jpg"},451:function(t,s,a){t.exports=a.p+"assets/img/ewsznct2.e8256782.jpg"},452:function(t,s,a){t.exports=a.p+"assets/img/ewsznct3.f74a52fc.jpg"},453:function(t,s,a){t.exports=a.p+"assets/img/dxnct1.00b9d114.png"},454:function(t,s,a){t.exports=a.p+"assets/img/dxnct2.a33374d6.png"},455:function(t,s,a){t.exports=a.p+"assets/img/dxnct3.6370af2f.png"},456:function(t,s,a){t.exports=a.p+"assets/img/dxnct4.77f6181a.png"},457:function(t,s,a){t.exports=a.p+"assets/img/thisncz.4c84e91e.jpg"},578:function(t,s,a){"use strict";a.r(s);var r=a(21),_=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"内存图讲解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内存图讲解"}},[t._v("#")]),t._v(" 内存图讲解")]),t._v(" "),s("h2",{attrs:{id:"_1-java的内存分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-java的内存分配"}},[t._v("#")]),t._v(" 1. java的内存分配")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("堆:方法运行时使用的内存,例如：main方法运行，进入方法栈中执行\n栈:存储对象或者数组，new来创建的，都存储在内存\n方法区:存储可以运行的class文件\n本地方法栈:JVM在使用操作系统功能的时候使用，和我们开发无关\n寄存器:给CPU使用，和我们开发无关\n")])])]),s("h2",{attrs:{id:"_2-基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本数据类型"}},[t._v("#")]),t._v(" 2. 基本数据类型")]),t._v(" "),s("p",[s("img",{attrs:{src:a(445),alt:"基本数据类型"}})]),t._v(" "),s("h2",{attrs:{id:"_3-引用数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-引用数据类型"}},[t._v("#")]),t._v(" 3. 引用数据类型")]),t._v(" "),s("p",[s("img",{attrs:{src:a(446),alt:"引用数据类型"}})]),t._v(" "),s("h2",{attrs:{id:"_4-数组的内存图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-数组的内存图"}},[t._v("#")]),t._v(" 4. 数组的内存图")]),t._v(" "),s("p",[s("img",{attrs:{src:a(447),alt:"数组内存分配"}})]),t._v(" "),s("h2",{attrs:{id:"_5-两个数组指向同一个空间的内存图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-两个数组指向同一个空间的内存图"}},[t._v("#")]),t._v(" 5. 两个数组指向同一个空间的内存图")]),t._v(" "),s("p",[s("img",{attrs:{src:a(448),alt:" 两个数组指向同一个空间的内存图"}})]),t._v(" "),s("h2",{attrs:{id:"_6-方法调用的内存原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-方法调用的内存原理"}},[t._v("#")]),t._v(" 6. 方法调用的内存原理")]),t._v(" "),s("p",[s("img",{attrs:{src:a(449),alt:"方法的出入栈"}})]),t._v(" "),s("h2",{attrs:{id:"_7-二维数组的内存图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-二维数组的内存图"}},[t._v("#")]),t._v(" 7. 二维数组的内存图")]),t._v(" "),s("p",[s("img",{attrs:{src:a(450),alt:"二维数组内存图1"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(451),alt:"二维数组的内存图2"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(452),alt:"二维数组内存图3"}})]),t._v(" "),s("h2",{attrs:{id:"_8-对象内存图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-对象内存图"}},[t._v("#")]),t._v(" 8. 对象内存图")]),t._v(" "),s("h3",{attrs:{id:"_8-1-对象内存的操作步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-对象内存的操作步骤"}},[t._v("#")]),t._v(" 8.1 对象内存的操作步骤")]),t._v(" "),s("ol",[s("li",[t._v("加载class文件")]),t._v(" "),s("li",[t._v("申请局部变量")]),t._v(" "),s("li",[t._v("在堆内存中开辟一个空间")]),t._v(" "),s("li",[t._v("默认初始化")]),t._v(" "),s("li",[t._v("显示初始化")]),t._v(" "),s("li",[t._v("构造方法初始化")]),t._v(" "),s("li",[t._v("将堆内存中的地址赋值给左边的局部变量")])]),t._v(" "),s("h3",{attrs:{id:"_8-2-单个对象内存图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-单个对象内存图"}},[t._v("#")]),t._v(" 8.2 单个对象内存图")]),t._v(" "),s("ul",[s("li",[t._v("成员变量使用过程")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(453),alt:"1"}})]),t._v(" "),s("ul",[s("li",[t._v("成员方法调用过程")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(454),alt:"2"}})]),t._v(" "),s("h3",{attrs:{id:"_8-3-多个对象内存图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-多个对象内存图"}},[t._v("#")]),t._v(" 8.3 多个对象内存图")]),t._v(" "),s("ul",[s("li",[t._v("成员变量使用过程")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(455),alt:"3"}})]),t._v(" "),s("ul",[s("li",[t._v("成员方法调用过程")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(456),alt:"4"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("总结：")]),t._v(" "),s("p",[t._v("多个对象在堆内存中，都有不同的内存划分，成员变量存储在各自的内存区域中，成员方法多个对象共用的一份")])])]),t._v(" "),s("h2",{attrs:{id:"_9-this的内存图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-this的内存图"}},[t._v("#")]),t._v(" 9. this的内存图")]),t._v(" "),s("p",[s("img",{attrs:{src:a(457),alt:"thisncz"}})]),t._v(" "),s("h2",{attrs:{id:"n-注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#n-注意"}},[t._v("#")]),t._v(" n. 注意")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1.从JDK8开始，取消方法区，新增元空间。把原来方法区的多种功能进行拆分，有的功能放到了堆中，有的功能放到了元空间中。\n2.只要是new出来的一定是在堆里面开辟了一个小空间\n3.如果new了多次。那么在堆里面有多个小空间，每个小空间中都有各自的数据\n4.当两个数组指向同一个小空间时,其中一个数组对小空间中的值发生了改变，那么其他数组再次访问的时候都是修改之后的结果了\n5.传递引用数据类型时，传递的是地址值，形参的改变，影响实际参数的值\n  传递基本数据类型时，传递的是真实的数据，形参的改变，不影响实际参数的值。\n\n")])])]),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])])])}),[],!1,null,null,null);s.default=_.exports}}]);