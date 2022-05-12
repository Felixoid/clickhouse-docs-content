"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38156],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),o=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=o(e.components);return r.createElement(p.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),s=o(t),c=a,k=s["".concat(p,".").concat(c)]||s[c]||g[c]||i;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=s;var m={};for(var p in n)hasOwnProperty.call(n,p)&&(m[p]=n[p]);m.originalType=e,m.mdxType="string"==typeof e?e:a,l[1]=m;for(var o=2;o<i;o++)l[o]=t[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7373:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return m},metadata:function(){return o},toc:function(){return g}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],m={},p="SummingMergeTree",o={unversionedId:"zh/engines/table-engines/mergetree-family/summingmergetree",id:"zh/engines/table-engines/mergetree-family/summingmergetree",title:"SummingMergeTree",description:"summingmergetree}",source:"@site/docs/zh/engines/table-engines/mergetree-family/summingmergetree.md",sourceDirName:"zh/engines/table-engines/mergetree-family",slug:"/zh/engines/table-engines/mergetree-family/summingmergetree",permalink:"/docs/zh/engines/table-engines/mergetree-family/summingmergetree",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/engines/table-engines/mergetree-family/summingmergetree.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u6570\u636e\u526f\u672c",permalink:"/docs/zh/engines/table-engines/mergetree-family/replication"},next:{title:"\u65e5\u5fd7\u5f15\u64ce\u7cfb\u5217",permalink:"/docs/zh/engines/table-engines/log-family/"}},u={},g=[{value:"\u5efa\u8868",id:"jian-biao",level:2},{value:"\u7528\u6cd5\u793a\u4f8b",id:"yong-fa-shi-li",level:2},{value:"\u6570\u636e\u5904\u7406",id:"data-processing",level:2},{value:"\u6c47\u603b\u7684\u901a\u7528\u89c4\u5219",id:"hui-zong-de-tong-yong-gui-ze",level:3},{value:"AggregateFunction \u5217\u4e2d\u7684\u6c47\u603b",id:"aggregatefunction-lie-zhong-de-hui-zong",level:3},{value:"\u5d4c\u5957\u7ed3\u6784",id:"qian-tao-jie-gou",level:3}],s={toc:g};function c(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"summingmergetree"},"SummingMergeTree"),(0,i.kt)("p",null,"\u8be5\u5f15\u64ce\u7ee7\u627f\u81ea ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),"\u3002\u533a\u522b\u5728\u4e8e\uff0c\u5f53\u5408\u5e76 ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," \u8868\u7684\u6570\u636e\u7247\u6bb5\u65f6\uff0cClickHouse \u4f1a\u628a\u6240\u6709\u5177\u6709\u76f8\u540c\u4e3b\u952e\u7684\u884c\u5408\u5e76\u4e3a\u4e00\u884c\uff0c\u8be5\u884c\u5305\u542b\u4e86\u88ab\u5408\u5e76\u7684\u884c\u4e2d\u5177\u6709\u6570\u503c\u6570\u636e\u7c7b\u578b\u7684\u5217\u7684\u6c47\u603b\u503c\u3002\u5982\u679c\u4e3b\u952e\u7684\u7ec4\u5408\u65b9\u5f0f\u4f7f\u5f97\u5355\u4e2a\u952e\u503c\u5bf9\u5e94\u4e8e\u5927\u91cf\u7684\u884c\uff0c\u5219\u53ef\u4ee5\u663e\u8457\u7684\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u5e76\u52a0\u5feb\u6570\u636e\u67e5\u8be2\u7684\u901f\u5ea6\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u5c06\u8be5\u5f15\u64ce\u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u4e00\u8d77\u4f7f\u7528\u3002\u4f8b\u5982\uff0c\u5728\u51c6\u5907\u505a\u62a5\u544a\u7684\u65f6\u5019\uff0c\u5c06\u5b8c\u6574\u7684\u6570\u636e\u5b58\u50a8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u8868\u4e2d\uff0c\u5e76\u4e14\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," \u6765\u5b58\u50a8\u805a\u5408\u6570\u636e\u3002\u8fd9\u79cd\u65b9\u6cd5\u53ef\u4ee5\u4f7f\u4f60\u907f\u514d\u56e0\u4e3a\u4f7f\u7528\u4e0d\u6b63\u786e\u7684\u4e3b\u952e\u7ec4\u5408\u65b9\u5f0f\u800c\u4e22\u5931\u6709\u4ef7\u503c\u7684\u6570\u636e\u3002"),(0,i.kt)("h2",{id:"jian-biao"},"\u5efa\u8868"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE = SummingMergeTree([columns])\n[PARTITION BY expr]\n[ORDER BY expr]\n[SAMPLE BY expr]\n[SETTINGS name=value, ...]\n")),(0,i.kt)("p",null,"\u8bf7\u6c42\u53c2\u6570\u7684\u63cf\u8ff0\uff0c\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/summingmergetree"},"\u8bf7\u6c42\u63cf\u8ff0"),"\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SummingMergeTree \u7684\u53c2\u6570")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"columns")," - \u5305\u542b\u4e86\u5c06\u8981\u88ab\u6c47\u603b\u7684\u5217\u7684\u5217\u540d\u7684\u5143\u7ec4\u3002\u53ef\u9009\u53c2\u6570\u3002\n\u6240\u9009\u7684\u5217\u5fc5\u987b\u662f\u6570\u503c\u7c7b\u578b\uff0c\u5e76\u4e14\u4e0d\u53ef\u4f4d\u4e8e\u4e3b\u952e\u4e2d\u3002"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a `columns`\uff0cClickHouse \u4f1a\u628a\u6240\u6709\u4e0d\u5728\u4e3b\u952e\u4e2d\u7684\u6570\u503c\u7c7b\u578b\u7684\u5217\u90fd\u8fdb\u884c\u6c47\u603b\u3002\n")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5b50\u53e5")),(0,i.kt)("p",null,"\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"SummingMergeTree")," \u8868\u65f6\uff0c\u9700\u8981\u4e0e\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u8868\u65f6\u76f8\u540c\u7684",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/mergetree"},"\u5b50\u53e5"),"\u3002"),(0,i.kt)("details",{markdown:"1"},(0,i.kt)("summary",null,"\u5df2\u5f03\u7528\u7684\u5efa\u8868\u65b9\u6cd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},':::info "\u6ce8\u610f"\n\u4e0d\u8981\u5728\u65b0\u9879\u76ee\u4e2d\u4f7f\u7528\u8be5\u65b9\u6cd5\uff0c\u53ef\u80fd\u7684\u8bdd\uff0c\u8bf7\u5c06\u65e7\u9879\u76ee\u5207\u6362\u5230\u4e0a\u8ff0\u65b9\u6cd5\u3002\n\nCREATE TABLE [IF NOT EXISTS] [db.]table_name [ON CLUSTER cluster]\n(\n    name1 [type1] [DEFAULT|MATERIALIZED|ALIAS expr1],\n    name2 [type2] [DEFAULT|MATERIALIZED|ALIAS expr2],\n    ...\n) ENGINE [=] SummingMergeTree(date-column [, sampling_expression], (primary, key), index_granularity, [columns])\n')),(0,i.kt)("p",null,"\u9664 ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," \u5916\u7684\u6240\u6709\u53c2\u6570\u90fd\u4e0e ",(0,i.kt)("inlineCode",{parentName:"p"},"MergeTree")," \u4e2d\u7684\u542b\u4e49\u76f8\u540c\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"columns")," \u2014 \u5305\u542b\u5c06\u8981\u88ab\u6c47\u603b\u7684\u5217\u7684\u5217\u540d\u7684\u5143\u7ec4\u3002\u53ef\u9009\u53c2\u6570\u3002\u6709\u5173\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605\u4e0a\u6587\u3002"))),(0,i.kt)("h2",{id:"yong-fa-shi-li"},"\u7528\u6cd5\u793a\u4f8b"),(0,i.kt)("p",null,"\u8003\u8651\u5982\u4e0b\u7684\u8868\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE summtt\n(\n    key UInt32,\n    value UInt32\n)\nENGINE = SummingMergeTree()\nORDER BY key\n")),(0,i.kt)("p",null,"\u5411\u5176\u4e2d\u63d2\u5165\u6570\u636e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},":) INSERT INTO summtt Values(1,1),(1,2),(2,1)\n")),(0,i.kt)("p",null,"ClickHouse\u53ef\u80fd\u4e0d\u4f1a\u5b8c\u6574\u7684\u6c47\u603b\u6240\u6709\u884c\uff08",(0,i.kt)("a",{parentName:"p",href:"#data-processing"},"\u89c1\u4e0b\u6587"),"\uff09,\u56e0\u6b64\u6211\u4eec\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528\u4e86\u805a\u5408\u51fd\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"sum")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT key, sum(value) FROM summtt GROUP BY key\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u250c\u2500key\u2500\u252c\u2500sum(value)\u2500\u2510\n\u2502   2 \u2502          1 \u2502\n\u2502   1 \u2502          3 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"data-processing"},"\u6570\u636e\u5904\u7406"),(0,i.kt)("p",null,"\u5f53\u6570\u636e\u88ab\u63d2\u5165\u5230\u8868\u4e2d\u65f6\uff0c\u4ed6\u4eec\u5c06\u88ab\u539f\u6837\u4fdd\u5b58\u3002ClickHouse \u5b9a\u671f\u5408\u5e76\u63d2\u5165\u7684\u6570\u636e\u7247\u6bb5\uff0c\u5e76\u5728\u8fd9\u4e2a\u65f6\u5019\u5bf9\u6240\u6709\u5177\u6709\u76f8\u540c\u4e3b\u952e\u7684\u884c\u4e2d\u7684\u5217\u8fdb\u884c\u6c47\u603b\uff0c\u5c06\u8fd9\u4e9b\u884c\u66ff\u6362\u4e3a\u5305\u542b\u6c47\u603b\u6570\u636e\u7684\u4e00\u884c\u8bb0\u5f55\u3002"),(0,i.kt)("p",null,"ClickHouse \u4f1a\u6309\u7247\u6bb5\u5408\u5e76\u6570\u636e\uff0c\u4ee5\u81f3\u4e8e\u4e0d\u540c\u7684\u6570\u636e\u7247\u6bb5\u4e2d\u4f1a\u5305\u542b\u5177\u6709\u76f8\u540c\u4e3b\u952e\u7684\u884c\uff0c\u5373\u5355\u4e2a\u6c47\u603b\u7247\u6bb5\u5c06\u4f1a\u662f\u4e0d\u5b8c\u6574\u7684\u3002\u56e0\u6b64\uff0c\u805a\u5408\u51fd\u6570 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/summingmergetree#agg_function-sum"},"sum()")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP BY")," \u5b50\u53e5\u5e94\u8be5\u5728\uff08",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),"\uff09\u67e5\u8be2\u8bed\u53e5\u4e2d\u88ab\u4f7f\u7528\uff0c\u5982\u4e0a\u6587\u4e2d\u7684\u4f8b\u5b50\u6240\u8ff0\u3002"),(0,i.kt)("h3",{id:"hui-zong-de-tong-yong-gui-ze"},"\u6c47\u603b\u7684\u901a\u7528\u89c4\u5219"),(0,i.kt)("p",null,"\u5217\u4e2d\u6570\u503c\u7c7b\u578b\u7684\u503c\u4f1a\u88ab\u6c47\u603b\u3002\u8fd9\u4e9b\u5217\u7684\u96c6\u5408\u5728\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"columns")," \u4e2d\u88ab\u5b9a\u4e49\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u7528\u4e8e\u6c47\u603b\u7684\u6240\u6709\u5217\u4e2d\u7684\u503c\u5747\u4e3a0\uff0c\u5219\u8be5\u884c\u4f1a\u88ab\u5220\u9664\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5217\u4e0d\u5728\u4e3b\u952e\u4e2d\u4e14\u65e0\u6cd5\u88ab\u6c47\u603b\uff0c\u5219\u4f1a\u5728\u73b0\u6709\u7684\u503c\u4e2d\u4efb\u9009\u4e00\u4e2a\u3002"),(0,i.kt)("p",null,"\u4e3b\u952e\u6240\u5728\u7684\u5217\u4e2d\u7684\u503c\u4e0d\u4f1a\u88ab\u6c47\u603b\u3002"),(0,i.kt)("h3",{id:"aggregatefunction-lie-zhong-de-hui-zong"},"AggregateFunction \u5217\u4e2d\u7684\u6c47\u603b"),(0,i.kt)("p",null,"\u5bf9\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/summingmergetree"},"AggregateFunction \u7c7b\u578b"),"\u7684\u5217\uff0cClickHouse \u6839\u636e\u5bf9\u5e94\u51fd\u6570\u8868\u73b0\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/aggregatingmergetree"},"AggregatingMergeTree")," \u5f15\u64ce\u7684\u805a\u5408\u3002"),(0,i.kt)("h3",{id:"qian-tao-jie-gou"},"\u5d4c\u5957\u7ed3\u6784"),(0,i.kt)("p",null,"\u8868\u4e2d\u53ef\u4ee5\u5177\u6709\u4ee5\u7279\u6b8a\u65b9\u5f0f\u5904\u7406\u7684\u5d4c\u5957\u6570\u636e\u7ed3\u6784\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5d4c\u5957\u8868\u7684\u540d\u79f0\u4ee5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," \u7ed3\u5c3e\uff0c\u5e76\u4e14\u5305\u542b\u81f3\u5c11\u4e24\u4e2a\u7b26\u5408\u4ee5\u4e0b\u6761\u4ef6\u7684\u5217\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u5217\u662f\u6570\u503c\u7c7b\u578b ",(0,i.kt)("inlineCode",{parentName:"li"},"(*Int*, Date, DateTime)"),"\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"key"),","),(0,i.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u7684\u5217\u662f\u53ef\u8ba1\u7b97\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"(*Int*, Float32/64)"),"\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"(values...)"),",")),(0,i.kt)("p",null,"\u7136\u540e\u8fd9\u4e2a\u5d4c\u5957\u8868\u4f1a\u88ab\u89e3\u91ca\u4e3a\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"key => (values...)")," \u7684\u6620\u5c04\uff0c\u5f53\u5408\u5e76\u5b83\u4eec\u7684\u884c\u65f6\uff0c\u4e24\u4e2a\u6570\u636e\u96c6\u4e2d\u7684\u5143\u7d20\u4f1a\u88ab\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," \u5408\u5e76\u4e3a\u76f8\u5e94\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"(values...)")," \u7684\u6c47\u603b\u503c\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[(1, 100)] + [(2, 150)] -> [(1, 100), (2, 150)]\n[(1, 100)] + [(1, 150)] -> [(1, 250)]\n[(1, 100)] + [(1, 150), (2, 150)] -> [(1, 250), (2, 150)]\n[(1, 100), (2, 150)] + [(1, -100)] -> [(2, 150)]\n")),(0,i.kt)("p",null,"\u8bf7\u6c42\u6570\u636e\u65f6\uff0c\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/engines/table-engines/mergetree-family/summingmergetree"},"sumMap(key,value)")," \u51fd\u6570\u6765\u5bf9 ",(0,i.kt)("inlineCode",{parentName:"p"},"Map")," \u8fdb\u884c\u805a\u5408\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5d4c\u5957\u6570\u636e\u7ed3\u6784\uff0c\u4f60\u65e0\u9700\u5728\u5217\u7684\u5143\u7ec4\u4e2d\u6307\u5b9a\u5217\u4ee5\u8fdb\u884c\u6c47\u603b\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/summingmergetree/"},"\u6765\u6e90\u6587\u7ae0")," "))}c.isMDXComponent=!0}}]);