"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[14173],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=i(r),m=a,d=f["".concat(o,".").concat(m)]||f[m]||p[m]||l;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var i=2;i<l;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1e3:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),c=["components"],s={sidebar_position:301,sidebar_label:"welchTTest"},o="welchTTest",i={unversionedId:"ru/sql-reference/aggregate-functions/reference/welchttest",id:"ru/sql-reference/aggregate-functions/reference/welchttest",title:"welchTTest",description:"welchttest}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/welchttest.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/welchttest",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/welchttest",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/welchttest.md",tags:[],version:"current",sidebarPosition:301,frontMatter:{sidebar_position:301,sidebar_label:"welchTTest"},sidebar:"russia",previous:{title:"studentTTest",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/studentttest"},next:{title:"entropy",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/entropy"}},u={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"welchttest"},"welchTTest"),(0,l.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0423\u044d\u043b\u0447\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u043a \u0438\u0437 \u0434\u0432\u0443\u0445 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0435\u0439."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"welchTTest(sample_data, sample_index)\n")),(0,l.kt)("p",null,"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u0431\u043e\u0440\u043e\u043a \u0431\u0435\u0440\u0443\u0442\u0441\u044f \u0438\u0437 \u0441\u0442\u043e\u043b\u0431\u0446\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_data"),". \u0415\u0441\u043b\u0438  ",(0,l.kt)("inlineCode",{parentName:"p"},"sample_index")," \u0440\u0430\u0432\u043d\u043e 0, \u0442\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u043f\u0435\u0440\u0432\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435. \u0412\u043e \u0432\u0441\u0435\u0445 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0438\u0442 \u0432\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.\n\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0443\u043b\u0435\u0432\u0430\u044f \u0433\u0438\u043f\u043e\u0442\u0435\u0437\u0430, \u0447\u0442\u043e \u0441\u0440\u0435\u0434\u043d\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u0435\u0439 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442. \u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0423\u044d\u043b\u0447\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0432 \u0433\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043e\u0432\u043e\u043a\u0443\u043f\u043d\u043e\u0441\u0442\u044f\u0445 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u043c. \u0414\u0438\u0441\u043f\u0435\u0440\u0441\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u0442\u044c."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_data")," \u2014 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432\u044b\u0431\u043e\u0440\u043e\u043a. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sample_index")," \u2014 \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0432\u044b\u0431\u043e\u0440\u043e\u043a. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/int-uint"},"Integer"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/data-types/tuple"},"\u041a\u043e\u0440\u0442\u0435\u0436")," \u0441 \u0434\u0432\u0443\u043c\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f \u0423\u044d\u043b\u0447\u0430. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64"),"."),(0,l.kt)("li",{parentName:"ul"},"\u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0435 p-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. ",(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/data-types/float"},"Float64"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500sample_data\u2500\u252c\u2500sample_index\u2500\u2510\n\u2502        20.3 \u2502            0 \u2502\n\u2502        22.1 \u2502            0 \u2502\n\u2502        21.9 \u2502            0 \u2502\n\u2502        18.9 \u2502            1 \u2502\n\u2502        20.3 \u2502            1 \u2502\n\u2502          19 \u2502            1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT welchTTest(sample_data, sample_index) FROM welch_ttest;\n")),(0,l.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500welchTTest(sample_data, sample_index)\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (2.7988719532211235,0.051807360348581945) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/T-%D0%BA%D1%80%D0%B8%D1%82%D0%B5%D1%80%D0%B8%D0%B9_%D0%A3%D1%8D%D0%BB%D1%87%D0%B0"},"t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0423\u044d\u043b\u0447\u0430")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/aggregate-functions/reference/studentttest#studentttest"},"studentTTest"))))}m.isMDXComponent=!0}}]);