"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[85211],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,E=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(E,i(i({ref:t},p),{},{components:r})):n.createElement(E,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},61058:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=["components"],o={sidebar_position:50,sidebar_label:"VIEW"},s="ALTER TABLE \u2026 MODIFY QUERY \u8bed\u53e5",c={unversionedId:"zh/sql-reference/statements/alter/view",id:"zh/sql-reference/statements/alter/view",title:"ALTER TABLE \u2026 MODIFY QUERY \u8bed\u53e5",description:"alter-modify-query}",source:"@site/docs/zh/sql-reference/statements/alter/view.md",sourceDirName:"zh/sql-reference/statements/alter",slug:"/zh/sql-reference/statements/alter/view",permalink:"/zh/sql-reference/statements/alter/view",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/statements/alter/view.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"VIEW"},sidebar:"chinese",previous:{title:"PROJECTION",permalink:"/zh/sql-reference/statements/alter/projection"},next:{title:"ALTER",permalink:"/zh/sql-reference/statements/alter"}},p={},u=[{value:"ALTER LIVE VIEW \u8bed\u53e5",id:"alter-live-view",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"alter-modify-query"},"ALTER TABLE \u2026 MODIFY QUERY \u8bed\u53e5"),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"ALTER TABLE \u2026 MODIFY QUERY"),"\u8bed\u53e5\u521b\u5efa\u4e00\u4e2a",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/create/view#materialized"},"\u7269\u5316\u89c6\u56fe"),"\u65f6\uff0c\u53ef\u4ee5\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT"),"\u67e5\u8be2\u3002\u5f53\u7269\u5316\u89c6\u56fe\u5728\u6ca1\u6709  ",(0,l.kt)("inlineCode",{parentName:"p"},"TO [db.]name")," \u7684\u60c5\u51b5\u4e0b\u521b\u5efa\u65f6\u4f7f\u7528\u5b83\u3002\u5fc5\u987b\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"allow_experimental_alter_materialized_view_structure"),"\u8bbe\u7f6e\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u7269\u5316\u89c6\u56fe\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"TO [db.]name"),"\uff0c\u4f60\u5fc5\u987b\u5148 ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/detach"},"DETACH")," \u89c6\u56fe\u3002\u7528",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/alter/"},"ALTER TABLE"),"\u4fee\u6539\u76ee\u6807\u8868\uff0c\u7136\u540e ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/attach"},"ATTACH"),"\u4e4b\u524d\u5206\u79bb\u7684(",(0,l.kt)("inlineCode",{parentName:"p"},"DETACH"),")\u89c6\u56fe\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE src_table (`a` UInt32) ENGINE = MergeTree ORDER BY a;\nCREATE MATERIALIZED VIEW mv (`a` UInt32) ENGINE = MergeTree ORDER BY a AS SELECT a FROM src_table; \nINSERT INTO src_table (a) VALUES (1), (2);\nSELECT * FROM mv;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE mv MODIFY QUERY SELECT a * 2 as a FROM src_table;\nINSERT INTO src_table (a) VALUES (3), (4);\nSELECT * FROM mv;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500a\u2500\u2510\n\u2502 6 \u2502\n\u2502 8 \u2502\n\u2514\u2500\u2500\u2500\u2518\n\u250c\u2500a\u2500\u2510\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"alter-live-view"},"ALTER LIVE VIEW \u8bed\u53e5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ALTER LIVE VIEW ... REFRESH")," \u8bed\u53e5\u5237\u65b0\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/create/view#live-view"},"\u5b9e\u65f6\u89c6\u56fe"),". \u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/create/view#live-view-alter-refresh"},"\u5f3a\u5236\u5b9e\u65f6\u89c6\u56fe\u5237\u65b0"),"."))}f.isMDXComponent=!0}}]);