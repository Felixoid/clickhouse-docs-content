"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[18992],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),s=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return n.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,f=u(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,g=p["".concat(a,".").concat(m)]||p[m]||l[m]||c;return t?n.createElement(g,i(i({ref:r},f),{},{components:t})):n.createElement(g,i({ref:r},f))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=p;var u={};for(var a in r)hasOwnProperty.call(r,a)&&(u[a]=r[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<c;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56537:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l}});var n=t(87462),o=t(63366),c=(t(67294),t(3905)),i=["components"],u={sidebar_position:140},a="sumWithOverflow",s={unversionedId:"ru/sql-reference/aggregate-functions/reference/sumwithoverflow",id:"ru/sql-reference/aggregate-functions/reference/sumwithoverflow",title:"sumWithOverflow",description:"sumwithoverflowx}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/sumwithoverflow.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/sumwithoverflow",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/sumwithoverflow",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/aggregate-functions/reference/sumwithoverflow.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{sidebar_position:140},sidebar:"russia",previous:{title:"groupBitmapXor",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/groupbitmapxor"},next:{title:"deltaSum",permalink:"/docs/ru/sql-reference/aggregate-functions/reference/deltasum"}},f={},l=[],p={toc:l};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"sumwithoverflowx"},"sumWithOverflow"),(0,c.kt)("p",null,"\u0412\u044b\u0447\u0438\u0441\u043b\u044f\u0435\u0442 \u0441\u0443\u043c\u043c\u0443 \u0447\u0438\u0441\u0435\u043b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0434\u043b\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0442\u043e\u0442 \u0436\u0435 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0442\u043e \u0438 \u0434\u043b\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432. \u0415\u0441\u043b\u0438 \u0441\u0443\u043c\u043c\u0430 \u0432\u044b\u0439\u0434\u0435\u0442 \u0437\u0430 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u0435\u0440\u043d\u0451\u0442 \u043e\u0448\u0438\u0431\u043a\u0443."),(0,c.kt)("p",null,"\u0420\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0447\u0438\u0441\u0435\u043b."))}m.isMDXComponent=!0}}]);