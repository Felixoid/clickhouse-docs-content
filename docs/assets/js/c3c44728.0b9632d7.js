"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1986],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=a(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<c;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42289:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return u},metadata:function(){return a},toc:function(){return p}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),i=["components"],u={sidebar_position:63,sidebar_label:"\u6d4f\u89c8\u6e90\u4ee3\u7801"},l="\u6d4f\u89c8ClickHouse\u6e90\u4ee3\u7801",a={unversionedId:"zh/development/browse-code",id:"zh/development/browse-code",title:"\u6d4f\u89c8ClickHouse\u6e90\u4ee3\u7801",description:"browse-clickhouse-source-code}",source:"@site/docs/zh/development/browse-code.md",sourceDirName:"zh/development",slug:"/zh/development/browse-code",permalink:"/zh/development/browse-code",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/development/browse-code.md",tags:[],version:"current",sidebarPosition:63,frontMatter:{sidebar_position:63,sidebar_label:"\u6d4f\u89c8\u6e90\u4ee3\u7801"},sidebar:"chinese",previous:{title:"ClickHouse \u5f00\u53d1",permalink:"/zh/development/"},next:{title:"\u5982\u4f55\u5728Linux\u4e0a\u6784\u5efaClickHouse for AARCH64\uff08ARM64)",permalink:"/zh/development/build-cross-arm"}},s={},p=[],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"browse-clickhouse-source-code"},"\u6d4f\u89c8ClickHouse\u6e90\u4ee3\u7801"),(0,c.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,c.kt)("strong",{parentName:"p"},"Woboq")," \u5728\u7ebf\u4ee3\u7801\u6d4f\u89c8\u5668 ",(0,c.kt)("a",{parentName:"p",href:"https://clickhouse.com/codebrowser/ClickHouse/src/index.html"},"\u70b9\u51fb\u8fd9\u91cc"),". \u5b83\u63d0\u4f9b\u4e86\u4ee3\u7801\u5bfc\u822a\u548c\u8bed\u4e49\u7a81\u51fa\u663e\u793a\u3001\u641c\u7d22\u548c\u7d22\u5f15\u3002 \u4ee3\u7801\u5feb\u7167\u6bcf\u5929\u66f4\u65b0\u3002"),(0,c.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u50cf\u5f80\u5e38\u4e00\u6837\u6d4f\u89c8\u6e90\u4ee3\u7801 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse"},"GitHub")),(0,c.kt)("p",null,"\u5982\u679c\u4f60\u5e0c\u671b\u4e86\u89e3\u54ea\u79cdIDE\u8f83\u597d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528CLion\uff0cQT Creator\uff0cVS Code\u548cKDevelop\uff08\u6709\u6ce8\u610f\u4e8b\u9879\uff09\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528\u4efb\u4f55\u60a8\u559c\u6b22\u7684IDE\u3002 Vim\u548cEmacs\u4e5f\u53ef\u4ee5\u3002"))}f.isMDXComponent=!0}}]);