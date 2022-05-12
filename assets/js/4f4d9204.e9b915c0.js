"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[48413],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,k=f["".concat(o,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],u={sidebar_position:200},o="quantile",p={unversionedId:"ru/sql-reference/aggregate-functions/reference/quantile",id:"ru/sql-reference/aggregate-functions/reference/quantile",title:"quantile",description:"quantile}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/quantile.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/quantile",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/quantile",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/quantile.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"russia",previous:{title:"uniqTheta",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/uniqthetasketch"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0435\u0439",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/quantiles"}},c={},s=[],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"quantile"},"quantile"),(0,l.kt)("p",null,"\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,l.kt)("a",{parentName:"p",href:"https://ru.wikipedia.org/wiki/%D0%9A%D0%B2%D0%B0%D0%BD%D1%82%D0%B8%D0%BB%D1%8C"},"\u043a\u0432\u0430\u043d\u0442\u0438\u043b\u044c")," \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0439 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reservoir_sampling"},"reservoir sampling")," \u0441 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440\u0430 \u0434\u043e 8192 \u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c \u0447\u0438\u0441\u0435\u043b \u0434\u043b\u044f \u0434\u043b\u044f \u0441\u044d\u043c\u043f\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0435 \u0434\u0435\u0442\u0435\u0440\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d. \u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u043e\u0447\u043d\u0443\u044e \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("a",{parentName:"p",href:"#quantileexact"},"quantileExact"),"."),(0,l.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"quantile*")," \u043d\u0435 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u044e\u0442\u0441\u044f, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u044c \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0443\u0440\u043e\u0432\u043d\u0435\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,l.kt)("a",{parentName:"p",href:"#quantiles"},"quantiles"),", \u044d\u0442\u043e \u043f\u043e\u0432\u044b\u0441\u0438\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"quantile(level)(expr)\n")),(0,l.kt)("p",null,"\u0410\u043b\u0438\u0430\u0441: ",(0,l.kt)("inlineCode",{parentName:"p"},"median"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u0438. \u041e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e. \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441 \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0435\u0439 \u0437\u0430\u043f\u044f\u0442\u043e\u0439 \u043e\u0442 0 \u0434\u043e 1. \u041c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"level")," \u0438\u0437 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 ",(0,l.kt)("inlineCode",{parentName:"li"},"[0.01, 0.99]"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0.5. \u041f\u0440\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"level=0.5")," \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 ",(0,l.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D0%B4%D0%B8%D0%B0%D0%BD%D0%B0_(%D1%81%D1%82%D0%B0%D1%82%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0)"},"\u043c\u0435\u0434\u0438\u0430\u043d\u0443"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"expr")," \u2014 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0435\u0435 \u043e\u0442 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/#data_types"},"\u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0445 \u0442\u0438\u043f\u043e\u0432")," \u0438\u043b\u0438 \u0442\u0438\u043f\u043e\u0432 ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438\u0431\u043b\u0438\u0437\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u0432\u0430\u043d\u0442\u0438\u043b\u044c \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f.")),(0,l.kt)("p",null,"\u0422\u0438\u043f:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64")," \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0447\u0438\u0441\u043b\u043e\u0432\u043e\u0433\u043e \u0442\u0438\u043f\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/date"},"Date"),", \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"li"},"Date"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/datetime"},"DateTime"),", \u0435\u0441\u043b\u0438 \u0432\u0445\u043e\u0434\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u044e\u0442 \u0442\u0438\u043f ",(0,l.kt)("inlineCode",{parentName:"li"},"DateTime"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0412\u0445\u043e\u0434\u043d\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500val\u2500\u2510\n\u2502   1 \u2502\n\u2502   1 \u2502\n\u2502   2 \u2502\n\u2502   3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT quantile(val) FROM t\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500quantile(val)\u2500\u2510\n\u2502           1.5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/aggregate-functions/reference/median#median"},"median")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/aggregate-functions/reference/quantiles#quantiles"},"quantiles"))))}m.isMDXComponent=!0}}]);