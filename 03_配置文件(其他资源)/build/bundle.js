!function(){var A={610:function(A,t,n){"use strict";var e=n(601),r=n.n(e),c=n(314),a=n.n(c),o=n(549),g=n(417),i=n.n(g),S=new URL(n(773),n.b),s=a()(r());s.i(o.A);var J=i()(S);s.push([A.id,".content {\n    color: red;\n}\n\n.icon {\n    width: 100px;\n    height: 100px;\n}\n\n.bg {\n    display: inline-block;\n    width: 200px;\n    height: 200px;\n    border: 1px solid #639;\n    background-image: url("+J+");\n    background-size: cover;\n}\n",""]),t.A=s},549:function(A,t,n){"use strict";var e=n(601),r=n.n(e),c=n(314),a=n.n(c)()(r());a.push([A.id,".content {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n    transition: all 2s ease;\n    background-color: rgba(0,255,0,0.4);\n}\n",""]),t.A=a},663:function(A,t,n){"use strict";var e=n(601),r=n.n(e),c=n(314),a=n.n(c)()(r());a.push([A.id,".content {\n  font-size: 50px;\n  font-weight: bold;\n}\n",""]),t.A=a},314:function(A){"use strict";A.exports=function(A){var t=[];return t.toString=function(){return this.map((function(t){var n="",e=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),e&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=A(t),e&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(A,n,e,r,c){"string"==typeof A&&(A=[[null,A,void 0]]);var a={};if(e)for(var o=0;o<this.length;o++){var g=this[o][0];null!=g&&(a[g]=!0)}for(var i=0;i<A.length;i++){var S=[].concat(A[i]);e&&a[S[0]]||(void 0!==c&&(void 0===S[5]||(S[1]="@layer".concat(S[5].length>0?" ".concat(S[5]):""," {").concat(S[1],"}")),S[5]=c),n&&(S[2]?(S[1]="@media ".concat(S[2]," {").concat(S[1],"}"),S[2]=n):S[2]=n),r&&(S[4]?(S[1]="@supports (".concat(S[4],") {").concat(S[1],"}"),S[4]=r):S[4]="".concat(r)),t.push(S))}},t}},417:function(A){"use strict";A.exports=function(A,t){return t||(t={}),A?(A=String(A.__esModule?A.default:A),/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),t.hash&&(A+=t.hash),/["'() \t\n]|(%20)/.test(A)||t.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A):A}},601:function(A){"use strict";A.exports=function(A){return A[1]}},72:function(A){"use strict";var t=[];function n(A){for(var n=-1,e=0;e<t.length;e++)if(t[e].identifier===A){n=e;break}return n}function e(A,e){for(var c={},a=[],o=0;o<A.length;o++){var g=A[o],i=e.base?g[0]+e.base:g[0],S=c[i]||0,s="".concat(i," ").concat(S);c[i]=S+1;var J=n(s),u={css:g[1],media:g[2],sourceMap:g[3],supports:g[4],layer:g[5]};if(-1!==J)t[J].references++,t[J].updater(u);else{var k=r(u,e);e.byIndex=o,t.splice(o,0,{identifier:s,updater:k,references:1})}a.push(s)}return a}function r(A,t){var n=t.domAPI(t);return n.update(A),function(t){if(t){if(t.css===A.css&&t.media===A.media&&t.sourceMap===A.sourceMap&&t.supports===A.supports&&t.layer===A.layer)return;n.update(A=t)}else n.remove()}}A.exports=function(A,r){var c=e(A=A||[],r=r||{});return function(A){A=A||[];for(var a=0;a<c.length;a++){var o=n(c[a]);t[o].references--}for(var g=e(A,r),i=0;i<c.length;i++){var S=n(c[i]);0===t[S].references&&(t[S].updater(),t.splice(S,1))}c=g}}},659:function(A){"use strict";var t={};A.exports=function(A,n){var e=function(A){if(void 0===t[A]){var n=document.querySelector(A);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(A){n=null}t[A]=n}return t[A]}(A);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(n)}},540:function(A){"use strict";A.exports=function(A){var t=document.createElement("style");return A.setAttributes(t,A.attributes),A.insert(t,A.options),t}},56:function(A,t,n){"use strict";A.exports=function(A){var t=n.nc;t&&A.setAttribute("nonce",t)}},825:function(A){"use strict";A.exports=function(A){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=A.insertStyleElement(A);return{update:function(n){!function(A,t,n){var e="";n.supports&&(e+="@supports (".concat(n.supports,") {")),n.media&&(e+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(e+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),e+=n.css,r&&(e+="}"),n.media&&(e+="}"),n.supports&&(e+="}");var c=n.sourceMap;c&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),t.styleTagTransform(e,A,t.options)}(t,A,n)},remove:function(){!function(A){if(null===A.parentNode)return!1;A.parentNode.removeChild(A)}(t)}}}},113:function(A){"use strict";A.exports=function(A,t){if(t.styleSheet)t.styleSheet.cssText=A;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(A))}}},628:function(A){const t=(A,t)=>{const n={YYYY:String(A.getFullYear()),YY:String(A.getFullYear()).slice(-2),MM:String(A.getMonth()+1).padStart(2,"0"),DD:String(A.getDate()).padStart(2,"0"),HH:String(A.getHours()).padStart(2,"0"),hh:String(A.getHours()).padStart(2,"0"),mm:String(A.getMinutes()).padStart(2,"0"),ss:String(A.getSeconds()).padStart(2,"0")};let e=t;return Object.keys(n).forEach((A=>{e=e.replace(A,n[A])})),e};A.exports={dateFormat:t,now:()=>t(new Date,"YYYY-MM-DD HH:mm:ss")}},773:function(A,t,n){"use strict";A.exports=n.p+"img/avatar_e79c7e.jpg"}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var c=t[e]={id:e,exports:{}};return A[e](c,c.exports,n),c.exports}n.m=A,n.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return n.d(t,{a:t}),t},n.d=function(A,t){for(var e in t)n.o(t,e)&&!n.o(A,e)&&Object.defineProperty(A,e,{enumerable:!0,get:t[e]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"==typeof window)return window}}(),n.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},function(){var A;n.g.importScripts&&(A=n.g.location+"");var t=n.g.document;if(!A&&t&&(t.currentScript&&(A=t.currentScript.src),!A)){var e=t.getElementsByTagName("script");if(e.length)for(var r=e.length-1;r>-1&&(!A||!/^http(s?):/.test(A));)A=e[r--].src}if(!A)throw new Error("Automatic publicPath is not supported in this browser");A=A.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=A}(),n.b=document.baseURI||self.location.href,n.nc=void 0,function(){"use strict";var A=n(72),t=n.n(A),e=n(825),r=n.n(e),c=n(659),a=n.n(c),o=n(56),g=n.n(o),i=n(540),S=n.n(i),s=n(113),J=n.n(s),u=n(610),k={};k.styleTagTransform=J(),k.setAttributes=g(),k.insert=a().bind(null,"head"),k.domAPI=r(),k.insertStyleElement=S(),t()(u.A,k),u.A&&u.A.locals&&u.A.locals;var f=n(663),C={};C.styleTagTransform=J(),C.setAttributes=g(),C.insert=a().bind(null,"head"),C.domAPI=r(),C.insertStyleElement=S(),t()(f.A,C),f.A&&f.A.locals&&f.A.locals,document.body.appendChild((()=>{const A=document.createElement("div");A.innerHTML="\n    <span>Hello</span>\n    <span>Webpack</span>\n  ",A.className="content";const t=new Image;t.src="data:image/png;base64,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",t.className="icon",A.appendChild(t);const n=document.createElement("div");return n.className="bg",A.appendChild(n),A})());const{now:p,dateFormat:l}=n(628);console.log("sum",3),console.log("mul",6),console.log("now",p()),console.log("formattedNow",l(new Date,"YYYY-MM-DD"))}()}();