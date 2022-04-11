"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73078],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=i,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||r;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37501:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),l=["components"],o={sidebar_label:"Replicate a MySQL Database in ClickHouse",sidebar_position:20,description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",keywords:["clickhouse","mysql","connect","integrate","replicate","database","MaterializedMySQL"]},s="Replicate a MySQL Database in ClickHouse",c={unversionedId:"en/integrations/mysql/mysql-with-clickhouse-database-engine",id:"en/integrations/mysql/mysql-with-clickhouse-database-engine",title:"Replicate a MySQL Database in ClickHouse",description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",source:"@site/docs/en/integrations/mysql/mysql-with-clickhouse-database-engine.md",sourceDirName:"en/integrations/mysql",slug:"/en/integrations/mysql/mysql-with-clickhouse-database-engine",permalink:"/en/integrations/mysql/mysql-with-clickhouse-database-engine",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/staging/docs/en/integrations/mysql/mysql-with-clickhouse-database-engine.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Replicate a MySQL Database in ClickHouse",sidebar_position:20,description:"The MaterializedMySQL database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables.",keywords:["clickhouse","mysql","connect","integrate","replicate","database","MaterializedMySQL"]},sidebar:"english",previous:{title:"Connect MySQL and ClickHouse",permalink:"/en/integrations/mysql/mysql-with-clickhouse"},next:{title:"PostgreSQL",permalink:"/en/integrations/postgresql"}},p={},m=[{value:"1. Configure MySQL",id:"1-configure-mysql",level:2},{value:"2. Configure ClickHouse",id:"2-configure-clickhouse",level:2},{value:"3. Test the Integration",id:"3-test-the-integration",level:2},{value:"Summary",id:"summary",level:2}],d={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"replicate-a-mysql-database-in-clickhouse"},"Replicate a MySQL Database in ClickHouse"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine allows you to define a database in ClickHouse that contains all the existing tables in a MySQL database, along with all the data in those tables. On the MySQL side, DDL and DML operations can continue to made and ClickHouse detects the changes and acts as a replica to MySQL database."),(0,r.kt)("p",null,"This article demonstrates how to configure MySQL and ClickHouse to implement this replication. "),(0,r.kt)("h2",{id:"1-configure-mysql"},"1. Configure MySQL"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the MySQL database to allow for replication and native authentication. ClickHouse only works with native password authentication. Add the following entries to ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/my.cnf"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"default-authentication-plugin = mysql_native_password\ngtid-mode = ON\nenforce-gtid-consistency = ON\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a user to connect from ClickHouse:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER clickhouse_user IDENTIFIED BY 'ClickHouse_123';\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Grant the needed permissions to the new user. For demonstration purposes, full admin rights have been granted here:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT ALL PRIVILEGES ON *.* TO 'clickhouse_user'@'%';\n")),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The minimal permissions needed for the MySQL user are ",(0,r.kt)("strong",{parentName:"p"},"RELOAD"),", ",(0,r.kt)("strong",{parentName:"p"},"REPLICATION SLAVE"),", ",(0,r.kt)("strong",{parentName:"p"},"REPLICATION CLIENT")," and ",(0,r.kt)("strong",{parentName:"p"},"SELECT PRIVILEGE"),".")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a database in MySQL:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE db1.table_1 (\n    id INT,\n    column1 VARCHAR(10),\n    PRIMARY KEY (`id`)\n) ENGINE = InnoDB;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Insert a few sample rows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1 \n  (id, column1) \nVALUES \n  (1, 'abc'),\n  (2, 'def'),\n  (3, 'ghi');\n")))),(0,r.kt)("h2",{id:"2-configure-clickhouse"},"2. Configure ClickHouse"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set parameter to allow use of experimental feature:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"set allow_experimental_database_materialized_mysql = 1;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a database that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE db1_mysql \nENGINE = MaterializedMySQL(\n  'mysql-host.domain.com:3306', \n  'db1', \n  'clickhouse_user', \n  'ClickHouse_123'\n);\n")),(0,r.kt)("p",{parentName:"li"},"The minimum parameters are:"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"example"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host:port"),(0,r.kt)("td",{parentName:"tr",align:null},"hostname or IP and port"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql-host.domain.com")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"mysql database name"),(0,r.kt)("td",{parentName:"tr",align:null},"db1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"username to connect to mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"clickhouse_user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"password to connect to mysql"),(0,r.kt)("td",{parentName:"tr",align:null},"ClickHouse_123")))),(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"View the ",(0,r.kt)("a",{parentName:"p",href:"/en/engines/database-engines/materialized-mysql"},"MaterializedMySQL database engine")," doc page for a complete list of parameters. "))))),(0,r.kt)("h2",{id:"3-test-the-integration"},"3. Test the Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In MySQL, insert a sample row:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1 \n  (id, column1) \nVALUES \n  (4, 'jkl');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Notice the new row appears in the ClickHouse table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    column1\nFROM db1_mysql.table_1\n")),(0,r.kt)("p",{parentName:"li"},"The response looks like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Query id: d61a5840-63ca-4a3d-8fac-c93235985654\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  1 \u2502 abc     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  4 \u2502 jkl     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  2 \u2502 def     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n4 rows in set. Elapsed: 0.030 sec.\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Suppose the table in MySQL is modified. Let's a column to ",(0,r.kt)("inlineCode",{parentName:"p"},"db1.table_1")," in MySQL:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter table db1.table_1 add column column2 varchar(10) after column1;\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now let's insert a row to the modified table:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO db1.table_1 \n  (id, column1, column2) \nVALUES \n  (5, 'mno', 'pqr');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Notice the talbe in ClickHouse now has the new column and the new row:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    id,\n    column1,\n    column2\nFROM db1_mysql.table_1\n")),(0,r.kt)("p",{parentName:"li"},"The previous rows will have ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"column2"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-response"},"Query id: 2c32fd15-3c83-480b-9bfc-cba5d932d674\n\nConnecting to localhost:9000 as user default.\nConnected to ClickHouse server version 22.2.2 revision 54455.\n\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  3 \u2502 ghi     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  2 \u2502 def     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  1 \u2502 abc     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2502  5 \u2502 mno     \u2502 pqr     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500id\u2500\u252c\u2500column1\u2500\u252c\u2500column2\u2500\u2510\n\u2502  4 \u2502 jkl     \u2502 \u1d3a\u1d41\u1d38\u1d38    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n5 rows in set. Elapsed: 0.017 sec.\n")))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"That's it! The ",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializedMySQL")," database engine will keep the MySQL database synced on ClickHouse. There are a few details and limitations, so be sure to read the ",(0,r.kt)("a",{parentName:"p",href:"/en/engines/database-engines/materialized-postgresql"},"doc page for MaterializedMySQL")," for more details."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you just want to move data between MySQL and ClickHouse, check out the ",(0,r.kt)("a",{parentName:"p",href:"/en/integrations/mysql/mysql-with-clickhouse"},"MySQL table engine"),"."))))}u.isMDXComponent=!0}}]);