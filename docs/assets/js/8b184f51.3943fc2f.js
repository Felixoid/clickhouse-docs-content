"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[52886],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),k=r,y=m["".concat(o,".").concat(k)]||m[k]||c[k]||l;return t?a.createElement(y,p(p({ref:n},u),{},{components:t})):a.createElement(y,p({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=m;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77793:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),p=["components"],i={sidebar_position:65,sidebar_label:"Map(key, value)"},o="Map(key, value)",s={unversionedId:"en/sql-reference/data-types/map",id:"en/sql-reference/data-types/map",title:"Map(key, value)",description:"data_type-map}",source:"@site/docs/en/sql-reference/data-types/map.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/map",permalink:"/en/sql-reference/data-types/map",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/data-types/map.md",tags:[],version:"current",sidebarPosition:65,frontMatter:{sidebar_position:65,sidebar_label:"Map(key, value)"},sidebar:"english",previous:{title:"Geo",permalink:"/en/sql-reference/data-types/geo"},next:{title:"SimpleAggregateFunction",permalink:"/en/sql-reference/data-types/simpleaggregatefunction"}},u={},c=[{value:"Convert Tuple to Map Type",id:"map-and-tuple",level:2},{value:"Map.keys and Map.values Subcolumns",id:"map-subcolumns",level:2}],m={toc:c};function k(e){var n=e.components,t=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data_type-map"},"Map(key, value)"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Map(key, value)")," data type stores ",(0,l.kt)("inlineCode",{parentName:"p"},"key:value")," pairs."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u2014 The key part of the pair. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/lowcardinality"},"LowCardinality"),", or ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/fixedstring"},"FixedString"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u2014 The value part of the pair. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/array"},"Array"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/lowcardinality"},"LowCardinality"),", or ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/fixedstring"},"FixedString"),".")),(0,l.kt)("p",null,"To get the value from an ",(0,l.kt)("inlineCode",{parentName:"p"},"a Map('key', 'value')")," column, use ",(0,l.kt)("inlineCode",{parentName:"p"},"a['key']")," syntax. This lookup works now with a linear complexity."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Consider the table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE table_map (a Map(String, UInt64)) ENGINE=Memory;\nINSERT INTO table_map VALUES ({'key1':1, 'key2':10}), ({'key1':2,'key2':20}), ({'key1':3,'key2':30});\n")),(0,l.kt)("p",null,"Select all ",(0,l.kt)("inlineCode",{parentName:"p"},"key2")," values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT a['key2'] FROM table_map;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key2')\u2500\u2510\n\u2502                      10 \u2502\n\u2502                      20 \u2502\n\u2502                      30 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"If there's no such ",(0,l.kt)("inlineCode",{parentName:"p"},"key")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Map()")," column, the query returns zeros for numerical values, empty strings or empty arrays."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO table_map VALUES ({'key3':100}), ({});\nSELECT a['key3'] FROM table_map;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                     100 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\u250c\u2500arrayElement(a, 'key3')\u2500\u2510\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"map-and-tuple"},"Convert Tuple to Map Type"),(0,l.kt)("p",null,"You can cast ",(0,l.kt)("inlineCode",{parentName:"p"},"Tuple()")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"Map()")," using ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT CAST(([1, 2, 3], ['Ready', 'Steady', 'Go']), 'Map(UInt8, String)') AS map;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500map\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 {1:'Ready',2:'Steady',3:'Go'} \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"map-subcolumns"},"Map.keys and Map.values Subcolumns"),(0,l.kt)("p",null,"To optimize ",(0,l.kt)("inlineCode",{parentName:"p"},"Map")," column processing, in some cases you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"keys")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"values")," subcolumns instead of reading the whole column."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_map (`a` Map(String, UInt64)) ENGINE = Memory;\n\nINSERT INTO t_map VALUES (map('key1', 1, 'key2', 2, 'key3', 3));\n\nSELECT a.keys FROM t_map;\n\nSELECT a.values FROM t_map;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a.keys\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['key1','key2','key3'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\u250c\u2500a.values\u2500\u2510\n\u2502 [1,2,3]  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/tuple-map-functions#function-map"},"map()")," function"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/type-conversion-functions#type_conversion_function-cast"},"CAST()")," function")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data-types/map/"},"Original article")," "))}k.isMDXComponent=!0}}]);