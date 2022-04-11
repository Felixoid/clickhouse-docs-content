"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23193],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=s,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},91102:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return m}});var n=r(87462),s=r(63366),a=(r(67294),r(3905)),o=["components"],i={},c="system.metrics",l={unversionedId:"zh/operations/system-tables/metrics",id:"zh/operations/system-tables/metrics",title:"system.metrics",description:"system_tables-metrics}",source:"@site/docs/zh/operations/system-tables/metrics.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/metrics",permalink:"/zh/operations/system-tables/metrics",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/operations/system-tables/metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002metric_log",permalink:"/zh/operations/system-tables/metric_log"},next:{title:"system.mutations",permalink:"/zh/operations/system-tables/mutations"}},u={},m=[],p={toc:m};function f(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-metrics"},"system.metrics"),(0,a.kt)("p",null,"\u6b64\u7cfb\u7edf\u8868\u5305\u542b\u53ef\u4ee5\u5373\u65f6\u8ba1\u7b97\u6216\u5177\u6709\u5f53\u524d\u503c\u7684\u6307\u6807\u3002\u4f8b\u5982\uff0c\u540c\u65f6\u5904\u7406\u7684\u67e5\u8be2\u6570\u91cf\u6216\u5f53\u524d\u7684\u590d\u5236\u5ef6\u8fdf\u3002\u8fd9\u4e2a\u8868\u59cb\u7ec8\u662f\u6700\u65b0\u7684\u3002"),(0,a.kt)("p",null,"\u5217:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metric")," (",(0,a.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u6307\u6807\u540d\u79f0."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," (",(0,a.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u6307\u6807\u7684\u503c."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"description")," (",(0,a.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u6307\u6807\u7684\u63cf\u8ff0.")),(0,a.kt)("p",null,"\u5bf9\u4e8e\u652f\u6301\u7684\u6307\u6807\u5217\u8868\uff0c\u60a8\u53ef\u4ee5\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/src/Common/CurrentMetrics.cpp"},"src/Common/CurrentMetrics.cpp")," ClickHouse \u7684\u6e90\u6587\u4ef6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.metrics LIMIT 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500metric\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500value\u2500\u252c\u2500description\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Query                      \u2502     1 \u2502 Number of executing queries                                                                                                                                                                      \u2502\n\u2502 Merge                      \u2502     0 \u2502 Number of executing background merges                                                                                                                                                            \u2502\n\u2502 PartMutation               \u2502     0 \u2502 Number of mutations (ALTER DELETE/UPDATE)                                                                                                                                                        \u2502\n\u2502 ReplicatedFetch            \u2502     0 \u2502 Number of data parts being fetched from replicas                                                                                                                                                \u2502\n\u2502 ReplicatedSend             \u2502     0 \u2502 Number of data parts being sent to replicas                                                                                                                                                      \u2502\n\u2502 ReplicatedChecks           \u2502     0 \u2502 Number of data parts checking for consistency                                                                                                                                                    \u2502\n\u2502 BackgroundPoolTask         \u2502     0 \u2502 Number of active tasks in BackgroundProcessingPool (merges, mutations, fetches, or replication queue bookkeeping)                                                                                \u2502\n\u2502 BackgroundSchedulePoolTask \u2502     0 \u2502 Number of active tasks in BackgroundSchedulePool. This pool is used for periodic ReplicatedMergeTree tasks, like cleaning old data parts, altering data parts, replica re-initialization, etc.   \u2502\n\u2502 DiskSpaceReservedForMerge  \u2502     0 \u2502 Disk space reserved for currently running background merges. It is slightly more than the total size of currently merging parts.                                                                     \u2502\n\u2502 DistributedSend            \u2502     0 \u2502 Number of connections to remote servers sending data that was INSERTed into Distributed tables. Both synchronous and asynchronous mode.                                                          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/operations/system-tables/asynchronous_metrics#system_tables-asynchronous_metrics"},"system.asynchronous_metrics")," \u2014 \u5305\u542b\u5468\u671f\u6027\u7684\u8ba1\u7b97\u6307\u6807\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/operations/system-tables/events#system_tables-events"},"system.events")," \u2014 \u5305\u542b\u53d1\u751f\u7684\u4e00\u4e9b\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/operations/system-tables/metric_log#system_tables-metric_log"},"system.metric_log")," \u2014 \u5305\u542b",(0,a.kt)("inlineCode",{parentName:"li"},"system.metrics"),"\u8868\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"system.events"),"\u8868\u7684\u5386\u53f2\u6307\u6807\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/operations/monitoring"},"\u76d1\u63a7")," \u2014 ClickHouse \u76d1\u63a7\u7684\u57fa\u672c\u6982\u5ff5\u3002")))}f.isMDXComponent=!0}}]);