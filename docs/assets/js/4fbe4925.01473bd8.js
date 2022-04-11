"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65529],{3905:function(e,t,a){a.d(t,{Zo:function(){return o},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),f=m(a),k=r,u=f["".concat(s,".").concat(k)]||f[k]||d[k]||i;return a?n.createElement(u,p(p({ref:t},o),{},{components:a})):n.createElement(u,p({ref:t},o))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},71479:function(e,t,a){a.r(t),a.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p=["components"],l={},s="parts",m={unversionedId:"en/operations/system-tables/parts",id:"en/operations/system-tables/parts",title:"parts",description:"system_tables-parts}",source:"@site/docs/en/operations/system-tables/parts.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/parts",permalink:"/en/operations/system-tables/parts",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/operations/system-tables/parts.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"part_log",permalink:"/en/operations/system-tables/part_log"},next:{title:"parts_columns",permalink:"/en/operations/system-tables/parts_columns"}},o={},d=[],f={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-parts"},"parts"),(0,i.kt)("p",null,"Contains information about parts of ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," tables."),(0,i.kt)("p",null,"Each row describes one data part."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"partition")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 The partition name. To learn what a partition is, see the description of the ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/alter/#query_language_queries_alter"},"ALTER")," query."),(0,i.kt)("p",{parentName:"li"},"Formats:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"YYYYMM")," for automatic partitioning by month."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"any_string")," when partitioning manually."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"name")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 Name of the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"part_type")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 The data part storing format."),(0,i.kt)("p",{parentName:"li"},"Possible Values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Wide")," \u2014 Each column is stored in a separate file in a filesystem."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Compact")," \u2014 All columns are stored in one file in a filesystem.")),(0,i.kt)("p",{parentName:"li"},"Data storing format is controlled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"min_bytes_for_wide_part")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"min_rows_for_wide_part")," settings of the ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"active")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2013 Flag that indicates whether the data part is active. If a data part is active, it\u2019s used in a table. Otherwise, it\u2019s deleted. Inactive data parts remain after merging.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"marks")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 The number of marks. To get the approximate number of rows in a data part, multiply ",(0,i.kt)("inlineCode",{parentName:"p"},"marks")," by the index granularity (usually 8192) (this hint does not work for adaptive granularity).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"rows")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 The number of rows.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bytes_on_disk")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 Total size of all the data part files in bytes.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 Total size of compressed data in the data part. All the auxiliary files (for example, files with marks) are not included.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 Total size of uncompressed data in the data part. All the auxiliary files (for example, files with marks) are not included.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"marks_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 The size of the file with marks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"secondary_indices_compressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 Total size of compressed data for secondary indices in the data part. All the auxiliary files (for example, files with marks) are not included.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"secondary_indices_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 Total size of uncompressed data for secondary indices in the data part. All the auxiliary files (for example, files with marks) are not included.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"secondary_indices_marks_bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 The size of the file with marks for secondary indices.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"modification_time")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2013 The time the directory with the data part was modified. This usually corresponds to the time of data part creation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"remove_time")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2013 The time when the data part became inactive.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"refcount")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2013 The number of places where the data part is used. A value greater than 2 indicates that the data part is used in queries or merges.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"min_date")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/date"},"Date"),") \u2013 The minimum value of the date key in the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_date")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/date"},"Date"),") \u2013 The maximum value of the date key in the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"min_time")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2013 The minimum value of the date and time key in the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_time"),"(",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2013 The maximum value of the date and time key in the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"partition_id")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 ID of the partition.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"min_block_number")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 The minimum number of data parts that make up the current part after merging.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"max_block_number")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 The maximum number of data parts that make up the current part after merging.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"level")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2013 Depth of the merge tree. Zero means that the current part was created by insert rather than by merging other parts.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"data_version")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 Number that is used to determine which mutations should be applied to the data part (mutations with a version higher than ",(0,i.kt)("inlineCode",{parentName:"p"},"data_version"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"primary_key_bytes_in_memory")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 The amount of memory (in bytes) used by primary key values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"primary_key_bytes_in_memory_allocated")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 The amount of memory (in bytes) reserved for primary key values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"is_frozen")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2013 Flag that shows that a partition data backup exists. 1, the backup exists. 0, the backup does not exist. For more details, see ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/alter/partition#alter_freeze-partition"},"FREEZE PARTITION"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 Name of the database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 Name of the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"engine")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 Name of the table engine without parameters.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"path")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 Absolute path to the folder with data part files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"disk_name")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 Name of a disk that stores the data part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"hash_of_all_files")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128")," of compressed files.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"hash_of_uncompressed_files")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128")," of uncompressed files (files with marks, index file etc.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"uncompressed_hash_of_compressed_files")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2013 ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/hash-functions#hash_functions-siphash128"},"sipHash128")," of data in the compressed files as if they were uncompressed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"delete_ttl_info_min")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 The minimum value of the date and time key for ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL DELETE rule"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"delete_ttl_info_max")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),") \u2014 The maximum value of the date and time key for ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL DELETE rule"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"move_ttl_info.expression")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 Array of expressions. Each expression defines a ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE rule"),"."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"move_ttl_info.expression")," array is kept mostly for backward compatibility, now the simpliest way to check ",(0,i.kt)("inlineCode",{parentName:"p"},"TTL MOVE")," rule is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"move_ttl_info.min")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"move_ttl_info.max")," fields."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"move_ttl_info.min")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 Array of date and time values. Each element describes the minimum key value for a ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE rule"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"move_ttl_info.max")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/array"},"Array"),"(",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),")) \u2014 Array of date and time values. Each element describes the maximum key value for a ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL MOVE rule"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"bytes")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 Alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"bytes_on_disk"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"marks_size")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2013 Alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"marks_bytes"),"."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.parts LIMIT 1 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\npartition:                             tuple()\nname:                                  all_1_4_1_6\npart_type:                             Wide\nactive:                                1\nmarks:                                 2\nrows:                                  6\nbytes_on_disk:                         310\ndata_compressed_bytes:                 157\ndata_uncompressed_bytes:               91\nsecondary_indices_compressed_bytes:    58\nsecondary_indices_uncompressed_bytes:  6\nsecondary_indices_marks_bytes:         48\nmarks_bytes:                           144\nmodification_time:                     2020-06-18 13:01:49\nremove_time:                           1970-01-01 00:00:00\nrefcount:                              1\nmin_date:                              1970-01-01\nmax_date:                              1970-01-01\nmin_time:                              1970-01-01 00:00:00\nmax_time:                              1970-01-01 00:00:00\npartition_id:                          all\nmin_block_number:                      1\nmax_block_number:                      4\nlevel:                                 1\ndata_version:                          6\nprimary_key_bytes_in_memory:           8\nprimary_key_bytes_in_memory_allocated: 64\nis_frozen:                             0\ndatabase:                              default\ntable:                                 months\nengine:                                MergeTree\ndisk_name:                             default\npath:                                  /var/lib/clickhouse/data/default/months/all_1_4_1_6/\nhash_of_all_files:                     2d0657a16d9430824d35e327fcbd87bf\nhash_of_uncompressed_files:            84950cc30ba867c77a408ae21332ba29\nuncompressed_hash_of_compressed_files: 1ad78f1c6843bbfb99a2c931abe7df7d\ndelete_ttl_info_min:                   1970-01-01 00:00:00\ndelete_ttl_info_max:                   1970-01-01 00:00:00\nmove_ttl_info.expression:              []\nmove_ttl_info.min:                     []\nmove_ttl_info.max:                     []\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/engines/table-engines/mergetree-family/mergetree"},"MergeTree family")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/engines/table-engines/mergetree-family/mergetree#table_engine-mergetree-ttl"},"TTL for Columns and Tables"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/parts"},"Original article")," "))}k.isMDXComponent=!0}}]);