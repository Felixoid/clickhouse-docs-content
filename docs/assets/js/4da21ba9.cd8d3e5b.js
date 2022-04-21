"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[6648],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),g=u(t),f=o,y=g["".concat(c,".").concat(f)]||g[f]||p[f]||i;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},23515:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return p}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],a={},c="TinyLog",u={unversionedId:"zh/engines/table-engines/log-family/tinylog",id:"zh/engines/table-engines/log-family/tinylog",title:"TinyLog",description:"tinylog}",source:"@site/docs/zh/engines/table-engines/log-family/tinylog.md",sourceDirName:"zh/engines/table-engines/log-family",slug:"/zh/engines/table-engines/log-family/tinylog",permalink:"/docs/zh/engines/table-engines/log-family/tinylog",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/log-family/tinylog.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"StripeLog",permalink:"/docs/zh/engines/table-engines/log-family/stripelog"},next:{title:"\u96c6\u6210\u7684\u8868\u5f15\u64ce",permalink:"/docs/zh/engines/table-engines/integrations/"}},s={},p=[],g={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tinylog"},"TinyLog"),(0,i.kt)("p",null,"\u6700\u7b80\u5355\u7684\u8868\u5f15\u64ce\uff0c\u7528\u4e8e\u5c06\u6570\u636e\u5b58\u50a8\u5728\u78c1\u76d8\u4e0a\u3002\u6bcf\u5217\u90fd\u5b58\u50a8\u5728\u5355\u72ec\u7684\u538b\u7f29\u6587\u4ef6\u4e2d\u3002\u5199\u5165\u65f6\uff0c\u6570\u636e\u5c06\u9644\u52a0\u5230\u6587\u4ef6\u672b\u5c3e\u3002"),(0,i.kt)("p",null,"\u5e76\u53d1\u6570\u636e\u8bbf\u95ee\u4e0d\u53d7\u4efb\u4f55\u9650\u5236\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u540c\u65f6\u4ece\u8868\u4e2d\u8bfb\u53d6\u5e76\u5728\u4e0d\u540c\u7684\u67e5\u8be2\u4e2d\u5199\u5165\uff0c\u5219\u8bfb\u53d6\u64cd\u4f5c\u5c06\u629b\u51fa\u5f02\u5e38"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u540c\u65f6\u5199\u5165\u591a\u4e2a\u67e5\u8be2\u4e2d\u7684\u8868\uff0c\u5219\u6570\u636e\u5c06\u88ab\u7834\u574f\u3002")),(0,i.kt)("p",null,"\u8fd9\u79cd\u8868\u5f15\u64ce\u7684\u5178\u578b\u7528\u6cd5\u662f write-once\uff1a\u9996\u5148\u53ea\u5199\u5165\u4e00\u6b21\u6570\u636e\uff0c\u7136\u540e\u6839\u636e\u9700\u8981\u591a\u6b21\u8bfb\u53d6\u3002\u67e5\u8be2\u5728\u5355\u4e2a\u6d41\u4e2d\u6267\u884c\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u6b64\u5f15\u64ce\u9002\u7528\u4e8e\u76f8\u5bf9\u8f83\u5c0f\u7684\u8868\uff08\u5efa\u8bae\u6700\u591a1,000,000\u884c\uff09\u3002\u5982\u679c\u60a8\u6709\u8bb8\u591a\u5c0f\u8868\uff0c\u5219\u4f7f\u7528\u6b64\u8868\u5f15\u64ce\u662f\u9002\u5408\u7684\uff0c\u56e0\u4e3a\u5b83\u6bd4Log\u5f15\u64ce\u66f4\u7b80\u5355\uff08\u9700\u8981\u6253\u5f00\u7684\u6587\u4ef6\u66f4\u5c11\uff09\u3002\u5f53\u60a8\u62e5\u6709\u5927\u91cf\u5c0f\u8868\u65f6\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6027\u80fd\u4f4e\u4e0b\uff0c\u4f46\u5728\u53ef\u80fd\u5df2\u7ecf\u5728\u5176\u5b83 DBMS \u65f6\u4f7f\u7528\u8fc7\uff0c\u5219\u60a8\u53ef\u80fd\u4f1a\u53d1\u73b0\u5207\u6362\u4f7f\u7528 TinyLog \u7c7b\u578b\u7684\u8868\u66f4\u5bb9\u6613\u3002",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301\u7d22\u5f15"),"\u3002"),(0,i.kt)("p",null,"\u5728 Yandex.Metrica \u4e2d\uff0cTinyLog \u8868\u7528\u4e8e\u5c0f\u6279\u91cf\u5904\u7406\u7684\u4e2d\u95f4\u6570\u636e\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/table_engines/tinylog/"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);