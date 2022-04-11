"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[9908],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return g}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),g=a,m=f["".concat(p,".").concat(g)]||f[g]||s[g]||o;return r?t.createElement(m,i(i({ref:n},l),{},{components:r})):t.createElement(m,i({ref:n},l))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},60202:function(e,n,r){r.r(n),r.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={sidebar_position:125},p="groupBitAnd",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/groupbitand",id:"zh/sql-reference/aggregate-functions/reference/groupbitand",title:"groupBitAnd",description:"groupbitand}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/groupbitand.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/groupbitand",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitand",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/aggregate-functions/reference/groupbitand.md",tags:[],version:"current",sidebarPosition:125,frontMatter:{sidebar_position:125},sidebar:"chinese",previous:{title:"groupArraySample",permalink:"/zh/sql-reference/aggregate-functions/reference/grouparraysample"},next:{title:"groupBitOr",permalink:"/zh/sql-reference/aggregate-functions/reference/groupbitor"}},l={},s=[],f={toc:s};function g(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitand"},"groupBitAnd"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6570\u5b57\u5e8f\u5217\u6309\u4f4d\u5e94\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"AND")," \u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitAnd(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 \u7ed3\u679c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt*")," \u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UInt*")," \u7c7b\u578b\u7684\u503c\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("p",null,"\u6d4b\u8bd5\u6570\u636e:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00101100 = 44\n00011100 = 28\n00001101 = 13\n01010101 = 85\n")),(0,o.kt)("p",null,"\u67e5\u8be2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT groupBitAnd(num) FROM t\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"num")," \u662f\u5305\u542b\u6d4b\u8bd5\u6570\u636e\u7684\u5217\u3002"),(0,o.kt)("p",null,"\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"binary     decimal\n00000100 = 4\n")))}g.isMDXComponent=!0}}]);