"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[68092],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return k}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=p(n),k=o,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(d,r(r({ref:t},i),{},{components:n})):a.createElement(d,r({ref:t},i))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47142:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),o=n(63366),l=(n(67294),n(3905)),r=["components"],s={sidebar_position:41,sidebar_label:"\u5e94\u7528CatBoost\u6a21\u578b"},c="\u5728ClickHouse\u4e2d\u5e94\u7528Catboost\u6a21\u578b",p={unversionedId:"zh/guides/apply-catboost-model",id:"zh/guides/apply-catboost-model",title:"\u5728ClickHouse\u4e2d\u5e94\u7528Catboost\u6a21\u578b",description:"applying-catboost-model-in-clickhouse}",source:"@site/docs/zh/guides/apply-catboost-model.md",sourceDirName:"zh/guides",slug:"/zh/guides/apply-catboost-model",permalink:"/zh/guides/apply-catboost-model",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/zh/guides/apply-catboost-model.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"\u5e94\u7528CatBoost\u6a21\u578b"},sidebar:"chinese",previous:{title:"ClickHouse\u6307\u5357",permalink:"/zh/guides/"},next:{title:"\u64cd\u4f5c",permalink:"/zh/operations/"}},i={},u=[{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",level:2},{value:"1. \u521b\u5efa\u6570\u636e\u8868",id:"create-table",level:2},{value:"2. \u5c06\u6570\u636e\u63d2\u5165\u5230\u8868\u4e2d",id:"insert-data-to-table",level:2},{value:"3. \u5c06CatBoost\u96c6\u6210\u5230ClickHouse\u4e2d",id:"integrate-catboost-into-clickhouse",level:2},{value:"4. \u4f7f\u7528SQL\u8c03\u7528\u9884\u6d4b\u6a21\u578b",id:"run-model-inference",level:2}],m={toc:u};function k(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"applying-catboost-model-in-clickhouse"},"\u5728ClickHouse\u4e2d\u5e94\u7528Catboost\u6a21\u578b"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://catboost.ai"},"CatBoost")," \u662f\u4e00\u4e2a\u7531",(0,l.kt)("a",{parentName:"p",href:"https://yandex.com/company/"},"Yandex"),"\u5f00\u53d1\u7684\u5f00\u6e90\u514d\u8d39\u673a\u5668\u5b66\u4e60\u5e93\u3002"),(0,l.kt)("p",null,"\u901a\u8fc7\u672c\u7bc7\u6587\u6863\uff0c\u60a8\u5c06\u5b66\u4f1a\u5982\u4f55\u7528SQL\u8bed\u53e5\u8c03\u7528\u5df2\u7ecf\u5b58\u653e\u5728Clickhouse\u4e2d\u7684\u9884\u8bad\u7ec3\u6a21\u578b\u6765\u9884\u6d4b\u6570\u636e\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5728ClickHouse\u4e2d\u5e94\u7528CatBoost\u6a21\u578b\uff0c\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#create-table"},"\u521b\u5efa\u6570\u636e\u8868"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#insert-data-to-table"},"\u5c06\u6570\u636e\u63d2\u5165\u5230\u8868\u4e2d"),"."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#integrate-catboost-into-clickhouse"},"\u5c06CatBoost\u96c6\u6210\u5230ClickHouse\u4e2d")," \uff08\u53ef\u8df3\u8fc7\uff09\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#run-model-inference"},"\u4eceSQL\u8fd0\u884c\u6a21\u578b\u63a8\u65ad"),".")),(0,l.kt)("p",null,"\u6709\u5173\u8bad\u7ec3CatBoost\u6a21\u578b\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://catboost.ai/docs/features/training.html#training"},"\u8bad\u7ec3\u548c\u6a21\u578b\u5e94\u7528"),"."),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/system/#query_language-system-reload-model"},"RELOAD MODEL"),"\u4e0e",(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/statements/system/#query_language-system-reload-models"},"RELOAD MODELS"),"\u8bed\u53e5\u6765\u91cd\u8f7dCatBoost\u6a21\u578b\u3002"),(0,l.kt)("h2",{id:"prerequisites"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("p",null,"\u8bf7\u5148\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/"},"Docker"),"\u3002"),(0,l.kt)("p",null,'!!! note "\u6ce8"\n',(0,l.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," \u662f\u4e00\u4e2a\u8f6f\u4ef6\u5e73\u53f0\uff0c\u7528\u6237\u53ef\u4ee5\u7528Docker\u6765\u521b\u5efa\u72ec\u7acb\u4e8e\u5df2\u6709\u7cfb\u7edf\u5e76\u96c6\u6210\u4e86CatBoost\u548cClickHouse\u7684\u5bb9\u5668\u3002"),(0,l.kt)("p",null,"\u5728\u5e94\u7528CatBoost\u6a21\u578b\u4e4b\u524d:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.")," \u4ece\u5bb9\u5668\u4ed3\u5e93\u62c9\u53d6\u793a\u4f8bdocker\u955c\u50cf (",(0,l.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/yandex/tutorial-catboost-clickhouse"},"https://hub.docker.com/r/yandex/tutorial-catboost-clickhouse"),") :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull yandex/tutorial-catboost-clickhouse\n")),(0,l.kt)("p",null,"\u6b64\u793a\u4f8bDocker\u955c\u50cf\u5305\u542b\u8fd0\u884cCatBoost\u548cClickHouse\u6240\u9700\u7684\u6240\u6709\u5185\u5bb9\uff1a\u4ee3\u7801\u3001\u8fd0\u884c\u65f6\u3001\u5e93\u3001\u73af\u5883\u53d8\u91cf\u548c\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2.")," \u786e\u4fdd\u5df2\u6210\u529f\u62c9\u53d6Docker\u955c\u50cf:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker image ls\nREPOSITORY                            TAG                 IMAGE ID            CREATED             SIZE\nyandex/tutorial-catboost-clickhouse   latest              622e4d17945b        22 hours ago        1.37GB\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.")," \u57fa\u4e8e\u6b64\u955c\u50cf\u542f\u52a8\u4e00\u4e2aDocker\u5bb9\u5668:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker run -it -p 8888:8888 yandex/tutorial-catboost-clickhouse\n")),(0,l.kt)("h2",{id:"create-table"},"1. \u521b\u5efa\u6570\u636e\u8868"),(0,l.kt)("p",null,"\u4e3a\u8bad\u7ec3\u6837\u672c\u521b\u5efaClickHouse\u8868:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.")," \u5728\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u542f\u52a8ClickHouse\u63a7\u5236\u53f0\u5ba2\u6237\u7aef:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse client\n")),(0,l.kt)("p",null,'!!! note "\u6ce8"\nClickHouse\u670d\u52a1\u5668\u5df2\u7ecf\u5728Docker\u5bb9\u5668\u5185\u8fd0\u884c\u3002'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2.")," \u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u8868:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},":) CREATE TABLE amazon_train\n(\n    date Date MATERIALIZED today(),\n    ACTION UInt8,\n    RESOURCE UInt32,\n    MGR_ID UInt32,\n    ROLE_ROLLUP_1 UInt32,\n    ROLE_ROLLUP_2 UInt32,\n    ROLE_DEPTNAME UInt32,\n    ROLE_TITLE UInt32,\n    ROLE_FAMILY_DESC UInt32,\n    ROLE_FAMILY UInt32,\n    ROLE_CODE UInt32\n)\nENGINE = MergeTree ORDER BY date\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.")," \u4eceClickHouse\u63a7\u5236\u53f0\u5ba2\u6237\u7aef\u9000\u51fa:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},":) exit\n")),(0,l.kt)("h2",{id:"insert-data-to-table"},"2. \u5c06\u6570\u636e\u63d2\u5165\u5230\u8868\u4e2d"),(0,l.kt)("p",null,"\u63d2\u5165\u6570\u636e:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.")," \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse client --host 127.0.0.1 --query 'INSERT INTO amazon_train FORMAT CSVWithNames' < ~/amazon/train.csv\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2.")," \u5728\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u542f\u52a8ClickHouse\u63a7\u5236\u53f0\u5ba2\u6237\u7aef:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ clickhouse client\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.")," \u786e\u4fdd\u6570\u636e\u5df2\u4e0a\u4f20:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT count() FROM amazon_train\n\nSELECT count()\nFROM amazon_train\n\n+-count()-+\n|   65538 |\n+-------+\n")),(0,l.kt)("h2",{id:"integrate-catboost-into-clickhouse"},"3. \u5c06CatBoost\u96c6\u6210\u5230ClickHouse\u4e2d"),(0,l.kt)("p",null,'!!! note "\u6ce8"\n',(0,l.kt)("strong",{parentName:"p"},"\u53ef\u8df3\u8fc7\u3002")," \u793a\u4f8bDocker\u6620\u50cf\u5df2\u7ecf\u5305\u542b\u4e86\u8fd0\u884cCatBoost\u548cClickHouse\u6240\u9700\u7684\u6240\u6709\u5185\u5bb9\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u5c06CatBoost\u96c6\u6210\u8fdbClickHouse\uff0c\u9700\u8981\u8fdb\u884c\u5982\u4e0b\u6b65\u9aa4\uff1a"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1.")," \u6784\u5efa\u8bc4\u4f30\u5e93\u3002"),(0,l.kt)("p",null,"\u8bc4\u4f30CatBoost\u6a21\u578b\u7684\u6700\u5feb\u65b9\u6cd5\u662f\u7f16\u8bd1 ",(0,l.kt)("inlineCode",{parentName:"p"},"libcatboostmodel.<so|dll|dylib>")," \u5e93\u6587\u4ef6."),(0,l.kt)("p",null,"\u6709\u5173\u5982\u4f55\u6784\u5efa\u5e93\u6587\u4ef6\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,l.kt)("a",{parentName:"p",href:"https://catboost.ai/docs/concepts/c-plus-plus-api_dynamic-c-pluplus-wrapper.html"},"CatBoost\u6587\u4ef6"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2.")," \u521b\u5efa\u4e00\u4e2a\u65b0\u76ee\u5f55\uff08\u4f4d\u7f6e\u4e0e\u540d\u79f0\u53ef\u968f\u610f\u6307\u5b9a\uff09, \u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," \u5e76\u5c06\u521b\u5efa\u7684\u5e93\u6587\u4ef6\u653e\u5165\u5176\u4e2d\u3002 \u793a\u4f8bDocker\u955c\u50cf\u5df2\u7ecf\u5305\u542b\u4e86\u5e93 ",(0,l.kt)("inlineCode",{parentName:"p"},"data/libcatboostmodel.so"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3.")," \u521b\u5efa\u4e00\u4e2a\u65b0\u76ee\u5f55\u6765\u653e\u914d\u7f6e\u6a21\u578b, \u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"models"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4.")," \u521b\u5efa\u4e00\u4e2a\u6a21\u578b\u914d\u7f6e\u6587\u4ef6\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"models/amazon_model.xml"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"5.")," \u4fee\u6539\u6a21\u578b\u914d\u7f6e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<models>\n    <model>\n        \x3c!-- Model type. Now catboost only. --\x3e\n        <type>catboost</type>\n        \x3c!-- Model name. --\x3e\n        <name>amazon</name>\n        \x3c!-- Path to trained model. --\x3e\n        <path>/home/catboost/tutorial/catboost_model.bin</path>\n        \x3c!-- Update interval. --\x3e\n        <lifetime>0</lifetime>\n    </model>\n</models>\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"6.")," \u5c06CatBoost\u5e93\u6587\u4ef6\u7684\u8def\u5f84\u548c\u6a21\u578b\u914d\u7f6e\u6dfb\u52a0\u5230ClickHouse\u914d\u7f6e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- File etc/clickhouse-server/config.d/models_config.xml. --\x3e\n<catboost_dynamic_library_path>/home/catboost/data/libcatboostmodel.so</catboost_dynamic_library_path>\n<models_config>/home/catboost/models/*_model.xml</models_config>\n")),(0,l.kt)("h2",{id:"run-model-inference"},"4. \u4f7f\u7528SQL\u8c03\u7528\u9884\u6d4b\u6a21\u578b"),(0,l.kt)("p",null,"\u4e3a\u4e86\u6d4b\u8bd5\u6a21\u578b\u662f\u5426\u6b63\u5e38\uff0c\u53ef\u4ee5\u4f7f\u7528ClickHouse\u5ba2\u6237\u7aef ",(0,l.kt)("inlineCode",{parentName:"p"},"$ clickhouse client"),"."),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u786e\u4fdd\u6a21\u578b\u80fd\u6b63\u5e38\u5de5\u4f5c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT\n    modelEvaluate('amazon',\n                RESOURCE,\n                MGR_ID,\n                ROLE_ROLLUP_1,\n                ROLE_ROLLUP_2,\n                ROLE_DEPTNAME,\n                ROLE_TITLE,\n                ROLE_FAMILY_DESC,\n                ROLE_FAMILY,\n                ROLE_CODE) > 0 AS prediction,\n    ACTION AS target\nFROM amazon_train\nLIMIT 10\n")),(0,l.kt)("p",null,'!!! note "\u6ce8"\n\u51fd\u6570 ',(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/functions/other-functions#function-modelevaluate"},"modelEvaluate")," \u4f1a\u5bf9\u591a\u7c7b\u522b\u6a21\u578b\u8fd4\u56de\u4e00\u4e2a\u5143\u7ec4\uff0c\u5176\u4e2d\u5305\u542b\u6bcf\u4e00\u7c7b\u522b\u7684\u539f\u59cb\u9884\u6d4b\u503c\u3002"),(0,l.kt)("p",null,"\u6267\u884c\u9884\u6d4b:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT\n    modelEvaluate('amazon',\n                RESOURCE,\n                MGR_ID,\n                ROLE_ROLLUP_1,\n                ROLE_ROLLUP_2,\n                ROLE_DEPTNAME,\n                ROLE_TITLE,\n                ROLE_FAMILY_DESC,\n                ROLE_FAMILY,\n                ROLE_CODE) AS prediction,\n    1. / (1 + exp(-prediction)) AS probability,\n    ACTION AS target\nFROM amazon_train\nLIMIT 10\n")),(0,l.kt)("p",null,'!!! note "\u6ce8"\n\u67e5\u770b\u51fd\u6570\u8bf4\u660e ',(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/functions/math-functions"},"exp()")," \u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u8ba1\u7b97\u6837\u672c\u7684LogLoss:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},":) SELECT -avg(tg * log(prob) + (1 - tg) * log(1 - prob)) AS logloss\nFROM\n(\n    SELECT\n        modelEvaluate('amazon',\n                    RESOURCE,\n                    MGR_ID,\n                    ROLE_ROLLUP_1,\n                    ROLE_ROLLUP_2,\n                    ROLE_DEPTNAME,\n                    ROLE_TITLE,\n                    ROLE_FAMILY_DESC,\n                    ROLE_FAMILY,\n                    ROLE_CODE) AS prediction,\n        1. / (1. + exp(-prediction)) AS prob,\n        ACTION AS tg\n    FROM amazon_train\n)\n")),(0,l.kt)("p",null,'!!! note "\u6ce8"\n\u67e5\u770b\u51fd\u6570\u8bf4\u660e ',(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/aggregate-functions/reference/avg#agg_function-avg"},"avg()")," \u548c ",(0,l.kt)("a",{parentName:"p",href:"/zh/sql-reference/functions/math-functions"},"log()")," \u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/guides/apply_catboost_model/"},"\u539f\u59cb\u6587\u7ae0")," "))}k.isMDXComponent=!0}}]);