"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57514],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19742:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return g}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:70,sidebar_label:"CollapsingMergeTree"},s="CollapsingMergeTree",p={unversionedId:"en/engines/table-engines/mergetree-family/collapsingmergetree",id:"en/engines/table-engines/mergetree-family/collapsingmergetree",title:"CollapsingMergeTree",description:"table_engine-collapsingmergetree}",source:"@site/docs/en/engines/table-engines/mergetree-family/collapsingmergetree.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/collapsingmergetree",permalink:"/docs/en/engines/table-engines/mergetree-family/collapsingmergetree",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/mergetree-family/collapsingmergetree.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{sidebar_position:70,sidebar_label:"CollapsingMergeTree"},sidebar:"english",previous:{title:"AggregatingMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree"},next:{title:"VersionedCollapsingMergeTree",permalink:"/docs/en/engines/table-engines/mergetree-family/versionedcollapsingmergetree"}},c={},g=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Collapsing",id:"table_engine-collapsingmergetree-collapsing",level:2},{value:"Data",id:"data",level:3},{value:"Algorithm",id:"table_engine-collapsingmergetree-collapsing-algorithm",level:3},{value:"Example of Use",id:"example-of-use",level:2},{value:"Example of Another Approach",id:"example-of-another-approach",level:2}],u={toc:g};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table_engine-collapsingmergetree"},"CollapsingMergeTree"),(0,l.kt)("p",null,"The engine inherits from ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," and adds the logic of rows collapsing to data parts merge algorithm."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," asynchronously deletes (collapses) pairs of rows if all of the fields in a sorting key (",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),") are equivalent excepting the particular field ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign")," which can have ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")," values. Rows without a pair are kept. For more details see the ",(0,l.kt)("a",{parentName:"p",href:"#table_engine-collapsingmergetree-collapsing"},"Collapsing")," section of the document."),(0,l.kt)("p",null,"The engine may significantly reduce the volume of storage and increase the efficiency of ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," query as a consequence."),(0,l.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = CollapsingMergeTree(sign)\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,l.kt)("p",null,"For a description of query parameters, see ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/create/table"},"query description"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CollapsingMergeTree Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sign")," \u2014 Name of the column with the type of row: ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," is a \u201cstate\u201d row, ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")," is a \u201ccancel\u201d row."),(0,l.kt)("p",{parentName:"li"},"Column data type \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"Int8"),"."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Query clauses")),(0,l.kt)("p",null,"When creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," table, the same ",(0,l.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-creating-a-table"},"query clauses")," are required, as when creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"MergeTree")," table."),(0,l.kt)("details",{markdown:"1"},(0,l.kt)("summary",null,"Deprecated Method for Creating a Table"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Do not use this method in new projects and, if possible, switch old projects to the method described above."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] CollapsingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, sign)\n")),(0,l.kt)("p",null,"All of the parameters excepting ",(0,l.kt)("inlineCode",{parentName:"p"},"sign")," have the same meaning as in ",(0,l.kt)("inlineCode",{parentName:"p"},"MergeTree"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"sign")," \u2014 Name of the column with the type of row: ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u2014 \u201cstate\u201d row, ",(0,l.kt)("inlineCode",{parentName:"p"},"-1")," \u2014 \u201ccancel\u201d row."),(0,l.kt)("p",{parentName:"li"},"Column Data Type \u2014 ",(0,l.kt)("inlineCode",{parentName:"p"},"Int8"),".")))),(0,l.kt)("h2",{id:"table_engine-collapsingmergetree-collapsing"},"Collapsing"),(0,l.kt)("h3",{id:"data"},"Data"),(0,l.kt)("p",null,"Consider the situation where you need to save continually changing data for some object. It sounds logical to have one row for an object and update it at any change, but update operation is expensive and slow for DBMS because it requires rewriting of the data in the storage. If you need to write data quickly, update not acceptable, but you can write the changes of an object sequentially as follows."),(0,l.kt)("p",null,"Use the particular column ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign"),". If ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign = 1")," it means that the row is a state of an object, let\u2019s call it \u201cstate\u201d row. If ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign = -1")," it means the cancellation of the state of an object with the same attributes, let\u2019s call it \u201ccancel\u201d row."),(0,l.kt)("p",null,"For example, we want to calculate how much pages users checked at some site and how long they were there. At some moment we write the following row with the state of user activity:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"At some moment later we register the change of user activity and write it with the following two rows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"The first row cancels the previous state of the object (user). It should copy the sorting key fields of the cancelled state excepting ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign"),"."),(0,l.kt)("p",null,"The second row contains the current state."),(0,l.kt)("p",null,"As we need only the last state of user activity, the rows"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"can be deleted collapsing the invalid (old) state of an object. ",(0,l.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," does this while merging of the data parts."),(0,l.kt)("p",null,"Why we need 2 rows for each change read in the ",(0,l.kt)("a",{parentName:"p",href:"#table_engine-collapsingmergetree-collapsing-algorithm"},"Algorithm")," paragraph."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Peculiar properties of such approach")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The program that writes the data should remember the state of an object to be able to cancel it. \u201cCancel\u201d string should contain copies of the sorting key fields of the \u201cstate\u201d string and the opposite ",(0,l.kt)("inlineCode",{parentName:"li"},"Sign"),". It increases the initial size of storage but allows to write the data quickly."),(0,l.kt)("li",{parentName:"ol"},"Long growing arrays in columns reduce the efficiency of the engine due to load for writing. The more straightforward data, the higher the efficiency."),(0,l.kt)("li",{parentName:"ol"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," results depend strongly on the consistency of object changes history. Be accurate when preparing data for inserting. You can get unpredictable results in inconsistent data, for example, negative values for non-negative metrics such as session depth.")),(0,l.kt)("h3",{id:"table_engine-collapsingmergetree-collapsing-algorithm"},"Algorithm"),(0,l.kt)("p",null,"When ClickHouse merges data parts, each group of consecutive rows with the same sorting key (",(0,l.kt)("inlineCode",{parentName:"p"},"ORDER BY"),") is reduced to not more than two rows, one with ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign = 1")," (\u201cstate\u201d row) and another with ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign = -1")," (\u201ccancel\u201d row). In other words, entries collapse."),(0,l.kt)("p",null,"For each resulting data part ClickHouse saves:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The first \u201ccancel\u201d and the last \u201cstate\u201d rows, if the number of \u201cstate\u201d and \u201ccancel\u201d rows matches and the last row is a \u201cstate\u201d row."),(0,l.kt)("li",{parentName:"ol"},"The last \u201cstate\u201d row, if there are more \u201cstate\u201d rows than \u201ccancel\u201d rows."),(0,l.kt)("li",{parentName:"ol"},"The first \u201ccancel\u201d row, if there are more \u201ccancel\u201d rows than \u201cstate\u201d rows."),(0,l.kt)("li",{parentName:"ol"},"None of the rows, in all other cases.")),(0,l.kt)("p",null,"Also when there are at least 2 more \u201cstate\u201d rows than \u201ccancel\u201d rows, or at least 2 more \u201ccancel\u201d rows then \u201cstate\u201d rows, the merge continues, but ClickHouse treats this situation as a logical error and records it in the server log. This error can occur if the same data were inserted more than once."),(0,l.kt)("p",null,"Thus, collapsing should not change the results of calculating statistics.\nChanges gradually collapsed so that in the end only the last state of almost every object left."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Sign")," is required because the merging algorithm does not guarantee that all of the rows with the same sorting key will be in the same resulting data part and even on the same physical server. ClickHouse process ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," queries with multiple threads, and it can not predict the order of rows in the result. The aggregation is required if there is a need to get completely \u201ccollapsed\u201d data from ",(0,l.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," table."),(0,l.kt)("p",null,"To finalize collapsing, write a query with ",(0,l.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause and aggregate functions that account for the sign. For example, to calculate quantity, use ",(0,l.kt)("inlineCode",{parentName:"p"},"sum(Sign)")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"count()"),". To calculate the sum of something, use ",(0,l.kt)("inlineCode",{parentName:"p"},"sum(Sign * x)")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"sum(x)"),", and so on, and also add ",(0,l.kt)("inlineCode",{parentName:"p"},"HAVING sum(Sign) > 0"),"."),(0,l.kt)("p",null,"The aggregates ",(0,l.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"sum")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"avg")," could be calculated this way. The aggregate ",(0,l.kt)("inlineCode",{parentName:"p"},"uniq")," could be calculated if an object has at least one state not collapsed. The aggregates ",(0,l.kt)("inlineCode",{parentName:"p"},"min")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"max")," could not be calculated because ",(0,l.kt)("inlineCode",{parentName:"p"},"CollapsingMergeTree")," does not save the values history of the collapsed states."),(0,l.kt)("p",null,"If you need to extract data without aggregation (for example, to check whether rows are present whose newest values match certain conditions), you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"FINAL")," modifier for the ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," clause. This approach is significantly less efficient."),(0,l.kt)("h2",{id:"example-of-use"},"Example of Use"),(0,l.kt)("p",null,"Example data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Creation of the table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE UAct\n(\n    UserID UInt64,\n    PageViews UInt8,\n    Duration UInt8,\n    Sign Int8\n)\nENGINE = CollapsingMergeTree(Sign)\nORDER BY UserID\n")),(0,l.kt)("p",null,"Insertion of the data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UAct VALUES (4324182021466249494, 5, 146, 1)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO UAct VALUES (4324182021466249494, 5, 146, -1),(4324182021466249494, 6, 185, 1)\n")),(0,l.kt)("p",null,"We use two ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," queries to create two different data parts. If we insert the data with one query ClickHouse creates one data part and will not perform any merge ever."),(0,l.kt)("p",null,"Getting the data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM UAct\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502   -1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"What do we see and where is collapsing?"),(0,l.kt)("p",null,"With two ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," queries, we created 2 data parts. The ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," query was performed in 2 threads, and we got a random order of rows. Collapsing not occurred because there was no merge of the data parts yet. ClickHouse merges data part in an unknown moment which we can not predict."),(0,l.kt)("p",null,"Thus we need aggregation:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    UserID,\n    sum(PageViews * Sign) AS PageViews,\n    sum(Duration * Sign) AS Duration\nFROM UAct\nGROUP BY UserID\nHAVING sum(Sign) > 0\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"If we do not need aggregation and want to force collapsing, we can use ",(0,l.kt)("inlineCode",{parentName:"p"},"FINAL")," modifier for ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," clause."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM UAct FINAL\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"This way of selecting the data is very inefficient. Don\u2019t use it for big tables."),(0,l.kt)("h2",{id:"example-of-another-approach"},"Example of Another Approach"),(0,l.kt)("p",null,"Example data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         5 \u2502      146 \u2502    1 \u2502\n\u2502 4324182021466249494 \u2502        -5 \u2502     -146 \u2502   -1 \u2502\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"The idea is that merges take into account only key fields. And in the \u201cCancel\u201d line we can specify negative values that equalize the previous version of the row when summing without using the Sign column. For this approach, it is necessary to change the data type ",(0,l.kt)("inlineCode",{parentName:"p"},"PageViews"),",",(0,l.kt)("inlineCode",{parentName:"p"},"Duration")," to store negative values of UInt8 -",">"," Int16."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE UAct\n(\n    UserID UInt64,\n    PageViews Int16,\n    Duration Int16,\n    Sign Int8\n)\nENGINE = CollapsingMergeTree(Sign)\nORDER BY UserID\n")),(0,l.kt)("p",null,"Let\u2019s test the approach:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into UAct values(4324182021466249494,  5,  146,  1);\ninsert into UAct values(4324182021466249494, -5, -146, -1);\ninsert into UAct values(4324182021466249494,  6,  185,  1);\n\nselect * from UAct final; // avoid using final in production (just for a test or small tables)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    UserID,\n    sum(PageViews) AS PageViews,\n    sum(Duration) AS Duration\nFROM UAct\nGROUP BY UserID\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select count() FROM UAct\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500count()\u2500\u2510\n\u2502       3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"optimize table UAct final;\n\nselect * FROM UAct\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500UserID\u2500\u252c\u2500PageViews\u2500\u252c\u2500Duration\u2500\u252c\u2500Sign\u2500\u2510\n\u2502 4324182021466249494 \u2502         6 \u2502      185 \u2502    1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/collapsingmergetree/"},"Original article")," "))}m.isMDXComponent=!0}}]);