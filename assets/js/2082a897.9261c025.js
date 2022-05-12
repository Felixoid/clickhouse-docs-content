"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[69989],{3905:function(e,n,t){t.d(n,{Zo:function(){return o},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},o=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),f=p(t),m=a,v=f["".concat(u,".").concat(m)]||f[m]||d[m]||i;return t?r.createElement(v,l(l({ref:n},o),{},{components:t})):r.createElement(v,l({ref:n},o))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=f;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},16450:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],s={sidebar_position:55,sidebar_label:"IP Addresses"},u="Functions for Working with IPv4 and IPv6 Addresses",p={unversionedId:"en/sql-reference/functions/ip-address-functions",id:"en/sql-reference/functions/ip-address-functions",title:"Functions for Working with IPv4 and IPv6 Addresses",description:"functions-for-working-with-ip-addresses}",source:"@site/docs/en/sql-reference/functions/ip-address-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/ip-address-functions",permalink:"/docs/en/sql-reference/functions/ip-address-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/ip-address-functions.md",tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55,sidebar_label:"IP Addresses"},sidebar:"english",previous:{title:"URLs",permalink:"/docs/en/sql-reference/functions/url-functions"},next:{title:"JSON",permalink:"/docs/en/sql-reference/functions/json-functions"}},o={},d=[{value:"IPv4NumToString(num)",id:"ipv4numtostringnum",level:2},{value:"IPv4StringToNum(s)",id:"ipv4stringtonums",level:2},{value:"IPv4StringToNumOrDefault(s)",id:"ipv4stringtonums",level:2},{value:"IPv4StringToNumOrNull(s)",id:"ipv4stringtonums",level:2},{value:"IPv4NumToStringClassC(num)",id:"ipv4numtostringclasscnum",level:2},{value:"IPv6NumToString(x)",id:"ipv6numtostringx",level:3},{value:"IPv6StringToNum",id:"ipv6stringtonums",level:2},{value:"IPv6StringToNumOrDefault(s)",id:"ipv6stringtonums",level:2},{value:"IPv6StringToNumOrNull(s)",id:"ipv6stringtonums",level:2},{value:"IPv4ToIPv6(x)",id:"ipv4toipv6x",level:2},{value:"cutIPv6(x, bytesToCutForIPv6, bytesToCutForIPv4)",id:"cutipv6x-bytestocutforipv6-bytestocutforipv4",level:2},{value:"IPv4CIDRToRange(ipv4, Cidr),",id:"ipv4cidrtorangeipv4-cidr",level:2},{value:"IPv6CIDRToRange(ipv6, Cidr),",id:"ipv6cidrtorangeipv6-cidr",level:2},{value:"toIPv4(string)",id:"toipv4string",level:2},{value:"toIPv4OrDefault(string)",id:"toipv4ordefaultstring",level:2},{value:"toIPv4OrNull(string)",id:"toipv4ornullstring",level:2},{value:"toIPv6",id:"toipv6string",level:2},{value:"IPv6StringToNumOrDefault(s)",id:"toipv6ordefaultstring",level:2},{value:"IPv6StringToNumOrNull(s)",id:"toipv6ornullstring",level:2},{value:"isIPv4String",id:"isipv4string",level:2},{value:"isIPv6String",id:"isipv6string",level:2},{value:"isIPAddressInRange",id:"isipaddressinrange",level:2}],f={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions-for-working-with-ip-addresses"},"Functions for Working with IPv4 and IPv6 Addresses"),(0,i.kt)("h2",{id:"ipv4numtostringnum"},"IPv4NumToString(num)"),(0,i.kt)("p",null,"Takes a UInt32 number. Interprets it as an IPv4 address in big endian. Returns a string containing the corresponding IPv4 address in the format A.B.C.d (dot-separated numbers in decimal form)."),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"INET_NTOA"),"."),(0,i.kt)("h2",{id:"ipv4stringtonums"},"IPv4StringToNum(s)"),(0,i.kt)("p",null,"The reverse function of IPv4NumToString. If the IPv4 address has an invalid format, it throws exception."),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"INET_ATON"),"."),(0,i.kt)("h2",{id:"ipv4stringtonums"},"IPv4StringToNumOrDefault(s)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv4StringToNum"),", but if the IPv4 address has an invalid format, it returns 0."),(0,i.kt)("h2",{id:"ipv4stringtonums"},"IPv4StringToNumOrNull(s)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv4StringToNum"),", but if the IPv4 address has an invalid format, it returns null."),(0,i.kt)("h2",{id:"ipv4numtostringclasscnum"},"IPv4NumToStringClassC(num)"),(0,i.kt)("p",null,"Similar to IPv4NumToString, but using xxx instead of the last octet."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    IPv4NumToStringClassC(ClientIP) AS k,\n    count() AS c\nFROM test.hits\nGROUP BY k\nORDER BY c DESC\nLIMIT 10\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500k\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500c\u2500\u2510\n\u2502 83.149.9.xxx   \u2502 26238 \u2502\n\u2502 217.118.81.xxx \u2502 26074 \u2502\n\u2502 213.87.129.xxx \u2502 25481 \u2502\n\u2502 83.149.8.xxx   \u2502 24984 \u2502\n\u2502 217.118.83.xxx \u2502 22797 \u2502\n\u2502 78.25.120.xxx  \u2502 22354 \u2502\n\u2502 213.87.131.xxx \u2502 21285 \u2502\n\u2502 78.25.121.xxx  \u2502 20887 \u2502\n\u2502 188.162.65.xxx \u2502 19694 \u2502\n\u2502 83.149.48.xxx  \u2502 17406 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Since using \u2018xxx\u2019 is highly unusual, this may be changed in the future. We recommend that you do not rely on the exact format of this fragment."),(0,i.kt)("h3",{id:"ipv6numtostringx"},"IPv6NumToString(x)"),(0,i.kt)("p",null,"Accepts a FixedString(16) value containing the IPv6 address in binary format. Returns a string containing this address in text format.\nIPv6-mapped IPv4 addresses are output in the format ::ffff:111.222.33.44."),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"INET6_NTOA"),"."),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv6NumToString(toFixedString(unhex('2A0206B8000000000000000000000011'), 16)) AS addr;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2a02:6b8::11 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    IPv6NumToString(ClientIP6 AS k),\n    count() AS c\nFROM hits_all\nWHERE EventDate = today() AND substring(ClientIP6, 1, 12) != unhex('00000000000000000000FFFF')\nGROUP BY k\nORDER BY c DESC\nLIMIT 10\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500IPv6NumToString(ClientIP6)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500c\u2500\u2510\n\u2502 2a02:2168:aaa:bbbb::2                   \u2502 24695 \u2502\n\u2502 2a02:2698:abcd:abcd:abcd:abcd:8888:5555 \u2502 22408 \u2502\n\u2502 2a02:6b8:0:fff::ff                      \u2502 16389 \u2502\n\u2502 2a01:4f8:111:6666::2                    \u2502 16016 \u2502\n\u2502 2a02:2168:888:222::1                    \u2502 15896 \u2502\n\u2502 2a01:7e00::ffff:ffff:ffff:222           \u2502 14774 \u2502\n\u2502 2a02:8109:eee:ee:eeee:eeee:eeee:eeee    \u2502 14443 \u2502\n\u2502 2a02:810b:8888:888:8888:8888:8888:8888  \u2502 14345 \u2502\n\u2502 2a02:6b8:0:444:4444:4444:4444:4444      \u2502 14279 \u2502\n\u2502 2a01:7e00::ffff:ffff:ffff:ffff          \u2502 13880 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n    IPv6NumToString(ClientIP6 AS k),\n    count() AS c\nFROM hits_all\nWHERE EventDate = today()\nGROUP BY k\nORDER BY c DESC\nLIMIT 10\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500IPv6NumToString(ClientIP6)\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500c\u2500\u2510\n\u2502 ::ffff:94.26.111.111       \u2502 747440 \u2502\n\u2502 ::ffff:37.143.222.4        \u2502 529483 \u2502\n\u2502 ::ffff:5.166.111.99        \u2502 317707 \u2502\n\u2502 ::ffff:46.38.11.77         \u2502 263086 \u2502\n\u2502 ::ffff:79.105.111.111      \u2502 186611 \u2502\n\u2502 ::ffff:93.92.111.88        \u2502 176773 \u2502\n\u2502 ::ffff:84.53.111.33        \u2502 158709 \u2502\n\u2502 ::ffff:217.118.11.22       \u2502 154004 \u2502\n\u2502 ::ffff:217.118.11.33       \u2502 148449 \u2502\n\u2502 ::ffff:217.118.11.44       \u2502 148243 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"ipv6stringtonums"},"IPv6StringToNum"),(0,i.kt)("p",null,"The reverse function of ",(0,i.kt)("a",{parentName:"p",href:"#ipv6numtostringx"},"IPv6NumToString"),". If the IPv6 address has an invalid format, it throws exception."),(0,i.kt)("p",null,"If the input string contains a valid IPv4 address, returns its IPv6 equivalent.\nHEX can be uppercase or lowercase."),(0,i.kt)("p",null,"Alias: ",(0,i.kt)("inlineCode",{parentName:"p"},"INET6_ATON"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"IPv6StringToNum(string)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Argument")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u2014 IP address. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IPv6 address in binary format.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/fixedstring"},"FixedString(16)"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT addr, cutIPv6(IPv6StringToNum(addr), 0, 0) FROM (SELECT ['notaddress', '127.0.0.1', '1111::ffff'] AS addr) ARRAY JOIN addr;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500cutIPv6(IPv6StringToNum(addr), 0, 0)\u2500\u2510\n\u2502 notaddress \u2502 ::                                   \u2502\n\u2502 127.0.0.1  \u2502 ::ffff:127.0.0.1                     \u2502\n\u2502 1111::ffff \u2502 1111::ffff                           \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#cutipv6x-bytestocutforipv6-bytestocutforipv4"},"cutIPv6"),".")),(0,i.kt)("h2",{id:"ipv6stringtonums"},"IPv6StringToNumOrDefault(s)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv6StringToNum"),", but if the IPv6 address has an invalid format, it returns 0."),(0,i.kt)("h2",{id:"ipv6stringtonums"},"IPv6StringToNumOrNull(s)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv6StringToNum"),", but if the IPv6 address has an invalid format, it returns null."),(0,i.kt)("h2",{id:"ipv4toipv6x"},"IPv4ToIPv6(x)"),(0,i.kt)("p",null,"Takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"UInt32")," number. Interprets it as an IPv4 address in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Endianness"},"big endian"),". Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedString(16)")," value containing the IPv6 address in binary format. Examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv6NumToString(IPv4ToIPv6(IPv4StringToNum('192.168.0.1'))) AS addr;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ::ffff:192.168.0.1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"cutipv6x-bytestocutforipv6-bytestocutforipv4"},"cutIPv6(x, bytesToCutForIPv6, bytesToCutForIPv4)"),(0,i.kt)("p",null,"Accepts a FixedString(16) value containing the IPv6 address in binary format. Returns a string containing the address of the specified number of bytes removed in text format. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    IPv6StringToNum('2001:0DB8:AC10:FE01:FEED:BABE:CAFE:F00D') AS ipv6,\n    IPv4ToIPv6(IPv4StringToNum('192.168.0.1')) AS ipv4\nSELECT\n    cutIPv6(ipv6, 2, 0),\n    cutIPv6(ipv4, 0, 2)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500cutIPv6(ipv6, 2, 0)\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500cutIPv6(ipv4, 0, 2)\u2500\u2510\n\u2502 2001:db8:ac10:fe01:feed:babe:cafe:0 \u2502 ::ffff:192.168.0.0  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"ipv4cidrtorangeipv4-cidr"},"IPv4CIDRToRange(ipv4, Cidr),"),(0,i.kt)("p",null,"Accepts an IPv4 and an UInt8 value containing the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"},"CIDR"),". Return a tuple with two IPv4 containing the lower range and the higher range of the subnet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv4CIDRToRange(toIPv4('192.168.5.2'), 16);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500IPv4CIDRToRange(toIPv4('192.168.5.2'), 16)\u2500\u2510\n\u2502 ('192.168.0.0','192.168.255.255')          \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"ipv6cidrtorangeipv6-cidr"},"IPv6CIDRToRange(ipv6, Cidr),"),(0,i.kt)("p",null,"Accepts an IPv6 and an UInt8 value containing the CIDR. Return a tuple with two IPv6 containing the lower range and the higher range of the subnet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT IPv6CIDRToRange(toIPv6('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 32);\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500IPv6CIDRToRange(toIPv6('2001:0db8:0000:85a3:0000:0000:ac1f:8001'), 32)\u2500\u2510\n\u2502 ('2001:db8::','2001:db8:ffff:ffff:ffff:ffff:ffff:ffff')                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"toipv4string"},"toIPv4(string)"),(0,i.kt)("p",null,"An alias to ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv4StringToNum()")," that takes a string form of IPv4 address and returns value of ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/domains/ipv4"},"IPv4")," type, which is binary equal to value returned by ",(0,i.kt)("inlineCode",{parentName:"p"},"IPv4StringToNum()"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    '171.225.130.45' as IPv4_string\nSELECT\n    toTypeName(IPv4StringToNum(IPv4_string)),\n    toTypeName(toIPv4(IPv4_string))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toTypeName(IPv4StringToNum(IPv4_string))\u2500\u252c\u2500toTypeName(toIPv4(IPv4_string))\u2500\u2510\n\u2502 UInt32                                   \u2502 IPv4                            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WITH\n    '171.225.130.45' as IPv4_string\nSELECT\n    hex(IPv4StringToNum(IPv4_string)),\n    hex(toIPv4(IPv4_string))\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hex(IPv4StringToNum(IPv4_string))\u2500\u252c\u2500hex(toIPv4(IPv4_string))\u2500\u2510\n\u2502 ABE1822D                          \u2502 ABE1822D                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"toipv4ordefaultstring"},"toIPv4OrDefault(string)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"toIPv4"),", but if the IPv4 address has an invalid format, it returns 0."),(0,i.kt)("h2",{id:"toipv4ornullstring"},"toIPv4OrNull(string)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"toIPv4"),", but if the IPv4 address has an invalid format, it returns null."),(0,i.kt)("h2",{id:"toipv6string"},"toIPv6"),(0,i.kt)("p",null,"Converts a string form of IPv6 address to ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/domains/ipv6"},"IPv6")," type. If the IPv6 address has an invalid format, returns an empty value.\nSimilar to ",(0,i.kt)("a",{parentName:"p",href:"#ipv6stringtonums"},"IPv6StringToNum")," function, which converts IPv6 address to binary format."),(0,i.kt)("p",null,"If the input string contains a valid IPv4 address, then the IPv6 equivalent of the IPv4 address is returned."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"toIPv6(string)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Argument")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u2014 IP address. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IP address.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/domains/ipv6"},"IPv6"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"WITH '2001:438:ffff::407d:1bc1' AS IPv6_string\nSELECT\n    hex(IPv6StringToNum(IPv6_string)),\n    hex(toIPv6(IPv6_string));\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500hex(IPv6StringToNum(IPv6_string))\u2500\u252c\u2500hex(toIPv6(IPv6_string))\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 20010438FFFF000000000000407D1BC1  \u2502 20010438FFFF000000000000407D1BC1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toIPv6('127.0.0.1');\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toIPv6('127.0.0.1')\u2500\u2510\n\u2502 ::ffff:127.0.0.1    \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"toipv6ordefaultstring"},"IPv6StringToNumOrDefault(s)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"toIPv6"),", but if the IPv6 address has an invalid format, it returns 0."),(0,i.kt)("h2",{id:"toipv6ornullstring"},"IPv6StringToNumOrNull(s)"),(0,i.kt)("p",null,"Same as ",(0,i.kt)("inlineCode",{parentName:"p"},"toIPv6"),", but if the IPv6 address has an invalid format, it returns null."),(0,i.kt)("h2",{id:"isipv4string"},"isIPv4String"),(0,i.kt)("p",null,"Determines whether the input string is an IPv4 address or not. If ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," is IPv6 address returns ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"isIPv4String(string)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u2014 IP address. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," is IPv4 address, ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," otherwise.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT addr, isIPv4String(addr) FROM ( SELECT ['0.0.0.0', '127.0.0.1', '::ffff:127.0.0.1'] AS addr ) ARRAY JOIN addr;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500isIPv4String(addr)\u2500\u2510\n\u2502 0.0.0.0          \u2502                  1 \u2502\n\u2502 127.0.0.1        \u2502                  1 \u2502\n\u2502 ::ffff:127.0.0.1 \u2502                  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"isipv6string"},"isIPv6String"),(0,i.kt)("p",null,"Determines whether the input string is an IPv6 address or not. If ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," is IPv4 address returns ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"isIPv6String(string)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")," \u2014 IP address. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," if ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," is IPv6 address, ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," otherwise.")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Examples")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT addr, isIPv6String(addr) FROM ( SELECT ['::', '1111::ffff', '::ffff:127.0.0.1', '127.0.0.1'] AS addr ) ARRAY JOIN addr;\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500addr\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500isIPv6String(addr)\u2500\u2510\n\u2502 ::               \u2502                  1 \u2502\n\u2502 1111::ffff       \u2502                  1 \u2502\n\u2502 ::ffff:127.0.0.1 \u2502                  1 \u2502\n\u2502 127.0.0.1        \u2502                  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h2",{id:"isipaddressinrange"},"isIPAddressInRange"),(0,i.kt)("p",null,"Determines if an IP address is contained in a network represented in the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"},"CIDR")," notation. Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," if true, or ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," otherwise."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Syntax")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"isIPAddressInRange(address, prefix)\n")),(0,i.kt)("p",null,"This function accepts both IPv4 and IPv6 addresses (and networks) represented as strings. It returns ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," if the IP version of the address and the CIDR don't match."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"address")," \u2014 An IPv4 or IPv6 address. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," \u2014 An IPv4 or IPv6 network prefix in CIDR. ",(0,i.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/string"},"String"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returned value")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT isIPAddressInRange('127.0.0.1', '127.0.0.0/8');\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500isIPAddressInRange('127.0.0.1', '127.0.0.0/8')\u2500\u2510\n\u2502                                              1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT isIPAddressInRange('127.0.0.1', 'ffff::/16');\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500isIPAddressInRange('127.0.0.1', 'ffff::/16')\u2500\u2510\n\u2502                                            0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Query:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT isIPAddressInRange('::ffff:192.168.0.1', '::ffff:192.168.0.4/128');\n")),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500isIPAddressInRange('::ffff:192.168.0.1', '::ffff:192.168.0.4/128')\u2500\u2510\n\u2502                                                                  0 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);