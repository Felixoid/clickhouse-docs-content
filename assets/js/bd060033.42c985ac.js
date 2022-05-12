"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[20148],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,_=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(_,s(s({ref:t},u),{},{components:r})):n.createElement(_,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20276:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],c={},l="system.stack_trace",i={unversionedId:"zh/operations/system-tables/stack_trace",id:"zh/operations/system-tables/stack_trace",title:"system.stack_trace",description:"system-tablesstacktrace}",source:"@site/docs/zh/operations/system-tables/stack_trace.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/stack_trace",permalink:"/docs/zh/operations/system-tables/stack_trace",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/stack_trace.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.settings_profiles",permalink:"/docs/zh/operations/system-tables/settings_profiles"},next:{title:"system.storage_policies",permalink:"/docs/zh/operations/system-tables/storage_policies"}},u={},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-tables_stack_trace"},"system.stack_trace"),(0,o.kt)("p",null,"\u5305\u542b\u6240\u6709\u670d\u52a1\u5668\u7ebf\u7a0b\u7684\u5806\u6808\u8ddf\u8e2a. \u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5bf9\u670d\u52a1\u5668\u72b6\u6001\u8fdb\u884c\u81ea\u7701."),(0,o.kt)("p",null,"\u8981\u5206\u6790\u5806\u6808\u5e27, \u8bf7\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"addressToLine"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"addressToSymbol")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"demangle")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/functions/introspection"},"\u5185\u7701\u51fd\u6570"),"."),(0,o.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"thread_name")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7ebf\u7a0b\u540d\u79f0."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"thread_id")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u7ebf\u7a0b\u6807\u8bc6\u7b26."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query_id")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014  \u7528\u4e8e\u83b7\u53d6\u4ece",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/query_log"},"query_log")," \u7cfb\u7edf\u8868\u8fd0\u884c\u7684\u67e5\u8be2\u7684\u8be6\u7ec6\u4fe1\u606f\u67e5\u8be2\u6807\u8bc6\u7b26."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trace")," (",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/array"},"Array(UInt64)"),") \u2014 ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stack_trace"},"\u5806\u6808\u8ddf\u8e2a")," \u8868\u793a\u5b58\u50a8\u8c03\u7528\u65b9\u6cd5\u7684\u7269\u7406\u5730\u5740\u5217\u8868.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("p",null,"\u542f\u7528\u5185\u7701\u529f\u80fd:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SET allow_introspection_functions = 1;\n")),(0,o.kt)("p",null,"\u4ece ClickHouse \u76ee\u6807\u6587\u4ef6\u4e2d\u83b7\u53d6\u7b26\u53f7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH arrayMap(x -> demangle(addressToSymbol(x)), trace) AS all SELECT thread_name, thread_id, query_id, arrayStringConcat(all, '\\n') AS res FROM system.stack_trace LIMIT 1 \\G;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nthread_name: clickhouse-serv\n\nthread_id: 686\nquery_id:  1a11f70b-626d-47c1-b948-f9c7b206395d\nres:       sigqueue\nDB::StorageSystemStackTrace::fillData(std::__1::vector<COW<DB::IColumn>::mutable_ptr<DB::IColumn>, std::__1::allocator<COW<DB::IColumn>::mutable_ptr<DB::IColumn> > >&, DB::Context const&, DB::SelectQueryInfo const&) const\nDB::IStorageSystemOneBlock<DB::StorageSystemStackTrace>::read(std::__1::vector<std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >, std::__1::allocator<std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > > > const&, DB::SelectQueryInfo const&, DB::Context const&, DB::QueryProcessingStage::Enum, unsigned long, unsigned int)\nDB::InterpreterSelectQuery::executeFetchColumns(DB::QueryProcessingStage::Enum, DB::QueryPipeline&, std::__1::shared_ptr<DB::PrewhereInfo> const&, std::__1::vector<std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> >, std::__1::allocator<std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > > > const&)\nDB::InterpreterSelectQuery::executeImpl(DB::QueryPipeline&, std::__1::shared_ptr<DB::IBlockInputStream> const&, std::__1::optional<DB::Pipe>)\nDB::InterpreterSelectQuery::execute()\nDB::InterpreterSelectWithUnionQuery::execute()\nDB::executeQueryImpl(char const*, char const*, DB::Context&, bool, DB::QueryProcessingStage::Enum, bool, DB::ReadBuffer*)\nDB::executeQuery(std::__1::basic_string<char, std::__1::char_traits<char>, std::__1::allocator<char> > const&, DB::Context&, bool, DB::QueryProcessingStage::Enum, bool)\nDB::TCPHandler::runImpl()\nDB::TCPHandler::run()\nPoco::Net::TCPServerConnection::start()\nPoco::Net::TCPServerDispatcher::run()\nPoco::PooledThread::run()\nPoco::ThreadImpl::runnableEntry(void*)\nstart_thread\n__clone\n")),(0,o.kt)("p",null,"\u5728 ClickHouse \u6e90\u4ee3\u7801\u4e2d\u83b7\u53d6\u6587\u4ef6\u540d\u548c\u884c\u53f7:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH arrayMap(x -> addressToLine(x), trace) AS all, arrayFilter(x -> x LIKE '%/dbms/%', all) AS dbms SELECT thread_name, thread_id, query_id, arrayStringConcat(notEmpty(dbms) ? dbms : all, '\\n') AS res FROM system.stack_trace LIMIT 1 \\G;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nthread_name: clickhouse-serv\n\nthread_id: 686\nquery_id:  cad353e7-1c29-4b2e-949f-93e597ab7a54\nres:       /lib/x86_64-linux-gnu/libc-2.27.so\n/build/obj-x86_64-linux-gnu/../src/Storages/System/StorageSystemStackTrace.cpp:182\n/build/obj-x86_64-linux-gnu/../contrib/libcxx/include/vector:656\n/build/obj-x86_64-linux-gnu/../src/Interpreters/InterpreterSelectQuery.cpp:1338\n/build/obj-x86_64-linux-gnu/../src/Interpreters/InterpreterSelectQuery.cpp:751\n/build/obj-x86_64-linux-gnu/../contrib/libcxx/include/optional:224\n/build/obj-x86_64-linux-gnu/../src/Interpreters/InterpreterSelectWithUnionQuery.cpp:192\n/build/obj-x86_64-linux-gnu/../src/Interpreters/executeQuery.cpp:384\n/build/obj-x86_64-linux-gnu/../src/Interpreters/executeQuery.cpp:643\n/build/obj-x86_64-linux-gnu/../src/Server/TCPHandler.cpp:251\n/build/obj-x86_64-linux-gnu/../src/Server/TCPHandler.cpp:1197\n/build/obj-x86_64-linux-gnu/../contrib/poco/Net/src/TCPServerConnection.cpp:57\n/build/obj-x86_64-linux-gnu/../contrib/libcxx/include/atomic:856\n/build/obj-x86_64-linux-gnu/../contrib/poco/Foundation/include/Poco/Mutex_POSIX.h:59\n/build/obj-x86_64-linux-gnu/../contrib/poco/Foundation/include/Poco/AutoPtr.h:223\n/lib/x86_64-linux-gnu/libpthread-2.27.so\n/lib/x86_64-linux-gnu/libc-2.27.so\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/introspection"},"Introspection Functions")," \u2014 \u54ea\u4e9b\u5185\u7701\u529f\u80fd\u662f\u53ef\u7528\u7684\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u5b83\u4eec."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/trace_log"},"system.trace_log")," \u2014 \u5305\u542b\u7531\u62bd\u6837\u67e5\u8be2\u5206\u6790\u5668\u6536\u96c6\u7684\u5806\u6808\u8ddf\u8e2a."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/array-functions#array-map"},"arrayMap")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"arrayMap")," \u51fd\u6570\u7684\u63cf\u8ff0\u548c\u4f7f\u7528\u793a\u4f8b"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/functions/array-functions#array-filter"},"arrayFilter")," \u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"arrayFilter")," \u51fd\u6570\u7684\u63cf\u8ff0\u548c\u4f7f\u7528\u793a\u4f8b.")))}m.isMDXComponent=!0}}]);