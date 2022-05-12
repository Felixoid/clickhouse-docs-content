"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[11448],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(b,a(a({ref:n},l),{},{components:t})):r.createElement(b,a({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},72114:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={sidebar_label:"Introduction",sidebar_position:1,description:"Users can insert S3 based data into ClickHouse and use S3 as an export destination"},c="Connnecting S3",u={unversionedId:"en/integrations/s3/s3-intro",id:"en/integrations/s3/s3-intro",title:"Connnecting S3",description:"Users can insert S3 based data into ClickHouse and use S3 as an export destination",source:"@site/docs/en/integrations/s3/s3-intro.md",sourceDirName:"en/integrations/s3",slug:"/en/integrations/s3/s3-intro",permalink:"/docs/en/integrations/s3/s3-intro",editUrl:"https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/en/integrations/s3/s3-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Introduction",sidebar_position:1,description:"Users can insert S3 based data into ClickHouse and use S3 as an export destination"},sidebar:"english",previous:{title:"S3",permalink:"/docs/en/integrations/s3"},next:{title:"S3 Table Functions",permalink:"/docs/en/integrations/s3/s3-table-functions"}},l={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connnecting-s3"},"Connnecting S3"),(0,o.kt)("p",null,"Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services (AWS) that provides object storage through a web service interface. Users can insert S3 based data into ClickHouse and use S3 as an export destination, thus allowing interaction with \u201cData Lake\u201d architectures. Furthermore, s3 can provide \u201ccold\u201d storage tiers and assist with separating storage and compute. Below we outline the approach for these use cases: identifying key configuration parameters and any current limitations and providing hints on optimizing performance."),(0,o.kt)("p",null,"We utilize a subset of the new york taxi public dataset for read-orientated examples. We assume you have s3 buckets available for insert examples into which data can be written."))}f.isMDXComponent=!0}}]);