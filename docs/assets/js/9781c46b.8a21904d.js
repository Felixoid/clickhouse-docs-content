"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97378],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66743:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],l={sidebar_position:29,sidebar_label:"Proxies"},c="Proxy Servers from Third-party Developers",u={unversionedId:"en/interfaces/third-party/proxy",id:"en/interfaces/third-party/proxy",title:"Proxy Servers from Third-party Developers",description:"proxy-servers-from-third-party-developers}",source:"@site/docs/en/interfaces/third-party/proxy.md",sourceDirName:"en/interfaces/third-party",slug:"/en/interfaces/third-party/proxy",permalink:"/docs/en/interfaces/third-party/proxy",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/interfaces/third-party/proxy.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,sidebar_label:"Proxies"},sidebar:"english",previous:{title:"Visual Interfaces",permalink:"/docs/en/interfaces/third-party/gui"},next:{title:"Engines",permalink:"/docs/en/engines"}},p={},s=[{value:"chproxy",id:"chproxy",level:2},{value:"KittenHouse",id:"kittenhouse",level:2},{value:"ClickHouse-Bulk",id:"clickhouse-bulk",level:2}],d={toc:s};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"proxy-servers-from-third-party-developers"},"Proxy Servers from Third-party Developers"),(0,o.kt)("h2",{id:"chproxy"},"chproxy"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Vertamedia/chproxy"},"chproxy"),", is an HTTP proxy and load balancer for ClickHouse database."),(0,o.kt)("p",null,"Features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Per-user routing and response caching."),(0,o.kt)("li",{parentName:"ul"},"Flexible limits."),(0,o.kt)("li",{parentName:"ul"},"Automatic SSL certificate renewal.")),(0,o.kt)("p",null,"Implemented in Go."),(0,o.kt)("h2",{id:"kittenhouse"},"KittenHouse"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/VKCOM/kittenhouse"},"KittenHouse")," is designed to be a local proxy between ClickHouse and application server in case it\u2019s impossible or inconvenient to buffer INSERT data on your application side."),(0,o.kt)("p",null,"Features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In-memory and on-disk data buffering."),(0,o.kt)("li",{parentName:"ul"},"Per-table routing."),(0,o.kt)("li",{parentName:"ul"},"Load-balancing and health checking.")),(0,o.kt)("p",null,"Implemented in Go."),(0,o.kt)("h2",{id:"clickhouse-bulk"},"ClickHouse-Bulk"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nikepan/clickhouse-bulk"},"ClickHouse-Bulk")," is a simple ClickHouse insert collector."),(0,o.kt)("p",null,"Features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Group requests and send by threshold or interval."),(0,o.kt)("li",{parentName:"ul"},"Multiple remote servers."),(0,o.kt)("li",{parentName:"ul"},"Basic authentication.")),(0,o.kt)("p",null,"Implemented in Go."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/interfaces/third-party/proxy/"},"Original article")," "))}f.isMDXComponent=!0}}]);