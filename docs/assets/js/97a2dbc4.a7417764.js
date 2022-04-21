"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86656],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34727:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"What is a columnar database?",toc_hidden:!0,toc_priority:101},l="What Is a Columnar Database?",c={unversionedId:"en/faq/general/columnar-database",id:"en/faq/general/columnar-database",title:"What is a columnar database?",description:"what-is-a-columnar-database}",source:"@site/docs/en/faq/general/columnar-database.md",sourceDirName:"en/faq/general",slug:"/en/faq/general/columnar-database",permalink:"/docs/en/faq/general/columnar-database",editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/faq/general/columnar-database.md",tags:[],version:"current",frontMatter:{title:"What is a columnar database?",toc_hidden:!0,toc_priority:101},sidebar:"english",previous:{title:"General Questions about ClickHouse",permalink:"/docs/en/faq/general/"},next:{title:"What does \u201cClickHouse\u201d mean?",permalink:"/docs/en/faq/general/dbms-naming"}},u={},d=[],m={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-a-columnar-database"},"What Is a Columnar Database?"),(0,o.kt)("p",null,"A columnar database stores data of each column independently. This allows to read data from disks only for those columns that are used in any given query. The cost is that operations that affect whole rows become proportionally more expensive. The synonym for a columnar database is a column-oriented database management system. ClickHouse is a typical example of such a system."),(0,o.kt)("p",null,"Key columnar database advantages are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Queries that use only a few columns out of many."),(0,o.kt)("li",{parentName:"ul"},"Aggregating queries against large volumes of data."),(0,o.kt)("li",{parentName:"ul"},"Column-wise data compression.")),(0,o.kt)("p",null,"Here is the illustration of the difference between traditional row-oriented systems and columnar databases when building reports:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Traditional row-oriented"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://clickhouse.com/docs/en/images/row-oriented.gif#",alt:"Traditional row-oriented"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Columnar"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://clickhouse.com/docs/en/images/column-oriented.gif#",alt:"Columnar"})),(0,o.kt)("p",null,"A columnar database is a preferred choice for analytical applications because it allows to have many columns in a table just in case, but do not pay the cost for unused columns on read query execution time. Column-oriented databases are designed for big data processing because and data warehousing, they often natively scale using distributed clusters of low-cost hardware to increase throughput. ClickHouse does it with combination of ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/distributed"},"distributed")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/mergetree-family/replication"},"replicated")," tables."))}p.isMDXComponent=!0}}]);