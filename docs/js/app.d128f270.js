(function(e){function n(n){for(var a,h,m=n[0],b=n[1],o=n[2],x=0,i=[];x<m.length;x++)h=m[x],Object.prototype.hasOwnProperty.call(t,h)&&t[h]&&i.push(t[h][0]),t[h]=0;for(a in b)Object.prototype.hasOwnProperty.call(b,a)&&(e[a]=b[a]);l&&l(n);while(i.length)i.shift()();return g.push.apply(g,o||[]),r()}function r(){for(var e,n=0;n<g.length;n++){for(var r=g[n],a=!0,m=1;m<r.length;m++){var b=r[m];0!==t[b]&&(a=!1)}a&&(g.splice(n--,1),e=h(h.s=r[0]))}return e}var a={},t={app:0},g=[];function h(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,h),r.l=!0,r.exports}h.m=e,h.c=a,h.d=function(e,n,r){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(h.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)h.d(r,a,function(n){return e[n]}.bind(null,a));return r},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="/";var m=window["webpackJsonp"]=window["webpackJsonp"]||[],b=m.push.bind(m);m.push=n,m=m.slice();for(var o=0;o<m.length;o++)n(m[o]);var l=b;g.push([0,"chunk-vendors"]),r()})({0:function(e,n,r){e.exports=r("56d7")},"27c1":function(e){e.exports=JSON.parse('[{"hex":"#EFDECD","name":"Almond","rgb":"(239, 222, 205)"},{"hex":"#CD9575","name":"Antique Brass","rgb":"(205, 149, 117)"},{"hex":"#FDD9B5","name":"Apricot","rgb":"(253, 217, 181)"},{"hex":"#78DBE2","name":"Aquamarine","rgb":"(120, 219, 226)"},{"hex":"#87A96B","name":"Asparagus","rgb":"(135, 169, 107)"},{"hex":"#FFA474","name":"Atomic Tangerine","rgb":"(255, 164, 116)"},{"hex":"#FAE7B5","name":"Banana Mania","rgb":"(250, 231, 181)"},{"hex":"#9F8170","name":"Beaver","rgb":"(159, 129, 112)"},{"hex":"#FD7C6E","name":"Bittersweet","rgb":"(253, 124, 110)"},{"hex":"#000000","name":"Black","rgb":"(0,0,0)"},{"hex":"#ACE5EE","name":"Blizzard Blue","rgb":"(172, 229, 238)"},{"hex":"#1F75FE","name":"Blue","rgb":"(31, 117, 254)"},{"hex":"#A2A2D0","name":"Blue Bell","rgb":"(162, 162, 208)"},{"hex":"#6699CC","name":"Blue Gray","rgb":"(102, 153, 204)"},{"hex":"#0D98BA","name":"Blue Green","rgb":"(13, 152, 186)"},{"hex":"#7366BD","name":"Blue Violet","rgb":"(115, 102, 189)"},{"hex":"#DE5D83","name":"Blush","rgb":"(222, 93, 131)"},{"hex":"#CB4154","name":"Brick Red","rgb":"(203, 65, 84)"},{"hex":"#B4674D","name":"Brown","rgb":"(180, 103, 77)"},{"hex":"#FF7F49","name":"Burnt Orange","rgb":"(255, 127, 73)"},{"hex":"#EA7E5D","name":"Burnt Sienna","rgb":"(234, 126, 93)"},{"hex":"#B0B7C6","name":"Cadet Blue","rgb":"(176, 183, 198)"},{"hex":"#FFFF99","name":"Canary","rgb":"(255, 255, 153)"},{"hex":"#1CD3A2","name":"Caribbean Green","rgb":"(28, 211, 162)"},{"hex":"#FFAACC","name":"Carnation Pink","rgb":"(255, 170, 204)"},{"hex":"#DD4492","name":"Cerise","rgb":"(221, 68, 146)"},{"hex":"#1DACD6","name":"Cerulean","rgb":"(29, 172, 214)"},{"hex":"#BC5D58","name":"Chestnut","rgb":"(188, 93, 88)"},{"hex":"#DD9475","name":"Copper","rgb":"(221, 148, 117)"},{"hex":"#9ACEEB","name":"Cornflower","rgb":"(154, 206, 235)"},{"hex":"#FFBCD9","name":"Cotton Candy","rgb":"(255, 188, 217)"},{"hex":"#FDDB6D","name":"Dandelion","rgb":"(253, 219, 109)"},{"hex":"#2B6CC4","name":"Denim","rgb":"(43, 108, 196)"},{"hex":"#EFCDB8","name":"Desert Sand","rgb":"(239, 205, 184)"},{"hex":"#6E5160","name":"Eggplant","rgb":"(110, 81, 96)"},{"hex":"#CEFF1D","name":"Electric Lime","rgb":"(206, 255, 29)"},{"hex":"#71BC78","name":"Fern","rgb":"(113, 188, 120)"},{"hex":"#6DAE81","name":"Forest Green","rgb":"(109, 174, 129)"},{"hex":"#C364C5","name":"Fuchsia","rgb":"(195, 100, 197)"},{"hex":"#CC6666","name":"Fuzzy Wuzzy","rgb":"(204, 102, 102)"},{"hex":"#E7C697","name":"Gold","rgb":"(231, 198, 151)"},{"hex":"#FCD975","name":"Goldenrod","rgb":"(252, 217, 117)"},{"hex":"#A8E4A0","name":"Granny Smith Apple","rgb":"(168, 228, 160)"},{"hex":"#95918C","name":"Gray","rgb":"(149, 145, 140)"},{"hex":"#1CAC78","name":"Green","rgb":"(28, 172, 120)"},{"hex":"#1164B4","name":"Green Blue","rgb":"(17, 100, 180)"},{"hex":"#F0E891","name":"Green Yellow","rgb":"(240, 232, 145)"},{"hex":"#FF1DCE","name":"Hot Magenta","rgb":"(255, 29, 206)"},{"hex":"#B2EC5D","name":"Inchworm","rgb":"(178, 236, 93)"},{"hex":"#5D76CB","name":"Indigo","rgb":"(93, 118, 203)"},{"hex":"#CA3767","name":"Jazzberry Jam","rgb":"(202, 55, 103)"},{"hex":"#3BB08F","name":"Jungle Green","rgb":"(59, 176, 143)"},{"hex":"#FEFE22","name":"Laser Lemon","rgb":"(254, 254, 34)"},{"hex":"#FCB4D5","name":"Lavender","rgb":"(252, 180, 213)"},{"hex":"#FFF44F","name":"Lemon Yellow","rgb":"(255, 244, 79)"},{"hex":"#FFBD88","name":"Macaroni and Cheese","rgb":"(255, 189, 136)"},{"hex":"#F664AF","name":"Magenta","rgb":"(246, 100, 175)"},{"hex":"#AAF0D1","name":"Magic Mint","rgb":"(170, 240, 209)"},{"hex":"#CD4A4C","name":"Mahogany","rgb":"(205, 74, 76)"},{"hex":"#EDD19C","name":"Maize","rgb":"(237, 209, 156)"},{"hex":"#979AAA","name":"Manatee","rgb":"(151, 154, 170)"},{"hex":"#FF8243","name":"Mango Tango","rgb":"(255, 130, 67)"},{"hex":"#C8385A","name":"Maroon","rgb":"(200, 56, 90)"},{"hex":"#EF98AA","name":"Mauvelous","rgb":"(239, 152, 170)"},{"hex":"#FDBCB4","name":"Melon","rgb":"(253, 188, 180)"},{"hex":"#1A4876","name":"Midnight Blue","rgb":"(26, 72, 118)"},{"hex":"#30BA8F","name":"Mountain Meadow","rgb":"(48, 186, 143)"},{"hex":"#C54B8C","name":"Mulberry","rgb":"(197, 75, 140)"},{"hex":"#1974D2","name":"Navy Blue","rgb":"(25, 116, 210)"},{"hex":"#FFA343","name":"Neon Carrot","rgb":"(255, 163, 67)"},{"hex":"#BAB86C","name":"Olive Green","rgb":"(186, 184, 108)"},{"hex":"#FF7538","name":"Orange","rgb":"(255, 117, 56)"},{"hex":"#FF2B2B","name":"Orange Red","rgb":"(255, 43, 43)"},{"hex":"#F8D568","name":"Orange Yellow","rgb":"(248, 213, 104)"},{"hex":"#E6A8D7","name":"Orchid","rgb":"(230, 168, 215)"},{"hex":"#414A4C","name":"Outer Space","rgb":"(65, 74, 76)"},{"hex":"#FF6E4A","name":"Outrageous Orange","rgb":"(255, 110, 74)"},{"hex":"#1CA9C9","name":"Pacific Blue","rgb":"(28, 169, 201)"},{"hex":"#FFCFAB","name":"Peach","rgb":"(255, 207, 171)"},{"hex":"#C5D0E6","name":"Periwinkle","rgb":"(197, 208, 230)"},{"hex":"#FDDDE6","name":"Piggy Pink","rgb":"(253, 221, 230)"},{"hex":"#158078","name":"Pine Green","rgb":"(21, 128, 120)"},{"hex":"#FC74FD","name":"Pink Flamingo","rgb":"(252, 116, 253)"},{"hex":"#F78FA7","name":"Pink Sherbet","rgb":"(247, 143, 167)"},{"hex":"#8E4585","name":"Plum","rgb":"(142, 69, 133)"},{"hex":"#7442C8","name":"Purple Heart","rgb":"(116, 66, 200)"},{"hex":"#9D81BA","name":"Purple Mountain\'s Majesty","rgb":"(157, 129, 186)"},{"hex":"#FE4EDA","name":"Purple Pizzazz","rgb":"(254, 78, 218)"},{"hex":"#FF496C","name":"Radical Red","rgb":"(255, 73, 108)"},{"hex":"#D68A59","name":"Raw Sienna","rgb":"(214, 138, 89)"},{"hex":"#714B23","name":"Raw Umber","rgb":"(113, 75, 35)"},{"hex":"#FF48D0","name":"Razzle Dazzle Rose","rgb":"(255, 72, 208)"},{"hex":"#E3256B","name":"Razzmatazz","rgb":"(227, 37, 107)"},{"hex":"#EE204D","name":"Red","rgb":"(238,32 ,77 )"},{"hex":"#FF5349","name":"Red Orange","rgb":"(255, 83, 73)"},{"hex":"#C0448F","name":"Red Violet","rgb":"(192, 68, 143)"},{"hex":"#1FCECB","name":"Robin\'s Egg Blue","rgb":"(31, 206, 203)"},{"hex":"#7851A9","name":"Royal Purple","rgb":"(120, 81, 169)"},{"hex":"#FF9BAA","name":"Salmon","rgb":"(255, 155, 170)"},{"hex":"#FC2847","name":"Scarlet","rgb":"(252, 40, 71)"},{"hex":"#76FF7A","name":"Screamin\' Green","rgb":"(118, 255, 122)"},{"hex":"#9FE2BF","name":"Sea Green","rgb":"(159, 226, 191)"},{"hex":"#A5694F","name":"Sepia","rgb":"(165, 105, 79)"},{"hex":"#8A795D","name":"Shadow","rgb":"(138, 121, 93)"},{"hex":"#45CEA2","name":"Shamrock","rgb":"(69, 206, 162)"},{"hex":"#FB7EFD","name":"Shocking Pink","rgb":"(251, 126, 253)"},{"hex":"#CDC5C2","name":"Silver","rgb":"(205, 197, 194)"},{"hex":"#80DAEB","name":"Sky Blue","rgb":"(128, 218, 235)"},{"hex":"#ECEABE","name":"Spring Green","rgb":"(236, 234, 190)"},{"hex":"#FFCF48","name":"Sunglow","rgb":"(255, 207, 72)"},{"hex":"#FD5E53","name":"Sunset Orange","rgb":"(253, 94, 83)"},{"hex":"#FAA76C","name":"Tan","rgb":"(250, 167, 108)"},{"hex":"#18A7B5","name":"Teal Blue","rgb":"(24, 167, 181)"},{"hex":"#EBC7DF","name":"Thistle","rgb":"(235, 199, 223)"},{"hex":"#FC89AC","name":"Tickle Me Pink","rgb":"(252, 137, 172)"},{"hex":"#DBD7D2","name":"Timberwolf","rgb":"(219, 215, 210)"},{"hex":"#17806D","name":"Tropical Rain Forest","rgb":"(23, 128, 109)"},{"hex":"#DEAA88","name":"Tumbleweed","rgb":"(222, 170, 136)"},{"hex":"#77DDE7","name":"Turquoise Blue","rgb":"(119, 221, 231)"},{"hex":"#FFFF66","name":"Unmellow Yellow","rgb":"(255, 255, 102)"},{"hex":"#926EAE","name":"Violet (Purple)","rgb":"(146, 110, 174)"},{"hex":"#324AB2","name":"Violet Blue","rgb":"(50, 74, 178)"},{"hex":"#F75394","name":"Violet Red","rgb":"(247, 83, 148)"},{"hex":"#FFA089","name":"Vivid Tangerine","rgb":"(255, 160, 137)"},{"hex":"#8F509D","name":"Vivid Violet","rgb":"(143, 80, 157)"},{"hex":"#FFFFFF","name":"White","rgb":"(255, 255, 255)"},{"hex":"#A2ADD0","name":"Wild Blue Yonder","rgb":"(162, 173, 208)"},{"hex":"#FF43A4","name":"Wild Strawberry","rgb":"(255, 67, 164)"},{"hex":"#FC6C85","name":"Wild Watermelon","rgb":"(252, 108, 133)"},{"hex":"#CDA4DE","name":"Wisteria","rgb":"(205, 164, 222)"},{"hex":"#FCE883","name":"Yellow","rgb":"(252, 232, 131)"},{"hex":"#C5E384","name":"Yellow Green","rgb":"(197, 227, 132)"},{"hex":"#FFAE42","name":"Yellow Orange","rgb":"(255, 174, 66)"}]')},"56d7":function(e,n,r){"use strict";r.r(n);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("v-app",[r("v-main",[r("MainScreen")],1)],1)},g=[],h=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":""}},e._l(25,(function(n){return r("v-col",{key:n,attrs:{lg:"3",md:"4",sm:"6",cols:"6"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(n){var a=n.hover;return[r("v-card",{attrs:{tile:"",color:e.colors[Math.floor(133*Math.random())].hex,elevation:a?12:2}},[r("v-responsive",{attrs:{"aspect-ratio":1}},[r("v-card-text",[e._v(" OPA ")])],1)],1)]}}],null,!0)})],1)})),1)],1)},m=[],b=r("27c1"),o={data:function(){return{colors:b}}},l=o,x=r("2877"),i=r("6544"),u=r.n(i),F=r("b0af"),c=r("99d9"),C=r("62ad"),s=r("a523"),B=r("ce87"),D=r("6b53"),A=r("0fd9"),p=Object(x["a"])(l,h,m,!1,null,null,null),d=p.exports;u()(p,{VCard:F["a"],VCardText:c["a"],VCol:C["a"],VContainer:s["a"],VHover:B["a"],VResponsive:D["a"],VRow:A["a"]});var E={name:"App",components:{MainScreen:d},data:function(){return{}}},f=E,v=r("7496"),y=r("f6c4"),w=Object(x["a"])(f,t,g,!1,null,null,null),M=w.exports;u()(w,{VApp:v["a"],VMain:y["a"]});var S=r("f309");a["a"].use(S["a"]);var O=new S["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:O,render:function(e){return e(M)}}).$mount("#app")}});
//# sourceMappingURL=app.d128f270.js.map