"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[31482],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=o(r),f=a,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||s;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<s;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},62829:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return o},toc:function(){return m}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),l=["components"],c={sidebar_label:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",sidebar_position:31},i="SQL \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 ClickHouse",o={unversionedId:"ru/sql-reference/statements/index",id:"ru/sql-reference/statements/index",title:"SQL \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 ClickHouse",description:"clickhouse-sql-statements}",source:"@site/docs/ru/sql-reference/statements/index.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/",permalink:"/docs/ru/sql-reference/statements/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/index.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_label:"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f",sidebar_position:31},sidebar:"russia",previous:{title:"\u0421\u043f\u0440\u0430\u0432\u043a\u0430 \u043f\u043e SQL",permalink:"/docs/ru/sql-reference/"},next:{title:"SELECT",permalink:"/docs/ru/sql-reference/statements/select/"}},u={},m=[],p={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"clickhouse-sql-statements"},"SQL \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0432 ClickHouse"),(0,s.kt)("p",null,"\u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e SQL \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u041a\u0430\u0436\u0434\u044b\u0439 \u0432\u0438\u0434 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u0435\u0442 \u0441\u0432\u043e\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u0430\u0445 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/select/"},"SELECT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/insert-into"},"INSERT INTO")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/create/"},"CREATE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/alter/"},"ALTER")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/system"},"SYSTEM")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/show"},"SHOW")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/grant"},"GRANT")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/revoke"},"REVOKE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/attach"},"ATTACH")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/check-table"},"CHECK TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/describe-table"},"DESCRIBE TABLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/detach"},"DETACH")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/drop"},"DROP")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/exists"},"EXISTS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/kill"},"KILL")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/optimize"},"OPTIMIZE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/rename"},"RENAME")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/set"},"SET")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/set-role"},"SET ROLE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/truncate"},"TRUNCATE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/use"},"USE"))))}f.isMDXComponent=!0}}]);