"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[61055],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||s;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<s;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),s=(n(67294),n(3905)),l=["components"],o={sidebar_label:"WITH"},i="\u0421\u0435\u043a\u0446\u0438\u044f WITH",u={unversionedId:"ru/sql-reference/statements/select/with",id:"ru/sql-reference/statements/select/with",title:"\u0421\u0435\u043a\u0446\u0438\u044f WITH",description:"with-clause}",source:"@site/docs/ru/sql-reference/statements/select/with.md",sourceDirName:"ru/sql-reference/statements/select",slug:"/ru/sql-reference/statements/select/with",permalink:"/ru/sql-reference/statements/select/with",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/select/with.md",tags:[],version:"current",frontMatter:{sidebar_label:"WITH"},sidebar:"russia",previous:{title:"WHERE",permalink:"/ru/sql-reference/statements/select/where"},next:{title:"INSERT INTO",permalink:"/ru/sql-reference/statements/insert-into"}},c={},p=[{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"with-clause"},"\u0421\u0435\u043a\u0446\u0438\u044f WITH"),(0,s.kt)("p",null,"Clickhouse \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ",(0,s.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%98%D0%B5%D1%80%D0%B0%D1%80%D1%85%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%B8_%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D1%8B%D0%B5_%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D1%8B_%D0%B2_SQL"},"\u041e\u0431\u0449\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f"),", \u0442\u043e \u0435\u0441\u0442\u044c \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0438\u0437 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,s.kt)("inlineCode",{parentName:"p"},"WITH")," \u0432 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430. \u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u0438 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u0442\u0435\u0445 \u043c\u0435\u0441\u0442\u0430\u0445, \u0433\u0434\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u044b \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u044b. \u0420\u0435\u043a\u0443\u0440\u0441\u0438\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043f\u0443\u0442\u0435\u043c \u0441\u043a\u0440\u044b\u0442\u0438\u044f \u043e\u0431\u0449\u0435\u0433\u043e \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f \u0438\u0437 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,s.kt)("inlineCode",{parentName:"p"},"WITH"),"."),(0,s.kt)("h2",{id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH <expression> AS <identifier>\n")),(0,s.kt)("p",null,"\u0438\u043b\u0438"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH <identifier> AS <subquery expression>\n")),(0,s.kt)("h2",{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 1:")," \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043a\u0430\u043a \xab\u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439\xbb"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH '2019-08-01 15:23:00' as ts_upper_bound\nSELECT *\nFROM hits\nWHERE\n    EventDate = toDate(ts_upper_bound) AND\n    EventTime <= ts_upper_bound;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 2:")," \u0412\u044b\u043a\u0438\u0434\u044b\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f sum(bytes) \u0438\u0437 \u0441\u043f\u0438\u0441\u043a\u0430 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0432 SELECT"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH sum(bytes) as s\nSELECT\n    formatReadableSize(s),\n    table\nFROM system.parts\nGROUP BY table\nORDER BY s;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 3:")," \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0441\u043a\u0430\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u043f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"/* \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043a\u0430\u0436\u0435\u0442 TOP 10 \u0441\u0430\u043c\u044b\u0445 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 */\nWITH\n    (\n        SELECT sum(bytes)\n        FROM system.parts\n        WHERE active\n    ) AS total_disk_usage\nSELECT\n    (sum(bytes) / total_disk_usage) * 100 AS table_disk_usage,\n    table\nFROM system.parts\nGROUP BY table\nORDER BY table_disk_usage DESC\nLIMIT 10;\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440 4:")," \u041f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"WITH test1 AS (SELECT i + 1, j + 1 FROM test1)\nSELECT * FROM test1;\n")))}f.isMDXComponent=!0}}]);