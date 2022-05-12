"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[63522],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11318:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3",sidebar_position:52,sidebar_label:"\u7cfb\u7edf\u8868"},s="\u7cfb\u7edf\u8868",p={unversionedId:"zh/operations/system-tables/index",id:"zh/operations/system-tables/index",title:"\u7cfb\u7edf\u8868",description:"system-tables}",source:"@site/docs/zh/operations/system-tables/index.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/",permalink:"/docs/zh/operations/system-tables/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/index.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3",sidebar_position:52,sidebar_label:"\u7cfb\u7edf\u8868"},sidebar:"chinese",previous:{title:"\u67e5\u8be2\u590d\u6742\u6027\u7684\u9650\u5236",permalink:"/docs/zh/operations/settings/query-complexity"},next:{title:"asynchronous_metric_log",permalink:"/docs/zh/operations/system-tables/asynchronous_metric_log"}},c={},u=[{value:"\u5f15\u8a00",id:"system-tables-introduction",level:2},{value:"\u7cfb\u7edf\u6307\u6807\u7684\u6765\u6e90",id:"system-tables-sources-of-system-metrics",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-tables"},"\u7cfb\u7edf\u8868"),(0,i.kt)("h2",{id:"system-tables-introduction"},"\u5f15\u8a00"),(0,i.kt)("p",null,"\u7cfb\u7edf\u8868\u63d0\u4f9b\u7684\u4fe1\u606f\u5982\u4e0b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u7684\u72b6\u6001\u3001\u8fdb\u7a0b\u4ee5\u53ca\u73af\u5883\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u7684\u5185\u90e8\u8fdb\u7a0b\u3002")),(0,i.kt)("p",null,"\u7cfb\u7edf\u8868:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u4e8e ",(0,i.kt)("inlineCode",{parentName:"li"},"system")," \u6570\u636e\u5e93\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4ec5\u63d0\u4f9b\u6570\u636e\u8bfb\u53d6\u529f\u80fd\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u88ab\u5220\u9664\u6216\u66f4\u6539\uff0c\u4f46\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u5206\u79bb(detach)\u64cd\u4f5c\u3002")),(0,i.kt)("p",null,"\u5927\u591a\u6570\u7cfb\u7edf\u8868\u5c06\u5176\u6570\u636e\u5b58\u50a8\u5728RAM\u4e2d\u3002 \u4e00\u4e2aClickHouse\u670d\u52a1\u5728\u521a\u542f\u52a8\u65f6\u4fbf\u4f1a\u521b\u5efa\u6b64\u7c7b\u7cfb\u7edf\u8868\u3002"),(0,i.kt)("p",null,"\u4e0d\u540c\u4e8e\u5176\u4ed6\u7cfb\u7edf\u8868\uff0c\u7cfb\u7edf\u65e5\u5fd7\u8868 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/metric_log#system_tables-metric_log"},"metric_log"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/query_log#system_tables-query_log"},"query_log"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/query_thread_log#system_tables-query_thread_log"},"query_thread_log"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/trace_log#system_tables-trace_log"},"trace_log"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/system-tables/part_log#system.part_log"},"part_log"),", crash_log and text_log \u9ed8\u8ba4\u91c7\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree")," \u5f15\u64ce\u5e76\u5c06\u5176\u6570\u636e\u5b58\u50a8\u5728\u6587\u4ef6\u7cfb\u7edf\u4e2d\u3002 \u5982\u679c\u4eba\u4e3a\u7684\u4ece\u6587\u4ef6\u7cfb\u7edf\u4e2d\u5220\u9664\u8868\uff0cClickHouse\u670d\u52a1\u5668\u4f1a\u5728\u4e0b\u4e00\u6b21\u8fdb\u884c\u6570\u636e\u5199\u5165\u65f6\u518d\u6b21\u521b\u5efa\u7a7a\u8868\u3002 \u5982\u679c\u7cfb\u7edf\u8868\u7ed3\u6784\u5728\u65b0\u7248\u672c\u4e2d\u53d1\u751f\u66f4\u6539\uff0c\u90a3\u4e48ClickHouse\u4f1a\u91cd\u547d\u540d\u5f53\u524d\u8868\u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u8868\u3002"),(0,i.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.d/"),"\u4e0b\u521b\u5efa\u4e0e\u7cfb\u7edf\u8868\u540c\u540d\u7684\u914d\u7f6e\u6587\u4ef6, \u6216\u8005\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/clickhouse-server/config.xml"),"\u4e2d\u8bbe\u7f6e\u76f8\u5e94\u914d\u7f6e\u9879\uff0c\u6765\u81ea\u5b9a\u4e49\u7cfb\u7edf\u65e5\u5fd7\u8868\u7684\u7ed3\u6784\u3002\u53ef\u4f9b\u81ea\u5b9a\u4e49\u7684\u914d\u7f6e\u9879\u5982\u4e0b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database"),": \u7cfb\u7edf\u65e5\u5fd7\u8868\u6240\u5728\u7684\u6570\u636e\u5e93\u3002\u8fd9\u4e2a\u9009\u9879\u76ee\u524d\u5df2\u7ecf\u4e0d\u63a8\u8350\u4f7f\u7528\u3002\u6240\u6709\u7684\u7cfb\u7edf\u65e5\u8868\u90fd\u4f4d\u4e8e",(0,i.kt)("inlineCode",{parentName:"li"},"system"),"\u5e93\u4e2d\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table"),": \u63a5\u6536\u6570\u636e\u5199\u5165\u7684\u7cfb\u7edf\u65e5\u5fd7\u8868\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"partition_by"),": \u6307\u5b9a",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/mergetree-family/custom-partitioning-key"},"PARTITION BY"),"\u8868\u8fbe\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ttl"),": \u6307\u5b9a\u7cfb\u7edf\u65e5\u5fd7\u8868TTL\u9009\u9879\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"flush_interval_milliseconds"),": \u6307\u5b9a\u65e5\u5fd7\u8868\u6570\u636e\u5237\u65b0\u5230\u78c1\u76d8\u7684\u65f6\u95f4\u95f4\u9694\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"engine"),": \u6307\u5b9a\u5b8c\u6574\u7684\u8868\u5f15\u64ce\u5b9a\u4e49\u3002(\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"ENGINE = "),"\u5f00\u5934)\u3002 \u8fd9\u4e2a\u9009\u9879\u4e0e",(0,i.kt)("inlineCode",{parentName:"li"},"partition_by"),"\u4ee5\u53ca",(0,i.kt)("inlineCode",{parentName:"li"},"ttl"),"\u51b2\u7a81\u3002\u5982\u679c\u4e0e\u4e24\u8005\u4e00\u8d77\u8bbe\u7f6e\uff0c\u670d\u52a1\u542f\u52a8\u65f6\u4f1a\u629b\u51fa\u5f02\u5e38\u5e76\u4e14\u9000\u51fa\u3002")),(0,i.kt)("p",null,"\u914d\u7f6e\u5b9a\u4e49\u7684\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<clickhouse>\n    <query_log>\n        <database>system</database>\n        <table>query_log</table>\n        <partition_by>toYYYYMM(event_date)</partition_by>\n        <ttl>event_date + INTERVAL 30 DAY DELETE</ttl>\n        \x3c!--\n        <engine>ENGINE = MergeTree PARTITION BY toYYYYMM(event_date) ORDER BY (event_date, event_time) SETTINGS index_granularity = 1024</engine>\n        --\x3e\n        <flush_interval_milliseconds>7500</flush_interval_milliseconds>\n    </query_log>\n</clickhouse>\n")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8868\u589e\u957f\u662f\u65e0\u9650\u7684\u3002\u53ef\u4ee5\u901a\u8fc7TTL \u5220\u9664\u8fc7\u671f\u65e5\u5fd7\u8bb0\u5f55\u7684\u8bbe\u7f6e\u6765\u63a7\u5236\u8868\u7684\u5927\u5c0f\u3002 \u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5206\u533a\u529f\u80fd ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree"),"-\u5f15\u64ce\u8868\u3002"),(0,i.kt)("h2",{id:"system-tables-sources-of-system-metrics"},"\u7cfb\u7edf\u6307\u6807\u7684\u6765\u6e90"),(0,i.kt)("p",null,"\u7528\u4e8e\u6536\u96c6ClickHouse\u670d\u52a1\u5668\u4f7f\u7528\u7684\u7cfb\u7edf\u6307\u6807:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CAP_NET_ADMIN")," \u80fd\u529b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Procfs"},"procfs")," \uff08\u4ec5\u9650\u4e8eLinux\uff09\u3002")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"procfs")),(0,i.kt)("p",null,"\u5982\u679cClickHouse\u670d\u52a1\u5668\u6ca1\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"CAP_NET_ADMIN")," \u80fd\u529b\uff0c\u90a3\u4e48\u5b83\u5c06\u8bd5\u56fe\u9000\u56de\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcfsMetricsProvider"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"ProcfsMetricsProvider")," \u5141\u8bb8\u6536\u96c6\u6bcf\u4e2a\u67e5\u8be2\u7cfb\u7edf\u6307\u6807\uff08\u5305\u62ecCPU\u548cI/O\uff09\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u7cfb\u7edf\u4e0a\u652f\u6301\u5e76\u542f\u7528procfs\uff0cClickHouse server\u5c06\u6536\u96c6\u5982\u4e0b\u6307\u6807:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OSCPUVirtualTimeMicroseconds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OSCPUWaitMicroseconds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OSIOWaitMicroseconds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OSReadChars")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OSWriteChars")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OSReadBytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"OSWriteBytes"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/"},"\u539f\u59cb\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);