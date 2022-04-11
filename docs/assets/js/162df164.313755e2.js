"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[20330],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,y=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return t?r.createElement(y,a(a({ref:n},p),{},{components:t})):r.createElement(y,a({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},67438:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={sidebar_position:44,sidebar_label:"Memory"},s="\u5185\u5b58\u8868",l={unversionedId:"zh/engines/table-engines/special/memory",id:"zh/engines/table-engines/special/memory",title:"\u5185\u5b58\u8868",description:"memory}",source:"@site/docs/zh/engines/table-engines/special/memory.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/memory",permalink:"/zh/engines/table-engines/special/memory",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/engines/table-engines/special/memory.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"Memory"},sidebar:"chinese",previous:{title:"\u5173\u8054\u8868\u5f15\u64ce",permalink:"/zh/engines/table-engines/special/join"},next:{title:"\u968f\u673a\u6570\u751f\u6210",permalink:"/zh/engines/table-engines/special/generate"}},p={},u=[],m={toc:u};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"memory"},"\u5185\u5b58\u8868"),(0,i.kt)("p",null,"Memory \u5f15\u64ce\u4ee5\u672a\u538b\u7f29\u7684\u5f62\u5f0f\u5c06\u6570\u636e\u5b58\u50a8\u5728 RAM \u4e2d\u3002\u6570\u636e\u5b8c\u5168\u4ee5\u8bfb\u53d6\u65f6\u83b7\u5f97\u7684\u5f62\u5f0f\u5b58\u50a8\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u4ece\u8fd9\u5f20\u8868\u4e2d\u8bfb\u53d6\u662f\u5f88\u8f7b\u677e\u7684\u3002\u5e76\u53d1\u6570\u636e\u8bbf\u95ee\u662f\u540c\u6b65\u7684\u3002\u9501\u8303\u56f4\u5c0f\uff1a\u8bfb\u5199\u64cd\u4f5c\u4e0d\u4f1a\u76f8\u4e92\u963b\u585e\u3002\u4e0d\u652f\u6301\u7d22\u5f15\u3002\u67e5\u8be2\u662f\u5e76\u884c\u5316\u7684\u3002\u5728\u7b80\u5355\u67e5\u8be2\u4e0a\u8fbe\u5230\u6700\u5927\u901f\u7387\uff08\u8d85\u8fc710 GB /\u79d2\uff09\uff0c\u56e0\u4e3a\u6ca1\u6709\u78c1\u76d8\u8bfb\u53d6\uff0c\u4e0d\u9700\u8981\u89e3\u538b\u7f29\u6216\u53cd\u5e8f\u5217\u5316\u6570\u636e\u3002\uff08\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u4e0e MergeTree \u5f15\u64ce\u7684\u6027\u80fd\u51e0\u4e4e\u4e00\u6837\u9ad8\uff09\u3002\u91cd\u65b0\u542f\u52a8\u670d\u52a1\u5668\u65f6\uff0c\u8868\u4e2d\u7684\u6570\u636e\u6d88\u5931\uff0c\u8868\u5c06\u53d8\u4e3a\u7a7a\u3002\u901a\u5e38\uff0c\u4f7f\u7528\u6b64\u8868\u5f15\u64ce\u662f\u4e0d\u5408\u7406\u7684\u3002\u4f46\u662f\uff0c\u5b83\u53ef\u7528\u4e8e\u6d4b\u8bd5\uff0c\u4ee5\u53ca\u5728\u76f8\u5bf9\u8f83\u5c11\u7684\u884c\uff08\u6700\u591a\u7ea6100,000,000\uff09\u4e0a\u9700\u8981\u6700\u9ad8\u6027\u80fd\u7684\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"Memory \u5f15\u64ce\u662f\u7531\u7cfb\u7edf\u7528\u4e8e\u4e34\u65f6\u8868\u8fdb\u884c\u5916\u90e8\u6570\u636e\u7684\u67e5\u8be2\uff08\u8bf7\u53c2\u9605 \xab\u5916\u90e8\u6570\u636e\u7528\u4e8e\u8bf7\u6c42\u5904\u7406\xbb \u90e8\u5206\uff09\uff0c\u4ee5\u53ca\u7528\u4e8e\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"GLOBAL IN"),"\uff08\u8bf7\u53c2\u89c1 \xabIN \u8fd0\u7b97\u7b26\xbb \u90e8\u5206\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/memory/"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);