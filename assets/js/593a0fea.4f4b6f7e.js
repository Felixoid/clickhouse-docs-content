"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70419],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,h=p["".concat(l,".").concat(c)]||p[c]||d[c]||r;return n?o.createElement(h,i(i({ref:t},m),{},{components:n})):o.createElement(h,i({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38682:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],s={sidebar_position:59,sidebar_label:"Restrictions on Query Complexity"},l="Restrictions on Query Complexity",u={unversionedId:"en/operations/settings/query-complexity",id:"en/operations/settings/query-complexity",title:"Restrictions on Query Complexity",description:"restrictions-on-query-complexity}",source:"@site/docs/en/operations/settings/query-complexity.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/query-complexity",permalink:"/docs/en/operations/settings/query-complexity",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/settings/query-complexity.md",tags:[],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59,sidebar_label:"Restrictions on Query Complexity"},sidebar:"english",previous:{title:"Permissions for Queries",permalink:"/docs/en/operations/settings/permissions-for-queries"},next:{title:"Settings Profiles",permalink:"/docs/en/operations/settings/settings-profiles"}},m={},d=[{value:"max_memory_usage",id:"settings_max_memory_usage",level:2},{value:"max_memory_usage_for_user",id:"max-memory-usage-for-user",level:2},{value:"max_rows_to_read",id:"max-rows-to-read",level:2},{value:"max_bytes_to_read",id:"max-bytes-to-read",level:2},{value:"read_overflow_mode",id:"read-overflow-mode",level:2},{value:"max_rows_to_read_leaf",id:"max-rows-to-read-leaf",level:2},{value:"max_bytes_to_read_leaf",id:"max-bytes-to-read-leaf",level:2},{value:"read_overflow_mode_leaf",id:"read-overflow-mode-leaf",level:2},{value:"max_rows_to_group_by",id:"settings-max-rows-to-group-by",level:2},{value:"group_by_overflow_mode",id:"group-by-overflow-mode",level:2},{value:"max_bytes_before_external_group_by",id:"settings-max_bytes_before_external_group_by",level:2},{value:"max_rows_to_sort",id:"max-rows-to-sort",level:2},{value:"max_bytes_to_sort",id:"max-bytes-to-sort",level:2},{value:"sort_overflow_mode",id:"sort-overflow-mode",level:2},{value:"max_result_rows",id:"setting-max_result_rows",level:2},{value:"max_result_bytes",id:"max-result-bytes",level:2},{value:"result_overflow_mode",id:"result-overflow-mode",level:2},{value:"max_execution_time",id:"max-execution-time",level:2},{value:"timeout_overflow_mode",id:"timeout-overflow-mode",level:2},{value:"min_execution_speed",id:"min-execution-speed",level:2},{value:"min_execution_speed_bytes",id:"min-execution-speed-bytes",level:2},{value:"max_execution_speed",id:"max-execution-speed",level:2},{value:"max_execution_speed_bytes",id:"max-execution-speed-bytes",level:2},{value:"timeout_before_checking_execution_speed",id:"timeout-before-checking-execution-speed",level:2},{value:"max_columns_to_read",id:"max-columns-to-read",level:2},{value:"max_temporary_columns",id:"max-temporary-columns",level:2},{value:"max_temporary_non_const_columns",id:"max-temporary-non-const-columns",level:2},{value:"max_subquery_depth",id:"max-subquery-depth",level:2},{value:"max_pipeline_depth",id:"max-pipeline-depth",level:2},{value:"max_ast_depth",id:"max-ast-depth",level:2},{value:"max_ast_elements",id:"max-ast-elements",level:2},{value:"max_rows_in_set",id:"max-rows-in-set",level:2},{value:"max_bytes_in_set",id:"max-bytes-in-set",level:2},{value:"set_overflow_mode",id:"set-overflow-mode",level:2},{value:"max_rows_in_distinct",id:"max-rows-in-distinct",level:2},{value:"max_bytes_in_distinct",id:"max-bytes-in-distinct",level:2},{value:"distinct_overflow_mode",id:"distinct-overflow-mode",level:2},{value:"max_rows_to_transfer",id:"max-rows-to-transfer",level:2},{value:"max_bytes_to_transfer",id:"max-bytes-to-transfer",level:2},{value:"transfer_overflow_mode",id:"transfer-overflow-mode",level:2},{value:"max_rows_in_join",id:"settings-max_rows_in_join",level:2},{value:"max_bytes_in_join",id:"settings-max_bytes_in_join",level:2},{value:"join_overflow_mode",id:"settings-join_overflow_mode",level:2},{value:"max_partitions_per_insert_block",id:"max-partitions-per-insert-block",level:2}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"restrictions-on-query-complexity"},"Restrictions on Query Complexity"),(0,r.kt)("p",null,"Restrictions on query complexity are part of the settings.\nThey are used to provide safer execution from the user interface.\nAlmost all the restrictions only apply to ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT"),". For distributed query processing, restrictions are applied on each server separately."),(0,r.kt)("p",null,"ClickHouse checks the restrictions for data parts, not for each row. It means that you can exceed the value of restriction with the size of the data part."),(0,r.kt)("p",null,"Restrictions on the \u201cmaximum amount of something\u201d can take the value 0, which means \u201cunrestricted\u201d.\nMost restrictions also have an \u2018overflow_mode\u2019 setting, meaning what to do when the limit is exceeded.\nIt can take one of two values: ",(0,r.kt)("inlineCode",{parentName:"p"},"throw")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"break"),". Restrictions on aggregation (group_by_overflow_mode) also have the value ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"throw")," \u2013 Throw an exception (default)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"break")," \u2013 Stop executing the query and return the partial result, as if the source data ran out."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"any (only for group_by_overflow_mode)")," \u2013 Continuing aggregation for the keys that got into the set, but do not add new keys to the set."),(0,r.kt)("h2",{id:"settings_max_memory_usage"},"max_memory_usage"),(0,r.kt)("p",null,"The maximum amount of RAM to use for running a query on a single server."),(0,r.kt)("p",null,"In the default configuration file, the maximum is 10 GB."),(0,r.kt)("p",null,"The setting does not consider the volume of available memory or the total volume of memory on the machine.\nThe restriction applies to a single query within a single server.\nYou can use ",(0,r.kt)("inlineCode",{parentName:"p"},"SHOW PROCESSLIST")," to see the current memory consumption for each query.\nBesides, the peak memory consumption is tracked for each query and written to the log."),(0,r.kt)("p",null,"Memory usage is not monitored for the states of certain aggregate functions."),(0,r.kt)("p",null,"Memory usage is not fully tracked for states of the aggregate functions ",(0,r.kt)("inlineCode",{parentName:"p"},"min"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"anyLast"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"argMin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"argMax")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," arguments."),(0,r.kt)("p",null,"Memory consumption is also restricted by the parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"max_memory_usage_for_user")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/server-configuration-parameters/settings#max_server_memory_usage"},"max_server_memory_usage"),"."),(0,r.kt)("h2",{id:"max-memory-usage-for-user"},"max_memory_usage_for_user"),(0,r.kt)("p",null,"The maximum amount of RAM to use for running a user\u2019s queries on a single server."),(0,r.kt)("p",null,"Default values are defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Core/Settings.h#L288"},"Settings.h"),". By default, the amount is not restricted (",(0,r.kt)("inlineCode",{parentName:"p"},"max_memory_usage_for_user = 0"),")."),(0,r.kt)("p",null,"See also the description of ",(0,r.kt)("a",{parentName:"p",href:"#settings_max_memory_usage"},"max_memory_usage"),"."),(0,r.kt)("h2",{id:"max-rows-to-read"},"max_rows_to_read"),(0,r.kt)("p",null,"The following restrictions can be checked on each block (instead of on each row). That is, the restrictions can be broken a little."),(0,r.kt)("p",null,"A maximum number of rows that can be read from a table when running a query."),(0,r.kt)("h2",{id:"max-bytes-to-read"},"max_bytes_to_read"),(0,r.kt)("p",null,"A maximum number of bytes (uncompressed data) that can be read from a table when running a query."),(0,r.kt)("h2",{id:"read-overflow-mode"},"read_overflow_mode"),(0,r.kt)("p",null,"What to do when the volume of data read exceeds one of the limits: \u2018throw\u2019 or \u2018break\u2019. By default, throw."),(0,r.kt)("h2",{id:"max-rows-to-read-leaf"},"max_rows_to_read_leaf"),(0,r.kt)("p",null,"The following restrictions can be checked on each block (instead of on each row). That is, the restrictions can be broken a little."),(0,r.kt)("p",null,"A maximum number of rows that can be read from a local table on a leaf node when running a distributed query. While\ndistributed queries can issue a multiple sub-queries to each shard (leaf) - this limit will be checked only on the read\nstage on the leaf nodes and ignored on results merging stage on the root node. For example, cluster consists of 2 shards\nand each shard contains a table with 100 rows. Then distributed query which suppose to read all the data from both\ntables with setting ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows_to_read=150")," will fail as in total it will be 200 rows. While query\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows_to_read_leaf=150")," will succeed since leaf nodes will read 100 rows at max."),(0,r.kt)("h2",{id:"max-bytes-to-read-leaf"},"max_bytes_to_read_leaf"),(0,r.kt)("p",null,"A maximum number of bytes (uncompressed data) that can be read from a local table on a leaf node when running\na distributed query. While distributed queries can issue a multiple sub-queries to each shard (leaf) - this limit will\nbe checked only on the read stage on the leaf nodes and ignored on results merging stage on the root node.\nFor example, cluster consists of 2 shards and each shard contains a table with 100 bytes of data.\nThen distributed query which suppose to read all the data from both tables with setting ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_to_read=150")," will fail\nas in total it will be 200 bytes. While query with ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes_to_read_leaf=150")," will succeed since leaf nodes will read\n100 bytes at max."),(0,r.kt)("h2",{id:"read-overflow-mode-leaf"},"read_overflow_mode_leaf"),(0,r.kt)("p",null,"What to do when the volume of data read exceeds one of the leaf limits: \u2018throw\u2019 or \u2018break\u2019. By default, throw."),(0,r.kt)("h2",{id:"settings-max-rows-to-group-by"},"max_rows_to_group_by"),(0,r.kt)("p",null,"A maximum number of unique keys received from aggregation. This setting lets you limit memory consumption when aggregating."),(0,r.kt)("h2",{id:"group-by-overflow-mode"},"group_by_overflow_mode"),(0,r.kt)("p",null,"What to do when the number of unique keys for aggregation exceeds the limit: \u2018throw\u2019, \u2018break\u2019, or \u2018any\u2019. By default, throw.\nUsing the \u2018any\u2019 value lets you run an approximation of GROUP BY. The quality of this approximation depends on the statistical nature of the data."),(0,r.kt)("h2",{id:"settings-max_bytes_before_external_group_by"},"max_bytes_before_external_group_by"),(0,r.kt)("p",null,"Enables or disables execution of ",(0,r.kt)("inlineCode",{parentName:"p"},"GROUP BY")," clauses in external memory. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/group-by#select-group-by-in-external-memory"},"GROUP BY in external memory"),"."),(0,r.kt)("p",null,"Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maximum volume of RAM (in bytes) that can be used by the single ",(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/group-by#select-group-by-clause"},"GROUP BY")," operation."),(0,r.kt)("li",{parentName:"ul"},"0 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY")," in external memory disabled.")),(0,r.kt)("p",null,"Default value: 0."),(0,r.kt)("h2",{id:"max-rows-to-sort"},"max_rows_to_sort"),(0,r.kt)("p",null,"A maximum number of rows before sorting. This allows you to limit memory consumption when sorting."),(0,r.kt)("h2",{id:"max-bytes-to-sort"},"max_bytes_to_sort"),(0,r.kt)("p",null,"A maximum number of bytes before sorting."),(0,r.kt)("h2",{id:"sort-overflow-mode"},"sort_overflow_mode"),(0,r.kt)("p",null,"What to do if the number of rows received before sorting exceeds one of the limits: \u2018throw\u2019 or \u2018break\u2019. By default, throw."),(0,r.kt)("h2",{id:"setting-max_result_rows"},"max_result_rows"),(0,r.kt)("p",null,"Limit on the number of rows in the result. Also checked for subqueries, and on remote servers when running parts of a distributed query."),(0,r.kt)("h2",{id:"max-result-bytes"},"max_result_bytes"),(0,r.kt)("p",null,"Limit on the number of bytes in the result. The same as the previous setting."),(0,r.kt)("h2",{id:"result-overflow-mode"},"result_overflow_mode"),(0,r.kt)("p",null,"What to do if the volume of the result exceeds one of the limits: \u2018throw\u2019 or \u2018break\u2019. By default, throw."),(0,r.kt)("p",null,"Using \u2018break\u2019 is similar to using LIMIT. ",(0,r.kt)("inlineCode",{parentName:"p"},"Break")," interrupts execution only at the block level. This means that amount of returned rows is greater than ",(0,r.kt)("a",{parentName:"p",href:"#setting-max_result_rows"},"max_result_rows"),", multiple of ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#setting-max_block_size"},"max_block_size")," and depends on ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#settings-max_threads"},"max_threads"),"."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET max_threads = 3, max_block_size = 3333;\nSET max_result_rows = 3334, result_overflow_mode = 'break';\n\nSELECT *\nFROM numbers_mt(100000)\nFORMAT Null;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"6666 rows in set. ...\n")),(0,r.kt)("h2",{id:"max-execution-time"},"max_execution_time"),(0,r.kt)("p",null,"Maximum query execution time in seconds.\nAt this time, it is not checked for one of the sorting stages, or when merging and finalizing aggregate functions."),(0,r.kt)("h2",{id:"timeout-overflow-mode"},"timeout_overflow_mode"),(0,r.kt)("p",null,"What to do if the query is run longer than \u2018max_execution_time\u2019: \u2018throw\u2019 or \u2018break\u2019. By default, throw."),(0,r.kt)("h2",{id:"min-execution-speed"},"min_execution_speed"),(0,r.kt)("p",null,"Minimal execution speed in rows per second. Checked on every data block when \u2018timeout_before_checking_execution_speed\u2019 expires. If the execution speed is lower, an exception is thrown."),(0,r.kt)("h2",{id:"min-execution-speed-bytes"},"min_execution_speed_bytes"),(0,r.kt)("p",null,"A minimum number of execution bytes per second. Checked on every data block when \u2018timeout_before_checking_execution_speed\u2019 expires. If the execution speed is lower, an exception is thrown."),(0,r.kt)("h2",{id:"max-execution-speed"},"max_execution_speed"),(0,r.kt)("p",null,"A maximum number of execution rows per second. Checked on every data block when \u2018timeout_before_checking_execution_speed\u2019 expires. If the execution speed is high, the execution speed will be reduced."),(0,r.kt)("h2",{id:"max-execution-speed-bytes"},"max_execution_speed_bytes"),(0,r.kt)("p",null,"A maximum number of execution bytes per second. Checked on every data block when \u2018timeout_before_checking_execution_speed\u2019 expires. If the execution speed is high, the execution speed will be reduced."),(0,r.kt)("h2",{id:"timeout-before-checking-execution-speed"},"timeout_before_checking_execution_speed"),(0,r.kt)("p",null,"Checks that execution speed is not too slow (no less than \u2018min_execution_speed\u2019), after the specified time in seconds has expired."),(0,r.kt)("h2",{id:"max-columns-to-read"},"max_columns_to_read"),(0,r.kt)("p",null,"A maximum number of columns that can be read from a table in a single query. If a query requires reading a greater number of columns, it throws an exception."),(0,r.kt)("h2",{id:"max-temporary-columns"},"max_temporary_columns"),(0,r.kt)("p",null,"A maximum number of temporary columns that must be kept in RAM at the same time when running a query, including constant columns. If there are more temporary columns than this, it throws an exception."),(0,r.kt)("h2",{id:"max-temporary-non-const-columns"},"max_temporary_non_const_columns"),(0,r.kt)("p",null,"The same thing as \u2018max_temporary_columns\u2019, but without counting constant columns.\nNote that constant columns are formed fairly often when running a query, but they require approximately zero computing resources."),(0,r.kt)("h2",{id:"max-subquery-depth"},"max_subquery_depth"),(0,r.kt)("p",null,"Maximum nesting depth of subqueries. If subqueries are deeper, an exception is thrown. By default, 100."),(0,r.kt)("h2",{id:"max-pipeline-depth"},"max_pipeline_depth"),(0,r.kt)("p",null,"Maximum pipeline depth. Corresponds to the number of transformations that each data block goes through during query processing. Counted within the limits of a single server. If the pipeline depth is greater, an exception is thrown. By default, 1000."),(0,r.kt)("h2",{id:"max-ast-depth"},"max_ast_depth"),(0,r.kt)("p",null,"Maximum nesting depth of a query syntactic tree. If exceeded, an exception is thrown.\nAt this time, it isn\u2019t checked during parsing, but only after parsing the query. That is, a syntactic tree that is too deep can be created during parsing, but the query will fail. By default, 1000."),(0,r.kt)("h2",{id:"max-ast-elements"},"max_ast_elements"),(0,r.kt)("p",null,"A maximum number of elements in a query syntactic tree. If exceeded, an exception is thrown.\nIn the same way as the previous setting, it is checked only after parsing the query. By default, 50,000."),(0,r.kt)("h2",{id:"max-rows-in-set"},"max_rows_in_set"),(0,r.kt)("p",null,"A maximum number of rows for a data set in the IN clause created from a subquery."),(0,r.kt)("h2",{id:"max-bytes-in-set"},"max_bytes_in_set"),(0,r.kt)("p",null,"A maximum number of bytes (uncompressed data) used by a set in the IN clause created from a subquery."),(0,r.kt)("h2",{id:"set-overflow-mode"},"set_overflow_mode"),(0,r.kt)("p",null,"What to do when the amount of data exceeds one of the limits: \u2018throw\u2019 or \u2018break\u2019. By default, throw."),(0,r.kt)("h2",{id:"max-rows-in-distinct"},"max_rows_in_distinct"),(0,r.kt)("p",null,"A maximum number of different rows when using DISTINCT."),(0,r.kt)("h2",{id:"max-bytes-in-distinct"},"max_bytes_in_distinct"),(0,r.kt)("p",null,"A maximum number of bytes used by a hash table when using DISTINCT."),(0,r.kt)("h2",{id:"distinct-overflow-mode"},"distinct_overflow_mode"),(0,r.kt)("p",null,"What to do when the amount of data exceeds one of the limits: \u2018throw\u2019 or \u2018break\u2019. By default, throw."),(0,r.kt)("h2",{id:"max-rows-to-transfer"},"max_rows_to_transfer"),(0,r.kt)("p",null,"A maximum number of rows that can be passed to a remote server or saved in a temporary table when using GLOBAL IN."),(0,r.kt)("h2",{id:"max-bytes-to-transfer"},"max_bytes_to_transfer"),(0,r.kt)("p",null,"A maximum number of bytes (uncompressed data) that can be passed to a remote server or saved in a temporary table when using GLOBAL IN."),(0,r.kt)("h2",{id:"transfer-overflow-mode"},"transfer_overflow_mode"),(0,r.kt)("p",null,"What to do when the amount of data exceeds one of the limits: \u2018throw\u2019 or \u2018break\u2019. By default, throw."),(0,r.kt)("h2",{id:"settings-max_rows_in_join"},"max_rows_in_join"),(0,r.kt)("p",null,"Limits the number of rows in the hash table that is used when joining tables."),(0,r.kt)("p",null,"This settings applies to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join#select-join"},"SELECT \u2026 JOIN")," operations and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/join"},"Join")," table engine."),(0,r.kt)("p",null,"If a query contains multiple joins, ClickHouse checks this setting for every intermediate result."),(0,r.kt)("p",null,"ClickHouse can proceed with different actions when the limit is reached. Use the ",(0,r.kt)("a",{parentName:"p",href:"#settings-join_overflow_mode"},"join_overflow_mode")," setting to choose the action."),(0,r.kt)("p",null,"Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Positive integer."),(0,r.kt)("li",{parentName:"ul"},"0 \u2014 Unlimited number of rows.")),(0,r.kt)("p",null,"Default value: 0."),(0,r.kt)("h2",{id:"settings-max_bytes_in_join"},"max_bytes_in_join"),(0,r.kt)("p",null,"Limits the size in bytes of the hash table used when joining tables."),(0,r.kt)("p",null,"This settings applies to ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/statements/select/join#select-join"},"SELECT \u2026 JOIN")," operations and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/join"},"Join table engine"),"."),(0,r.kt)("p",null,"If the query contains joins, ClickHouse checks this setting for every intermediate result."),(0,r.kt)("p",null,"ClickHouse can proceed with different actions when the limit is reached. Use ",(0,r.kt)("a",{parentName:"p",href:"#settings-join_overflow_mode"},"join_overflow_mode")," settings to choose the action."),(0,r.kt)("p",null,"Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Positive integer."),(0,r.kt)("li",{parentName:"ul"},"0 \u2014 Memory control is disabled.")),(0,r.kt)("p",null,"Default value: 0."),(0,r.kt)("h2",{id:"settings-join_overflow_mode"},"join_overflow_mode"),(0,r.kt)("p",null,"Defines what action ClickHouse performs when any of the following join limits is reached:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#settings-max_bytes_in_join"},"max_bytes_in_join")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#settings-max_rows_in_join"},"max_rows_in_join"))),(0,r.kt)("p",null,"Possible values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"THROW")," \u2014 ClickHouse throws an exception and breaks operation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BREAK")," \u2014 ClickHouse breaks operation and does not throw an exception.")),(0,r.kt)("p",null,"Default value: ",(0,r.kt)("inlineCode",{parentName:"p"},"THROW"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"See Also")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/statements/select/join#select-join"},"JOIN clause")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/en/engines/table-engines/special/join"},"Join table engine"))),(0,r.kt)("h2",{id:"max-partitions-per-insert-block"},"max_partitions_per_insert_block"),(0,r.kt)("p",null,"Limits the maximum number of partitions in a single inserted block."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Positive integer."),(0,r.kt)("li",{parentName:"ul"},"0 \u2014 Unlimited number of partitions.")),(0,r.kt)("p",null,"Default value: 100."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Details")),(0,r.kt)("p",null,"When inserting data, ClickHouse calculates the number of partitions in the inserted block. If the number of partitions is more than ",(0,r.kt)("inlineCode",{parentName:"p"},"max_partitions_per_insert_block"),", ClickHouse throws an exception with the following text:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u201cToo many partitions for single INSERT block (more than\u201d + toString(max_parts) + \u201c). The limit is controlled by \u2018max_partitions_per_insert_block\u2019 setting. A large number of partitions is a common misconception. It will lead to severe negative performance impact, including slow server startup, slow INSERT queries and slow SELECT queries. Recommended total number of partitions for a table is under 1000..10000. Please note, that partitioning is not intended to speed up SELECT queries (ORDER BY key is sufficient to make range queries fast). Partitions are intended for data manipulation (DROP PARTITION, etc).\u201d")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/query_complexity/"},"Original article")," "))}c.isMDXComponent=!0}}]);