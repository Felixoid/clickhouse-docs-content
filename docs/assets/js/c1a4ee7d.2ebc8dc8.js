"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[15216],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(t),m=r,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||i;return t?a.createElement(f,s(s({ref:n},p),{},{components:t})):a.createElement(f,s({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},87882:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),s=["components"],o={toc_folder_title:"Database Engines",toc_priority:27,toc_title:"Introduction"},l="Database Engines",c={unversionedId:"en/engines/database-engines/index",id:"en/engines/database-engines/index",title:"Database Engines",description:"database-engines}",source:"@site/docs/en/engines/database-engines/index.md",sourceDirName:"en/engines/database-engines",slug:"/en/engines/database-engines/",permalink:"/en/engines/database-engines/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/engines/database-engines/index.md",tags:[],version:"current",frontMatter:{toc_folder_title:"Database Engines",toc_priority:27,toc_title:"Introduction"},sidebar:"english",previous:{title:"Engines",permalink:"/en/engines"},next:{title:"Atomic",permalink:"/en/engines/database-engines/atomic"}},p={},u=[],g={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-engines"},"Database Engines"),(0,i.kt)("p",null,"Database engines allow you to work with tables. By default, ClickHouse uses the ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/database-engines/atomic"},"Atomic")," database engine, which provides configurable ",(0,i.kt)("a",{parentName:"p",href:"/en/engines/table-engines/"},"table engines")," and an ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/syntax"},"SQL dialect"),"."),(0,i.kt)("p",null,"Here is a complete list of available database engines. Follow the links for more details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/engines/database-engines/atomic"},"Atomic"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/engines/database-engines/mysql"},"MySQL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/engines/database-engines/materialized-mysql"},"MaterializedMySQL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/engines/database-engines/lazy"},"Lazy"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/engines/database-engines/postgresql"},"PostgreSQL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/engines/database-engines/replicated"},"Replicated"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/en/engines/database-engines/sqlite"},"SQLite")))))}m.isMDXComponent=!0}}]);