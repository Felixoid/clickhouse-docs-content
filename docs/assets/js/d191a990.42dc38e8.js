"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[79174],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,u=c["".concat(l,".").concat(k)]||c[k]||d[k]||p;return a?n.createElement(u,i(i({ref:t},o),{},{components:a})):n.createElement(u,i({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,i=new Array(p);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<p;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47178:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var n=a(87462),r=a(63366),p=(a(67294),a(3905)),i=["components"],s={},l="system.parts",m={unversionedId:"ru/operations/system-tables/parts",id:"ru/operations/system-tables/parts",title:"system.parts",description:"system_tables-parts}",source:"@site/docs/ru/operations/system-tables/parts.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/parts",permalink:"/docs/ru/operations/system-tables/parts",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/system-tables/parts.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.part_log",permalink:"/docs/ru/operations/system-tables/part_log"},next:{title:"system.parts_columns",permalink:"/docs/ru/operations/system-tables/parts_columns"}},o={},d=[],c={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"system_tables-parts"},"system.parts"),(0,p.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043a\u0443\u0441\u043a\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"."),(0,p.kt)("p",null,"\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043e\u0434\u0438\u043d \u043a\u0443\u0441\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445."),(0,p.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"partition")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0438\u043c\u044f \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438. \u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u0443\u0437\u043d\u0430\u0442\u044c \u0438\u0437 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/#query_language_queries_alter"},"ALTER"),"."),(0,p.kt)("p",{parentName:"li"},"\u0424\u043e\u0440\u043c\u0430\u0442\u044b:"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"YYYYMM")," \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0439 \u0441\u0445\u0435\u043c\u044b \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u043e \u043c\u0435\u0441\u044f\u0446\u0430\u043c."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"any_string")," \u043f\u0440\u0438 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 \u0432\u0440\u0443\u0447\u043d\u0443\u044e."))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"name")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0438\u043c\u044f \u043a\u0443\u0441\u043a\u0430.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"part_type")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0444\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445."),(0,p.kt)("p",{parentName:"li"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Wide")," \u2014 \u043a\u0430\u0436\u0434\u0430\u044f \u043a\u043e\u043b\u043e\u043d\u043a\u0430 \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Compact")," \u2014 \u0432\u0441\u0435 \u043a\u043e\u043b\u043e\u043d\u043a\u0438 \u0445\u0440\u0430\u043d\u044f\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435.")),(0,p.kt)("p",{parentName:"li"},"\u0424\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c\u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"min_bytes_for_wide_part")," \u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"min_rows_for_wide_part")," \u0442\u0430\u0431\u043b\u0438\u0446\u044b ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"active")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2013 \u043f\u0440\u0438\u0437\u043d\u0430\u043a \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438. \u0415\u0441\u043b\u0438 \u043a\u0443\u0441\u043e\u043a \u0430\u043a\u0442\u0438\u0432\u0435\u043d, \u0442\u043e \u043e\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0435\u0439, \u0432 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u043d \u0431\u0443\u0434\u0435\u0442 \u0443\u0434\u0430\u043b\u0435\u043d. \u041d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u0443\u0441\u043a\u0438 \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u0439.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"marks")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0441\u0435\u0447\u0435\u043a. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a \u0432 \u043a\u0443\u0441\u043a\u0435, \u0443\u043c\u043d\u043e\u0436\u044c\u0442\u0435 ",(0,p.kt)("inlineCode",{parentName:"p"},"marks")," \u043d\u0430 \u0433\u0440\u0430\u043d\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0438\u043d\u0434\u0435\u043a\u0441\u0430 (\u043e\u0431\u044b\u0447\u043d\u043e 8192).")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"rows")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"bytes_on_disk")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u0441\u0435\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0431\u0430\u0439\u0442\u0430\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"data_compressed_bytes")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0436\u0430\u0442\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0432 \u043a\u0443\u0441\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u0441\u0435\u0445 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0444\u0430\u0439\u043b\u043e\u0432 \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438) \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"data_uncompressed_bytes")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0440\u0430\u0441\u043f\u0430\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043a\u0443\u0441\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445. \u0420\u0430\u0437\u043c\u0435\u0440 \u0432\u0441\u0435\u0445 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0444\u0430\u0439\u043b\u043e\u0432 \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438) \u043d\u0435 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"marks_bytes")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"secondary_indices_compressed_bytes")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0432\u0442\u043e\u0440\u0438\u0447\u043d\u044b\u0445 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432 \u0432 \u043a\u0443\u0441\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0444\u0430\u0439\u043b\u044b \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438) \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"secondary_indices_uncompressed_bytes")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043e\u0431\u0449\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u043d\u0435\u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0432\u0442\u043e\u0440\u0438\u0447\u043d\u044b\u0445 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432 \u0432 \u043a\u0443\u0441\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u0412\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0444\u0430\u0439\u043b\u044b \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438) \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"secondary_indices_marks_bytes")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u0432\u0442\u043e\u0440\u0438\u0447\u043d\u044b\u0445 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"modification_time")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2013 \u0432\u0440\u0435\u043c\u044f \u043c\u043e\u0434\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0441 \u043a\u0443\u0441\u043a\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u0431\u044b\u0447\u043d\u043e \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u0443\u0441\u043a\u0430.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"remove_time")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2013 \u0432\u0440\u0435\u043c\u044f, \u043a\u043e\u0433\u0434\u0430 \u043a\u0443\u0441\u043e\u043a \u0441\u0442\u0430\u043b \u043d\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"refcount")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2013 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043c\u0435\u0441\u0442, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043a\u0443\u0441\u043e\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u043e\u043b\u044c\u0448\u0435 2 \u0433\u043e\u0432\u043e\u0440\u0438\u0442 \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u043a\u0443\u0441\u043e\u043a \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 \u0438\u043b\u0438 \u0432 \u0441\u043b\u0438\u044f\u043d\u0438\u044f\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"min_date")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/date"},"Date"),") \u2013 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u0430\u0442\u044b \u0432 \u043a\u0443\u0441\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"max_date")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/date"},"Date"),") \u2013 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u0430\u0442\u044b \u0432 \u043a\u0443\u0441\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"min_time")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2013 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u043a\u0443\u0441\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"max_time"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2013 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u043a\u0443\u0441\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"partition_id")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 ID \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"min_block_number")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u0443\u0441\u043a\u043e\u0432, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u043e\u0441\u043b\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"max_block_number")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043a\u0443\u0441\u043a\u043e\u0432, \u0438\u0437 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u043e\u0441\u043b\u0435 \u0441\u043b\u0438\u044f\u043d\u0438\u044f.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"level")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt32"),") - \u0433\u043b\u0443\u0431\u0438\u043d\u0430 \u0434\u0435\u0440\u0435\u0432\u0430 \u0441\u043b\u0438\u044f\u043d\u0438\u0439. \u0415\u0441\u043b\u0438 \u0441\u043b\u0438\u044f\u043d\u0438\u0439 \u043d\u0435 \u0431\u044b\u043b\u043e, \u0442\u043e ",(0,p.kt)("inlineCode",{parentName:"p"},"level=0"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"data_version")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u0447\u0438\u0441\u043b\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0433\u043e, \u043a\u0430\u043a\u0438\u0435 \u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u043a \u043a\u0443\u0441\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 (\u043c\u0443\u0442\u0430\u0446\u0438\u0438 \u0441 \u0432\u0435\u0440\u0441\u0438\u0435\u0439 \u0431\u043e\u043b\u044c\u0448\u0435\u0439, \u0447\u0435\u043c ",(0,p.kt)("inlineCode",{parentName:"p"},"data_version"),").")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"primary_key_bytes_in_memory")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043e\u0431\u044a\u0451\u043c \u043f\u0430\u043c\u044f\u0442\u0438 (\u0432 \u0431\u0430\u0439\u0442\u0430\u0445), \u0437\u0430\u043d\u0438\u043c\u0430\u0435\u043c\u043e\u0439 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"primary_key_bytes_in_memory_allocated")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u043e\u0431\u044a\u0451\u043c \u043f\u0430\u043c\u044f\u0442\u0438 (\u0432 \u0431\u0430\u0439\u0442\u0430\u0445) \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u0440\u0430\u0437\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"is_frozen")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2013 \u041f\u0440\u0438\u0437\u043d\u0430\u043a, \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u044d\u043a\u0430\u043f\u0430 \u043f\u0430\u0440\u0442\u0438\u0446\u0438\u0438. 1, \u0431\u044d\u043a\u0430\u043f \u0435\u0441\u0442\u044c. 0, \u0431\u044d\u043a\u0430\u043f\u0430 \u043d\u0435\u0442. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u0434\u0435\u043b ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/alter/partition#alter_freeze-partition"},"FREEZE PARTITION"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"database")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"table")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0438\u043c\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u044b.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"engine")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0438\u043c\u044f \u0434\u0432\u0438\u0436\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0431\u0435\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"path")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0430\u0431\u0441\u043e\u043b\u044e\u0442\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u043a \u043f\u0430\u043f\u043a\u0435 \u0441 \u0444\u0430\u0439\u043b\u0430\u043c\u0438 \u043a\u0443\u0441\u043a\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"disk")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0438\u043c\u044f \u0434\u0438\u0441\u043a\u0430, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043a\u0443\u0441\u043e\u043a \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"hash_of_all_files")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128")," \u0434\u043b\u044f \u0441\u0436\u0430\u0442\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"hash_of_uncompressed_files")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128")," \u043d\u0435\u0441\u0436\u0430\u0442\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 (\u0444\u0430\u0439\u043b\u044b \u0441 \u0437\u0430\u0441\u0435\u0447\u043a\u0430\u043c\u0438, \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c \u0438 \u043f\u0440.)")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"uncompressed_hash_of_compressed_files")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),") \u2013 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128")," \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0441\u0436\u0430\u0442\u044b\u0445 \u0444\u0430\u0439\u043b\u0430\u0445 \u043a\u0430\u043a \u0435\u0441\u043b\u0438 \u0431\u044b \u043e\u043d\u0438 \u0431\u044b\u043b\u0438 \u0440\u0430\u0437\u0436\u0430\u0442\u044b\u043c\u0438.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"delete_ttl_info_min")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL DELETE"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"delete_ttl_info_max")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL DELETE"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"move_ttl_info.expression")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/string"},"String"),")) \u2014 \u041c\u0430\u0441\u0441\u0438\u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439. \u041a\u0430\u0436\u0434\u043e\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0451\u0442 \u043f\u0440\u0430\u0432\u0438\u043b\u043e ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE"),"."),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"\n\u041c\u0430\u0441\u0441\u0438\u0432 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 `move_ttl_info.expression` \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0432 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c, \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u0438. \u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438 `TTL MOVE` \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044f `move_ttl_info.min` \u0438 `move_ttl_info.max`.\n:::\n'))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"move_ttl_info.min")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 \u041c\u0430\u0441\u0441\u0438\u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u041a\u0430\u0436\u0434\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0437\u0430\u0434\u0430\u0451\u0442 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"move_ttl_info.max")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/array"},"Array"),"(",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 \u041c\u0430\u0441\u0441\u0438\u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u041a\u0430\u0436\u0434\u044b\u0439 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u043c\u0430\u0441\u0441\u0438\u0432\u0430 \u0437\u0430\u0434\u0430\u0451\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0430 \u0434\u0430\u0442\u044b \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0434\u043b\u044f \u043f\u0440\u0430\u0432\u0438\u043b\u0430 ",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"bytes")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u0430\u043b\u0438\u0430\u0441 \u0434\u043b\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"bytes_on_disk"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("inlineCode",{parentName:"p"},"marks_size")," (",(0,p.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 \u0430\u043b\u0438\u0430\u0441 \u0434\u043b\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"marks_bytes"),"."))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.parts LIMIT 1 FORMAT Vertical;\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\npartition:                             tuple()\nname:                                  all_1_4_1_6\npart_type:                             Wide\nactive:                                1\nmarks:                                 2\nrows:                                  6\nbytes_on_disk:                         310\ndata_compressed_bytes:                 157\ndata_uncompressed_bytes:               91\nsecondary_indices_compressed_bytes:    58\nsecondary_indices_uncompressed_bytes:  6\nsecondary_indices_marks_bytes:         48\nmarks_bytes:                           144\nmodification_time:                     2020-06-18 13:01:49\nremove_time:                           0000-00-00 00:00:00\nrefcount:                              1\nmin_date:                              0000-00-00\nmax_date:                              0000-00-00\nmin_time:                              0000-00-00 00:00:00\nmax_time:                              0000-00-00 00:00:00\npartition_id:                          all\nmin_block_number:                      1\nmax_block_number:                      4\nlevel:                                 1\ndata_version:                          6\nprimary_key_bytes_in_memory:           8\nprimary_key_bytes_in_memory_allocated: 64\nis_frozen:                             0\ndatabase:                              default\ntable:                                 months\nengine:                                MergeTree\ndisk_name:                             default\npath:                                  /var/lib/clickhouse/data/default/months/all_1_4_1_6/\nhash_of_all_files:                     2d0657a16d9430824d35e327fcbd87bf\nhash_of_uncompressed_files:            84950cc30ba867c77a408ae21332ba29\nuncompressed_hash_of_compressed_files: 1ad78f1c6843bbfb99a2c931abe7df7d\ndelete_ttl_info_min:                   0000-00-00 00:00:00\ndelete_ttl_info_max:                   0000-00-00 00:00:00\nmove_ttl_info.expression:              []\nmove_ttl_info.min:                     []\nmove_ttl_info.max:                     []\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree"},"\u0414\u0432\u0438\u0436\u043e\u043a MergeTree")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL \u0434\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438 \u0442\u0430\u0431\u043b\u0438\u0446"))))}k.isMDXComponent=!0}}]);