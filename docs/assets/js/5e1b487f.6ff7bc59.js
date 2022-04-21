"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[43313],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16679:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_label:"Geohash"},s="Functions for Working with Geohash",p={unversionedId:"en/sql-reference/functions/geo/geohash",id:"en/sql-reference/functions/geo/geohash",title:"Functions for Working with Geohash",description:"geohash}",source:"@site/docs/en/sql-reference/functions/geo/geohash.md",sourceDirName:"en/sql-reference/functions/geo",slug:"/en/sql-reference/functions/geo/geohash",permalink:"/docs/en/sql-reference/functions/geo/geohash",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/master/docs/en/sql-reference/functions/geo/geohash.md",tags:[],version:"current",frontMatter:{sidebar_label:"Geohash"},sidebar:"english",previous:{title:"Geographical Coordinates",permalink:"/docs/en/sql-reference/functions/geo/coordinates"},next:{title:"H3 Indexes",permalink:"/docs/en/sql-reference/functions/geo/h3"}},c={},u=[{value:"geohashEncode",id:"geohashencode",level:2},{value:"geohashDecode",id:"geohashdecode",level:2},{value:"geohashesInBox",id:"geohashesinbox",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"geohash"},"Functions for Working with Geohash"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Geohash"},"Geohash")," is the geocode system, which subdivides Earth\u2019s surface into buckets of grid shape and encodes each cell into a short string of letters and digits. It is a hierarchical data structure, so the longer is the geohash string, the more precise is the geographic location."),(0,o.kt)("p",null,"If you need to manually convert geographic coordinates to geohash strings, you can use ",(0,o.kt)("a",{parentName:"p",href:"http://geohash.org/"},"geohash.org"),"."),(0,o.kt)("h2",{id:"geohashencode"},"geohashEncode"),(0,o.kt)("p",null,"Encodes latitude and longitude as a ",(0,o.kt)("a",{parentName:"p",href:"#geohash"},"geohash"),"-string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"geohashEncode(longitude, latitude, [precision])\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input values")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"longitude - longitude part of the coordinate you want to encode. Floating in range",(0,o.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]")),(0,o.kt)("li",{parentName:"ul"},"latitude - latitude part of the coordinate you want to encode. Floating in range ",(0,o.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]")),(0,o.kt)("li",{parentName:"ul"},"precision - Optional, length of the resulting encoded string, defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"12"),". Integer in range ",(0,o.kt)("inlineCode",{parentName:"li"},"[1, 12]"),". Any value less than ",(0,o.kt)("inlineCode",{parentName:"li"},"1")," or greater than ",(0,o.kt)("inlineCode",{parentName:"li"},"12")," is silently converted to ",(0,o.kt)("inlineCode",{parentName:"li"},"12"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned values")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"alphanumeric ",(0,o.kt)("inlineCode",{parentName:"li"},"String")," of encoded coordinate (modified version of the base32-encoding alphabet is used).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashEncode(-5.60302734375, 42.593994140625, 0) AS res;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ezs42d000000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"geohashdecode"},"geohashDecode"),(0,o.kt)("p",null,"Decodes any ",(0,o.kt)("a",{parentName:"p",href:"#geohash"},"geohash"),"-encoded string into longitude and latitude."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Input values")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"encoded string - geohash-encoded string.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned values")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(longitude, latitude) - 2-tuple of ",(0,o.kt)("inlineCode",{parentName:"li"},"Float64")," values of longitude and latitude.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashDecode('ezs42') AS res;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500res\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 (-5.60302734375,42.60498046875) \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("h2",{id:"geohashesinbox"},"geohashesInBox"),(0,o.kt)("p",null,"Returns an array of ",(0,o.kt)("a",{parentName:"p",href:"#geohash"},"geohash"),"-encoded strings of given precision that fall inside and intersect boundaries of given box, basically a 2D grid flattened into array."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"geohashesInBox(longitude_min, latitude_min, longitude_max, latitude_max, precision)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"longitude_min")," \u2014 Minimum longitude. Range: ",(0,o.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),". Type: ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"latitude_min")," \u2014 Minimum latitude. Range: ",(0,o.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),". Type: ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"longitude_max")," \u2014 Maximum longitude. Range: ",(0,o.kt)("inlineCode",{parentName:"li"},"[-180\xb0, 180\xb0]"),". Type: ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"latitude_max")," \u2014 Maximum latitude. Range: ",(0,o.kt)("inlineCode",{parentName:"li"},"[-90\xb0, 90\xb0]"),". Type: ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/float"},"Float"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"precision")," \u2014 Geohash precision. Range: ",(0,o.kt)("inlineCode",{parentName:"li"},"[1, 12]"),". Type: ",(0,o.kt)("a",{parentName:"li",href:"/docs/en/sql-reference/data-types/int-uint"},"UInt8"),".")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"All coordinate parameters must be of the same type: either ",(0,o.kt)("inlineCode",{parentName:"p"},"Float32")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Float64"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned values")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Array of precision-long strings of geohash-boxes covering provided area, you should not rely on order of items."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[]")," - Empty array if minimum latitude and longitude values aren\u2019t less than corresponding maximum values.")),(0,o.kt)("p",null,"Type: ",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/array"},"Array"),"(",(0,o.kt)("a",{parentName:"p",href:"/docs/en/sql-reference/data-types/string"},"String"),")."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Function throws an exception if resulting array is over 10\u2019000\u2019000 items long."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT geohashesInBox(24.48, 40.56, 24.785, 40.81, 4) AS thasos;\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500thasos\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 ['sx1q','sx1r','sx32','sx1w','sx1x','sx38'] \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/sql-reference/functions/geo/geohash"},"Original article")," "))}h.isMDXComponent=!0}}]);