"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[1954],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=s(r),k=o,f=m["".concat(u,".").concat(k)]||m[k]||p[k]||i;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80222:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),l=["components"],a={sidebar_position:44,sidebar_label:"\u5fc5\u5907\u6761\u4ef6"},u="\u5fc5\u5907\u6761\u4ef6",s={unversionedId:"zh/operations/requirements",id:"zh/operations/requirements",title:"\u5fc5\u5907\u6761\u4ef6",description:"requirements}",source:"@site/docs/zh/operations/requirements.md",sourceDirName:"zh/operations",slug:"/zh/operations/requirements",permalink:"/zh/operations/requirements",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/operations/requirements.md",tags:[],version:"current",sidebarPosition:44,frontMatter:{sidebar_position:44,sidebar_label:"\u5fc5\u5907\u6761\u4ef6"},sidebar:"chinese",previous:{title:"\u64cd\u4f5c",permalink:"/zh/operations/"},next:{title:"\u76d1\u63a7",permalink:"/zh/operations/monitoring"}},c={},p=[{value:"CPU",id:"cpu",level:2},{value:"RAM",id:"ram",level:2},{value:"\u4ea4\u6362\u6587\u4ef6",id:"swap-file",level:2},{value:"\u5b58\u50a8\u5b50\u7cfb\u7edf",id:"storage-subsystem",level:2},{value:"\u7f51\u7edc",id:"network",level:2},{value:"\u8f6f\u4ef6",id:"software",level:2}],m={toc:p};function k(e){var t=e.components,r=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"requirements"},"\u5fc5\u5907\u6761\u4ef6"),(0,i.kt)("h2",{id:"cpu"},"CPU"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u9884\u7f16\u8bd1\u7684DEB/RPM\u5305\u5b89\u88c5ClickHouse\uff0c\u8bf7\u4f7f\u7528\u652f\u6301SSE4.2\u6307\u4ee4\u96c6\u7684x86_64\u67b6\u6784\u7684CPU\u3002\u5982\u679c\u9700\u8981\u5728\u4e0d\u652f\u6301SSE4.2\u6307\u4ee4\u96c6\u7684CPU\u4e0a\uff0c\u6216\u8005\u5728AArch64\uff08ARM\uff09\u548cPowerPC64LE\uff08IBM Power\uff09\u67b6\u6784\u4e0a\u8fd0\u884cClickHouse\uff0c\u60a8\u5e94\u8be5\u4ece\u6e90\u7801\u7f16\u8bd1ClickHouse\u3002"),(0,i.kt)("p",null,"ClickHouse\u5b9e\u73b0\u4e86\u5e76\u884c\u6570\u636e\u5904\u7406\uff0c\u5904\u7406\u65f6\u4f1a\u4f7f\u7528\u6240\u6709\u7684\u53ef\u7528\u8d44\u6e90\u3002\u5728\u9009\u62e9\u5904\u7406\u5668\u65f6\uff0c\u8bf7\u6ce8\u610f\uff1aClickHouse\u5728\u5177\u6709\u5927\u91cf\u8ba1\u7b97\u6838\u3001\u65f6\u949f\u9891\u7387\u7a0d\u4f4e\u7684\u5e73\u53f0\u4e0a\u6bd4\u8ba1\u7b97\u6838\u5c11\u3001\u65f6\u949f\u9891\u7387\u9ad8\u7684\u5e73\u53f0\u4e0a\u6548\u7387\u66f4\u9ad8\u3002\u4f8b\u5982\uff0cClickHouse\u572816\u6838 2.6GHz\u7684CPU\u4e0a\u8fd0\u884c\u901f\u5ea6\u9ad8\u4e8e8\u6838 3.6GHz\u7684CPU\u3002"),(0,i.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528 ",(0,i.kt)("strong",{parentName:"p"},"\u777f\u9891\u52a0\u901f")," \u548c ",(0,i.kt)("strong",{parentName:"p"},"\u8d85\u7ebf\u7a0b")," \u6280\u672f\u3002 \u5b83\u663e\u7740\u63d0\u9ad8\u4e86\u6b63\u5e38\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6027\u80fd\u3002"),(0,i.kt)("h2",{id:"ram"},"RAM"),(0,i.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u81f3\u5c114GB\u7684\u5185\u5b58\u6765\u6267\u884c\u91cd\u8981\u7684\u67e5\u8be2\u3002 ClickHouse\u670d\u52a1\u5668\u53ef\u4ee5\u4f7f\u7528\u5f88\u5c11\u7684\u5185\u5b58\u8fd0\u884c\uff0c\u4f46\u5b83\u9700\u8981\u4e00\u5b9a\u91cf\u7684\u5185\u5b58\u7528\u4e8e\u5904\u7406\u67e5\u8be2\u3002"),(0,i.kt)("p",null,"ClickHouse\u6240\u9700\u5185\u5b58\u53d6\u51b3\u4e8e:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u7684\u590d\u6742\u7a0b\u5ea6\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u5904\u7406\u7684\u6570\u636e\u91cf\u3002")),(0,i.kt)("p",null,"\u8981\u8ba1\u7b97\u6240\u9700\u7684\u5185\u5b58\u5927\u5c0f\uff0c\u60a8\u5e94\u8be5\u8003\u8651\u7528\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/group-by#select-group-by-clause"},"GROUP BY"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/distinct#select-distinct"},"DISTINCT"),"\u3001",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/join#select-join"},"JOIN")," \u548c\u5176\u4ed6\u64cd\u4f5c\u6240\u9700\u7684\u4e34\u65f6\u6570\u636e\u91cf\u3002"),(0,i.kt)("p",null,"ClickHouse\u53ef\u4ee5\u4f7f\u7528\u5916\u90e8\u5b58\u50a8\u5668\u6765\u5b58\u50a8\u4e34\u65f6\u6570\u636e\u3002\u8be6\u60c5\u8bf7\u89c1",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/select/group-by#select-group-by-in-external-memory"},"\u5728\u5916\u90e8\u5b58\u50a8\u5668\u4e2d\u5206\u7ec4"),"\u3002"),(0,i.kt)("h2",{id:"swap-file"},"\u4ea4\u6362\u6587\u4ef6"),(0,i.kt)("p",null,"\u8bf7\u5728\u751f\u4ea7\u73af\u5883\u7981\u7528\u4ea4\u6362\u6587\u4ef6\u3002"),(0,i.kt)("h2",{id:"storage-subsystem"},"\u5b58\u50a8\u5b50\u7cfb\u7edf"),(0,i.kt)("p",null,"\u60a8\u9700\u8981\u67092GB\u7684\u53ef\u7528\u78c1\u76d8\u7a7a\u95f4\u6765\u5b89\u88c5ClickHouse\u3002"),(0,i.kt)("p",null,"\u6570\u636e\u6240\u9700\u7684\u5b58\u50a8\u7a7a\u95f4\u5e94\u5355\u72ec\u8ba1\u7b97\u3002\u9884\u4f30\u5b58\u50a8\u5bb9\u91cf\u65f6\u8bf7\u8003\u8651:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6570\u636e\u91cf"),(0,i.kt)("p",{parentName:"li"},"  \u60a8\u53ef\u4ee5\u5bf9\u6570\u636e\u8fdb\u884c\u91c7\u6837\u5e76\u8ba1\u7b97\u6bcf\u884c\u7684\u5e73\u5747\u5360\u7528\u7a7a\u95f4\u3002\u7136\u540e\u5c06\u8be5\u503c\u4e58\u4ee5\u8ba1\u5212\u5b58\u50a8\u7684\u884c\u6570\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6570\u636e\u538b\u7f29\u6bd4"),(0,i.kt)("p",{parentName:"li"},"  \u8981\u8ba1\u7b97\u6570\u636e\u538b\u7f29\u6bd4\uff0c\u8bf7\u5c06\u6837\u672c\u6570\u636e\u5199\u5165ClickHouse\uff0c\u5e76\u5c06\u539f\u59cb\u6570\u636e\u5927\u5c0f\u4e0eClickHouse\u5b9e\u9645\u5b58\u50a8\u7684\u6570\u636e\u8fdb\u884c\u6bd4\u8f83\u3002\u4f8b\u5982\uff0c\u7528\u6237\u70b9\u51fb\u884c\u4e3a\u7684\u539f\u59cb\u6570\u636e\u538b\u7f29\u6bd4\u901a\u5e38\u4e3a6-10\u3002"))),(0,i.kt)("p",null,"\u8bf7\u5c06\u539f\u59cb\u6570\u636e\u7684\u5927\u5c0f\u9664\u4ee5\u538b\u7f29\u6bd4\u6765\u83b7\u5f97\u5b9e\u9645\u6240\u9700\u5b58\u50a8\u7684\u5927\u5c0f\u3002\u5982\u679c\u60a8\u6253\u7b97\u5c06\u6570\u636e\u5b58\u653e\u4e8e\u51e0\u4e2a\u526f\u672c\u4e2d\uff0c\u8bf7\u5c06\u5b58\u50a8\u5bb9\u91cf\u4e58\u4e0a\u526f\u672c\u6570\u3002"),(0,i.kt)("h2",{id:"network"},"\u7f51\u7edc"),(0,i.kt)("p",null,"\u5982\u679c\u53ef\u80fd\u7684\u8bdd\uff0c\u8bf7\u4f7f\u752810G\u6216\u66f4\u9ad8\u7ea7\u522b\u7684\u7f51\u7edc\u3002"),(0,i.kt)("p",null,"\u7f51\u7edc\u5e26\u5bbd\u5bf9\u4e8e\u5904\u7406\u5177\u6709\u5927\u91cf\u4e2d\u95f4\u7ed3\u679c\u6570\u636e\u7684\u5206\u5e03\u5f0f\u67e5\u8be2\u81f3\u5173\u91cd\u8981\u3002\u6b64\u5916\uff0c\u7f51\u7edc\u901f\u5ea6\u4f1a\u5f71\u54cd\u590d\u5236\u8fc7\u7a0b\u3002"),(0,i.kt)("h2",{id:"software"},"\u8f6f\u4ef6"),(0,i.kt)("p",null,"ClickHouse\u4e3b\u8981\u662f\u4e3aLinux\u7cfb\u5217\u64cd\u4f5c\u7cfb\u7edf\u5f00\u53d1\u7684\u3002\u63a8\u8350\u7684Linux\u53d1\u884c\u7248\u662fUbuntu\u3002\u60a8\u9700\u8981\u68c0\u67e5",(0,i.kt)("inlineCode",{parentName:"p"},"tzdata"),"\uff08\u5bf9\u4e8eUbuntu\uff09\u8f6f\u4ef6\u5305\u662f\u5426\u5728\u5b89\u88c5ClickHouse\u4e4b\u524d\u5df2\u7ecf\u5b89\u88c5\u3002"),(0,i.kt)("p",null,"ClickHouse\u4e5f\u53ef\u4ee5\u5728\u5176\u4ed6\u64cd\u4f5c\u7cfb\u7edf\u7cfb\u5217\u4e2d\u5de5\u4f5c\u3002\u8be6\u60c5\u8bf7\u67e5\u770b",(0,i.kt)("a",{parentName:"p",href:"/zh/getting-started/"},"\u5f00\u59cb"),"\u3002"))}k.isMDXComponent=!0}}]);