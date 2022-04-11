"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75920],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):g(g({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(n),c=a,d=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(d,g(g({ref:t},p),{},{components:n})):r.createElement(d,g({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,g=new Array(i);g[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,g[1]=l;for(var o=2;o<i;o++)g[o]=n[o];return r.createElement.apply(null,g)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25284:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),g=["components"],l={sidebar_position:60,sidebar_label:"AggregatingMergeTree"},s="AggregatingMergeTree",o={unversionedId:"en/engines/table-engines/mergetree-family/aggregatingmergetree",id:"en/engines/table-engines/mergetree-family/aggregatingmergetree",title:"AggregatingMergeTree",description:"aggregatingmergetree}",source:"@site/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree.md",sourceDirName:"en/engines/table-engines/mergetree-family",slug:"/en/engines/table-engines/mergetree-family/aggregatingmergetree",permalink:"/en/engines/table-engines/mergetree-family/aggregatingmergetree",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/engines/table-engines/mergetree-family/aggregatingmergetree.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,sidebar_label:"AggregatingMergeTree"},sidebar:"english",previous:{title:"SummingMergeTree",permalink:"/en/engines/table-engines/mergetree-family/summingmergetree"},next:{title:"CollapsingMergeTree",permalink:"/en/engines/table-engines/mergetree-family/collapsingmergetree"}},p={},m=[{value:"Creating a Table",id:"creating-a-table",level:2},{value:"SELECT and INSERT",id:"select-and-insert",level:2},{value:"Example of an Aggregated Materialized View",id:"example-of-an-aggregated-materialized-view",level:2}],u={toc:m};function c(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aggregatingmergetree"},"AggregatingMergeTree"),(0,i.kt)("p",null,"The engine inherits from ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engines-mergetree"},"MergeTree"),", altering the logic for data parts merging. ClickHouse replaces all rows with the same primary key (or more accurately, with the same ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree"},"sorting key"),") with a single row (within a one data part) that stores a combination of states of aggregate functions."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," tables for incremental data aggregation, including for aggregated materialized views."),(0,i.kt)("p",null,"The engine processes all columns with the following types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/aggregatefunction"},"AggregateFunction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/simpleaggregatefunction"},"SimpleAggregateFunction"))),(0,i.kt)("p",null,"It is appropriate to use ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," if it reduces the number of rows by orders."),(0,i.kt)("h2",{id:"creating-a-table"},"Creating a Table"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = AggregatingMergeTree()\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[TTL expr]\n[SETTINGS name=value, ...]\n")),(0,i.kt)("p",null,"For a description of request parameters, see ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/create/table"},"request description"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Query clauses")),(0,i.kt)("p",null,"When creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," table the same ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree"},"clauses")," are required, as when creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," table."),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"Deprecated Method for Creating a Table"),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Do not use this method in new projects and, if possible, switch the old projects to the method described above."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] AggregatingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity)\n")),(0,i.kt)("p",null,"All of the parameters have the same meaning as in ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),".")),(0,i.kt)("h2",{id:"select-and-insert"},"SELECT and INSERT"),(0,i.kt)("p",null,"To insert data, use ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/insert-into"},"INSERT SELECT")," query with aggregate -State- functions.\nWhen selecting data from ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," table, use ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clause and the same aggregate functions as when inserting data, but using ",(0,i.kt)("inlineCode",{parentName:"p"},"-Merge")," suffix."),(0,i.kt)("p",null,"In the results of ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query, the values of ",(0,i.kt)("inlineCode",{parentName:"p"},"AggregateFunction")," type have implementation-specific binary representation for all of the ClickHouse output formats. If dump data into, for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"TabSeparated")," format with ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," query then this dump can be loaded back using ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," query."),(0,i.kt)("h2",{id:"example-of-an-aggregated-materialized-view"},"Example of an Aggregated Materialized View"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AggregatingMergeTree")," materialized view that watches the ",(0,i.kt)("inlineCode",{parentName:"p"},"test.visits")," table:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE MATERIALIZED VIEW test.basic\nENGINE = AggregatingMergeTree() PARTITION BY toYYYYMM(StartDate) ORDER BY (CounterID, StartDate)\nAS SELECT\n    CounterID,\n    StartDate,\n    sumState(Sign)    AS Visits,\n    uniqState(UserID) AS Users\nFROM test.visits\nGROUP BY CounterID, StartDate;\n")),(0,i.kt)("p",null,"Inserting data into the ",(0,i.kt)("inlineCode",{parentName:"p"},"test.visits")," table."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO test.visits ...\n")),(0,i.kt)("p",null,"The data are inserted in both the table and view ",(0,i.kt)("inlineCode",{parentName:"p"},"test.basic")," that will perform the aggregation."),(0,i.kt)("p",null,"To get the aggregated data, we need to execute a query such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT ... GROUP BY ...")," from the view ",(0,i.kt)("inlineCode",{parentName:"p"},"test.basic"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    StartDate,\n    sumMerge(Visits) AS Visits,\n    uniqMerge(Users) AS Users\nFROM test.basic\nGROUP BY StartDate\nORDER BY StartDate;\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/aggregatingmergetree/"},"Original article")," "))}c.isMDXComponent=!0}}]);