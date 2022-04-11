"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[14792],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(t),f=a,g=m["".concat(p,".").concat(f)]||m[f]||s[f]||l;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42458:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=t(87462),a=t(63366),l=(t(67294),t(3905)),o=["components"],i={sidebar_position:108},p=void 0,u={unversionedId:"en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",id:"en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",title:"exponentialmovingaverage",description:"exponentialMovingAverage",source:"@site/docs/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage.md",sourceDirName:"en/sql-reference/aggregate-functions/reference",slug:"/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",permalink:"/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/sql-reference/aggregate-functions/reference/exponentialmovingaverage.md",tags:[],version:"current",sidebarPosition:108,frontMatter:{sidebar_position:108},sidebar:"english",previous:{title:"corr",permalink:"/en/sql-reference/aggregate-functions/reference/corr"},next:{title:"groupArraySorted",permalink:"/en/sql-reference/aggregate-functions/reference/grouparraysorted"}},c={},s=[{value:"exponentialMovingAverage",id:"exponential-moving-average",level:2}],m={toc:s};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"exponential-moving-average"},"exponentialMovingAverage"),(0,l.kt)("p",null,"\u0421alculates the exponential moving average of values for the determined time. "),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"exponentialMovingAverage(x)(value, timestamp)\n")),(0,l.kt)("p",null,"Each ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," corresponds to the determinate ",(0,l.kt)("inlineCode",{parentName:"p"},"timestamp"),". The half-life ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is the time lag at which the exponential weights decay by one-half. The function returns a weighted average: the older the time point, the less weight the corresponding value is considered to be."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u2014 Value. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/decimal"},"Decimal"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timestamp")," \u2014 Timestamp. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/decimal"},"Decimal"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x")," \u2014 Half-life period. ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"Integer"),", ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/float"},"Float")," or ",(0,l.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/decimal"},"Decimal"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned values")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Returnes an ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average"},"exponentially smoothed moving average")," of the values for the past ",(0,l.kt)("inlineCode",{parentName:"li"},"x")," time at the latest point of time.")),(0,l.kt)("p",null,"Type: ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/float#float32-float64"},"Float64"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Examples")),(0,l.kt)("p",null,"Input table:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500temperature\u2500\u252c\u2500timestamp\u2500\u2500\u2510\n\u2502          95  \u2502         1  \u2502\n\u2502          95  \u2502         2  \u2502\n\u2502          95  \u2502         3  \u2502\n\u2502          96  \u2502         4  \u2502\n\u2502          96  \u2502         5  \u2502\n\u2502          96  \u2502         6  \u2502\n\u2502          96  \u2502         7  \u2502\n\u2502          97  \u2502         8  \u2502\n\u2502          97  \u2502         9  \u2502\n\u2502          97  \u2502        10  \u2502\n\u2502          97  \u2502        11  \u2502\n\u2502          98  \u2502        12  \u2502\n\u2502          98  \u2502        13  \u2502\n\u2502          98  \u2502        14  \u2502\n\u2502          98  \u2502        15  \u2502\n\u2502          99  \u2502        16  \u2502\n\u2502          99  \u2502        17  \u2502\n\u2502          99  \u2502        18  \u2502\n\u2502         100  \u2502        19  \u2502\n\u2502         100  \u2502        20  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT exponentialMovingAverage(5)(temperature, timestamp);\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500exponentialMovingAverage(5)(temperature, timestamp)\u2500\u2500\u2510\n\u2502                                    92.25779635374204  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"Query: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    value,\n    time,\n    round(exp_smooth, 3),\n    bar(exp_smooth, 0, 1, 50) AS bar\nFROM\n(\n    SELECT\n        (number = 0) OR (number >= 25) AS value,\n        number AS time,\n        exponentialMovingAverage(10)(value, time) OVER (Rows BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS exp_smooth\n    FROM numbers(50)\n)\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500value\u2500\u252c\u2500time\u2500\u252c\u2500round(exp_smooth, 3)\u2500\u252c\u2500bar\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502     1 \u2502    0 \u2502                0.067 \u2502 \u2588\u2588\u2588\u258e                                      \u2502\n\u2502     0 \u2502    1 \u2502                0.062 \u2502 \u2588\u2588\u2588                                        \u2502\n\u2502     0 \u2502    2 \u2502                0.058 \u2502 \u2588\u2588\u258a                                       \u2502\n\u2502     0 \u2502    3 \u2502                0.054 \u2502 \u2588\u2588\u258b                                       \u2502\n\u2502     0 \u2502    4 \u2502                0.051 \u2502 \u2588\u2588\u258c                                        \u2502\n\u2502     0 \u2502    5 \u2502                0.047 \u2502 \u2588\u2588\u258e                                       \u2502\n\u2502     0 \u2502    6 \u2502                0.044 \u2502 \u2588\u2588\u258f                                       \u2502\n\u2502     0 \u2502    7 \u2502                0.041 \u2502 \u2588\u2588                                         \u2502\n\u2502     0 \u2502    8 \u2502                0.038 \u2502 \u2588\u258a                                        \u2502\n\u2502     0 \u2502    9 \u2502                0.036 \u2502 \u2588\u258b                                        \u2502\n\u2502     0 \u2502   10 \u2502                0.033 \u2502 \u2588\u258b                                        \u2502\n\u2502     0 \u2502   11 \u2502                0.031 \u2502 \u2588\u258c                                         \u2502\n\u2502     0 \u2502   12 \u2502                0.029 \u2502 \u2588\u258d                                        \u2502\n\u2502     0 \u2502   13 \u2502                0.027 \u2502 \u2588\u258e                                        \u2502\n\u2502     0 \u2502   14 \u2502                0.025 \u2502 \u2588\u258e                                        \u2502\n\u2502     0 \u2502   15 \u2502                0.024 \u2502 \u2588\u258f                                        \u2502\n\u2502     0 \u2502   16 \u2502                0.022 \u2502 \u2588                                          \u2502\n\u2502     0 \u2502   17 \u2502                0.021 \u2502 \u2588                                          \u2502\n\u2502     0 \u2502   18 \u2502                0.019 \u2502 \u258a                                         \u2502\n\u2502     0 \u2502   19 \u2502                0.018 \u2502 \u258a                                         \u2502\n\u2502     0 \u2502   20 \u2502                0.017 \u2502 \u258b                                         \u2502\n\u2502     0 \u2502   21 \u2502                0.016 \u2502 \u258b                                         \u2502\n\u2502     0 \u2502   22 \u2502                0.015 \u2502 \u258b                                         \u2502\n\u2502     0 \u2502   23 \u2502                0.014 \u2502 \u258b                                         \u2502\n\u2502     0 \u2502   24 \u2502                0.013 \u2502 \u258b                                         \u2502\n\u2502     1 \u2502   25 \u2502                0.079 \u2502 \u2588\u2588\u2588\u258a                                      \u2502\n\u2502     1 \u2502   26 \u2502                 0.14 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588                                    \u2502\n\u2502     1 \u2502   27 \u2502                0.198 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a                                \u2502\n\u2502     1 \u2502   28 \u2502                0.252 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c                              \u2502\n\u2502     1 \u2502   29 \u2502                0.302 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                            \u2502\n\u2502     1 \u2502   30 \u2502                0.349 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d                        \u2502\n\u2502     1 \u2502   31 \u2502                0.392 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c                       \u2502\n\u2502     1 \u2502   32 \u2502                0.433 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b                    \u2502\n\u2502     1 \u2502   33 \u2502                0.471 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c                   \u2502\n\u2502     1 \u2502   34 \u2502                0.506 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e                \u2502\n\u2502     1 \u2502   35 \u2502                0.539 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a               \u2502\n\u2502     1 \u2502   36 \u2502                 0.57 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c              \u2502\n\u2502     1 \u2502   37 \u2502                0.599 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a            \u2502\n\u2502     1 \u2502   38 \u2502                0.626 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e          \u2502\n\u2502     1 \u2502   39 \u2502                0.651 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258c          \u2502\n\u2502     1 \u2502   40 \u2502                0.674 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b        \u2502\n\u2502     1 \u2502   41 \u2502                0.696 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b       \u2502\n\u2502     1 \u2502   42 \u2502                0.716 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b      \u2502\n\u2502     1 \u2502   43 \u2502                0.735 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b     \u2502\n\u2502     1 \u2502   44 \u2502                0.753 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b    \u2502\n\u2502     1 \u2502   45 \u2502                 0.77 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258d   \u2502\n\u2502     1 \u2502   46 \u2502                0.785 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e  \u2502\n\u2502     1 \u2502   47 \u2502                  0.8 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258a  \u2502\n\u2502     1 \u2502   48 \u2502                0.813 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258b \u2502\n\u2502     1 \u2502   49 \u2502                0.825 \u2502 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u258e\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}f.isMDXComponent=!0}}]);