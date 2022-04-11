"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[71934],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,d=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return f}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_label:"INTO OUTFILE"},c="INTO OUTFILE \u5b50\u53e5",s={unversionedId:"zh/sql-reference/statements/select/into-outfile",id:"zh/sql-reference/statements/select/into-outfile",title:"INTO OUTFILE \u5b50\u53e5",description:"into-outfile-clause}",source:"@site/docs/zh/sql-reference/statements/select/into-outfile.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/into-outfile",permalink:"/zh/sql-reference/statements/select/into-outfile",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/statements/select/into-outfile.md",tags:[],version:"current",frontMatter:{sidebar_label:"INTO OUTFILE"},sidebar:"chinese",previous:{title:"HAVING",permalink:"/zh/sql-reference/statements/select/having"},next:{title:"JOIN",permalink:"/zh/sql-reference/statements/select/join"}},u={},f=[{value:"\u5b9e\u73b0\u7ec6\u8282",id:"implementation-details",level:2}],p={toc:f};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"into-outfile-clause"},"INTO OUTFILE \u5b50\u53e5"),(0,o.kt)("p",null,"\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"INTO OUTFILE filename")," \u5b50\u53e5\uff08\u5176\u4e2dfilename\u662f\u5b57\u7b26\u4e32\uff09 ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT query")," \u5c06\u5176\u8f93\u51fa\u91cd\u5b9a\u5411\u5230\u5ba2\u6237\u7aef\u4e0a\u7684\u6307\u5b9a\u6587\u4ef6\u3002"),(0,o.kt)("h2",{id:"implementation-details"},"\u5b9e\u73b0\u7ec6\u8282"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6b64\u529f\u80fd\u662f\u5728\u53ef\u7528 ",(0,o.kt)("a",{parentName:"li",href:"/zh/interfaces/cli"},"\u547d\u4ee4\u884c\u5ba2\u6237\u7aef")," \u548c ",(0,o.kt)("a",{parentName:"li",href:"/zh/operations/utilities/clickhouse-local"},"clickhouse-local"),". \u56e0\u6b64\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"li",href:"/zh/interfaces/http"},"HTTP\u63a5\u53e3")," \u53d1\u9001\u67e5\u8be2\u5c06\u4f1a\u5931\u8d25\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u5177\u6709\u76f8\u540c\u6587\u4ef6\u540d\u7684\u6587\u4ef6\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u67e5\u8be2\u5c06\u5931\u8d25\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c ",(0,o.kt)("a",{parentName:"li",href:"/zh/interfaces/formats"},"\u8f93\u51fa\u683c\u5f0f")," \u662f ",(0,o.kt)("inlineCode",{parentName:"li"},"TabSeparated")," \uff08\u5c31\u50cf\u5728\u547d\u4ee4\u884c\u5ba2\u6237\u7aef\u6279\u5904\u7406\u6a21\u5f0f\u4e2d\u4e00\u6837\uff09\u3002")))}m.isMDXComponent=!0}}]);