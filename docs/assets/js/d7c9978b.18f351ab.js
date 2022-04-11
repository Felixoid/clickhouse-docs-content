"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65452],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=o(n),m=r,N=k["".concat(u,".").concat(m)]||k[m]||c[m]||l;return n?a.createElement(N,i(i({ref:t},s),{},{components:n})):a.createElement(N,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13218:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={sidebar_position:37,sidebar_label:"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"},u="\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",o={unversionedId:"ru/sql-reference/functions/logical-functions",id:"ru/sql-reference/functions/logical-functions",title:"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438",description:"logicheskie-funktsii}",source:"@site/docs/ru/sql-reference/functions/logical-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/logical-functions",permalink:"/ru/sql-reference/functions/logical-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/functions/logical-functions.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,sidebar_label:"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f",permalink:"/ru/sql-reference/functions/comparison-functions"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432",permalink:"/ru/sql-reference/functions/type-conversion-functions"}},s={},c=[{value:"and",id:"logical-and-function",level:2},{value:"or",id:"logical-or-function",level:2},{value:"not",id:"logical-not-function",level:2},{value:"xor",id:"logical-xor-function",level:2}],k={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"logicheskie-funktsii"},"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,l.kt)("p",null,"\u041b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u044f\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 \u043b\u044e\u0431\u044b\u043c\u0438 \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438, \u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 \u0447\u0438\u0441\u043b\u043e \u0442\u0438\u043f\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),", \u0440\u0430\u0432\u043d\u043e\u0435 0, 1, \u0430 \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,l.kt)("p",null,"\u041d\u043e\u043b\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"\u043b\u043e\u0436\u044c\u044e"),", \u0430 \u043b\u044e\u0431\u043e\u0435 \u043d\u0435\u043d\u0443\u043b\u0435\u0432\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u0438\u0441\u0442\u0438\u043d\u043e\u0439"),"."),(0,l.kt)("h2",{id:"logical-and-function"},"and"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u043a\u043e\u043d\u044a\u044e\u043d\u043a\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0438 \u0431\u043e\u043b\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438. \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/operators/#logical-and-operator"},'\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e "\u0418"'),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"and(val1, val2...)\n")),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"and")," \u043f\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0439 \u0441\u0445\u0435\u043c\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/ru/operations/settings/#short-circuit-function-evaluation"},"short_circuit_function_evaluation"),". \u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430, \u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"vali")," \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u043a, \u0433\u0434\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"(val1 AND val2 AND ... AND val{i-1})")," \u0432\u0435\u0440\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT and(number = 2, intDiv(1, number)) FROM numbers(10)")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0437-\u0437\u0430 \u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043d\u043e\u043b\u044c."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0437 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/float"},"Float")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", \u0435\u0441\u043b\u0438 \u0441\u0440\u0435\u0434\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0435\u0441\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d \u043d\u0443\u043b\u044c."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", \u0435\u0441\u043b\u0438 \u0441\u0440\u0435\u0434\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0435\u0442 \u043d\u0443\u043b\u0435\u0439, \u043d\u043e \u0435\u0441\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", \u0432 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445.")),(0,l.kt)("p",null,"\u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT and(0, 1, -2);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500and(0, 1, -2)\u2500\u2510\n\u2502             0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0421\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT and(NULL, 1, 10, -2);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500and(NULL, 1, 10, -2)\u2500\u2510\n\u2502                 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"logical-or-function"},"or"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0434\u0438\u0437\u044a\u044e\u043d\u043a\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0438 \u0431\u043e\u043b\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438. \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/operators/#logical-or-operator"},'\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e "\u0418\u041b\u0418"'),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"or(val1, val2...)\n")),(0,l.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("inlineCode",{parentName:"p"},"or")," \u043f\u043e \u043a\u043e\u0440\u043e\u0442\u043a\u043e\u0439 \u0441\u0445\u0435\u043c\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0443 ",(0,l.kt)("a",{parentName:"p",href:"/ru/operations/settings/#short-circuit-function-evaluation"},"short_circuit_function_evaluation"),". \u0415\u0441\u043b\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430, \u0442\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"vali")," \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0441\u0442\u0440\u043e\u043a, \u0433\u0434\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"((NOT val1) AND (NOT val2) AND ... AND (NOT val{i-1}))")," \u0432\u0435\u0440\u043d\u043e. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT or(number = 0, intDiv(1, number) != 0) FROM numbers(10)")," \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0438\u0437-\u0437\u0430 \u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043d\u0430 \u043d\u043e\u043b\u044c."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0437 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/float"},"Float")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", \u0435\u0441\u043b\u0438 \u0441\u0440\u0435\u0434\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0435\u0441\u0442\u044c \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e \u043d\u0435\u043d\u0443\u043b\u0435\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", \u0435\u0441\u043b\u0438 \u0441\u0440\u0435\u0434\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u043b\u0438."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", \u0435\u0441\u043b\u0438 \u0441\u0440\u0435\u0434\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0435\u0442 \u043d\u0435\u043d\u0443\u043b\u0435\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0438 \u0435\u0441\u0442\u044c ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,l.kt)("p",null,"\u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT or(1, 0, 0, 2, NULL);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500or(1, 0, 0, 2, NULL)\u2500\u2510\n\u2502                    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0421\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"NULL"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT or(0, NULL);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500or(0, NULL)\u2500\u2510\n\u2502        \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"logical-not-function"},"not"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430. \u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/operators/#logical-negation-operator"},"\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0443 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u044f"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"not(val);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/float"},"Float")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"val")," \u2014 \u044d\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"0"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"val")," \u2014 \u044d\u0442\u043e \u043d\u0435\u043d\u0443\u043b\u0435\u0432\u043e\u0435 \u0447\u0438\u0441\u043b\u043e."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", \u0435\u0441\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"val")," \u2014 \u044d\u0442\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,l.kt)("p",null,"\u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT NOT(1);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-test"},"\u250c\u2500not(1)\u2500\u2510\n\u2502      0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"logical-xor-function"},"xor"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u044e\u0449\u0435\u0439 \u0434\u0438\u0437\u044a\u044e\u043d\u043a\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u0438 \u0431\u043e\u043b\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438. \u041f\u0440\u0438 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u0430\u043a: \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"p"},"XOR")," \u0434\u043b\u044f \u043f\u0435\u0440\u0432\u044b\u0445 \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0430 \u043f\u043e\u0442\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0440\u0438 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"XOR")," \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"xor(val1, val2...)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"val1, val2, ...")," \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u0437 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt"),", ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/float"},"Float")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"1"),", \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439: \u0435\u0441\u043b\u0438 \u043e\u0434\u043d\u043e \u0438\u0437 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0443\u043b\u0435\u043c, \u0430 \u0432\u0442\u043e\u0440\u043e\u0435 \u043d\u0435\u0442."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"0"),", \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439: \u0435\u0441\u043b\u0438 \u043e\u0431\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0443\u043b\u0438 \u0438\u043b\u0438 \u043d\u0435\u043d\u0443\u043b\u0435\u0432\u044b\u0435 \u0447\u0438\u0441\u043b\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),", \u0435\u0441\u043b\u0438 \u0441\u0440\u0435\u0434\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u0438\u043d ",(0,l.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,l.kt)("p",null,"\u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8")," or ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/nullable"},"Nullable"),"(",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),")."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT xor(0, 1, 1);\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500xor(0, 1, 1)\u2500\u2510\n\u2502            0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);