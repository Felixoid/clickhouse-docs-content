"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[22937],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||i[f]||l;return n?r.createElement(m,u(u({ref:t},c),{},{components:n})):r.createElement(m,u({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,u[1]=p;for(var s=2;s<l;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75578:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),u=["components"],p={sidebar_position:54,sidebar_label:"Tuple(T1, T2, ...)"},o="Tuple(T1, T2, \u2026)",s={unversionedId:"ru/sql-reference/data-types/tuple",id:"ru/sql-reference/data-types/tuple",title:"Tuple(T1, T2, \u2026)",description:"tuplet1-t2}",source:"@site/docs/ru/sql-reference/data-types/tuple.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/tuple",permalink:"/docs/ru/sql-reference/data-types/tuple",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/data-types/tuple.md",tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54,sidebar_label:"Tuple(T1, T2, ...)"},sidebar:"russia",previous:{title:"Nested",permalink:"/docs/ru/sql-reference/data-types/nested-data-structures/nested"},next:{title:"Nullable",permalink:"/docs/ru/sql-reference/data-types/nullable"}},c={},i=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u0442\u0435\u0436\u0430",id:"sozdanie-kortezha",level:2},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445",id:"osobennosti-raboty-s-tipami-dannykh",level:2},{value:"\u0410\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u0440\u0442\u0435\u0436\u0430",id:"addressing-tuple-elements",level:2}],d={toc:i};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tuplet1-t2"},"Tuple(T1, T2, \u2026)"),(0,l.kt)("p",null,"\u041a\u043e\u0440\u0442\u0435\u0436 \u0438\u0437 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043b\u044e\u0431\u043e\u0433\u043e ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/#data_types"},"\u0442\u0438\u043f\u0430"),". \u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043a\u043e\u0440\u0442\u0435\u0436\u0430 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u0440\u0430\u0437\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432."),(0,l.kt)("p",null,"\u041a\u043e\u0440\u0442\u0435\u0436\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u0421\u0442\u043e\u043b\u0431\u0446\u044b \u043c\u043e\u0433\u0443\u0442 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f IN \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0444\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043b\u044f\u043c\u0431\u0434\u0430-\u0444\u0443\u043d\u043a\u0446\u0438\u0439. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u044b ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/tuple"},"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b IN"),", ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/#higher-order-functions"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u044b\u0441\u0448\u0435\u0433\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0430"),"."),(0,l.kt)("p",null,"\u041a\u043e\u0440\u0442\u0435\u0436\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u0445 \u043a\u0440\u043e\u043c\u0435 JSON, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043a\u0440\u0443\u0433\u043b\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445 \u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043f\u044f\u0442\u0443\u044e. \u0412 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u0445 JSON, \u043a\u043e\u0440\u0442\u0435\u0436\u0438 \u0432\u044b\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0432\u0438\u0434\u0435 \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 (\u0432 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445)."),(0,l.kt)("h2",{id:"sozdanie-kortezha"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u0440\u0442\u0435\u0436\u0430"),(0,l.kt)("p",null,"\u041a\u043e\u0440\u0442\u0435\u0436 \u043c\u043e\u0436\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"tuple(T1, T2, ...)\n")),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u0440\u0442\u0435\u0436\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple(1,'a') AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(tuple(1, 'a'))\u2500\u2510\n\u2502 (1,'a') \u2502 Tuple(UInt8, String)      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"osobennosti-raboty-s-tipami-dannykh"},"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0442\u0438\u043f\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,l.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043a\u043e\u0440\u0442\u0435\u0436\u0430 \xab\u043d\u0430 \u043b\u0435\u0442\u0443\xbb ClickHouse \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0442\u0438\u043f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0437 \u0442\u0438\u043f\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430. \u0415\u0441\u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u2014 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/tuple#null-literal"},"NULL"),", \u0442\u043e \u0442\u0438\u043f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043a\u043e\u0440\u0442\u0435\u0436\u0430 \u2014 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/nullable"},"Nullable"),"."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT tuple(1,NULL) AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(tuple(1, NULL))\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (1,NULL) \u2502 Tuple(UInt8, Nullable(Nothing)) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"addressing-tuple-elements"},"\u0410\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043a\u043e\u0440\u0442\u0435\u0436\u0430"),(0,l.kt)("p",null,"\u041a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c \u043a\u043e\u0440\u0442\u0435\u0436\u0430 \u043c\u043e\u0436\u043d\u043e \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043f\u043e \u0438\u043d\u0434\u0435\u043a\u0441\u0443 \u0438 \u043f\u043e \u0438\u043c\u0435\u043d\u0438:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE named_tuples (`a` Tuple(s String, i Int64)) ENGINE = Memory;\n\nINSERT INTO named_tuples VALUES (('y', 10)), (('x',-10));\n\nSELECT a.s FROM named_tuples;\n\nSELECT a.2 FROM named_tuples;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.s\u2500\u2510\n\u2502 y   \u2502\n\u2502 x   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500tupleElement(a, 2)\u2500\u2510\n\u2502                 10 \u2502\n\u2502                -10 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);