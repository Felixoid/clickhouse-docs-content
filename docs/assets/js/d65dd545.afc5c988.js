"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[39355],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93710:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"\u0414\u043e\u043c\u0435\u043d\u044b",sidebar_position:56},u="\u0414\u043e\u043c\u0435\u043d\u044b",c={unversionedId:"ru/sql-reference/data-types/domains/index",id:"ru/sql-reference/data-types/domains/index",title:"\u0414\u043e\u043c\u0435\u043d\u044b",description:"domeny}",source:"@site/docs/ru/sql-reference/data-types/domains/index.md",sourceDirName:"ru/sql-reference/data-types/domains",slug:"/ru/sql-reference/data-types/domains/",permalink:"/ru/sql-reference/data-types/domains/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/data-types/domains/index.md",tags:[],version:"current",sidebarPosition:56,frontMatter:{sidebar_label:"\u0414\u043e\u043c\u0435\u043d\u044b",sidebar_position:56},sidebar:"russia",previous:{title:"Interval",permalink:"/ru/sql-reference/data-types/special-data-types/interval"},next:{title:"IPv4",permalink:"/ru/sql-reference/data-types/domains/ipv4"}},p={},s=[{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043c\u0435\u043d\u043e\u0432",id:"dopolnitelnye-vozmozhnosti-domenov",level:3},{value:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"ogranicheniia",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"domeny"},"\u0414\u043e\u043c\u0435\u043d\u044b"),(0,i.kt)("p",null,"\u0414\u043e\u043c\u0435\u043d\u044b \u2014 \u044d\u0442\u043e \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u043e\u0432\u0435\u0440\u0445 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430. \u041d\u0430 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 ClickHouse \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0434\u043e\u043c\u0435\u043d\u044b."),(0,i.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043c\u0435\u043d\u044b \u0432\u0435\u0437\u0434\u0435, \u0433\u0434\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0439 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0442\u0438\u043f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0441 \u0434\u043e\u043c\u0435\u043d\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("li",{parentName:"ul"},"\u0427\u0442\u0435\u043d\u0438\u0435/\u0437\u0430\u043f\u0438\u0441\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0438\u0437/\u0432 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u0434\u043e\u043c\u0435\u043d\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("li",{parentName:"ul"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u043a\u0430\u043a \u0438\u043d\u0434\u0435\u043a\u0441, \u0435\u0441\u043b\u0438 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0442\u0438\u043f \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},"\u0412\u044b\u0437\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u0430, \u0438\u043c\u0435\u044e\u0449\u0435\u0433\u043e \u0434\u043e\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445."),(0,i.kt)("li",{parentName:"ul"},"\u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435.")),(0,i.kt)("h3",{id:"dopolnitelnye-vozmozhnosti-domenov"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u043e\u043c\u0435\u043d\u043e\u0432"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u042f\u0432\u043d\u043e\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,i.kt)("inlineCode",{parentName:"li"},"SHOW CREATE TABLE")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"DESCRIBE TABLE")),(0,i.kt)("li",{parentName:"ul"},"\u0412\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT INTO domain_table(domain_column) VALUES(...)")),(0,i.kt)("li",{parentName:"ul"},"\u0412\u044b\u0432\u043e\u0434 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT domain_column FROM domain_table")),(0,i.kt)("li",{parentName:"ul"},"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0432\u043d\u0435\u0448\u043d\u0435\u0433\u043e \u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a\u0430 \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u043c \u0434\u043b\u044f \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u0435: ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT INTO domain_table FORMAT CSV ..."))),(0,i.kt)("h3",{id:"ogranicheniia"},"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0434\u043e\u043c\u0435\u043d\u043d\u044b\u0439 \u0434\u043b\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u043d\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"li"},"ALTER TABLE"),"."),(0,i.kt)("li",{parentName:"ul"},"\u041d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u0435\u044f\u0432\u043d\u043e \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0432 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441 \u0434\u043e\u043c\u0435\u043d\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0438\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."),(0,i.kt)("li",{parentName:"ul"},"\u0414\u043e\u043c\u0435\u043d \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0445\u0440\u0430\u043d\u0438\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.")))}m.isMDXComponent=!0}}]);