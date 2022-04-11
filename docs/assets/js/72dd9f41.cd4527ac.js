"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[89702],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(k,o(o({ref:n},p),{},{components:t})):a.createElement(k,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16062:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={},l="Kerberos",c={unversionedId:"en/operations/external-authenticators/kerberos",id:"en/operations/external-authenticators/kerberos",title:"Kerberos",description:"external-authenticators-kerberos}",source:"@site/docs/en/operations/external-authenticators/kerberos.md",sourceDirName:"en/operations/external-authenticators",slug:"/en/operations/external-authenticators/kerberos",permalink:"/en/operations/external-authenticators/kerberos",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/operations/external-authenticators/kerberos.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"External User Authenticators and Directories",permalink:"/en/operations/external-authenticators/"},next:{title:"LDAP",permalink:"/en/operations/external-authenticators/ldap"}},p={},m=[{value:"Enabling Kerberos in ClickHouse",id:"enabling-kerberos-in-clickhouse",level:2},{value:"Parameters:",id:"parameters",level:4},{value:"Kerberos as an external authenticator for existing users",id:"kerberos-as-an-external-authenticator-for-existing-users",level:2},{value:"Enabling Kerberos in <code>users.xml</code>",id:"enabling-kerberos-in-users-xml",level:3},{value:"Enabling Kerberos using SQL",id:"enabling-kerberos-using-sql",level:3}],u={toc:m};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"external-authenticators-kerberos"},"Kerberos"),(0,i.kt)("p",null,"Existing and properly configured ClickHouse users can be authenticated via Kerberos authentication protocol."),(0,i.kt)("p",null,"Currently, Kerberos can only be used as an external authenticator for existing users, which are defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"users.xml")," or in local access control paths. Those users may only use HTTP requests and must be able to authenticate using GSS-SPNEGO mechanism."),(0,i.kt)("p",null,"For this approach, Kerberos must be configured in the system and must be enabled in ClickHouse config."),(0,i.kt)("h2",{id:"enabling-kerberos-in-clickhouse"},"Enabling Kerberos in ClickHouse"),(0,i.kt)("p",null,"To enable Kerberos, one should include ",(0,i.kt)("inlineCode",{parentName:"p"},"kerberos")," section in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),". This section may contain additional parameters."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"principal")," - canonical service principal name that will be acquired and used when accepting security contexts.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This parameter is optional, if omitted, the default principal will be used.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"realm")," - a realm, that will be used to restrict authentication to only those requests whose initiator's realm matches it.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This parameter is optional, if omitted, no additional filtering by realm will be applied.")))),(0,i.kt)("p",null,"Example (goes into ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <kerberos />\n</clickhouse>\n")),(0,i.kt)("p",null,"With principal specification:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <kerberos>\n        <principal>HTTP/clickhouse.example.com@EXAMPLE.COM</principal>\n    </kerberos>\n</clickhouse>\n")),(0,i.kt)("p",null,"With filtering by realm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <kerberos>\n        <realm>EXAMPLE.COM</realm>\n    </kerberos>\n</clickhouse>\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can define only one ",(0,i.kt)("inlineCode",{parentName:"p"},"kerberos")," section. The presence of multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"kerberos")," sections will force ClickHouse to disable Kerberos authentication."))),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"principal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"realm")," sections cannot be specified at the same time. The presence of both ",(0,i.kt)("inlineCode",{parentName:"p"},"principal")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"realm")," sections will force ClickHouse to disable Kerberos authentication."))),(0,i.kt)("h2",{id:"kerberos-as-an-external-authenticator-for-existing-users"},"Kerberos as an external authenticator for existing users"),(0,i.kt)("p",null,"Kerberos can be used as a method for verifying the identity of locally defined users (users defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"users.xml")," or in local access control paths). Currently, ",(0,i.kt)("strong",{parentName:"p"},"only")," requests over the HTTP interface can be ",(0,i.kt)("em",{parentName:"p"},"kerberized")," (via GSS-SPNEGO mechanism)."),(0,i.kt)("p",null,"Kerberos principal name format usually follows this pattern:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"primary/instance@REALM"))),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"/instance")," part may occur zero or more times. ",(0,i.kt)("strong",{parentName:"p"},"The ",(0,i.kt)("em",{parentName:"strong"},"primary")," part of the canonical principal name of the initiator is expected to match the kerberized user name for authentication to succeed"),"."),(0,i.kt)("h3",{id:"enabling-kerberos-in-users-xml"},"Enabling Kerberos in ",(0,i.kt)("inlineCode",{parentName:"h3"},"users.xml")),(0,i.kt)("p",null,"In order to enable Kerberos authentication for the user, specify ",(0,i.kt)("inlineCode",{parentName:"p"},"kerberos")," section instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," or similar sections in the user definition."),(0,i.kt)("p",null,"Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"realm")," - a realm that will be used to restrict authentication to only those requests whose initiator's realm matches it.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This parameter is optional, if omitted, no additional filtering by realm will be applied.")))),(0,i.kt)("p",null,"Example (goes into ",(0,i.kt)("inlineCode",{parentName:"p"},"users.xml"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<clickhouse>\n    <!- ... --\x3e\n    <users>\n        <!- ... --\x3e\n        <my_user>\n            <!- ... --\x3e\n            <kerberos>\n                <realm>EXAMPLE.COM</realm>\n            </kerberos>\n        </my_user>\n    </users>\n</clickhouse>\n")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note that Kerberos authentication cannot be used alongside with any other authentication mechanism. The presence of any other sections like ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," alongside ",(0,i.kt)("inlineCode",{parentName:"p"},"kerberos")," will force ClickHouse to shutdown."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Reminder    ")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Note, that now, once user ",(0,i.kt)("inlineCode",{parentName:"p"},"my_user")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"kerberos"),", Kerberos must be enabled in the main ",(0,i.kt)("inlineCode",{parentName:"p"},"config.xml")," file as described previously."))),(0,i.kt)("h3",{id:"enabling-kerberos-using-sql"},"Enabling Kerberos using SQL"),(0,i.kt)("p",null,"When ",(0,i.kt)("a",{parentName:"p",href:"/en/operations/access-rights#access-control"},"SQL-driven Access Control and Account Management")," is enabled in ClickHouse, users identified by Kerberos can also be created using SQL statements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_user IDENTIFIED WITH kerberos REALM 'EXAMPLE.COM'\n")),(0,i.kt)("p",null,"...or, without filtering by realm:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER my_user IDENTIFIED WITH kerberos\n")))}d.isMDXComponent=!0}}]);