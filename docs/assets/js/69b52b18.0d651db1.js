"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[2031],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,f=b["".concat(s,".").concat(d)]||b[d]||p[d]||o;return n?r.createElement(f,c(c({ref:t},i),{},{components:n})):r.createElement(f,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},85250:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],l={sidebar_position:43,sidebar_label:"jdbc"},s="jdbc",u={unversionedId:"en/sql-reference/table-functions/jdbc",id:"en/sql-reference/table-functions/jdbc",title:"jdbc",description:"table-function-jdbc}",source:"@site/docs/en/sql-reference/table-functions/jdbc.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/jdbc",permalink:"/en/sql-reference/table-functions/jdbc",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/table-functions/jdbc.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"jdbc"},sidebar:"english",previous:{title:"postgresql",permalink:"/en/sql-reference/table-functions/postgresql"},next:{title:"odbc",permalink:"/en/sql-reference/table-functions/odbc"}},i={},p=[],b={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"table-function-jdbc"},"jdbc"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jdbc(datasource, schema, table)")," - returns table that is connected via JDBC driver."),(0,o.kt)("p",null,"This table function requires separate ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc-bridge"},"clickhouse-jdbc-bridge")," program to be running.\nIt supports Nullable types (based on DDL of remote table that is queried)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('jdbc:mysql://localhost:3306/?user=root&password=root', 'schema', 'table')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql://localhost:3306/?user=root&password=root', 'select * from schema.table')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql-dev?p1=233', 'num Int32', 'select toInt32OrZero(''{{p1}}'') as num')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM jdbc('mysql-dev?p1=233', 'num Int32', 'select toInt32OrZero(''{{p1}}'') as num')\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.datasource AS server1, b.datasource AS server2, b.name AS db\nFROM jdbc('mysql-dev?datasource_column', 'show databases') a\nINNER JOIN jdbc('self?datasource_column', 'show databases') b ON a.Database = b.name\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/jdbc/"},"Original article")," "))}d.isMDXComponent=!0}}]);