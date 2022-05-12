"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[64255],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return t?a.createElement(f,i(i({ref:n},u),{},{components:t})):a.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},52245:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),i=["components"],o={sidebar_position:55,sidebar_label:"Nullable"},s="Nullable(typename)",p={unversionedId:"en/sql-reference/data-types/nullable",id:"en/sql-reference/data-types/nullable",title:"Nullable(typename)",description:"data_type-nullable}",source:"@site/docs/en/sql-reference/data-types/nullable.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/nullable",permalink:"/docs/en/sql-reference/data-types/nullable",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/data-types/nullable.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55,sidebar_label:"Nullable"},sidebar:"english",previous:{title:"Tuple(T1, T2, ...)",permalink:"/docs/en/sql-reference/data-types/tuple"},next:{title:"Special Data Types",permalink:"/docs/en/sql-reference/data-types/special-data-types/"}},u={},c=[{value:"Storage Features",id:"storage-features",level:2},{value:"Finding NULL",id:"finding-null",level:2},{value:"Usage Example",id:"usage-example",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data_type-nullable"},"Nullable(typename)"),(0,r.kt)("p",null,"Allows to store special marker (",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/syntax"},"NULL"),") that denotes \u201cmissing value\u201d alongside normal values allowed by ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeName"),". For example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable(Int8)")," type column can store ",(0,r.kt)("inlineCode",{parentName:"p"},"Int8")," type values, and the rows that do not have a value will store ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("p",null,"For a ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeName"),", you can\u2019t use composite data types ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/tuple"},"Tuple"),". Composite data types can contain ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," type values, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Array(Nullable(Int8))"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," type field can\u2019t be included in table indexes."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," is the default value for any ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," type, unless specified otherwise in the ClickHouse server configuration."),(0,r.kt)("h2",{id:"storage-features"},"Storage Features"),(0,r.kt)("p",null,"To store ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," type values in a table column, ClickHouse uses a separate file with ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," masks in addition to normal file with values. Entries in masks file allow ClickHouse to distinguish between ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," and a default value of corresponding data type for each table row. Because of an additional file, ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," column consumes additional storage space compared to a similar normal one."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable")," almost always negatively affects performance, keep this in mind when designing your databases."))),(0,r.kt)("h2",{id:"finding-null"},"Finding NULL"),(0,r.kt)("p",null,"It is possible to find ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," values in a column by using ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," subcolumn without reading the whole column. It returns ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," if the corresponding value is ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," otherwise."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example")),(0,r.kt)("p",null,"Query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE nullable (`n` Nullable(UInt32)) ENGINE = MergeTree ORDER BY tuple();\n\nINSERT INTO nullable VALUES (1) (NULL) (2) (NULL);\n\nSELECT n.null FROM nullable;\n")),(0,r.kt)("p",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n.null\u2500\u2510\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2502      0 \u2502\n\u2502      1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"usage-example"},"Usage Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_null(x Int8, y Nullable(Int8)) ENGINE TinyLog\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO t_null VALUES (1, NULL), (2, 3)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x + y FROM t_null\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(x, y)\u2500\u2510\n\u2502       \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502          5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/data_types/nullable/"},"Original article")," "))}m.isMDXComponent=!0}}]);