"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[77758],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,c=d["".concat(o,".").concat(u)]||d[u]||N[u]||i;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},68748:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return N}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],p={sidebar_position:39,sidebar_label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"},o="CREATE USER",s={unversionedId:"ru/sql-reference/statements/create/user",id:"ru/sql-reference/statements/create/user",title:"CREATE USER",description:"create-user-statement}",source:"@site/docs/ru/sql-reference/statements/create/user.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/user",permalink:"/docs/ru/sql-reference/statements/create/user",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/sql-reference/statements/create/user.md",tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"},sidebar:"russia",previous:{title:"FUNCTION",permalink:"/docs/ru/sql-reference/statements/create/function"},next:{title:"\u0420\u043e\u043b\u044c",permalink:"/docs/ru/sql-reference/statements/create/role"}},m={},N=[{value:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",id:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",level:2},{value:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0445\u043e\u0441\u0442",id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-\u0445\u043e\u0441\u0442",level:2}],d={toc:N};function u(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-user-statement"},"CREATE USER"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/operations/access-rights#user-account-management"},"\u0430\u043a\u043a\u0430\u0443\u043d\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439"),"."),(0,i.kt)("p",null,"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER [IF NOT EXISTS | OR REPLACE] name1 [ON CLUSTER cluster_name1]\n        [, name2 [ON CLUSTER cluster_name2] ...]\n    [NOT IDENTIFIED | IDENTIFIED {[WITH {no_password | plaintext_password | sha256_password | sha256_hash | double_sha1_password | double_sha1_hash}] BY {'password' | 'hash'}} | {WITH ldap SERVER 'server_name'} | {WITH kerberos [REALM 'realm']}]\n    [HOST {LOCAL | NAME 'name' | REGEXP 'name_regexp' | IP 'address' | LIKE 'pattern'} [,...] | ANY | NONE]\n    [DEFAULT ROLE role [,...]]\n    [DEFAULT DATABASE database | NONE]\n    [GRANTEES {user | role | ANY | NONE} [,...] [EXCEPT {user | role} [,...]]]\n    [SETTINGS variable [= value] [MIN [=] min_value] [MAX [=] max_value] [READONLY | WRITABLE] | PROFILE 'profile_name'] [,...]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ON CLUSTER")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435, \u0441\u043c. ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/distributed-ddl"},"\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 DDL"),"."),(0,i.kt)("h2",{id:"\u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"},"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f"),(0,i.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u0432 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH no_password")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH plaintext_password BY 'qwerty'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_password BY 'qwerty'")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED BY 'password'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH sha256_hash BY 'hash'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH double_sha1_password BY 'qwerty'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH double_sha1_hash BY 'hash'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH ldap SERVER 'server_name'")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH kerberos")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"IDENTIFIED WITH kerberos REALM 'realm'"))),(0,i.kt)("h2",{id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439-\u0445\u043e\u0441\u0442"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0445\u043e\u0441\u0442"),(0,i.kt)("p",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0445\u043e\u0441\u0442 \u2014 \u044d\u0442\u043e \u0445\u043e\u0441\u0442, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c ClickHouse. \u0425\u043e\u0441\u0442 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"HOST")," \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOST IP 'ip_address_or_subnetwork'")," \u2014 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 ClickHouse \u0442\u043e\u043b\u044c\u043a\u043e \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0438\u043b\u0438 ",(0,i.kt)("a",{parentName:"li",href:"https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B4%D1%81%D0%B5%D1%82%D1%8C"},"\u043f\u043e\u0434\u0441\u0435\u0442\u0438"),". \u041f\u0440\u0438\u043c\u0435\u0440\u044b: ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST IP '192.168.0.0/16'"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST IP '2001:DB8::/32'"),". \u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0432 \u044d\u043a\u0441\u043f\u043b\u0443\u0430\u0442\u0430\u0446\u0438\u0438 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST IP")," (IP-\u0430\u0434\u0440\u0435\u0441\u0430 \u0438 \u043c\u0430\u0441\u043a\u0438 \u043f\u043e\u0434\u0441\u0435\u0442\u0438), \u0442\u0430\u043a \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"host")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"li"},"host_regexp")," \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0435."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOST ANY")," \u2014 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0441 \u043b\u044e\u0431\u043e\u0433\u043e \u0445\u043e\u0441\u0442\u0430. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOST LOCAL")," \u2014 \u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOST NAME 'fqdn'")," \u2014 \u0425\u043e\u0441\u0442 \u0437\u0430\u0434\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 FQDN. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST NAME 'mysite.com'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOST REGEXP 'regexp'")," \u2014 \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f ",(0,i.kt)("a",{parentName:"li",href:"http://www.pcre.org/"},"pcre"),", \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u0445\u043e\u0441\u0442\u044b. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST REGEXP '.*\\.mysite\\.com'"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOST LIKE 'template'")," \u2014 \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 ",(0,i.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/functions/string-search-functions#function-like"},"LIKE")," \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0445\u043e\u0441\u0442\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST LIKE '%'")," \u044d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u0435\u043d ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST ANY"),"; ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST LIKE '%.mysite.com'")," \u0440\u0430\u0437\u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0441\u043e \u0432\u0441\u0435\u0445 \u0445\u043e\u0441\u0442\u043e\u0432 \u0432 \u0434\u043e\u043c\u0435\u043d\u0435 ",(0,i.kt)("inlineCode",{parentName:"li"},"mysite.com"),".")),(0,i.kt)("p",null,"\u0422\u0430\u043a\u0436\u0435, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u0445\u043e\u0441\u0442, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'127.0.0.1'")," \u2014 \u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST IP"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'localhost'")," \u2014 \u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST LOCAL"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CREATE USER mira@'192.168.%.%'")," \u2014 \u042d\u043a\u0432\u0438\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"li"},"HOST LIKE"),".")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),'"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435"')),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"ClickHouse \u0442\u0440\u0430\u043a\u0442\u0443\u0435\u0442 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044e `user_name@'address'` \u043a\u0430\u043a \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0446\u0435\u043b\u0438\u043a\u043e\u043c. \u0422\u043e \u0435\u0441\u0442\u044c \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 `user_name`, \u043d\u043e \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0447\u0430\u0441\u0442\u044f\u043c\u0438 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438 \u043f\u043e\u0441\u043b\u0435 `@`, \u043d\u043e \u043b\u0443\u0447\u0448\u0435 \u0442\u0430\u043a \u043d\u0435 \u0434\u0435\u043b\u0430\u0442\u044c.\n")),(0,i.kt)("h2",{parentName:"div",id:"grantees"},"\u0421\u0435\u043a\u0446\u0438\u044f GRANTEES"),(0,i.kt)("p",{parentName:"div"},"\u0423\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u0438\u043b\u0438 \u0440\u043e\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-privileges"},"\u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438")," \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u043f\u0440\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u0438, \u0447\u0442\u043e \u044d\u0442\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d \u0432\u0435\u0441\u044c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,i.kt)("a",{parentName:"p",href:"/docs/ru/sql-reference/statements/grant#grant-privigele-syntax"},"GRANT OPTION"),". \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"GRANTEES"),":"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user")," \u2014 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"role")," \u2014 \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0440\u043e\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ANY")," \u2014 \u043b\u044e\u0431\u043e\u043c\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0438\u043b\u0438 \u043b\u044e\u0431\u043e\u0439 \u0440\u043e\u043b\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"NONE")," \u2014 \u043d\u0438\u043a\u043e\u043c\u0443 \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.")),(0,i.kt)("p",{parentName:"div"},"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043b\u044e\u0431\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u0440\u043e\u043b\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"EXCEPT"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE USER user1 GRANTEES ANY EXCEPT user2"),". \u042d\u0442\u043e \u043e\u0437\u043d\u0430\u0447\u0430\u0435\u0442, \u0447\u0442\u043e \u0435\u0441\u043b\u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"user1")," \u0438\u043c\u0435\u0435\u0442 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"GRANT OPTION"),", \u043e\u043d \u0441\u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0445 \u043b\u044e\u0431\u043e\u043c\u0443, \u043a\u0440\u043e\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"user2"),"."),(0,i.kt)("h2",{parentName:"div",id:"create-user-examples"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),(0,i.kt)("p",{parentName:"div"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"mira"),", \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u0435\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"qwerty"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER mira HOST IP '127.0.0.1' IDENTIFIED WITH sha256_password BY 'qwerty';\n")),(0,i.kt)("p",{parentName:"div"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",(0,i.kt)("inlineCode",{parentName:"p"},"mira")," \u0434\u043e\u043b\u0436\u0435\u043d \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u0445\u043e\u0441\u0442\u0435, \u0433\u0434\u0435 \u0437\u0430\u043f\u0443\u0449\u0435\u043d ClickHouse."),(0,i.kt)("p",{parentName:"div"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"john"),", \u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u043d\u0430 \u043d\u0435\u0433\u043e \u0440\u043e\u043b\u0438, \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0440\u043e\u043b\u0438 \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE role1, role2;\n")),(0,i.kt)("p",{parentName:"div"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"john")," \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 \u0435\u0433\u043e \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u0440\u043e\u043b\u0438:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE ALL;\n")),(0,i.kt)("p",{parentName:"div"},"\u041a\u043e\u0433\u0434\u0430 \u0440\u043e\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0443 ",(0,i.kt)("inlineCode",{parentName:"p"},"john"),", \u043e\u043d\u0430 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0442\u0430\u043d\u0435\u0442 \u0440\u043e\u043b\u044c\u044e \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."),(0,i.kt)("p",{parentName:"div"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"john")," \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u043e\u043b\u044f\u043c\u0438 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u0441\u0435 \u0435\u0433\u043e \u0431\u0443\u0434\u0443\u0449\u0438\u0435 \u0440\u043e\u043b\u0438, \u043a\u0440\u043e\u043c\u0435 ",(0,i.kt)("inlineCode",{parentName:"p"},"role1")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"role2"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john DEFAULT ROLE ALL EXCEPT role1, role2;\n")),(0,i.kt)("p",{parentName:"div"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"john")," \u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0435\u043c\u0443 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u0440\u0438\u0432\u0438\u043b\u0435\u0433\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u0441 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u043e\u043c ",(0,i.kt)("inlineCode",{parentName:"p"},"jack"),":"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER john GRANTEES jack;\n")))))}u.isMDXComponent=!0}}]);