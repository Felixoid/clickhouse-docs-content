"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[69735],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return k}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(t),k=o,m=p["".concat(u,".").concat(k)]||p[k]||l[k]||a;return t?r.createElement(m,i(i({ref:n},f),{},{components:t})):r.createElement(m,i({ref:n},f))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89949:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},u="Kafka Connect Configurations",s={unversionedId:"en/integrations/kafka/code/connectors/README",id:"en/integrations/kafka/code/connectors/README",title:"Kafka Connect Configurations",description:"Kafka Connect configurations supporting ClickHouse documentation on Kafka.",source:"@site/docs/en/integrations/kafka/code/connectors/README.md",sourceDirName:"en/integrations/kafka/code/connectors",slug:"/en/integrations/kafka/code/connectors/",permalink:"/en/integrations/kafka/code/connectors/",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/staging/docs/en/integrations/kafka/code/connectors/README.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"Kafka Samples",permalink:"/en/integrations/kafka/code/"},next:{title:"Kafka Producer",permalink:"/en/integrations/kafka/code/producer/"}},f={},l=[],p={toc:l};function k(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kafka-connect-configurations"},"Kafka Connect Configurations"),(0,a.kt)("p",null,"Kafka Connect configurations supporting ",(0,a.kt)("a",{parentName:"p",href:"../../"},"ClickHouse documentation on Kafka"),"."),(0,a.kt)("p",null,"Configuration files support the Github dataset. These assume Kafka Connect is run in standalone mode and the use of Confluent Cloud."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/tree/main/github_events/jdbc_sink"},"JDBC Sink Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ClickHouse/kafka-samples/tree/main/github_events/http_sink"},"HTTP Sink Configuration"))),(0,a.kt)("p",null,"Configurations include comments regards settings which require environment specific modification."))}k.isMDXComponent=!0}}]);