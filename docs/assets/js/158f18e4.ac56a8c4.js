"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48569],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=u(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return r?n.createElement(d,o(o({ref:t},i),{},{components:r})):n.createElement(d,o({ref:t},i))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7683:function(e,t,r){r.r(t),r.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],c={sidebar_position:40,sidebar_label:"\u0420\u043e\u043b\u044c"},s="CREATE ROLE",u={unversionedId:"ru/sql-reference/statements/create/role",id:"ru/sql-reference/statements/create/role",title:"CREATE ROLE",description:"create-role-statement}",source:"@site/docs/ru/sql-reference/statements/create/role.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/role",permalink:"/ru/sql-reference/statements/create/role",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/create/role.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,sidebar_label:"\u0420\u043e\u043b\u044c"},sidebar:"russia",previous:{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",permalink:"/ru/sql-reference/statements/create/user"},next:{title:"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430",permalink:"/ru/sql-reference/statements/create/row-policy"}},i={},p=[{value:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u044f\u043c\u0438",id:"managing-roles",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b",id:"create-role-examples",level:2}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-role-statement"},"CREATE ROLE"),(0,l.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"/ru/operations/access-rights#role-management"},"\u0440\u043e\u043b\u0438"),". \u0420\u043e\u043b\u044c \u2014 \u044d\u0442\u043e \u043d\u0430\u0431\u043e\u0440 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/grant#grant-privileges"},"\u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439"),". \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0440\u043e\u043b\u044c, \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u044d\u0442\u043e\u0439 \u0440\u043e\u043b\u0438."),(0,l.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE [IF NOT EXISTS | OR REPLACE] name1 [, name2 ...]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY|WRITABLE] | PROFILE 'profile_name'] [,...]\n")),(0,l.kt)("h2",{id:"managing-roles"},"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u043b\u044f\u043c\u0438"),(0,l.kt)("p",null,"\u041e\u0434\u043d\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u043e\u043b\u0435\u0439. \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0445 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/misc#set-role-statement"},"SET ROLE"),". \u041a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u043e\u0431\u044a\u0435\u043c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u2014 \u044d\u0442\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u0432\u0441\u0435\u0445 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0439 \u0432\u0441\u0435\u0445 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u0440\u043e\u043b\u0435\u0439. \u0415\u0441\u043b\u0438 \u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043c\u0435\u044e\u0442\u0441\u044f \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438, \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u043d\u044b\u0435 \u0435\u0433\u043e \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 \u043d\u0430\u043f\u0440\u044f\u043c\u0443\u044e, \u043e\u043d\u0438 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043a \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f\u043c, \u043f\u0440\u0438\u0441\u0432\u043e\u0435\u043d\u043d\u044b\u043c \u0447\u0435\u0440\u0435\u0437 \u0440\u043e\u043b\u0438."),(0,l.kt)("p",null,"\u0420\u043e\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u0440\u0438 \u0432\u0445\u043e\u0434\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/misc#set-default-role-statement"},"SET DEFAULT ROLE")," \u0438\u043b\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/#alter-user-statement"},"ALTER USER"),"."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u043e\u0442\u0437\u044b\u0432\u0430 \u0440\u043e\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/revoke"},"REVOKE"),"."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0440\u043e\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/misc#drop-role-statement"},"DROP ROLE"),". \u0423\u0434\u0430\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u043e\u043b\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0443 \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0431\u044b\u043b\u0430 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430."),(0,l.kt)("h2",{id:"create-role-examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE ROLE accountant;\nGRANT SELECT ON db.* TO accountant;\n")),(0,l.kt)("p",null,"\u0422\u0430\u043a\u0430\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0440\u043e\u043b\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"accountant"),", \u0443 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0435\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u044f \u043d\u0430 \u0447\u0442\u0435\u043d\u0438\u0435 \u0438\u0437 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"accounting"),"."),(0,l.kt)("p",null,"\u041d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0440\u043e\u043b\u044c ",(0,l.kt)("inlineCode",{parentName:"p"},"accountant")," \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"mira"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"GRANT accountant TO mira;\n")),(0,l.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0440\u043e\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u0435\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c \u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043d\u044b\u0435 \u0435\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SET ROLE accountant;\nSELECT * FROM db.*;\n")))}f.isMDXComponent=!0}}]);