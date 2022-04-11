"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86043],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73706:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:37,sidebar_label:"File"},p="File(Format)",s={unversionedId:"ru/engines/table-engines/special/file",id:"ru/engines/table-engines/special/file",title:"File(Format)",description:"table_engines-file}",source:"@site/docs/ru/engines/table-engines/special/file.md",sourceDirName:"ru/engines/table-engines/special",slug:"/ru/engines/table-engines/special/file",permalink:"/ru/engines/table-engines/special/file",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/ru/engines/table-engines/special/file.md",tags:[],version:"current",sidebarPosition:37,frontMatter:{sidebar_position:37,sidebar_label:"File"},sidebar:"russia",previous:{title:"Merge",permalink:"/ru/engines/table-engines/special/merge"},next:{title:"Null",permalink:"/ru/engines/table-engines/special/null"}},c={},u=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0438\u0436\u043a\u0430 \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ClickHouse",id:"ispolzovanie-dvizhka-v-servere-clickhouse",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"table_engines-file"},"File(Format)"),(0,i.kt)("p",null,"\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 \u043e\u0434\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435."),(0,i.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0412\u044b\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 ClickHouse \u0432 \u0444\u0430\u0439\u043b."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u0432 \u0434\u0440\u0443\u0433\u043e\u0439."),(0,i.kt)("li",{parentName:"ul"},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ClickHouse \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0444\u0430\u0439\u043b\u0430 \u043d\u0430 \u0434\u0438\u0441\u043a\u0435.")),(0,i.kt)("h2",{id:"ispolzovanie-dvizhka-v-servere-clickhouse"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0438\u0436\u043a\u0430 \u0432 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ClickHouse"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"File(Format)\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Format")," \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0442\u0430\u043a\u0438\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 ClickHouse \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0438 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),". \u041f\u043e\u043b\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0432 \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,i.kt)("a",{parentName:"p",href:"/ru/interfaces/formats#formats"},"\u0424\u043e\u0440\u043c\u0430\u0442\u044b"),"."),(0,i.kt)("p",null,"\u0421\u0435\u0440\u0432\u0435\u0440 ClickHouse \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"File"),". \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u0443\u0442\u044c \u043a \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0443, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,i.kt)("a",{parentName:"p",href:"/ru/operations/server-configuration-parameters/settings#server_configuration_parameters-path"},"path")," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"File(Format)")," \u0441\u0435\u0440\u0432\u0435\u0440 ClickHouse \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u0430 \u043f\u043e\u0441\u043b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043c\u0435\u0449\u0430\u0435\u0442 \u0442\u0443\u0434\u0430 \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},"data.Format"),"."),(0,i.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043f\u043e\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0442\u0443\u0434\u0430 \u0444\u0430\u0439\u043b, \u0437\u0430\u0442\u0435\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ClickHouse \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c (",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/attach#attach"},"ATTACH"),") \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0435, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0438\u043c\u0435\u043d\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u0438 \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 \u0434\u0430\u043d\u043d\u044b\u0435."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),'"Warning"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"\u0411\u0443\u0434\u044c\u0442\u0435 \u0430\u043a\u043a\u0443\u0440\u0430\u0442\u043d\u044b \u0441 \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u0435\u0440\u0432\u0435\u0440 ClickHouse \u043d\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u0415\u0441\u043b\u0438 \u0432 \u0444\u0430\u0439\u043b \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0437\u0430\u043f\u0438\u0441\u044c \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0441\u043e \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse \u0438 \u0441 \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0441\u0442\u043e\u0440\u043e\u043d\u044b, \u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0435\u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c.\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"1.")," \u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"file_engine_table"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE file_engine_table (name String, value UInt32) ENGINE=File(TabSeparated)\n")),(0,i.kt)("p",{parentName:"div"},"\u0412 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0441\u0435\u0440\u0432\u0435\u0440 ClickHouse \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/default/file_engine_table"),"."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"2.")," \u0412\u0440\u0443\u0447\u043d\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0444\u0430\u0439\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/data/default/file_engine_table/data.TabSeparated")," \u0441 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u044b\u043c:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$cat data.TabSeparated\none 1\ntwo 2\n")),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"3.")," \u0417\u0430\u043f\u0440\u043e\u0441\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM file_engine_table\n")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u252c\u2500value\u2500\u2510\n\u2502 one  \u2502     1 \u2502\n\u2502 two  \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{parentName:"div",id:"ispolzovanie-dvizhka-v-clickhouse-local"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0434\u0432\u0438\u0436\u043a\u0430 \u0432 Clickhouse-local"),(0,i.kt)("p",{parentName:"div"},"\u0412 ",(0,i.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/file"},"clickhouse-local")," \u0434\u0432\u0438\u0436\u043e\u043a \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u043e\u0440\u043c\u0430\u0442, \u043d\u043e \u0438 \u043f\u0443\u0442\u044c \u043a \u0444\u0430\u0439\u043b\u0443. \u0412 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043f\u043e\u0442\u043e\u043a\u0438 \u0432\u0432\u043e\u0434\u0430/\u0432\u044b\u0432\u043e\u0434\u0430 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u043c \u0438\u043b\u0438 \u0431\u0443\u043a\u0432\u0435\u043d\u043d\u044b\u043c \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"stdin"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"stdout"),". \u041c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0438 \u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0436\u0430\u0442\u044b\u0435 \u0444\u0430\u0439\u043b\u044b. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0434\u0432\u0438\u0436\u043a\u0430 \u0438\u043b\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430 (",(0,i.kt)("inlineCode",{parentName:"p"},"gz"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"br")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"xz"),")."),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440:")),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -e "1,2\\n3,4" | clickhouse-local -q "CREATE TABLE table (a Int64, b Int64) ENGINE = File(CSV, stdin); SELECT a, b FROM table; DROP TABLE table"\n')),(0,i.kt)("h2",{parentName:"div",id:"detali-realizatsii"},"\u0414\u0435\u0442\u0430\u043b\u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT"),", \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," \u043c\u043e\u0433\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e."),(0,i.kt)("li",{parentName:"ul"},"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0435\u0449\u0451 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT"),"."),(0,i.kt)("li",{parentName:"ul"},"\u0414\u043b\u044f \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432 \u043a\u043e\u043d\u0435\u0446 \u0444\u0430\u0439\u043b\u0430."),(0,i.kt)("li",{parentName:"ul"},"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE"),";"),(0,i.kt)("li",{parentName:"ul"},"\u0438\u043d\u0434\u0435\u043a\u0441\u044b;"),(0,i.kt)("li",{parentName:"ul"},"\u0440\u0435\u043f\u043b\u0438\u043a\u0430\u0446\u0438\u044f.")))))))}d.isMDXComponent=!0}}]);