"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[88118],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47834:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],s={sidebar_position:48,sidebar_label:"RENAME"},i="RENAME",c={unversionedId:"ru/sql-reference/statements/rename",id:"ru/sql-reference/statements/rename",title:"RENAME",description:"misc_operations-rename}",source:"@site/docs/ru/sql-reference/statements/rename.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/rename",permalink:"/docs/ru/sql-reference/statements/rename",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/rename.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{sidebar_position:48,sidebar_label:"RENAME"},sidebar:"russia",previous:{title:"OPTIMIZE",permalink:"/docs/ru/sql-reference/statements/optimize"},next:{title:"EXCHANGE",permalink:"/docs/ru/sql-reference/statements/exchange"}},u={},p=[{value:"RENAME DATABASE",id:"misc_operations-rename_database",level:2},{value:"RENAME TABLE",id:"misc_operations-rename_table",level:2},{value:"RENAME DICTIONARY",id:"rename_dictionary",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"misc_operations-rename"},"RENAME"),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u0441\u043b\u043e\u0432\u0430\u0440\u0438. \u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u044b \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435.\n\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,l.kt)("inlineCode",{parentName:"p"},"RENAME")," \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u044d\u0442\u043e \u043d\u0435\u0430\u0442\u043e\u043c\u0430\u0440\u043d\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f. \u0427\u0442\u043e\u0431\u044b \u043e\u0431\u043c\u0435\u043d\u044f\u0442\u044c \u0438\u043c\u0435\u043d\u0430 \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u043e, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/exchange"},"EXCHANGE"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},':::note "\u041f\u0440\u0438\u043c\u0435\u0447\u0430\u043d\u0438\u0435"\n\u0417\u0430\u043f\u0440\u043e\u0441 `RENAME` \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u0432\u0438\u0436\u043a\u043e\u043c \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 [Atomic](/docs/ru/engines/database-engines/atomic).\n:::\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DATABASE|TABLE|DICTIONARY name TO new_name [,...] [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"misc_operations-rename_database"},"RENAME DATABASE"),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DATABASE atomic_database1 TO atomic_database2 [,...] [ON CLUSTER cluster]\n")),(0,l.kt)("h2",{id:"misc_operations-rename_table"},"RENAME TABLE"),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u043e\u0434\u043d\u0443 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u0431\u043b\u0438\u0446."),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u0451\u0433\u043a\u043e\u0439 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0435\u0439. \u0415\u0441\u043b\u0438 \u0432\u044b \u0443\u043a\u0430\u0437\u0430\u043b\u0438 \u043f\u043e\u0441\u043b\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"TO")," \u0434\u0440\u0443\u0433\u0443\u044e \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u043d\u0435\u0441\u0435\u043d\u0430 \u0432 \u044d\u0442\u0443 \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0441 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u0432 \u043e\u0434\u043d\u043e\u0439 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, \u0438\u043d\u0430\u0447\u0435 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0430\u0431\u043b\u0438\u0446 \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435, \u0442\u043e \u0442\u0430\u043a\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043d\u0435\u0430\u0442\u043e\u043c\u0430\u0440\u043d\u0430\u044f. \u041e\u043d\u0430 \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0447\u0430\u0441\u0442\u0438\u0447\u043d\u043e, \u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0435\u0441\u0441\u0438\u044f\u0445 \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"Table ... doesn't exist..."),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE [db1.]name1 TO [db2.]name2 [,...] [ON CLUSTER cluster]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME TABLE table_A TO table_A_bak, table_B TO table_B_bak;\n")),(0,l.kt)("h2",{id:"rename_dictionary"},"RENAME DICTIONARY"),(0,l.kt)("p",null,"\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u044b\u0432\u0430\u0435\u0442 \u043e\u0434\u0438\u043d \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439. \u042d\u0442\u043e\u0442 \u0437\u0430\u043f\u0440\u043e\u0441 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f \u0441\u043b\u043e\u0432\u0430\u0440\u0435\u0439 \u043c\u0435\u0436\u0434\u0443 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"RENAME DICTIONARY [db0.]dict_A TO [db1.]dict_B [,...] [ON CLUSTER cluster]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/dictionaries/"},"\u0421\u043b\u043e\u0432\u0430\u0440\u0438"))))}d.isMDXComponent=!0}}]);