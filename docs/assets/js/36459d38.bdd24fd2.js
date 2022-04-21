"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[41992],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(o,".").concat(f)]||p[f]||c[f]||i;return n?a.createElement(d,l(l({ref:t},m),{},{components:n})):a.createElement(d,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95534:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={},o="quota_limits",u={unversionedId:"en/operations/system-tables/quota_limits",id:"en/operations/system-tables/quota_limits",title:"quota_limits",description:"systemtables-quotalimits}",source:"@site/docs/en/operations/system-tables/quota_limits.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/quota_limits",permalink:"/docs/en/operations/system-tables/quota_limits",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/operations/system-tables/quota_limits.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"query_views_log",permalink:"/docs/en/operations/system-tables/query_views_log"},next:{title:"quota_usage",permalink:"/docs/en/operations/system-tables/quota_usage"}},m={},c=[],p={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-quota_limits"},"quota_limits"),(0,i.kt)("p",null,"Contains information about maximums for all intervals of all quotas. Any number of rows or zero can correspond to one quota."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quota_name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),") \u2014 Quota name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"duration")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Length of the time interval for calculating resource consumption, in seconds."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_randomized_interval")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint#uint-ranges"},"UInt8"),") \u2014 Logical value. It shows whether the interval is randomized. Interval always starts at the same time if it is not randomized. For example, an interval of 1 minute always starts at an integer number of minutes (i.e.\xa0it can start at 11:20:00, but it never starts at 11:20:01), an interval of one day always starts at midnight UTC. If interval is randomized, the very first interval starts at random time, and subsequent intervals starts one by one. Values:"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0")," \u2014 Interval is not randomized."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," \u2014 Interval is randomized."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_queries")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_query_selects")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of select queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_query_inserts")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of insert queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_errors")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of errors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_result_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of result rows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_result_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of RAM volume in bytes used to store a queries result."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_read_rows")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of rows read from all tables and table functions participated in queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_read_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt64"),")) \u2014 Maximum number of bytes read from all tables and table functions participated in queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_execution_time")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/nullable"},"Nullable"),"(",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float64"),")) \u2014 Maximum of the query execution time, in seconds.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/quota_limits"},"Original article")," "))}f.isMDXComponent=!0}}]);