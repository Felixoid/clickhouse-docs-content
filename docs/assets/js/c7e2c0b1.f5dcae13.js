"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[16474],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||i;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},31055:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={},s="\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570",p={unversionedId:"zh/operations/server-configuration-parameters/index",id:"zh/operations/server-configuration-parameters/index",title:"\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570",description:"server-settings}",source:"@site/docs/zh/operations/server-configuration-parameters/index.md",sourceDirName:"zh/operations/server-configuration-parameters",slug:"/zh/operations/server-configuration-parameters/",permalink:"/zh/operations/server-configuration-parameters/",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/operations/server-configuration-parameters/index.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u914d\u989d",permalink:"/zh/operations/quotas"},next:{title:"\u670d\u52a1\u5668\u8bbe\u7f6e",permalink:"/zh/operations/server-configuration-parameters/settings"}},u={},l=[],f={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"server-settings"},"\u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570"),(0,i.kt)("p",null,"\u672c\u8282\u5305\u542b\u65e0\u6cd5\u5728\u4f1a\u8bdd\u6216\u67e5\u8be2\u7ea7\u522b\u66f4\u6539\u7684\u670d\u52a1\u5668\u8bbe\u7f6e\u7684\u8bf4\u660e\u3002"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u8bbe\u7f6e\u5b58\u50a8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," ClickHouse\u670d\u52a1\u5668\u4e0a\u7684\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"Other settings are described in the \xab",(0,i.kt)("a",{parentName:"p",href:"/zh/operations/settings/#settings"},"\u8bbe\u7f6e"),"\xbb section."),(0,i.kt)("p",null,"\u5728\u7814\u7a76\u8bbe\u7f6e\u4e4b\u524d\uff0c\u8bf7\u9605\u8bfb ",(0,i.kt)("a",{parentName:"p",href:"/zh/operations/configuration-files#configuration_files"},"\u914d\u7f6e\u6587\u4ef6")," \u90e8\u5206\u548c\u6ce8\u610f\u4f7f\u7528\u66ff\u6362\uff08\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"incl")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"optional")," \u5c5e\u6027\uff09\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/server_configuration_parameters/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);