"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[42460],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(y,o(o({ref:n},p),{},{components:t})):r.createElement(y,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77737:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={},l="\u5b57\u5178",s={unversionedId:"zh/engines/table-engines/special/dictionary",id:"zh/engines/table-engines/special/dictionary",title:"\u5b57\u5178",description:"dictionary}",source:"@site/docs/zh/engines/table-engines/special/dictionary.md",sourceDirName:"zh/engines/table-engines/special",slug:"/zh/engines/table-engines/special/dictionary",permalink:"/docs/zh/engines/table-engines/special/dictionary",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/special/dictionary.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u7f13\u51b2\u533a",permalink:"/docs/zh/engines/table-engines/special/buffer"},next:{title:"\u7528\u4e8e\u67e5\u8be2\u5904\u7406\u7684\u5916\u90e8\u6570\u636e",permalink:"/docs/zh/engines/table-engines/special/external-data"}},p={},u=[],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dictionary"},"\u5b57\u5178"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary")," \u5f15\u64ce\u5c06\u5b57\u5178\u6570\u636e\u5c55\u793a\u4e3a\u4e00\u4e2aClickHouse\u7684\u8868\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u8003\u8651\u4f7f\u7528\u4e00\u4e2a\u5177\u6709\u4ee5\u4e0b\u914d\u7f6e\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," \u5b57\u5178\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionaries>\n<dictionary>\n        <name>products</name>\n        <source>\n            <odbc>\n                <table>products</table>\n                <connection_string>DSN=some-db-server</connection_string>\n            </odbc>\n        </source>\n        <lifetime>\n            <min>300</min>\n            <max>360</max>\n        </lifetime>\n        <layout>\n            <flat/>\n        </layout>\n        <structure>\n            <id>\n                <name>product_id</name>\n            </id>\n            <attribute>\n                <name>title</name>\n                <type>String</type>\n                <null_value></null_value>\n            </attribute>\n        </structure>\n</dictionary>\n</dictionaries>\n")),(0,a.kt)("p",null,"\u67e5\u8be2\u5b57\u5178\u4e2d\u7684\u6570\u636e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select name, type, key, attribute.names, attribute.types, bytes_allocated, element_count,source from system.dictionaries where name = 'products';\n\nSELECT\n    name,\n    type,\n    key,\n    attribute.names,\n    attribute.types,\n    bytes_allocated,\n    element_count,\n    source\nFROM system.dictionaries\nWHERE name = 'products'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500type\u2500\u252c\u2500key\u2500\u2500\u2500\u2500\u252c\u2500attribute.names\u2500\u252c\u2500attribute.types\u2500\u252c\u2500bytes_allocated\u2500\u252c\u2500element_count\u2500\u252c\u2500source\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 products \u2502 Flat \u2502 UInt64 \u2502 ['title']       \u2502 ['String']      \u2502        23065376 \u2502        175032 \u2502 ODBC: .products \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/special/dictionary"},"dictGet","*")," \u51fd\u6570\u6765\u83b7\u53d6\u8fd9\u79cd\u683c\u5f0f\u7684\u5b57\u5178\u6570\u636e\u3002"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u83b7\u53d6\u539f\u59cb\u6570\u636e\uff0c\u6216\u8005\u662f\u60f3\u8981\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," \u64cd\u4f5c\u7684\u65f6\u5019\uff0c\u8fd9\u79cd\u89c6\u56fe\u5e76\u6ca1\u6709\u4ec0\u4e48\u5e2e\u52a9\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dictionary")," \u5f15\u64ce\uff0c\u5b83\u53ef\u4ee5\u5c06\u5b57\u5178\u6570\u636e\u5c55\u793a\u5728\u8868\u4e2d\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CREATE TABLE %table_name% (%fields%) engine = Dictionary(%dictionary_name%)`\n")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"create table products (product_id UInt64, title String) Engine = Dictionary(products);\n\nCREATE TABLE products\n(\n    product_id UInt64,\n    title String,\n)\nENGINE = Dictionary(products)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Ok.\n\n0 rows in set. Elapsed: 0.004 sec.\n")),(0,a.kt)("p",null,"\u770b\u4e00\u770b\u8868\u4e2d\u7684\u5185\u5bb9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select * from products limit 1;\n\nSELECT *\nFROM products\nLIMIT 1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u250c\u2500\u2500\u2500\u2500product_id\u2500\u252c\u2500title\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502        152689 \u2502 Some item       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 rows in set. Elapsed: 0.006 sec.\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/dictionary/"},"\u6765\u6e90\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);