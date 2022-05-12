"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[43493],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,d=g["".concat(p,".").concat(m)]||g[m]||u[m]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},88327:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:36,sidebar_label:"Merge"},p="Merge",s={unversionedId:"ru/engines/table-engines/special/merge",id:"ru/engines/table-engines/special/merge",title:"Merge",description:"merge}",source:"@site/docs/ru/engines/table-engines/special/merge.md",sourceDirName:"ru/engines/table-engines/special",slug:"/ru/engines/table-engines/special/merge",permalink:"/docs/ru/engines/table-engines/special/merge",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/special/merge.md",tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36,sidebar_label:"Merge"},sidebar:"russia",previous:{title:"Dictionary",permalink:"/docs/ru/engines/table-engines/special/dictionary"},next:{title:"File",permalink:"/docs/ru/engines/table-engines/special/file"}},c={},u=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"creating-a-table",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"usage",level:2},{value:"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b",id:"virtualnye-stolbtsy",level:2}],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"merge"},"Merge"),(0,i.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a ",(0,i.kt)("inlineCode",{parentName:"p"},"Merge")," (\u043d\u0435 \u043f\u0443\u0442\u0430\u0439\u0442\u0435 \u0441 \u0434\u0432\u0438\u0436\u043a\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),") \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0438\u0437 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0434\u0440\u0443\u0433\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446.\n\u0427\u0442\u0435\u043d\u0438\u0435 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0440\u0430\u0441\u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f. \u0417\u0430\u043f\u0438\u0441\u044c \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f. \u041f\u0440\u0438 \u0447\u0442\u0435\u043d\u0438\u0438 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0442\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0440\u0435\u0430\u043b\u044c\u043d\u043e \u0438\u0434\u0451\u0442 \u0447\u0442\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0442."),(0,i.kt)("h2",{id:"creating-a-table"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"    CREATE TABLE ... Engine=Merge(db_name, tables_regexp)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"db_name")," \u2014 \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0438\u043c\u044f \u0411\u0414, "),(0,i.kt)("li",{parentName:"ul"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0441\u0442\u0440\u043e\u043a\u0443 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u0411\u0414, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("inlineCode",{parentName:"li"},"currentDatabase()"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REGEXP(expression)"),", \u0433\u0434\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"expression")," \u2014 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0442\u0431\u043e\u0440\u0430 \u0411\u0414."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"tables_regexp")," \u2014 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0438\u043c\u0435\u043d \u0442\u0430\u0431\u043b\u0438\u0446 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0411\u0414 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0411\u0414."))),(0,i.kt)("h2",{id:"usage"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,i.kt)("p",null,"\u0420\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u2014 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/re2"},"re2")," (\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e PCRE), \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u043e\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435.\n\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0437\u0430\u043c\u0435\u0447\u0430\u043d\u0438\u0435 \u043e\u0431 \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0432 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u0445 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \xabmatch\xbb."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0441\u0430\u043c\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"Merge"),"-\u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0431\u0440\u0430\u043d\u0430, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043f\u043e\u043f\u0430\u0434\u0430\u0435\u0442 \u043f\u043e\u0434 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u043d\u0435 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u043e \u0446\u0438\u043a\u043b\u043e\u0432.\n\u0412\u043f\u0440\u043e\u0447\u0435\u043c, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u0432\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"Merge"),"-\u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u044b\u0442\u0430\u0442\u044c\u0441\u044f \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e \u0447\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u0440\u0443\u0433 \u0434\u0440\u0443\u0433\u0430, \u043d\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e\u0433\u043e \u043d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f."),(0,i.kt)("p",null,"\u0422\u0438\u043f\u0438\u0447\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0432\u0438\u0436\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"Merge")," \u2014 \u0440\u0430\u0431\u043e\u0442\u0430 \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e\u043c \u0442\u0430\u0431\u043b\u0438\u0446 \u0442\u0438\u043f\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"TinyLog")," \u043a\u0430\u043a \u0441 \u043e\u0434\u043d\u043e\u0439."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 1")),(0,i.kt)("p",null,"\u041f\u0443\u0441\u0442\u044c \u0435\u0441\u0442\u044c \u0434\u0432\u0435 \u0411\u0414 ",(0,i.kt)("inlineCode",{parentName:"p"},"ABC_corporate_site")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"ABC_store"),". \u0422\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"all_visitors")," \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c ID \u0438\u0437 \u0442\u0430\u0431\u043b\u0438\u0446 ",(0,i.kt)("inlineCode",{parentName:"p"},"visitors")," \u0432 \u043e\u0431\u0435\u0438\u0445 \u0411\u0414. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE all_visitors (id UInt32) ENGINE=Merge(REGEXP('ABC_*'), 'visitors');\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 2")),(0,i.kt)("p",null,"\u041f\u0443\u0441\u0442\u044c \u0435\u0441\u0442\u044c \u0441\u0442\u0430\u0440\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"WatchLog_old"),". \u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043d\u043e\u0432\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"WatchLog_new"),". \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u0435\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE WatchLog_old(date Date, UserId Int64, EventType String, Cnt UInt64)\n        ENGINE=MergeTree(date, (UserId, EventType), 8192);\nINSERT INTO WatchLog_old VALUES ('2018-01-01', 1, 'hit', 3);\n\nCREATE TABLE WatchLog_new(date Date, UserId Int64, EventType String, Cnt UInt64)\n        ENGINE=MergeTree PARTITION BY date ORDER BY (UserId, EventType) SETTINGS index_granularity=8192;\nINSERT INTO WatchLog_new VALUES ('2018-01-02', 2, 'hit', 3);\n\nCREATE TABLE WatchLog as WatchLog_old ENGINE=Merge(currentDatabase(), '^WatchLog');\n\nSELECT * FROM WatchLog;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500date\u2500\u252c\u2500UserId\u2500\u252c\u2500EventType\u2500\u252c\u2500Cnt\u2500\u2510\n\u2502 2018-01-01 \u2502      1 \u2502 hit       \u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500date\u2500\u252c\u2500UserId\u2500\u252c\u2500EventType\u2500\u252c\u2500Cnt\u2500\u2510\n\u2502 2018-01-02 \u2502      2 \u2502 hit       \u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"virtualnye-stolbtsy"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"_table")," \u2014 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u044b\u043b\u0438 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u044b. \u0422\u0438\u043f \u2014 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/special/merge"},"String"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u0412 \u0441\u0435\u043a\u0446\u0438\u0438 `WHERE/PREWHERE` \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0430 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 `_table` (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, `WHERE _table='xyz'`). \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0447\u0442\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u0435\u0445 \u0442\u0430\u0431\u043b\u0438\u0446, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0443\u0441\u043b\u043e\u0432\u0438\u0435 \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 `_table`, \u0442\u0430\u043a\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c, \u0441\u0442\u043e\u043b\u0431\u0435\u0446 `_table` \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u0438\u043d\u0434\u0435\u043a\u0441.\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/special/#table_engines-virtual_columns"},"\u0412\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b")),(0,i.kt)("li",{parentName:"ul"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/table-functions/merge"},"merge"))))}m.isMDXComponent=!0}}]);