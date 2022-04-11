"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[54291],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55327:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={sidebar_label:"LIMIT"},s="LIMIT Clause",p={unversionedId:"en/sql-reference/statements/select/limit",id:"en/sql-reference/statements/select/limit",title:"LIMIT Clause",description:"limit-clause}",source:"@site/docs/en/sql-reference/statements/select/limit.md",sourceDirName:"en/sql-reference/statements/select",slug:"/en/sql-reference/statements/select/limit",permalink:"/en/sql-reference/statements/select/limit",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/statements/select/limit.md",tags:[],version:"current",frontMatter:{sidebar_label:"LIMIT"},sidebar:"english",previous:{title:"LIMIT BY",permalink:"/en/sql-reference/statements/select/limit-by"},next:{title:"OFFSET",permalink:"/en/sql-reference/statements/select/offset"}},c={},m=[{value:"LIMIT \u2026 WITH TIES Modifier",id:"limit-with-ties",level:2}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"limit-clause"},"LIMIT Clause"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT m")," allows to select the first ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," rows from the result."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT n, m")," allows to select the ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," rows from the result after skipping the first ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," rows. The ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT m OFFSET n")," syntax is equivalent."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," must be non-negative integers."),(0,i.kt)("p",null,"If there is no ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/order-by"},"ORDER BY")," clause that explicitly sorts results, the choice of rows for the result may be arbitrary and non-deterministic."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The number of rows in the result set can also depend on the ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/settings/#limit"},"limit")," setting."))),(0,i.kt)("h2",{id:"limit-with-ties"},"LIMIT \u2026 WITH TIES Modifier"),(0,i.kt)("p",null,"When you set ",(0,i.kt)("inlineCode",{parentName:"p"},"WITH TIES")," modifier for ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT n[,m]")," and specify ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY expr_list"),", you will get in result first ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"n,m")," rows and all rows with same ",(0,i.kt)("inlineCode",{parentName:"p"},"ORDER BY")," fields values equal to row at position ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT n")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"m")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"LIMIT n,m"),"."),(0,i.kt)("p",null,"This modifier also can be combined with ",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/statements/select/order-by#orderby-with-fill"},"ORDER BY \u2026 WITH FILL modifier"),"."),(0,i.kt)("p",null,"For example, the following query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM (\n    SELECT number%50 AS n FROM numbers(100)\n) ORDER BY n LIMIT 0,5\n")),(0,i.kt)("p",null,"returns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n\u2500\u2510\n\u2502 0 \u2502\n\u2502 0 \u2502\n\u2502 1 \u2502\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"but after apply ",(0,i.kt)("inlineCode",{parentName:"p"},"WITH TIES")," modifier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM (\n    SELECT number%50 AS n FROM numbers(100)\n) ORDER BY n LIMIT 0,5 WITH TIES\n")),(0,i.kt)("p",null,"it returns another rows set"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500n\u2500\u2510\n\u2502 0 \u2502\n\u2502 0 \u2502\n\u2502 1 \u2502\n\u2502 1 \u2502\n\u2502 2 \u2502\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"cause row number 6 have same value \u201c2\u201d for field ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," as row number 5"))}d.isMDXComponent=!0}}]);