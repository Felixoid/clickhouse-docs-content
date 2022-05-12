"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[65341],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return y}});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=i(n),y=s,f=p["".concat(c,".").concat(y)]||p[y]||u[y]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1519:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var r=n(87462),s=n(63366),a=(n(67294),n(3905)),o=["components"],l={},c="system.asynchronous_metrics",i={unversionedId:"zh/operations/system-tables/asynchronous_metrics",id:"zh/operations/system-tables/asynchronous_metrics",title:"system.asynchronous_metrics",description:"systemtables-asynchronousmetrics}",source:"@site/docs/zh/operations/system-tables/asynchronous_metrics.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/asynchronous_metrics",permalink:"/docs/zh/operations/system-tables/asynchronous_metrics",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/asynchronous_metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"asynchronous_metric_log",permalink:"/docs/zh/operations/system-tables/asynchronous_metric_log"},next:{title:"system.clusters",permalink:"/docs/zh/operations/system-tables/clusters"}},m={},u=[],p={toc:u};function y(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system_tables-asynchronous_metrics"},"system.asynchronous_metrics"),(0,a.kt)("p",null,"\u5305\u542b\u5728\u540e\u53f0\u5b9a\u671f\u8ba1\u7b97\u7684\u6307\u6807\u3002 \u4f8b\u5982\uff0c\u5728\u4f7f\u7528\u7684RAM\u91cf\u3002"),(0,a.kt)("p",null,"\u5217:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"metric")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"\u5b57\u7b26\u4e32"),") \u2014 \u6307\u6807\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," (",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float"},"Float64"),") \u2014 \u6307\u6807\u503c\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.asynchronous_metrics LIMIT 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500metric\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500value\u2500\u2510\n\u2502 jemalloc.background_thread.run_interval \u2502          0 \u2502\n\u2502 jemalloc.background_thread.num_runs     \u2502          0 \u2502\n\u2502 jemalloc.background_thread.num_threads  \u2502          0 \u2502\n\u2502 jemalloc.retained                       \u2502  422551552 \u2502\n\u2502 jemalloc.mapped                         \u2502 1682989056 \u2502\n\u2502 jemalloc.resident                       \u2502 1656446976 \u2502\n\u2502 jemalloc.metadata_thp                   \u2502          0 \u2502\n\u2502 jemalloc.metadata                       \u2502   10226856 \u2502\n\u2502 UncompressedCacheCells                  \u2502          0 \u2502\n\u2502 MarkCacheFiles                          \u2502          0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/monitoring"},"\u76d1\u63a7")," \u2014 ClickHouse\u76d1\u63a7\u7684\u57fa\u672c\u6982\u5ff5\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/metrics#system_tables-metrics"},"system.metrics")," \u2014 \u5305\u542b\u5373\u65f6\u8ba1\u7b97\u7684\u6307\u6807\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/events#system_tables-events"},"system.events")," \u2014 \u5305\u542b\u5df2\u53d1\u751f\u7684\u4e8b\u4ef6\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/system-tables/metric_log#system_tables-metric_log"},"system.metric_log")," \u2014 \u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"system.metrics")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"system.events")," \u8868\u4e2d\u7684\u6307\u6807\u7684\u5386\u53f2\u503c\u3002")))}y.isMDXComponent=!0}}]);