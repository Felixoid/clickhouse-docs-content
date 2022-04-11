"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[27760],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return g}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),p=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(n),g=o,m=f["".concat(u,".").concat(g)]||f[g]||s[g]||a;return n?t.createElement(m,i(i({ref:r},l),{},{components:n})):t.createElement(m,i({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72601:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={sidebar_position:126},u="groupBitOr",p={unversionedId:"zh/sql-reference/aggregate-functions/reference/groupbitor",id:"zh/sql-reference/aggregate-functions/reference/groupbitor",title:"groupBitOr",description:"groupbitor}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/groupbitor.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/groupbitor",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitor",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/aggregate-functions/reference/groupbitor.md",tags:[],version:"current",sidebarPosition:126,frontMatter:{sidebar_position:126},sidebar:"chinese",previous:{title:"groupBitAnd",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitand"},next:{title:"groupBitXor",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitxor"}},l={},s=[],f={toc:s};function g(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"groupbitor"},"groupBitOr"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6570\u5b57\u5e8f\u5217\u6309\u4f4d\u5e94\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"OR")," \u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitOr(expr)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u7ed3\u679c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," \u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UInt*")," \u7c7b\u578b\u7684\u503c\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u6d4b\u8bd5\u6570\u636e::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitOr(num) FROM t\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"num")," \u662f\u5305\u542b\u6d4b\u8bd5\u6570\u636e\u7684\u5217\u3002"),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n01111101 = 125\n")))}g.isMDXComponent=!0}}]);