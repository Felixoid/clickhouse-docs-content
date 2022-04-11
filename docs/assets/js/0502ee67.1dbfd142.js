"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66517],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(n),k=o,h=m["".concat(l,".").concat(k)]||m[k]||p[k]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98502:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_position:46,sidebar_label:"Troubleshooting"},l="Troubleshooting",u={unversionedId:"en/operations/troubleshooting",id:"en/operations/troubleshooting",title:"Troubleshooting",description:"-   Installation",source:"@site/docs/en/operations/troubleshooting.md",sourceDirName:"en/operations",slug:"/en/operations/troubleshooting",permalink:"/en/operations/troubleshooting",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/operations/troubleshooting.md",tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46,sidebar_label:"Troubleshooting"},sidebar:"english",previous:{title:"Secured Communication with Zookeeper",permalink:"/en/operations/ssl-zookeeper"},next:{title:"ClickHouse Upgrade",permalink:"/en/operations/update"}},c={},p=[{value:"Installation",id:"troubleshooting-installation-errors",level:2},{value:"You Cannot Get Deb Packages from ClickHouse Repository with Apt-get",id:"you-cannot-get-deb-packages-from-clickhouse-repository-with-apt-get",level:3},{value:"Connecting to the Server",id:"troubleshooting-accepts-no-connections",level:2},{value:"Server Is Not Running",id:"server-is-not-running",level:3},{value:"Configuration Parameters",id:"configuration-parameters",level:3},{value:"Query Processing",id:"troubleshooting-does-not-process-queries",level:2},{value:"Efficiency of Query Processing",id:"troubleshooting-too-slow",level:2}],m={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#troubleshooting-installation-errors"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#troubleshooting-accepts-no-connections"},"Connecting to the server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#troubleshooting-does-not-process-queries"},"Query processing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#troubleshooting-too-slow"},"Efficiency of query processing"))),(0,a.kt)("h2",{id:"troubleshooting-installation-errors"},"Installation"),(0,a.kt)("h3",{id:"you-cannot-get-deb-packages-from-clickhouse-repository-with-apt-get"},"You Cannot Get Deb Packages from ClickHouse Repository with Apt-get"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Check firewall settings."),(0,a.kt)("li",{parentName:"ul"},"If you cannot access the repository for any reason, download packages as described in the ",(0,a.kt)("a",{parentName:"li",href:"/en/getting-started/install"},"install guide")," article and install them manually using the ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo dpkg -i <packages>")," command. You will also need the ",(0,a.kt)("inlineCode",{parentName:"li"},"tzdata")," package.")),(0,a.kt)("h2",{id:"troubleshooting-accepts-no-connections"},"Connecting to the Server"),(0,a.kt)("p",null,"Possible issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The server is not running."),(0,a.kt)("li",{parentName:"ul"},"Unexpected or wrong configuration parameters.")),(0,a.kt)("h3",{id:"server-is-not-running"},"Server Is Not Running"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check if server is runnnig")),(0,a.kt)("p",null,"Command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service clickhouse-server status\n")),(0,a.kt)("p",null,"If the server is not running, start it with the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo service clickhouse-server start\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Check logs")),(0,a.kt)("p",null,"The main log of ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," is in ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/log/clickhouse-server/clickhouse-server.log")," by default."),(0,a.kt)("p",null,"If the server started successfully, you should see the strings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Information> Application: starting up.")," \u2014 Server started."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<Information> Application: Ready for connections.")," \u2014 Server is running and ready for connections.")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," start failed with a configuration error, you should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Error>")," string with an error description. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"2019.01.11 15:23:25.549505 [ 45 ] {} <Error> ExternalDictionaries: Failed reloading 'event2id' external dictionary: Poco::Exception. Code: 1000, e.code() = 111, e.displayText() = Connection refused, e.what() = Connection refused\n")),(0,a.kt)("p",null,"If you do not see an error at the end of the file, look through the entire file starting from the string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"<Information> Application: starting up.\n")),(0,a.kt)("p",null,"If you try to start a second instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," on the server, you see the following log:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"2019.01.11 15:25:11.151730 [ 1 ] {} <Information> : Starting ClickHouse 19.1.0 with revision 54413\n2019.01.11 15:25:11.154578 [ 1 ] {} <Information> Application: starting up\n2019.01.11 15:25:11.156361 [ 1 ] {} <Information> StatusFile: Status file ./status already exists - unclean restart. Contents:\nPID: 8510\nStarted at: 2019-01-11 15:24:23\nRevision: 54413\n\n2019.01.11 15:25:11.156673 [ 1 ] {} <Error> Application: DB::Exception: Cannot lock file ./status. Another server instance in same directory is already running.\n2019.01.11 15:25:11.156682 [ 1 ] {} <Information> Application: shutting down\n2019.01.11 15:25:11.156686 [ 1 ] {} <Debug> Application: Uninitializing subsystem: Logging Subsystem\n2019.01.11 15:25:11.156716 [ 2 ] {} <Information> BaseDaemon: Stop SignalListener thread\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"See system.d logs")),(0,a.kt)("p",null,"If you do not find any useful information in ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," logs or there aren\u2019t any logs, you can view ",(0,a.kt)("inlineCode",{parentName:"p"},"system.d")," logs using the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo journalctl -u clickhouse-server\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start clickhouse-server in interactive mode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo -u clickhouse /usr/bin/clickhouse-server --config-file /etc/clickhouse-server/config.xml\n")),(0,a.kt)("p",null,"This command starts the server as an interactive app with standard parameters of the autostart script. In this mode ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-server")," prints all the event messages in the console."),(0,a.kt)("h3",{id:"configuration-parameters"},"Configuration Parameters"),(0,a.kt)("p",null,"Check:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Docker settings."),(0,a.kt)("p",{parentName:"li"},"If you run ClickHouse in Docker in an IPv6 network, make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"network=host")," is set.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Endpoint settings."),(0,a.kt)("p",{parentName:"li"},"Check ",(0,a.kt)("a",{parentName:"p",href:"/en/operations/server-configuration-parameters/settings#server_configuration_parameters-listen_host"},"listen_host")," and ",(0,a.kt)("a",{parentName:"p",href:"/en/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port"},"tcp_port")," settings."),(0,a.kt)("p",{parentName:"li"},"ClickHouse server accepts localhost connections only by default.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"HTTP protocol settings."),(0,a.kt)("p",{parentName:"li"},"Check protocol settings for the HTTP API.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Secure connection settings."),(0,a.kt)("p",{parentName:"li"},"Check:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/en/operations/server-configuration-parameters/settings#server_configuration_parameters-tcp_port_secure"},"tcp_port_secure")," setting."),(0,a.kt)("li",{parentName:"ul"},"Settings for ",(0,a.kt)("a",{parentName:"li",href:"/en/operations/server-configuration-parameters/settings#server_configuration_parameters-openssl"},"SSL certificates"),".")),(0,a.kt)("p",{parentName:"li"},"Use proper parameters while connecting. For example, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"port_secure")," parameter with ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse_client"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"User settings."),(0,a.kt)("p",{parentName:"li"},"You might be using the wrong user name or password."))),(0,a.kt)("h2",{id:"troubleshooting-does-not-process-queries"},"Query Processing"),(0,a.kt)("p",null,"If ClickHouse is not able to process the query, it sends an error description to the client. In the ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," you get a description of the error in the console. If you are using the HTTP interface, ClickHouse sends the error description in the response body. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'http://localhost:8123/' --data-binary \"SELECT a\"\nCode: 47, e.displayText() = DB::Exception: Unknown identifier: a. Note that there are no tables (FROM clause) in your query, context: required_names: 'a' source_tables: table_aliases: private_aliases: column_aliases: public_columns: 'a' masked_columns: array_join_columns: source_columns: , e.what() = DB::Exception\n")),(0,a.kt)("p",null,"If you start ",(0,a.kt)("inlineCode",{parentName:"p"},"clickhouse-client")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"stack-trace")," parameter, ClickHouse returns the server stack trace with the description of an error."),(0,a.kt)("p",null,"You might see a message about a broken connection. In this case, you can repeat the query. If the connection breaks every time you perform the query, check the server logs for errors."),(0,a.kt)("h2",{id:"troubleshooting-too-slow"},"Efficiency of Query Processing"),(0,a.kt)("p",null,"If you see that ClickHouse is working too slowly, you need to profile the load on the server resources and network for your queries."),(0,a.kt)("p",null,"You can use the clickhouse-benchmark utility to profile queries. It shows the number of queries processed per second, the number of rows processed per second, and percentiles of query processing times."))}k.isMDXComponent=!0}}]);