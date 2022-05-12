"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[74361],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},34164:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:46,sidebar_label:"input"},c="input",u={unversionedId:"zh/sql-reference/table-functions/input",id:"zh/sql-reference/table-functions/input",title:"input",description:"input}",source:"@site/docs/zh/sql-reference/table-functions/input.md",sourceDirName:"zh/sql-reference/table-functions",slug:"/zh/sql-reference/table-functions/input",permalink:"/docs/zh/sql-reference/table-functions/input",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/sql-reference/table-functions/input.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"input"},sidebar:"chinese",previous:{title:"s3",permalink:"/docs/zh/sql-reference/table-functions/s3"},next:{title:"generateRandom",permalink:"/docs/zh/sql-reference/table-functions/generate"}},p={},s=[],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"input"},"input"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"input(structure)")," -\u8868\u51fd\u6570\uff0c\u53ef\u4ee5\u6709\u6548\u5730\u5c06\u53d1\u9001\u7ed9\u670d\u52a1\u5668\u7684\u6570\u636e\u8f6c\u6362\u4e3a\u5177\u6709\u7ed9\u5b9a\u7ed3\u6784\u7684\u6570\u636e\u5e76\u5c06\u5176\u63d2\u5165\u5230\u5177\u6709\u5176\u4ed6\u7ed3\u6784\u7684\u8868\u4e2d\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"structure")," -\u53d1\u9001\u5230\u670d\u52a1\u5668\u7684\u6570\u636e\u7ed3\u6784\u7684\u683c\u5f0f ",(0,i.kt)("inlineCode",{parentName:"p"},"'column1_name column1_type, column2_name column2_type, ...'"),"\u3002\n\u4f8b\u5982, ",(0,i.kt)("inlineCode",{parentName:"p"},"'id UInt32, name String'"),"\u3002"),(0,i.kt)("p",null,"\u8be5\u51fd\u6570\u53ea\u80fd\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT SELECT")," \u67e5\u8be2\u4e2d\u4f7f\u7528\uff0c\u5e76\u4e14\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\uff0c\u4f46\u5728\u5176\u4ed6\u65b9\u9762\uff0c\u884c\u4e3a\u7c7b\u4f3c\u4e8e\u666e\u901a\u7684\u8868\u51fd\u6570\n\uff08\u4f8b\u5982\uff0c\u5b83\u53ef\u4ee5\u7528\u4e8e\u5b50\u67e5\u8be2\u7b49\u3002)."),(0,i.kt)("p",null,"\u6570\u636e\u53ef\u4ee5\u50cf\u666e\u901a ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," \u67e5\u8be2\u4e00\u6837\u53d1\u9001\uff0c\u5e76\u4ee5\u5fc5\u987b\u5728\u67e5\u8be2\u672b\u5c3e\u6307\u5b9a\u7684\u4efb\u4f55\u53ef\u7528",(0,i.kt)("a",{parentName:"p",href:"/docs/zh/interfaces/formats#formats"},"\u683c\u5f0f"),"\n\u4f20\u9012\uff08\u4e0e\u666e\u901a ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT SELECT"),"\u4e0d\u540c)\u3002"),(0,i.kt)("p",null,"\u8be5\u51fd\u6570\u7684\u4e3b\u8981\u7279\u70b9\u662f\uff0c\u5f53\u670d\u52a1\u5668\u4ece\u5ba2\u6237\u7aef\u63a5\u6536\u6570\u636e\u65f6\uff0c\u5b83\u4f1a\u540c\u65f6\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," \u5b50\u53e5\u4e2d\u7684\u8868\u8fbe\u5f0f\u5217\u8868\u5c06\u5176\u8f6c\u6362\uff0c\u5e76\u63d2\u5165\u5230\u76ee\u6807\u8868\u4e2d\u3002\n\u4e0d\u4f1a\u521b\u5efa\u5305\u542b\u6240\u6709\u5df2\u4f20\u8f93\u6570\u636e\u7684\u4e34\u65f6\u8868\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4f8b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u8ba9 ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," \u8868\u5177\u6709\u4ee5\u4e0b\u7ed3\u6784 ",(0,i.kt)("inlineCode",{parentName:"li"},"(a String, b String)"),"\n\u5e76\u4e14 ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," \u4e2d\u7684\u6570\u636e\u5177\u6709\u4e0d\u540c\u7684\u7ed3\u6784 ",(0,i.kt)("inlineCode",{parentName:"li"},"(col1 String, col2 Date, col3 Int32)"),"\u3002\n\u5c06\u6570\u636e\u4ece ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," \u63d2\u5165\u5230 ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," \u8868\u4e2d\uff0c\u540c\u65f6\u8fdb\u884c\u8f6c\u6362\u7684\u67e5\u8be2\u5982\u4e0b\u6240\u793a:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat data.csv | clickhouse-client --query=\"INSERT INTO test SELECT lower(col1), col3 * col3 FROM input('col1 String, col2 Date, col3 Int32') FORMAT CSV\";\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"data.csv")," \u5305\u542b\u4e0e\u8868 ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," \u76f8\u540c\u7ed3\u6784 ",(0,i.kt)("inlineCode",{parentName:"li"},"test_structure")," \u7684\u6570\u636e\uff0c\u90a3\u4e48\u8fd9\u4e24\u4e2a\u67e5\u8be2\u662f\u76f8\u7b49\u7684:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat data.csv | clickhouse-client --query="INSERT INTO test FORMAT CSV"\n$ cat data.csv | clickhouse-client --query="INSERT INTO test SELECT * FROM input(\'test_structure\') FORMAT CSV"\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/table_functions/input/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);