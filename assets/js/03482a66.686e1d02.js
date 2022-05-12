"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[60605],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},15565:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={title:"Does ClickHouse support multi-region replication?",sidebar_position:30},l="Does ClickHouse support multi-region replication?",u={unversionedId:"ru/faq/operations/multi-region-replication",id:"ru/faq/operations/multi-region-replication",title:"Does ClickHouse support multi-region replication?",description:"does-clickhouse-support-multi-region-replication}",source:"@site/docs/ru/faq/operations/multi-region-replication.md",sourceDirName:"ru/faq/operations",slug:"/ru/faq/operations/multi-region-replication",permalink:"/docs/ru/faq/operations/multi-region-replication",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/faq/operations/multi-region-replication.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Does ClickHouse support multi-region replication?",sidebar_position:30},sidebar:"russia",previous:{title:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043b\u0438 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0442\u0430\u0440\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446\u044b ClickHouse?",permalink:"/docs/ru/faq/operations/delete-old-data"},next:{title:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f",permalink:"/docs/ru/faq/integration/"}},s={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"does-clickhouse-support-multi-region-replication"},"Does ClickHouse support multi-region replication?"),(0,i.kt)("p",null,'The short answer is "yes". However, we recommend keeping latency between all regions/datacenters in two-digit range, otherwise write performance will suffer as it goes through distributed consensus protocol. For example, replication between US coasts will likely work fine, but between the US and Europe won\'t.'),(0,i.kt)("p",null,"Configuration-wise there's no difference compared to single-region replication, simply use hosts that are located in different locations for replicas."),(0,i.kt)("p",null,"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"../../engines/table-engines/mergetree-family/replication/"},"full article on data replication"),"."))}m.isMDXComponent=!0}}]);