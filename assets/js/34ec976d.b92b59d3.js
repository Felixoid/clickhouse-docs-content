"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[47266],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),s=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,k=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?t.createElement(k,l(l({ref:r},u),{},{components:n})):t.createElement(k,l({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},47177:function(e,r,n){n.r(r),n.d(r,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],c={},i=void 0,s={unversionedId:"zh/sql-reference/aggregate-functions/reference/rankCorr",id:"zh/sql-reference/aggregate-functions/reference/rankCorr",title:"rankCorr",description:"rankCorr",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/rankCorr.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/rankCorr",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/rankCorr",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/aggregate-functions/reference/rankCorr.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"median",permalink:"/docs/zh/sql-reference/aggregate-functions/reference/median"},next:{title:"\u805a\u5408\u51fd\u6570\u7ec4\u5408\u5668",permalink:"/docs/zh/sql-reference/aggregate-functions/combinators"}},u={},p=[{value:"rankCorr",id:"agg_function-rankcorr",level:2}],f={toc:p};function m(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"agg_function-rankcorr"},"rankCorr"),(0,o.kt)("p",null,"\u8ba1\u7b97\u7b49\u7ea7\u76f8\u5173\u7cfb\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"rankCorr(x, y)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," \u2014 \u4efb\u610f\u503c\u3002",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float#float32-float64"},"Float32")," \u6216 ",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float#float32-float64"},"Float64"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," \u2014 \u4efb\u610f\u503c\u3002",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float#float32-float64"},"Float32")," \u6216 ",(0,o.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/data-types/float#float32-float64"},"Float64"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Returns a rank correlation coefficient of the ranks of x and y. The value of the correlation coefficient ranges from -1 to +1. If less than two arguments are passed, the function will return an exception. The value close to +1 denotes a high linear relationship, and with an increase of one random variable, the second random variable also increases. The value close to -1 denotes a high linear relationship, and with an increase of one random variable, the second random variable decreases. The value close or equal to 0 denotes no relationship between the two random variables.")),(0,o.kt)("p",null,"\u7c7b\u578b: ",(0,o.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/data-types/float#float32-float64"},"Float64"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("p",null,"\u67e5\u8be2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT rankCorr(number, number) FROM numbers(100);\n")),(0,o.kt)("p",null,"\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500rankCorr(number, number)\u2500\u2510\n\u2502                        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u67e5\u8be2:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT roundBankers(rankCorr(exp(number), sin(number)), 3) FROM numbers(100);\n")),(0,o.kt)("p",null,"\u7ed3\u679c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500roundBankers(rankCorr(exp(number), sin(number)), 3)\u2500\u2510\n\u2502                                              -0.037 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u53c2\u89c1")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u65af\u76ae\u5c14\u66fc\u7b49\u7ea7\u76f8\u5173\u7cfb\u6570",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient"},"Spearman's rank correlation coefficient"))))}m.isMDXComponent=!0}}]);