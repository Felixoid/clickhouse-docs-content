"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[78899],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},27054:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={sidebar_position:80,sidebar_label:"URL"},s="URL Table Engine",p={unversionedId:"en/engines/table-engines/special/url",id:"en/engines/table-engines/special/url",title:"URL Table Engine",description:"table_engines-url}",source:"@site/docs/en/engines/table-engines/special/url.md",sourceDirName:"en/engines/table-engines/special",slug:"/en/engines/table-engines/special/url",permalink:"/docs/en/engines/table-engines/special/url",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/engines/table-engines/special/url.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80,sidebar_label:"URL"},sidebar:"english",previous:{title:"Join",permalink:"/docs/en/engines/table-engines/special/join"},next:{title:"View",permalink:"/docs/en/engines/table-engines/special/view"}},u={},c=[{value:"Usage",id:"using-the-engine-in-the-clickhouse-server",level:2},{value:"Example",id:"example",level:2},{value:"Details of Implementation",id:"details-of-implementation",level:2}],m={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"table_engines-url"},"URL Table Engine"),(0,i.kt)("p",null,"Queries data to/from a remote HTTP/HTTPS server. This engine is similar to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/engines/table-engines/special/file"},"File")," engine."),(0,i.kt)("p",null,"Syntax: ",(0,i.kt)("inlineCode",{parentName:"p"},"URL(URL [,Format] [,CompressionMethod])")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," parameter must conform to the structure of a Uniform Resource Locator. The specified URL must point to a server that uses HTTP or HTTPS. This does not require any additional headers for getting a response from the server.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Format")," must be one that ClickHouse can use in ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries and, if necessary, in ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERTs"),". For the full list of supported formats, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/interfaces/formats#formats"},"Formats"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"CompressionMethod")," indicates that whether the HTTP body should be compressed. If the compression is enabled, the HTTP packets sent by the URL engine contain 'Content-Encoding' header to indicate which compression method is used. "))),(0,i.kt)("p",null,"To enable compression, please first make sure the remote HTTP endpoint indicated by the ",(0,i.kt)("inlineCode",{parentName:"p"},"URL")," parameter supports corresponding compression algorithm."),(0,i.kt)("p",null,"The supported ",(0,i.kt)("inlineCode",{parentName:"p"},"CompressionMethod")," should be one of following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"gzip or gz"),(0,i.kt)("li",{parentName:"ul"},"deflate"),(0,i.kt)("li",{parentName:"ul"},"brotli or br"),(0,i.kt)("li",{parentName:"ul"},"lzma or xz"),(0,i.kt)("li",{parentName:"ul"},"zstd or zst"),(0,i.kt)("li",{parentName:"ul"},"lz4"),(0,i.kt)("li",{parentName:"ul"},"bz2"),(0,i.kt)("li",{parentName:"ul"},"snappy"),(0,i.kt)("li",{parentName:"ul"},"none")),(0,i.kt)("h2",{id:"using-the-engine-in-the-clickhouse-server"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries are transformed to ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"GET")," requests,\nrespectively. For processing ",(0,i.kt)("inlineCode",{parentName:"p"},"POST")," requests, the remote server must support\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chunked_transfer_encoding"},"Chunked transfer encoding"),"."),(0,i.kt)("p",null,"You can limit the maximum number of HTTP GET redirect hops using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/operations/settings/settings#setting-max_http_get_redirects"},"max_http_get_redirects")," setting."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"url_engine_table")," table on the server :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE url_engine_table (word String, value UInt64)\nENGINE=URL('http://127.0.0.1:12345/', CSV)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," Create a basic HTTP server using the standard Python 3 tools and\nstart it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python3"},"from http.server import BaseHTTPRequestHandler, HTTPServer\n\nclass CSVHTTPServer(BaseHTTPRequestHandler):\n    def do_GET(self):\n        self.send_response(200)\n        self.send_header('Content-type', 'text/csv')\n        self.end_headers()\n\n        self.wfile.write(bytes('Hello,1\\nWorld,2\\n', \"utf-8\"))\n\nif __name__ == \"__main__\":\n    server_address = ('127.0.0.1', 12345)\n    HTTPServer(server_address, CSVHTTPServer).serve_forever()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ python3 server.py\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.")," Request data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM url_engine_table\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500word\u2500\u2500\u252c\u2500value\u2500\u2510\n\u2502 Hello \u2502     1 \u2502\n\u2502 World \u2502     2 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"details-of-implementation"},"Details of Implementation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reads and writes can be parallel"),(0,i.kt)("li",{parentName:"ul"},"Not supported:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ALTER")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT...SAMPLE")," operations."),(0,i.kt)("li",{parentName:"ul"},"Indexes."),(0,i.kt)("li",{parentName:"ul"},"Replication.")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/table_engines/special/url/"},"Original article")," "))}d.isMDXComponent=!0}}]);