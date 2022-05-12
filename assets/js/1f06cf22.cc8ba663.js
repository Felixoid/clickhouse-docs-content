"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[14259],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=i,g=m["".concat(l,".").concat(f)]||m[f]||c[f]||s;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49493:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),i=n(63366),s=(n(67294),n(3905)),a=["components"],o={sidebar_label:"Settings",sidebar_position:55,slug:"/ru/operations/settings/"},l="\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",p={unversionedId:"ru/operations/settings/index",id:"ru/operations/settings/index",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",description:"session-settings-intro}",source:"@site/docs/ru/operations/settings/index.md",sourceDirName:"ru/operations/settings",slug:"/ru/operations/settings/",permalink:"/docs/ru/operations/settings/",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/ru/operations/settings/index.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_label:"Settings",sidebar_position:55,slug:"/ru/operations/settings/"},sidebar:"russia",previous:{title:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430",permalink:"/docs/ru/operations/server-configuration-parameters/settings"},next:{title:"\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",permalink:"/docs/ru/operations/settings/permissions-for-queries"}},u={},c=[{value:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",id:"custom_settings",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"session-settings-intro"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,s.kt)("p",null,"\u0412\u0441\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043e\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0435 \u043d\u0438\u0436\u0435, \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u044b \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438.\n\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u043e\u0439\u043d\u043e, \u0442.\u0435. \u043a\u0430\u0436\u0434\u044b\u0439 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0441\u043b\u043e\u0439 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438."),(0,s.kt)("p",null,"\u0421\u043f\u043e\u0441\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a, \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u0443:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ",(0,s.kt)("inlineCode",{parentName:"p"},"users.xml"),"."),(0,s.kt)("p",{parentName:"li"},"\u0423\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0432 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0435 ",(0,s.kt)("inlineCode",{parentName:"p"},"<profiles>"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f \u0441\u0435\u0441\u0441\u0438\u0438."),(0,s.kt)("p",{parentName:"li"},"\u0418\u0437 \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 ClickHouse \u0432 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u044c\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441 ",(0,s.kt)("inlineCode",{parentName:"p"},"SET setting=value"),".\n\u0410\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ClickHouse-\u0441\u0435\u0441\u0441\u0438\u0438 \u0432 HTTP-\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0435, \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c HTTP-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,s.kt)("inlineCode",{parentName:"p"},"session_id"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u043a\u043e\u043d\u0441\u043e\u043b\u044c\u043d\u043e\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430 ClickHouse \u0432 \u043d\u0435 \u0438\u043d\u0442\u0435\u0440\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0440\u0435\u0436\u0438\u043c\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u0437\u0430\u043f\u0443\u0441\u043a\u0430 ",(0,s.kt)("inlineCode",{parentName:"li"},"--setting=value"),"."),(0,s.kt)("li",{parentName:"ul"},"\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 HTTP API \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0439\u0442\u0435 cgi-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b (",(0,s.kt)("inlineCode",{parentName:"li"},"URL?setting_1=value&setting_2=value..."),")."),(0,s.kt)("li",{parentName:"ul"},"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432 \u0441\u0435\u043a\u0446\u0438\u0438 ",(0,s.kt)("a",{parentName:"li",href:"/docs/ru/sql-reference/statements/select/#settings-in-select"},"SETTINGS")," \u0437\u0430\u043f\u0440\u043e\u0441\u0430 SELECT. \u042d\u0442\u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430, \u0430 \u043f\u043e\u0441\u043b\u0435 \u0435\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0441\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0434\u043e \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.")))),(0,s.kt)("p",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043d\u0435 \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442\u0441\u044f."),(0,s.kt)("h2",{id:"custom_settings"},"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),(0,s.kt)("p",null,"\u0412 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a \u043e\u0431\u0449\u0438\u043c ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/operations/settings/settings"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c"),", \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438 \u043c\u043e\u0433\u0443\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438."),(0,s.kt)("p",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0434\u043e\u043b\u0436\u043d\u043e \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u0432. \u0421\u043f\u0438\u0441\u043e\u043a \u044d\u0442\u0438\u0445 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u0432 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0437\u0430\u0434\u0430\u043d \u0432 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0435 ",(0,s.kt)("a",{parentName:"p",href:"/docs/ru/operations/server-configuration-parameters/settings#custom_settings_prefixes"},"custom_settings_prefixes")," \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-xml"},"<custom_settings_prefixes>custom_</custom_settings_prefixes>\n")),(0,s.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,s.kt)("inlineCode",{parentName:"p"},"SET"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SET custom_a = 123;\n")),(0,s.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,s.kt)("inlineCode",{parentName:"p"},"getSetting()"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT getSetting('custom_a');\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/ru/operations/server-configuration-parameters/settings"},"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u0430"))))}f.isMDXComponent=!0}}]);