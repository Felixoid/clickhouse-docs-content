"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76003],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],l={},o="system.data_skipping_indices",p={unversionedId:"zh/operations/system-tables/data_skipping_indices",id:"zh/operations/system-tables/data_skipping_indices",title:"system.data_skipping_indices",description:"system-data-skipping-indices}",source:"@site/docs/zh/operations/system-tables/data_skipping_indices.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/data_skipping_indices",permalink:"/docs/zh/operations/system-tables/data_skipping_indices",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/system-tables/data_skipping_indices.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.current_roles",permalink:"/docs/zh/operations/system-tables/current-roles"},next:{title:"system.data_type_families",permalink:"/docs/zh/operations/system-tables/data_type_families"}},c={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-data-skipping-indices"},"system.data_skipping_indices"),(0,i.kt)("p",null,"\u5305\u542b\u6709\u5173\u6240\u6709\u8868\u4e2d\u73b0\u6709\u6570\u636e\u8df3\u8fc7\u7d22\u5f15\u7684\u4fe1\u606f."),(0,i.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u5e93\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6570\u636e\u8868\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7d22\u5f15\u540d\u79f0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7d22\u5f15\u7c7b\u578b."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/string"},"String"),") \u2014 \u7d22\u5f15\u8ba1\u7b97\u8868\u8fbe\u5f0f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"granularity")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u5757\u4e2d\u9897\u7c92\u7684\u6570\u91cf."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f, \u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u89e3\u538b\u7f29\u6570\u636e\u7684\u5927\u5c0f, \u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"marks_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u6807\u8bb0\u7684\u5927\u5c0f, \u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.data_skipping_indices LIMIT 2 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:    default\ntable:       user_actions\nname:        clicks_idx\ntype:        minmax\nexpr:        clicks\ngranularity: 1\ndata_compressed_bytes:   58\ndata_uncompressed_bytes: 6\nmarks:                   48\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:    default\ntable:       users\nname:        contacts_null_idx\ntype:        minmax\nexpr:        assumeNotNull(contacts_null)\ngranularity: 1\ndata_compressed_bytes:   58\ndata_uncompressed_bytes: 6\nmarks:                   48\n")))}m.isMDXComponent=!0}}]);