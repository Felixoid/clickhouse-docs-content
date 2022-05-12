"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[74853],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,d=u["".concat(o,".").concat(f)]||u[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80878:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_label:"FROM"},o="FROM\u5b50\u53e5",c={unversionedId:"zh/sql-reference/statements/select/from",id:"zh/sql-reference/statements/select/from",title:"FROM\u5b50\u53e5",description:"select-from}",source:"@site/docs/zh/sql-reference/statements/select/from.md",sourceDirName:"zh/sql-reference/statements/select",slug:"/zh/sql-reference/statements/select/from",permalink:"/docs/zh/sql-reference/statements/select/from",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/statements/select/from.md",tags:[],version:"current",frontMatter:{sidebar_label:"FROM"},sidebar:"chinese",previous:{title:"FORMAT",permalink:"/docs/zh/sql-reference/statements/select/format"},next:{title:"GROUP BY",permalink:"/docs/zh/sql-reference/statements/select/group-by"}},p={},m=[{value:"FINAL \u4fee\u9970\u7b26",id:"select-from-final",level:2},{value:"\u7f3a\u70b9",id:"drawbacks",level:3},{value:"\u5b9e\u73b0\u7ec6\u8282",id:"implementation-details",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"select-from"},"FROM\u5b50\u53e5"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \u5b50\u53e5\u6307\u5b9a\u4ece\u4ee5\u4e0b\u6570\u636e\u6e90\u4e2d\u8bfb\u53d6\u6570\u636e:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/"},"\u8868")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/statements/select/"},"\u5b50\u67e5\u8be2")," {## TODO: better link ##}"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/sql-reference/table-functions/#table-functions"},"\u8868\u51fd\u6570"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/join"},"JOIN")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/array-join"},"ARRAY JOIN")," \u5b50\u53e5\u4e5f\u53ef\u4ee5\u7528\u6765\u6269\u5c55 ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \u7684\u529f\u80fd"),(0,l.kt)("p",null,"\u5b50\u67e5\u8be2\u662f\u53e6\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u53ef\u4ee5\u6307\u5b9a\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \u540e\u7684\u62ec\u53f7\u5185\u7684\u67e5\u8be2\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \u5b50\u53e5\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u6570\u636e\u6e90\uff0c\u7528\u9017\u53f7\u5206\u9694\uff0c\u8fd9\u76f8\u5f53\u4e8e\u5728\u4ed6\u4eec\u8eab\u4e0a\u6267\u884c ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/sql-reference/statements/select/join"},"CROSS JOIN")),(0,l.kt)("h2",{id:"select-from-final"},"FINAL \u4fee\u9970\u7b26"),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"FINAL")," \u88ab\u6307\u5b9a\uff0cClickHouse\u4f1a\u5728\u8fd4\u56de\u7ed3\u679c\u4e4b\u524d\u5b8c\u5168\u5408\u5e76\u6570\u636e\uff0c\u4ece\u800c\u6267\u884c\u7ed9\u5b9a\u8868\u5f15\u64ce\u5408\u5e76\u671f\u95f4\u53d1\u751f\u7684\u6240\u6709\u6570\u636e\u8f6c\u6362\u3002"),(0,l.kt)("p",null,"\u5b83\u9002\u7528\u4e8e\u4ece\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"-\u5f15\u64ce\u65cf. \u8fd8\u652f\u6301:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/mergetree-family/replication"},"Replicated")," \u7248\u672c ",(0,l.kt)("inlineCode",{parentName:"li"},"MergeTree")," \u5f15\u64ce"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/view"},"View"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/buffer"},"Buffer"),", ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/distributed"},"Distributed"),"\uff0c\u548c ",(0,l.kt)("a",{parentName:"li",href:"/docs/zh/engines/table-engines/special/materializedview"},"MaterializedView")," \u5728\u5176\u4ed6\u5f15\u64ce\u4e0a\u8fd0\u884c\u7684\u5f15\u64ce\uff0c\u53ea\u8981\u662f\u5b83\u4eec\u5e95\u5c42\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"MergeTree"),"-\u5f15\u64ce\u8868\u5373\u53ef\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"FINAL")," \u4fee\u9970\u7b26 \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u67e5\u8be2\u542f\u7528\u4e86\u5e76\u53d1\u6267\u884c, \u8fd9\u4f1a\u5feb\u4e00\u70b9\u3002\u4f46\u662f\u4ecd\u7136\u5b58\u5728\u7f3a\u9677 (\u89c1\u4e0b)\u3002  ",(0,l.kt)("a",{parentName:"p",href:"/docs/zh/operations/settings/settings#max-final-threads"},"max_final_threads")," \u8bbe\u7f6e\u4f7f\u7528\u7684\u6700\u5927\u7ebf\u7a0b\u6570\u9650\u5236\u3002"),(0,l.kt)("h3",{id:"drawbacks"},"\u7f3a\u70b9"),(0,l.kt)("p",null,"\u4f7f\u7528\u7684\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"FINAL")," \u6267\u884c\u901f\u5ea6\u6bd4\u7c7b\u4f3c\u7684\u67e5\u8be2\u6162\u4e00\u70b9\uff0c\u56e0\u4e3a:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u67e5\u8be2\u6267\u884c\u671f\u95f4\u5408\u5e76\u6570\u636e\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u4e0e ",(0,l.kt)("inlineCode",{parentName:"li"},"FINAL")," \u9664\u4e86\u8bfb\u53d6\u67e5\u8be2\u4e2d\u6307\u5b9a\u7684\u5217\u4e4b\u5916\uff0c\u8fd8\u8bfb\u53d6\u4e3b\u952e\u5217\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u907f\u514d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"strong"},"FINAL"),".")," \u5e38\u89c1\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u5047\u8bbe\u540e\u53f0\u8fdb\u7a0b\u7684\u4e0d\u540c\u67e5\u8be2 ",(0,l.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u5f15\u64ce\u8fd8\u6ca1\u6709\u53d1\u751f\uff0c\u5e76\u901a\u8fc7\u5e94\u7528\u805a\u5408\uff08\u4f8b\u5982\uff0c\u4e22\u5f03\u91cd\u590d\u9879\uff09\u6765\u5904\u7406\u5b83\u3002 {## TODO: examples ##}"),(0,l.kt)("h2",{id:"implementation-details"},"\u5b9e\u73b0\u7ec6\u8282"),(0,l.kt)("p",null,"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM")," \u5b50\u53e5\u88ab\u7701\u7565\uff0c\u6570\u636e\u5c06\u4ece\u8bfb\u53d6 ",(0,l.kt)("inlineCode",{parentName:"p"},"system.one")," \u8868\u3002\n\u8be5 ",(0,l.kt)("inlineCode",{parentName:"p"},"system.one")," \u8868\u53ea\u5305\u542b\u4e00\u884c\uff08\u6b64\u8868\u6ee1\u8db3\u4e0e\u5176\u4ed6 DBMS \u4e2d\u7684 DUAL \u8868\u6709\u76f8\u540c\u7684\u4f5c\u7528\uff09\u3002"),(0,l.kt)("p",null,"\u82e5\u8981\u6267\u884c\u67e5\u8be2\uff0c\u5c06\u4ece\u76f8\u5e94\u7684\u8868\u4e2d\u63d0\u53d6\u67e5\u8be2\u4e2d\u5217\u51fa\u7684\u6240\u6709\u5217\u3002 \u5916\u90e8\u67e5\u8be2\u4e0d\u9700\u8981\u7684\u4efb\u4f55\u5217\u90fd\u5c06\u4ece\u5b50\u67e5\u8be2\u4e2d\u629b\u51fa\u3002\n\u5982\u679c\u67e5\u8be2\u672a\u5217\u51fa\u4efb\u4f55\u5217\uff08\u4f8b\u5982, ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT count() FROM t"),"\uff09\uff0c\u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u4ece\u8868\u4e2d\u63d0\u53d6\u4e00\u4e9b\u5217\uff08\u9996\u9009\u662f\u6700\u5c0f\u7684\u5217\uff09\uff0c\u4ee5\u4fbf\u8ba1\u7b97\u884c\u6570\u3002"))}f.isMDXComponent=!0}}]);