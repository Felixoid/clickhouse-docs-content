"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[64136],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function u(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?u(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)r=u[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,u=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,b=m["".concat(s,".").concat(f)]||m[f]||p[f]||u;return r?t.createElement(b,a(a({ref:n},c),{},{components:r})):t.createElement(b,a({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var u=r.length,a=new Array(u);a[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<u;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98887:function(e,n,r){r.r(n),r.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var t=r(87462),o=r(63366),u=(r(67294),r(3905)),a=["components"],i={sidebar_position:39,sidebar_label:"numbers"},s="numbers",l={unversionedId:"ru/sql-reference/table-functions/numbers",id:"ru/sql-reference/table-functions/numbers",title:"numbers",description:"numbers}",source:"@site/docs/ru/sql-reference/table-functions/numbers.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/numbers",permalink:"/ru/sql-reference/table-functions/numbers",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/table-functions/numbers.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"numbers"},sidebar:"russia",previous:{title:"merge",permalink:"/ru/sql-reference/table-functions/merge"},next:{title:"remote",permalink:"/ru/sql-reference/table-functions/remote"}},c={},p=[],m={toc:p};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,u.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"numbers"},"numbers"),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"numbers(N)")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u043c ",(0,u.kt)("inlineCode",{parentName:"p"},"number")," (UInt64), \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u043e\u0442 ",(0,u.kt)("inlineCode",{parentName:"p"},"0")," \u0434\u043e ",(0,u.kt)("inlineCode",{parentName:"p"},"N-1"),".\n",(0,u.kt)("inlineCode",{parentName:"p"},"numbers(N, M)")," - \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u0435\u0434\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u043c ",(0,u.kt)("inlineCode",{parentName:"p"},"number")," (UInt64), \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u043d\u0430\u0442\u0443\u0440\u0430\u043b\u044c\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u043e\u0442 ",(0,u.kt)("inlineCode",{parentName:"p"},"N")," to ",(0,u.kt)("inlineCode",{parentName:"p"},"(N + M - 1)"),"."),(0,u.kt)("p",null,"\u0422\u0430\u043a \u0436\u0435 \u043a\u0430\u043a \u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,u.kt)("inlineCode",{parentName:"p"},"system.numbers")," \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432 \u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,u.kt)("inlineCode",{parentName:"p"},"numbers(N, M)")," \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e, \u0447\u0435\u043c \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0437 ",(0,u.kt)("inlineCode",{parentName:"p"},"system.numbers"),"."),(0,u.kt)("p",null,"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u044b:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM numbers(10);\nSELECT * FROM numbers(0,10);\nSELECT * FROM system.numbers LIMIT 10;\n")),(0,u.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0432\u0441\u0435\u0445 \u0434\u0430\u0442 \u043e\u0442 2010-01-01 \u0434\u043e 2010-12-31\nselect toDate('2010-01-01') + number as d FROM numbers(365);\n")))}f.isMDXComponent=!0}}]);