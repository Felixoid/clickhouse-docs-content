"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67877],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],a={sidebar_position:45,sidebar_label:"EXISTS"},c="EXISTS \u8bed\u53e5",l={unversionedId:"zh/sql-reference/statements/exists",id:"zh/sql-reference/statements/exists",title:"EXISTS \u8bed\u53e5",description:"exists-statement}",source:"@site/docs/zh/sql-reference/statements/exists.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/exists",permalink:"/zh/sql-reference/statements/exists",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/statements/exists.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"EXISTS"},sidebar:"chinese",previous:{title:"DROP",permalink:"/zh/sql-reference/statements/drop"},next:{title:"KILL",permalink:"/zh/sql-reference/statements/kill"}},u={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exists-statement"},"EXISTS \u8bed\u53e5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"EXISTS [TEMPORARY] [TABLE|DICTIONARY] [db.]name [INTO OUTFILE filename] [FORMAT format]\n")),(0,i.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5355\u72ec\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u7c7b\u578b\u7684\u5217\uff0c\u5982\u679c\u8868\u6216\u6570\u636e\u5e93\u4e0d\u5b58\u5728\uff0c\u5219\u5305\u542b\u4e00\u4e2a\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u5982\u679c\u8868\u5728\u6307\u5b9a\u7684\u6570\u636e\u5e93\u4e2d\u5b58\u5728\uff0c\u5219\u5305\u542b\u4e00\u4e2a\u503c ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"\u3002"))}m.isMDXComponent=!0}}]);