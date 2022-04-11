"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[25160],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),k=o,f=d["".concat(p,".").concat(k)]||d[k]||l[k]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75295:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],c={sidebar_position:6,sidebar_label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},p="\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",u={unversionedId:"ru/introduction/performance",id:"ru/introduction/performance",title:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",description:"proizvoditelnost}",source:"@site/docs/ru/introduction/performance.md",sourceDirName:"ru/introduction",slug:"/ru/introduction/performance",permalink:"/ru/introduction/performance",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/introduction/performance.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},sidebar:"russia",previous:{title:"\u041e\u0442\u043b\u0438\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 ClickHouse",permalink:"/ru/introduction/distinctive-features"},next:{title:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f ClickHouse",permalink:"/ru/introduction/history"}},s={},l=[{value:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430",id:"propusknaia-sposobnost-pri-obrabotke-odnogo-bolshogo-zaprosa",level:2},{value:"\u0417\u0430\u0434\u0435\u0440\u0436\u043a\u0438 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",id:"zaderzhki-pri-obrabotke-korotkikh-zaprosov",level:2},{value:"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",id:"propusknaia-sposobnost-pri-obrabotke-mnogochislennykh-korotkikh-zaprosov",level:2},{value:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"proizvoditelnost-pri-vstavke-dannykh",level:2}],d={toc:l};function k(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"proizvoditelnost"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),(0,i.kt)("p",null,"\u041f\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430\u043c \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0433\u043e \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u042f\u043d\u0434\u0435\u043a\u0441\u0435, ClickHouse \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e (\u043a\u0430\u043a \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c\u044e \u043d\u0430 \u0434\u043b\u0438\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445, \u0442\u0430\u043a \u0438 \u043d\u0430\u0438\u0431\u043e\u043b\u0435\u0435 \u043d\u0438\u0437\u043a\u043e\u0439 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u043d\u0430 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445), \u043f\u0440\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u043c \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0438 \u0440\u0430\u0431\u043e\u0442\u044b, \u0441\u0440\u0435\u0434\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0438\u0441\u0442\u0435\u043c \u043f\u043e\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0441\u0430. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043d\u0430 ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/benchmark/dbms/"},"\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"),"."),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435 \u044d\u0442\u043e \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044e\u0442 \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u0431\u0435\u043d\u0447\u043c\u0430\u0440\u043a\u0438. \u0418\u0445 \u043d\u0435 \u0441\u043b\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435 \u0441\u0430\u043c\u043e\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e, \u043b\u0438\u0431\u043e \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f ",(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/#independent-benchmarks"},"\u043d\u0435\u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0435\u0439 \u0441\u0441\u044b\u043b\u043e\u043a \u043f\u043e \u0442\u0435\u043c\u0435"),"."),(0,i.kt)("h2",{id:"propusknaia-sposobnost-pri-obrabotke-odnogo-bolshogo-zaprosa"},"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430"),(0,i.kt)("p",null,"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0438\u0437\u043c\u0435\u0440\u044f\u0442\u044c \u0432 \u0441\u0442\u0440\u043e\u0447\u043a\u0430\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0438 \u0432 \u043c\u0435\u0433\u0430\u0431\u0430\u0439\u0442\u0430\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443. \u041f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0432 page cache, \u043d\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u043b\u043e\u0436\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u0436\u0435\u043b\u0435\u0437\u0435 \u0441\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e \u043e\u043a\u043e\u043b\u043e 2-10 GB/sec.\xa0\u043d\u0435\u0441\u0436\u0430\u0442\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435 (\u0432 \u043f\u0440\u043e\u0441\u0442\u0435\u0439\u0448\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c 30 GB/sec). \u0415\u0441\u043b\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043f\u043e\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0432 page cache, \u0442\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u044b \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0434\u0438\u0441\u043a\u043e\u0432\u043e\u0439 \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442\u0430 \u0441\u0436\u0430\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0434\u0438\u0441\u043a\u043e\u0432\u0430\u044f \u043f\u043e\u0434\u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0447\u0438\u0442\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e 400 MB/sec., \u0430 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u0441\u0436\u0430\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 3, \u0442\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u043a\u043e\u043b\u043e 1.2GB/sec.\xa0\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438 \u0432 \u0441\u0442\u0440\u043e\u0447\u043a\u0430\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443, \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432 \u0431\u0430\u0439\u0442\u0430\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u043d\u0430 \u0441\u0443\u043c\u043c\u0430\u0440\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0432\u044b\u043d\u0438\u043c\u0430\u044e\u0442\u0441\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043d\u0430 10 \u0431\u0430\u0439\u0442, \u0442\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0431\u0443\u0434\u0435\u0442 \u0432 \u0440\u0430\u0439\u043e\u043d\u0435 100-200 \u043c\u043b\u043d. \u0441\u0442\u0440\u043e\u043a \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443."),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0439 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0440\u0430\u0441\u0442\u0451\u0442 \u043f\u043e\u0447\u0442\u0438 \u043b\u0438\u043d\u0435\u0439\u043d\u043e, \u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0430\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u0438 \u0438\u043b\u0438 \u043f\u0440\u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0441\u044f \u043d\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u0447\u0435\u043a."),(0,i.kt)("h2",{id:"zaderzhki-pri-obrabotke-korotkikh-zaprosov"},"\u0417\u0430\u0434\u0435\u0440\u0436\u043a\u0438 \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),(0,i.kt)("p",null,"\u0415\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447, \u0438 \u0432\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u0447\u0435\u043a (\u0441\u043e\u0442\u043d\u0438 \u0442\u044b\u0441\u044f\u0447), \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u043d\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u043e\u043b\u044c\u0448\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0430 latency \u043c\u0435\u043d\u0435\u0435 50 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434 (\u043e\u0442 \u0435\u0434\u0438\u043d\u0438\u0446 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434 \u0432 \u043b\u0443\u0447\u0448\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435), \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043c\u0435\u0449\u0430\u044e\u0442\u0441\u044f \u0432 page cache. \u0418\u043d\u0430\u0447\u0435 latency \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 seek-\u043e\u0432. \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0438\u0435\u0441\u044f \u0434\u0438\u0441\u043a\u0438, \u0442\u043e \u043d\u0430 \u043d\u0435 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0441\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u0435, latency \u0432\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u043e \u0444\u043e\u0440\u043c\u0443\u043b\u0435: seek time (10 \u043c\u0441.) ","*"," \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 ","*"," \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0443\u0441\u043a\u043e\u0432 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."),(0,i.kt)("h2",{id:"propusknaia-sposobnost-pri-obrabotke-mnogochislennykh-korotkikh-zaprosov"},"\u041f\u0440\u043e\u043f\u0443\u0441\u043a\u043d\u0430\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043c\u043d\u043e\u0433\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"),(0,i.kt)("p",null,"\u041f\u0440\u0438 \u0442\u0435\u0445 \u0436\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445, ClickHouse \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043e\u0442\u0435\u043d (\u0434\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0442\u044b\u0441\u044f\u0447 \u0432 \u043b\u0443\u0447\u0448\u0435\u043c \u0441\u043b\u0443\u0447\u0430\u0435) \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u043d\u0430 \u043e\u0434\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435. \u0422\u0430\u043a \u043a\u0430\u043a \u0442\u0430\u043a\u043e\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0442\u0438\u043f\u0438\u0447\u043d\u044b\u043c \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0421\u0423\u0411\u0414, \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0440\u0430\u0441\u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c \u043d\u0430 100 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443."),(0,i.kt)("h2",{id:"proizvoditelnost-pri-vstavke-dannykh"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("p",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043f\u0430\u0447\u043a\u0430\u043c\u0438 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 1000 \u0441\u0442\u0440\u043e\u043a \u0438\u043b\u0438 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443. \u041f\u0440\u0438 \u0432\u0441\u0442\u0430\u0432\u043a\u0435 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0442\u0438\u043f\u0430 MergeTree \u0438\u0437 tab-separated \u0434\u0430\u043c\u043f\u0430, \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u0431\u0443\u0434\u0435\u0442 \u0432 \u0440\u0430\u0439\u043e\u043d\u0435 50-200 \u041c\u0411/\u0441\u0435\u043a. \u0415\u0441\u043b\u0438 \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u0442\u0440\u043e\u0447\u043a\u0438 \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c \u043e\u043a\u043e\u043b\u043e 1 \u041a\u0411, \u0442\u043e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0431\u0443\u0434\u0435\u0442 \u0432 \u0440\u0430\u0439\u043e\u043d\u0435 50 000 - 200 000 \u0441\u0442\u0440\u043e\u0447\u0435\u043a \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443. \u0415\u0441\u043b\u0438 \u0441\u0442\u0440\u043e\u0447\u043a\u0438 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u0435 - \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432 \u0441\u0442\u0440\u043e\u0447\u043a\u0430\u0445 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0448\u0435 (\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0411\u041a - ",(0,i.kt)("inlineCode",{parentName:"p"},">")," 500 000 \u0441\u0442\u0440\u043e\u043a \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443, \u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 Graphite - ",(0,i.kt)("inlineCode",{parentName:"p"},">")," 1 000 000 \u0441\u0442\u0440\u043e\u043a \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443). \u0414\u043b\u044f \u0443\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 INSERT \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u043e - \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0442\u0451\u0442 \u043b\u0438\u043d\u0435\u0439\u043d\u043e."))}k.isMDXComponent=!0}}]);