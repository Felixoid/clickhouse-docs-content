"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[98655],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),h=i,k=f["".concat(u,".").concat(h)]||f[h]||s[h]||o;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8442:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={sidebar_position:29,sidebar_label:"\u7b2c\u4e09\u65b9\u4ee3\u7406"},u="\u7b2c\u4e09\u65b9\u4ee3\u7406",c={unversionedId:"zh/interfaces/third-party/proxy",id:"zh/interfaces/third-party/proxy",title:"\u7b2c\u4e09\u65b9\u4ee3\u7406",description:"proxy-servers-from-third-party-developers}",source:"@site/docs/zh/interfaces/third-party/proxy.md",sourceDirName:"zh/interfaces/third-party",slug:"/zh/interfaces/third-party/proxy",permalink:"/zh/interfaces/third-party/proxy",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/interfaces/third-party/proxy.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,sidebar_label:"\u7b2c\u4e09\u65b9\u4ee3\u7406"},sidebar:"chinese",previous:{title:"\u7b2c\u4e09\u65b9\u96c6\u6210\u5e93",permalink:"/zh/interfaces/third-party/integrations"},next:{title:"\u7b2c\u4e09\u65b9\u5f00\u53d1\u7684\u53ef\u89c6\u5316\u754c\u9762",permalink:"/zh/interfaces/third-party/gui"}},p={},s=[{value:"chproxy",id:"chproxy",level:2},{value:"KittenHouse",id:"kittenhouse",level:2},{value:"ClickHouse-Bulk",id:"clickhouse-bulk",level:2}],f={toc:s};function h(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proxy-servers-from-third-party-developers"},"\u7b2c\u4e09\u65b9\u4ee3\u7406"),(0,o.kt)("h2",{id:"chproxy"},"chproxy"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Vertamedia/chproxy"},"chproxy"),", \u662f\u4e00\u4e2a\u7528\u4e8eClickHouse\u6570\u636e\u5e93\u7684HTTP\u4ee3\u7406\u548c\u8d1f\u8f7d\u5747\u8861\u5668\u3002"),(0,o.kt)("p",null,"\u7279\u6027:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\u8def\u7531\u548c\u54cd\u5e94\u7f13\u5b58\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7075\u6d3b\u7684\u9650\u5236\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u81ea\u52a8SSL\u8bc1\u4e66\u7eed\u8ba2\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528go\u8bed\u8a00\u5b9e\u73b0\u3002"),(0,o.kt)("h2",{id:"kittenhouse"},"KittenHouse"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/VKCOM/kittenhouse"},"KittenHouse"),"\u88ab\u8bbe\u8ba1\u4e3aClickHouse\u548c\u5e94\u7528\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u672c\u5730\u4ee3\u7406\uff0c\u4ee5\u9632\u4e0d\u53ef\u80fd\u6216\u4e0d\u65b9\u4fbf\u5728\u5e94\u7528\u7a0b\u5e8f\u7aef\u7f13\u51b2\u63d2\u5165\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u7279\u6027:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5185\u5b58\u548c\u78c1\u76d8\u4e0a\u7684\u6570\u636e\u7f13\u51b2\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8868\u8def\u7531\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u8d1f\u8f7d\u5e73\u8861\u548c\u8fd0\u884c\u72b6\u51b5\u68c0\u67e5\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528go\u8bed\u8a00\u5b9e\u73b0\u3002"),(0,o.kt)("h2",{id:"clickhouse-bulk"},"ClickHouse-Bulk"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nikepan/clickhouse-bulk"},"ClickHouse-Bulk"),"\u662f\u4e00\u4e2a\u7b80\u5355\u7684ClickHouse\u6536\u96c6\u5668\u3002"),(0,o.kt)("p",null,"\u7279\u6027:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6309\u9608\u503c\u6216\u95f4\u9694\u5bf9\u8bf7\u6c42\u8fdb\u884c\u5206\u7ec4\u5e76\u53d1\u9001\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u8fdc\u7a0b\u670d\u52a1\u5668\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\u3002")),(0,o.kt)("p",null,"\u4f7f\u7528go\u8bed\u8a00\u5b9e\u73b0\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/third-party/proxy/"},"Original article")," "))}h.isMDXComponent=!0}}]);