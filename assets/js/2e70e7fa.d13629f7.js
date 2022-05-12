"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76963],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||c;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72531:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],l={sidebar_position:49,sidebar_label:"EXCHANGE"},s="EXCHANGE",i={unversionedId:"ru/sql-reference/statements/exchange",id:"ru/sql-reference/statements/exchange",title:"EXCHANGE",description:"exchange}",source:"@site/docs/ru/sql-reference/statements/exchange.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/exchange",permalink:"/docs/ru/sql-reference/statements/exchange",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/exchange.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49,sidebar_label:"EXCHANGE"},sidebar:"russia",previous:{title:"RENAME",permalink:"/docs/ru/sql-reference/statements/rename"},next:{title:"SET",permalink:"/docs/ru/sql-reference/statements/set"}},u={},p=[{value:"EXCHANGE TABLES",id:"exchange_tables",level:2},{value:"EXCHANGE DICTIONARIES",id:"exchange_dictionaries",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"exchange"},"EXCHANGE"),(0,c.kt)("p",null,"\u0410\u0442\u043e\u043c\u0430\u0440\u043d\u043e \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0435\u0442 \u0438\u043c\u0435\u043d\u0430 \u0434\u0432\u0443\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0438\u043b\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439.\n\u042d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,c.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/rename"},"RENAME"),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0442\u0440\u0435\u0442\u044c\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0438\u043c\u044f, \u043d\u043e \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043d\u0435\u0430\u0442\u043e\u043c\u0430\u0440\u043d\u043e."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0417\u0430\u043f\u0440\u043e\u0441 `EXCHANGE` \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0432\u0438\u0436\u043a\u043e\u043c \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 [Atomic](/docs/ru/engines/database-engines/atomic).\n:::\n')),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE TABLES|DICTIONARIES [db0.]name_A AND [db1.]name_B\n")),(0,c.kt)("h2",{id:"exchange_tables"},"EXCHANGE TABLES"),(0,c.kt)("p",null,"\u041e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0435\u0442 \u0438\u043c\u0435\u043d\u0430 \u0434\u0432\u0443\u0445 \u0442\u0430\u0431\u043b\u0438\u0446."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE TABLES [db0.]table_A AND [db1.]table_B\n")),(0,c.kt)("h2",{id:"exchange_dictionaries"},"EXCHANGE DICTIONARIES"),(0,c.kt)("p",null,"\u041e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0435\u0442 \u0438\u043c\u0435\u043d\u0430 \u0434\u0432\u0443\u0445 \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE DICTIONARIES [db0.]dict_A AND [db1.]dict_B\n")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/"},"\u0421\u043b\u043e\u0432\u0430\u0440\u0438"))))}f.isMDXComponent=!0}}]);