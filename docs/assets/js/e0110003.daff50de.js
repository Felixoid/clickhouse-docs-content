"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[40115],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,y=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(y,o(o({ref:n},l),{},{components:t})):r.createElement(y,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},51463:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={sidebar_position:31,sidebar_label:"Lazy"},c="Lazy",u={unversionedId:"ru/engines/database-engines/lazy",id:"ru/engines/database-engines/lazy",title:"Lazy",description:"lazy}",source:"@site/docs/ru/engines/database-engines/lazy.md",sourceDirName:"ru/engines/database-engines",slug:"/ru/engines/database-engines/lazy",permalink:"/ru/engines/database-engines/lazy",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/engines/database-engines/lazy.md",tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,sidebar_label:"Lazy"},sidebar:"russia",previous:{title:"MySQL",permalink:"/ru/engines/database-engines/mysql"},next:{title:"Atomic",permalink:"/ru/engines/database-engines/atomic"}},l={},p=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"creating-a-database",level:2}],f={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lazy"},"Lazy"),(0,i.kt)("p",null,"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043c\u044f\u0442\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"expiration_time_in_seconds")," \u0447\u0435\u0440\u0435\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434 \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430. \u041c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438 ","*","Log."),(0,i.kt)("p",null,"\u041e\u043d \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 ","*","Log, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043e\u0431\u044b\u0447\u043d\u043e \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u043c\u0435\u0436\u0434\u0443 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u044f\u043c\u0438."),(0,i.kt)("h2",{id:"creating-a-database"},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE testlazy ENGINE = Lazy(expiration_time_in_seconds);\n")))}d.isMDXComponent=!0}}]);