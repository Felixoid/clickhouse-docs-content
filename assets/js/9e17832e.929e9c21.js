"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[77946],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||s;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<s;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},185:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),l=["components"],p={},i="system.grants",o={unversionedId:"ru/operations/system-tables/grants",id:"ru/operations/system-tables/grants",title:"system.grants",description:"system_tables-grants}",source:"@site/docs/ru/operations/system-tables/grants.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/grants",permalink:"/docs/ru/operations/system-tables/grants",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/grants.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.functions",permalink:"/docs/ru/operations/system-tables/functions"},next:{title:"system.graphite_retentions",permalink:"/docs/ru/operations/system-tables/graphite_retentions"}},u={},c=[],m={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-grants"},"system.grants"),(0,s.kt)("p",null,"\u041f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u0432 ClickHouse."),(0,s.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"user_name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0443\u0447\u0451\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"role_name")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0420\u043e\u043b\u044c, \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u0430\u044f \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"access_type")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u0434\u043b\u044f \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ClickHouse.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"database")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"table")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"column")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u0418\u043c\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u0430, \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u043e\u0441\u0442\u0443\u043f.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"is_partial_revoke")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442, \u0431\u044b\u043b\u0438 \u043b\u0438 \u043e\u0442\u043c\u0435\u043d\u0435\u043d\u044b \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"0")," \u2014 \u0421\u0442\u0440\u043e\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u044b\u0439 \u043e\u0442\u0437\u044b\u0432.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"1")," \u2014 \u0421\u0442\u0440\u043e\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0433\u0440\u0430\u043d\u0442.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("inlineCode",{parentName:"p"},"grant_option")," (",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 \u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043e \u0441 \u043e\u043f\u0446\u0438\u0435\u0439 ",(0,s.kt)("inlineCode",{parentName:"p"},"WITH GRANT OPTION"),", \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c. ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT"),"."))))}f.isMDXComponent=!0}}]);