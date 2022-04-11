"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[73459],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,N=k["".concat(o,".").concat(d)]||k[d]||m[d]||i;return n?a.createElement(N,l(l({ref:t},u),{},{components:n})):a.createElement(N,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},93837:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],p={},o="system.zookeeper_log",s={unversionedId:"ru/operations/system-tables/zookeeper_log",id:"ru/operations/system-tables/zookeeper_log",title:"system.zookeeper_log",description:"system-zookeeper_log}",source:"@site/docs/ru/operations/system-tables/zookeeper_log.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/zookeeper_log",permalink:"/ru/operations/system-tables/zookeeper_log",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/operations/system-tables/zookeeper_log.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.zookeeper",permalink:"/ru/operations/system-tables/zookeeper"},next:{title:"Testing Hardware",permalink:"/ru/operations/performance-test"}},u={},m=[],k={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-zookeeper_log"},"system.zookeeper_log"),(0,i.kt)("p",null,"\u042d\u0442\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ZooKeeper \u0438 \u043e\u0442\u0432\u0435\u0442\u0430 \u043e\u0442 \u043d\u0435\u0433\u043e."),(0,i.kt)("p",null,"\u0414\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0430 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0437\u0430\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e (",(0,i.kt)("inlineCode",{parentName:"p"},"0")," \u0438\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"NULL"),"). \u041a\u043e\u0433\u0434\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442, \u0434\u0430\u043d\u043d\u044b\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/enum"},"Enum"),") \u2014 \u0442\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0432 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 ZooKeeper. \u041c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0437 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Request")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Response")," \u2014 \u043e\u0442\u0432\u0435\u0442 \u043f\u043e\u043b\u0443\u0447\u0435\u043d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Finalize")," \u2014 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043e\u0440\u0432\u0430\u043d\u043e, \u043e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_date")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/date"},"Date"),") \u2014 \u0434\u0430\u0442\u0430, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"event_time")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/datetime64"},"DateTime64"),") \u2014 \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f, \u043a\u043e\u0433\u0434\u0430 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0435."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/domains/ipv6"},"IPv6"),") \u2014 IP \u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ZooKeeper, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u043f\u043e\u0440\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ZooKeeper, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u044b\u043b \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"session_id")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u0435\u0441\u0441\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440 ZooKeeper \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xid")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0435\u0441\u0441\u0438\u0438. \u041e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0443 \u0441\u0442\u0440\u043e\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438 \u0443 \u043f\u0430\u0440\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"response"),"/",(0,i.kt)("inlineCode",{parentName:"li"},"finalize"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"has_watch")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#ch_zkWatches"},"watch"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"op_num")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/enum"},"Enum"),") \u2014 \u0442\u0438\u043f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0438\u043b\u0438 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043f\u0443\u0442\u044c \u043a \u0443\u0437\u043b\u0443 ZooKeeper, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u041f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430, \u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u044f \u043f\u0443\u0442\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0434\u0430\u043d\u043d\u044b\u0435, \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u0443\u0437\u043b\u0435 ZooKeeper (\u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"SET")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE")," \u2014 \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441 \u0445\u043e\u0442\u0435\u043b \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c, \u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," \u2014 \u0447\u0442\u043e \u0431\u044b\u043b\u043e \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u043d\u043e), \u0438\u043b\u0438 \u043f\u0443\u0441\u0442\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_ephemeral")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043b\u0438 \u0443\u0437\u0435\u043b ZooKeeper \u043a\u0430\u043a ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#Ephemeral+Nodes"},"ephemeral"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_sequential")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043b\u0438 \u0443\u0437\u0435\u043b ZooKeeper \u043a\u0430\u043a ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html#Sequence+Nodes+--+Unique+Naming"},"sequential"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"version")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/nullable"},"Nullable(Int32)"),") \u2014 \u0432\u0435\u0440\u0441\u0438\u044f \u0443\u0437\u043b\u0430 ZooKeeper, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0437\u0430\u043f\u0440\u043e\u0441 \u043e\u0436\u0438\u0434\u0430\u0435\u0442 \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.kt)("inlineCode",{parentName:"li"},"CHECK"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"SET"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"REMOVE")," (",(0,i.kt)("inlineCode",{parentName:"li"},"-1")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u0442 \u0432\u0435\u0440\u0441\u0438\u044e, ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u2014 \u0434\u043b\u044f \u0434\u0440\u0443\u0433\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0432\u0435\u0440\u0441\u0438\u0438)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requests_size")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0445 \u0432 \u043c\u0443\u043b\u044c\u0442\u0438\u0437\u0430\u043f\u0440\u043e\u0441 (\u044d\u0442\u043e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0441\u0442\u043e\u0438\u0442 \u0438\u0437 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0431\u044b\u0447\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u0430\u0442\u043e\u043c\u0430\u0440\u043d\u043e). \u0412\u0441\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b, \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0432 \u043c\u0443\u043b\u044c\u0442\u0438\u0437\u0430\u043f\u0440\u043e\u0441, \u0438\u043c\u0435\u044e\u0442 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 ",(0,i.kt)("inlineCode",{parentName:"li"},"xid"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"request_idx")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 \u043d\u043e\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u043c\u0443\u043b\u044c\u0442\u0438\u0437\u0430\u043f\u0440\u043e\u0441 (",(0,i.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u0434\u043b\u044f \u043c\u0443\u043b\u044c\u0442\u0438\u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0434\u0430\u043b\u0435\u0435 \u043f\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0443 \u0441 ",(0,i.kt)("inlineCode",{parentName:"li"},"1"),").")),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b \u0441 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430\u043c\u0438 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"zxid")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0432 ZooKeeper. \u041f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440, \u0432\u044b\u0434\u0430\u043d\u043d\u044b\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ZooKeeper \u0432 \u043e\u0442\u0432\u0435\u0442\u0435 \u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 (",(0,i.kt)("inlineCode",{parentName:"li"},"0")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u0431\u044b\u043b \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d, \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0438\u043b\u0438 \u043a\u043b\u0438\u0435\u043d\u0442 ZooKeeper \u043d\u0435 \u0437\u043d\u0430\u0435\u0442, \u0431\u044b\u043b \u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0437\u0430\u043f\u0440\u043e\u0441)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"error")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 \u043a\u043e\u0434 \u043e\u0448\u0438\u0431\u043a\u0438. \u041c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u043c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439, \u0437\u0434\u0435\u0441\u044c \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0437 \u043d\u0438\u0445:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZOK")," \u2014 \u0437\u0430\u043f\u0440\u043e\u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZCONNECTIONLOSS")," \u2014 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043e\u0440\u0432\u0430\u043d\u043e."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZOPERATIONTIMEOUT")," \u2014 \u0438\u0441\u0442\u0435\u043a\u043b\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZSESSIONEXPIRED")," \u2014 \u0438\u0441\u0442\u0435\u043a\u043b\u043e \u0432\u0440\u0435\u043c\u044f \u0441\u0435\u0441\u0441\u0438\u0438."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NULL")," \u2014 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0437\u0430\u043f\u0440\u043e\u0441."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"watch_type")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 \u0442\u0438\u043f \u0441\u043e\u0431\u044b\u0442\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"watch")," (\u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"op_num")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"Watch"),"), \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"watch_state")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/nullable"},"Nullable(Enum)"),") \u2014 \u0441\u0442\u0430\u0442\u0443\u0441 \u0441\u043e\u0431\u044b\u0442\u0438\u044f ",(0,i.kt)("inlineCode",{parentName:"li"},"watch")," (\u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u0440\u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"op_num")," = ",(0,i.kt)("inlineCode",{parentName:"li"},"Watch"),"), \u0434\u043b\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ",(0,i.kt)("inlineCode",{parentName:"li"},"NULL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"path_created")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u043f\u0443\u0442\u044c \u043a \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0443\u0437\u043b\u0443 ZooKeeper (\u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"li"},"CREATE"),"). \u041c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u043e\u0442 ",(0,i.kt)("inlineCode",{parentName:"li"},"path"),", \u0435\u0441\u043b\u0438 \u0443\u0437\u0435\u043b \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a ",(0,i.kt)("inlineCode",{parentName:"li"},"sequential"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_czxid")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0431\u044b\u043b \u0441\u043e\u0437\u0434\u0430\u043d \u0443\u0437\u0435\u043b ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_mzxid")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043b\u0430 \u0443\u0437\u0435\u043b ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_pzxid")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int64"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043b\u0430 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0435 \u0443\u0437\u043b\u044b ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_version")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0437\u043b\u0430 ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_cversion")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u0443\u0437\u043b\u0430\u0445 ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_dataLength")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0443\u0437\u043b\u0430 ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"stat_numChildren")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u0443\u0437\u043b\u043e\u0432 ZooKeeper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"children")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/array"},"Array(String)"),") \u2014 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u0443\u0437\u043b\u043e\u0432 ZooKeeper (\u0434\u043b\u044f \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u043d\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,i.kt)("inlineCode",{parentName:"li"},"LIST"),").")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.zookeeper_log WHERE (session_id = '106662742089334927') AND (xid = '10858') FORMAT Vertical;\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:             Request\nevent_date:       2021-08-09\nevent_time:       2021-08-09 21:38:30.291792\naddress:          ::\nport:             2181\nsession_id:       106662742089334927\nxid:              10858\nhas_watch:        1\nop_num:           List\npath:             /clickhouse/task_queue/ddl\ndata:             \nis_ephemeral:     0\nis_sequential:    0\nversion:          \u1d3a\u1d41\u1d38\u1d38\nrequests_size:    0\nrequest_idx:      0\nzxid:             0\nerror:            \u1d3a\u1d41\u1d38\u1d38\nwatch_type:       \u1d3a\u1d41\u1d38\u1d38\nwatch_state:      \u1d3a\u1d41\u1d38\u1d38\npath_created:     \nstat_czxid:       0\nstat_mzxid:       0\nstat_pzxid:       0\nstat_version:     0\nstat_cversion:    0\nstat_dataLength:  0\nstat_numChildren: 0\nchildren:         []\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ntype:             Response\nevent_date:       2021-08-09\nevent_time:       2021-08-09 21:38:30.292086\naddress:          ::\nport:             2181\nsession_id:       106662742089334927\nxid:              10858\nhas_watch:        1\nop_num:           List\npath:             /clickhouse/task_queue/ddl\ndata:             \nis_ephemeral:     0\nis_sequential:    0\nversion:          \u1d3a\u1d41\u1d38\u1d38\nrequests_size:    0\nrequest_idx:      0\nzxid:             16926267\nerror:            ZOK\nwatch_type:       \u1d3a\u1d41\u1d38\u1d38\nwatch_state:      \u1d3a\u1d41\u1d38\u1d38\npath_created:     \nstat_czxid:       16925469\nstat_mzxid:       16925469\nstat_pzxid:       16926179\nstat_version:     0\nstat_cversion:    7\nstat_dataLength:  0\nstat_numChildren: 7\nchildren:         ['query-0000000006','query-0000000005','query-0000000004','query-0000000003','query-0000000002','query-0000000001','query-0000000000']\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/ru/operations/tips#zookeeper"},"ZooKeeper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/r3.3.3/zookeeperProgrammers.html"},"\u0420\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e ZooKeeper"))))}d.isMDXComponent=!0}}]);