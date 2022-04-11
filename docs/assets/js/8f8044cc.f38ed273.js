"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[46745],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=s(a),u=l,N=k["".concat(m,".").concat(u)]||k[u]||o[u]||r;return a?n.createElement(N,i(i({ref:t},d),{},{components:a})):n.createElement(N,i({ref:t},d))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},79551:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return o}});var n=a(87462),l=a(63366),r=(a(67294),a(3905)),i=["components"],p={sidebar_position:29,sidebar_label:"[experimental] MaterializedMySQL"},m="[experimental] MaterializedMySQL",s={unversionedId:"zh/engines/database-engines/materialize-mysql",id:"zh/engines/database-engines/materialize-mysql",title:"[experimental] MaterializedMySQL",description:"materialized-mysql}",source:"@site/docs/zh/engines/database-engines/materialize-mysql.md",sourceDirName:"zh/engines/database-engines",slug:"/zh/engines/database-engines/materialize-mysql",permalink:"/zh/engines/database-engines/materialize-mysql",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/engines/database-engines/materialize-mysql.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,sidebar_label:"[experimental] MaterializedMySQL"},sidebar:"chinese",previous:{title:"\u6570\u636e\u5e93\u5f15\u64ce",permalink:"/zh/engines/database-engines/"},next:{title:"MaterializedMySQL",permalink:"/zh/engines/database-engines/materialized-mysql"}},d={},o=[{value:"\u521b\u5efa\u6570\u636e\u5e93",id:"creating-a-database",level:2},{value:"\u865a\u62df\u5217",id:"virtual-columns",level:2},{value:"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b",id:"data_types-support",level:2},{value:"\u4f7f\u7528\u65b9\u5f0f",id:"specifics-and-recommendations",level:2},{value:"\u517c\u5bb9\u6027\u9650\u5236",id:"\u517c\u5bb9\u6027\u9650\u5236",level:3},{value:"DDL\u67e5\u8be2",id:"ddl-queries",level:3},{value:"Data Replication",id:"data-replication",level:3},{value:"\u67e5\u8be2MaterializeMySQL\u8868",id:"select",level:3},{value:"Index Conversion",id:"index-conversion",level:3},{value:"\u4f7f\u7528\u793a\u4f8b",id:"examples-of-use",level:2}],k={toc:o};function u(e){var t=e.components,a=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"materialized-mysql"},"[experimental]"," MaterializedMySQL"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u6027\u7684\u7279\u6027\uff0c\u4e0d\u5e94\u8be5\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u3002")),(0,r.kt)("p",null,"\u521b\u5efaClickHouse\u6570\u636e\u5e93\uff0c\u5305\u542bMySQL\u4e2d\u6240\u6709\u7684\u8868\uff0c\u4ee5\u53ca\u8fd9\u4e9b\u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u3002"),(0,r.kt)("p",null,"ClickHouse\u670d\u52a1\u5668\u4f5c\u4e3aMySQL\u526f\u672c\u5de5\u4f5c\u3002\u5b83\u8bfb\u53d6binlog\u5e76\u6267\u884cDDL\u548cDML\u67e5\u8be2\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u662f\u5b9e\u9a8c\u6027\u7684\u3002"),(0,r.kt)("h2",{id:"creating-a-database"},"\u521b\u5efa\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE [IF NOT EXISTS] db_name [ON CLUSTER cluster]\nENGINE = MaterializeMySQL('host:port', ['database' | database], 'user', 'password') [SETTINGS ...]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u53c2\u6570")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"host:port")," \u2014 MySQL\u670d\u52a1\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")," \u2014 MySQL\u6570\u636e\u5e93\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user")," \u2014 MySQL\u7528\u6237\u540d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"password")," \u2014 MySQL\u7528\u6237\u5bc6\u7801")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f15\u64ce\u914d\u7f6e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_rows_in_buffer")," \u2014 \u5141\u8bb8\u6570\u636e\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\u7684\u6700\u5927\u884c\u6570(\u5bf9\u4e8e\u5355\u4e2a\u8868\u548c\u65e0\u6cd5\u67e5\u8be2\u7684\u7f13\u5b58\u6570\u636e)\u3002\u5f53\u8d85\u8fc7\u884c\u6570\u65f6\uff0c\u6570\u636e\u5c06\u88ab\u7269\u5316\u3002\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"65505"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_bytes_in_buffer")," \u2014  \u5141\u8bb8\u5728\u5185\u5b58\u4e2d\u7f13\u5b58\u6570\u636e\u7684\u6700\u5927\u5b57\u8282\u6570(\u5bf9\u4e8e\u5355\u4e2a\u8868\u548c\u65e0\u6cd5\u67e5\u8be2\u7684\u7f13\u5b58\u6570\u636e)\u3002\u5f53\u8d85\u8fc7\u884c\u6570\u65f6\uff0c\u6570\u636e\u5c06\u88ab\u7269\u5316\u3002\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"1048576"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_rows_in_buffers")," \u2014 \u5141\u8bb8\u6570\u636e\u7f13\u5b58\u5230\u5185\u5b58\u4e2d\u7684\u6700\u5927\u884c\u6570(\u5bf9\u4e8e\u6570\u636e\u5e93\u548c\u65e0\u6cd5\u67e5\u8be2\u7684\u7f13\u5b58\u6570\u636e)\u3002\u5f53\u8d85\u8fc7\u884c\u6570\u65f6\uff0c\u6570\u636e\u5c06\u88ab\u7269\u5316\u3002\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"65505"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_bytes_in_buffers")," \u2014 \u5141\u8bb8\u5728\u5185\u5b58\u4e2d\u7f13\u5b58\u6570\u636e\u7684\u6700\u5927\u5b57\u8282\u6570(\u5bf9\u4e8e\u6570\u636e\u5e93\u548c\u65e0\u6cd5\u67e5\u8be2\u7684\u7f13\u5b58\u6570\u636e)\u3002\u5f53\u8d85\u8fc7\u884c\u6570\u65f6\uff0c\u6570\u636e\u5c06\u88ab\u7269\u5316\u3002\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"1048576"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_flush_data_time")," \u2014 \u5141\u8bb8\u6570\u636e\u5728\u5185\u5b58\u4e2d\u7f13\u5b58\u7684\u6700\u5927\u6beb\u79d2\u6570(\u5bf9\u4e8e\u6570\u636e\u5e93\u548c\u65e0\u6cd5\u67e5\u8be2\u7684\u7f13\u5b58\u6570\u636e)\u3002\u5f53\u8d85\u8fc7\u8fd9\u4e2a\u65f6\u95f4\u65f6\uff0c\u6570\u636e\u5c06\u88ab\u7269\u5316\u3002\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_wait_time_when_mysql_unavailable")," \u2014 \u5f53MySQL\u4e0d\u53ef\u7528\u65f6\u91cd\u8bd5\u95f4\u9694(\u6beb\u79d2)\u3002\u8d1f\u503c\u7981\u6b62\u91cd\u8bd5\u3002\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"1000"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allows_query_when_mysql_lost")," \u2014 \u5f53mysql\u4e22\u5931\u65f6\uff0c\u5141\u8bb8\u67e5\u8be2\u7269\u5316\u8868\u3002\u9ed8\u8ba4\u503c: ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," (",(0,r.kt)("inlineCode",{parentName:"li"},"false"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE DATABASE mysql ENGINE = MaterializeMySQL('localhost:3306', 'db', 'user', '***') \n     SETTINGS \n        allows_query_when_mysql_lost=true,\n        max_wait_time_when_mysql_unavailable=10000;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MySQL\u670d\u52a1\u5668\u7aef\u914d\u7f6e")),(0,r.kt)("p",null,"\u4e3a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializeMySQL"),"\u6b63\u786e\u7684\u5de5\u4f5c\uff0c\u6709\u4e00\u4e9b\u5f3a\u5236\u6027\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u4fa7\u914d\u7f6e\u8bbe\u7f6e\u5e94\u8be5\u8bbe\u7f6e:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_authentication_plugin = mysql_native_password"),"\uff0c\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"MaterializeMySQL"),"\u53ea\u80fd\u4f7f\u7528\u6b64\u65b9\u6cd5\u6388\u6743\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"gtid_mode = on"),"\uff0c\u56e0\u4e3a\u8981\u63d0\u4f9b\u6b63\u786e\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"MaterializeMySQL"),"\u590d\u5236\uff0c\u57fa\u4e8eGTID\u7684\u65e5\u5fd7\u8bb0\u5f55\u662f\u5fc5\u987b\u7684\u3002\u6ce8\u610f\uff0c\u5728\u6253\u5f00\u8fd9\u4e2a\u6a21\u5f0f",(0,r.kt)("inlineCode",{parentName:"li"},"On"),"\u65f6\uff0c\u4f60\u8fd8\u5e94\u8be5\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"li"},"enforce_gtid_consistency = on"),"\u3002")),(0,r.kt)("h2",{id:"virtual-columns"},"\u865a\u62df\u5217"),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializeMySQL"),"\u6570\u636e\u5e93\u5f15\u64ce\u65f6\uff0c",(0,r.kt)("a",{parentName:"p",href:"/zh/engines/table-engines/mergetree-family/replacingmergetree"},"ReplacingMergeTree"),"\u8868\u4e0e\u865a\u62df\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"_sign"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"_version"),"\u5217\u4e00\u8d77\u4f7f\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_version")," \u2014 \u540c\u6b65\u7248\u672c\u3002 \u7c7b\u578b",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_sign")," \u2014 \u5220\u9664\u6807\u8bb0\u3002\u7c7b\u578b ",(0,r.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"Int8"),". Possible values:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1")," \u2014 \u884c\u4e0d\u4f1a\u5220\u9664,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-1")," \u2014 \u884c\u88ab\u5220\u9664\u3002")))),(0,r.kt)("h2",{id:"data_types-support"},"\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"MySQL"),(0,r.kt)("th",{parentName:"tr",align:null},"ClickHouse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TINY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"Int8"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHORT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"Int16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT24"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"Int32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LONG"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"UInt32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LONGLONG"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/float"},"Float32"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/float"},"Float64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL, NEWDECIMAL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/decimal"},"Decimal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE, NEWDATE"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/date"},"Date"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME, TIMESTAMP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/datetime"},"DateTime"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATETIME2, TIMESTAMP2"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/datetime64"},"DateTime64"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ENUM"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/enum"},"Enum"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/string"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VARCHAR, VAR_STRING"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/string"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BLOB"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/string"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BINARY"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/zh/sql-reference/data-types/fixedstring"},"FixedString"))))),(0,r.kt)("p",null,'\u4e0d\u652f\u6301\u5176\u4ed6\u7c7b\u578b\u3002\u5982\u679cMySQL\u8868\u5305\u542b\u6b64\u7c7b\u7c7b\u578b\u7684\u5217\uff0cClickHouse\u629b\u51fa\u5f02\u5e38"Unhandled data type"\u5e76\u505c\u6b62\u590d\u5236\u3002'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/data-types/nullable"},"Nullable"),"\u5df2\u7ecf\u652f\u6301"),(0,r.kt)("h2",{id:"specifics-and-recommendations"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("h3",{id:"\u517c\u5bb9\u6027\u9650\u5236"},"\u517c\u5bb9\u6027\u9650\u5236"),(0,r.kt)("p",null,"\u9664\u4e86\u6570\u636e\u7c7b\u578b\u7684\u9650\u5236\u5916\uff0c\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u6570\u636e\u5e93\u76f8\u6bd4\uff0c\u8fd8\u5b58\u5728\u4e00\u4e9b\u9650\u5236\uff0c\u5728\u5b9e\u73b0\u590d\u5236\u4e4b\u524d\u5e94\u5148\u89e3\u51b3\u8fd9\u4e9b\u9650\u5236\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u4e2d\u7684\u6bcf\u4e2a\u8868\u90fd\u5e94\u8be5\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u5305\u542b",(0,r.kt)("inlineCode",{parentName:"p"},"ENUM"),"\u5b57\u6bb5\u503c\u8d85\u51fa\u8303\u56f4\uff08\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ENUM"),"\u7b7e\u540d\u4e2d\u6307\u5b9a\uff09\u7684\u884c\u7684\u8868\uff0c\u590d\u5236\u5c06\u4e0d\u8d77\u4f5c\u7528\u3002"))),(0,r.kt)("h3",{id:"ddl-queries"},"DDL\u67e5\u8be2"),(0,r.kt)("p",null,"MySQL DDL\u67e5\u8be2\u8f6c\u6362\u4e3a\u76f8\u5e94\u7684ClickHouse DDL\u67e5\u8be2(",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/alter/"},"ALTER"),", ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/create/"},"CREATE"),", ",(0,r.kt)("a",{parentName:"p",href:"../../sql-reference/statements/drop.md"},"DROP"),", ",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/rename"},"RENAME"),")\u3002\u5982\u679cClickHouse\u65e0\u6cd5\u89e3\u6790\u67d0\u4e2aDDL\u67e5\u8be2\uff0c\u5219\u8be5\u67e5\u8be2\u5c06\u88ab\u5ffd\u7565\u3002"),(0,r.kt)("h3",{id:"data-replication"},"Data Replication"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"MaterializeMySQL"),"\u4e0d\u652f\u6301\u76f4\u63a5",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\u67e5\u8be2. \u4f46\u662f\uff0c\u5b83\u4eec\u662f\u5728\u6570\u636e\u590d\u5236\u65b9\u9762\u652f\u6301\u7684\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u67e5\u8be2\u8f6c\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u5e76\u643a\u5e26",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=1"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),"\u67e5\u8be2\u8f6c\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u5e76\u643a\u5e26",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=-1"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MySQL\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\u67e5\u8be2\u8f6c\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u5e76\u643a\u5e26",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=-1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"_sign=1"),"."))),(0,r.kt)("h3",{id:"select"},"\u67e5\u8be2MaterializeMySQL\u8868"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u67e5\u8be2",(0,r.kt)("inlineCode",{parentName:"p"},"MaterializeMySQL"),"\u8868\u6709\u4e00\u4e9b\u7ec6\u8282:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"_version"),"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u4e2d\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/from#select-from-final"},"FINAL"),"\u4fee\u9970\u7b26\u3002\u6240\u4ee5\u53ea\u6709\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"MAX(_version)"),"\u7684\u884c\u624d\u4f1a\u88ab\u9009\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"_sign"),"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u4e2d\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE _sign=1"),"\u3002\u56e0\u6b64\uff0c\u5220\u9664\u7684\u884c\u4e0d\u4f1a\u5305\u542b\u5728\u7ed3\u679c\u96c6\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7ed3\u679c\u5305\u62ec\u5217\u4e2d\u7684\u5217\u6ce8\u91ca\uff0c\u56e0\u4e3a\u5b83\u4eec\u5b58\u5728\u4e8eSQL\u6570\u636e\u5e93\u8868\u4e2d\u3002"))),(0,r.kt)("h3",{id:"index-conversion"},"Index Conversion"),(0,r.kt)("p",null,"MySQL\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"PRIMARY KEY"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"INDEX"),"\u5b50\u53e5\u5728ClickHouse\u8868\u4e2d\u8f6c\u6362\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY"),"\u5143\u7ec4\u3002"),(0,r.kt)("p",null,"ClickHouse\u53ea\u6709\u4e00\u4e2a\u7269\u7406\u987a\u5e8f\uff0c\u7531",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY"),"\u5b50\u53e5\u51b3\u5b9a\u3002\u8981\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u7269\u7406\u987a\u5e8f\uff0c\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/create/view#materialized"},"materialized views"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"li"},"_sign=-1"),"\u7684\u884c\u4e0d\u4f1a\u4ece\u8868\u4e2d\u7269\u7406\u5220\u9664\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MaterializeMySQL"),"\u5f15\u64ce\u4e0d\u652f\u6301\u7ea7\u8054",(0,r.kt)("inlineCode",{parentName:"li"},"UPDATE/DELETE"),"\u67e5\u8be2\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u590d\u5236\u5f88\u5bb9\u6613\u88ab\u7834\u574f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7981\u6b62\u5bf9\u6570\u636e\u5e93\u548c\u8868\u8fdb\u884c\u624b\u5de5\u64cd\u4f5c\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MaterializeMySQL"),"\u53d7",(0,r.kt)("a",{parentName:"li",href:"/zh/operations/settings/#optimize-on-insert"},"optimize_on_insert"),"\u8bbe\u7f6e\u7684\u5f71\u54cd\u3002\u5f53MySQL\u670d\u52a1\u5668\u4e2d\u7684\u8868\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u6570\u636e\u4f1a\u5408\u5e76\u5230",(0,r.kt)("inlineCode",{parentName:"li"},"MaterializeMySQL"),"\u6570\u636e\u5e93\u4e2d\u76f8\u5e94\u7684\u8868\u4e2d\u3002")),(0,r.kt)("h2",{id:"examples-of-use"},"\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("p",null,"MySQL\u64cd\u4f5c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> CREATE DATABASE db;\nmysql> CREATE TABLE db.test (a INT PRIMARY KEY, b INT);\nmysql> INSERT INTO db.test VALUES (1, 11), (2, 22);\nmysql> DELETE FROM db.test WHERE a=1;\nmysql> ALTER TABLE db.test ADD COLUMN c VARCHAR(16);\nmysql> UPDATE db.test SET c='Wow!', b=222;\nmysql> SELECT * FROM test;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"+---+------+------+ \n| a |    b |    c |\n+---+------+------+ \n| 2 |  222 | Wow! |\n+---+------+------+\n")),(0,r.kt)("p",null,"ClickHouse\u4e2d\u7684\u6570\u636e\u5e93\uff0c\u4e0eMySQL\u670d\u52a1\u5668\u4ea4\u6362\u6570\u636e:"),(0,r.kt)("p",null,"\u521b\u5efa\u7684\u6570\u636e\u5e93\u548c\u8868:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE mysql ENGINE = MaterializeMySQL('localhost:3306', 'db', 'user', '***');\nSHOW TABLES FROM mysql;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2510\n\u2502 test \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u7136\u540e\u63d2\u5165\u6570\u636e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql.test;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500\u2500b\u2500\u2510 \n\u2502 1 \u2502 11 \u2502 \n\u2502 2 \u2502 22 \u2502 \n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u5220\u9664\u6570\u636e\u540e\uff0c\u6dfb\u52a0\u5217\u5e76\u66f4\u65b0:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM mysql.test;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u252c\u2500\u2500\u2500b\u2500\u252c\u2500c\u2500\u2500\u2500\u2500\u2510 \n\u2502 2 \u2502 222 \u2502 Wow! \u2502 \n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/database-engines/materialize-mysql/"},"\u6765\u6e90\u6587\u7ae0")," "))}u.isMDXComponent=!0}}]);