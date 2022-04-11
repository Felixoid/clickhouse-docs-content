"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[95471],{3905:function(e,n,l){l.d(n,{Zo:function(){return s},kt:function(){return m}});var t=l(67294);function a(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function u(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){a(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function p(e,n){if(null==e)return{};var l,t,a=function(e,n){if(null==e)return{};var l,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||(a[l]=e[l]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=t.createContext({}),o=function(e){var n=t.useContext(i),l=n;return e&&(l="function"==typeof e?e(n):u(u({},n),e)),l},s=function(e){var n=o(e.components);return t.createElement(i.Provider,{value:n},e.children)},N={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var l=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=o(l),m=a,c=k["".concat(i,".").concat(m)]||k[m]||N[m]||r;return l?t.createElement(c,u(u({ref:n},s),{},{components:l})):t.createElement(c,u({ref:n},s))}));function m(e,n){var l=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=l.length,u=new Array(r);u[0]=k;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,u[1]=p;for(var o=2;o<r;o++)u[o]=l[o];return t.createElement.apply(null,u)}return t.createElement.apply(null,l)}k.displayName="MDXCreateElement"},50174:function(e,n,l){l.r(n),l.d(n,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return o},toc:function(){return N}});var t=l(87462),a=l(63366),r=(l(67294),l(3905)),u=["components"],p={sidebar_position:63,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438"},i="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438",o={unversionedId:"ru/sql-reference/functions/functions-for-nulls",id:"ru/sql-reference/functions/functions-for-nulls",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438",description:"funktsii-dlia-raboty-s-nullable-argumentami}",source:"@site/docs/ru/sql-reference/functions/functions-for-nulls.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/functions-for-nulls",permalink:"/ru/sql-reference/functions/functions-for-nulls",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/functions/functions-for-nulls.md",tags:[],version:"current",sidebarPosition:63,frontMatter:{sidebar_position:63,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u043c\u0438 S2",permalink:"/ru/sql-reference/functions/geo/s2"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u0430\u0448\u0438\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",permalink:"/ru/sql-reference/functions/machine-learning-functions"}},s={},N=[{value:"isNull",id:"isnull",level:2},{value:"isNotNull",id:"isnotnull",level:2},{value:"coalesce",id:"coalesce",level:2},{value:"ifNull",id:"ifnull",level:2},{value:"nullIf",id:"nullif",level:2},{value:"assumeNotNull",id:"assumenotnull",level:2},{value:"toNullable",id:"tonullable",level:2}],k={toc:N};function m(e){var n=e.components,l=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,t.Z)({},k,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"funktsii-dlia-raboty-s-nullable-argumentami"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 Nullable-\u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438"),(0,r.kt)("h2",{id:"isnull"},"isNull"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,r.kt)("a",{parentName:"p",href:"/ru/sql-reference/syntax#null-literal"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"isNull(x)\n")),(0,r.kt)("p",null,"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: ",(0,r.kt)("inlineCode",{parentName:"p"},"ISNULL"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043d\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),", \u0435\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),", \u0435\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM t_null WHERE isNull(y);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2510\n\u2502 1 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"isnotnull"},"isNotNull"),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 ",(0,r.kt)("a",{parentName:"p",href:"/ru/sql-reference/syntax#null-literal"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"isNotNull(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043d\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),", \u0435\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"1"),", \u0435\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT x FROM t_null WHERE isNotNull(y);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2510\n\u2502 2 \u2502\n\u2514\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"coalesce"},"coalesce"),(0,r.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u043b\u0435\u0432\u0430-\u043d\u0430\u043f\u0440\u0430\u0432\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL")," \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0435\u0440\u0432\u044b\u0439 \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"coalesce(x,...)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043d\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430. \u0412\u0441\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b \u043f\u043e \u0442\u0438\u043f\u0443 \u0434\u0430\u043d\u043d\u044b\u0445.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u041f\u0435\u0440\u0432\u044b\u0439 \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL")," \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),", \u0435\u0441\u043b\u0438 \u0432\u0441\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0430\u0434\u0440\u0435\u0441\u043d\u0443\u044e \u043a\u043d\u0438\u0433\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0441\u0432\u044f\u0437\u0438 \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500mail\u2500\u252c\u2500phone\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500icq\u2500\u2510\n\u2502 client 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 123-45-67 \u2502  123 \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502 \u1d3a\u1d41\u1d38\u1d38      \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u041f\u043e\u043b\u044f ",(0,r.kt)("inlineCode",{parentName:"p"},"mail")," \u0438 ",(0,r.kt)("inlineCode",{parentName:"p"},"phone")," \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f String, \u0430 \u043f\u043e\u043b\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"icq")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"UInt32"),", \u0435\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u0432 ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"."),(0,r.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0438\u043c \u0438\u0437 \u0430\u0434\u0440\u0435\u0441\u043d\u043e\u0439 \u043a\u043d\u0438\u0433\u0438 \u043f\u0435\u0440\u0432\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT coalesce(mail, phone, CAST(icq,'Nullable(String)')) FROM aBook;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u252c\u2500coalesce(mail, phone, CAST(icq, 'Nullable(String)'))\u2500\u2510\n\u2502 client 1 \u2502 123-45-67                                            \u2502\n\u2502 client 2 \u2502 \u1d3a\u1d41\u1d38\u1d38                                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"ifnull"},"ifNull"),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u0435\u0441\u043b\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u2014 ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"ifNull(x,alt)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043d\u0430 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"alt")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u0435\u0440\u043d\u0451\u0442, \u0435\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"x"),", \u0435\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"alt"),", \u0435\u0441\u043b\u0438 ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull('a', 'b');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ifNull('a', 'b')\u2500\u2510\n\u2502 a                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT ifNull(NULL, 'b');\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500ifNull(NULL, 'b')\u2500\u2510\n\u2502 b                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"nullif"},"nullIf"),(0,r.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),", \u0435\u0441\u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0440\u0430\u0432\u043d\u044b."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"nullIf(x, y)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u044f. \u041e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u044b\u0445 \u0442\u0438\u043f\u043e\u0432, \u0438\u043d\u0430\u0447\u0435 ClickHouse \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u0443\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),", \u0435\u0441\u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u0440\u0430\u0432\u043d\u044b."),(0,r.kt)("li",{parentName:"ul"},"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"x"),", \u0435\u0441\u043b\u0438 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u0440\u0430\u0432\u043d\u044b.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 1);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500nullIf(1, 1)\u2500\u2510\n\u2502         \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT nullIf(1, 2);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500nullIf(1, 2)\u2500\u2510\n\u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"assumenotnull"},"assumeNotNull"),(0,r.kt)("p",null,"\u041f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 ",(0,r.kt)("a",{parentName:"p",href:"/ru/sql-reference/functions/functions-for-nulls"},"Nullable")," \u043a \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable"),", \u0435\u0441\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"NULL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"assumeNotNull(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0418\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"Nullable")," \u0442\u0438\u043f\u043e\u043c, \u0435\u0441\u043b\u0438 \u043e\u043d\u043e \u2014 \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,r.kt)("li",{parentName:"ul"},"\u041d\u0435\u0441\u043f\u0435\u0446\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0439 \u043e\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438, \u0435\u0441\u043b\u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u2014 ",(0,r.kt)("inlineCode",{parentName:"li"},"NULL"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("p",null,"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"t_null"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW CREATE TABLE t_null;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500statement\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 CREATE TABLE default.t_null ( x Int8,  y Nullable(Int8)) ENGINE = TinyLog \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u252c\u2500\u2500\u2500\u2500y\u2500\u2510\n\u2502 1 \u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502 2 \u2502    3 \u2502\n\u2514\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,r.kt)("inlineCode",{parentName:"p"},"assumeNotNull")," \u043a \u0441\u0442\u043e\u043b\u0431\u0446\u0443 ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT assumeNotNull(y) FROM t_null;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500assumeNotNull(y)\u2500\u2510\n\u2502                0 \u2502\n\u2502                3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(assumeNotNull(y)) FROM t_null;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(assumeNotNull(y))\u2500\u2510\n\u2502 Int8                         \u2502\n\u2502 Int8                         \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("h2",{id:"tonullable"},"toNullable"),(0,r.kt)("p",null,"\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u0442\u0438\u043f \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"Nullable"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"toNullable(x)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043d\u0435 \u0441\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0412\u0445\u043e\u0434\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u0442\u0438\u043f\u043e\u043c \u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"li"},"Nullable"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(10);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(10)\u2500\u2510\n\u2502 UInt8          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toTypeName(toNullable(10));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(toNullable(10))\u2500\u2510\n\u2502 Nullable(UInt8)            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);