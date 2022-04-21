"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[34501],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,f=d["".concat(l,".").concat(b)]||d[b]||p[b]||c;return r?n.createElement(f,o(o({ref:t},i),{},{components:r})):n.createElement(f,o({ref:t},i))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<c;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},28986:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return b},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),c=(r(67294),r(3905)),o=["components"],s={sidebar_position:43,sidebar_label:"jdbc"},l="jdbc",u={unversionedId:"ru/sql-reference/table-functions/jdbc",id:"ru/sql-reference/table-functions/jdbc",title:"jdbc",description:"jdbc}",source:"@site/docs/ru/sql-reference/table-functions/jdbc.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/jdbc",permalink:"/docs/ru/sql-reference/table-functions/jdbc",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/table-functions/jdbc.md",tags:[],version:"current",sidebarPosition:43,frontMatter:{sidebar_position:43,sidebar_label:"jdbc"},sidebar:"russia",previous:{title:"postgresql",permalink:"/docs/ru/sql-reference/table-functions/postgresql"},next:{title:"odbc",permalink:"/docs/ru/sql-reference/table-functions/odbc"}},i={},p=[],d={toc:p};function b(e){var t=e.components,r=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"jdbc"},"jdbc"),(0,c.kt)("p",null,(0,c.kt)("inlineCode",{parentName:"p"},"jdbc(datasource, schema, table)")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0447\u0435\u0440\u0435\u0437 JDBC-\u0434\u0440\u0430\u0439\u0432\u0435\u0440."),(0,c.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u044d\u0442\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc-bridge"},"clickhouse-jdbc-bridge"),".\n\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Nullable \u0442\u0438\u043f\u044b (\u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u0438\u0438 DDL \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043a \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0437\u0430\u043f\u0440\u043e\u0441)."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('jdbc:mysql://localhost:3306/?user=root&password=root', 'schema', 'table')\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql://localhost:3306/?user=root&password=root', 'select * from schema.table')\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM jdbc('mysql-dev?p1=233', 'num Int32', 'select toInt32OrZero(''{{p1}}'') as num')\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM jdbc('mysql-dev?p1=233', 'num Int32', 'select toInt32OrZero(''{{p1}}'') as num')\n")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a.datasource AS server1, b.datasource AS server2, b.name AS db\nFROM jdbc('mysql-dev?datasource_column', 'show databases') a\nINNER JOIN jdbc('self?datasource_column', 'show databases') b ON a.Database = b.name\n")),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/jdbc/"},"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u044c\u044f")," "))}b.isMDXComponent=!0}}]);