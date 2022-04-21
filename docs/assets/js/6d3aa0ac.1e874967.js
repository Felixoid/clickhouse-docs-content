"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[53100],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,d=p["".concat(o,".").concat(m)]||p[m]||k[m]||l;return t?i.createElement(d,r(r({ref:n},u),{},{components:t})):i.createElement(d,r({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=p;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<l;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},35162:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return k}});var i=t(87462),a=t(63366),l=(t(67294),t(3905)),r=["components"],c={sidebar_position:61,sidebar_label:"clickhouse-benchmark"},o="clickhouse-benchmark",s={unversionedId:"ru/operations/utilities/clickhouse-benchmark",id:"ru/operations/utilities/clickhouse-benchmark",title:"clickhouse-benchmark",description:"clickhouse-benchmark}",source:"@site/docs/ru/operations/utilities/clickhouse-benchmark.md",sourceDirName:"ru/operations/utilities",slug:"/ru/operations/utilities/clickhouse-benchmark",permalink:"/docs/ru/operations/utilities/clickhouse-benchmark",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/utilities/clickhouse-benchmark.md",tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61,sidebar_label:"clickhouse-benchmark"},sidebar:"russia",previous:{title:"clickhouse-local",permalink:"/docs/ru/operations/utilities/clickhouse-local"},next:{title:"clickhouse-format",permalink:"/docs/ru/operations/utilities/clickhouse-format"}},u={},k=[{value:"\u041a\u043b\u044e\u0447\u0438",id:"clickhouse-benchmark-keys",level:2},{value:"\u0412\u044b\u0432\u043e\u0434",id:"clickhouse-benchmark-output",level:2},{value:"\u0420\u0435\u0436\u0438\u043c \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f",id:"clickhouse-benchmark-comparison-mode",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"clickhouse-benchmark-example",level:2}],p={toc:k};function m(e){var n=e.components,t=(0,a.Z)(e,r);return(0,l.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse-benchmark"},"clickhouse-benchmark"),(0,l.kt)("p",null,"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ClickHouse \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0446\u0438\u043a\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-benchmark --query ["single query"] [keys]\n')),(0,l.kt)("p",null,"\u0438\u043b\u0438"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "single query" | clickhouse-benchmark [keys]\n')),(0,l.kt)("p",null,"\u0438\u043b\u0438"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-benchmark [keys] <<< "single query"\n')),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043d\u0430\u0431\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b \u0438 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u043a\u0430\u0436\u0434\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u0432 \u0444\u0430\u0439\u043b\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.numbers LIMIT 10000000;\nSELECT 1;\n")),(0,l.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u044d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0432\u0432\u043e\u0434 ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-benchmark"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"clickhouse-benchmark [keys] < queries_file;\n")),(0,l.kt)("h2",{id:"clickhouse-benchmark-keys"},"\u041a\u043b\u044e\u0447\u0438"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--query=QUERY")," \u2014 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441. \u0415\u0441\u043b\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d, ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u0431\u0443\u0434\u0435\u0442 \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0438\u0437 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u0433\u043e \u0432\u0432\u043e\u0434\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--concurrency=N")," \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 1."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-d N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--delay=N")," \u2014 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445 \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u043c\u0438 \u043e\u0442\u0447\u0435\u0442\u0430\u043c\u0438 (\u0447\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043e\u0442\u0447\u0435\u0442\u044b, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 0). \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 1."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-h HOST"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--host=HOST")," \u2014 \u0445\u043e\u0441\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("inlineCode",{parentName:"li"},"localhost"),". \u0414\u043b\u044f ",(0,l.kt)("a",{parentName:"li",href:"#clickhouse-benchmark-comparison-mode"},"\u0440\u0435\u0436\u0438\u043c\u0430 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f")," \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"-h")," \u043a\u043b\u044e\u0447\u0435\u0439."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-p N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--port=N")," \u2014 \u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 9000. \u0414\u043b\u044f ",(0,l.kt)("a",{parentName:"li",href:"#clickhouse-benchmark-comparison-mode"},"\u0440\u0435\u0436\u0438\u043c\u0430 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f")," \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e ",(0,l.kt)("inlineCode",{parentName:"li"},"-p")," \u043a\u043b\u044e\u0447\u0435\u0439."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-i N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--iterations=N")," \u2014 \u043e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0 (\u0432\u0435\u0447\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0442\u044c\u0441\u044f)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-r"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--randomize")," \u2014 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0439 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043f\u0440\u0438 \u043d\u0430\u043b\u0438\u0447\u0438\u0438 \u0431\u043e\u043b\u0435\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0432\u0445\u043e\u0434\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-s"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--secure")," \u2014 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,l.kt)("inlineCode",{parentName:"li"},"TLS")," \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-t N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--timelimit=N")," \u2014 \u043b\u0438\u043c\u0438\u0442 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445. ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043f\u0440\u0438 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0438 \u043b\u0438\u043c\u0438\u0442\u0430 \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 0 (\u043b\u0438\u043c\u0438\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--confidence=N")," \u2014 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0434\u043e\u0432\u0435\u0440\u0438\u044f \u0434\u043b\u044f  T-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: 0 (80%), 1 (90%), 2 (95%), 3 (98%), 4 (99%), 5 (99.5%). \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: 5. \u0412 ",(0,l.kt)("a",{parentName:"li",href:"#clickhouse-benchmark-comparison-mode"},"\u0440\u0435\u0436\u0438\u043c\u0435 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f")," ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 ",(0,l.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Student%27s_t-test#Independent_two-sample_t-test"},"\u0434\u0432\u0443\u0445\u0432\u044b\u0431\u043e\u0440\u043e\u0447\u043d\u044b\u0439  t-\u043a\u0440\u0438\u0442\u0435\u0440\u0438\u0439 \u0421\u0442\u044c\u044e\u0434\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u0432\u044b\u0431\u043e\u0440\u043e\u043a")," \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b \u043b\u0438 \u0434\u0432\u0435 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043f\u0440\u0438 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c \u0443\u0440\u043e\u0432\u043d\u0435 \u0434\u043e\u0432\u0435\u0440\u0438\u044f."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--cumulative")," \u2014 \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443 \u0437\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b, \u0430 \u043d\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--database=DATABASE_NAME")," \u2014 \u0438\u043c\u044f \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 ClickHouse. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--json=FILEPATH")," \u2014 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"JSON"),". \u041a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e\u0442 \u043a\u043b\u044e\u0447 \u0443\u043a\u0430\u0437\u0430\u043d, ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u043e\u0442\u0447\u0435\u0442 \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 JSON-\u0444\u0430\u0439\u043b."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--user=USERNAME")," \u2014 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ClickHouse. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("inlineCode",{parentName:"li"},"default"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--password=PSWD")," \u2014 \u043f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ClickHouse. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--stacktrace")," \u2014 \u0432\u044b\u0432\u043e\u0434 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0438 \u0441\u0442\u0435\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439. \u041a\u043e\u0433\u0434\u0430 \u044d\u0442\u043e\u0442 \u043a\u043b\u044e\u0447 \u0443\u043a\u0430\u0437\u0430\u043d, ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-bencmark")," \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043e\u0432\u043a\u0443 \u0441\u0442\u0435\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--stage=WORD")," \u2014 \u0441\u0442\u0430\u0434\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435. ClickHouse \u043e\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442 ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-benchmark")," \u043d\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0430\u0434\u0438\u0438. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f: ",(0,l.kt)("inlineCode",{parentName:"li"},"complete"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"fetch_columns"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"with_mergeable_state"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e: ",(0,l.kt)("inlineCode",{parentName:"li"},"complete"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help")," \u2014 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u043f\u0440\u0430\u0432\u043a\u0443.")),(0,l.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c ",(0,l.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/overview"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")," \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0438\u0445 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u043a\u0430\u043a \u043a\u043b\u044e\u0447 ",(0,l.kt)("inlineCode",{parentName:"p"},"--<session setting name>= SETTING_VALUE"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,l.kt)("inlineCode",{parentName:"p"},"--max_memory_usage=1048576"),"."),(0,l.kt)("h2",{id:"clickhouse-benchmark-output"},"\u0412\u044b\u0432\u043e\u0434"),(0,l.kt)("p",null,"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-benchmark")," \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e ",(0,l.kt)("inlineCode",{parentName:"p"},"--delay")," \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430."),(0,l.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Queries executed: 10.\n\nlocalhost:9000, queries 10, QPS: 6.772, RPS: 67904487.440, MiB/s: 518.070, result RPS: 67721584.984, result MiB/s: 516.675.\n\n0.000%      0.145 sec.\n10.000%     0.146 sec.\n20.000%     0.146 sec.\n30.000%     0.146 sec.\n40.000%     0.147 sec.\n50.000%     0.148 sec.\n60.000%     0.148 sec.\n70.000%     0.148 sec.\n80.000%     0.149 sec.\n90.000%     0.150 sec.\n95.000%     0.150 sec.\n99.000%     0.150 sec.\n99.900%     0.150 sec.\n99.990%     0.150 sec.\n")),(0,l.kt)("p",null,"\u0412 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0432 \u043f\u043e\u043b\u0435 ",(0,l.kt)("inlineCode",{parentName:"p"},"Queries executed:"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u0421\u0442\u0440\u043e\u043a\u0430 \u0441\u0442\u0430\u0442\u0443\u0441\u0430, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0430\u044f (\u0432 \u0442\u0430\u043a\u043e\u043c \u0436\u0435 \u043f\u043e\u0440\u044f\u0434\u043a\u0435):"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Endpoint \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ClickHouse."),(0,l.kt)("li",{parentName:"ul"},"\u0427\u0438\u0441\u043b\u043e \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."),(0,l.kt)("li",{parentName:"ul"},"QPS: \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"--delay")," \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430."),(0,l.kt)("li",{parentName:"ul"},"RPS: \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u0447\u0438\u0442\u0430\u0435\u043c\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"--delay")," \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430."),(0,l.kt)("li",{parentName:"ul"},"MiB/s: \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u041c\u0435\u0431\u0438\u0431\u0430\u0439\u0442\u043e\u0432, \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u043c\u044b\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"--delay")," \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430."),(0,l.kt)("li",{parentName:"ul"},"result RPS: \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u043e\u043a, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"--delay")," \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430."),(0,l.kt)("li",{parentName:"ul"},"result MiB/s. \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u041c\u0435\u0431\u0438\u0431\u0430\u0439\u0442\u043e\u0432, \u0440\u0430\u0437\u043c\u0435\u0449\u0430\u0435\u043c\u043e\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0437\u0430 \u0441\u0435\u043a\u0443\u043d\u0434\u0443 \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"--delay")," \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b\u0430."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u0438\u043b\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."))),(0,l.kt)("h2",{id:"clickhouse-benchmark-comparison-mode"},"\u0420\u0435\u0436\u0438\u043c \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-benchmark")," \u043c\u043e\u0436\u0435\u0442 \u0441\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u0432\u0443\u0445 \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0438\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 ClickHouse."),(0,l.kt)("p",null,"\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0440\u0430\u0432\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0435\u0436\u0438\u043c\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u0442\u043e\u0447\u043a\u0443 \u0434\u0432\u0443\u0445 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 \u0434\u0432\u0443\u043c\u044f \u043f\u0430\u0440\u0430\u043c\u0438 \u043a\u043b\u044e\u0447\u0435\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"--host"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--port"),". \u0421\u0432\u044f\u0437\u044c \u043a\u043b\u044e\u0447\u0435\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u044f\u043c \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432: \u043f\u0435\u0440\u0432\u044b\u0439 ",(0,l.kt)("inlineCode",{parentName:"p"},"--host")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u0435\u0440\u0432\u043e\u043c\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"--port")," \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435. ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-benchmark")," \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u043e\u0431\u043e\u0438\u043c\u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c\u0438 \u0438 \u043e\u0442\u0441\u044b\u043b\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b. \u041a\u0430\u0436\u0434\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0430\u0434\u0440\u0435\u0441\u043e\u0432\u0430\u043d \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0443. \u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0432\u044b\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,l.kt)("h2",{id:"clickhouse-benchmark-example"},"\u041f\u0440\u0438\u043c\u0435\u0440"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "SELECT * FROM system.numbers LIMIT 10000000 OFFSET 10000000" | clickhouse-benchmark -i 10\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Loaded 1 queries.\n\nQueries executed: 6.\n\nlocalhost:9000, queries 6, QPS: 6.153, RPS: 123398340.957, MiB/s: 941.455, result RPS: 61532982.200, result MiB/s: 469.459.\n\n0.000%      0.159 sec.\n10.000%     0.159 sec.\n20.000%     0.159 sec.\n30.000%     0.160 sec.\n40.000%     0.160 sec.\n50.000%     0.162 sec.\n60.000%     0.164 sec.\n70.000%     0.165 sec.\n80.000%     0.166 sec.\n90.000%     0.166 sec.\n95.000%     0.167 sec.\n99.000%     0.167 sec.\n99.900%     0.167 sec.\n99.990%     0.167 sec.\n\n\n\nQueries executed: 10.\n\nlocalhost:9000, queries 10, QPS: 6.082, RPS: 121959604.568, MiB/s: 930.478, result RPS: 60815551.642, result MiB/s: 463.986.\n\n0.000%      0.159 sec.\n10.000%     0.159 sec.\n20.000%     0.160 sec.\n30.000%     0.163 sec.\n40.000%     0.164 sec.\n50.000%     0.165 sec.\n60.000%     0.166 sec.\n70.000%     0.166 sec.\n80.000%     0.167 sec.\n90.000%     0.167 sec.\n95.000%     0.170 sec.\n99.000%     0.172 sec.\n99.900%     0.172 sec.\n99.990%     0.172 sec.\n")))}m.isMDXComponent=!0}}]);