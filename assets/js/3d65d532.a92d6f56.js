"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[81135],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59560:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},p="\u7cfb\u7edf\u3002trace_log",l={unversionedId:"zh/operations/system-tables/trace_log",id:"zh/operations/system-tables/trace_log",title:"\u7cfb\u7edf\u3002trace_log",description:"systemtables-tracelog}",source:"@site/docs/zh/operations/system-tables/trace_log.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/trace_log",permalink:"/docs/zh/operations/system-tables/trace_log",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/trace_log.md",tags:[],version:"current",frontMatter:{machine_translated:!0,machine_translated_rev:"5decc73b5dc60054f19087d3690c4eb99446a6c3"},sidebar:"chinese",previous:{title:"system.time_zones",permalink:"/docs/zh/operations/system-tables/time_zones"},next:{title:"system.users",permalink:"/docs/zh/operations/system-tables/users"}},c={},m=[],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-trace_log"},"\u7cfb\u7edf\u3002trace_log"),(0,i.kt)("p",null,"\u5305\u542b\u91c7\u6837\u67e5\u8be2\u63a2\u67e5\u5668\u6536\u96c6\u7684\u5806\u6808\u8ddf\u8e2a\u3002"),(0,i.kt)("p",null,"ClickHouse\u521b\u5efa\u6b64\u8868\u65f6 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-trace_log"},"trace_log")," \u670d\u52a1\u5668\u914d\u7f6e\u90e8\u5206\u88ab\u8bbe\u7f6e\u3002 \u4e5f\u662f ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#query_profiler_real_time_period_ns"},"query_profiler_real_time_period_ns")," \u548c ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#query_profiler_cpu_time_period_ns"},"query_profiler_cpu_time_period_ns")," \u5e94\u8bbe\u7f6e\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,"\u8981\u5206\u6790\u65e5\u5fd7\uff0c\u8bf7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"addressToLine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"addressToSymbol")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"demangle")," \u5185\u7701\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5217:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"event_date")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/date"},"\u65e5\u671f"),") \u2014 Date of sampling moment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"event_time")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/datetime"},"\u65e5\u671f\u65f6\u95f4"),") \u2014 Timestamp of the sampling moment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"timestamp_ns")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 Timestamp of the sampling moment in nanoseconds.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"revision")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 ClickHouse server build revision."),(0,i.kt)("p",{parentName:"li"},"\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5\u5230\u670d\u52a1\u5668 ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse-client"),"\uff0c\u4f60\u770b\u5230\u7684\u5b57\u7b26\u4e32\u7c7b\u4f3c\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"Connected to ClickHouse server version 19.18.1 revision 54429."),". \u8be5\u5b57\u6bb5\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"revision"),"\uff0c\u4f46\u4e0d\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," \u7684\u670d\u52a1\u5668\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"timer_type")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/enum"},"\u679a\u4e3e8"),") \u2014 Timer type:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Real")," \u8868\u793a\u6302\u949f\u65f6\u95f4\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CPU")," \u8868\u793aCPU\u65f6\u95f4\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"thread_number")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Thread identifier.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"query_id")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 Query identifier that can be used to get details about a query that was running from the ",(0,i.kt)("a",{parentName:"p",href:"#system_tables-query_log"},"query_log")," \u7cfb\u7edf\u8868.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"trace")," (",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/array"},"\u6570\u7ec4(UInt64)"),") \u2014 Stack trace at the moment of sampling. Each element is a virtual memory address inside ClickHouse server process."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.trace_log LIMIT 1 \\G\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nevent_date:    2019-11-15\nevent_time:    2019-11-15 15:09:38\nrevision:      54428\ntimer_type:    Real\nthread_number: 48\nquery_id:      acc4d61f-5bd1-4a3e-bc91-2180be37c915\ntrace:         [94222141367858,94222152240175,94222152325351,94222152329944,94222152330796,94222151449980,94222144088167,94222151682763,94222144088167,94222151682763,94222144088167,94222144058283,94222144059248,94222091840750,94222091842302,94222091831228,94222189631488,140509950166747,140509942945935]\n")))}d.isMDXComponent=!0}}]);