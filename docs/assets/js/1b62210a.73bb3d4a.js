"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59412],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=l,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,c=new Array(a);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58585:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var r=n(87462),l=n(63366),a=(n(67294),n(3905)),c=["components"],o={},i="ALL \u5b50\u53e5",s={unversionedId:"zh/sql-reference/statements/select/all",id:"zh/sql-reference/statements/select/all",title:"ALL \u5b50\u53e5",description:"select-all}",source:"@site/docs/zh/sql-reference/statements/select/all.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/all",permalink:"/zh/sql-reference/statements/select/all",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/statements/select/all.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"SELECT",permalink:"/zh/sql-reference/statements/select/"},next:{title:"ARRAY JOIN",permalink:"/zh/sql-reference/statements/select/array-join"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,l.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"select-all"},"ALL \u5b50\u53e5"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SELECT ALL")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"SELECT")," \u4e0d\u5e26 ",(0,a.kt)("inlineCode",{parentName:"p"},"DISTINCT")," \u662f\u4e00\u6837\u7684\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6307\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"ALL")," \uff0c\u5219\u5ffd\u7565\u5b83\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u540c\u65f6\u6307\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"ALL")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"DISTINCT")," \uff0c\u5219\u4f1a\u629b\u51fa\u5f02\u5e38\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ALL")," \u4e5f\u53ef\u4ee5\u5728\u805a\u5408\u51fd\u6570\u4e2d\u6307\u5b9a\uff0c\u5177\u6709\u76f8\u540c\u7684\u6548\u679c\uff08\u7a7a\u64cd\u4f5c\uff09\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(ALL number) FROM numbers(10);\n")),(0,a.kt)("p",null,"\u7b49\u4e8e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT sum(number) FROM numbers(10);\n")))}f.isMDXComponent=!0}}]);