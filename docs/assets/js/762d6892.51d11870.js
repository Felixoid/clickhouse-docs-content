"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93631],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,k=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?t.createElement(k,l(l({ref:r},s),{},{components:n})):t.createElement(k,l({ref:r},s))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68244:function(e,r,n){n.r(r),n.d(r,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={sidebar_position:145},c="rankCorr",u={unversionedId:"en/sql-reference/aggregate-functions/reference/rankCorr",id:"en/sql-reference/aggregate-functions/reference/rankCorr",title:"rankCorr",description:"agg_function-rankcorr}",source:"@site/docs/en/sql-reference/aggregate-functions/reference/rankCorr.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/rankCorr",permalink:"/en/sql-reference/aggregate-functions/reference/rankCorr",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/aggregate-functions/reference/rankCorr.md",tags:[],version:"current",sidebarPosition:145,frontMatter:{sidebar_position:145},sidebar:"english",previous:{title:"sumCount",permalink:"/en/sql-reference/aggregate-functions/reference/sumcount"},next:{title:"sumKahan",permalink:"/en/sql-reference/aggregate-functions/reference/sumkahan"}},s={},p=[],f={toc:p};function m(e){var r=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"agg_function-rankcorr"},"rankCorr"),(0,o.kt)("p",null,"Computes a rank correlation coefficient."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"rankCorr(x, y)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Arbitrary value. ",(0,o.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float#float32-float64"},"Float32")," or ",(0,o.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"y")," \u2014 Arbitrary value. ",(0,o.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float#float32-float64"},"Float32")," or ",(0,o.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float#float32-float64"},"Float64"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value(s)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Returns a rank correlation coefficient of the ranks of x and y. The value of the correlation coefficient ranges from -1 to +1. If less than two arguments are passed, the function will return an exception. The value close to +1 denotes a high linear relationship, and with an increase of one random variable, the second random variable also increases. The value close to -1 denotes a high linear relationship, and with an increase of one random variable, the second random variable decreases. The value close or equal to 0 denotes no relationship between the two random variables.")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT rankCorr(number, number) FROM numbers(100);\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500rankCorr(number, number)\u2500\u2510\n\u2502                        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT roundBankers(rankCorr(exp(number), sin(number)), 3) FROM numbers(100);\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500roundBankers(rankCorr(exp(number), sin(number)), 3)\u2500\u2510\n\u2502                                              -0.037 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See Also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Spearman%27s_rank_correlation_coefficient"},"Spearman's rank correlation coefficient"))))}m.isMDXComponent=!0}}]);