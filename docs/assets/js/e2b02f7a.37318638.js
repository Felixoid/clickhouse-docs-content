"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[29614],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return g}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(n),g=a,m=f["".concat(l,".").concat(g)]||f[g]||p[g]||i;return n?t.createElement(m,o(o({ref:r},u),{},{components:n})):t.createElement(m,o({ref:r},u))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},40569:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var t=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:220},l="simpleLinearRegression",c={unversionedId:"ru/sql-reference/aggregate-functions/reference/simplelinearregression",id:"ru/sql-reference/aggregate-functions/reference/simplelinearregression",title:"simpleLinearRegression",description:"simplelinearregression}",source:"@site/docs/ru/sql-reference/aggregate-functions/reference/simplelinearregression.md",sourceDirName:"ru/sql-reference/aggregate-functions/reference",slug:"/ru/sql-reference/aggregate-functions/reference/simplelinearregression",permalink:"/ru/sql-reference/aggregate-functions/reference/simplelinearregression",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/aggregate-functions/reference/simplelinearregression.md",tags:[],version:"current",sidebarPosition:220,frontMatter:{sidebar_position:220},sidebar:"russia",previous:{title:"quantileBFloat16",permalink:"/ru/sql-reference/aggregate-functions/reference/quantilebfloat16"},next:{title:"stochasticLinearRegression",permalink:"/ru/sql-reference/aggregate-functions/reference/stochasticlinearregression"}},u={},p=[],f={toc:p};function g(e){var r=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simplelinearregression"},"simpleLinearRegression"),(0,i.kt)("p",null,"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u0443\u044e (\u043e\u0434\u043d\u043e\u043c\u0435\u0440\u043d\u0443\u044e) \u043b\u0438\u043d\u0435\u0439\u043d\u0443\u044e \u0440\u0435\u0433\u0440\u0435\u0441\u0441\u0438\u044e."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"simpleLinearRegression(x, y)\n")),(0,i.kt)("p",null,"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y")," \u2014 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u043e\u0439 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439.")),(0,i.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f:"),(0,i.kt)("p",null,"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u044b ",(0,i.kt)("inlineCode",{parentName:"p"},"(a, b)")," \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u044e\u0449\u0435\u0439 \u043f\u0440\u044f\u043c\u043e\u0439 ",(0,i.kt)("inlineCode",{parentName:"p"},"y = a*x + b"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayReduce('simpleLinearRegression', [0, 1, 2, 3], [0, 1, 2, 3])\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayReduce('simpleLinearRegression', [0, 1, 2, 3], [0, 1, 2, 3])\u2500\u2510\n\u2502 (1,0)                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT arrayReduce('simpleLinearRegression', [0, 1, 2, 3], [3, 4, 5, 6])\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arrayReduce('simpleLinearRegression', [0, 1, 2, 3], [3, 4, 5, 6])\u2500\u2510\n\u2502 (1,3)                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}g.isMDXComponent=!0}}]);