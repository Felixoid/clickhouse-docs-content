"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[68743],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||s;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var d=2;d<s;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var i=n(87462),a=n(63366),s=(n(67294),n(3905)),r=["components"],o={sidebar_label:"Data Skipping Indexes",sidebar_position:2},l="Understanding ClickHouse Data Skipping Indexes",d={unversionedId:"en/guides/improving-query-performance/skipping-indexes",id:"en/guides/improving-query-performance/skipping-indexes",title:"Understanding ClickHouse Data Skipping Indexes",description:"Introduction to Skipping Indexes",source:"@site/docs/en/guides/improving-query-performance/skipping-indexes.md",sourceDirName:"en/guides/improving-query-performance",slug:"/en/guides/improving-query-performance/skipping-indexes",permalink:"/en/guides/improving-query-performance/skipping-indexes",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/guides/improving-query-performance/skipping-indexes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Data Skipping Indexes",sidebar_position:2},sidebar:"english",previous:{title:"Improving Query Performance",permalink:"/category/improving-query-performance"},next:{title:"Sparse Primary Indexes",permalink:"/en/guides/improving-query-performance/sparse-primary-indexes"}},p={},u=[{value:"Introduction to Skipping Indexes",id:"introduction-to-skipping-indexes",level:3},{value:"Basic Operation",id:"basic-operation",level:3},{value:"Skip Index Types",id:"skip-index-types",level:3},{value:"minmax",id:"minmax",level:4},{value:"set",id:"set",level:4},{value:"Bloom Filter Types",id:"bloom-filter-types",level:4},{value:"Skip Index Functions",id:"skip-index-functions",level:3},{value:"Skip Index Settings",id:"skip-index-settings",level:3},{value:"Skip Best Practices",id:"skip-best-practices",level:3}],c={toc:u};function h(e){var t=e.components,o=(0,a.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"understanding-clickhouse-data-skipping-indexes"},"Understanding ClickHouse Data Skipping Indexes"),(0,s.kt)("h3",{id:"introduction-to-skipping-indexes"},"Introduction to Skipping Indexes"),(0,s.kt)("p",null,"Many factors affect ClickHouse query performance. The critical element in most scenarios is whether ClickHouse can use the primary key when evaluating the query WHERE clause condition. Accordingly, selecting a primary key that applies to the most common query patterns is essential for effective table design."),(0,s.kt)("p",null,'Neverthelss, no matter how carefully tuned the primary key, there will inevitably be query use cases that can not efficiently use it. Users commonly rely on ClickHouse for time series type data, but they often wish to analyze that same data according to other business dimensions, such as customer id, website URL, or product number. In that case, query performance can be considerably worse because a full scan of each column value may be required to apply the WHERE clause condition. While ClickHouse is still relatively fast in those circumstances, evaluating millions or billions of individual values will cause "non-indexed" queries to execute much more slowly than those based on the primary key.'),(0,s.kt)("p",null,'In a traditional relational database, one approach to this problem is to attach one or more "secondary" indexes to a table. This is a b-tree structure that permits the database to find all matching rows on disk in O(log(n)) time instead of O(n) time (a table scan), where n is the number of rows. However, this type of secondary index will not work for ClickHouse (or other column-oriented databases) because there are no individual rows on the disk to add to the index.'),(0,s.kt)("p",null,'Instead, ClickHouse provides a different type of index, which in specific circumstances can significantly improve query speed. These structures are labeled "Skip" indexes because they enable ClickHouse to skip reading significant chunks of data that are guaranteed to have no matching values.'),(0,s.kt)("h3",{id:"basic-operation"},"Basic Operation"),(0,s.kt)("p",null,"Users can only employ Data Skipping Indexes on the MergeTree family of tables. Each data skipping has four primary arguments:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Index name. The index name is used to create the index file in each partition. Also, it is required as a parameter when dropping or materializing the index."),(0,s.kt)("li",{parentName:"ul"},"Index expression. The index expression is used to calculate the set of values stored in the index. It can be a combination of columns, simple operators, and/or a subset of functions determined by the index type."),(0,s.kt)("li",{parentName:"ul"},"TYPE. The type of index controls the calculation that determines if it is possible to skip reading and evaluating each index block."),(0,s.kt)("li",{parentName:"ul"},'GRANULARITY. Each indexed block consists of GRANULARITY granules. For example, if the granularity of the primary table index is 8192 rows, and the index granularity is 4, each indexed "block" will be 32768 rows.')),(0,s.kt)("p",null,"When a user creates a data skipping index, there will be two additional files in each data part directory for the table."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"skp",(0,s.kt)("em",{parentName:"li"},"idx"),"{index_name}.idx, which contains the ordered expression values)"),(0,s.kt)("li",{parentName:"ul"},"skp",(0,s.kt)("em",{parentName:"li"},"idx"),"{index_name}.mrk2, which contains the corresponding offsets into the associated data column files.")),(0,s.kt)("p",null,"If some portion of the WHERE clause filtering condition matches the skip index expression when executing a query and reading the relevant column files, ClickHouse will use the index file data to determine whether each relevant block of data must be processed or can be bypassed (assuming that the block has not already been excluded by applying the primary key). To use a very simplified example, consider the following table loaded with predictable data."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"CREATE TABLE skip_table\n(\n  my_key UInt64,\n  my_value UInt64\n)\nENGINE MergeTree primary key my_key\nSETTINGS index_granularity=8192;\n\nINSERT INTO skip_table SELECT number, intDiv(number,4096) FROM numbers(100000000);\n")),(0,s.kt)("p",null,"When executing a simple query that does not use the primary key, all 100 million entries in the ",(0,s.kt)("inlineCode",{parentName:"p"},"my_value"),"\ncolumn are scanned:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SELECT * FROM skip_table WHERE my_value IN (125, 700)\n\n\u250c\u2500my_key\u2500\u252c\u2500my_value\u2500\u2510\n\u2502 512000 \u2502      125 \u2502\n\u2502 512001 \u2502      125 \u2502\n\u2502    ... |      ... |\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n8192 rows in set. Elapsed: 0.079 sec. Processed 100.00 million rows, 800.10 MB (1.26 billion rows/s., 10.10 GB/s.\n")),(0,s.kt)("p",null,"Now add a very basic skip index:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ALTER TABLE skip_table ADD INDEX vix my_value TYPE set(100) GRANULARITY 2;\n")),(0,s.kt)("p",null,"Normally skip indexes are only applied on newly inserted data, so just adding the index won't affect the above query."),(0,s.kt)("p",null,"To index already existing data, use this statement:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ALTER TABLE skip_table MATERIALIZE INDEX vix;\n")),(0,s.kt)("p",null,"Rerun the query with the newly created index:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SELECT * FROM skip_table WHERE my_value IN (125, 700)\n\n\u250c\u2500my_key\u2500\u252c\u2500my_value\u2500\u2510\n\u2502 512000 \u2502      125 \u2502\n\u2502 512001 \u2502      125 \u2502\n\u2502    ... |      ... |\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n8192 rows in set. Elapsed: 0.051 sec. Processed 32.77 thousand rows, 360.45 KB (643.75 thousand rows/s., 7.08 MB/s.)\n")),(0,s.kt)("p",null,"Instead of processing 100 million rows of 800 megabytes, ClickHouse has only read and analyzed 32768 rows of 360 kilobytes\n-- four granules of 8192 rows each."),(0,s.kt)("p",null,"In a more visual form, this is how the 4096 rows with a ",(0,s.kt)("inlineCode",{parentName:"p"},"my_value")," of 125 were read and selected, and how the following rows\nwere skipped without reading from disk:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Simple Skip",src:n(20994).Z,width:"595",height:"518"})),(0,s.kt)("p",null,"Users can access detailed information about skip index usage by enabling the trace when executing queries.  From\nclickhouse-client, set the send_logs_level:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"SET send_logs_level='trace';\n")),(0,s.kt)("p",null,"This will provide useful debugging information when trying to tune query SQL and table indexes.  From the above\nabove example, the debug log shows that the skip index dropped all but two granules:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"<Debug> default.skip_table (933d4b2c-8cea-4bf9-8c93-c56e900eefd1) (SelectExecutor): Index `vix` has dropped 6102/6104 granules.\n")),(0,s.kt)("h3",{id:"skip-index-types"},"Skip Index Types"),(0,s.kt)("h4",{id:"minmax"},"minmax"),(0,s.kt)("p",null,"This lightweight index type requires no parameters.  It stores the minimum and maximum values of the index expression\nfor each block (if the expression is a tuple, it separately stores the values for each member of the element\nof the tuple).  This type is ideal for columns that tend to be loosely sorted by value.  This index type is usually the least expensive to apply during query processing."),(0,s.kt)("p",null,"This type of index only works correctly with a scalar or tuple expression -- the index will never be applied to expressions that return an array or map data type."),(0,s.kt)("h4",{id:"set"},"set"),(0,s.kt)("p",null,'This lightweight index type accepts a single parameter of the max_size of the value set per block (0 permits\nan unlimited number of discrete values).  This set contains all values in the block (or is empty if the number of values exceeds the max_size).  This index type works well with columns with low cardinality within each set of granules (essentially, "clumped together") but higher cardinality overall.'),(0,s.kt)("p",null,"The cost, performance, and effectiveness of this index is dependent on the cardinality within blocks.  If each block contains a large number of unique values, either evaluating the query condition against a large index set will be very expensive, or the index will not be applied because the index is empty due to exceeding max_size."),(0,s.kt)("h4",{id:"bloom-filter-types"},"Bloom Filter Types"),(0,s.kt)("p",null,"A ",(0,s.kt)("em",{parentName:"p"},"Bloom filter")," is a data structure that allows space-efficient testing of set membership at the cost of a slight chance of false positives. A false positive is not a significant concern in the case of skip indexes because the only disadvantage is reading a few unnecessary blocks. However, the potential for false positives does mean that the indexed expression should be expected to be true, otherwise valid data may be skipped."),(0,s.kt)("p",null,"Because Bloom filters can more efficiently handle testing for a large number of discrete values, they can be appropriate for conditional expressions that produce more values to test. In particular, a Bloom filter index can be applied to arrays, where every value of the array is tested, and to maps, by converting either the keys or values to an array using the mapKeys or mapValues function."),(0,s.kt)("p",null,"There are three Data Skipping Index types based on Bloom filters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The basic ",(0,s.kt)("strong",{parentName:"p"},"bloom_filter"),' which takes a single optional parameter of the allowed "false positive" rate between 0 and 1 (if unspecified, .025 is used).')),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The specialized ",(0,s.kt)("strong",{parentName:"p"},"tokenbf_v1"),". It takes three parameters, all related to tuning the bloom filter used:  (1) the size of the filter in bytes (larger filters have fewer false positives, at some cost in storage), (2) number of hash functions applied (again, more hash filters reduce false positives), and (3) the seed for the bloom filter hash functions.  See the calculator ",(0,s.kt)("a",{parentName:"p",href:"https://hur.st/bloomfilter/"},"here")," for more detail on how these parameters affect bloom filter functionality.\nThis index works only with String, FixedString, and Map datatypes. The input expression is split into character sequences separated by non-alphanumeric characters. For example, a column value of ",(0,s.kt)("inlineCode",{parentName:"p"},'This is a candidate for a "full text" search')," will contain the tokens ",(0,s.kt)("inlineCode",{parentName:"p"},"This")," ",(0,s.kt)("inlineCode",{parentName:"p"},"is")," ",(0,s.kt)("inlineCode",{parentName:"p"},"a")," ",(0,s.kt)("inlineCode",{parentName:"p"},"candidate")," ",(0,s.kt)("inlineCode",{parentName:"p"},"for")," ",(0,s.kt)("inlineCode",{parentName:"p"},"full")," ",(0,s.kt)("inlineCode",{parentName:"p"},"text")," ",(0,s.kt)("inlineCode",{parentName:"p"},"search"),".  It is intended for use in LIKE, EQUALS, IN, hasToken() and similar searches for words and other values within longer strings.  For example, one possible use might be searching for a small number of class names or line numbers in a column of free form application log lines.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"The specialized ",(0,s.kt)("strong",{parentName:"p"},"ngrambf_v1"),". This index functions the same as the token index.  It takes one additional parameter before the Bloom filter settings, the size of the ngrams to index.  An ngram is a character string of length ",(0,s.kt)("inlineCode",{parentName:"p"},"n")," of any characters, so the string ",(0,s.kt)("inlineCode",{parentName:"p"},"A short string")," with an ngram size of 4 would be indexed as ",(0,s.kt)("inlineCode",{parentName:"p"},"A sh`` sho"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"shor"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"hort"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ort s"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"or st"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"r str"),", ",(0,s.kt)("inlineCode",{parentName:"p"}," stri"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"trin"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"ring"),".  This index can also be useful for text searches, particularly languages without word breaks, such as Chinese."))),(0,s.kt)("h3",{id:"skip-index-functions"},"Skip Index Functions"),(0,s.kt)("p",null,"The core purpose of data-skipping indexes is to limit the amount of data analyzed by popular queries. Given the analytic nature of ClickHouse data, the pattern of those queries in most cases includes functional expressions. Accordingly, skip indexes must interact correctly with common functions to be efficient. This can happen either when:\n\u2022 data is inserted and the index is defined as a functional expression (with the result of the expression stored in the index files), or\n\u2022 the query is processed and the expression is applied to the stored index values to determine whether to exclude the block."),(0,s.kt)("p",null,"Each type of skip index works on a subset of available ClickHouse functions appropriate to the index implementation listed\n",(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/mergetree-family/mergetree/#functions-support"},"here"),". In general, set indexes and Bloom filter based indexes (another type of set index) are both unordered and therefore do not work with ranges. In contrast, minmax indexes work particularly well with ranges since determining whether ranges intersect is very fast. The efficacy of partial match functions LIKE, startsWith, endsWith, and hasToken depend on the index type used, the index expression, and the particular shape of the data."),(0,s.kt)("h3",{id:"skip-index-settings"},"Skip Index Settings"),(0,s.kt)("p",null,"There are two available settings that apply to skip indexes."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"use_skip_indexes"),"  (0 or 1, default 1).  Not all queries can efficiently use skip indexes.  If a particular filtering condition is\nlikely to include most granules, applying the data skipping index incurs an unnecessary, and sometimes significant, cost.  Set the value to\n0 for queries that are unlikely to benefit from any skip indexes."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"force_data_skipping_indexes")," (comma separated list of index names).  This setting can be used to prevent some kinds of inefficient\nqueries.  In circumstances where querying a table is too expensive unless a skip index is used, using this setting with one or more index\nnames will return an exception for any query that does not use the listed index.  This would prevent poorly written queries from\nconsuming server resources.")),(0,s.kt)("h3",{id:"skip-best-practices"},"Skip Best Practices"),(0,s.kt)("p",null,"Skip indexes are not intuitive, especially for users accustomed to secondary row-based indexes from the RDMS realm or inverted indexes from document stores. To get any benefit, applying a ClickHouse data skipping index must avoid enough granule reads to offset the cost of calculating the index. Critically, if a value occurs even once in an indexed block, it means the entire block must be read into memory and evaluated, and the index cost has been needlessly incurred."),(0,s.kt)("p",null,"Consider the following data distribution:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Bad Skip!",src:n(3221).Z,width:"726",height:"517"})),(0,s.kt)("p",null,"Assume the primary/order by key is ",(0,s.kt)("inlineCode",{parentName:"p"},"timestamp"),", and there is an index on ",(0,s.kt)("inlineCode",{parentName:"p"},"visitor_id"),".  Consider the following query:"),(0,s.kt)("p",null," ",(0,s.kt)("inlineCode",{parentName:"p"},"SELECT timestamp, url FROM table WHERE visitor_id = 1001")),(0,s.kt)("p",null,"A traditional secondary index would be very advantageous with this kind of data distribution.  Instead of reading all 32678 rows to find\nthe 5 rows with the requested visitor_id, the secondary index would include just five row locations, and only those five rows would be\nread from disk.  The exact opposite is true for a ClickHouse data skipping index.  All 32678 values in the ",(0,s.kt)("inlineCode",{parentName:"p"},"visitor_id")," column will be tested\nregardless of the type of skip index."),(0,s.kt)("p",null,"Accordingly, the natural impulse to try to speed up ClickHouse queries by simply adding an index to key\ncolumns is often incorrect.  This advanced functionality should only be used after investigating other alternatives, such as modifying the primary key (see ",(0,s.kt)("a",{parentName:"p",href:"/en/guides/improving-query-performance/sparse-primary-indexes"},"How to Pick a Primary Key"),"), using projections, or using materialized views. Even when a data skipping index is appropriate, careful tuning both the index and the table\nwill often be necessary."),(0,s.kt)("p",null,"In most cases a useful skip index requires a strong correlation between the primary key and the targeted, non-primary column/expression.\nIf there is no correlation (as in the above diagram), the chances of the filtering condition being met by at least one of the rows in\nthe block of several thousand values is high and few blocks will be skipped.  In constrast, if a range of values for the primary key (like time of\nday) is strongly associated with the values in the potential index column (such as television viewer ages), then a minmax type of index\nis likely to be beneficial.  Note that it may be possible to increase this correlation when inserting data, either by including additional\ncolumns in the sorting/ORDER BY key, or batching inserts in a way that values associated with the primary key are grouped on insert.  For\nexample, all of the events for a particular site_id could be grouped and inserted together by the ingest process, even if the primary key\nis a timestamp containing events from a large number of sites.  This will result in many granules that contains only a few site ids, so many\nblocks could be skipped when searching by a specific site_id value."),(0,s.kt)("p",null,"Another good candidate for a skip index is for high cardinality expressions where any one value is relatively sparse in the data.  One example\nmight be an observability platform that tracks error codes in API requests.  Certain error codes, while rare in the data, might be particularly\nimportant for searches.  A set skip index on the error_code column would allow bypassing the vast majority of blocks that don't contain\nerrors and therefore significantly improve error focused queries."),(0,s.kt)("p",null,"Finally, the key best practice is to test, test, test. Again, unlike b-tree secondary indexes or inverted indexes for searching documents,\ndata skipping index behavior is not easily predictable. Adding them to a table incurs a meangingful cost both on data ingest and on queries\nthat for any number of reasons don't benefit from the index. They should always be tested on real world type of data, and testing should\ninclude variations of the type, granularity size and other parameters. Testing will often reveal patterns and pitfalls that aren't obvious from\nthought experiments alone."))}h.isMDXComponent=!0},3221:function(e,t,n){t.Z=n.p+"assets/images/bad_skip_1-43ca5929727f9e32bf386d7687525d1b.svg"},20994:function(e,t,n){t.Z=n.p+"assets/images/simple_skip-52c0988d126255fdb7aa8ad94036b1f7.svg"}}]);