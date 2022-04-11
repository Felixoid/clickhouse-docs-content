"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[3974],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},94679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={sidebar_label:"HAVING"},l="HAVING \u5b50\u53e5",s={unversionedId:"zh/sql-reference/statements/select/having",id:"zh/sql-reference/statements/select/having",title:"HAVING \u5b50\u53e5",description:"having-clause}",source:"@site/docs/zh/sql-reference/statements/select/having.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/having",permalink:"/zh/sql-reference/statements/select/having",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/statements/select/having.md",tags:[],version:"current",frontMatter:{sidebar_label:"HAVING"},sidebar:"chinese",previous:{title:"GROUP BY",permalink:"/zh/sql-reference/statements/select/group-by"},next:{title:"INTO OUTFILE",permalink:"/zh/sql-reference/statements/select/into-outfile"}},u={},p=[{value:"\u9650\u5236",id:"limitations",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"having-clause"},"HAVING \u5b50\u53e5"),(0,i.kt)("p",null,"\u5141\u8bb8\u8fc7\u6ee4\u7531 ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/group-by"},"GROUP BY")," \u751f\u6210\u7684\u805a\u5408\u7ed3\u679c. \u5b83\u7c7b\u4f3c\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/where"},"WHERE")," \uff0c\u4f46\u4e0d\u540c\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5728\u805a\u5408\u4e4b\u524d\u6267\u884c\uff0c\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"HAVING")," \u4e4b\u540e\u8fdb\u884c\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u4ece ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u751f\u6210\u7684\u805a\u5408\u7ed3\u679c\u4e2d\u901a\u8fc7\u4ed6\u4eec\u7684\u522b\u540d\u6765\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"HAVING")," \u5b50\u53e5\u3002 \u6216\u8005 ",(0,i.kt)("inlineCode",{parentName:"p"},"HAVING")," \u5b50\u53e5\u53ef\u4ee5\u7b5b\u9009\u67e5\u8be2\u7ed3\u679c\u4e2d\u672a\u8fd4\u56de\u7684\u5176\u4ed6\u805a\u5408\u7684\u7ed3\u679c\u3002"),(0,i.kt)("h2",{id:"limitations"},"\u9650\u5236"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HAVING")," \u5982\u679c\u4e0d\u6267\u884c\u805a\u5408\u5219\u65e0\u6cd5\u4f7f\u7528\u3002 \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"WHERE")," \u5219\u76f8\u53cd\u3002"))}m.isMDXComponent=!0}}]);