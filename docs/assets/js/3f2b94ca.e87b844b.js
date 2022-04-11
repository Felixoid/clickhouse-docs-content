"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59903],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,f=g["".concat(u,".").concat(m)]||g[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},62895:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return s}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],p={sidebar_position:131},u="groupBitmapXor",c={unversionedId:"en/sql-reference/aggregate-functions/reference/groupbitmapxor",id:"en/sql-reference/aggregate-functions/reference/groupbitmapxor",title:"groupBitmapXor",description:"groupbitmapxor}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/groupbitmapxor.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/groupbitmapxor",permalink:"/en/sql-reference/aggregate-functions/reference/groupbitmapxor",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/aggregate-functions/reference/groupbitmapxor.md",tags:[],version:"current",sidebarPosition:131,frontMatter:{sidebar_position:131},sidebar:"english",previous:{title:"groupBitmapOr",permalink:"/en/sql-reference/aggregate-functions/reference/groupbitmapor"},next:{title:"sumWithOverflow",permalink:"/en/sql-reference/aggregate-functions/reference/sumwithoverflow"}},l={},s=[],g={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"groupbitmapxor"},"groupBitmapXor"),(0,o.kt)("p",null,"Calculations the XOR of a bitmap column, return cardinality of type UInt64, if add suffix -State, then return ",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/functions/bitmap-functions"},"bitmap object"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"groupBitmapOr(expr)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"expr")," \u2013 An expression that results in ",(0,o.kt)("inlineCode",{parentName:"p"},"AggregateFunction(groupBitmap, UInt*)")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value")),(0,o.kt)("p",null,"Value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"UInt64")," type."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"DROP TABLE IF EXISTS bitmap_column_expr_test2;\nCREATE TABLE bitmap_column_expr_test2\n(\n    tag_id String,\n    z AggregateFunction(groupBitmap, UInt32)\n)\nENGINE = MergeTree\nORDER BY tag_id;\n\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag1', bitmapBuild(cast([1,2,3,4,5,6,7,8,9,10] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag2', bitmapBuild(cast([6,7,8,9,10,11,12,13,14,15] as Array(UInt32))));\nINSERT INTO bitmap_column_expr_test2 VALUES ('tag3', bitmapBuild(cast([2,4,6,8,10,12] as Array(UInt32))));\n\nSELECT groupBitmapXor(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500groupBitmapXor(z)\u2500\u2510\n\u2502              10   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT arraySort(bitmapToArray(groupBitmapXorState(z))) FROM bitmap_column_expr_test2 WHERE like(tag_id, 'tag%');\n\u250c\u2500arraySort(bitmapToArray(groupBitmapXorState(z)))\u2500\u2510\n\u2502 [1,3,5,6,8,10,11,13,14,15]                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);