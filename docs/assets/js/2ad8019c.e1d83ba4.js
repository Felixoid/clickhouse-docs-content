"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12387],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89822:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_position:49,sidebar_label:"DateTime64"},s="Datetime64",p={unversionedId:"en/sql-reference/data-types/datetime64",id:"en/sql-reference/data-types/datetime64",title:"Datetime64",description:"data_type-datetime64}",source:"@site/docs/en/sql-reference/data-types/datetime64.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/datetime64",permalink:"/en/sql-reference/data-types/datetime64",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/data-types/datetime64.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49,sidebar_label:"DateTime64"},sidebar:"english",previous:{title:"DateTime",permalink:"/en/sql-reference/data-types/datetime"},next:{title:"Enum",permalink:"/en/sql-reference/data-types/enum"}},m={},u=[{value:"Examples",id:"examples",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data_type-datetime64"},"Datetime64"),(0,i.kt)("p",null,"Allows to store an instant in time, that can be expressed as a calendar date and a time of a day, with defined sub-second precision"),(0,i.kt)("p",null,"Tick size (precision): 10",(0,i.kt)("sup",null,"-precision")," seconds. Valid range: ","[ 0 : 9 ]",".\nTypically are used - 3 (milliseconds), 6 (microseconds), 9 (nanoseconds)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"DateTime64(precision, [timezone])\n")),(0,i.kt)("p",null,"Internally, stores data as a number of \u2018ticks\u2019 since epoch start (1970-01-01 00:00:00 UTC) as Int64. The tick resolution is determined by the precision parameter. Additionally, the ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," type can store time zone that is the same for the entire column, that affects how the values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," type values are displayed in text format and how the values specified as strings are parsed (\u20182020-01-01 05:00:01.000\u2019). The time zone is not stored in the rows of the table (or in resultset), but is stored in the column metadata. See details in ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"DateTime"),"."),(0,i.kt)("p",null,"Supported range of values: ","[","1925-01-01 00:00:00, 2283-11-11 23:59:59.99999999","]"," (Note: The precision of the maximum value is 8)."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creating a table with ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64"),"-type column and inserting data into it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE dt\n(\n    `timestamp` DateTime64(3, 'Asia/Istanbul'),\n    `event_id` UInt8\n)\nENGINE = TinyLog;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO dt Values (1546300800000, 1), ('2019-01-01 00:00:00', 2);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 03:00:00.000 \u2502        1 \u2502\n\u2502 2019-01-01 00:00:00.000 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When inserting datetime as an integer, it is treated as an appropriately scaled Unix Timestamp (UTC). ",(0,i.kt)("inlineCode",{parentName:"li"},"1546300800000")," (with precision 3) represents ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'")," UTC. However, as ",(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," column has ",(0,i.kt)("inlineCode",{parentName:"li"},"Asia/Istanbul")," (UTC+3) timezone specified, when outputting as a string the value will be shown as ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 03:00:00'"),"."),(0,i.kt)("li",{parentName:"ul"},"When inserting string value as datetime, it is treated as being in column timezone. ",(0,i.kt)("inlineCode",{parentName:"li"},"'2019-01-01 00:00:00'")," will be treated as being in ",(0,i.kt)("inlineCode",{parentName:"li"},"Asia/Istanbul")," timezone and stored as ",(0,i.kt)("inlineCode",{parentName:"li"},"1546290000000"),".")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Filtering on ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64")," values")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM dt WHERE timestamp = toDateTime64('2019-01-01 00:00:00', 3, 'Asia/Istanbul');\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500timestamp\u2500\u252c\u2500event_id\u2500\u2510\n\u2502 2019-01-01 00:00:00.000 \u2502        2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Unlike ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DateTime64")," values are not converted from ",(0,i.kt)("inlineCode",{parentName:"p"},"String")," automatically."),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Getting a time zone for a ",(0,i.kt)("inlineCode",{parentName:"li"},"DateTime64"),"-type value:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDateTime64(now(), 3, 'Asia/Istanbul') AS column, toTypeName(column) AS x;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500column\u2500\u252c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2019-10-16 04:12:04.000 \u2502 DateTime64(3, 'Asia/Istanbul') \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Timezone conversion")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\ntoDateTime64(timestamp, 3, 'Europe/London') as lon_time,\ntoDateTime64(timestamp, 3, 'Asia/Istanbul') as mos_time\nFROM dt;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500lon_time\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500mos_time\u2500\u2510\n\u2502 2019-01-01 00:00:00.000 \u2502 2019-01-01 03:00:00.000 \u2502\n\u2502 2018-12-31 21:00:00.000 \u2502 2019-01-01 00:00:00.000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/type-conversion-functions"},"Type conversion functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/date-time-functions"},"Functions for working with dates and times")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/array-functions"},"Functions for working with arrays")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#settings-date_time_input_format"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"date_time_input_format")," setting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/settings/#settings-date_time_output_format"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"date_time_output_format")," setting")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/operations/server-configuration-parameters/settings#server_configuration_parameters-timezone"},"The ",(0,i.kt)("inlineCode",{parentName:"a"},"timezone")," server configuration parameter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/operators/#operators-datetime"},"Operators for working with dates and times")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/date"},(0,i.kt)("inlineCode",{parentName:"a"},"Date")," data type")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/datetime"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")," data type"))))}d.isMDXComponent=!0}}]);