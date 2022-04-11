"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[12367],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=o(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||l;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var o=2;o<l;o++)u[o]=n[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13992:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),u=["components"],i={sidebar_position:53,sidebar_label:"UUID"},p="Functions for Working with UUID",o={unversionedId:"en/sql-reference/functions/uuid-functions",id:"en/sql-reference/functions/uuid-functions",title:"Functions for Working with UUID",description:"functions-for-working-with-uuid}",source:"@site/docs/en/sql-reference/functions/uuid-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/uuid-functions",permalink:"/en/sql-reference/functions/uuid-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/functions/uuid-functions.md",tags:[],version:"current",sidebarPosition:53,frontMatter:{sidebar_position:53,sidebar_label:"UUID"},sidebar:"english",previous:{title:"Encoding",permalink:"/en/sql-reference/functions/encoding-functions"},next:{title:"URLs",permalink:"/en/sql-reference/functions/url-functions"}},s={},c=[{value:"generateUUIDv4",id:"uuid-function-generate",level:2},{value:"empty",id:"empty",level:2},{value:"notEmpty",id:"notempty",level:2},{value:"toUUID (x)",id:"touuid-x",level:2},{value:"toUUIDOrNull (x)",id:"touuidornull-x",level:2},{value:"toUUIDOrZero (x)",id:"touuidorzero-x",level:2},{value:"UUIDStringToNum",id:"uuidstringtonum",level:2},{value:"UUIDNumToString",id:"uuidnumtostring",level:2},{value:"serverUUID()",id:"server-uuid",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:c};function k(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"functions-for-working-with-uuid"},"Functions for Working with UUID"),(0,l.kt)("p",null,"The functions for working with UUID are listed below."),(0,l.kt)("h2",{id:"uuid-function-generate"},"generateUUIDv4"),(0,l.kt)("p",null,"Generates the ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/uuid"},"UUID")," of ",(0,l.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc4122#section-4.4"},"version 4"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"generateUUIDv4()\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"The UUID type value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example")),(0,l.kt)("p",null,"This example demonstrates creating a table with the UUID type column and inserting a value into the table."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_uuid (x UUID) ENGINE=TinyLog\n\nINSERT INTO t_uuid SELECT generateUUIDv4()\n\nSELECT * FROM t_uuid\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u2510\n\u2502 f4bf890f-f9dc-4332-ad5c-0c18e73f28e9 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"empty"},"empty"),(0,l.kt)("p",null,"Checks whether the input UUID is empty."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"empty(UUID)\n")),(0,l.kt)("p",null,"The UUID is considered empty if it contains all zeros (zero UUID)."),(0,l.kt)("p",null,"The function also works for ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/array-functions#function-empty"},"arrays")," or ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/string-functions#empty"},"strings"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Input UUID. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/uuid"},"UUID"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," for an empty UUID or ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," for a non-empty UUID. ")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"To generate the UUID value, ClickHouse provides the ",(0,l.kt)("a",{parentName:"p",href:"#uuid-function-generate"},"generateUUIDv4")," function."),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT empty(generateUUIDv4());\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500empty(generateUUIDv4())\u2500\u2510\n\u2502                       0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"notempty"},"notEmpty"),(0,l.kt)("p",null,"Checks whether the input UUID is non-empty."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"notEmpty(UUID)\n")),(0,l.kt)("p",null,"The UUID is considered empty if it contains all zeros (zero UUID)."),(0,l.kt)("p",null,"The function also works for ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/array-functions#function-notempty"},"arrays")," or ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/string-functions#notempty"},"strings"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Input UUID. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/uuid"},"UUID"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returns ",(0,l.kt)("inlineCode",{parentName:"li"},"1")," for a non-empty UUID or ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," for an empty UUID. ")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"To generate the UUID value, ClickHouse provides the ",(0,l.kt)("a",{parentName:"p",href:"#uuid-function-generate"},"generateUUIDv4")," function."),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT notEmpty(generateUUIDv4());\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500notEmpty(generateUUIDv4())\u2500\u2510\n\u2502                          1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"touuid-x"},"toUUID (x)"),(0,l.kt)("p",null,"Converts String type value to UUID type."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"toUUID(String)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"The UUID type value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toUUID('61f0c404-5cb3-11e7-907b-a6006ad3dba0') AS uuid\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500uuid\u2500\u2510\n\u2502 61f0c404-5cb3-11e7-907b-a6006ad3dba0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"touuidornull-x"},"toUUIDOrNull (x)"),(0,l.kt)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns NULL."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"toUUIDOrNull(String)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"The Nullable(UUID) type value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toUUIDOrNull('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500uuid\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"touuidorzero-x"},"toUUIDOrZero (x)"),(0,l.kt)("p",null,"It takes an argument of type String and tries to parse it into UUID. If failed, returns zero UUID."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"toUUIDOrZero(String)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"The UUID type value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toUUIDOrZero('61f0c404-5cb3-11e7-907b-a6006ad3dba0T') AS uuid\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500uuid\u2500\u2510\n\u2502 00000000-0000-0000-0000-000000000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"uuidstringtonum"},"UUIDStringToNum"),(0,l.kt)("p",null,"Accepts a string containing 36 characters in the format ",(0,l.kt)("inlineCode",{parentName:"p"},"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"),", and returns it as a set of bytes in a ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/fixedstring"},"FixedString(16)"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UUIDStringToNum(String)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"FixedString(16)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage examples")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    '612f3c40-5d3b-217e-707b-6a546a3d7b29' AS uuid,\n    UUIDStringToNum(uuid) AS bytes\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500bytes\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 612f3c40-5d3b-217e-707b-6a546a3d7b29 \u2502 a/<@];!~p{jTj={) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"uuidnumtostring"},"UUIDNumToString"),(0,l.kt)("p",null,"Accepts a ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/fixedstring"},"FixedString(16)")," value, and returns a string containing 36 characters in text format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"UUIDNumToString(FixedString(16))\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"String."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage example")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    'a/<@];!~p{jTj={)' AS bytes,\n    UUIDNumToString(toFixedString(bytes, 16)) AS uuid\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500bytes\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500uuid\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 a/<@];!~p{jTj={) \u2502 612f3c40-5d3b-217e-707b-6a546a3d7b29 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"server-uuid"},"serverUUID()"),(0,l.kt)("p",null,"Returns the random and unique UUID, which is generated when the server is first started and stored forever. The result writes to the file ",(0,l.kt)("inlineCode",{parentName:"p"},"uuid")," created in the ClickHouse server directory ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/clickhouse/"),". "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"serverUUID()\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The UUID of the server. ")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/uuid"},"UUID"),"."),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/functions/ext-dict-functions#ext_dict_functions-other"},"dictGetUUID"))))}k.isMDXComponent=!0}}]);