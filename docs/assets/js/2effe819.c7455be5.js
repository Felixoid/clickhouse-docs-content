"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40427],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(d,l(l({ref:t},g),{},{components:n})):a.createElement(d,l({ref:t},g))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54917:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={toc_priority:32,toc_title:"StripeLog"},s="Stripelog",p={unversionedId:"en/engines/table-engines/log-family/stripelog",id:"en/engines/table-engines/log-family/stripelog",title:"Stripelog",description:"stripelog}",source:"@site/docs/en/engines/table-engines/log-family/stripelog.md",sourceDirName:"en/engines/table-engines/log-family",slug:"/en/engines/table-engines/log-family/stripelog",permalink:"/en/engines/table-engines/log-family/stripelog",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/engines/table-engines/log-family/stripelog.md",tags:[],version:"current",frontMatter:{toc_priority:32,toc_title:"StripeLog"},sidebar:"english",previous:{title:"Log",permalink:"/en/engines/table-engines/log-family/log"},next:{title:"TinyLog",permalink:"/en/engines/table-engines/log-family/tinylog"}},g={},c=[{value:"Creating a Table",id:"table_engines-stripelog-creating-a-table",level:2},{value:"Writing the Data",id:"table_engines-stripelog-writing-the-data",level:2},{value:"Reading the Data",id:"table_engines-stripelog-reading-the-data",level:2},{value:"Example of Use",id:"table_engines-stripelog-example-of-use",level:2}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stripelog"},"Stripelog"),(0,i.kt)("p",null,"This engine belongs to the family of log engines. See the common properties of log engines and their differences in the ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/log-family/"},"Log Engine Family")," article."),(0,i.kt)("p",null,"Use this engine in scenarios when you need to write many tables with a small amount of data (less than 1 million rows)."),(0,i.kt)("h2",{id:"table_engines-stripelog-creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    column1_name [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    column2_name [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = StripeLog\n")),(0,i.kt)("p",null,"See the detailed description of the ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/table#create-table-query"},"CREATE TABLE")," query."),(0,i.kt)("h2",{id:"table_engines-stripelog-writing-the-data"},"Writing the Data"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"StripeLog")," engine stores all the columns in one file. For each ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," query, ClickHouse appends the data block to the end of a table file, writing columns one by one."),(0,i.kt)("p",null,"For each table ClickHouse writes the files:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data.bin")," \u2014 Data file."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.mrk")," \u2014 File with marks. Marks contain offsets for each column of each data block inserted.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"StripeLog")," engine does not support the ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER UPDATE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ALTER DELETE")," operations."),(0,i.kt)("h2",{id:"table_engines-stripelog-reading-the-data"},"Reading the Data"),(0,i.kt)("p",null,"The file with marks allows ClickHouse to parallelize the reading of data. This means that a ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query returns rows in an unpredictable order. Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause to sort rows."),(0,i.kt)("h2",{id:"table_engines-stripelog-example-of-use"},"Example of Use"),(0,i.kt)("p",null,"Creating a table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE stripe_log_table\n(\n    timestamp DateTime,\n    message_type String,\n    message String\n)\nENGINE = StripeLog\n")),(0,i.kt)("p",null,"Inserting data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO stripe_log_table VALUES (now(),'REGULAR','The first regular message')\nINSERT INTO stripe_log_table VALUES (now(),'REGULAR','The second regular message'),(now(),'WARNING','The first warning message')\n")),(0,i.kt)("p",null,"We used two ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to create two data blocks inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"data.bin")," file."),(0,i.kt)("p",null,"ClickHouse uses multiple threads when selecting data. Each thread reads a separate data block and returns resulting rows independently as it finishes. As a result, the order of blocks of rows in the output does not match the order of the same blocks in the input in most cases. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM stripe_log_table\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500message_type\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-01-18 14:27:32 \u2502 REGULAR      \u2502 The second regular message \u2502\n\u2502 2019-01-18 14:34:53 \u2502 WARNING      \u2502 The first warning message  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500message_type\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-01-18 14:23:43 \u2502 REGULAR      \u2502 The first regular message \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Sorting the results (ascending order by default):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM stripe_log_table ORDER BY timestamp\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500message_type\u2500\u252c\u2500message\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-01-18 14:23:43 \u2502 REGULAR      \u2502 The first regular message  \u2502\n\u2502 2019-01-18 14:27:32 \u2502 REGULAR      \u2502 The second regular message \u2502\n\u2502 2019-01-18 14:34:53 \u2502 WARNING      \u2502 The first warning message  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/stripelog/"},"Original article")," "))}m.isMDXComponent=!0}}]);