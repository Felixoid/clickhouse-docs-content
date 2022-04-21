"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[49453],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=l.createContext({}),c=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return l.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),k=a,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||r;return t?l.createElement(m,i(i({ref:n},u),{},{components:t})):l.createElement(m,i({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=t[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},34016:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var l=t(87462),a=t(63366),r=(t(67294),t(3905)),i=["components"],o={sidebar_position:35,sidebar_label:"ODBC"},s="ODBC",c={unversionedId:"zh/engines/table-engines/integrations/odbc",id:"zh/engines/table-engines/integrations/odbc",title:"ODBC",description:"table-engine-odbc}",source:"@site/docs/zh/engines/table-engines/integrations/odbc.md",sourceDirName:"zh/engines/table-engines/integrations",slug:"/zh/engines/table-engines/integrations/odbc",permalink:"/docs/zh/engines/table-engines/integrations/odbc",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/integrations/odbc.md",tags:[],version:"current",sidebarPosition:35,frontMatter:{sidebar_position:35,sidebar_label:"ODBC"},sidebar:"chinese",previous:{title:"JDBC\u8868\u5f15\u64ce",permalink:"/docs/zh/engines/table-engines/integrations/jdbc"},next:{title:"HDFS",permalink:"/docs/zh/engines/table-engines/integrations/hdfs"}},u={},p=[{value:"\u521b\u5efa\u8868",id:"creating-a-table",level:2},{value:"\u7528\u6cd5\u793a\u4f8b",id:"usage-example",level:2},{value:"\u53e6\u8bf7\u53c2\u9605",id:"see-also",level:2}],d={toc:p};function k(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"table-engine-odbc"},"ODBC"),(0,r.kt)("p",null,"\u5141\u8bb8 ClickHouse \u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_Database_Connectivity"},"ODBC")," \u65b9\u5f0f\u8fde\u63a5\u5230\u5916\u90e8\u6570\u636e\u5e93."),(0,r.kt)("p",null,"\u4e3a\u4e86\u5b89\u5168\u5730\u5b9e\u73b0 ODBC \u8fde\u63a5\uff0cClickHouse \u4f7f\u7528\u4e86\u4e00\u4e2a\u72ec\u7acb\u7a0b\u5e8f ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge"),". \u5982\u679cODBC\u9a71\u52a8\u7a0b\u5e8f\u662f\u76f4\u63a5\u4ece ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),"\u4e2d\u52a0\u8f7d\u7684\uff0c\u90a3\u4e48\u9a71\u52a8\u95ee\u9898\u53ef\u80fd\u4f1a\u5bfc\u81f4ClickHouse\u670d\u52a1\u5d29\u6e83\u3002 \u5f53\u6709\u9700\u8981\u65f6\uff0cClickHouse\u4f1a\u81ea\u52a8\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-odbc-bridge"),"\u3002 ODBC\u6865\u6881\u7a0b\u5e8f\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse-server"),"\u6765\u81ea\u76f8\u540c\u7684\u5b89\u88c5\u5305."),(0,r.kt)("p",null,"\u8be5\u5f15\u64ce\u652f\u6301 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/nullable"},"Nullable")," \u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"creating-a-table"},"\u521b\u5efa\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1],\n    name2 [type2],\n    ...\n)\nENGINE = ODBC(connection_settings, external_database, external_table)\n")),(0,r.kt)("p",null,"\u8be6\u60c5\u8bf7\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/create#create-table-query"},"CREATE TABLE")," \u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u8868\u7ed3\u6784\u53ef\u4ee5\u4e0e\u6e90\u8868\u7ed3\u6784\u4e0d\u540c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5217\u540d\u5e94\u4e0e\u6e90\u8868\u4e2d\u7684\u5217\u540d\u76f8\u540c\uff0c\u4f46\u60a8\u53ef\u4ee5\u6309\u4efb\u4f55\u987a\u5e8f\u4f7f\u7528\u5176\u4e2d\u7684\u4e00\u4e9b\u5217\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5217\u7c7b\u578b\u53ef\u80fd\u4e0e\u6e90\u8868\u4e2d\u7684\u5217\u7c7b\u578b\u4e0d\u540c\u3002 ClickHouse\u5c1d\u8bd5\u5c06\u6570\u503c",(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"\u6620\u5c04")," \u5230ClickHouse\u7684\u6570\u636e\u7c7b\u578b\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"external_table_functions_use_nulls")," \u6765\u5b9a\u4e49\u5982\u4f55\u5904\u7406 Nullable \u5217. \u9ed8\u8ba4\u503c\u662f true, \u5f53\u8bbe\u7f6e\u4e3a false \u65f6 - \u8868\u51fd\u6570\u5c06\u4e0d\u4f1a\u4f7f\u7528 nullable \u5217\uff0c\u800c\u662f\u63d2\u5165\u9ed8\u8ba4\u503c\u6765\u4ee3\u66ff null. \u8fd9\u540c\u6837\u9002\u7528\u4e8e\u6570\u7ec4\u6570\u636e\u7c7b\u578b\u4e2d\u7684 null \u503c.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connection_settings")," \u2014 \u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"odbc.ini")," \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u8fde\u63a5\u914d\u7f6e\u7684\u540d\u79f0."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"external_database")," \u2014 \u5728\u5916\u90e8 DBMS \u4e2d\u7684\u6570\u636e\u5e93\u540d."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"external_table")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"external_database"),"\u4e2d\u7684\u8868\u540d.")),(0,r.kt)("h2",{id:"usage-example"},"\u7528\u6cd5\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u901a\u8fc7ODBC\u4ece\u672c\u5730\u5b89\u88c5\u7684MySQL\u4e2d\u68c0\u7d22\u6570\u636e")),(0,r.kt)("p",null,"\u672c\u793a\u4f8b\u5df2\u7ecf\u5728 Ubuntu Linux 18.04 \u548c MySQL server 5.7 \u4e0a\u6d4b\u8bd5\u901a\u8fc7\u3002"),(0,r.kt)("p",null,"\u8bf7\u786e\u4fdd\u5df2\u7ecf\u5b89\u88c5\u4e86 unixODBC \u548c MySQL Connector\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff08\u5982\u679c\u4ece\u8f6f\u4ef6\u5305\u5b89\u88c5\uff09\uff0cClickHouse\u4ee5\u7528\u6237",(0,r.kt)("inlineCode",{parentName:"p"},"clickhouse"),"\u7684\u8eab\u4efd\u542f\u52a8. \u56e0\u6b64\uff0c\u60a8\u9700\u8981\u5728MySQL\u670d\u52a1\u5668\u4e2d\u521b\u5efa\u5e76\u914d\u7f6e\u6b64\u7528\u6237\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo mysql\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE USER 'clickhouse'@'localhost' IDENTIFIED BY 'clickhouse';\nmysql> GRANT ALL PRIVILEGES ON *.* TO 'clickhouse'@'clickhouse' WITH GRANT OPTION;\n")),(0,r.kt)("p",null,"\u7136\u540e\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/odbc.ini"),"\u4e2d\u914d\u7f6e\u8fde\u63a5."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat /etc/odbc.ini\n[mysqlconn]\nDRIVER = /usr/local/lib/libmyodbc5w.so\nSERVER = 127.0.0.1\nPORT = 3306\nDATABASE = test\nUSERNAME = clickhouse\nPASSWORD = clickhouse\n")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u5b89\u88c5\u7684 unixodbc \u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"isql")," \u5b9e\u7528\u7a0b\u5e8f\u6765\u68c0\u67e5\u8fde\u63a5\u60c5\u51b5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ isql -v mysqlconn\n+---------------------------------------+\n| Connected!                            |\n|                                       |\n...\n")),(0,r.kt)("p",null,"MySQL\u4e2d\u7684\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+--------+--------------+-------+----------------+\n| int_id | int_nullable | float | float_nullable |\n+--------+--------------+-------+----------------+\n|      1 |         NULL |     2 |           NULL |\n+--------+--------------+-------+----------------+\n1 row in set (0,00 sec)\n")),(0,r.kt)("p",null,"ClickHouse\u4e2d\u7684\u8868\uff0c\u4eceMySQL\u8868\u4e2d\u68c0\u7d22\u6570\u636e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE odbc_t\n(\n    `int_id` Int32,\n    `float_nullable` Nullable(Float32)\n)\nENGINE = ODBC('DSN=mysqlconn', 'test', 'test')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM odbc_t\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"see-also"},"\u53e6\u8bf7\u53c2\u9605"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources#dicts-external_dicts_dict_sources-odbc"},"ODBC \u5916\u90e8\u5b57\u5178")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/table-functions/odbc"},"ODBC \u8868\u51fd\u6570"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/odbc/"},"\u539f\u59cb\u6587\u7ae0")," "))}k.isMDXComponent=!0}}]);