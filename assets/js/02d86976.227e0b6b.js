"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[67491],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=l(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26475:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),c=["components"],a={sidebar_position:22,sidebar_label:"JDBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440"},u="JDBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440",l={unversionedId:"ru/interfaces/jdbc",id:"ru/interfaces/jdbc",title:"JDBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440",description:"jdbc-draiver}",source:"@site/docs/ru/interfaces/jdbc.md",sourceDirName:"ru/interfaces",slug:"/ru/interfaces/jdbc",permalink:"/docs/ru/interfaces/jdbc",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/interfaces/jdbc.md",tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22,sidebar_label:"JDBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440"},sidebar:"russia",previous:{title:"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0438 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",permalink:"/docs/ru/interfaces/formats"},next:{title:"ODBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440",permalink:"/docs/ru/interfaces/odbc"}},s={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jdbc-draiver"},"JDBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0440\u0430\u0439\u0432\u0435\u0440"))),(0,i.kt)("li",{parentName:"ul"},"\u0414\u0440\u0430\u0439\u0432\u0435\u0440\u044b \u043e\u0442 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0445 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0439:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/housepower/ClickHouse-Native-JDBC"},"ClickHouse-Native-JDBC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/blynkkk/clickhouse4j"},"clickhouse4j"))))))}m.isMDXComponent=!0}}]);