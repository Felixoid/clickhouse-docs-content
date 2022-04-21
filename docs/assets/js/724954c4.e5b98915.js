"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18491],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7517:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),l=["components"],i={sidebar_position:35,sidebar_label:"DATABASE"},o="CREATE DATABASE",c={unversionedId:"en/sql-reference/statements/create/database",id:"en/sql-reference/statements/create/database",title:"CREATE DATABASE",description:"query-language-create-database}",source:"@site/docs/en/sql-reference/statements/create/database.md",sourceDirName:"en/sql-reference/statements/create",slug:"/en/sql-reference/statements/create/database",permalink:"/docs/en/sql-reference/statements/create/database",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/statements/create/database.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"DATABASE"},sidebar:"english",previous:{title:"CREATE",permalink:"/docs/en/sql-reference/statements/create/"},next:{title:"TABLE",permalink:"/docs/en/sql-reference/statements/create/table"}},u={},p=[{value:"Clauses",id:"clauses",level:2},{value:"IF NOT EXISTS",id:"if-not-exists",level:3},{value:"ON CLUSTER",id:"on-cluster",level:3},{value:"ENGINE",id:"engine",level:3},{value:"COMMENT",id:"comment",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"query-language-create-database"},"CREATE DATABASE"),(0,s.kt)("p",null,"Creates a new database."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster] [ENGINE = engine(...)] [COMMENT 'Comment']\n")),(0,s.kt)("h2",{id:"clauses"},"Clauses"),(0,s.kt)("h3",{id:"if-not-exists"},"IF NOT EXISTS"),(0,s.kt)("p",null,"If the ",(0,s.kt)("inlineCode",{parentName:"p"},"db_name")," database already exists, then ClickHouse does not create a new database and:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Doesn\u2019t throw an exception if clause is specified."),(0,s.kt)("li",{parentName:"ul"},"Throws an exception if clause isn\u2019t specified.")),(0,s.kt)("h3",{id:"on-cluster"},"ON CLUSTER"),(0,s.kt)("p",null,"ClickHouse creates the ",(0,s.kt)("inlineCode",{parentName:"p"},"db_name")," database on all the servers of a specified cluster. More details in a ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/distributed-ddl"},"Distributed DDL")," article."),(0,s.kt)("h3",{id:"engine"},"ENGINE"),(0,s.kt)("p",null,"By default, ClickHouse uses its own ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/atomic"},"Atomic")," database engine. There are also ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/lazy"},"Lazy"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/mysql"},"MySQL"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/postgresql"},"PostgresSQL"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/materialized-mysql"},"MaterializedMySQL"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/materialized-postgresql"},"MaterializedPostgreSQL"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/replicated"},"Replicated"),", ",(0,s.kt)("a",{parentName:"p",href:"/docs/en/engines/database-engines/sqlite"},"SQLite"),"."),(0,s.kt)("h3",{id:"comment"},"COMMENT"),(0,s.kt)("p",null,"You can add a comment to the database when you creating it."),(0,s.kt)("p",null,"The comment is supported for all database engines."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Syntax")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_name ENGINE = engine(...) COMMENT 'Comment'\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Example")),(0,s.kt)("p",null,"Query:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db_comment ENGINE = Memory COMMENT 'The temporary database';\nSELECT name, comment FROM system.databases WHERE name = 'db_comment';\n")),(0,s.kt)("p",null,"Result:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500comment\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 db_comment \u2502 The temporary database \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);