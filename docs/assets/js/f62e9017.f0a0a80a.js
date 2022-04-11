"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[71007],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,O=f["".concat(i,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(O,c(c({ref:t},u),{},{components:r})):n.createElement(O,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},21423:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],l={sidebar_position:47,sidebar_label:"ROW POLICY"},i="ALTER ROW POLICY",s={unversionedId:"en/sql-reference/statements/alter/row-policy",id:"en/sql-reference/statements/alter/row-policy",title:"ALTER ROW POLICY",description:"alter-row-policy-statement}",source:"@site/docs/en/sql-reference/statements/alter/row-policy.md",sourceDirName:"en/sql-reference/statements/alter",slug:"/en/sql-reference/statements/alter/row-policy",permalink:"/en/sql-reference/statements/alter/row-policy",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/statements/alter/row-policy.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47,sidebar_label:"ROW POLICY"},sidebar:"english",previous:{title:"ROLE",permalink:"/en/sql-reference/statements/alter/role"},next:{title:"SETTINGS PROFILE",permalink:"/en/sql-reference/statements/alter/settings-profile"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alter-row-policy-statement"},"ALTER ROW POLICY"),(0,a.kt)("p",null,"Changes row policy."),(0,a.kt)("p",null,"Syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER [ROW] POLICY [IF EXISTS] name1 [ON CLUSTER cluster_name1] ON [database1.]table1 [RENAME TO new_name1]\n        [, name2 [ON CLUSTER cluster_name2] ON [database2.]table2 [RENAME TO new_name2] ...]\n    [AS {PERMISSIVE | RESTRICTIVE}]\n    [FOR SELECT]\n    [USING {condition | NONE}][,...]\n    [TO {role [,...] | ALL | ALL EXCEPT role [,...]}]\n")))}m.isMDXComponent=!0}}]);