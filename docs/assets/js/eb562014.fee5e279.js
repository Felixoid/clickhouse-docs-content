"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[96240],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=i(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||c;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75809:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return u}});var r=n(87462),a=n(63366),c=(n(67294),n(3905)),o=["components"],l={sidebar_position:49,sidebar_label:"EXCHANGE"},s="EXCHANGE\u8bed\u6cd5",i={unversionedId:"zh/sql-reference/statements/exchange",id:"zh/sql-reference/statements/exchange",title:"EXCHANGE\u8bed\u6cd5",description:"exchange}",source:"@site/docs/zh/sql-reference/statements/exchange.md",sourceDirName:"zh/sql-reference/statements",slug:"/zh/sql-reference/statements/exchange",permalink:"/docs/zh/sql-reference/statements/exchange",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/exchange.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49,sidebar_label:"EXCHANGE"},sidebar:"chinese",previous:{title:"RENAME",permalink:"/docs/zh/sql-reference/statements/rename"},next:{title:"SET",permalink:"/docs/zh/sql-reference/statements/set"}},p={},u=[{value:"EXCHANGE TABLES",id:"exchange_tables",level:2},{value:"EXCHANGE DICTIONARIES",id:"exchange_dictionaries",level:2}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"exchange"},"EXCHANGE\u8bed\u6cd5"),(0,c.kt)("p",null,"\u4ee5\u539f\u5b50\u65b9\u5f0f\u4ea4\u6362\u4e24\u4e2a\u8868\u6216\u5b57\u5178\u7684\u540d\u79f0\u3002\n\u6b64\u4efb\u52a1\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528",(0,c.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/rename"},"RENAME"),"\u6765\u5b8c\u6210\uff0c\u4f46\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u64cd\u4f5c\u4e0d\u662f\u539f\u5b50\u7684\u3002"),(0,c.kt)("p",null,'!!! note "\u6ce8\u610f"\n',(0,c.kt)("inlineCode",{parentName:"p"},"EXCHANGE"),"\u4ec5\u652f\u6301",(0,c.kt)("a",{parentName:"p",href:"/docs/zh/engines/database-engines/atomic"},"Atomic"),"\u6570\u636e\u5e93\u5f15\u64ce."),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE TABLES|DICTIONARIES [db0.]name_A AND [db1.]name_B\n")),(0,c.kt)("h2",{id:"exchange_tables"},"EXCHANGE TABLES"),(0,c.kt)("p",null,"\u4ea4\u6362\u4e24\u4e2a\u8868\u7684\u540d\u79f0\u3002"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE TABLES [db0.]table_A AND [db1.]table_B\n")),(0,c.kt)("h2",{id:"exchange_dictionaries"},"EXCHANGE DICTIONARIES"),(0,c.kt)("p",null,"\u4ea4\u6362\u4e24\u4e2a\u5b57\u5178\u7684\u540d\u79f0\u3002"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"EXCHANGE DICTIONARIES [db0.]dict_A AND [db1.]dict_B\n")),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u53c2\u8003")),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/dictionaries/"},"Dictionaries"))))}f.isMDXComponent=!0}}]);