"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[70301],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,g=m["".concat(l,".").concat(f)]||m[f]||c[f]||s;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63493:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),o=["components"],a={sidebar_label:"Settings",sidebar_position:52,slug:"index"},l="Settings",u={unversionedId:"en/operations/settings/index",id:"en/operations/settings/index",title:"Settings",description:"There are multiple ways to make all the settings described in this section of documentation.",source:"@site/docs/en/operations/settings/index.md",sourceDirName:"en/operations/settings",slug:"/en/operations/settings/index",permalink:"/en/operations/settings/index",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/main/docs/en/operations/settings/index.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_label:"Settings",sidebar_position:52,slug:"index"},sidebar:"english",previous:{title:"Query Profiling",permalink:"/en/operations/optimizing-performance/sampling-query-profiler"},next:{title:"Permissions for Queries",permalink:"/en/operations/settings/permissions-for-queries"}},p={},c=[{value:"Custom Settings",id:"custom_settings",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"settings"},"Settings"),(0,s.kt)("p",null,"There are multiple ways to make all the settings described in this section of documentation."),(0,s.kt)("p",null,"Settings are configured in layers, so each subsequent layer redefines the previous settings."),(0,s.kt)("p",null,"Ways to configure settings, in order of priority:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Settings in the ",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml")," server configuration file."),(0,s.kt)("p",{parentName:"li"},"Set in the element ",(0,s.kt)("inlineCode",{parentName:"p"},"<profiles>"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Session settings."),(0,s.kt)("p",{parentName:"li"},"Send ",(0,s.kt)("inlineCode",{parentName:"p"},"SET setting=value")," from the ClickHouse console client in interactive mode.\nSimilarly, you can use ClickHouse sessions in the HTTP protocol. To do this, you need to specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"session_id")," HTTP parameter.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Query settings."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"When starting the ClickHouse console client in non-interactive mode, set the startup parameter ",(0,s.kt)("inlineCode",{parentName:"li"},"--setting=value"),"."),(0,s.kt)("li",{parentName:"ul"},"When using the HTTP API, pass CGI parameters (",(0,s.kt)("inlineCode",{parentName:"li"},"URL?setting_1=value&setting_2=value..."),")."),(0,s.kt)("li",{parentName:"ul"},"Make settings in the ",(0,s.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/select/#settings-in-select"},"SETTINGS")," clause of the SELECT query. The setting value is applied only to that query and is reset to default or previous value after the query is executed.")))),(0,s.kt)("p",null,"Settings that can only be made in the server config file are not covered in this section."),(0,s.kt)("h2",{id:"custom_settings"},"Custom Settings"),(0,s.kt)("p",null,"In addition to the common ",(0,s.kt)("a",{parentName:"p",href:"/en/operations/settings/"},"settings"),", users can define custom settings."),(0,s.kt)("p",null,"A custom setting name must begin with one of predefined prefixes. The list of these prefixes must be declared in the ",(0,s.kt)("a",{parentName:"p",href:"/en/operations/server-configuration-parameters/settings#custom_settings_prefixes"},"custom_settings_prefixes")," parameter in the server configuration file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<custom_settings_prefixes>custom_</custom_settings_prefixes>\n")),(0,s.kt)("p",null,"To define a custom setting use ",(0,s.kt)("inlineCode",{parentName:"p"},"SET")," command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET custom_a = 123;\n")),(0,s.kt)("p",null,"To get the current value of a custom setting use ",(0,s.kt)("inlineCode",{parentName:"p"},"getSetting()")," function:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT getSetting('custom_a');\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"See Also")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/en/operations/server-configuration-parameters/settings"},"Server Configuration Settings"))),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/settings/"},"Original article")," "))}f.isMDXComponent=!0}}]);