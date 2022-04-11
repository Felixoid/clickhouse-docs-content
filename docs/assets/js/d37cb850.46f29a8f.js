"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[17009],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),b=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=b(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),f=b(n),p=i,h=f["".concat(c,".").concat(p)]||f[p]||s[p]||a;return n?r.createElement(h,o(o({ref:e},u),{},{components:n})):r.createElement(h,o({ref:e},u))}));function p(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var b=2;b<a;b++)o[b]=n[b];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},38270:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return b},toc:function(){return s}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={},c="\u4f4d\u64cd\u4f5c\u51fd\u6570",b={unversionedId:"zh/sql-reference/functions/bit-functions",id:"zh/sql-reference/functions/bit-functions",title:"\u4f4d\u64cd\u4f5c\u51fd\u6570",description:"wei-cao-zuo-han-shu}",source:"@site/docs/zh/sql-reference/functions/bit-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/bit-functions",permalink:"/zh/sql-reference/functions/bit-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/functions/bit-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"arrayJoin\u51fd\u6570",permalink:"/zh/sql-reference/functions/array-join"},next:{title:"\u4f4d\u56fe\u51fd\u6570",permalink:"/zh/sql-reference/functions/bitmap-functions"}},u={},s=[{value:"bitAnd(a,b)",id:"bitanda-b",level:2},{value:"bitOr(a,b)",id:"bitora-b",level:2},{value:"bitXor(a,b)",id:"bitxora-b",level:2},{value:"bitNot(a)",id:"bitnota",level:2},{value:"bitShiftLeft(a,b)",id:"bitshiftlefta-b",level:2},{value:"bitShiftRight(a,b)",id:"bitshiftrighta-b",level:2},{value:"bitRotateLeft(a,b)",id:"bitrotatelefta-b",level:2},{value:"bitRotateRight(a,b)",id:"bitrotaterighta-b",level:2},{value:"bitTest(a,b)",id:"bittesta-b",level:2},{value:"bitTestAll(a,b)",id:"bittestalla-b",level:2},{value:"bitTestAny(a,b)",id:"bittestanya-b",level:2}],f={toc:s};function p(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wei-cao-zuo-han-shu"},"\u4f4d\u64cd\u4f5c\u51fd\u6570"),(0,a.kt)("p",null,"\u4f4d\u64cd\u4f5c\u51fd\u6570\u9002\u7528\u4e8eUInt8\uff0cUInt16\uff0cUInt32\uff0cUInt64\uff0cInt8\uff0cInt16\uff0cInt32\uff0cInt64\uff0cFloat32\u6216Float64\u4e2d\u7684\u4efb\u4f55\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u7ed3\u679c\u7c7b\u578b\u662f\u4e00\u4e2a\u6574\u6570\uff0c\u5176\u4f4d\u6570\u7b49\u4e8e\u5176\u53c2\u6570\u7684\u6700\u5927\u4f4d\u3002\u5982\u679c\u81f3\u5c11\u6709\u4e00\u4e2a\u53c2\u6570\u4e3a\u6709\u7b26\u6570\u5b57\uff0c\u5219\u7ed3\u679c\u4e3a\u6709\u7b26\u6570\u5b57\u3002\u5982\u679c\u53c2\u6570\u662f\u6d6e\u70b9\u6570\uff0c\u5219\u5c06\u5176\u5f3a\u5236\u8f6c\u6362\u4e3aInt64\u3002"),(0,a.kt)("h2",{id:"bitanda-b"},"bitAnd(a,b)"),(0,a.kt)("h2",{id:"bitora-b"},"bitOr(a,b)"),(0,a.kt)("h2",{id:"bitxora-b"},"bitXor(a,b)"),(0,a.kt)("h2",{id:"bitnota"},"bitNot(a)"),(0,a.kt)("h2",{id:"bitshiftlefta-b"},"bitShiftLeft(a,b)"),(0,a.kt)("h2",{id:"bitshiftrighta-b"},"bitShiftRight(a,b)"),(0,a.kt)("h2",{id:"bitrotatelefta-b"},"bitRotateLeft(a,b)"),(0,a.kt)("h2",{id:"bitrotaterighta-b"},"bitRotateRight(a,b)"),(0,a.kt)("h2",{id:"bittesta-b"},"bitTest(a,b)"),(0,a.kt)("h2",{id:"bittestalla-b"},"bitTestAll(a,b)"),(0,a.kt)("h2",{id:"bittestanya-b"},"bitTestAny(a,b)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/bit_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}p.isMDXComponent=!0}}]);