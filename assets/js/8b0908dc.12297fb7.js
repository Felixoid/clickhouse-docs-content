"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[6005],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,m=d["".concat(s,".").concat(b)]||d[b]||p[b]||l;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:3,sidebar_label:"JDBC"},s="JDBC",u={unversionedId:"ru/engines/table-engines/integrations/jdbc",id:"ru/engines/table-engines/integrations/jdbc",title:"JDBC",description:"table-engine-jdbc}",source:"@site/docs/ru/engines/table-engines/integrations/jdbc.md",sourceDirName:"ru/engines/table-engines/integrations",slug:"/ru/engines/table-engines/integrations/jdbc",permalink:"/docs/ru/engines/table-engines/integrations/jdbc",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/engines/table-engines/integrations/jdbc.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"JDBC"},sidebar:"russia",previous:{title:"ODBC",permalink:"/docs/ru/engines/table-engines/integrations/odbc"},next:{title:"MySQL",permalink:"/docs/ru/engines/table-engines/integrations/mysql"}},c={},p=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"sozdanie-tablitsy",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f",id:"primer-ispolzovaniia",level:2},{value:"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435",id:"smotrite-takzhe",level:2}],d={toc:p};function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"table-engine-jdbc"},"JDBC"),(0,l.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 ClickHouse \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043a \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u0431\u0430\u0437\u0430\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_Database_Connectivity"},"JDBC"),"."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043f\u043e JDBC ClickHouse \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u0443\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc-bridge"},"clickhouse-jdbc-bridge"),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u043a\u0430\u043a \u0434\u0435\u043c\u043e\u043d."),(0,l.kt)("p",null,"\u0414\u0432\u0438\u0436\u043e\u043a \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/engines/table-engines/integrations/jdbc"},"Nullable"),"."),(0,l.kt)("h2",{id:"sozdanie-tablitsy"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name\nENGINE = JDBC(datasource_uri, external_database, external_table)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u0432\u0438\u0436\u043a\u0430")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"datasource_uri")," \u2014 URI \u0438\u043b\u0438 \u0438\u043c\u044f \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0421\u0423\u0411\u0414."),(0,l.kt)("p",{parentName:"li"},"URI \u0424\u043e\u0440\u043c\u0430\u0442: ",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc:<driver_name>://<host_name>:<port>/?user=<username>&password=<password>"),"."),(0,l.kt)("p",{parentName:"li"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u043b\u044f MySQL: ",(0,l.kt)("inlineCode",{parentName:"p"},"jdbc:mysql://localhost:3306/?user=root&password=root"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"external_database")," \u2014 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u043e \u0432\u043d\u0435\u0448\u043d\u0435\u0439 \u0421\u0423\u0411\u0414.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"external_table")," \u2014 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 ",(0,l.kt)("inlineCode",{parentName:"p"},"external_database")," \u0438\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0432\u044b\u0431\u043e\u0440\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440",(0,l.kt)("inlineCode",{parentName:"p"}," select * from table1, \u0433\u0434\u0435 column1 = 1"),"."))),(0,l.kt)("h2",{id:"primer-ispolzovaniia"},"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 MySQL \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 MySQL:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"mysql> CREATE TABLE `test`.`test` (\n    ->   `int_id` INT NOT NULL AUTO_INCREMENT,\n    ->   `int_nullable` INT NULL DEFAULT NULL,\n    ->   `float` FLOAT NOT NULL,\n    ->   `float_nullable` FLOAT NULL DEFAULT NULL,\n    ->   PRIMARY KEY (`int_id`));\nQuery OK, 0 rows affected (0,09 sec)\n\nmysql> insert into test (`int_id`, `float`) VALUES (1,2);\nQuery OK, 1 row affected (0,00 sec)\n\nmysql> select * from test;\n+--------+--------------+-------+----------------+\n| int_id | int_nullable | float | float_nullable |\n+--------+--------------+-------+----------------+\n|      1 |         NULL |     2 |           NULL |\n+--------+--------------+-------+----------------+\n1 row in set (0,00 sec)\n")),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 ClickHouse \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043c \u0438\u0437 \u043d\u0435\u0451 \u0434\u0430\u043d\u043d\u044b\u0435:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE jdbc_table ENGINE JDBC('jdbc:mysql://localhost:3306/?user=root&password=root', 'test', 'test')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"DESCRIBE TABLE jdbc_table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500default_type\u2500\u252c\u2500default_expression\u2500\u2510\n\u2502 int_id             \u2502 Int32              \u2502              \u2502                    \u2502\n\u2502 int_nullable       \u2502 Nullable(Int32)    \u2502              \u2502                    \u2502\n\u2502 float              \u2502 Float32            \u2502              \u2502                    \u2502\n\u2502 float_nullable     \u2502 Nullable(Float32)  \u2502              \u2502                    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM jdbc_table\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500int_id\u2500\u252c\u2500int_nullable\u2500\u252c\u2500float\u2500\u252c\u2500float_nullable\u2500\u2510\n\u2502      1 \u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502     2 \u2502           \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO jdbc_table(`int_id`, `float`)\nSELECT toInt32(number), toFloat32(number * 1.0)\nFROM system.numbers\n")),(0,l.kt)("h2",{id:"smotrite-takzhe"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/engines/table-engines/integrations/jdbc"},"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f JDBC"),".")))}b.isMDXComponent=!0}}]);