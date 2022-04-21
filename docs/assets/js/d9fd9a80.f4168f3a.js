"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[4332],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),i=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=i(e.components);return t.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),y=i(r),f=a,d=y["".concat(c,".").concat(f)]||y[f]||u[f]||o;return r?t.createElement(d,l(l({ref:n},s),{},{components:r})):t.createElement(d,l({ref:n},s))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=y;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var i=2;i<o;i++)l[i]=r[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},47401:function(e,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],p={},c="\u9635\u5217(T)",i={unversionedId:"zh/sql-reference/data-types/array",id:"zh/sql-reference/data-types/array",title:"\u9635\u5217(T)",description:"data-type-array}",source:"@site/docs/zh/sql-reference/data-types/array.md",sourceDirName:"zh/sql-reference/data-types",slug:"/zh/sql-reference/data-types/array",permalink:"/docs/zh/sql-reference/data-types/array",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/data-types/array.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"AggregateFunction(name, types_of_arguments\u2026)",permalink:"/docs/zh/sql-reference/data-types/aggregatefunction"},next:{title:"\u5e03\u5c14\u503c",permalink:"/docs/zh/sql-reference/data-types/boolean"}},s={},u=[{value:"\u521b\u5efa\u6570\u7ec4",id:"chuang-jian-shu-zu",level:2},{value:"\u4f7f\u7528\u6570\u636e\u7c7b\u578b",id:"shi-yong-shu-ju-lei-xing",level:2}],y={toc:u};function f(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},y,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-type-array"},"\u9635\u5217(T)"),(0,o.kt)("p",null,"\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," \u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684\u6570\u7ec4\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"T")," \u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\uff0c\u5305\u542b\u6570\u7ec4\u7c7b\u578b\u3002 \u4f46\u4e0d\u63a8\u8350\u4f7f\u7528\u591a\u7ef4\u6570\u7ec4\uff0cClickHouse \u5bf9\u591a\u7ef4\u6570\u7ec4\u7684\u652f\u6301\u6709\u9650\u3002\u4f8b\u5982\uff0c\u4e0d\u80fd\u5b58\u50a8\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u8868\u4e2d\u5b58\u50a8\u591a\u7ef4\u6570\u7ec4\u3002"),(0,o.kt)("h2",{id:"chuang-jian-shu-zu"},"\u521b\u5efa\u6570\u7ec4"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528array\u51fd\u6570\u6765\u521b\u5efa\u6570\u7ec4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"array(T)\n")),(0,o.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u4f7f\u7528\u65b9\u62ec\u53f7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[]\n")),(0,o.kt)("p",null,"\u521b\u5efa\u6570\u7ec4\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":) SELECT array(1, 2) AS x, toTypeName(x)\n\nSELECT\n    [1, 2] AS x,\n    toTypeName(x)\n\n\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(array(1, 2))\u2500\u2510\n\u2502 [1,2] \u2502 Array(UInt8)            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.002 sec.\n\n:) SELECT [1, 2] AS x, toTypeName(x)\n\nSELECT\n    [1, 2] AS x,\n    toTypeName(x)\n\n\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName([1, 2])\u2500\u2510\n\u2502 [1,2] \u2502 Array(UInt8)       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.002 sec.\n")),(0,o.kt)("h2",{id:"shi-yong-shu-ju-lei-xing"},"\u4f7f\u7528\u6570\u636e\u7c7b\u578b"),(0,o.kt)("p",null,"ClickHouse\u4f1a\u81ea\u52a8\u68c0\u6d4b\u6570\u7ec4\u5143\u7d20,\u5e76\u6839\u636e\u5143\u7d20\u8ba1\u7b97\u51fa\u5b58\u50a8\u8fd9\u4e9b\u5143\u7d20\u6700\u5c0f\u7684\u6570\u636e\u7c7b\u578b\u3002\u5982\u679c\u5728\u5143\u7d20\u4e2d\u5b58\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/array#null-literal"},"NULL")," \u6216\u5b58\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable#data_type-nullable"},"\u53ef\u4e3a\u7a7a")," \u7c7b\u578b\u5143\u7d20\uff0c\u90a3\u4e48\u6570\u7ec4\u7684\u5143\u7d20\u7c7b\u578b\u5c06\u4f1a\u53d8\u6210 ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"\u53ef\u4e3a\u7a7a"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c ClickHouse \u65e0\u6cd5\u786e\u5b9a\u6570\u636e\u7c7b\u578b\uff0c\u5b83\u5c06\u4ea7\u751f\u5f02\u5e38\u3002\u5f53\u5c1d\u8bd5\u540c\u65f6\u521b\u5efa\u4e00\u4e2a\u5305\u542b\u5b57\u7b26\u4e32\u548c\u6570\u5b57\u7684\u6570\u7ec4\u65f6\u4f1a\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5 (",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT array(1, 'a')"),")\u3002"),(0,o.kt)("p",null,"\u81ea\u52a8\u6570\u636e\u7c7b\u578b\u68c0\u6d4b\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":) SELECT array(1, 2, NULL) AS x, toTypeName(x)\n\nSELECT\n    [1, 2, NULL] AS x,\n    toTypeName(x)\n\n\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(array(1, 2, NULL))\u2500\u2510\n\u2502 [1,2,NULL] \u2502 Array(Nullable(UInt8))        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.002 sec.\n")),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u5c1d\u8bd5\u521b\u5efa\u4e0d\u517c\u5bb9\u7684\u6570\u636e\u7c7b\u578b\u6570\u7ec4\uff0cClickHouse \u5c06\u5f15\u53d1\u5f02\u5e38\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},":) SELECT array(1, 'a')\n\nSELECT [1, 'a']\n\nReceived exception from server (version 1.1.54388):\nCode: 386. DB::Exception: Received from localhost:9000, 127.0.0.1. DB::Exception: There is no supertype for types UInt8, String because some of them are String/FixedString and some of them are not.\n\n0 rows in set. Elapsed: 0.246 sec.\n")))}f.isMDXComponent=!0}}]);