"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97164],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,N=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(N,s(s({ref:t},d),{},{components:a})):n.createElement(N,s({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81846:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return m}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),s=["components"],i={sidebar_position:50,sidebar_label:"MySQL"},p="MySQL",o={unversionedId:"en/engines/database-engines/mysql",id:"en/engines/database-engines/mysql",title:"MySQL",description:"Allows to connect to databases on a remote MySQL server and perform INSERT and SELECT queries to exchange data between ClickHouse and MySQL.",source:"@site/docs/en/engines/database-engines/mysql.md",sourceDirName:"en/engines/database-engines",slug:"/en/engines/database-engines/mysql",permalink:"/en/engines/database-engines/mysql",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/engines/database-engines/mysql.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"MySQL"},sidebar:"english",previous:{title:"PostgreSQL",permalink:"/en/engines/database-engines/postgresql"},next:{title:"SQLite",permalink:"/en/engines/database-engines/sqlite"}},d={},m=[{value:"Creating a Database",id:"creating-a-database",level:2},{value:"Data Types Support",id:"data_types-support",level:2},{value:"Global Variables Support",id:"global-variables-support",level:2},{value:"Examples of Use",id:"examples-of-use",level:2}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mysql"},"MySQL"),(0,l.kt)("p",null,"Allows to connect to databases on a remote MySQL server and perform ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," queries to exchange data between ClickHouse and MySQL."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"MySQL")," database engine translate queries to the MySQL server so you can perform operations such as ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW TABLES")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE"),"."),(0,l.kt)("p",null,"You cannot perform the following queries:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"RENAME")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"CREATE TABLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ALTER"))),(0,l.kt)("h2",{id:"creating-a-database"},"Creating a Database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MySQL('host:port', ['database' | database], 'user', 'password')\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Engine Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 MySQL server address."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"database")," \u2014 Remote database name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"user")," \u2014 MySQL user."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"password")," \u2014 User password.")),(0,l.kt)("h2",{id:"data_types-support"},"Data Types Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,l.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"Int8"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SMALLINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"Int16"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED INT, UNSIGNED MEDIUMINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT, MEDIUMINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"Int32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UNSIGNED BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"UInt64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/int-uint"},"Int64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/float"},"Float32"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/float"},"Float64"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/date"},"Date"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME, TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/datetime"},"DateTime"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/en/sql-reference/data-types/fixedstring"},"FixedString"))))),(0,l.kt)("p",null,"All other MySQL data types are converted into ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable")," is supported."),(0,l.kt)("h2",{id:"global-variables-support"},"Global Variables Support"),(0,l.kt)("p",null,"For better compatibility you may address global variables in MySQL style, as ",(0,l.kt)("inlineCode",{parentName:"p"},"@@identifier"),"."),(0,l.kt)("p",null,"These variables are supported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"version")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"max_allowed_packet"))),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"By now these variables are stubs and don't correspond to anything."))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT @@version;\n")),(0,l.kt)("h2",{id:"examples-of-use"},"Examples of Use"),(0,l.kt)("p",null,"Table in MySQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"mysql> USE test;\nDatabase changed\n\nmysql> CREATE TABLE `mysql_table` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `float` FLOAT NOT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into mysql_table (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from mysql_table;\n+------+-----+\n| int_id | value |\n+------+-----+\n|      1 |     2 |\n+------+-----+\n1 row in set (0,00 sec)\n")),(0,l.kt)("p",null,"Database in ClickHouse, exchanging data with the MySQL server:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mysql_db ENGINE = MySQL('localhost:3306', 'test', 'my_user', 'user_password')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW DATABASES\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 default  \u2502\n\u2502 mysql_db \u2502\n\u2502 system   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW TABLES FROM mysql_db\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502  mysql_table \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_db.mysql_table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO mysql_db.mysql_table VALUES (3,4)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql_db.mysql_table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500value\u2500\u2510\n\u2502      1 \u2502     2 \u2502\n\u2502      3 \u2502     4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/database_engines/mysql/"},"Original article")," "))}c.isMDXComponent=!0}}]);