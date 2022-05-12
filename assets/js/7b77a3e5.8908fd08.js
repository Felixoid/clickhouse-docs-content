"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[11084],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,c=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(c,o(o({ref:t},f),{},{components:n})):a.createElement(c,o({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63718:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return d}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={sidebar_position:120,sidebar_label:"Buffer"},s="Buffer Table Engine",u={unversionedId:"en/engines/table-engines/special/buffer",id:"en/engines/table-engines/special/buffer",title:"Buffer Table Engine",description:"buffer}",source:"@site/docs/en/engines/table-engines/special/buffer.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/buffer",permalink:"/docs/en/engines/table-engines/special/buffer",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/buffer.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{sidebar_position:120,sidebar_label:"Buffer"},sidebar:"english",previous:{title:"Memory",permalink:"/docs/en/engines/table-engines/special/memory"},next:{title:"External Data",permalink:"/docs/en/engines/table-engines/special/external-data"}},f={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"buffer"},"Buffer Table Engine"),(0,r.kt)("p",null,"Buffers the data to write in RAM, periodically flushing it to another table. During the read operation, data is read from the buffer and the other table simultaneously."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Buffer(database, table, num_layers, min_time, max_time, min_rows, max_rows, min_bytes, max_bytes)\n")),(0,r.kt)("p",null,"Engine parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"database")," \u2013 Database name. You can use ",(0,r.kt)("inlineCode",{parentName:"li"},"currentDatabase()")," or another constant expression that returns a string."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"table")," \u2013 Table to flush data to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"num_layers")," \u2013 Parallelism layer. Physically, the table will be represented as ",(0,r.kt)("inlineCode",{parentName:"li"},"num_layers")," of independent buffers. Recommended value: 16."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_time"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max_time"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"min_rows"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max_rows"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"min_bytes"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"max_bytes")," \u2013 Conditions for flushing data from the buffer.")),(0,r.kt)("p",null,"Optional engine parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flush_time"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"flush_rows"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"flush_bytes")," \u2013 Conditions for flushing data from the buffer, that will happen only in background (omitted or zero means no ",(0,r.kt)("inlineCode",{parentName:"li"},"flush*")," parameters).")),(0,r.kt)("p",null,"Data is flushed from the buffer and written to the destination table if all the ",(0,r.kt)("inlineCode",{parentName:"p"},"min*")," conditions or at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"max*")," condition are met."),(0,r.kt)("p",null,"Also, if at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"flush*")," condition are met flush initiated in background, this is different from ",(0,r.kt)("inlineCode",{parentName:"p"},"max*"),", since ",(0,r.kt)("inlineCode",{parentName:"p"},"flush*")," allows you to configure background flushes separately to avoid adding latency for ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," (into ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),") queries."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_time"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max_time"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"flush_time")," \u2013 Condition for the time in seconds from the moment of the first write to the buffer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_rows"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max_rows"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"flush_rows")," \u2013 Condition for the number of rows in the buffer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min_bytes"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"max_bytes"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"flush_bytes")," \u2013 Condition for the number of bytes in the buffer.")),(0,r.kt)("p",null,"During the write operation, data is inserted to a ",(0,r.kt)("inlineCode",{parentName:"p"},"num_layers")," number of random buffers. Or, if the data part to insert is large enough (greater than ",(0,r.kt)("inlineCode",{parentName:"p"},"max_rows")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes"),"), it is written directly to the destination table, omitting the buffer."),(0,r.kt)("p",null,"The conditions for flushing the data are calculated separately for each of the ",(0,r.kt)("inlineCode",{parentName:"p"},"num_layers")," buffers. For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"num_layers = 16")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"max_bytes = 100000000"),", the maximum RAM consumption is 1.6 GB."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE merge.hits_buffer AS merge.hits ENGINE = Buffer(merge, hits, 16, 10, 100, 10000, 1000000, 10000000, 100000000)\n")),(0,r.kt)("p",null,"Creating a ",(0,r.kt)("inlineCode",{parentName:"p"},"merge.hits_buffer")," table with the same structure as ",(0,r.kt)("inlineCode",{parentName:"p"},"merge.hits")," and using the Buffer engine. When writing to this table, data is buffered in RAM and later written to the \u2018merge.hits\u2019 table. 16 buffers are created. The data in each of them is flushed if either 100 seconds have passed, or one million rows have been written, or 100 MB of data have been written; or if simultaneously 10 seconds have passed and 10,000 rows and 10 MB of data have been written. For example, if just one row has been written, after 100 seconds it will be flushed, no matter what. But if many rows have been written, the data will be flushed sooner."),(0,r.kt)("p",null,"When the server is stopped, with ",(0,r.kt)("inlineCode",{parentName:"p"},"DROP TABLE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DETACH TABLE"),", buffer data is also flushed to the destination table."),(0,r.kt)("p",null,"You can set empty strings in single quotation marks for the database and table name. This indicates the absence of a destination table. In this case, when the data flush conditions are reached, the buffer is simply cleared. This may be useful for keeping a window of data in memory."),(0,r.kt)("p",null,"When reading from a Buffer table, data is processed both from the buffer and from the destination table (if there is one).\nNote that the Buffer tables does not support an index. In other words, data in the buffer is fully scanned, which might be slow for large buffers. (For data in a subordinate table, the index that it supports will be used.)"),(0,r.kt)("p",null,"If the set of columns in the Buffer table does not match the set of columns in a subordinate table, a subset of columns that exist in both tables is inserted."),(0,r.kt)("p",null,"If the types do not match for one of the columns in the Buffer table and a subordinate table, an error message is entered in the server log, and the buffer is cleared.\nThe same thing happens if the subordinate table does not exist when the buffer is flushed."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Running ALTER on the Buffer table in releases made before 26 Oct 2021 will cause a ",(0,r.kt)("inlineCode",{parentName:"p"},"Block structure mismatch")," error (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/issues/15117"},"#15117")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/pull/30565"},"#30565"),"), so deleting the Buffer table and then recreating is the only option. It is advisable to check that this error is fixed in your release before trying to run ALTER on the Buffer table."))),(0,r.kt)("p",null,"If the server is restarted abnormally, the data in the buffer is lost."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FINAL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SAMPLE")," do not work correctly for Buffer tables. These conditions are passed to the destination table, but are not used for processing data in the buffer. If these features are required we recommend only using the Buffer table for writing, while reading from the destination table."),(0,r.kt)("p",null,"When adding data to a Buffer, one of the buffers is locked. This causes delays if a read operation is simultaneously being performed from the table."),(0,r.kt)("p",null,"Data that is inserted to a Buffer table may end up in the subordinate table in a different order and in different blocks. Because of this, a Buffer table is difficult to use for writing to a CollapsingMergeTree correctly. To avoid problems, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"num_layers")," to 1."),(0,r.kt)("p",null,"If the destination table is replicated, some expected characteristics of replicated tables are lost when writing to a Buffer table. The random changes to the order of rows and sizes of data parts cause data deduplication to quit working, which means it is not possible to have a reliable \u2018exactly once\u2019 write to replicated tables."),(0,r.kt)("p",null,"Due to these disadvantages, we can only recommend using a Buffer table in rare cases."),(0,r.kt)("p",null,"A Buffer table is used when too many INSERTs are received from a large number of servers over a unit of time and data can\u2019t be buffered before insertion, which means the INSERTs can\u2019t run fast enough."),(0,r.kt)("p",null,"Note that it does not make sense to insert data one row at a time, even for Buffer tables. This will only produce a speed of a few thousand rows per second, while inserting larger blocks of data can produce over a million rows per second (see the section \u201cPerformance\u201d)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/engines/table-engines/special/buffer/"},"Original article")," "))}m.isMDXComponent=!0}}]);