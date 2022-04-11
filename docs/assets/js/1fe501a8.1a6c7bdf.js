"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[59748],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return k}});var l=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=l.createContext({}),u=function(e){var n=l.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return l.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(t),k=r,f=m["".concat(o,".").concat(k)]||m[k]||c[k]||a;return t?l.createElement(f,i(i({ref:n},s),{},{components:t})):l.createElement(f,i({ref:n},s))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},90985:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c}});var l=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],p={},o="\u6761\u4ef6\u51fd\u6570",u={unversionedId:"zh/sql-reference/functions/conditional-functions",id:"zh/sql-reference/functions/conditional-functions",title:"\u6761\u4ef6\u51fd\u6570",description:"tiao-jian-han-shu}",source:"@site/docs/zh/sql-reference/functions/conditional-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/conditional-functions",permalink:"/zh/sql-reference/functions/conditional-functions",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/sql-reference/functions/conditional-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u4f4d\u56fe\u51fd\u6570",permalink:"/zh/sql-reference/functions/bitmap-functions"},next:{title:"\u65f6\u95f4\u65e5\u671f\u51fd\u6570",permalink:"/zh/sql-reference/functions/date-time-functions"}},s={},c=[{value:"if",id:"if",level:2},{value:"\u4e09\u5143\u8fd0\u7b97\u7b26",id:"ternary-operator",level:2},{value:"multiIf",id:"multiif",level:2},{value:"\u76f4\u63a5\u4f7f\u7528\u6761\u4ef6\u7ed3\u679c",id:"using-conditional-results-directly",level:2},{value:"\u6761\u4ef6\u4e2d\u7684NULL\u503c",id:"null-values-in-conditionals",level:2}],m={toc:c};function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,l.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tiao-jian-han-shu"},"\u6761\u4ef6\u51fd\u6570"),(0,a.kt)("h2",{id:"if"},"if"),(0,a.kt)("p",null,"\u63a7\u5236\u6761\u4ef6\u5206\u652f\u3002 \u4e0e\u5927\u591a\u6570\u7cfb\u7edf\u4e0d\u540c\uff0cClickHouse\u59cb\u7ec8\u8bc4\u4f30\u4e24\u4e2a\u8868\u8fbe\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"else"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8bed\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT if(cond, then, else)\n")),(0,a.kt)("p",null,"\u5982\u679c\u6761\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," \u7684\u8ba1\u7b97\u7ed3\u679c\u4e3a\u975e\u96f6\u503c\uff0c\u5219\u8fd4\u56de\u8868\u8fbe\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," \u7684\u7ed3\u679c\uff0c\u5e76\u4e14\u8df3\u8fc7\u8868\u8fbe\u5f0f ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," \u7684\u7ed3\u679c\uff08\u5982\u679c\u5b58\u5728\uff09\u3002 \u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," \u4e3a\u96f6\u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\uff0c\u5219\u5c06\u8df3\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," \u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\uff0c\u5e76\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," \u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\uff08\u5982\u679c\u5b58\u5728\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cond")," \u2013 \u6761\u4ef6\u7ed3\u679c\u53ef\u4ee5\u4e3a\u96f6\u6216\u4e0d\u4e3a\u96f6\u3002 \u7c7b\u578b\u662f UInt8\uff0cNullable(UInt8) \u6216 NULL\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"then")," - \u5982\u679c\u6ee1\u8db3\u6761\u4ef6\u5219\u8fd4\u56de\u7684\u8868\u8fbe\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"else")," - \u5982\u679c\u4e0d\u6ee1\u8db3\u6761\u4ef6\u5219\u8fd4\u56de\u7684\u8868\u8fbe\u5f0f\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"then")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"else")," \u8868\u8fbe\u5f0f\u5e76\u8fd4\u56de\u5176\u7ed3\u679c\uff0c\u8fd9\u53d6\u51b3\u4e8e\u6761\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"cond")," \u6700\u7ec8\u662f\u5426\u4e3a\u96f6\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT if(1, plus(2, 2), plus(2, 6))\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(2, 2)\u2500\u2510\n\u2502          4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u67e5\u8be2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT if(0, plus(2, 2), plus(2, 6))\n")),(0,a.kt)("p",null,"\u7ed3\u679c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500plus(2, 6)\u2500\u2510\n\u2502          8 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"then")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"else")," \u5fc5\u987b\u5177\u6709\u6700\u4f4e\u7684\u901a\u7528\u7c7b\u578b\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b:")),(0,a.kt)("p",null,"\u7ed9\u5b9a\u8868",(0,a.kt)("inlineCode",{parentName:"p"},"LEFT_RIGHT"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM LEFT_RIGHT\n\n\u250c\u2500left\u2500\u252c\u2500right\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502     4 \u2502\n\u2502    1 \u2502     3 \u2502\n\u2502    2 \u2502     2 \u2502\n\u2502    3 \u2502     1 \u2502\n\u2502    4 \u2502  \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u67e5\u8be2\u6bd4\u8f83\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"left")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"right")," \u7684\u503c:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    left,\n    right,\n    if(left < right, 'left is smaller than right', 'right is greater or equal than left') AS is_smaller\nFROM LEFT_RIGHT\nWHERE isNotNull(left) AND isNotNull(right)\n\n\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500is_smaller\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502    1 \u2502     3 \u2502 left is smaller than right          \u2502\n\u2502    2 \u2502     2 \u2502 right is greater or equal than left \u2502\n\u2502    3 \u2502     1 \u2502 right is greater or equal than left \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u5728\u6b64\u793a\u4f8b\u4e2d\u672a\u4f7f\u7528'NULL'\u503c\uff0c\u8bf7\u68c0\u67e5",(0,a.kt)("a",{parentName:"p",href:"#null-values-in-conditionals"},"\u6761\u4ef6\u4e2d\u7684NULL\u503c")," \u90e8\u5206\u3002"),(0,a.kt)("h2",{id:"ternary-operator"},"\u4e09\u5143\u8fd0\u7b97\u7b26"),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," \u51fd\u6570\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5: ",(0,a.kt)("inlineCode",{parentName:"p"},"cond ? then : else")),(0,a.kt)("p",null,"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"cond \uff01= 0"),"\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"then"),"\uff0c\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"cond = 0"),"\u5219\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"p"},"else"),"\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"cond"),"\u5fc5\u987b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"UInt8"),"\u7c7b\u578b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"then"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"else"),"\u5fc5\u987b\u5b58\u5728\u6700\u4f4e\u7684\u5171\u540c\u7c7b\u578b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"then"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"else"),"\u53ef\u4ee5\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")))),(0,a.kt)("h2",{id:"multiif"},"multiIf"),(0,a.kt)("p",null,"\u5141\u8bb8\u60a8\u5728\u67e5\u8be2\u4e2d\u66f4\u7d27\u51d1\u5730\u7f16\u5199",(0,a.kt)("a",{parentName:"p",href:"/zh/sql-reference/operators/#operator_case"},"CASE"),"\u8fd0\u7b97\u7b26\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"multiIf(cond_1, then_1, cond_2, then_2...else)\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cond_N")," \u2014 \u51fd\u6570\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"then_N"),"\u7684\u6761\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"then_N")," \u2014 \u6267\u884c\u65f6\u51fd\u6570\u7684\u7ed3\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"else")," \u2014 \u5982\u679c\u6ca1\u6709\u6ee1\u8db3\u4efb\u4f55\u6761\u4ef6\uff0c\u5219\u4e3a\u51fd\u6570\u7684\u7ed3\u679c\u3002")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u63a5\u53d7",(0,a.kt)("inlineCode",{parentName:"p"},"2N + 1"),"\u53c2\u6570\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c")),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u8fd4\u56de\u503c\xabthen_N\xbb\u6216\xabelse\xbb\u4e4b\u4e00\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u6761\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"cond_N"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u518d\u6b21\u4f7f\u7528\u8868 ",(0,a.kt)("inlineCode",{parentName:"p"},"LEFT_RIGHT")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    left,\n    right,\n    multiIf(left < right, 'left is smaller', left > right, 'left is greater', left = right, 'Both equal', 'Null value') AS result\nFROM LEFT_RIGHT\n\n\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500result\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502     4 \u2502 Null value      \u2502\n\u2502    1 \u2502     3 \u2502 left is smaller \u2502\n\u2502    2 \u2502     2 \u2502 Both equal      \u2502\n\u2502    3 \u2502     1 \u2502 left is greater \u2502\n\u2502    4 \u2502  \u1d3a\u1d41\u1d38\u1d38 \u2502 Null value      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"using-conditional-results-directly"},"\u76f4\u63a5\u4f7f\u7528\u6761\u4ef6\u7ed3\u679c"),(0,a.kt)("p",null,"\u6761\u4ef6\u7ed3\u679c\u59cb\u7ec8\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3002 \u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u50cf\u8fd9\u6837\u76f4\u63a5\u4f7f\u7528\u6761\u4ef6\u7ed3\u679c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT left < right AS is_small\nFROM LEFT_RIGHT\n\n\u250c\u2500is_small\u2500\u2510\n\u2502     \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2502        1 \u2502\n\u2502        0 \u2502\n\u2502        0 \u2502\n\u2502     \u1d3a\u1d41\u1d38\u1d38 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("h2",{id:"null-values-in-conditionals"},"\u6761\u4ef6\u4e2d\u7684NULL\u503c"),(0,a.kt)("p",null,"\u5f53\u6761\u4ef6\u4e2d\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL")," \u503c\u65f6\uff0c\u7ed3\u679c\u4e5f\u5c06\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"NULL"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    NULL < 1,\n    2 < NULL,\n    NULL < NULL,\n    NULL = NULL\n\n\u250c\u2500less(NULL, 1)\u2500\u252c\u2500less(2, NULL)\u2500\u252c\u2500less(NULL, NULL)\u2500\u252c\u2500equals(NULL, NULL)\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38          \u2502 \u1d3a\u1d41\u1d38\u1d38          \u2502 \u1d3a\u1d41\u1d38\u1d38             \u2502 \u1d3a\u1d41\u1d38\u1d38               \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u5982\u679c\u7c7b\u578b\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Nullable"),"\uff0c\u4f60\u5e94\u8be5\u4ed4\u7ec6\u6784\u9020\u67e5\u8be2\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u8bf4\u660e\u8fd9\u4e00\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    left,\n    right,\n    multiIf(left < right, 'left is smaller', left > right, 'right is smaller', 'Both equal') AS faulty_result\nFROM LEFT_RIGHT\n\n\u250c\u2500left\u2500\u252c\u2500right\u2500\u252c\u2500faulty_result\u2500\u2500\u2500\u2500\u2510\n\u2502 \u1d3a\u1d41\u1d38\u1d38 \u2502     4 \u2502 Both equal       \u2502\n\u2502    1 \u2502     3 \u2502 left is smaller  \u2502\n\u2502    2 \u2502     2 \u2502 Both equal       \u2502\n\u2502    3 \u2502     1 \u2502 right is smaller \u2502\n\u2502    4 \u2502  \u1d3a\u1d41\u1d38\u1d38 \u2502 Both equal       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/conditional_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}k.isMDXComponent=!0}}]);