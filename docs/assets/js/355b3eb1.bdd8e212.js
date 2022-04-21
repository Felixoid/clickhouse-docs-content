"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[93764],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=p(n),m=o,d=k["".concat(s,".").concat(m)]||k[m]||c[m]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},98997:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={sidebar_position:46,sidebar_label:"\u5e38\u89c1\u95ee\u9898"},s="\u5e38\u89c1\u95ee\u9898",p={unversionedId:"zh/operations/troubleshooting",id:"zh/operations/troubleshooting",title:"\u5e38\u89c1\u95ee\u9898",description:"troubleshooting}",source:"@site/docs/zh/operations/troubleshooting.md",sourceDirName:"zh/operations",slug:"/zh/operations/troubleshooting",permalink:"/docs/zh/operations/troubleshooting",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/zh/operations/troubleshooting.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"\u5e38\u89c1\u95ee\u9898"},sidebar:"chinese",previous:{title:"\u76d1\u63a7",permalink:"/docs/zh/operations/monitoring"},next:{title:"\u66f4\u65b0",permalink:"/docs/zh/operations/update"}},u={},c=[{value:"\u5b89\u88c5",id:"troubleshooting-installation-errors",level:2},{value:"\u60a8\u65e0\u6cd5\u4f7f\u7528Apt-get\u4eceClickHouse\u5b58\u50a8\u5e93\u83b7\u53d6Deb\u8f6f\u4ef6\u5305",id:"you-cannot-get-deb-packages-from-clickhouse-repository-with-apt-get",level:3},{value:"\u8fde\u63a5\u5230\u670d\u52a1\u5668",id:"troubleshooting-accepts-no-connections",level:2},{value:"\u670d\u52a1\u5668\u672a\u8fd0\u884c",id:"server-is-not-running",level:3},{value:"\u914d\u7f6e\u53c2\u6570",id:"configuration-parameters",level:3},{value:"\u67e5\u8be2\u5904\u7406",id:"troubleshooting-does-not-process-queries",level:2},{value:"\u67e5\u8be2\u5904\u7406\u6548\u7387",id:"troubleshooting-too-slow",level:2}],k={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#troubleshooting-installation-errors"},"\u5b89\u88c5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#troubleshooting-accepts-no-connections"},"\u8fde\u63a5\u5230\u670d\u52a1\u5668")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#troubleshooting-does-not-process-queries"},"\u67e5\u8be2\u5904\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#troubleshooting-too-slow"},"\u67e5\u8be2\u5904\u7406\u6548\u7387"))),(0,a.kt)("h2",{id:"troubleshooting-installation-errors"},"\u5b89\u88c5"),(0,a.kt)("h3",{id:"you-cannot-get-deb-packages-from-clickhouse-repository-with-apt-get"},"\u60a8\u65e0\u6cd5\u4f7f\u7528Apt-get\u4eceClickHouse\u5b58\u50a8\u5e93\u83b7\u53d6Deb\u8f6f\u4ef6\u5305"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u9632\u706b\u5899\u8bbe\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u51fa\u4e8e\u4efb\u4f55\u539f\u56e0\u65e0\u6cd5\u8bbf\u95ee\u5b58\u50a8\u5e93\uff0c\u8bf7\u6309\u7167",(0,a.kt)("a",{parentName:"li",href:"/docs/zh/getting-started/"},"\u5f00\u59cb"),"\u4e2d\u7684\u63cf\u8ff0\u4e0b\u8f7d\u8f6f\u4ef6\u5305\uff0c\u5e76\u4f7f\u7528\u547d\u4ee4 ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo dpkg -i <packages>")," \u624b\u52a8\u5b89\u88c5\u5b83\u4eec\u3002\u9664\u6b64\u4e4b\u5916\u4f60\u8fd8\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"li"},"tzdata")," \u5305\u3002")),(0,a.kt)("h2",{id:"troubleshooting-accepts-no-connections"},"\u8fde\u63a5\u5230\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u53ef\u80fd\u51fa\u73b0\u7684\u95ee\u9898:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u672a\u8fd0\u884c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u610f\u5916\u6216\u9519\u8bef\u7684\u914d\u7f6e\u53c2\u6570\u3002")),(0,a.kt)("h3",{id:"server-is-not-running"},"\u670d\u52a1\u5668\u672a\u8fd0\u884c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c")),(0,a.kt)("p",null,"\u547d\u4ee4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service clickhouse-server status\n")),(0,a.kt)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u6ca1\u6709\u8fd0\u884c\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u542f\u52a8\u5b83:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service clickhouse-server start\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u68c0\u67e5\u65e5\u5fd7")),(0,a.kt)("p",null,"\u4e3b\u65e5\u5fd7 ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," \u9ed8\u8ba4\u60c5\u51b5\u662f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/clickhouse-server/clickhouse-server.log")," \u4e0b\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u670d\u52a1\u5668\u6210\u529f\u542f\u52a8\uff0c\u60a8\u5e94\u8be5\u770b\u5230\u5b57\u7b26\u4e32:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Information> Application: starting up.")," \u2014 Server started."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Information> Application: Ready for connections.")," \u2014 Server is running and ready for connections.")),(0,a.kt)("p",null,"\u5982\u679c ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," \u542f\u52a8\u5931\u8d25\u4e0e\u914d\u7f6e\u9519\u8bef\uff0c\u4f60\u5e94\u8be5\u770b\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"<Error>")," \u5177\u6709\u9519\u8bef\u63cf\u8ff0\u7684\u5b57\u7b26\u4e32\u3002 \u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"2019.01.11 15:23:25.549505 [ 45 ] {} <Error> ExternalDictionaries: Failed reloading 'event2id' external dictionary: Poco::Exception. Code: 1000, e.code() = 111, e.displayText() = Connection refused, e.what() = Connection refused\n")),(0,a.kt)("p",null,"\u5982\u679c\u5728\u6587\u4ef6\u672b\u5c3e\u6ca1\u6709\u770b\u5230\u9519\u8bef\uff0c\u8bf7\u4ece\u5982\u4e0b\u5b57\u7b26\u4e32\u5f00\u59cb\u67e5\u770b\u6574\u4e2a\u6587\u4ef6:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"<Information> Application: starting up.\n")),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u5c1d\u8bd5\u5728\u670d\u52a1\u5668\u4e0a\u542f\u52a8\u7b2c\u4e8c\u4e2a\u5b9e\u4f8b ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," \uff0c\u60a8\u5c06\u770b\u5230\u4ee5\u4e0b\u65e5\u5fd7:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"2019.01.11 15:25:11.151730 [ 1 ] {} <Information> : Starting ClickHouse 19.1.0 with revision 54413\n2019.01.11 15:25:11.154578 [ 1 ] {} <Information> Application: starting up\n2019.01.11 15:25:11.156361 [ 1 ] {} <Information> StatusFile: Status file ./status already exists - unclean restart. Contents:\nPID: 8510\nStarted at: 2019-01-11 15:24:23\nRevision: 54413\n\n2019.01.11 15:25:11.156673 [ 1 ] {} <Error> Application: DB::Exception: Cannot lock file ./status. Another server instance in same directory is already running.\n2019.01.11 15:25:11.156682 [ 1 ] {} <Information> Application: shutting down\n2019.01.11 15:25:11.156686 [ 1 ] {} <Debug> Application: Uninitializing subsystem: Logging Subsystem\n2019.01.11 15:25:11.156716 [ 2 ] {} <Information> BaseDaemon: Stop SignalListener thread\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u67e5\u770b\u7cfb\u7edf\u65e5\u5fd7")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," \u6ca1\u6709\u627e\u5230\u4efb\u4f55\u6709\u7528\u7684\u4fe1\u606f\u6216\u6839\u672c\u6ca1\u6709\u4efb\u4f55\u65e5\u5fd7\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4\u67e5\u770b ",(0,a.kt)("inlineCode",{parentName:"p"},"system.d")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo journalctl -u clickhouse-server\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5728\u4ea4\u4e92\u6a21\u5f0f\u4e0b\u542f\u52a8clickhouse\u670d\u52a1\u5668")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo -u clickhouse /usr/bin/clickhouse-server --config-file /etc/clickhouse-server/config.xml\n")),(0,a.kt)("p",null,"\u6b64\u547d\u4ee4\u5c06\u670d\u52a1\u5668\u4f5c\u4e3a\u5e26\u6709\u81ea\u52a8\u542f\u52a8\u811a\u672c\u6807\u51c6\u53c2\u6570\u7684\u4ea4\u4e92\u5f0f\u5e94\u7528\u7a0b\u5e8f\u542f\u52a8\u3002 \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," \u6253\u5370\u63a7\u5236\u53f0\u4e2d\u7684\u6240\u6709\u4e8b\u4ef6\u6d88\u606f\u3002"),(0,a.kt)("h3",{id:"configuration-parameters"},"\u914d\u7f6e\u53c2\u6570"),(0,a.kt)("p",null,"\u68c0\u67e5:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Docker\u8bbe\u7f6e\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u5728IPv6\u7f51\u7edc\u4e2d\u7684Docker\u4e2d\u8fd0\u884cClickHouse\uff0c\u8bf7\u786e\u4fdd ",(0,a.kt)("inlineCode",{parentName:"p"},"network=host")," \u88ab\u8bbe\u7f6e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7aef\u70b9\u8bbe\u7f6e\u3002"),(0,a.kt)("p",{parentName:"li"},"\u68c0\u67e5 ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-listen_host"},"listen_host")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port"},"tcp_port")," \u8bbe\u7f6e\u3002"),(0,a.kt)("p",{parentName:"li"},"ClickHouse\u670d\u52a1\u5668\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4ec5\u63a5\u53d7\u672c\u5730\u4e3b\u673a\u8fde\u63a5\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"HTTP\u534f\u8bae\u8bbe\u7f6e\u3002"),(0,a.kt)("p",{parentName:"li"},"\u68c0\u67e5HTTP API\u7684\u534f\u8bae\u8bbe\u7f6e\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b89\u5168\u8fde\u63a5\u8bbe\u7f6e\u3002"),(0,a.kt)("p",{parentName:"li"},"\u68c0\u67e5:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port_secure"},"tcp_port_secure")," \u8bbe\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/zh/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},"SSL\u8bc1\u4e66")," \u8bbe\u7f6e.")),(0,a.kt)("p",{parentName:"li"},"\u8fde\u63a5\u65f6\u4f7f\u7528\u6b63\u786e\u7684\u53c2\u6570\u3002 \u4f8b\u5982\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse_client")," \u7684\u65f6\u5019\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"port_secure")," \u53c2\u6570 .")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u8bbe\u7f6e\u3002"),(0,a.kt)("p",{parentName:"li"},"\u60a8\u53ef\u80fd\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u7528\u6237\u540d\u6216\u5bc6\u7801\u3002"))),(0,a.kt)("h2",{id:"troubleshooting-does-not-process-queries"},"\u67e5\u8be2\u5904\u7406"),(0,a.kt)("p",null,"\u5982\u679cClickHouse\u65e0\u6cd5\u5904\u7406\u67e5\u8be2\uff0c\u5b83\u4f1a\u5411\u5ba2\u6237\u7aef\u53d1\u9001\u9519\u8bef\u63cf\u8ff0\u3002 \u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," \u60a8\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u4e2d\u83b7\u5f97\u9519\u8bef\u7684\u63cf\u8ff0\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662fHTTP\u63a5\u53e3\uff0cClickHouse\u4f1a\u5728\u54cd\u5e94\u6b63\u6587\u4e2d\u53d1\u9001\u9519\u8bef\u63cf\u8ff0\u3002 \u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'http://localhost:8123/' --data-binary \"SELECT a\"\nCode: 47, e.displayText() = DB::Exception: Unknown identifier: a. Note that there are no tables (FROM clause) in your query, context: required_names: 'a' source_tables: table_aliases: private_aliases: column_aliases: public_columns: 'a' masked_columns: array_join_columns: source_columns: , e.what() = DB::Exception\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," \u65f6\u8bbe\u7f6e\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"stack-trace")," \u53c2\u6570\uff0cClickHouse\u8fd4\u56de\u5305\u542b\u9519\u8bef\u63cf\u8ff0\u7684\u670d\u52a1\u5668\u5806\u6808\u8ddf\u8e2a\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u80fd\u4f1a\u770b\u5230\u4e00\u6761\u5173\u4e8e\u8fde\u63a5\u4e2d\u65ad\u7684\u6d88\u606f\u3002 \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u91cd\u590d\u67e5\u8be2\u3002 \u5982\u679c\u6bcf\u6b21\u6267\u884c\u67e5\u8be2\u65f6\u8fde\u63a5\u4e2d\u65ad\uff0c\u8bf7\u68c0\u67e5\u670d\u52a1\u5668\u65e5\u5fd7\u4e2d\u662f\u5426\u5b58\u5728\u9519\u8bef\u3002"),(0,a.kt)("h2",{id:"troubleshooting-too-slow"},"\u67e5\u8be2\u5904\u7406\u6548\u7387"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u53d1\u73b0ClickHouse\u5de5\u4f5c\u901f\u5ea6\u592a\u6162\uff0c\u5219\u9700\u8981\u4e3a\u67e5\u8be2\u5206\u6790\u670d\u52a1\u5668\u8d44\u6e90\u548c\u7f51\u7edc\u7684\u8d1f\u8f7d\u3002"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528clickhouse-benchmark\u5b9e\u7528\u7a0b\u5e8f\u6765\u5206\u6790\u67e5\u8be2\u3002 \u5b83\u663e\u793a\u6bcf\u79d2\u5904\u7406\u7684\u67e5\u8be2\u6570\u3001\u6bcf\u79d2\u5904\u7406\u7684\u884c\u6570\u4ee5\u53ca\u67e5\u8be2\u5904\u7406\u65f6\u95f4\u7684\u767e\u5206\u4f4d\u6570\u3002"))}m.isMDXComponent=!0}}]);